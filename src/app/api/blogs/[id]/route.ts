import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { isAuthenticated } from "@/lib/auth";
import { sanitizeBlogContent, sanitizeText } from "@/lib/sanitize";
import Blog from "@/models/Blog";

export const dynamic = "force-dynamic";

interface RouteParams {
  params: Promise<{ id: string }>;
}

const SLUG_REGEX = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const MAX_TITLE = 200;
const MAX_EXCERPT = 500;
const MAX_CONTENT = 500000;
const MAX_IMAGE = 5 * 1024 * 1024;
const MAX_TAGS = 20;
const ALLOWED_IMAGE_PREFIXES = ["data:image/", "/assets/", "http://", "https://"];

// GET /api/blogs/:id — get single blog by slug (public)
export async function GET(_req: NextRequest, { params }: RouteParams) {
  try {
    await connectDB();
    const { id } = await params;
    const blog = await Blog.findOne({ slug: id }).lean();

    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(blog);
  } catch (error) {
    console.error("GET /api/blogs/[id] error:", error);
    return NextResponse.json({ error: "Failed to fetch blog" }, { status: 500 });
  }
}

// PUT /api/blogs/:id — update blog by slug (protected)
export async function PUT(req: NextRequest, { params }: RouteParams) {
  if (!isAuthenticated(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await connectDB();
    const { id } = await params;
    const body = await req.json();

    const { title, slug, excerpt, content, author, image, category, tags, faqs, date, published } = body;

    // Validate types
    if (title && typeof title !== "string") return NextResponse.json({ error: "Invalid field types" }, { status: 400 });
    if (excerpt && typeof excerpt !== "string") return NextResponse.json({ error: "Invalid field types" }, { status: 400 });
    if (content && typeof content !== "string") return NextResponse.json({ error: "Invalid field types" }, { status: 400 });

    // Validate lengths
    if (title && title.length > MAX_TITLE) return NextResponse.json({ error: `Title must be under ${MAX_TITLE} characters` }, { status: 400 });
    if (excerpt && excerpt.length > MAX_EXCERPT) return NextResponse.json({ error: `Excerpt must be under ${MAX_EXCERPT} characters` }, { status: 400 });
    if (content && content.length > MAX_CONTENT) return NextResponse.json({ error: "Content is too large" }, { status: 400 });

    // Validate slug format
    if (slug && !SLUG_REGEX.test(slug)) {
      return NextResponse.json({ error: "Slug must be lowercase with hyphens only" }, { status: 400 });
    }

    // Validate tags
    if (tags && (!Array.isArray(tags) || tags.length > MAX_TAGS)) {
      return NextResponse.json({ error: `Tags must be an array of max ${MAX_TAGS} items` }, { status: 400 });
    }

    // Validate FAQs
    if (faqs && Array.isArray(faqs)) {
      if (faqs.length > 20) return NextResponse.json({ error: "Max 20 FAQs allowed" }, { status: 400 });
      for (const faq of faqs) {
        if (!faq.question || !faq.answer || typeof faq.question !== "string" || typeof faq.answer !== "string") {
          return NextResponse.json({ error: "Each FAQ must have a question and answer" }, { status: 400 });
        }
      }
    }

    // Validate image
    if (image && typeof image === "string") {
      if (image.length > MAX_IMAGE) {
        return NextResponse.json({ error: "Image is too large (max 5MB)" }, { status: 400 });
      }
      if (!ALLOWED_IMAGE_PREFIXES.some((p) => image.startsWith(p))) {
        return NextResponse.json({ error: "Invalid image format" }, { status: 400 });
      }
    }

    // If slug is being changed, check for conflicts
    if (slug && slug !== id) {
      const existing = await Blog.findOne({ slug });
      if (existing) {
        return NextResponse.json({ error: "A post with this slug already exists" }, { status: 409 });
      }
    }

    // Sanitize inputs
    const updated = await Blog.findOneAndUpdate(
      { slug: id },
      {
        title: title ? sanitizeText(title) : undefined,
        slug: slug || id,
        excerpt: excerpt ? sanitizeText(excerpt) : undefined,
        content: content ? sanitizeBlogContent(content) : undefined,
        author: author ? sanitizeText(author) : undefined,
        image,
        category: category ? sanitizeText(category) : undefined,
        tags: tags ? tags.map((t: string) => sanitizeText(t)) : undefined,
        faqs: faqs ? faqs.map((f: { question: string; answer: string }) => ({ question: sanitizeText(f.question), answer: sanitizeText(f.answer) })) : undefined,
        date,
        published,
      },
      { new: true }
    ).lean();

    if (!updated) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(updated);
  } catch (error) {
    console.error("PUT /api/blogs/[id] error:", error);
    return NextResponse.json({ error: "Failed to update blog" }, { status: 500 });
  }
}

// DELETE /api/blogs/:id — delete blog by slug (protected)
export async function DELETE(_req: NextRequest, { params }: RouteParams) {
  if (!isAuthenticated(_req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await connectDB();
    const { id } = await params;
    const deleted = await Blog.findOneAndDelete({ slug: id }).lean();

    if (!deleted) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Blog deleted successfully" });
  } catch (error) {
    console.error("DELETE /api/blogs/[id] error:", error);
    return NextResponse.json({ error: "Failed to delete blog" }, { status: 500 });
  }
}
