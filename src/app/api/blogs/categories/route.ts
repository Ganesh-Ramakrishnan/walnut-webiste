import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { isAuthenticated } from "@/lib/auth";
import { sanitizeText } from "@/lib/sanitize";
import Blog from "@/models/Blog";

export const dynamic = "force-dynamic";

// GET /api/blogs/categories — list all unique categories
export async function GET() {
  try {
    await connectDB();
    const categories = await Blog.distinct("category");
    return NextResponse.json(categories.sort());
  } catch (error) {
    console.error("GET /api/blogs/categories error:", error);
    return NextResponse.json({ error: "Failed to fetch categories" }, { status: 500 });
  }
}

// PUT /api/blogs/categories — rename a category across all posts
export async function PUT(req: NextRequest) {
  if (!isAuthenticated(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await connectDB();
    const { oldName, newName } = await req.json();

    if (!oldName || !newName || typeof oldName !== "string" || typeof newName !== "string") {
      return NextResponse.json({ error: "oldName and newName are required" }, { status: 400 });
    }

    const sanitized = sanitizeText(newName.trim());
    if (!sanitized) {
      return NextResponse.json({ error: "Invalid category name" }, { status: 400 });
    }

    const result = await Blog.updateMany(
      { category: oldName },
      { $set: { category: sanitized } }
    );

    return NextResponse.json({
      message: `Renamed "${oldName}" to "${sanitized}" across ${result.modifiedCount} posts.`,
      modifiedCount: result.modifiedCount,
    });
  } catch (error) {
    console.error("PUT /api/blogs/categories error:", error);
    return NextResponse.json({ error: "Failed to rename category" }, { status: 500 });
  }
}

// DELETE /api/blogs/categories — delete a category (sets posts to "Uncategorized")
export async function DELETE(req: NextRequest) {
  if (!isAuthenticated(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await connectDB();
    const { name } = await req.json();

    if (!name || typeof name !== "string") {
      return NextResponse.json({ error: "Category name is required" }, { status: 400 });
    }

    const result = await Blog.updateMany(
      { category: name },
      { $set: { category: "Uncategorized" } }
    );

    return NextResponse.json({
      message: `Deleted "${name}", ${result.modifiedCount} posts moved to Uncategorized.`,
      modifiedCount: result.modifiedCount,
    });
  } catch (error) {
    console.error("DELETE /api/blogs/categories error:", error);
    return NextResponse.json({ error: "Failed to delete category" }, { status: 500 });
  }
}
