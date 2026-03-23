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
            Contact <span className="text-orange">Us</span>
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
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" as const, gap: 24, height: "100%" }}>
                {/* Name */}
                <div className="ct-field">
                  <label className="ct-label">Name</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} className="ct-input" required />
                </div>

                {/* Email + Phone */}
                <div className="ct-field-row">
                  <div className="ct-field" style={{ flex: 1 }}>
                    <label className="ct-label">Email</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} className="ct-input" required />
                  </div>
                  <div className="ct-field" style={{ flex: 1 }}>
                    <label className="ct-label">Phone No</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} className="ct-input" />
                  </div>
                </div>

                {/* Organization + Role */}
                <div className="ct-field-row">
                  <div className="ct-field" style={{ flex: 1 }}>
                    <label className="ct-label">Organization</label>
                    <input type="text" name="organization" value={form.organization} onChange={handleChange} className="ct-input" />
                  </div>
                  <div className="ct-field" style={{ flex: 1 }}>
                    <label className="ct-label">Role</label>
                    <input type="text" name="role" value={form.role} onChange={handleChange} className="ct-input" />
                  </div>
                </div>

                {/* Message */}
                <div className="ct-field">
                  <label className="ct-label">Message</label>
                  <input type="text" name="message" value={form.message} onChange={handleChange} className="ct-input" required />
                </div>

                {/* Submit */}
                <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: 16, marginTop: "auto" }}>
                  {status === "success" && <span style={{ color: "#22c55e", fontSize: 14 }}>Message sent successfully!</span>}
                  {status === "error" && <span style={{ color: "#ef4444", fontSize: 14 }}>Something went wrong. Please try again.</span>}
                  <button type="submit" className="ct-submit" disabled={status === "sending"}>
                    {status === "sending" ? "Sending..." : "Submit"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
