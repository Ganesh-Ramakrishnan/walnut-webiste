import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Test Execution & Management - Run Tests Everywhere",
  description:
    "Run automated tests across browsers, devices, and environments with WalnutAI. Centralized management, real-time tracking, and parallel execution at scale.",
  openGraph: {
    title: "Test Execution & Management - Run Tests Everywhere",
    description:
      "Run automated tests across browsers, devices, and environments with WalnutAI. Centralized management, real-time tracking, and parallel execution at scale.",
    url: "https://www.walnutai.ai/features/test-execution",
  },
  twitter: {
    card: "summary_large_image",
    title: "Test Execution & Management - Run Tests Everywhere",
    description:
      "Run automated tests across browsers, devices, and environments with WalnutAI. Centralized management, real-time tracking, and parallel execution at scale.",
  },
  alternates: {
    canonical: "https://www.walnutai.ai/features/test-execution",
  },
};

const steps = [
  {
    number: "01",
    title: "Configure Test Environments",
    description:
      "Define your target browsers, devices, operating systems, and environment configurations. WalnutAI provisions and manages test infrastructure automatically on demand.",
  },
  {
    number: "02",
    title: "Organize Test Suites",
    description:
      "Group tests by feature, priority, test type, or custom tags. Create execution plans for smoke tests, regression suites, and release validation with flexible scheduling options.",
  },
  {
    number: "03",
    title: "Execute in Parallel",
    description:
      "Launch test runs across multiple environments simultaneously. WalnutAI distributes tests intelligently, prioritizing high-risk areas and balancing load for maximum throughput.",
  },
  {
    number: "04",
    title: "Analyze & Report",
    description:
      "View real-time results with detailed logs, screenshots, and video recordings for failures. AI-powered analysis groups related failures and identifies root causes automatically.",
  },
];

const benefits = [
  "Execute thousands of tests in parallel across any combination of browsers and devices",
  "Reduce test suite execution time by up to 80% with intelligent parallel distribution",
  "AI-powered failure analysis groups related issues and pinpoints root causes instantly",
  "Centralized dashboard provides real-time visibility into test health across all environments",
  "Automatic retry and flaky test detection eliminate noise and surface genuine defects only",
];

