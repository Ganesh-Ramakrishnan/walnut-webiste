import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const siteUrl = "https://www.walnutai.ai";
const competitor = "GitHub Copilot";
const slug = "walnutai-vs-github-copilot";

export const metadata: Metadata = {
  title: `WalnutAI vs GitHub Copilot - Full SDLC vs Code Completion`,
  description:
    "Compare WalnutAI and GitHub Copilot. While Copilot assists with inline code suggestions, WalnutAI covers the full SDLC from requirements to deployment.",
  keywords: [
    "WalnutAI vs GitHub Copilot",
    "GitHub Copilot alternative",
    "full SDLC automation",
    "AI code generation comparison",
    "GitHub Copilot limitations",
    "best AI development tool",
  ],
  openGraph: {
    title: "WalnutAI vs GitHub Copilot - Full SDLC vs Code Completion",
    description:
      "Compare WalnutAI and GitHub Copilot. Full SDLC automation vs inline code suggestions.",
    url: `${siteUrl}/compare/${slug}`,
  },
  twitter: {
    card: "summary_large_image",
    title: "WalnutAI vs GitHub Copilot - Full SDLC vs Code Completion",
    description:
      "Compare WalnutAI and GitHub Copilot. Full SDLC automation vs inline code suggestions.",
  },
  alternates: {
    canonical: `${siteUrl}/compare/${slug}`,
  },
};

const features: [string, boolean, boolean][] = [
  ["Requirements Engineering", true, false],
  ["Natural Language to Requirements", true, false],
  ["Gap Analysis & Coverage", true, false],
  ["AI Code Generation", true, true],
  ["Inline Code Completion", true, true],
  ["Multi-file Code Generation", true, false],
  ["Automated Test Generation", true, false],
  ["Test Execution & Orchestration", true, false],
  ["Visual Regression Testing", true, false],
  ["CI/CD Pipeline Automation", true, false],
  ["Deployment Orchestration", true, false],
  ["Requirement Traceability", true, false],
  ["Full SDLC Coverage", true, false],
  ["Project Dashboard & Metrics", true, false],
  ["Role-Based Access Control", true, false],
  ["Jira / GitHub Integration", true, true],
  ["Docker & Kubernetes Support", true, false],
  ["Enterprise Security (SOC 2)", true, false],
];

const keyDifferences = [
  {
    title: "Scope of Automation",
    walnutai:
      "Covers the complete SDLC from requirements gathering through deployment, with AI orchestrating every phase.",
    competitor:
      "Focuses exclusively on code completion and inline suggestions within the editor.",
  },
  {
    title: "Testing Capabilities",
    walnutai:
      "Generates, maintains, and executes full test suites with coverage mapping and gap analysis.",
    competitor:
      "Can suggest test code snippets but does not execute, orchestrate, or analyze test coverage.",
  },
  {
    title: "Requirements & Traceability",
    walnutai:
      "Transforms natural language into structured requirements with full traceability across code and tests.",
    competitor:
      "No requirements engineering or traceability features. Operates purely at the code level.",
  },
];

