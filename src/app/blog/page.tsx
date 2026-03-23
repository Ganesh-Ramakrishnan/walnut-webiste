"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import BlogCard from "@/components/BlogCard";
import ChatInputImage from "@/components/ChatInputImage";
import Footer from "@/components/Footer";
import { getAllPosts, getAllCategories } from "@/data/blogPosts";

export default function BlogListingPage() {
  const allPosts = getAllPosts();
  const categories = getAllCategories();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = allPosts.filter((post) => {
    const matchesCategory = activeCategory ? post.category === activeCategory : true;
    const q = searchQuery.toLowerCase();
    const matchesSearch = q
      ? post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.tags.some((tag) => tag.toLowerCase().includes(q))
      : true;
    return matchesCategory && matchesSearch;
  });

  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh", color: "#d1d5db", paddingTop: 80 }}>
      <Navbar />

      <div className="blog-container">
        <div className="blog-heading">
          <h1 className="blog-page-title">
            Our <span className="text-orange">Blog</span>
          </h1>
          <p className="blog-page-subtitle">
            Insights, updates, and best practices for modern software delivery.
          </p>
        </div>

        {/* Filters row: pills left, search right */}
        <div className="blog-toolbar">
          <div className="blog-filters">
            <button
              className={`blog-filter-pill ${activeCategory === null ? "blog-filter-active" : ""}`}
              onClick={() => setActiveCategory(null)}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`blog-filter-pill ${activeCategory === cat ? "blog-filter-active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="blog-search-wrapper">
            <svg className="blog-search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              className="blog-search-input"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Blog grid */}
        <div className="blog-grid">
          {filteredPosts.map((post, index) => (
            <BlogCard
              key={post.slug}
              post={post}
              customImage={index === 0 && !activeCategory ? <ChatInputImage /> : undefined}
            />
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <p style={{ textAlign: "center", color: "#6b7280", padding: "60px 0" }}>
            No posts found. Try a different search or category.
          </p>
        )}
      </div>

      <Footer />
    </div>
  );
}
