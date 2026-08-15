"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

const RichTextEditor = dynamic(() => import("@/components/editor/RichTextEditor"), {
  loading: () => <div style={{ minHeight: 350, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-tertiary)", background: "var(--surface-black)", border: "1px solid var(--border-muted)", borderRadius: 10 }}>Loading editor...</div>,
  ssr: false,
});

export type ChangelogTag = "NEW" | "IMPROVED" | "FIXED" | "SECURITY";

export interface ChangelogFormValue {
  date: string;
  version: string;
  releaseName: string;
  summary: string;
  tag: ChangelogTag;
  content: string;
  published: boolean;
}

interface Props {
  mode: "create" | "edit";
  initial: ChangelogFormValue;
  /** Original date — only used in edit mode to build the PUT URL */
  originalDate?: string;
}

const TAG_OPTIONS: ChangelogTag[] = ["NEW", "IMPROVED", "FIXED", "SECURITY"];
const tagColors: Record<ChangelogTag, string> = {
  NEW: "var(--accent)",
  IMPROVED: "#60a5fa",
  FIXED: "#34d399",
  SECURITY: "#f87171",
};

export default function ChangelogForm({ mode, initial, originalDate }: Props) {
  const router = useRouter();
  const [form, setForm] = useState<ChangelogFormValue>(initial);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSaving(true);

    const payload = {
      date: form.date,
      version: form.version.trim(),
      releaseName: form.releaseName.trim(),
      summary: form.summary,
      tag: form.tag,
      content: form.content,
      published: form.published,
    };

    try {
      const url = mode === "create" ? "/api/changelog" : `/api/changelog/${originalDate}`;
      const method = mode === "create" ? "POST" : "PUT";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        router.push("/dashboard/changelog");
        router.refresh();
      } else {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Failed to save entry");
      }
    } catch {
      setError("Failed to save entry");
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="d-form">
      {error && (
        <div
          className="d-card"
          style={{
            padding: "12px 16px",
            background: "rgba(239,68,68,0.08)",
            border: "1px solid rgba(239,68,68,0.3)",
            color: "#fca5a5",
            marginBottom: 16,
          }}
        >
          {error}
        </div>
      )}

      <div className="d-row">
        <div className="d-field">
          <label htmlFor="date">Date *</label>
          <input
            id="date"
            type="date"
            value={form.date}
            onChange={(e) => setForm((p) => ({ ...p, date: e.target.value }))}
            required
          />
        </div>
        <div className="d-field">
          <label htmlFor="tag">Tag *</label>
          <select
            id="tag"
            value={form.tag}
            onChange={(e) => setForm((p) => ({ ...p, tag: e.target.value as ChangelogTag }))}
            style={{ borderLeft: `4px solid ${tagColors[form.tag]}` }}
          >
            {TAG_OPTIONS.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="d-row">
        <div className="d-field">
          <label htmlFor="version">Version</label>
          <input
            id="version"
            type="text"
            value={form.version}
            onChange={(e) => setForm((p) => ({ ...p, version: e.target.value }))}
            placeholder="e.g. v2.0.0"
            maxLength={50}
          />
        </div>
        <div className="d-field">
          <label htmlFor="releaseName">Release name</label>
          <input
            id="releaseName"
            type="text"
            value={form.releaseName}
            onChange={(e) => setForm((p) => ({ ...p, releaseName: e.target.value }))}
            placeholder="e.g. Platform Launch"
            maxLength={120}
          />
        </div>
      </div>

      <div className="d-field">
        <label htmlFor="summary">Summary</label>
        <textarea
          id="summary"
          rows={2}
          value={form.summary}
          onChange={(e) => setForm((p) => ({ ...p, summary: e.target.value }))}
          placeholder="One-line summary shown under the date heading."
          maxLength={500}
        />
      </div>

      <div className="d-field">
        <label>Content *</label>
        <RichTextEditor
          content={form.content}
          onChange={(html) => setForm((p) => ({ ...p, content: html }))}
          placeholder="Describe what changed in this release..."
        />
      </div>

      <div className="d-field">
        <label style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer" }}>
          <input
            type="checkbox"
            checked={form.published}
            onChange={(e) => setForm((p) => ({ ...p, published: e.target.checked }))}
            style={{ width: "auto", margin: 0 }}
          />
          Published (visible on the public changelog)
        </label>
      </div>

      <div className="d-actions" style={{ marginTop: 24 }}>
        <button type="submit" disabled={saving} className="d-btn d-btn--primary">
          {saving ? "Saving..." : mode === "create" ? "Create Entry" : "Save Changes"}
        </button>
        <button
          type="button"
          className="d-btn d-btn--ghost"
          onClick={() => router.push("/dashboard/changelog")}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
