"use client";

import { useState } from "react";
import AnimateOnScroll from "./AnimateOnScroll";

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
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <AnimateOnScroll animation="fadeUp" className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            Contact{" "}<span className="text-orange">Us</span>
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fadeUp">
          <div className="ct-card">
            {/* Left info panel */}
            <div className="ct-info-panel">
              <div>
                <p style={{ color: "#d1d5db", fontSize: 16, lineHeight: 1.6, marginBottom: 28 }}>
                  Start free. Upgrade when WalnutAI starts saving you real release risk.
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M22 4L12 13 2 4" />
                  </svg>
                  <span style={{ color: "#d1d5db", fontSize: 14 }}>contact@walnutai.ai</span>
                </div>
              </div>

              {/* Orange radial glow — bottom left */}
              <div style={{
                position: "absolute" as const,
                bottom: 0,
                left: 0,
                width: "65%",
                height: "35%",
                borderRadius: "0 0 16px 16px",
                background: "radial-gradient(at 18% 110%, rgba(241, 127, 13, 0.35) 0%, rgba(241, 127, 13, 0.12) 50%, transparent 75%)",
                pointerEvents: "none",
              }} />
              {/* Dot grid pattern */}
              <div style={{
                position: "absolute" as const,
                bottom: 0,
                left: 0,
                right: 0,
                height: "40%",
                width: "65%",
                pointerEvents: "none",
                backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.35) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
                backgroundPosition: "10px 10px",
                borderRadius: "0 0 16px 16px",
              }} />
            </div>

            {/* Right form */}
            <div className="ct-form-panel">
              {status === "success" ? (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", gap: 20, padding: "32px 24px", textAlign: "center" }}>
                  <div className="ct-success-illust">
                    {/* Envelope */}
                    <svg width="120" height="100" viewBox="0 0 120 100" fill="none" className="ct-env-pop">
                      <rect x="10" y="25" width="100" height="65" rx="8" fill="#1e293b" stroke="#F17F0D" strokeWidth="2" />
                      <path d="M10 33 L60 65 L110 33" fill="#0f172a" stroke="#F17F0D" strokeWidth="2" strokeLinejoin="round" />
                      <path d="M10 90 L50 60" stroke="#F17F0D" strokeWidth="1" opacity="0.3" />
                      <path d="M110 90 L70 60" stroke="#F17F0D" strokeWidth="1" opacity="0.3" />
                    </svg>
                    {/* Floating mails */}
                    <div className="ct-fm ct-fm1">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F17F0D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 4L12 13 2 4" />
                      </svg>
                    </div>
                    <div className="ct-fm ct-fm2">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F17F0D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6">
                        <rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 4L12 13 2 4" />
                      </svg>
                    </div>
                    <div className="ct-fm ct-fm3">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F17F0D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4">
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
                  <p style={{ color: "#fff", fontSize: 22, fontWeight: 700, margin: 0 }}>Message Sent!</p>
                  <p style={{ color: "#9ca3af", fontSize: 14, margin: 0, maxWidth: 320, lineHeight: 1.6 }}>Our Team will get in touch with you shortly!</p>
                </div>
              ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" as const, gap: 24, height: "100%" }}>
                {/* Name */}
                <div className="ct-field">
                  <label htmlFor="contact-name" className="ct-label">Name</label>
                  <input id="contact-name" type="text" name="name" value={form.name} onChange={handleChange} className="ct-input" required />
                </div>

                {/* Email + Phone */}
                <div className="ct-field-row">
                  <div className="ct-field" style={{ flex: 1 }}>
                    <label htmlFor="contact-email" className="ct-label">Email</label>
                    <input id="contact-email" type="email" name="email" value={form.email} onChange={handleChange} className="ct-input" required />
                  </div>
                  <div className="ct-field" style={{ flex: 1 }}>
                    <label htmlFor="contact-phone" className="ct-label">Phone No</label>
                    <input id="contact-phone" type="tel" name="phone" value={form.phone} onChange={handleChange} className="ct-input" />
                  </div>
                </div>

                {/* Organization + Role */}
                <div className="ct-field-row">
                  <div className="ct-field" style={{ flex: 1 }}>
                    <label htmlFor="contact-organization" className="ct-label">Organization</label>
                    <input id="contact-organization" type="text" name="organization" value={form.organization} onChange={handleChange} className="ct-input" />
                  </div>
                  <div className="ct-field" style={{ flex: 1 }}>
                    <label htmlFor="contact-role" className="ct-label">Role</label>
                    <input id="contact-role" type="text" name="role" value={form.role} onChange={handleChange} className="ct-input" />
                  </div>
                </div>

                {/* Message */}
                <div className="ct-field">
                  <label htmlFor="contact-message" className="ct-label">Message</label>
                  <input id="contact-message" type="text" name="message" value={form.message} onChange={handleChange} className="ct-input" required />
                </div>

                {/* Submit */}
                <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: 16, marginTop: "auto" }}>
                  {status === "error" && <span style={{ color: "#ef4444", fontSize: 14 }}>Something went wrong. Please try again.</span>}
                  <button type="submit" className="ct-submit" disabled={status === "sending"}>
                    {status === "sending" ? "Sending..." : "Submit"}
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
