"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import BlogCard from "@/components/BlogCard";
import Footer from "@/components/Footer";
import type { BlogPost } from "@/data/blogPosts";

type SidebarItem =
  | { type: "link"; name: string }
  | { type: "heading"; name: string; children: string[] };

const SIDEBAR_ITEMS: SidebarItem[] = [
  { type: "link", name: "Latest" },
  { type: "link", name: "Announcements" },
  { type: "link", name: "Integrations" },
  { type: "link", name: "Success Stories" },
  {
    type: "heading",
    name: "Playbooks",
    children: ["Dev Playbook", "QA Playbook", "Management Playbook"],
  },
  { type: "link", name: "Behind the Scenes" },
];

/* Flat list for mobile pills */
const ALL_CATEGORIES = SIDEBAR_ITEMS.flatMap((item) =>
  item.type === "heading" ? item.children : [item.name]
);

export default function BlogListingPage() {
  const [allPosts, setAllPosts] = useState<BlogPost[]>([]);
  const [activeCategory, setActiveCategory] = useState("Latest");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/blogs")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setAllPosts(data);
        }
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const filteredPosts = allPosts.filter((post) => {
    const matchesCategory = activeCategory === "Latest" || post.category === activeCategory;
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

      <div className="blog-layout">
        {/* ── Left sidebar ── */}
        <aside className="blog-sidebar">
          <h1 className="blog-sidebar-title">Blog</h1>
          <p className="blog-sidebar-sub">
            Compiled notes from the WalnutAI team
          </p>

          <div className="blog-sidebar-divider" />

          <nav className="blog-sidebar-nav">
            {SIDEBAR_ITEMS.map((item) =>
              item.type === "link" ? (
                <button
                  key={item.name}
                  className={`blog-sidebar-link ${activeCategory === item.name ? "blog-sidebar-active" : ""}`}
                  onClick={() => setActiveCategory(item.name)}
                >
                  {item.name}
                </button>
              ) : (
                <div key={item.name} className="blog-sidebar-group">
                  <span className="blog-sidebar-heading">{item.name}</span>
                  {item.children.map((child) => (
                    <button
                      key={child}
                      className={`blog-sidebar-link blog-sidebar-indent ${activeCategory === child ? "blog-sidebar-active" : ""}`}
                      onClick={() => setActiveCategory(child)}
                    >
                      {child}
                    </button>
                  ))}
                </div>
              )
            )}
          </nav>
        </aside>

        {/* ── Mobile category bar (visible < 900px) ── */}
        <div className="blog-mobile-filters">
          <div className="blog-mobile-filters-scroll">
            {ALL_CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`blog-filter-pill ${activeCategory === cat ? "blog-filter-active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ── Blog cards ── */}
        <main className="blog-main">
          <div className="blog-search-wrapper">
            <svg className="blog-search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              className="blog-search-input"
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {loading ? (
            <p style={{ textAlign: "center", color: "#6b7280", padding: "60px 0" }}>
              Loading posts...
            </p>
          ) : filteredPosts.length === 0 ? (
            <p style={{ textAlign: "center", color: "#6b7280", padding: "60px 0" }}>
              No posts found in this category.
            </p>
          ) : (
            <div className="blog-grid">
              {filteredPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </main>
      </div>

      <Footer />
    </div>
  );
}
