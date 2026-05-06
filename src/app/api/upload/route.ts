import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { uploadToS3 } from "@/lib/s3";

export const dynamic = "force-dynamic";
// Allow streaming uploads up to 6 MB (Next.js body parser default is 4 MB).
export const maxDuration = 30;

const ALLOWED_PREFIXES = new Set(["blog", "changelog"]);
const ALLOWED_MIME = new Set([
  "image/png",
  "image/jpeg",
  "image/webp",
  "image/gif",
  "image/svg+xml",
]);
const MAX_BYTES = 5 * 1024 * 1024; // 5 MB

/**
 * POST /api/upload — multipart/form-data with a `file` field.
 * Optional `prefix` field ("blog" | "changelog") chooses the folder.
 *
 * Returns: { url: string }
 *
 * Auth: dashboard-only (same gate as /api/blogs).
 */
export async function POST(req: NextRequest) {
  if (!isAuthenticated(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return NextResponse.json(
      { error: "Expected multipart/form-data body" },
      { status: 400 }
    );
  }

  const file = form.get("file");
  const prefixRaw = form.get("prefix");
  const prefix =
    typeof prefixRaw === "string" && ALLOWED_PREFIXES.has(prefixRaw)
      ? (prefixRaw as "blog" | "changelog")
      : "blog";

  if (!(file instanceof File)) {
    return NextResponse.json({ error: "Missing file" }, { status: 400 });
  }
  if (!ALLOWED_MIME.has(file.type)) {
    return NextResponse.json(
      { error: `Unsupported file type: ${file.type}` },
      { status: 415 }
    );
  }
  if (file.size > MAX_BYTES) {
    return NextResponse.json(
      { error: `File too large (max ${Math.round(MAX_BYTES / 1024 / 1024)} MB)` },
      { status: 413 }
    );
  }

  try {
    const buf = Buffer.from(await file.arrayBuffer());
    const { url } = await uploadToS3(buf, file.type, prefix);
    return NextResponse.json({ url });
  } catch (err) {
    console.error("[/api/upload] S3 upload failed:", err);
    const message =
      err instanceof Error ? err.message : "Upload failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
