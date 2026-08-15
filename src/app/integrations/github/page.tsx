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
            background: "var(--surface-2b)",
            padding: "80px 24px 60px",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <span style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
              <svg width="56" height="56" viewBox="0 0 24 24" fill="#fff"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
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
              <span style={{ color: "var(--accent)" }}>GitHub</span> Integration
            </h1>
            <p
              style={{
                color: "var(--text-soft)",
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
        <section style={{ background: "var(--surface-2b)", padding: "40px 24px 60px" }}>
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
            <div style={{ color: "var(--text-soft)", fontSize: 16, lineHeight: 1.8 }}>
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
        <section style={{ background: "var(--surface-2b)", padding: "40px 24px 60px" }}>
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
                    background: "var(--surface-2)",
                    border: "1px solid var(--border-grey)",
                    borderRadius: 12,
                    padding: "24px",
                  }}
                >
                  <span
                    style={{
                      color: "var(--accent)",
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
                        color: "var(--text-faint)",
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
        <section style={{ background: "var(--surface-2b)", padding: "40px 24px 60px" }}>
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
                    background: "var(--surface-2)",
                    border: "1px solid var(--border-grey)",
                    borderRadius: 12,
                    padding: "24px",
                  }}
                >
                  <h3
                    style={{
                      color: "var(--accent)",
                      fontSize: 17,
                      fontWeight: 700,
                      marginBottom: 8,
                    }}
                  >
                    {cap.title}
                  </h3>
                  <p
                    style={{
                      color: "var(--text-faint)",
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
            background: "var(--surface-2b)",
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
                color: "var(--text-faint)",
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
                  background: "var(--accent)",
                  color: "var(--text-on-accent)",
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
                  color: "var(--accent)",
                  padding: "14px 32px",
                  borderRadius: 8,
                  fontWeight: 700,
                  fontSize: 15,
                  textDecoration: "none",
                  border: "1px solid var(--accent)",
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
