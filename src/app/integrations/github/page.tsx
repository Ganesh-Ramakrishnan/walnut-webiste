import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "GitHub Integration - Repository, PR & Quality Gate Automation",
  description:
    "Integrate WalnutAI with GitHub to automate quality gates on pull requests, sync repositories, generate test cases from code changes, and enforce standards on every commit.",
  openGraph: {
    title: "GitHub Integration - Repository, PR & Quality Gate Automation",
    description:
      "Automate quality gates on pull requests, sync repositories, and enforce standards on every commit with WalnutAI and GitHub.",
    url: "https://www.walnutai.ai/integrations/github",
    siteName: "WalnutAI",
    type: "website",
    images: [{ url: "https://walnutai.dev/og/integrations-github.png", width: 1200, height: 630, alt: "WalnutAI GitHub Integration — Repository, PR & Quality Gate Automation" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GitHub Integration - Repository, PR & Quality Gate Automation",
    description:
      "Automate quality gates on pull requests and enforce standards on every commit with WalnutAI.",
    site: "@WalnutAI",
    images: ["https://walnutai.dev/og/integrations-github.png"],
  },
  alternates: {
    canonical: "https://www.walnutai.ai/integrations/github",
  },
};

const setupSteps = [
  {
    number: "01",
    title: "Authorize GitHub App",
    description:
      "Install the WalnutAI GitHub App from the marketplace and grant access to the repositories you want to monitor. OAuth ensures secure, token-based authentication.",
  },
  {
    number: "02",
    title: "Select Repositories",
    description:
      "Choose which repositories WalnutAI should track. Configure branch protection rules and specify which branches trigger automated analysis and test generation.",
  },
  {
    number: "03",
    title: "Configure Quality Gates",
    description:
      "Define the quality thresholds for pull request checks. Set minimum coverage requirements, code complexity limits, and security scan rules that must pass before merging.",
  },
  {
    number: "04",
    title: "Enable PR Automation",
    description:
      "Activate automated PR reviews, test generation on diff, and status checks. WalnutAI comments directly on pull requests with analysis results and suggested improvements.",
  },
];

const capabilities = [
  {
    title: "Automated PR Quality Gates",
    description:
      "Every pull request is automatically analyzed for code quality, test coverage gaps, and potential regressions. Configurable status checks block merges until standards are met.",
  },
  {
    title: "Test Generation from Diffs",
    description:
      "When code changes are pushed, WalnutAI analyzes the diff and generates relevant unit, integration, and end-to-end tests to cover new and modified functionality.",
  },
  {
    title: "Repository Sync & Monitoring",
    description:
      "Continuous synchronization keeps WalnutAI aware of your latest codebase structure, enabling accurate gap analysis and requirement traceability across all branches.",
  },
  {
    title: "Commit-Level Traceability",
    description:
      "Link every commit to requirements, test cases, and deployments. Maintain a complete audit trail from user story to production release without manual bookkeeping.",
  },
  {
    title: "GitHub Actions Integration",
    description:
      "Trigger WalnutAI workflows directly from GitHub Actions. Run test suites, generate reports, and publish results as PR comments or deployment checks seamlessly.",
  },
];

export default function GitHubIntegrationPage() {
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
            <span style={{ fontSize: 48, display: "block", marginBottom: 16 }}>
              {"\uD83D\uDC19"}
            </span>
            <h1
              style={{
                color: "var(--text-primary)",
                fontSize: 44,
                fontWeight: 800,
                marginBottom: 16,
                lineHeight: 1.15,
              }}
            >
              <span style={{ color: "#F17F0D" }}>GitHub</span> Integration
            </h1>
            <p
              style={{
                color: "#b0b0b0",
                fontSize: 18,
                lineHeight: 1.7,
                maxWidth: 640,
                margin: "0 auto",
              }}
            >
              Connect WalnutAI to your GitHub repositories to automate quality
              gates, generate tests from pull requests, and maintain full
              traceability from code to production.
            </p>
          </div>
        </section>

        {/* Overview */}
        <section style={{ background: "var(--bg-page)", padding: "40px 24px 60px" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <h2
              style={{
                color: "var(--text-primary)",
                fontSize: 28,
                fontWeight: 700,
                marginBottom: 20,
              }}
            >
              Overview
            </h2>
            <div style={{ color: "#b0b0b0", fontSize: 16, lineHeight: 1.8 }}>
              <p>
                GitHub is the backbone of modern software development, and
                WalnutAI&apos;s deep integration ensures your testing and quality
                processes are woven into every stage of your workflow. By
                connecting directly to your repositories, WalnutAI monitors code
                changes in real time and responds with intelligent analysis,
                automated test generation, and enforced quality standards.
              </p>
              <p style={{ marginTop: 16 }}>
                When a developer opens a pull request, WalnutAI immediately
                analyzes the diff to identify what changed, what tests are
                needed, and whether the changes meet your configured quality
                gates. Test cases are generated automatically, coverage gaps are
                flagged, and results are posted as status checks and inline
                comments. This eliminates the manual overhead of test planning
                and review, letting your team focus on building features rather
                than chasing coverage metrics.
              </p>
              <p style={{ marginTop: 16 }}>
                Beyond pull requests, the integration provides continuous
                repository monitoring, commit-level traceability back to
                requirements, and seamless compatibility with GitHub Actions for
                CI/CD pipelines. Whether you are a startup shipping daily or an
                enterprise managing hundreds of repositories, WalnutAI scales
                with your GitHub workflow.
              </p>
            </div>
          </div>
        </section>

        {/* Setup Steps */}
        <section style={{ background: "var(--bg-page)", padding: "40px 24px 60px" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <h2
              style={{
                color: "var(--text-primary)",
                fontSize: 28,
                fontWeight: 700,
                marginBottom: 32,
              }}
            >
              Setup in 4 Steps
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {setupSteps.map((step) => (
                <div
                  key={step.number}
                  style={{
                    display: "flex",
                    gap: 20,
                    background: "var(--bg-surface)",
                    border: "1px solid #222",
                    borderRadius: 12,
                    padding: "24px",
                  }}
                >
                  <span
                    style={{
                      color: "#F17F0D",
                      fontSize: 28,
                      fontWeight: 800,
                      lineHeight: 1,
                      minWidth: 40,
                    }}
                  >
                    {step.number}
                  </span>
                  <div>
                    <h3
                      style={{
                        color: "var(--text-primary)",
                        fontSize: 18,
                        fontWeight: 700,
                        marginBottom: 8,
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      style={{
                        color: "#999",
                        fontSize: 14,
                        lineHeight: 1.7,
                        margin: 0,
                      }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section style={{ background: "var(--bg-page)", padding: "40px 24px 60px" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <h2
              style={{
                color: "var(--text-primary)",
                fontSize: 28,
                fontWeight: 700,
                marginBottom: 32,
              }}
            >
              Key Capabilities
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {capabilities.map((cap) => (
                <div
                  key={cap.title}
                  style={{
                    background: "var(--bg-surface)",
                    border: "1px solid #222",
                    borderRadius: 12,
                    padding: "24px",
                  }}
                >
                  <h3
                    style={{
                      color: "#F17F0D",
                      fontSize: 17,
                      fontWeight: 700,
                      marginBottom: 8,
                    }}
                  >
                    {cap.title}
                  </h3>
                  <p
                    style={{
                      color: "#999",
                      fontSize: 14,
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {cap.description}
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
            padding: "40px 24px 100px",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: 600, margin: "0 auto" }}>
            <h2
              style={{
                color: "var(--text-primary)",
                fontSize: 28,
                fontWeight: 700,
                marginBottom: 16,
              }}
            >
              Ready to integrate GitHub?
            </h2>
            <p
              style={{
                color: "#999",
                fontSize: 16,
                marginBottom: 32,
                lineHeight: 1.7,
              }}
            >
              Get started in minutes. Our team will walk you through the setup
              and help you configure quality gates for your repositories.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link
                href="/contact"
                style={{
                  display: "inline-block",
                  background: "#F17F0D",
                  color: "#fff",
                  padding: "14px 32px",
                  borderRadius: 8,
                  fontWeight: 700,
                  fontSize: 15,
                  textDecoration: "none",
                }}
              >
                Contact Us
              </Link>
              <Link
                href="/integrations"
                style={{
                  display: "inline-block",
                  background: "transparent",
                  color: "#F17F0D",
                  padding: "14px 32px",
                  borderRadius: 8,
                  fontWeight: 700,
                  fontSize: 15,
                  textDecoration: "none",
                  border: "1px solid #F17F0D",
                }}
              >
                All Integrations
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
