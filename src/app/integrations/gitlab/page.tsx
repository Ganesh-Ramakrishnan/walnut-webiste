import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "GitLab Integration - Repos, Pipelines & Merge Request Automation",
  description:
    "Integrate WalnutAI with GitLab to automate merge request reviews, sync pipelines, generate tests from code changes, and enforce quality standards across your GitLab projects.",
  openGraph: {
    title: "GitLab Integration - Repos, Pipelines & Merge Request Automation",
    description:
      "Automate merge request reviews, sync pipelines, and enforce quality standards with WalnutAI and GitLab.",
    url: "https://www.walnutai.ai/integrations/gitlab",
  },
  twitter: {
    card: "summary_large_image",
    title: "GitLab Integration - Repos, Pipelines & Merge Request Automation",
    description:
      "Automate merge request reviews and sync pipelines with WalnutAI and GitLab.",
  },
  alternates: {
    canonical: "https://www.walnutai.ai/integrations/gitlab",
  },
};

const setupSteps = [
  {
    number: "01",
    title: "Create GitLab Access Token",
    description:
      "Generate a project or group access token in GitLab with the required scopes. WalnutAI uses this token for secure API communication with your GitLab instance.",
  },
  {
    number: "02",
    title: "Connect Your Projects",
    description:
      "Link your GitLab projects to WalnutAI. Supports both GitLab.com and self-managed instances. Select which groups and projects to monitor for automated analysis.",
  },
  {
    number: "03",
    title: "Configure Pipeline Hooks",
    description:
      "Set up webhooks so WalnutAI is notified on merge requests, pipeline completions, and push events. Configure which branches and events trigger automated workflows.",
  },
  {
    number: "04",
    title: "Activate Merge Request Automation",
    description:
      "Enable automated merge request analysis, test generation, and quality gate enforcement. WalnutAI posts results as merge request comments and pipeline status indicators.",
  },
];

const capabilities = [
  {
    title: "Merge Request Analysis",
    description:
      "Every merge request is automatically scanned for code quality, missing tests, and potential regressions. Results are posted inline so reviewers have full context before approving.",
  },
  {
    title: "Pipeline-Aware Test Generation",
    description:
      "WalnutAI understands your CI/CD pipeline stages and generates tests that fit naturally into your existing workflow, running at the right stage with the right dependencies.",
  },
  {
    title: "Multi-Project Synchronization",
    description:
      "Track changes across multiple GitLab projects and groups simultaneously. WalnutAI maintains a unified view of your codebase, even across monorepos and microservices.",
  },
  {
    title: "Self-Managed Instance Support",
    description:
      "Full support for GitLab self-managed deployments behind corporate firewalls. Connect via secure tunnels or deploy WalnutAI agents within your network perimeter.",
  },
  {
    title: "CI/CD Pipeline Integration",
    description:
      "Add WalnutAI stages to your .gitlab-ci.yml to run test generation, gap analysis, and quality checks as native pipeline jobs with full artifact and reporting support.",
  },
];

export default function GitLabIntegrationPage() {
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
              {"\uD83E\uDD8A"}
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
              <span style={{ color: "#F17F0D" }}>GitLab</span> Integration
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
              Connect WalnutAI to your GitLab projects to automate merge request
              reviews, synchronize pipelines, and maintain quality across every
              code change.
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
                GitLab&apos;s all-in-one DevOps platform pairs powerfully with
                WalnutAI&apos;s intelligent testing ecosystem. By integrating
                directly with your GitLab instance, WalnutAI taps into your
                repositories, pipelines, and merge request workflows to deliver
                automated quality assurance at every stage of development.
              </p>
              <p style={{ marginTop: 16 }}>
                When a merge request is opened, WalnutAI analyzes the changes,
                identifies coverage gaps, and generates targeted test cases. The
                results appear as inline comments and pipeline status checks,
                giving reviewers the confidence to approve with full test
                visibility. For teams using GitLab CI/CD, WalnutAI integrates
                as a native pipeline stage, running alongside your existing
                build and deploy jobs without disrupting established workflows.
              </p>
              <p style={{ marginTop: 16 }}>
                Whether you run GitLab.com or a self-managed instance behind
                your firewall, WalnutAI adapts to your environment. It supports
                multi-project tracking, group-level configurations, and
                monorepo structures. The integration ensures that no matter how
                complex your GitLab setup, every line of code is backed by
                intelligent, automated testing.
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
              Ready to integrate GitLab?
            </h2>
            <p
              style={{
                color: "#999",
                fontSize: 16,
                marginBottom: 32,
                lineHeight: 1.7,
              }}
            >
              Connect your GitLab projects in minutes. Our team will help you
              configure pipelines and merge request automation for your workflow.
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