export default function TestExecutionPage() {
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
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <Link
              href="/features"
              style={{
                color: "#F17F0D",
                fontSize: 14,
                textDecoration: "none",
                fontWeight: 600,
                display: "inline-block",
                marginBottom: 32,
              }}
            >
              &larr; Back to Features
            </Link>

            <div className="feature-card-full" style={{ maxWidth: 700, margin: "0 auto 32px" }}>
              <div className="feature-card-img">
                <img
                  src="/assets/features/test-execution.svg"
                  alt="Test Execution & Management — run tests across browsers and devices"
                  loading="eager"
                  width={700}
                  height={400}
                  style={{ width: "100%", display: "block", objectFit: "cover" }}
                />
              </div>
            </div>

            <h1
              style={{
                color: "#fff",
                fontSize: 44,
                fontWeight: 800,
                marginBottom: 16,
                lineHeight: 1.15,
              }}
            >
              Test Execution &{" "}
              <span style={{ color: "#F17F0D" }}>Management</span>
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
              Run automated tests across browsers, devices, and environments
              with centralized management and real-time result tracking.
            </p>
          </div>
        </section>

        {/* Description */}
        <section
          style={{
            background: "#0a0a0a",
            padding: "0 24px 60px",
          }}
        >
          <div
            className="feature-card-full"
            style={{
              maxWidth: 800,
              margin: "0 auto",
            }}
          >
            <div className="feature-card-body">
              <p className="feature-card-desc" style={{ marginBottom: 16 }}>
                Having great test cases means nothing if you cannot execute them
                reliably at scale. Teams struggle with flaky infrastructure,
                sequential test runs that take hours, inconsistent environments
                that produce unreliable results, and fragmented dashboards that
                make it impossible to get a clear picture of quality. As
                applications target more browsers, devices, and platforms, the
                execution complexity grows exponentially while teams are expected
                to deliver faster.
              </p>
              <p className="feature-card-desc" style={{ marginBottom: 16 }}>
                WalnutAI&apos;s Test Execution and Management platform solves these
                challenges with cloud-native infrastructure designed for massive
                parallel execution. Define your target matrix of browsers,
                devices, and operating systems, and the platform provisions
                pristine environments on demand. Tests are distributed
                intelligently across available resources, with smart prioritization
                that runs high-risk and recently-failed tests first to provide
                rapid feedback on the areas most likely to have issues.
              </p>
              <p className="feature-card-desc" style={{ marginBottom: 0 }}>
                The management layer provides a unified view of all test
                activities across your organization. Organize tests into suites,
                create scheduled and on-demand execution plans, and track results
                in real time through a centralized dashboard. When tests fail, the
                platform captures detailed logs, screenshots, and video recordings
                of the failure. AI-powered analysis automatically groups related
                failures, identifies flaky tests, and surfaces root causes so your
                team focuses on real issues instead of chasing phantom failures.
                Built-in retry logic, quarantine capabilities, and trend analysis
                ensure your test results are reliable, actionable, and always up
                to date.
              </p>
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section
          style={{
            background: "#0a0a0a",
            padding: "0 24px 60px",
          }}
        >
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <h2
              style={{
                color: "#fff",
                fontSize: 32,
                fontWeight: 700,
                marginBottom: 32,
                textAlign: "center",
              }}
            >
              How It Works
            </h2>
            <div style={{ display: "grid", gap: 20 }}>
              {steps.map((step) => (
                <div
                  key={step.number}
                  style={{
                    background: "#1a1a1a",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 20,
                    padding: 28,
                    display: "flex",
                    gap: 20,
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      background: "#F17F0D",
                      color: "#000",
                      fontWeight: 800,
                      fontSize: 14,
                      borderRadius: 8,
                      minWidth: 44,
                      height: 44,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {step.number}
                  </div>
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
                        color: "#b0b0b0",
                        fontSize: 15,
                        lineHeight: 1.7,
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

        {/* Key Benefits */}
        <section
          style={{
            background: "#0a0a0a",
            padding: "0 24px 60px",
          }}
        >
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <h2
              style={{
                color: "#fff",
                fontSize: 32,
                fontWeight: 700,
                marginBottom: 32,
                textAlign: "center",
              }}
            >
              Key Benefits
            </h2>
            <div
              style={{
                background: "#1a1a1a",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 20,
                padding: 32,
              }}
            >
              {benefits.map((benefit, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 12,
                    marginBottom: i < benefits.length - 1 ? 16 : 0,
                  }}
                >
                  <span style={{ color: "#F17F0D", fontSize: 18, lineHeight: 1.6 }}>
                    &#10003;
                  </span>
                  <p
                    style={{
                      color: "#d1d5db",
                      fontSize: 15,
                      lineHeight: 1.7,
                    }}
                  >
                    {benefit}
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
            padding: "0 24px 100px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              maxWidth: 600,
              margin: "0 auto",
              background: "#1a1a1a",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 20,
              padding: "48px 32px",
            }}
          >
            <h2
              style={{
                color: "#fff",
                fontSize: 28,
                fontWeight: 700,
                marginBottom: 12,
              }}
            >
              Ready to Execute Tests at Scale?
            </h2>
            <p
              style={{
                color: "#9ca3af",
                fontSize: 16,
                marginBottom: 28,
                lineHeight: 1.7,
              }}
            >
              Run thousands of tests in parallel across every browser and
              device that matters.
            </p>
            <Link
              href="/contact"
              style={{
                display: "inline-block",
                background: "#F17F0D",
                color: "#000",
                fontWeight: 700,
                fontSize: 16,
                padding: "14px 36px",
                borderRadius: 8,
                textDecoration: "none",
              }}
            >
              Get a Demo
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
