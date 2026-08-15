import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const siteUrl = "https://www.walnutai.ai";
const competitor = "Tabnine";
const slug = "walnutai-vs-tabnine";

export const metadata: Metadata = {
  title: "WalnutAI vs Tabnine - Full SDLC vs Code Assistant",
  description:
    "Compare WalnutAI and Tabnine. While Tabnine provides AI code completions, WalnutAI automates the entire SDLC from requirements to deployment.",
  keywords: [
    "WalnutAI vs Tabnine",
    "Tabnine alternative",
    "full SDLC automation",
    "AI code assistant comparison",
    "Tabnine limitations",
    "best AI development platform",
  ],
  openGraph: {
    title: "WalnutAI vs Tabnine - Full SDLC vs Code Assistant",
    description:
      "Compare WalnutAI and Tabnine. Full SDLC automation vs AI code completions.",
    url: `${siteUrl}/compare/${slug}`,
    siteName: "WalnutAI",
    type: "website",
    images: [
      {
        url: "https://walnutai.dev/og/walnutai-vs-tabnine.png",
        width: 1200,
        height: 630,
        alt: "WalnutAI vs Tabnine — Full SDLC Automation vs AI Code Assistant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WalnutAI vs Tabnine - Full SDLC vs Code Assistant",
    description:
      "Compare WalnutAI and Tabnine. Full SDLC automation vs AI code completions.",
    site: "@WalnutAI",
    images: ["https://walnutai.dev/og/walnutai-vs-tabnine.png"],
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
  ["Role-Based Access Control", true, true],
  ["Jira / GitHub Integration", true, false],
  ["Docker & Kubernetes Support", true, false],
  ["Enterprise Security (SOC 2)", true, true],
];

const keyDifferences = [
  {
    title: "Scope of Automation",
    walnutai:
      "Orchestrates the full software delivery lifecycle from requirements through deployment, with AI handling each phase and connecting them together.",
    competitor:
      "Specializes in AI code completions and suggestions within the editor. Learns from your team's codebase for personalized suggestions.",
  },
  {
    title: "Testing & Quality Assurance",
    walnutai:
      "Generates complete test suites, executes them across multiple frameworks, and maps coverage against requirements to identify gaps.",
    competitor:
      "Can suggest test code as part of code completions but does not generate test plans, execute tests, or analyze coverage.",
  },
  {
    title: "Privacy & Customization",
    walnutai:
      "Enterprise-grade security with data isolation, SOC 2 alignment, and full lifecycle traceability across all phases.",
    competitor:
      "Strong privacy focus with private AI models that do not share code. Supports self-hosted deployment for enterprise customers.",
  },
];

export default function CompareTabninePage() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: 80 }}>
        {/* Hero */}
        <section
          style={{
            background: "var(--surface-2b)",
            padding: "80px 24px 60px",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <Link
              href="/compare"
              style={{
                color: "var(--text-tertiary)",
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
                color: "var(--accent)",
                fontWeight: 600,
                fontSize: 14,
                textTransform: "uppercase",
                letterSpacing: 1.5,
                marginBottom: 16,
              }}
            >
              Full SDLC vs Code Assistant
            </p>
            <h1
              style={{
                color: "var(--text-primary)",
                fontSize: "clamp(30px, 5vw, 48px)",
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: 20,
              }}
            >
              <span style={{ color: "var(--accent)" }}>WalnutAI</span> vs {competitor}
            </h1>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: 17,
                lineHeight: 1.7,
                maxWidth: 640,
                margin: "0 auto",
              }}
            >
              Tabnine provides personalized AI code completions that learn from
              your codebase. WalnutAI automates the entire software delivery
              lifecycle from requirements to production.
            </p>
          </div>
        </section>

        {/* Overview */}
        <section style={{ background: "var(--surface-2b)", padding: "40px 24px" }}>
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
                background: "var(--surface-2d)",
                border: "1px solid var(--accent)",
                borderRadius: 14,
                padding: "32px 24px",
              }}
            >
              <h3
                style={{
                  color: "var(--accent)",
                  fontSize: 20,
                  fontWeight: 700,
                  marginBottom: 12,
                }}
              >
                WalnutAI
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: 15, lineHeight: 1.65 }}>
                AI ecosystem covering the full SDLC: requirements engineering,
                code generation, automated testing, gap analysis, deployment
                automation, and project-level traceability.
              </p>
            </div>
            <div
              style={{
                background: "var(--surface-2d)",
                border: "1px solid var(--border-raised)",
                borderRadius: 14,
                padding: "32px 24px",
              }}
            >
              <h3
                style={{
                  color: "var(--text-primary)",
                  fontSize: 20,
                  fontWeight: 700,
                  marginBottom: 12,
                }}
              >
                {competitor}
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: 15, lineHeight: 1.65 }}>
                AI code assistant that provides personalized code completions
                using private models trained on your team&#39;s codebase. Focused on
                privacy-first code suggestions.
              </p>
            </div>
          </div>
        </section>

        {/* Feature Comparison Table */}
        <section style={{ background: "var(--surface-2b)", padding: "60px 24px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2
              style={{
                color: "var(--text-primary)",
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
                border: "1px solid var(--border-raised)",
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
                  <tr style={{ background: "var(--surface-3)" }}>
                    <th
                      style={{
                        textAlign: "left",
                        padding: "14px 20px",
                        color: "var(--text-secondary)",
                        fontSize: 13,
                        fontWeight: 600,
                        borderBottom: "1px solid var(--border-raised)",
                      }}
                    >
                      Feature
                    </th>
                    <th
                      style={{
                        textAlign: "center",
                        padding: "14px 20px",
                        color: "var(--accent)",
                        fontSize: 13,
                        fontWeight: 700,
                        borderBottom: "1px solid var(--border-raised)",
                      }}
                    >
                      WalnutAI
                    </th>
                    <th
                      style={{
                        textAlign: "center",
                        padding: "14px 20px",
                        color: "var(--text-secondary)",
                        fontSize: 13,
                        fontWeight: 600,
                        borderBottom: "1px solid var(--border-raised)",
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
                        background: i % 2 === 0 ? "var(--surface-2d)" : "var(--surface-2)",
                      }}
                    >
                      <td
                        style={{
                          padding: "12px 20px",
                          color: "var(--text-secondary-strong)",
                          fontSize: 14,
                          borderBottom: "1px solid var(--border-inset)",
                        }}
                      >
                        {feature}
                      </td>
                      <td
                        style={{
                          textAlign: "center",
                          padding: "12px 20px",
                          fontSize: 18,
                          borderBottom: "1px solid var(--border-inset)",
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
                          borderBottom: "1px solid var(--border-inset)",
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
        <section style={{ background: "var(--surface-2b)", padding: "60px 24px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2
              style={{
                color: "var(--text-primary)",
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
                    background: "var(--surface-2d)",
                    border: "1px solid var(--border-raised)",
                    borderRadius: 14,
                    padding: "28px 24px",
                  }}
                >
                  <h3
                    style={{
                      color: "var(--text-primary)",
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
                          color: "var(--accent)",
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
                          color: "var(--text-secondary)",
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
                          color: "var(--text-tertiary)",
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
                          color: "var(--text-secondary)",
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
        <section style={{ background: "var(--surface-2b)", padding: "60px 24px" }}>
          <div
            style={{
              maxWidth: 800,
              margin: "0 auto",
              background: "var(--surface-2d)",
              border: "1px solid var(--border-raised)",
              borderRadius: 16,
              padding: "44px 36px",
              borderTop: "3px solid var(--accent)",
            }}
          >
            <h2
              style={{
                color: "var(--text-primary)",
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
                "Complete SDLC automation -- code completions are just one piece of the delivery puzzle",
                "AI-powered requirements engineering turns intent into structured, traceable specs",
                "Automated test generation, execution, and coverage gap analysis across frameworks",
                "Deployment orchestration with CI/CD, Docker, Kubernetes, and cloud provider support",
                "Full traceability connecting requirements to code to tests to deployment",
                "Enterprise security with SOC 2 alignment, RBAC, and comprehensive audit logging",
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    color: "var(--text-secondary)",
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
                      color: "var(--accent)",
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
            background: "var(--surface-2b)",
            padding: "60px 24px 100px",
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
            Ready to Go Beyond Code Completions?
          </h2>
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: 16,
              lineHeight: 1.7,
              marginBottom: 32,
              maxWidth: 520,
              margin: "0 auto 32px",
            }}
          >
            Discover how WalnutAI automates your entire software delivery
            lifecycle from intent to production.
          </p>
          <Link
            href="/contact"
            style={{
              display: "inline-block",
              background: "var(--accent)",
              color: "var(--text-on-accent)",
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
