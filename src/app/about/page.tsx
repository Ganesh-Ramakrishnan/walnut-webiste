import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const siteUrl = "https://www.walnutai.ai";

export const metadata: Metadata = {
  title: "About WalnutAI - AI Ecosystem for Software Delivery",
  description:
    "Learn about WalnutAI, the AI ecosystem for software delivery from intent to production. Based in Bangalore, we automate the full SDLC with zero blind spots.",
  keywords: [
    "about WalnutAI",
    "WalnutAI company",
    "AI software delivery",
    "SDLC automation",
    "Bangalore startup",
    "AI ecosystem",
    "software development automation",
  ],
  openGraph: {
    title: "About WalnutAI - AI Ecosystem for Software Delivery",
    description:
      "Learn about WalnutAI, the AI ecosystem for software delivery from intent to production.",
    url: `${siteUrl}/about`,
    siteName: "WalnutAI",
    type: "website",
    images: [{ url: "https://walnutai.dev/og/about.png", width: 1200, height: 630, alt: "About WalnutAI — AI Ecosystem for Software Delivery" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About WalnutAI - AI Ecosystem for Software Delivery",
    description:
      "Learn about WalnutAI, the AI ecosystem for software delivery from intent to production.",
    site: "@WalnutAI",
    images: ["https://walnutai.dev/og/about.png"],
  },
  alternates: {
    canonical: `${siteUrl}/about`,
  },
};

const capabilities = [
  {
    title: "Requirements Engineering",
    description:
      "Transform natural-language intent into structured, traceable requirements with AI-powered gap analysis.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F17F0D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><path d="M14 2v6h6" /><path d="M16 13H8" /><path d="M16 17H8" /><path d="M10 9H8" />
      </svg>
    ),
  },
  {
    title: "AI Code Generation",
    description:
      "Generate production-ready code directly from requirements, keeping every line traceable and compliant.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F17F0D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: "Automated Testing",
    description:
      "Create, maintain, and execute comprehensive test suites automatically, covering edge cases humans miss.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F17F0D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 2h6l3 7H6L9 2z" /><path d="M12 9v13" /><path d="M8 22h8" /><path d="M6 13h12" />
      </svg>
    ),
  },
  {
    title: "Deployment Automation",
    description:
      "Streamline CI/CD pipelines from build to production with intelligent, risk-aware deployment strategies.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F17F0D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    title: "Gap Analysis & Traceability",
    description:
      "Identify coverage gaps across requirements, code, and tests with full lifecycle traceability.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F17F0D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /><path d="M8 11h6" /><path d="M11 8v6" />
      </svg>
    ),
  },
];

