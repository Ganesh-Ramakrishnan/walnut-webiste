import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Jira Integration - Stories, Requirements Sync & Traceability",
  description:
    "Integrate WalnutAI with Jira to sync user stories, link requirements to test cases, and maintain end-to-end traceability from backlog to production deployment.",
  openGraph: {
    title: "Jira Integration - Stories, Requirements Sync & Traceability",
    description:
      "Sync user stories, link requirements to test cases, and maintain end-to-end traceability with WalnutAI and Jira.",
    url: "https://www.walnutai.ai/integrations/jira",
    siteName: "WalnutAI",
    type: "website",
    images: [{ url: "https://walnutai.dev/og/integrations-jira.png", width: 1200, height: 630, alt: "WalnutAI Jira Integration — Stories, Requirements Sync & Traceability" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jira Integration - Stories, Requirements Sync & Traceability",
    description:
      "Sync user stories and maintain end-to-end traceability with WalnutAI and Jira.",
    site: "@WalnutAI",
    images: ["https://walnutai.dev/og/integrations-jira.png"],
  },
  alternates: {
    canonical: "https://www.walnutai.ai/integrations/jira",
  },
};

const setupSteps = [
  {
    number: "01",
    title: "Connect Your Jira Instance",
    description:
      "Authenticate with Jira Cloud or Jira Data Center using OAuth 2.0. WalnutAI supports both Atlassian-hosted and self-managed Jira deployments with secure token exchange.",
  },
  {
    number: "02",
    title: "Map Projects & Issue Types",
    description:
      "Select the Jira projects to sync and map issue types like stories, epics, bugs, and tasks to WalnutAI requirement categories. Custom fields are automatically detected.",
  },
  {
    number: "03",
    title: "Configure Sync Rules",
    description:
      "Define how and when data flows between Jira and WalnutAI. Set up bi-directional sync, choose update triggers, and configure which fields are read-only versus editable.",
  },
  {
    number: "04",
    title: "Enable Traceability Links",
    description:
      "Activate automatic linking between Jira issues and WalnutAI-generated test cases, requirements, and gap reports. Links appear as Jira remote links for easy navigation.",
  },
];

const capabilities = [
  {
    title: "Bi-Directional Story Sync",
    description:
      "User stories, epics, and bugs sync in real time between Jira and WalnutAI. Changes in either platform are reflected instantly, ensuring your team always works with the latest requirements.",
  },
  {
    title: "Automatic Test Case Linking",
    description:
      "When WalnutAI generates test cases from requirements, they are automatically linked back to the originating Jira issue. Traceability matrices are built without any manual effort.",
  },
  {
    title: "Requirements Gap Detection",
    description:
      "WalnutAI analyzes synced Jira stories to identify ambiguous, incomplete, or conflicting requirements. Gap reports are posted as Jira comments so product owners can address them immediately.",
  },
  {
    title: "Sprint & Release Tracking",
    description:
      "Track test coverage and quality metrics per sprint and release. Dashboards show which stories have full test coverage, which have gaps, and the overall quality readiness of each release.",
  },
  {
    title: "Custom Field & Workflow Support",
    description:
      "Full support for Jira custom fields, workflows, and transitions. WalnutAI adapts to your existing Jira configuration rather than forcing you to change your established processes.",
  },
];

export default function JiraIntegrationPage() {
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
            <span style={{ fontSize: 48, display: "block", marginBottom: 16 }}>
              {"\uD83D\uDCCB"}
            </span>
            <h1
              style={{
                color: "#fff",
                fontSize: 44,
                fontWeight: 800,
                marginBottom: 16,
                lineHeight: 1.15,
              }}
            >
              <span style={{ color: "#F17F0D" }}>Jira</span> Integration
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
              Connect WalnutAI to Jira to sync user stories, automatically
              generate test cases from requirements, and maintain complete
              traceability from backlog to deployment.
            </p>
          </div>
        </section>

        {/* Overview */}
        <section style={{ background: "#0a0a0a", padding: "40px 24px 60px" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <h2
              style={{
                color: "#fff",
                fontSize: 28,
                fontWeight: 700,
                marginBottom: 20,
              }}
            >
              Overview
            </h2>
            <div style={{ color: "#b0b0b0", fontSize: 16, lineHeight: 1.8 }}>
              <p>
                Jira is where your team defines what to build, and WalnutAI
                ensures that what gets built is thoroughly tested. The
                integration bridges the gap between project management and
                quality assurance by treating Jira issues as the single source
                of truth for requirements and automatically deriving test
                coverage from them.
              </p>
              <p style={{ marginTop: 16 }}>
                Once connected, WalnutAI continuously monitors your Jira
                projects for new and updated stories. Each story is analyzed for
                testable acceptance criteria, and relevant test cases are
                generated and linked back to the issue. If a requirement is
                ambiguous or missing critical details, WalnutAI flags it with a
                gap report directly in Jira, so product owners can refine
                requirements before development begins.
              </p>
              <p style={{ marginTop: 16 }}>
                The result is a living traceability matrix that connects every
                requirement to its tests, code changes, and deployment status.
                Sprint reviews become data-driven, release confidence is
                quantifiable, and nothing slips through the cracks between
                planning and production. Teams using this integration
                consistently report fewer escaped defects and faster release
                cycles.
              </p>
            </div>
          </div>
        </section>

        {/* Setup Steps */}
        <section style={{ background: "#0a0a0a", padding: "40px 24px 60px" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <h2
              style={{
                color: "#fff",
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
                    background: "#111",
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
                        color: "#fff",
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
        <section style={{ background: "#0a0a0a", padding: "40px 24px 60px" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <h2
              style={{
                color: "#fff",
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
                    background: "#111",
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
            background: "#0a0a0a",
            padding: "40px 24px 100px",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: 600, margin: "0 auto" }}>
            <h2
              style={{
                color: "#fff",
                fontSize: 28,
                fontWeight: 700,
                marginBottom: 16,
              }}
            >
              Ready to integrate Jira?
            </h2>
            <p
              style={{
                color: "#999",
                fontSize: 16,
                marginBottom: 32,
                lineHeight: 1.7,
              }}
            >
              Bridge the gap between planning and testing. Our team will help
              you map your Jira projects and configure traceability rules.
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
