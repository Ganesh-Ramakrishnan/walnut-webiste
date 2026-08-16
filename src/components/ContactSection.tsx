"use client";

import { useState } from "react";
import AnimateOnScroll from "./AnimateOnScroll";
import { CONTACT_EMAIL, MAILTO_URL, MAPS_URL, OFFICE_ADDRESS } from "@/lib/links";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", organization: "", role: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "92d7c0f4-a52d-4e00-a56f-9df46901799c",
          subject: `Contact from ${form.name} - ${form.organization || "N/A"}`,
          from_name: form.name,
          replyto: form.email,
          cc: "contact@walnutai.ai",
          ...form,
        }),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", organization: "", role: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-16 sm:py-24 overflow-hidden">
      <div style={{ maxWidth: 980, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <AnimateOnScroll animation="fadeUp" className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            Contact{" "}<span className="text-orange">Us</span>
          </h2>
          <p className="ct-lede">
            Tell us what you are shipping and we will come back with a plan — usually the same working day.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fadeUp">
          <div className="ct-card">
            {/* Left info panel */}
            <div className="ct-info-panel">
              <div className="ct-info-top">
                <span className="ct-info-badge">
                  <span className="ct-info-dot" aria-hidden="true" />
                  Replies in 24h
                </span>
                <h3 className="ct-info-title">Talk to the team building it</h3>
                <p className="ct-info-lede">
                  Start free. Upgrade when WalnutAI starts saving you real release risk.
                </p>

                <ul className="ct-list">
                  {["A live walkthrough on your codebase", "Pricing and enterprise options", "No credit card to get started"].map((item) => (
                    <li key={item} className="ct-list-item">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="ct-contacts">
                <a href={MAILTO_URL} className="ct-mail">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M22 4L12 13 2 4" />
                  </svg>
                  {CONTACT_EMAIL}
                </a>
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="ct-mail ct-address">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                  </svg>
                  {OFFICE_ADDRESS}
                </a>
              </div>

              {/* Accent glow + dot grid, purely decorative. */}
              <span className="ct-info-glow" aria-hidden="true" />
              <span className="ct-info-dots" aria-hidden="true" />
            </div>

            {/* Right form */}
            <div className="ct-form-panel">
              {status === "success" ? (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", gap: 20, padding: "32px 24px", textAlign: "center" }}>
                  <div className="ct-success-illust">
                    {/* Envelope */}
                    <svg width="120" height="100" viewBox="0 0 120 100" fill="none" className="ct-env-pop">
                      <rect x="10" y="25" width="100" height="65" rx="8" fill="#1e293b" stroke="var(--accent)" strokeWidth="2" />
                      <path d="M10 33 L60 65 L110 33" fill="#0f172a" stroke="var(--accent)" strokeWidth="2" strokeLinejoin="round" />
                      <path d="M10 90 L50 60" stroke="var(--accent)" strokeWidth="1" opacity="0.3" />
                      <path d="M110 90 L70 60" stroke="var(--accent)" strokeWidth="1" opacity="0.3" />
                    </svg>
                    {/* Floating mails */}
                    <div className="ct-fm ct-fm1">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 4L12 13 2 4" />
                      </svg>
                    </div>
                    <div className="ct-fm ct-fm2">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6">
                        <rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 4L12 13 2 4" />
                      </svg>
                    </div>
                    <div className="ct-fm ct-fm3">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4">
                        <rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 4L12 13 2 4" />
                      </svg>
                    </div>
                    {/* Green check badge */}
                    <div className="ct-badge-pop">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                  </div>
                  <p style={{ color: "var(--text-primary)", fontSize: 22, fontWeight: 700, margin: 0 }}>Message Sent!</p>
                  <p style={{ color: "var(--text-secondary)", fontSize: 14, margin: 0, maxWidth: 320, lineHeight: 1.6 }}>Our Team will get in touch with you shortly!</p>
                </div>
              ) : (
              <form onSubmit={handleSubmit} className="ct-form">
                {/* Name */}
                <div className="ct-field">
                  <label htmlFor="contact-name" className="ct-label">Name <span className="ct-req">*</span></label>
                  <input id="contact-name" type="text" name="name" value={form.name} onChange={handleChange} className="ct-input" placeholder="Jane Cooper" required />
                </div>

                {/* Email + Phone */}
                <div className="ct-field-row">
                  <div className="ct-field">
                    <label htmlFor="contact-email" className="ct-label">Email <span className="ct-req">*</span></label>
                    <input id="contact-email" type="email" name="email" value={form.email} onChange={handleChange} className="ct-input" placeholder="jane@company.com" required />
                  </div>
                  <div className="ct-field">
                    <label htmlFor="contact-phone" className="ct-label">Phone No</label>
                    <input id="contact-phone" type="tel" name="phone" value={form.phone} onChange={handleChange} className="ct-input" placeholder="Optional" />
                  </div>
                </div>

                {/* Organization + Role */}
                <div className="ct-field-row">
                  <div className="ct-field">
                    <label htmlFor="contact-organization" className="ct-label">Organization</label>
                    <input id="contact-organization" type="text" name="organization" value={form.organization} onChange={handleChange} className="ct-input" placeholder="Company name" />
                  </div>
                  <div className="ct-field">
                    <label htmlFor="contact-role" className="ct-label">Role</label>
                    <input id="contact-role" type="text" name="role" value={form.role} onChange={handleChange} className="ct-input" placeholder="e.g. QA Lead" />
                  </div>
                </div>

                {/* Message — a textarea, so a real message fits. */}
                <div className="ct-field">
                  <label htmlFor="contact-message" className="ct-label">Message <span className="ct-req">*</span></label>
                  <textarea id="contact-message" name="message" value={form.message} onChange={handleChange} className="ct-input ct-textarea" rows={4} placeholder="What are you building, and where does release risk hurt today?" required />
                </div>

                {/* Submit */}
                <div className="ct-actions">
                  {status === "error"
                    ? <span className="ct-error">Something went wrong. Please try again.</span>
                    : <span className="ct-note">We never share your details.</span>}
                  <button type="submit" className="ct-submit" disabled={status === "sending"}>
                    {status === "sending" ? "Sending…" : "Send message"}
                    {status !== "sending" && (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 12h14" /><path d="M13 6l6 6-6 6" />
                      </svg>
                    )}
                  </button>
                </div>
              </form>
              )}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
