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
  },
  twitter: {
    card: "summary_large_image",
    title: "Changelog - Product Updates & Release Notes",
    description:
      "Stay up to date with WalnutAI product updates, new features, and release notes.",
  },
  alternates: { canonical: `${siteUrl}/changelog` },
};

interface ReleaseEntry {
  version: string;
  date: string;
  title: string;
  description?: string;
  tags: string[];
  items: string[];
  highlights?: string[];
}

const releases: ReleaseEntry[] = [
  {
    version: "2.0",
    date: "Mar 15, 2026",
    title: "Platform Launch",
    description: "The official public launch of WalnutAI — a complete AI-powered ecosystem for software delivery, from requirements to production.",
    tags: ["Major Release", "Platform"],
    highlights: [
      "End-to-end SDLC automation from requirements to deployment",
      "AI-powered gap analysis engine for coverage insights",
      "Interactive dashboard with real-time project metrics",
    ],
    items: [
      "Role-based access control with organization management",
      "Public API with comprehensive documentation",
      "Multi-project workspace support",
      "Custom webhook integrations",
      "Onboarding wizard for new teams",
    ],
  },
  {
    version: "1.8",
    date: "Feb 20, 2026",
    title: "Testing & Execution Engine",
    description: "A major upgrade to our testing infrastructure — multi-framework support, visual regression, and parallel execution.",
    tags: ["Feature", "Testing"],
    highlights: [
      "Automated test case generation from requirements and code",
      "Multi-framework test execution (Selenium, Cypress, Playwright)",
    ],
    items: [
      "Visual regression testing with AI-based diff detection",
      "Test coverage mapping and gap identification",
      "Parallel test execution for faster feedback cycles",
      "Test result history and trend analytics",
      "Exportable test execution reports (PDF, CSV)",
    ],
  },
  {
    version: "1.5",
    date: "Jan 15, 2026",
    title: "Enterprise Features",
    description: "Enterprise-grade security, compliance, and access controls for regulated industries.",
    tags: ["Enterprise", "Security"],
    items: [
      "SOC 2 Type II aligned security controls",
      "SSO integration with SAML 2.0 and OIDC support",
      "Audit logging for all user and system actions",
      "Custom role and permission management",
      "Data residency options for regulated industries",
      "IP allowlisting and session management",
    ],
  },
  {
    version: "1.2",
    date: "Dec 10, 2025",
    title: "Integrations Expansion",
    description: "Connect your entire toolchain — from source control to cloud infrastructure.",
    tags: ["Integrations", "DevOps"],
    items: [
      "Native Jira integration for bi-directional sync",
      "GitHub and GitLab integration for code and PR workflows",
      "Docker and Kubernetes deployment pipeline support",
      "AWS, Azure, and GCP cloud provider connectors",
      "Slack and Microsoft Teams notification channels",
      "Figma integration for design-to-test automation",
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
      <main id="main-content" className="cl-page">
        {/* Hero */}
        <section className="cl-hero">
          <div className="cl-hero-inner">
            <p className="cl-hero-label">Changelog</p>
            <h1 className="cl-hero-title">
              Product Updates &{" "}
              <span style={{ color: "#F17F0D" }}>Release Notes</span>
            </h1>
            <p className="cl-hero-sub">
              Follow along as we build the AI ecosystem for software delivery.
              New features, improvements, and platform updates.
            </p>
          </div>
        </section>

        {/* Entries */}
        <section className="cl-entries">
          {releases.map((release, idx) => (
            <article key={release.version} className={`cl-entry ${idx === 0 ? "cl-entry--latest" : ""}`}>
              {/* Left: date + version (sticky on desktop) */}
              <div className="cl-entry-side">
                <span className="cl-version">{release.version}</span>
                <time className="cl-date">{release.date}</time>
              </div>

              {/* Right: content */}
              <div className="cl-entry-content">
                {/* Tags */}
                <div className="cl-tags">
                  {release.tags.map((tag) => (
                    <span
                      key={tag}
                      className="cl-tag"
                      style={{
                        color: tagColors[tag] || "#F17F0D",
                        background: `${tagColors[tag] || "#F17F0D"}14`,
                        borderColor: `${tagColors[tag] || "#F17F0D"}30`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h2 className="cl-title">{release.title}</h2>

                {/* Description */}
                {release.description && (
                  <p className="cl-desc">{release.description}</p>
                )}

                {/* Highlights */}
                {release.highlights && release.highlights.length > 0 && (
                  <div className="cl-highlights">
                    {release.highlights.map((h) => (
                      <div key={h} className="cl-highlight">
                        <span className="cl-highlight-icon">&#10024;</span>
                        {h}
                      </div>
                    ))}
                  </div>
                )}

                {/* Items */}
                <ul className="cl-items">
                  {release.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
