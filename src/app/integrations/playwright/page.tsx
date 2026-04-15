import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Playwright Integration - Import, Generate & Execute Scripts",
  description:
    "Integrate WalnutAI with Playwright to import existing test scripts, generate new browser automation tests from requirements, and execute them at scale across Chromium, Firefox, and WebKit.",
  openGraph: {
    title: "Playwright Integration - Import, Generate & Execute Scripts",
    description:
      "Import, generate, and execute Playwright browser automation scripts at scale with WalnutAI.",
    url: "https://www.walnutai.ai/integrations/playwright",
  },
  twitter: {
    card: "summary_large_image",
    title: "Playwright Integration - Import, Generate & Execute Scripts",
    description:
      "Import, generate, and execute Playwright browser automation scripts at scale with WalnutAI.",
  },
  alternates: {
    canonical: "https://www.walnutai.ai/integrations/playwright",
  },
};

const setupSteps = [
  {
    number: "01",
    title: "Import Existing Scripts",
    description:
      "Point WalnutAI to your Playwright test directory. Existing spec files are parsed, cataloged, and mapped to requirements. WalnutAI understands page objects, fixtures, and test helpers.",
  },
  {
    number: "02",
    title: "Configure Browser Targets",
    description:
      "Select which browsers and devices to test against: Chromium, Firefox, WebKit, and mobile viewports. Define parallel execution settings and retry policies for each browser target.",
  },
  {
    number: "03",
    title: "Set Up Execution Environment",
    description:
      "Choose where Playwright tests run: locally, in Docker containers, or on Kubernetes pods. WalnutAI handles browser binary management and dependency installation automatically.",
  },
  {
    number: "04",
    title: "Enable AI Test Generation",
    description:
      "Activate requirement-driven test generation. WalnutAI reads your requirements and produces Playwright scripts with proper selectors, assertions, and flow coverage ready for review.",
  },
];

const capabilities = [
  {
    title: "AI-Powered Script Generation",
    description:
      "WalnutAI generates complete Playwright test scripts from natural language requirements. Scripts include page navigation, form interactions, assertions, and error handling following Playwright best practices.",
  },
  {
    title: "Existing Script Import & Analysis",
    description:
      "Import your current Playwright test suite and get instant analysis of coverage gaps, duplicated tests, flaky patterns, and optimization opportunities. No rewrites required.",
  },
  {
    title: "Cross-Browser Execution",
    description:
      "Run every test across Chromium, Firefox, and WebKit simultaneously. WalnutAI reports browser-specific failures and visual differences, ensuring consistent behavior across all supported engines.",
  },
  {
    title: "Visual & Snapshot Testing",
    description:
      "Leverage Playwright screenshot and snapshot capabilities with AI-enhanced comparison. WalnutAI identifies meaningful visual regressions while ignoring acceptable rendering differences.",
  },
  {
    title: "Trace & Debug Integration",
    description:
      "Failed tests automatically capture Playwright traces with network logs, DOM snapshots, and action timelines. WalnutAI links trace files to test results for fast root-cause analysis.",
  },
];

export default function PlaywrightIntegrationPage() {
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
            <span style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
              <svg width="56" height="56" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="4" fill="#2EAD33"/><path d="M6.8 16.2V7.8h3.7c.8 0 1.4.2 1.9.7.5.4.7 1 .7 1.8 0 .5-.1.9-.3 1.2-.2.4-.5.6-.9.8v.1c.5.1.9.4 1.2.8.3.4.4.9.4 1.5 0 .9-.3 1.5-.8 2-.5.5-1.2.7-2.1.7H6.8zm1.8-5h1.7c.5 0 .8-.1 1.1-.3.2-.2.4-.6.4-1s-.1-.8-.4-1c-.2-.2-.6-.3-1-.3H8.6v2.6zm0 1.3v3h1.9c.5 0 .8-.1 1.1-.4.3-.3.4-.6.4-1.1 0-.5-.1-.9-.4-1.1-.3-.3-.6-.4-1.1-.4H8.6zm6 3.7V7.8h1.7v6.8h3.3v1.6h-5z" fill="#fff"/></svg>
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
              <span style={{ color: "#F17F0D" }}>Playwright</span> Integration
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
              Import existing Playwright scripts, generate new browser
              automation tests from requirements, and execute them at scale
              across Chromium, Firefox, and WebKit.
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
                Playwright is the modern standard for browser automation, and
                WalnutAI supercharges it with AI-driven test generation,
                intelligent execution management, and deep analysis of your
                existing test suite. Whether you are starting fresh or have
                thousands of existing Playwright specs, the integration adds
                immediate value without disrupting your workflow.
              </p>
              <p style={{ marginTop: 16 }}>
                For teams with an existing Playwright suite, WalnutAI imports
                and analyzes your scripts to identify coverage gaps, flaky test
                patterns, and optimization opportunities. It maps your tests to
                requirements, highlights dead code, and suggests consolidation
                where duplicate tests cover the same behavior. For new test
                creation, WalnutAI generates idiomatic Playwright scripts
                directly from requirements using proper page object patterns,
                fixtures, and assertion strategies.
              </p>
              <p style={{ marginTop: 16 }}>
                Execution is handled across all three browser engines in
                parallel, with configurable retry policies and failure
                categorization. When a test fails, Playwright traces with full
                network logs, DOM snapshots, and action timelines are captured
                and linked to the test result. WalnutAI&apos;s AI analyzes
                failure patterns to distinguish real bugs from flaky
                infrastructure issues, helping your team focus on what matters.
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
              Ready to integrate Playwright?
            </h2>
            <p
              style={{
                color: "#999",
                fontSize: 16,
                marginBottom: 32,
                lineHeight: 1.7,
              }}
            >
              Supercharge your browser testing with AI. Our team will help you
              import existing scripts and configure cross-browser execution.
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
