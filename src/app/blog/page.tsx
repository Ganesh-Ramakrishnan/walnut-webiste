"use client";

import { useState } from "react";
import BlogHeader from "@/components/BlogHeader";
import BlogCard from "@/components/BlogCard";
import Footer from "@/components/Footer";
import { getAllPosts, getAllCategories } from "@/data/blogPosts";

export default function BlogListingPage() {
  const allPosts = getAllPosts();
  const categories = getAllCategories();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredPosts = activeCategory
    ? allPosts.filter((post) => post.category === activeCategory)
    : allPosts;

  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh", color: "#d1d5db" }}>
      <BlogHeader />

      <div className="blog-container">
        <div className="blog-heading">
          <h1 className="blog-page-title">
            Our <span className="text-orange">Blog</span>
          </h1>
          <p className="blog-page-subtitle">
            Insights, updates, and best practices for modern software delivery.
          </p>
        </div>

        {/* Category filter pills */}
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

        {/* Blog grid */}
        <div className="blog-grid">
          {filteredPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <p style={{ textAlign: "center", color: "#6b7280", padding: "60px 0" }}>
            No posts found in this category.
          </p>
        )}
      </div>

      <Footer />
    </div>
  );
}
