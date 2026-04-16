import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { isAuthenticated } from "@/lib/auth";
import { sanitizeBlogContent, sanitizeText } from "@/lib/sanitize";
import Changelog, { type ChangelogTag } from "@/models/Changelog";

export const dynamic = "force-dynamic";

interface RouteParams {
  params: Promise<{ id: string }>;
}

const DATE_REGEX = /^\d{4}-\d{2}-\d{2}$/;
const ALLOWED_TAGS: ChangelogTag[] = ["NEW", "IMPROVED", "FIXED", "SECURITY"];
const MAX_VERSION = 50;
const MAX_RELEASE_NAME = 120;
const MAX_SUMMARY = 500;
const MAX_CONTENT = 500000;

// GET /api/changelog/:id — single entry by date (public)
export async function GET(_req: NextRequest, { params }: RouteParams) {
  try {
    await connectDB();
    const { id } = await params;
    const entry = await Changelog.findOne({ date: id }).lean();
    if (!entry) {
      return NextResponse.json({ error: "Entry not found" }, { status: 404 });
    }
    return NextResponse.json(entry);
  } catch (error) {
    console.error("GET /api/changelog/[id] error:", error);
    return NextResponse.json({ error: "Failed to fetch entry" }, { status: 500 });
  }
}

// PUT /api/changelog/:id — update entry (protected)
export async function PUT(req: NextRequest, { params }: RouteParams) {
  if (!isAuthenticated(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await connectDB();
    const { id } = await params;
    const body = await req.json();
    const { date, version, releaseName, summary, tag, content, published } = body;

    const update: Record<string, unknown> = {};

    if (date !== undefined) {
      if (typeof date !== "string" || !DATE_REGEX.test(date)) {
        return NextResponse.json({ error: "Date must be in YYYY-MM-DD format" }, { status: 400 });
      }
      if (date !== id) {
        const existing = await Changelog.findOne({ date });
        if (existing) {
          return NextResponse.json({ error: "An entry for this date already exists" }, { status: 409 });
        }
      }
      update.date = date;
    }

    if (version !== undefined) {
      if (typeof version !== "string" || version.length > MAX_VERSION) {
        return NextResponse.json({ error: `Version must be a string under ${MAX_VERSION} characters` }, { status: 400 });
      }
      update.version = sanitizeText(version);
    }

    if (releaseName !== undefined) {
      if (typeof releaseName !== "string" || releaseName.length > MAX_RELEASE_NAME) {
        return NextResponse.json({ error: `Release name must be a string under ${MAX_RELEASE_NAME} characters` }, { status: 400 });
      }
      update.releaseName = sanitizeText(releaseName);
    }

    if (summary !== undefined) {
      if (typeof summary !== "string" || summary.length > MAX_SUMMARY) {
        return NextResponse.json({ error: `Summary must be a string under ${MAX_SUMMARY} characters` }, { status: 400 });
      }
      update.summary = sanitizeText(summary);
    }

    if (tag !== undefined) {
      if (typeof tag !== "string" || !ALLOWED_TAGS.includes(tag as ChangelogTag)) {
        return NextResponse.json({ error: `Tag must be one of ${ALLOWED_TAGS.join(", ")}` }, { status: 400 });
      }
      update.tag = tag;
    }

    if (content !== undefined) {
      if (typeof content !== "string" || !content.trim()) {
        return NextResponse.json({ error: "Content is required" }, { status: 400 });
      }
      if (content.length > MAX_CONTENT) {
        return NextResponse.json({ error: "Content is too large" }, { status: 400 });
      }
      update.content = sanitizeBlogContent(content);
    }

    if (published !== undefined) {
      update.published = !!published;
    }

    const updated = await Changelog.findOneAndUpdate({ date: id }, update, { new: true }).lean();
    if (!updated) {
      return NextResponse.json({ error: "Entry not found" }, { status: 404 });
    }
    return NextResponse.json(updated);
  } catch (error) {
    console.error("PUT /api/changelog/[id] error:", error);
    return NextResponse.json({ error: "Failed to update entry" }, { status: 500 });
  }
}

// DELETE /api/changelog/:id — delete entry (protected)
export async function DELETE(req: NextRequest, { params }: RouteParams) {
  if (!isAuthenticated(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await connectDB();
    const { id } = await params;
    const deleted = await Changelog.findOneAndDelete({ date: id }).lean();
    if (!deleted) {
      return NextResponse.json({ error: "Entry not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Entry deleted successfully" });
  } catch (error) {
    console.error("DELETE /api/changelog/[id] error:", error);
    return NextResponse.json({ error: "Failed to delete entry" }, { status: 500 });
  }
}
