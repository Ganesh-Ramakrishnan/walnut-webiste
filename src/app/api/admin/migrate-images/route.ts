import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { isAuthenticated } from "@/lib/auth";
import { uploadToS3 } from "@/lib/s3";
import Blog from "@/models/Blog";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

type MigrationRow = {
  slug: string;
  title: string;
  before: { kind: "base64" | "url" | "empty"; sizeKb: number; mime?: string };
  after?: { url: string };
  error?: string;
  status: "skipped" | "would-migrate" | "migrated" | "failed";
};

const ALLOWED_MIME = new Set([
  "image/png",
  "image/jpeg",
  "image/webp",
  "image/gif",
  "image/svg+xml",
]);

/**
 * POST /api/admin/migrate-images?confirm=true
 *
 * Migrates the featured `image` field of every Blog from a base64 data-URI
 * to an S3 URL. Without ?confirm=true it returns a dry-run report.
 *
 * In-content (HTML-embedded) images are NOT migrated by this pass — they're
 * a follow-up because they require parsing/rewriting the rich-text HTML.
 */
export async function POST(req: NextRequest) {
  if (!isAuthenticated(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const confirm = searchParams.get("confirm") === "true";

  await connectDB();
  const blogs = await Blog.find({}, { content: 0, faqs: 0 }).lean();

  const rows: MigrationRow[] = [];
  let totalSavedBytes = 0;

  for (const b of blogs) {
    const img = (b.image as string) || "";
    const before: MigrationRow["before"] = !img
      ? { kind: "empty", sizeKb: 0 }
      : img.startsWith("data:image/")
      ? { kind: "base64", sizeKb: Math.round(img.length / 1024), mime: img.slice(5, img.indexOf(";")) }
      : { kind: "url", sizeKb: Math.round(img.length / 1024) };

    if (before.kind !== "base64") {
      rows.push({
        slug: b.slug,
        title: b.title,
        before,
        status: "skipped",
      });
      continue;
    }

    if (!confirm) {
      rows.push({
        slug: b.slug,
        title: b.title,
        before,
        status: "would-migrate",
      });
      totalSavedBytes += img.length;
      continue;
    }

    // Confirmed run — actually migrate.
    try {
      const { mime, buffer } = parseDataUri(img);
      if (!ALLOWED_MIME.has(mime)) {
        throw new Error(`Unsupported MIME: ${mime}`);
      }
      const { url } = await uploadToS3(buffer, mime, "blog");
      // Update only the image field, leave everything else untouched.
      await Blog.updateOne({ _id: b._id }, { $set: { image: url } });
      rows.push({
        slug: b.slug,
        title: b.title,
        before,
        after: { url },
        status: "migrated",
      });
      totalSavedBytes += img.length;
    } catch (err) {
      rows.push({
        slug: b.slug,
        title: b.title,
        before,
        status: "failed",
        error: err instanceof Error ? err.message : String(err),
      });
    }
  }

  return NextResponse.json({
    dryRun: !confirm,
    totalBlogs: blogs.length,
    totalSavedKb: Math.round(totalSavedBytes / 1024),
    rows,
  });
}

function parseDataUri(uri: string): { mime: string; buffer: Buffer } {
  // data:image/png;base64,iVBORw0KGgo...
  const match = /^data:([^;]+);base64,(.+)$/.exec(uri);
  if (!match) throw new Error("Not a base64 data-URI");
  return {
    mime: match[1],
    buffer: Buffer.from(match[2], "base64"),
  };
}
