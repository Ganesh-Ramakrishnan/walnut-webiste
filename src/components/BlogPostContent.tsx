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
    <div style={{ background: "var(--surface-2b)", minHeight: "100vh", color: "var(--text-secondary-strong)", paddingTop: 80 }}>
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

        {/* Author E-E-A-T Card */}
        {(() => {
          const cardInner = (
            <>
              <div className="blog-author-avatar">
                {post.author.charAt(0).toUpperCase()}
              </div>
              <div className="blog-author-info">
                <div className="blog-author-name">
                  {post.author}
                  {post.authorLinkedin && (
                    <span className="blog-author-linkedin" aria-hidden="true">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    </span>
                  )}
                </div>
                {post.authorTitle && <p className="blog-author-title">{post.authorTitle}</p>}
                <p className="blog-author-date">Published on {formattedDate}</p>
              </div>
            </>
          );
          return post.authorLinkedin ? (
            <a
              href={post.authorLinkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="blog-author-card blog-author-card--link"
              aria-label={`View ${post.author}'s LinkedIn profile`}
            >
              {cardInner}
            </a>
          ) : (
            <div className="blog-author-card">{cardInner}</div>
          );
        })()}

        {/* Internal Links */}
        {post.relatedLinks && post.relatedLinks.length > 0 && (
          <div className="blog-internal-links">
            <h3 className="blog-internal-links-title">Related Articles</h3>
            <ul className="blog-internal-links-list">
              {post.relatedLinks.map((link, i) => (
                <li key={i}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}

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
