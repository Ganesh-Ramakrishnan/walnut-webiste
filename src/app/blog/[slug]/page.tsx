"use client";

import { useParams } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ChatInputImage from "@/components/ChatInputImage";
import Footer from "@/components/Footer";
import { getPostBySlug, getAllPosts } from "@/data/blogPosts";

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = getPostBySlug(slug);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} - WalnutAI Blog`;
    }
  }, [post]);

  if (!post) {
    return (
      <div style={{ background: "#0a0a0a", minHeight: "100vh", color: "#d1d5db", paddingTop: 80 }}>
        <Navbar />
        <div style={{ maxWidth: 750, margin: "0 auto", padding: "80px 24px", textAlign: "center" }}>
          <h1 style={{ color: "#fff", fontSize: 32, fontWeight: 700, marginBottom: 16 }}>
            Post Not Found
          </h1>
          <p style={{ color: "#6b7280", marginBottom: 32 }}>
            The blog post you are looking for does not exist.
          </p>
          <Link href="/blog" className="blog-back-link">
            &larr; Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const relatedPosts = getAllPosts()
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh", color: "#d1d5db", paddingTop: 80 }}>
      <Navbar />

      {/* Hero image */}
      <div className="blog-post-hero">
        {slug === "the-illusion-of-prompt-level-control" ? (
          <ChatInputImage />
        ) : (
          <img src={post.image} alt={post.title} className="blog-post-hero-img" />
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
                  <img src={rp.image} alt={rp.title} className="blog-related-img" />
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
