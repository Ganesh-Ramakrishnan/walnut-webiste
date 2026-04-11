import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const siteUrl = "https://www.walnutai.ai";

export const metadata: Metadata = {
  title: "Changelog - Product Updates & Release Notes",
  description:
    "Stay up to date with WalnutAI product updates, new features, and release notes. See what's new in the AI ecosystem for software delivery.",
  keywords: [
    "WalnutAI changelog",
    "WalnutAI release notes",
    "WalnutAI updates",
    "product updates",
    "new features",
    "AI software delivery updates",
  ],
  openGraph: {
    title: "Changelog - Product Updates & Release Notes",
    description:
      "Stay up to date with WalnutAI product updates, new features, and release notes.",
    url: `${siteUrl}/changelog`,
    siteName: "WalnutAI",
    type: "website",
    images: [{ url: "https://walnutai.dev/og/changelog.png", width: 1200, height: 630, alt: "WalnutAI Changelog — Product Updates & Release Notes" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Changelog - Product Updates & Release Notes",
    description:
      "Stay up to date with WalnutAI product updates, new features, and release notes.",
    site: "@WalnutAI",
    images: ["https://walnutai.dev/og/changelog.png"],
  },
  alternates: {
    canonical: `${siteUrl}/changelog`,
  },
};

interface ReleaseEntry {
  date: string;
  title: string;
  tags: string[];
  items: string[];
}

const releases: ReleaseEntry[] = [
  {
    date: "March 2026",
    title: "Platform Launch",
    tags: ["Major Release", "Platform"],
    items: [
      "Official public launch of the WalnutAI platform",
      "End-to-end SDLC automation from requirements to deployment",
      "AI-powered gap analysis engine for coverage insights",
      "Interactive dashboard with real-time project metrics",
      "Role-based access control with organization management",
      "Public API with comprehensive documentation",
    ],
  },
  {
    date: "February 2026",
    title: "Testing & Execution Engine",
    tags: ["Feature", "Testing"],
    items: [
      "Automated test case generation from requirements and code",
      "Multi-framework test execution (Selenium, Cypress, Playwright)",
      "Visual regression testing with AI-based diff detection",
      "Test coverage mapping and gap identification",
      "Parallel test execution for faster feedback cycles",
    ],
  },
  {
    date: "January 2026",
    title: "Enterprise Features",
    tags: ["Enterprise", "Security"],
    items: [
      "SOC 2 Type II aligned security controls",
      "SSO integration with SAML 2.0 and OIDC support",
      "Audit logging for all user and system actions",
      "Custom role and permission management",
      "Data residency options for regulated industries",
    ],
  },
  {
    date: "December 2025",
    title: "Integrations Expansion",
    tags: ["Integrations", "DevOps"],
    items: [
      "Native Jira integration for bi-directional sync",
      "GitHub and GitLab integration for code and PR workflows",
      "Docker and Kubernetes deployment pipeline support",
      "AWS, Azure, and GCP cloud provider connectors",
      "Slack and Microsoft Teams notification channels",
    ],
  },
];

const tagColors: Record<string, string> = {
  "Major Release": "#F17F0D",
  Platform: "#3b82f6",
  Feature: "#10b981",
  Testing: "#8b5cf6",
  Enterprise: "#ec4899",
  Security: "#ef4444",
  Integrations: "#06b6d4",
  DevOps: "#f59e0b",
};

export default function ChangelogPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: 80 }}>
        {/* Hero */}
        <section
          style={{
            background: "#0a0a0a",
            padding: "80px 24px 40px",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: 700, margin: "0 auto" }}>
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
              Changelog
            </p>
            <h1
              style={{
                color: "#fff",
                fontSize: "clamp(32px, 5vw, 48px)",
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: 20,
              }}
            >
              Product Updates &{" "}
              <span style={{ color: "#F17F0D" }}>Release Notes</span>
            </h1>
            <p
              style={{
                color: "#9ca3af",
                fontSize: 17,
                lineHeight: 1.7,
              }}
            >
              Follow along as we build the AI ecosystem for software delivery.
              New features, improvements, and platform updates.
            </p>
          </div>
        </section>

        {/* Timeline */}
        <section style={{ background: "#0a0a0a", padding: "40px 24px 100px" }}>
          <div
            style={{
              maxWidth: 760,
              margin: "0 auto",
              position: "relative",
            }}
          >
            {/* Vertical line */}
            <div
              style={{
                position: "absolute",
                left: 18,
                top: 0,
                bottom: 0,
                width: 2,
                background:
                  "linear-gradient(to bottom, #F17F0D, #262626 70%, transparent)",
              }}
            />

            {releases.map((release, idx) => (
              <div
                key={release.date}
                style={{
                  position: "relative",
                  paddingLeft: 56,
                  marginBottom: idx < releases.length - 1 ? 56 : 0,
                }}
              >
                {/* Dot */}
                <div
                  style={{
                    position: "absolute",
                    left: 10,
                    top: 6,
                    width: 18,
                    height: 18,
                    borderRadius: "50%",
                    background: idx === 0 ? "#F17F0D" : "#262626",
                    border:
                      idx === 0
                        ? "3px solid rgba(241,127,13,0.3)"
                        : "3px solid #333",
                  }}
                />

                {/* Date */}
                <p
                  style={{
                    color: "#6b7280",
                    fontSize: 13,
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: 1,
                    marginBottom: 8,
                  }}
                >
                  {release.date}
                </p>

                {/* Card */}
                <div
                  style={{
                    background: "#141414",
                    border: "1px solid #262626",
                    borderRadius: 14,
                    padding: "28px 24px",
                  }}
                >
                  <h3
                    style={{
                      color: "#fff",
                      fontSize: 20,
                      fontWeight: 700,
                      marginBottom: 12,
                    }}
                  >
                    {release.title}
                  </h3>

                  {/* Tags */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 8,
                      marginBottom: 18,
                    }}
                  >
                    {release.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          display: "inline-block",
                          fontSize: 11,
                          fontWeight: 700,
                          color: tagColors[tag] || "#F17F0D",
                          background: `${tagColors[tag] || "#F17F0D"}18`,
                          border: `1px solid ${tagColors[tag] || "#F17F0D"}33`,
                          borderRadius: 6,
                          padding: "3px 10px",
                          textTransform: "uppercase",
                          letterSpacing: 0.5,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Items */}
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                    }}
                  >
                    {release.items.map((item) => (
                      <li
                        key={item}
                        style={{
                          color: "#9ca3af",
                          fontSize: 14,
                          lineHeight: 1.7,
                          paddingLeft: 18,
                          position: "relative",
                          marginBottom: 6,
                        }}
                      >
                        <span
                          style={{
                            position: "absolute",
                            left: 0,
                            color: "#F17F0D",
                          }}
                        >
                          -
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
