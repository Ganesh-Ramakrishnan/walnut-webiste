import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { isAuthenticated } from "@/lib/auth";
import { sanitizeBlogContent, sanitizeText } from "@/lib/sanitize";
import Changelog, { type ChangelogTag } from "@/models/Changelog";

export const dynamic = "force-dynamic";

const DATE_REGEX = /^\d{4}-\d{2}-\d{2}$/;
const ALLOWED_TAGS: ChangelogTag[] = ["NEW", "IMPROVED", "FIXED", "SECURITY"];
const MAX_VERSION = 50;
const MAX_RELEASE_NAME = 120;
const MAX_SUMMARY = 500;
const MAX_CONTENT = 500000; // ~500KB of HTML, matches blog limit

// GET /api/changelog — list (public, newest first)
export async function GET() {
  try {
    await connectDB();
    const entries = await Changelog.find({}).sort({ date: -1 }).lean();
    return NextResponse.json(entries);
  } catch (error) {
    console.error("GET /api/changelog error:", error);
    return NextResponse.json({ error: "Failed to fetch changelog" }, { status: 500 });
  }
}

// POST /api/changelog — create (protected)
export async function POST(req: NextRequest) {
  if (!isAuthenticated(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await connectDB();
    const body = await req.json();
    const { date, version, releaseName, summary, tag, content, published } = body;

    if (!date || typeof date !== "string" || !DATE_REGEX.test(date)) {
      return NextResponse.json({ error: "Date is required in YYYY-MM-DD format" }, { status: 400 });
    }
    if (version !== undefined && (typeof version !== "string" || version.length > MAX_VERSION)) {
      return NextResponse.json({ error: `Version must be a string under ${MAX_VERSION} characters` }, { status: 400 });
    }
    if (releaseName !== undefined && (typeof releaseName !== "string" || releaseName.length > MAX_RELEASE_NAME)) {
      return NextResponse.json({ error: `Release name must be a string under ${MAX_RELEASE_NAME} characters` }, { status: 400 });
    }
    if (summary !== undefined && (typeof summary !== "string" || summary.length > MAX_SUMMARY)) {
      return NextResponse.json({ error: `Summary must be a string under ${MAX_SUMMARY} characters` }, { status: 400 });
    }
    if (typeof tag !== "string" || !ALLOWED_TAGS.includes(tag as ChangelogTag)) {
      return NextResponse.json({ error: `Tag must be one of ${ALLOWED_TAGS.join(", ")}` }, { status: 400 });
    }
    if (typeof content !== "string" || !content.trim()) {
      return NextResponse.json({ error: "Content is required" }, { status: 400 });
    }
    if (content.length > MAX_CONTENT) {
      return NextResponse.json({ error: "Content is too large" }, { status: 400 });
    }

    const existing = await Changelog.findOne({ date });
    if (existing) {
      return NextResponse.json({ error: "An entry for this date already exists" }, { status: 409 });
    }

    const entry = await Changelog.create({
      date,
      version: version ? sanitizeText(version) : "",
      releaseName: releaseName ? sanitizeText(releaseName) : "",
      summary: summary ? sanitizeText(summary) : "",
      tag,
      content: sanitizeBlogContent(content),
      published: published !== false,
    });

    return NextResponse.json(entry, { status: 201 });
  } catch (error) {
    console.error("POST /api/changelog error:", error);
    return NextResponse.json({ error: "Failed to create changelog entry" }, { status: 500 });
  }
}
