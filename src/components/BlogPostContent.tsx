"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { BlogPost } from "@/data/blogPosts";

interface BlogPostContentProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

const DEFAULT_IMAGES = [
  "/assets/blog/default-1.svg",
  "/assets/blog/default-2.svg",
  "/assets/blog/default-3.svg",
];

function FAQSection({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="blog-faq">
      <h2 className="blog-faq-title">Frequently Asked Questions</h2>
      <div className="blog-faq-list">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={i} className={`blog-faq-item ${isOpen ? "blog-faq-item--open" : ""}`}>
              <button
                className="blog-faq-q"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
              >
                <span>{faq.question}</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="blog-faq-chevron"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              {isOpen && (
                <div className="blog-faq-a">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function BlogPostContent({ post, relatedPosts }: BlogPostContentProps) {
  const displayImage = post.image || DEFAULT_IMAGES[Math.abs(post.slug.charCodeAt(0)) % DEFAULT_IMAGES.length];
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
        <img src={displayImage} alt={post.title} className="blog-post-hero-img" width={1200} height={630} />
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

        {/* FAQ Section */}
        {post.faqs && post.faqs.length > 0 && (
          <FAQSection faqs={post.faqs} />
        )}

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