const differentiators = [
  {
    title: "Full SDLC Coverage",
    description:
      "Unlike point solutions that address only coding or testing, WalnutAI spans the entire software delivery lifecycle from intent to production.",
  },
  {
    title: "Zero Blind Spots",
    description:
      "Our gap analysis engine surfaces missing requirements, untested paths, and deployment risks before they reach production.",
  },
  {
    title: "Enterprise-Grade Security",
    description:
      "SOC 2 aligned, GDPR compliant, with AES-256 encryption, role-based access control, and complete data isolation.",
  },
  {
    title: "Seamless Integrations",
    description:
      "Native integrations with Jira, GitHub, GitLab, Docker, Kubernetes, AWS, and the tools your team already uses.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: 80 }}>
        {/* Hero */}
        <section
          style={{
            background: "var(--bg-page)",
            padding: "80px 24px 60px",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <p
              style={{
                color: "#F17F0D",
                fontWeight: 600,
                fontSize: 14,
                textTransform: "uppercase",
                letterSpacing: 1.5,
                marginBottom: 16,
              }}
            >
              About Us
            </p>
            <h1
              style={{
                color: "var(--text-primary)",
                fontSize: "clamp(32px, 5vw, 52px)",
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: 20,
              }}
            >
              Building the{" "}
              <span style={{ color: "#F17F0D" }}>AI Ecosystem</span> for
              Software Delivery
            </h1>
            <p
              style={{
                color: "var(--text-muted)",
                fontSize: 18,
                lineHeight: 1.7,
                maxWidth: 640,
                margin: "0 auto",
              }}
            >
              WalnutAI is an AI-powered platform that automates the entire
              software delivery lifecycle -- from intent to production -- with
              zero blind spots.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section
          style={{
            background: "var(--bg-page)",
            padding: "60px 24px",
          }}
        >
          <div
            style={{
              maxWidth: 900,
              margin: "0 auto",
              background: "var(--bg-elevated)",
              border: "1px solid var(--border-elevated)",
              borderRadius: 16,
              padding: "48px 40px",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                color: "var(--text-primary)",
                fontSize: 28,
                fontWeight: 700,
                marginBottom: 16,
              }}
            >
              Our Mission
            </h2>
            <p
              style={{
                color: "var(--text-muted)",
                fontSize: 17,
                lineHeight: 1.75,
                maxWidth: 680,
                margin: "0 auto",
              }}
            >
              Software teams spend too much time on repetitive tasks and still
              ship with gaps. Our mission is to{" "}
              <strong style={{ color: "var(--text-secondary)" }}>
                eliminate blind spots across the SDLC
              </strong>{" "}
              by connecting requirements, code, testing, and deployment into a
              single AI-orchestrated workflow -- so teams can deliver better
              software, faster.
            </p>
          </div>
        </section>

        {/* What We Do */}
        <section style={{ background: "var(--bg-page)", padding: "60px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h2
              style={{
                color: "var(--text-primary)",
                fontSize: 32,
                fontWeight: 700,
                textAlign: "center",
                marginBottom: 48,
              }}
            >
              What We Do
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: 24,
              }}
            >
              {capabilities.map((cap) => (
                <div
                  key={cap.title}
                  style={{
                    background: "var(--bg-elevated)",
                    border: "1px solid var(--border-elevated)",
                    borderRadius: 14,
                    padding: "32px 24px",
                  }}
                >
                  <div style={{ marginBottom: 14, width: 48, height: 48, background: "rgba(241, 127, 13, 0.08)", border: "1px solid rgba(241, 127, 13, 0.15)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {cap.icon}
                  </div>
                  <h3
                    style={{
                      color: "var(--text-primary)",
                      fontSize: 18,
                      fontWeight: 700,
                      marginBottom: 10,
                    }}
                  >
                    {cap.title}
                  </h3>
                  <p
                    style={{
                      color: "var(--text-muted)",
                      fontSize: 15,
                      lineHeight: 1.65,
                    }}
                  >
                    {cap.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why WalnutAI */}
        <section style={{ background: "var(--bg-page)", padding: "60px 24px" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto" }}>
            <h2
              style={{
                color: "var(--text-primary)",
                fontSize: 32,
                fontWeight: 700,
                textAlign: "center",
                marginBottom: 48,
              }}
            >
              Why WalnutAI
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: 24,
              }}
            >
              {differentiators.map((d, i) => (
                <div
                  key={d.title}
                  style={{
                    background: "var(--bg-elevated)",
                    border: "1px solid var(--border-elevated)",
                    borderRadius: 14,
                    padding: "32px 24px",
                    borderTop: "3px solid #F17F0D",
                  }}
                >
                  <span
                    style={{
                      color: "#F17F0D",
                      fontSize: 13,
                      fontWeight: 700,
                      marginBottom: 10,
                      display: "block",
                    }}
                  >
                    0{i + 1}
                  </span>
                  <h3
                    style={{
                      color: "var(--text-primary)",
                      fontSize: 18,
                      fontWeight: 700,
                      marginBottom: 10,
                    }}
                  >
                    {d.title}
                  </h3>
                  <p
                    style={{
                      color: "var(--text-muted)",
                      fontSize: 15,
                      lineHeight: 1.65,
                    }}
                  >
                    {d.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          style={{
            background: "var(--bg-page)",
            padding: "60px 24px 100px",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: 600, margin: "0 auto" }}>
            <h2
              style={{
                color: "var(--text-primary)",
                fontSize: 30,
                fontWeight: 700,
                marginBottom: 16,
              }}
            >
              Ready to Transform Your Software Delivery?
            </h2>
            <p
              style={{
                color: "var(--text-muted)",
                fontSize: 16,
                lineHeight: 1.7,
                marginBottom: 32,
              }}
            >
              See how WalnutAI can automate your entire SDLC from intent to
              production.
            </p>
            <Link
              href="/contact"
              style={{
                display: "inline-block",
                background: "#F17F0D",
                color: "#fff",
                fontWeight: 700,
                fontSize: 16,
                padding: "14px 36px",
                borderRadius: 10,
                textDecoration: "none",
                transition: "opacity 0.2s",
              }}
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
