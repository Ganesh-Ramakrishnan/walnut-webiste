"use client";

import Link from "next/link";
import type { BlogPost } from "@/data/blogPosts";

export default function BlogCard({ post }: { post: BlogPost }) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link href={`/blog/${post.slug}`} className="blog-card">
      <div className="blog-card-img">
        <img src={post.image} alt={post.title} />
      </div>
      <div className="blog-card-body">
        <div className="blog-card-meta">
          <span className="blog-card-category">{post.category}</span>
          <span className="blog-card-date">{formattedDate}</span>
        </div>
        <h3 className="blog-card-title">{post.title}</h3>
        <p className="blog-card-excerpt">{post.excerpt}</p>
        <div className="blog-card-author">By {post.author}</div>
      </div>
    </Link>
  );
}
