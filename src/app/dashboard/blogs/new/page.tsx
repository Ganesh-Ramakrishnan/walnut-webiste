"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

const RichTextEditor = dynamic(() => import("@/components/editor/RichTextEditor"), {
  loading: () => <div style={{ minHeight: 350, display: "flex", alignItems: "center", justifyContent: "center", color: "#6b7280", background: "#080808", border: "1px solid #1a1a1a", borderRadius: 10 }}>Loading editor...</div>,
  ssr: false,
});

const BLOG_CATEGORIES = [
  "Announcements",
  "Integrations",
  "Success Stories",
  "Dev Playbook",
  "QA Playbook",
  "Management Playbook",
  "Behind the Scenes",
];

export default function NewBlogPost() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [form, setForm] = useState({ title: "", slug: "", excerpt: "", content: "", author: "WalnutAI Team", authorTitle: "", authorLinkedin: "", image: "", category: "", tags: "", seoTitle: "", metaDescription: "", date: new Date().toISOString().split("T")[0] });
  const [faqs, setFaqs] = useState<{ question: string; answer: string }[]>([]);
  const [relatedLinks, setRelatedLinks] = useState<{ label: string; href: string }[]>([]);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [preview, setPreview] = useState(false);
  const [saving, setSaving] = useState(false);
  const [customCategory, setCustomCategory] = useState(false);

  const addFaq = () => setFaqs([...faqs, { question: "", answer: "" }]);
  const removeFaq = (i: number) => setFaqs(faqs.filter((_, idx) => idx !== i));
  const updateFaq = (i: number, field: "question" | "answer", value: string) => {
    const updated = [...faqs];
    updated[i][field] = value;
    setFaqs(updated);
  };

  const updateField = (field: string, value: string) => {
    setForm((prev) => {
      const updated = { ...prev, [field]: value };
      if (field === "title") updated.slug = value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
      return updated;
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => { const b = ev.target?.result as string; setImagePreview(b); setForm((p) => ({ ...p, image: b })); };
    reader.readAsDataURL(file);
  };

  const removeImage = () => { setImagePreview(null); setForm((p) => ({ ...p, image: "" })); if (fileInputRef.current) fileInputRef.current.value = ""; };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const res = await fetch("/api/blogs", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...form, tags: form.tags.split(",").map((t) => t.trim()).filter(Boolean), faqs: faqs.filter((f) => f.question && f.answer), relatedLinks: relatedLinks.filter((l) => l.label && l.href), date: form.date || new Date().toISOString().split("T")[0] }) });
      if (res.ok) router.push("/dashboard/blogs");
      else { const data = await res.json(); alert(data.error || "Failed to create post"); }
    } catch { alert("Failed to create post"); }
    finally { setSaving(false); }
  };

  const displayImage = imagePreview || form.image;

  return (
    <div>
      <div className="d-page-head">
        <div>
          <h1 className="d-page-title">New Blog Post</h1>
          <p className="d-page-sub">Create a new article for your blog</p>
        </div>
        <div className="d-actions">
          <button type="button" className="d-btn d-btn--ghost" onClick={() => setPreview(!preview)}>
            {preview ? "Edit" : "Preview"}
          </button>
          <button type="button" className="d-btn d-btn--ghost" onClick={() => router.push("/dashboard/blogs")}>Cancel</button>
        </div>
      </div>

      {preview ? (
        <div className="d-card" style={{ padding: 32 }}>
          {displayImage && <div className="d-preview-img"><img src={displayImage} alt={form.title || "Blog image"} /></div>}
          <div className="d-preview-head">
            {form.category && <span className="d-badge">{form.category}</span>}
            <h1 className="d-preview-title">{form.title || "Untitled"}</h1>
            <p className="d-muted">{form.author} &middot; {new Date().toLocaleDateString()}</p>
            {form.excerpt && <p style={{ color: "#9ca3af", lineHeight: 1.6, marginTop: 8 }}>{form.excerpt}</p>}
          </div>
          <div className="d-preview-body" dangerouslySetInnerHTML={{ __html: form.content || "<p>No content yet.</p>" }} />
        </div>
      ) : (
        <div className="d-card" style={{ padding: 28 }}>
          <form onSubmit={handleSubmit} className="d-form">
            {/* Image */}
            <div className="d-field">
              <label>Featured Image</label>
              <div className="d-img-upload">
                {displayImage ? (
                  <div className="d-img-preview">
                    <img src={displayImage} alt="Preview" />
                    <div className="d-img-overlay">
                      <button type="button" className="d-btn d-btn--sm" onClick={() => fileInputRef.current?.click()}>Change</button>
                      <button type="button" className="d-btn d-btn--sm d-btn--danger" onClick={removeImage}>Remove</button>
                    </div>
                  </div>
                ) : (
                  <div className="d-img-drop" onClick={() => fileInputRef.current?.click()}>
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#4b5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                    <p>Click to upload an image</p>
                    <span>SVG, PNG, JPG or WebP (Max 5MB)</span>
                  </div>
                )}
                <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageChange} style={{ display: "none" }} />
              </div>
            </div>

            <div className="d-row">
              <div className="d-field"><label htmlFor="title">Title *</label><input id="title" type="text" value={form.title} onChange={(e) => updateField("title", e.target.value)} placeholder="Enter blog post title" required /></div>
              <div className="d-field"><label htmlFor="slug">Slug</label><input id="slug" type="text" value={form.slug} onChange={(e) => updateField("slug", e.target.value)} placeholder="auto-generated-from-title" /></div>
            </div>

            <div className="d-field"><label htmlFor="excerpt">Excerpt *</label><textarea id="excerpt" value={form.excerpt} onChange={(e) => updateField("excerpt", e.target.value)} placeholder="A brief summary of the post..." rows={3} required /></div>

            <div className="d-field"><label>Content *</label><RichTextEditor content={form.content} onChange={(html) => updateField("content", html)} placeholder="Type / to insert a block or paste a link to embed content" /></div>

            <div className="d-row">
              <div className="d-field"><label htmlFor="seoTitle">SEO Title Tag</label><input id="seoTitle" type="text" value={form.seoTitle} onChange={(e) => updateField("seoTitle", e.target.value)} placeholder="Custom title for search engines (defaults to post title)" maxLength={70} /><p className="d-muted" style={{ fontSize: 11, marginTop: 4 }}>{form.seoTitle.length}/70 chars</p></div>
              <div className="d-field"><label htmlFor="metaDescription">Meta Description</label><textarea id="metaDescription" value={form.metaDescription} onChange={(e) => updateField("metaDescription", e.target.value)} placeholder="Brief description for search results (defaults to excerpt)" rows={2} maxLength={160} /><p className="d-muted" style={{ fontSize: 11, marginTop: 4 }}>{form.metaDescription.length}/160 chars</p></div>
            </div>

            <div className="d-row">
              <div className="d-field"><label htmlFor="author">Author *</label><input id="author" type="text" value={form.author} onChange={(e) => updateField("author", e.target.value)} required /></div>
              <div className="d-field"><label htmlFor="category">Category *</label>{customCategory ? (<div style={{ display: "flex", gap: 8 }}><input id="category" type="text" value={form.category} onChange={(e) => updateField("category", e.target.value)} placeholder="Type your custom category" required style={{ flex: 1 }} /><button type="button" className="d-btn d-btn--sm d-btn--ghost" onClick={() => { setCustomCategory(false); updateField("category", ""); }}>Back</button></div>) : (<select id="category" value={BLOG_CATEGORIES.includes(form.category) ? form.category : ""} onChange={(e) => { if (e.target.value === "__custom__") { setCustomCategory(true); updateField("category", ""); } else { updateField("category", e.target.value); }}} required><option value="">Select a category</option>{BLOG_CATEGORIES.map((cat) => (<option key={cat} value={cat}>{cat}</option>))}<option value="__custom__">+ Custom category</option></select>)}</div>
            </div>

            <div className="d-row">
              <div className="d-field"><label htmlFor="authorTitle">Author Title</label><input id="authorTitle" type="text" value={form.authorTitle} onChange={(e) => updateField("authorTitle", e.target.value)} placeholder="e.g. Lead Engineer at WalnutAI" /></div>
              <div className="d-field"><label htmlFor="authorLinkedin">Author LinkedIn URL</label><input id="authorLinkedin" type="text" value={form.authorLinkedin} onChange={(e) => updateField("authorLinkedin", e.target.value)} placeholder="https://linkedin.com/in/..." /></div>
            </div>

            <div className="d-row">
              <div className="d-field"><label htmlFor="date">Publish Date *</label><input id="date" type="date" value={form.date} onChange={(e) => updateField("date", e.target.value)} required /></div>
              <div className="d-field"><label htmlFor="tags">Tags (comma separated)</label><input id="tags" type="text" value={form.tags} onChange={(e) => updateField("tags", e.target.value)} placeholder="AI, Testing, Automation" /></div>
            </div>

            {/* Internal links */}
            <div className="d-field">
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <label>Internal Links (shown at bottom of article)</label>
                <button type="button" className="d-btn d-btn--sm d-btn--ghost" onClick={() => setRelatedLinks([...relatedLinks, { label: "", href: "" }])}>+ Add Link</button>
              </div>
              {relatedLinks.length === 0 && <p className="d-muted" style={{ fontSize: 12 }}>No internal links added.</p>}
              {relatedLinks.map((link, i) => (
                <div key={i} className="d-faq-item">
                  <div className="d-faq-item-head">
                    <span className="d-muted" style={{ fontSize: 11, fontWeight: 700 }}>Link {i + 1}</span>
                    <button type="button" className="d-btn d-btn--sm d-btn--danger" onClick={() => setRelatedLinks(relatedLinks.filter((_, idx) => idx !== i))}>Remove</button>
                  </div>
                  <input type="text" value={link.label} onChange={(e) => { const u = [...relatedLinks]; u[i] = { ...u[i], label: e.target.value }; setRelatedLinks(u); }} placeholder="Link text (e.g. How AI Testing Works)" />
                  <input type="text" value={link.href} onChange={(e) => { const u = [...relatedLinks]; u[i] = { ...u[i], href: e.target.value }; setRelatedLinks(u); }} placeholder="URL (e.g. /blog/ai-testing-guide)" />
                </div>
              ))}
            </div>

            {/* FAQs */}
            <div className="d-field">
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <label>FAQs (Optional)</label>
                <button type="button" className="d-btn d-btn--sm d-btn--ghost" onClick={addFaq}>+ Add FAQ</button>
              </div>
              {faqs.length === 0 && <p className="d-muted" style={{ fontSize: 12 }}>No FAQs added. Click &quot;+ Add FAQ&quot; to add questions and answers.</p>}
              {faqs.map((faq, i) => (
                <div key={i} className="d-faq-item">
                  <div className="d-faq-item-head">
                    <span className="d-muted" style={{ fontSize: 11, fontWeight: 700 }}>FAQ {i + 1}</span>
                    <button type="button" className="d-btn d-btn--sm d-btn--danger" onClick={() => removeFaq(i)}>Remove</button>
                  </div>
                  <input type="text" value={faq.question} onChange={(e) => updateFaq(i, "question", e.target.value)} placeholder="Question" />
                  <textarea value={faq.answer} onChange={(e) => updateFaq(i, "answer", e.target.value)} placeholder="Answer" rows={2} />
                </div>
              ))}
            </div>

            <div className="d-form-foot">
              <button type="submit" className="d-btn d-btn--primary" disabled={saving}>{saving ? "Publishing..." : "Publish Post"}</button>
              <button type="button" className="d-btn d-btn--ghost" onClick={() => router.push("/dashboard/blogs")}>Cancel</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
