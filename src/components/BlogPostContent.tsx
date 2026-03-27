"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import ChatInputImage from "@/components/ChatInputImage";
import Footer from "@/components/Footer";
import type { BlogPost } from "@/data/blogPosts";

interface BlogPostContentProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

export default function BlogPostContent({ post, relatedPosts }: BlogPostContentProps) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh", color: "#d1d5db", paddingTop: 80 }}>
      <Navbar />

      {/* Hero image */}
      <div className="blog-post-hero">
        {post.slug === "the-illusion-of-prompt-level-control" ? (
          <ChatInputImage />
        ) : (
          <img src={post.image} alt={post.title} className="blog-post-hero-img" width={1200} height={630} />
        )}
      </div>

      {/* Article content */}
      <article className="blog-post-container">
        <Link href="/blog" className="blog-back-link">
          &larr; Back to Blog
        </Link>

        <div className="blog-post-meta">
          <span className="blog-card-category">{post.category}</span>
          <span className="blog-post-date">{formattedDate}</span>
          <span className="blog-post-author">By {post.author}</span>
        </div>

        <h1 className="blog-post-title">{post.title}</h1>

        <div className="blog-post-tags">
          {post.tags.map((tag) => (
            <span key={tag} className="blog-post-tag">
              {tag}
            </span>
          ))}
        </div>

        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {relatedPosts.length > 0 && (
          <div className="blog-related">
            <h2 className="blog-related-title">Related Posts</h2>
            <div className="blog-related-grid">
              {relatedPosts.map((rp) => (
                <Link key={rp.slug} href={`/blog/${rp.slug}`} className="blog-related-card">
                  <img src={rp.image} alt={rp.title} className="blog-related-img" width={400} height={225} loading="lazy" />
                  <h3 className="blog-related-card-title">{rp.title}</h3>
                  <p className="blog-related-card-excerpt">{rp.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>

      <Footer />
    </div>
  );
}