export default function CompareGitHubCopilotPage() {
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
            <Link
              href="/compare"
              style={{
                color: "#6b7280",
                fontSize: 14,
                textDecoration: "none",
                display: "inline-block",
                marginBottom: 24,
              }}
            >
              &larr; All Comparisons
            </Link>
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
              Full SDLC vs Code Completion
            </p>
            <h1
              style={{
                color: "#fff",
                fontSize: "clamp(30px, 5vw, 48px)",
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: 20,
              }}
            >
              <span style={{ color: "#F17F0D" }}>WalnutAI</span> vs{" "}
              {competitor}
            </h1>
            <p
              style={{
                color: "#9ca3af",
                fontSize: 17,
                lineHeight: 1.7,
                maxWidth: 640,
                margin: "0 auto",
              }}
            >
              GitHub Copilot is a powerful code completion tool. WalnutAI is an
              end-to-end AI ecosystem that automates the entire software delivery
              lifecycle -- from requirements to production.
            </p>
          </div>
        </section>

        {/* Overview */}
        <section style={{ background: "#0a0a0a", padding: "40px 24px" }}>
          <div
            style={{
              maxWidth: 900,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 24,
            }}
          >
            <div
              style={{
                background: "#141414",
                border: "1px solid #F17F0D",
                borderRadius: 14,
                padding: "32px 24px",
              }}
            >
              <h3
                style={{
                  color: "#F17F0D",
                  fontSize: 20,
                  fontWeight: 700,
                  marginBottom: 12,
                }}
              >
                WalnutAI
              </h3>
              <p style={{ color: "#9ca3af", fontSize: 15, lineHeight: 1.65 }}>
                AI ecosystem covering the full SDLC: requirements engineering,
                code generation, automated testing, gap analysis, deployment
                automation, and project-level traceability.
              </p>
            </div>
            <div
              style={{
                background: "#141414",
                border: "1px solid #262626",
                borderRadius: 14,
                padding: "32px 24px",
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
                {competitor}
              </h3>
              <p style={{ color: "#9ca3af", fontSize: 15, lineHeight: 1.65 }}>
                AI-powered code completion tool that provides inline suggestions
                and chat-based coding assistance inside supported IDEs. Focused
                on the code-writing phase only.
              </p>
            </div>
          </div>
        </section>

        {/* Feature Comparison Table */}
        <section style={{ background: "#0a0a0a", padding: "60px 24px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2
              style={{
                color: "#fff",
                fontSize: 28,
                fontWeight: 700,
                textAlign: "center",
                marginBottom: 36,
              }}
            >
              Feature Comparison
            </h2>
            <div
              style={{
                overflowX: "auto",
                borderRadius: 14,
                border: "1px solid #262626",
              }}
            >
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  minWidth: 540,
                }}
              >
                <thead>
                  <tr style={{ background: "#1a1a1a" }}>
                    <th
                      style={{
                        textAlign: "left",
                        padding: "14px 20px",
                        color: "#9ca3af",
                        fontSize: 13,
                        fontWeight: 600,
                        borderBottom: "1px solid #262626",
                      }}
                    >
                      Feature
                    </th>
                    <th
                      style={{
                        textAlign: "center",
                        padding: "14px 20px",
                        color: "#F17F0D",
                        fontSize: 13,
                        fontWeight: 700,
                        borderBottom: "1px solid #262626",
                      }}
                    >
                      WalnutAI
                    </th>
                    <th
                      style={{
                        textAlign: "center",
                        padding: "14px 20px",
                        color: "#9ca3af",
                        fontSize: 13,
                        fontWeight: 600,
                        borderBottom: "1px solid #262626",
                      }}
                    >
                      {competitor}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {features.map(([feature, walnut, comp], i) => (
                    <tr
                      key={feature}
                      style={{
                        background: i % 2 === 0 ? "#141414" : "#111111",
                      }}
                    >
                      <td
                        style={{
                          padding: "12px 20px",
                          color: "#d1d5db",
                          fontSize: 14,
                          borderBottom: "1px solid #1e1e1e",
                        }}
                      >
                        {feature}
                      </td>
                      <td
                        style={{
                          textAlign: "center",
                          padding: "12px 20px",
                          fontSize: 18,
                          borderBottom: "1px solid #1e1e1e",
                          color: walnut ? "#22c55e" : "#ef4444",
                        }}
                      >
                        {walnut ? "\u2713" : "\u2717"}
                      </td>
                      <td
                        style={{
                          textAlign: "center",
                          padding: "12px 20px",
                          fontSize: 18,
                          borderBottom: "1px solid #1e1e1e",
                          color: comp ? "#22c55e" : "#ef4444",
                        }}
                      >
                        {comp ? "\u2713" : "\u2717"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Key Differences */}
        <section style={{ background: "#0a0a0a", padding: "60px 24px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2
              style={{
                color: "#fff",
                fontSize: 28,
                fontWeight: 700,
                textAlign: "center",
                marginBottom: 36,
              }}
            >
              Key Differences
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {keyDifferences.map((diff) => (
                <div
                  key={diff.title}
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
                      fontSize: 18,
                      fontWeight: 700,
                      marginBottom: 16,
                    }}
                  >
                    {diff.title}
                  </h3>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns:
                        "repeat(auto-fit, minmax(240px, 1fr))",
                      gap: 16,
                    }}
                  >
                    <div>
                      <p
                        style={{
                          color: "#F17F0D",
                          fontSize: 12,
                          fontWeight: 700,
                          marginBottom: 6,
                          textTransform: "uppercase",
                        }}
                      >
                        WalnutAI
                      </p>
                      <p
                        style={{
                          color: "#9ca3af",
                          fontSize: 14,
                          lineHeight: 1.65,
                        }}
                      >
                        {diff.walnutai}
                      </p>
                    </div>
                    <div>
                      <p
                        style={{
                          color: "#6b7280",
                          fontSize: 12,
                          fontWeight: 700,
                          marginBottom: 6,
                          textTransform: "uppercase",
                        }}
                      >
                        {competitor}
                      </p>
                      <p
                        style={{
                          color: "#9ca3af",
                          fontSize: 14,
                          lineHeight: 1.65,
                        }}
                      >
                        {diff.competitor}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why WalnutAI */}
        <section style={{ background: "#0a0a0a", padding: "60px 24px" }}>
          <div
            style={{
              maxWidth: 800,
              margin: "0 auto",
              background: "#141414",
              border: "1px solid #262626",
              borderRadius: 16,
              padding: "44px 36px",
              borderTop: "3px solid #F17F0D",
            }}
          >
            <h2
              style={{
                color: "#fff",
                fontSize: 26,
                fontWeight: 700,
                marginBottom: 20,
              }}
            >
              Why Choose WalnutAI
            </h2>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              {[
                "Complete SDLC automation -- not just code suggestions, but the entire delivery pipeline",
                "Built-in requirements engineering with natural language to structured specs",
                "Automated test generation, execution, and coverage gap analysis",
                "Deployment orchestration with Docker, Kubernetes, and cloud provider support",
                "Full traceability from requirements through code to tests and deployment",
                "Enterprise-grade security with SOC 2 alignment and role-based access",
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    color: "#9ca3af",
                    fontSize: 15,
                    lineHeight: 1.65,
                    paddingLeft: 22,
                    position: "relative",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: 0,
                      color: "#F17F0D",
                      fontWeight: 700,
                    }}
                  >
                    {"\u2713"}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
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
          <h2
            style={{
              color: "#fff",
              fontSize: 28,
              fontWeight: 700,
              marginBottom: 16,
            }}
          >
            Ready to Go Beyond Code Completion?
          </h2>
          <p
            style={{
              color: "#9ca3af",
              fontSize: 16,
              lineHeight: 1.7,
              marginBottom: 32,
              maxWidth: 520,
              margin: "0 auto 32px",
            }}
          >
            See how WalnutAI automates your entire software delivery lifecycle.
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
            }}
          >
            Get a Demo
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
