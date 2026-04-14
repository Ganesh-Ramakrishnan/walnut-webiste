"use client";

import { useEffect, useState } from "react";
import type { BlogPost } from "@/data/blogPosts";

export default function DashboardHome() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/blogs")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setPosts(data);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const categories = [...new Set(posts.map((p) => p.category))];
  const tags = [...new Set(posts.flatMap((p) => p.tags))];

  const stats = [
    { label: "Total Posts", value: posts.length, color: "#F17F0D", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg> },
    { label: "Categories", value: categories.length, color: "#3b82f6", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg> },
    { label: "Total Tags", value: tags.length, color: "#10b981", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg> },
  ];

  return (
    <div>
      <div className="d-page-head">
        <div>
          <h1 className="d-page-title">Welcome back</h1>
          <p className="d-page-sub">Here&apos;s an overview of your content.</p>
        </div>
        <a href="/dashboard/blogs/new" className="d-btn d-btn--primary">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          New Post
        </a>
      </div>

      {/* Stats */}
      <div className="d-stats">
        {stats.map((s) => (
          <div key={s.label} className="d-stat">
            <div className="d-stat-icon" style={{ color: s.color, background: `${s.color}12` }}>{s.icon}</div>
            <div className="d-stat-info">
              <span className="d-stat-val" style={{ color: s.color }}>{loading ? "—" : s.value}</span>
              <span className="d-stat-lbl">{s.label}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Recent posts */}
      <div className="d-card">
        <div className="d-card-head">
          <h2 className="d-card-title">Recent Blog Posts</h2>
          <a href="/dashboard/blogs" className="d-link">View all &rarr;</a>
        </div>
        <div className="d-table-wrap">
          <table className="d-table">
            <thead>
              <tr>
                <th style={{ width: 80 }}>Image</th>
                <th>Title</th>
                <th>Category</th>
                <th>Date</th>
                <th>Author</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr><td colSpan={5} className="d-empty">Loading...</td></tr>
              ) : posts.length === 0 ? (
                <tr><td colSpan={5} className="d-empty">No posts yet. Create your first post!</td></tr>
              ) : (
                posts.slice(0, 5).map((post) => (
                  <tr key={post.slug}>
                    <td>
                      <div className="d-thumb">
                        {post.image ? <img src={post.image} alt="" /> : <div className="d-thumb-ph" />}
                      </div>
                    </td>
                    <td>
                      <a href={`/dashboard/blogs/${post.slug}/edit`} className="d-post-link">{post.title}</a>
                    </td>
                    <td><span className="d-badge">{post.category}</span></td>
                    <td className="d-muted">{post.date}</td>
                    <td className="d-muted">{post.author}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
