"use client";

import { useEffect, useState } from "react";
import type { BlogPost } from "@/data/blogPosts";
import DeleteModal from "@/components/DeleteModal";

export default function BlogList() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [deleteSlug, setDeleteSlug] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    fetch("/api/blogs")
      .then((res) => res.json())
      .then((data) => { if (Array.isArray(data)) setPosts(data); })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const categories = [...new Set(posts.map((p) => p.category))];
  const filtered = posts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase()) || post.excerpt.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = !categoryFilter || post.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });
  const deletePost = posts.find((p) => p.slug === deleteSlug);

  const handleDelete = async () => {
    if (!deleteSlug) return;
    setDeleting(true);
    try {
      const res = await fetch(`/api/blogs/${deleteSlug}`, { method: "DELETE" });
      if (res.ok) { setPosts((prev) => prev.filter((p) => p.slug !== deleteSlug)); setDeleteSlug(null); }
      else alert("Failed to delete post");
    } catch { alert("Failed to delete post"); }
    finally { setDeleting(false); }
  };

  return (
    <div>
      <div className="d-page-head">
        <div>
          <h1 className="d-page-title">Blog Posts</h1>
          <p className="d-page-sub">{posts.length} posts total</p>
        </div>
        <a href="/dashboard/blogs/new" className="d-btn d-btn--primary">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          New Post
        </a>
      </div>

      {/* Filters */}
      <div className="d-filters">
        <div className="d-search-wrap">
          <svg className="d-search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <input type="text" placeholder="Search posts..." value={search} onChange={(e) => setSearch(e.target.value)} className="d-search" />
        </div>
        <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)} className="d-select">
          <option value="">All Categories</option>
          {categories.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>

      {/* Table */}
      <div className="d-card" style={{ padding: 0 }}>
        <div className="d-table-wrap">
          <table className="d-table">
            <thead>
              <tr>
                <th style={{ width: 72 }}>Image</th>
                <th>Title</th>
                <th>Category</th>
                <th>Tags</th>
                <th>Date</th>
                <th style={{ width: 180 }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr><td colSpan={6} className="d-empty">Loading...</td></tr>
              ) : filtered.length === 0 ? (
                <tr><td colSpan={6} className="d-empty">No posts found.</td></tr>
              ) : (
                filtered.map((post) => (
                  <tr key={post.slug}>
                    <td>
                      <div className="d-thumb">
                        {post.image ? <img src={post.image} alt="" /> : <div className="d-thumb-ph" />}
                      </div>
                    </td>
                    <td>
                      <div className="d-post-title">{post.title}</div>
                      <div className="d-post-excerpt">{post.excerpt.slice(0, 80)}...</div>
                    </td>
                    <td><span className="d-badge">{post.category}</span></td>
                    <td>
                      <div className="d-tags">
                        {post.tags.slice(0, 2).map((t) => <span key={t} className="d-tag">{t}</span>)}
                        {post.tags.length > 2 && <span className="d-tag">+{post.tags.length - 2}</span>}
                      </div>
                    </td>
                    <td className="d-muted">{post.date}</td>
                    <td>
                      <div className="d-actions">
                        <a href={`/dashboard/blogs/${post.slug}/edit`} className="d-btn d-btn--sm">Edit</a>
                        <a href={`/blog/${post.slug}`} target="_blank" className="d-btn d-btn--sm d-btn--ghost">View</a>
                        <button onClick={() => setDeleteSlug(post.slug)} className="d-btn d-btn--sm d-btn--danger">Delete</button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {deleteSlug && (
        <DeleteModal title={deletePost?.title || ""} onConfirm={handleDelete} onCancel={() => setDeleteSlug(null)} deleting={deleting} />
      )}
    </div>
  );
}
