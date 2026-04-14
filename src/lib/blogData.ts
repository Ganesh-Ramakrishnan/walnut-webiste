import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";
import { blogPosts, type BlogPost } from "@/data/blogPosts";

// Fetches all posts from MongoDB, falls back to static data if DB unavailable
export async function getAllPostsFromDB(): Promise<BlogPost[]> {
  try {
    await connectDB();
    const dbPosts = await Blog.find({ published: true }).sort({ date: -1 }).lean();

    if (dbPosts.length > 0) {
      return dbPosts.map((p) => ({
        slug: p.slug,
        title: p.title,
        excerpt: p.excerpt,
        content: p.content,
        date: p.date,
        author: p.author,
        image: p.image,
        category: p.category,
        tags: p.tags,
        faqs: p.faqs || [],
      }));
    }
  } catch (error) {
    console.error("Failed to fetch from MongoDB, using static data:", error);
  }

  // Fallback to static data
  return [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

// Fetches a single post by slug from MongoDB, falls back to static data
export async function getPostBySlugFromDB(slug: string): Promise<BlogPost | undefined> {
  try {
    await connectDB();
    const post = await Blog.findOne({ slug, published: true }).lean();

    if (post) {
      return {
        slug: post.slug,
        title: post.title,
        excerpt: post.excerpt,
        content: post.content,
        date: post.date,
        author: post.author,
        image: post.image,
        category: post.category,
        tags: post.tags,
        faqs: post.faqs || [],
      };
    }
  } catch (error) {
    console.error("Failed to fetch from MongoDB, using static data:", error);
  }

  // Fallback to static data
  return blogPosts.find((p) => p.slug === slug);
}

// Get all categories from MongoDB, falls back to static data
export async function getAllCategoriesFromDB(): Promise<string[]> {
  try {
    await connectDB();
    const categories = await Blog.distinct("category", { published: true });
    if (categories.length > 0) return categories;
  } catch {
    // fallback below
  }

  return [...new Set(blogPosts.map((p) => p.category))];
}

// Get all slugs for static generation
export async function getAllSlugsFromDB(): Promise<string[]> {
  try {
    await connectDB();
    const posts = await Blog.find({ published: true }).select("slug").lean();
    if (posts.length > 0) return posts.map((p) => p.slug);
  } catch {
    // fallback below
  }

  return blogPosts.map((p) => p.slug);
}
