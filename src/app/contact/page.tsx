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
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - Get in Touch with WalnutAI",
    description:
      "Contact WalnutAI for demos, pricing, partnerships, or support.",
  },
  alternates: {
    canonical: "https://www.walnutai.ai/contact",
  },
};

const contactMethods = [
  {
    icon: "📧",
    title: "Email Us",
    detail: "contact@walnutai.ai",
    sub: "We respond within 24 hours",
  },
  {
    icon: "💬",
    title: "Discord Community",
    detail: "Join our Discord",
    href: "https://discord.gg/Tcw88yu6q",
    sub: "Chat with the team and community",
  },
  {
    icon: "💼",
    title: "LinkedIn",
    detail: "Follow WalnutAI",
    href: "https://www.linkedin.com/company/wal-nut/",
    sub: "Stay updated with latest news",
  },
  {
    icon: "📍",
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
        <section style={{ background: "#0a0a0a", padding: "80px 24px 40px", textAlign: "center" }}>
          <div style={{ maxWidth: 700, margin: "0 auto" }}>
            <p style={{ color: "#F17F0D", fontWeight: 600, fontSize: 14, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 16 }}>
              Get in Touch
            </p>
            <h1 style={{ color: "#fff", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, lineHeight: 1.2, marginBottom: 16 }}>
              Let&apos;s Build Something{" "}
              <span style={{ color: "#F17F0D" }}>Together</span>
            </h1>
            <p style={{ color: "#9ca3af", fontSize: 16, lineHeight: 1.7 }}>
              Whether you want a demo, have questions about pricing, or need enterprise support — we&apos;re here to help.
            </p>
          </div>
        </section>

        {/* Contact Methods Grid */}
        <section style={{ background: "#0a0a0a", padding: "0 24px 40px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
            {contactMethods.map((m) => (
              <div key={m.title} style={{ background: "#111", border: "1px solid #222", borderRadius: 14, padding: "24px 20px", textAlign: "center" }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{m.icon}</div>
                <h3 style={{ color: "#fff", fontSize: 15, fontWeight: 700, marginBottom: 6 }}>{m.title}</h3>
                {m.href ? (
                  <a href={m.href} target="_blank" rel="noopener noreferrer" style={{ color: "#F17F0D", fontSize: 14, fontWeight: 600, textDecoration: "none" }}>
                    {m.detail} &rarr;
                  </a>
                ) : (
                  <p style={{ color: "#d1d5db", fontSize: 14, fontWeight: 600 }}>{m.detail}</p>
                )}
                <p style={{ color: "#6b7280", fontSize: 12, marginTop: 6 }}>{m.sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <ContactSection />

        {/* FAQ */}
        <section style={{ background: "#0a0a0a", padding: "60px 24px 80px" }}>
          <div style={{ maxWidth: 700, margin: "0 auto" }}>
            <h2 style={{ color: "#fff", fontSize: 28, fontWeight: 700, textAlign: "center", marginBottom: 32 }}>
              Frequently Asked Questions
            </h2>
            {[
              { q: "How quickly will I hear back?", a: "We respond to all inquiries within 24 hours on business days. For urgent matters, reach out on Discord for faster support." },
              { q: "Can I get a live demo?", a: "Yes! Fill out the contact form and select 'Demo Request' as the subject. We'll schedule a personalized walkthrough of WalnutAI." },
              { q: "Do you offer free trials?", a: "Yes, we offer a free trial so you can experience WalnutAI before committing. No credit card required to get started." },
              { q: "I'm interested in Enterprise. Who do I talk to?", a: "Fill out the form and mention Enterprise in your message. Our solutions team will reach out to discuss your specific requirements, security needs, and pricing." },
              { q: "Where can I find documentation?", a: "Visit docs.walnutai.ai for comprehensive guides, API references, and tutorials to get started with WalnutAI." },
            ].map((faq) => (
              <div key={faq.q} style={{ borderBottom: "1px solid #1a1a1a", padding: "20px 0" }}>
                <h3 style={{ color: "#fff", fontSize: 16, fontWeight: 600, marginBottom: 8 }}>{faq.q}</h3>
                <p style={{ color: "#9ca3af", fontSize: 14, lineHeight: 1.7 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
