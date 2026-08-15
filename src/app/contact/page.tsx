import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch with WalnutAI",
  description:
    "Contact WalnutAI for demos, pricing, partnerships, or support. Our team is ready to help you automate software delivery from intent to production.",
  openGraph: {
    title: "Contact Us - Get in Touch with WalnutAI",
    description:
      "Contact WalnutAI for demos, pricing, partnerships, or support.",
    url: "https://www.walnutai.ai/contact",
    siteName: "WalnutAI",
    type: "website",
    images: [{ url: "https://walnutai.dev/og/contact.png", width: 1200, height: 630, alt: "Contact WalnutAI — Get in Touch for Demos, Pricing & Support" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - Get in Touch with WalnutAI",
    description:
      "Contact WalnutAI for demos, pricing, partnerships, or support.",
    site: "@WalnutAI",
    images: ["https://walnutai.dev/og/contact.png"],
  },
  alternates: {
    canonical: "https://www.walnutai.ai/contact",
  },
};

const contactMethods = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 4L12 13 2 4" />
      </svg>
    ),
    title: "Email Us",
    detail: "contact@walnutai.ai",
    sub: "We respond within 24 hours",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="#5865F2">
        <path d="M20.317 4.369a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.331c-1.183 0-2.157-1.086-2.157-2.419s.955-2.419 2.157-2.419c1.21 0 2.176 1.095 2.157 2.42 0 1.332-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.086-2.157-2.419s.955-2.419 2.157-2.419c1.21 0 2.176 1.095 2.157 2.42 0 1.332-.946 2.418-2.157 2.418z"/>
      </svg>
    ),
    title: "Discord Community",
    detail: "Join our Discord",
    href: "https://discord.gg/Tcw88yu6q",
    sub: "Chat with the team and community",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="#0A66C2">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    title: "LinkedIn",
    detail: "Follow WalnutAI",
    href: "https://www.linkedin.com/company/wal-nut/",
    sub: "Stay updated with latest news",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: "Location",
    detail: "Bangalore, India",
    sub: "AI / Developer Tools",
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: 80 }}>
        {/* Hero */}
        <section style={{ background: "var(--surface-2b)", padding: "80px 24px 40px", textAlign: "center" }}>
          <div style={{ maxWidth: 700, margin: "0 auto" }}>
            <p style={{ color: "var(--accent)", fontWeight: 600, fontSize: 14, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 16 }}>
              Get in Touch
            </p>
            <h1 style={{ color: "var(--text-primary)", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, lineHeight: 1.2, marginBottom: 16 }}>
              Let&apos;s Build Something{" "}
              <span style={{ color: "var(--accent)" }}>Together</span>
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: 16, lineHeight: 1.7 }}>
              Whether you want a demo, have questions about pricing, or need enterprise support — we&apos;re here to help.
            </p>
          </div>
        </section>

        {/* Contact Methods Grid */}
        <section style={{ background: "var(--surface-2b)", padding: "0 24px 32px" }}>
          <div style={{ maxWidth: 720, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 12 }}>
            {contactMethods.map((m) => (
              <div key={m.title} style={{ background: "var(--surface-2)", border: "1px solid var(--border-muted)", borderRadius: 10, padding: "16px 14px", textAlign: "center" }}>
                <div style={{ marginBottom: 8, display: "flex", justifyContent: "center" }}>
                  <span style={{ display: "inline-flex", transform: "scale(0.75)" }}>{m.icon}</span>
                </div>
                <h3 style={{ color: "var(--text-primary)", fontSize: 13, fontWeight: 700, marginBottom: 4 }}>{m.title}</h3>
                {m.href ? (
                  <a href={m.href} target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)", fontSize: 12, fontWeight: 600, textDecoration: "none" }}>
                    {m.detail} &rarr;
                  </a>
                ) : (
                  <p style={{ color: "var(--text-secondary-strong)", fontSize: 12, fontWeight: 600, margin: 0 }}>{m.detail}</p>
                )}
                <p style={{ color: "#555", fontSize: 11, marginTop: 4 }}>{m.sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <ContactSection />

        {/* FAQ */}
        <section style={{ background: "var(--surface-2b)", padding: "60px 24px 80px" }}>
          <div style={{ maxWidth: 700, margin: "0 auto" }}>
            <h2 style={{ color: "var(--text-primary)", fontSize: 28, fontWeight: 700, textAlign: "center", marginBottom: 32 }}>
              Frequently Asked Questions
            </h2>
            {[
              { q: "How quickly will I hear back?", a: "We respond to all inquiries within 24 hours on business days. For urgent matters, reach out on Discord for faster support." },
              { q: "Can I get a live demo?", a: "Yes! Fill out the contact form and select 'Demo Request' as the subject. We'll schedule a personalized walkthrough of WalnutAI." },
              { q: "Do you offer free trials?", a: "Yes, we offer a free trial so you can experience WalnutAI before committing. No credit card required to get started." },
              { q: "I'm interested in Enterprise. Who do I talk to?", a: "Fill out the form and mention Enterprise in your message. Our solutions team will reach out to discuss your specific requirements, security needs, and pricing." },
              { q: "Where can I find documentation?", a: "Visit docs.walnutai.ai for comprehensive guides, API references, and tutorials to get started with WalnutAI." },
            ].map((faq) => (
              <div key={faq.q} style={{ borderBottom: "1px solid var(--border-muted)", padding: "20px 0" }}>
                <h3 style={{ color: "var(--text-primary)", fontSize: 16, fontWeight: 600, marginBottom: 8 }}>{faq.q}</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.7 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
