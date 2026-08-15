"use client";

import { useEffect, useState } from "react";
import DeleteModal from "@/components/DeleteModal";

interface ChangelogEntry {
  _id?: string;
  date: string;
  version: string;
  releaseName: string;
  summary: string;
  tag: "NEW" | "IMPROVED" | "FIXED" | "SECURITY";
  content: string;
  published: boolean;
}

const tagColors: Record<string, string> = {
  NEW: "var(--accent)",
  IMPROVED: "#60a5fa",
  FIXED: "#34d399",
  SECURITY: "#f87171",
};

function formatLong(date: string) {
  const d = new Date(date + "T00:00:00");
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default function ChangelogList() {
  const [entries, setEntries] = useState<ChangelogEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [tagFilter, setTagFilter] = useState("");
  const [deleteDate, setDeleteDate] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    fetch("/api/changelog")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setEntries(data);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const filtered = entries.filter((e) => {
    const q = search.toLowerCase();
    const matches =
      !q ||
      e.date.includes(q) ||
      e.version.toLowerCase().includes(q) ||
      e.releaseName.toLowerCase().includes(q) ||
      e.summary.toLowerCase().includes(q) ||
      e.content.toLowerCase().includes(q);
    const tagOk = !tagFilter || e.tag === tagFilter;
    return matches && tagOk;
  });
  const deleteEntry = entries.find((e) => e.date === deleteDate);

  const handleDelete = async () => {
    if (!deleteDate) return;
    setDeleting(true);
    try {
      const res = await fetch(`/api/changelog/${deleteDate}`, { method: "DELETE" });
      if (res.ok) {
        setEntries((prev) => prev.filter((e) => e.date !== deleteDate));
        setDeleteDate(null);
      } else {
        alert("Failed to delete entry");
      }
    } catch {
      alert("Failed to delete entry");
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div>
      <div className="d-page-head">
        <div>
          <h1 className="d-page-title">Changelog</h1>
          <p className="d-page-sub">{entries.length} entries total</p>
        </div>
        <a href="/dashboard/changelog/new" className="d-btn d-btn--primary">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          New Entry
        </a>
      </div>

      <div className="d-filters">
        <div className="d-search-wrap">
          <svg className="d-search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--text-tertiary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            placeholder="Search entries..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="d-search"
          />
        </div>
        <select value={tagFilter} onChange={(e) => setTagFilter(e.target.value)} className="d-select">
          <option value="">All Tags</option>
          <option value="NEW">New</option>
          <option value="IMPROVED">Improved</option>
          <option value="FIXED">Fixed</option>
          <option value="SECURITY">Security</option>
        </select>
      </div>

      <div className="d-card" style={{ padding: 0 }}>
        <div className="d-table-wrap">
          <table className="d-table">
            <thead>
              <tr>
                <th style={{ width: 130 }}>Date</th>
                <th style={{ width: 100 }}>Version</th>
                <th>Release Name</th>
                <th style={{ width: 100 }}>Tag</th>
                <th style={{ width: 90 }}>Status</th>
                <th style={{ width: 200 }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={6} className="d-empty">Loading...</td>
                </tr>
              ) : filtered.length === 0 ? (
                <tr>
                  <td colSpan={6} className="d-empty">No entries found.</td>
                </tr>
              ) : (
                filtered.map((entry) => (
                  <tr key={entry.date}>
                    <td>
                      <div className="d-post-title">{formatLong(entry.date)}</div>
                      <div className="d-muted" style={{ fontSize: 12 }}>{entry.date}</div>
                    </td>
                    <td>
                      {entry.version ? (
                        <span className="d-badge" style={{ color: "var(--accent)", background: "rgba(241,127,13,0.12)", border: "1px solid rgba(241,127,13,0.3)" }}>
                          {entry.version}
                        </span>
                      ) : (
                        <span className="d-muted">—</span>
                      )}
                    </td>
                    <td>{entry.releaseName || <span className="d-muted">—</span>}</td>
                    <td>
                      <span
                        className="d-badge"
                        style={{
                          color: tagColors[entry.tag],
                          background: `${tagColors[entry.tag]}1f`,
                          border: `1px solid ${tagColors[entry.tag]}40`,
                        }}
                      >
                        {entry.tag}
                      </span>
                    </td>
                    <td>
                      <span className="d-badge">{entry.published ? "Published" : "Draft"}</span>
                    </td>
                    <td>
                      <div className="d-actions">
                        <a href={`/dashboard/changelog/${entry.date}/edit`} className="d-btn d-btn--sm">Edit</a>
                        <a href={`/changelog#${entry.date}`} target="_blank" className="d-btn d-btn--sm d-btn--ghost">View</a>
                        <button onClick={() => setDeleteDate(entry.date)} className="d-btn d-btn--sm d-btn--danger">Delete</button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {deleteDate && (
        <DeleteModal
          title={deleteEntry ? `${formatLong(deleteEntry.date)}${deleteEntry.releaseName ? ` — ${deleteEntry.releaseName}` : ""}` : ""}
          onConfirm={handleDelete}
          onCancel={() => setDeleteDate(null)}
          deleting={deleting}
        />
      )}
    </div>
  );
}
