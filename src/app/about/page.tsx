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
  },
  twitter: {
    card: "summary_large_image",
    title: "About WalnutAI - AI Ecosystem for Software Delivery",
    description:
      "Learn about WalnutAI, the AI ecosystem for software delivery from intent to production.",
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
    icon: "\u{1F4CB}",
  },
  {
    title: "AI Code Generation",
    description:
      "Generate production-ready code directly from requirements, keeping every line traceable and compliant.",
    icon: "\u{1F4BB}",
  },
  {
    title: "Automated Testing",
    description:
      "Create, maintain, and execute comprehensive test suites automatically, covering edge cases humans miss.",
    icon: "\u{1F9EA}",
  },
  {
    title: "Deployment Automation",
    description:
      "Streamline CI/CD pipelines from build to production with intelligent, risk-aware deployment strategies.",
    icon: "\u{1F680}",
  },
  {
    title: "Gap Analysis & Traceability",
    description:
      "Identify coverage gaps across requirements, code, and tests with full lifecycle traceability.",
    icon: "\u{1F50D}",
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
            background: "#0a0a0a",
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
                color: "#fff",
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
                color: "#9ca3af",
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
            background: "#0a0a0a",
            padding: "60px 24px",
          }}
        >
          <div
            style={{
              maxWidth: 900,
              margin: "0 auto",
              background: "#141414",
              border: "1px solid #262626",
              borderRadius: 16,
              padding: "48px 40px",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                color: "#fff",
                fontSize: 28,
                fontWeight: 700,
                marginBottom: 16,
              }}
            >
              Our Mission
            </h2>
            <p
              style={{
                color: "#9ca3af",
                fontSize: 17,
                lineHeight: 1.75,
                maxWidth: 680,
                margin: "0 auto",
              }}
            >
              Software teams spend too much time on repetitive tasks and still
              ship with gaps. Our mission is to{" "}
              <strong style={{ color: "#d1d5db" }}>
                eliminate blind spots across the SDLC
              </strong>{" "}
              by connecting requirements, code, testing, and deployment into a
              single AI-orchestrated workflow -- so teams can deliver better
              software, faster.
            </p>
          </div>
        </section>

        {/* What We Do */}
        <section style={{ background: "#0a0a0a", padding: "60px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h2
              style={{
                color: "#fff",
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
                    background: "#141414",
                    border: "1px solid #262626",
                    borderRadius: 14,
                    padding: "32px 24px",
                  }}
                >
                  <div style={{ fontSize: 32, marginBottom: 14 }}>
                    {cap.icon}
                  </div>
                  <h3
                    style={{
                      color: "#fff",
                      fontSize: 18,
                      fontWeight: 700,
                      marginBottom: 10,
                    }}
                  >
                    {cap.title}
                  </h3>
                  <p
                    style={{
                      color: "#9ca3af",
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
        <section style={{ background: "#0a0a0a", padding: "60px 24px" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto" }}>
            <h2
              style={{
                color: "#fff",
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
                    background: "#141414",
                    border: "1px solid #262626",
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
                      color: "#fff",
                      fontSize: 18,
                      fontWeight: 700,
                      marginBottom: 10,
                    }}
                  >
                    {d.title}
                  </h3>
                  <p
                    style={{
                      color: "#9ca3af",
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

        {/* Company Info */}
        <section style={{ background: "#0a0a0a", padding: "60px 24px" }}>
          <div
            style={{
              maxWidth: 900,
              margin: "0 auto",
              background: "#141414",
              border: "1px solid #262626",
              borderRadius: 16,
              padding: "48px 40px",
            }}
          >
            <h2
              style={{
                color: "#fff",
                fontSize: 28,
                fontWeight: 700,
                marginBottom: 32,
                textAlign: "center",
              }}
            >
              Company
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: 32,
                textAlign: "center",
              }}
            >
              <div>
                <p
                  style={{
                    color: "#6b7280",
                    fontSize: 13,
                    textTransform: "uppercase",
                    letterSpacing: 1,
                    marginBottom: 6,
                  }}
                >
                  Headquarters
                </p>
                <p style={{ color: "#fff", fontSize: 16, fontWeight: 600 }}>
                  Bangalore, India
                </p>
              </div>
              <div>
                <p
                  style={{
                    color: "#6b7280",
                    fontSize: 13,
                    textTransform: "uppercase",
                    letterSpacing: 1,
                    marginBottom: 6,
                  }}
                >
                  Team Size
                </p>
                <p style={{ color: "#fff", fontSize: 16, fontWeight: 600 }}>
                  11 - 50 Employees
                </p>
              </div>
              <div>
                <p
                  style={{
                    color: "#6b7280",
                    fontSize: 13,
                    textTransform: "uppercase",
                    letterSpacing: 1,
                    marginBottom: 6,
                  }}
                >
                  Industry
                </p>
                <p style={{ color: "#fff", fontSize: 16, fontWeight: 600 }}>
                  AI / Developer Tools
                </p>
              </div>
              <div>
                <p
                  style={{
                    color: "#6b7280",
                    fontSize: 13,
                    textTransform: "uppercase",
                    letterSpacing: 1,
                    marginBottom: 6,
                  }}
                >
                  Contact
                </p>
                <p style={{ color: "#fff", fontSize: 16, fontWeight: 600 }}>
                  contact@walnutai.ai
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: 20,
                marginTop: 36,
              }}
            >
              <a
                href="https://www.linkedin.com/company/wal-nut/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#9ca3af",
                  fontSize: 14,
                  textDecoration: "none",
                  padding: "8px 18px",
                  border: "1px solid #333",
                  borderRadius: 8,
                  transition: "border-color 0.2s, color 0.2s",
                }}
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/meet_walnutai/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#9ca3af",
                  fontSize: 14,
                  textDecoration: "none",
                  padding: "8px 18px",
                  border: "1px solid #333",
                  borderRadius: 8,
                  transition: "border-color 0.2s, color 0.2s",
                }}
              >
                Instagram
              </a>
              <a
                href="https://discord.gg/Tcw88yu6q"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#9ca3af",
                  fontSize: 14,
                  textDecoration: "none",
                  padding: "8px 18px",
                  border: "1px solid #333",
                  borderRadius: 8,
                  transition: "border-color 0.2s, color 0.2s",
                }}
              >
                Discord
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          style={{
            background: "#0a0a0a",
            padding: "60px 24px 100px",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: 600, margin: "0 auto" }}>
            <h2
              style={{
                color: "#fff",
                fontSize: 30,
                fontWeight: 700,
                marginBottom: 16,
              }}
            >
              Ready to Transform Your Software Delivery?
            </h2>
            <p
              style={{
                color: "#9ca3af",
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
