import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { isAuthenticated } from "@/lib/auth";
import { sanitizeBlogContent, sanitizeText } from "@/lib/sanitize";
import Blog from "@/models/Blog";

export const dynamic = "force-dynamic";

const SLUG_REGEX = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const MAX_TITLE = 200;
const MAX_EXCERPT = 500;
const MAX_CONTENT = 500000; // ~500KB for HTML content
const MAX_IMAGE = 5 * 1024 * 1024; // 5MB for Base64 image
const DEFAULT_IMAGES = [
  "/assets/blog/default-1.svg",
  "/assets/blog/default-2.svg",
  "/assets/blog/default-3.svg",
];
const MAX_TAGS = 20;
const ALLOWED_IMAGE_PREFIXES = ["data:image/", "/assets/", "http://", "https://"];

// GET /api/blogs — paginated list of blog posts (public).
//
// Query params:
//   page    1-based page number (default 1)
//   limit   posts per page (default 12, max 50)
//   cat     category name to filter by (matches Blog.category exactly).
//           "Latest" or omitted = no filter.
//   q       free-text search across title / excerpt / tags.
//
// Response:
//   { posts: BlogLite[], total: number, page: number, limit: number,
//     totalPages: number }
//
// Backwards-compat: when no query params are passed AND `?all=1` is set,
// returns the legacy un-paginated array. The dashboard listing still uses
// this. Public /blog page always uses pagination.
export async function GET(req: NextRequest) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);

    if (searchParams.get("all") === "1") {
      const blogs = await Blog.find({}, { content: 0, faqs: 0 })
        .sort({ date: -1 })
        .lean();
      return NextResponse.json(blogs);
    }

    const page = Math.max(1, parseInt(searchParams.get("page") || "1", 10) || 1);
    const limit = Math.min(
      50,
      Math.max(1, parseInt(searchParams.get("limit") || "6", 10) || 6)
    );
    const cat = (searchParams.get("cat") || "").trim();
    const q = (searchParams.get("q") || "").trim();

    const filter: Record<string, unknown> = {};
    if (cat && cat.toLowerCase() !== "latest") {
      filter.category = cat;
    }
    if (q) {
      // Escape regex special chars before constructing the OR query.
      const escaped = q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const re = new RegExp(escaped, "i");
      filter.$or = [{ title: re }, { excerpt: re }, { tags: re }];
    }

    const total = await Blog.countDocuments(filter);
    const totalPages = Math.max(1, Math.ceil(total / limit));
    const safePage = Math.min(page, totalPages);

    const posts = await Blog.find(filter, { content: 0, faqs: 0 })
      .sort({ date: -1 })
      .skip((safePage - 1) * limit)
      .limit(limit)
      .lean();

    return NextResponse.json({
      posts,
      total,
      page: safePage,
      limit,
      totalPages,
    });
  } catch (error) {
    console.error("GET /api/blogs error:", error);
    return NextResponse.json({ error: "Failed to fetch blogs" }, { status: 500 });
  }
}

// POST /api/blogs — create a new blog post (protected)
export async function POST(req: NextRequest) {
  if (!isAuthenticated(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await connectDB();
    const body = await req.json();

    const { title, slug, excerpt, content, author, authorTitle, authorLinkedin, image, category, tags, faqs, date, published, seoTitle, metaDescription, relatedLinks } = body;

    // Validate required fields
    if (!title || !slug || !excerpt || !content || !category) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Validate types
    if (typeof title !== "string" || typeof slug !== "string" || typeof excerpt !== "string" || typeof content !== "string" || typeof category !== "string") {
      return NextResponse.json({ error: "Invalid field types" }, { status: 400 });
    }

    // Validate lengths
    if (title.length > MAX_TITLE) return NextResponse.json({ error: `Title must be under ${MAX_TITLE} characters` }, { status: 400 });
    if (excerpt.length > MAX_EXCERPT) return NextResponse.json({ error: `Excerpt must be under ${MAX_EXCERPT} characters` }, { status: 400 });
    if (content.length > MAX_CONTENT) return NextResponse.json({ error: "Content is too large" }, { status: 400 });

    // Validate slug format
    if (!SLUG_REGEX.test(slug)) {
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

    // Check if slug already exists
    const existing = await Blog.findOne({ slug });
    if (existing) {
      return NextResponse.json({ error: "A post with this slug already exists" }, { status: 409 });
    }

    // Sanitize inputs
    const blog = await Blog.create({
      title: sanitizeText(title),
      slug,
      excerpt: sanitizeText(excerpt),
      content: sanitizeBlogContent(content),
      author: sanitizeText(author || "WalnutAI Team"),
      authorTitle: authorTitle ? sanitizeText(authorTitle) : "",
      authorLinkedin: authorLinkedin ? sanitizeText(authorLinkedin) : "",
      image: image || DEFAULT_IMAGES[Math.floor(Math.random() * DEFAULT_IMAGES.length)],
      category: sanitizeText(category),
      tags: tags ? tags.map((t: string) => sanitizeText(t)) : [],
      faqs: faqs ? faqs.map((f: { question: string; answer: string }) => ({ question: sanitizeText(f.question), answer: sanitizeText(f.answer) })) : [],
      seoTitle: seoTitle ? sanitizeText(seoTitle) : "",
      metaDescription: metaDescription ? sanitizeText(metaDescription) : "",
      relatedLinks: relatedLinks ? relatedLinks.map((l: { label: string; href: string }) => ({ label: sanitizeText(l.label), href: sanitizeText(l.href) })) : [],
      date: date || new Date().toISOString().split("T")[0],
      published: published !== false,
    });

    return NextResponse.json(blog, { status: 201 });
  } catch (error) {
    console.error("POST /api/blogs error:", error);
    return NextResponse.json({ error: "Failed to create blog" }, { status: 500 });
  }
}
