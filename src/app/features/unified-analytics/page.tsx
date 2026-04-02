import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Unified Analytics - One Dashboard, Complete Visibility",
  description:
    "Get complete visibility into quality, velocity, and coverage across your delivery pipeline with WalnutAI's unified analytics dashboard and AI-driven insights.",
  openGraph: {
    title: "Unified Analytics - One Dashboard, Complete Visibility",
    description:
      "Get complete visibility into quality, velocity, and coverage across your delivery pipeline with WalnutAI's unified analytics dashboard and AI-driven insights.",
    url: "https://www.walnutai.ai/features/unified-analytics",
  },
  twitter: {
    card: "summary_large_image",
    title: "Unified Analytics - One Dashboard, Complete Visibility",
    description:
      "Get complete visibility into quality, velocity, and coverage across your delivery pipeline with WalnutAI's unified analytics dashboard and AI-driven insights.",
  },
  alternates: {
    canonical: "https://www.walnutai.ai/features/unified-analytics",
  },
};

const steps = [
  {
    number: "01",
    title: "Aggregate Data Sources",
    description:
      "WalnutAI pulls metrics from your requirements, test execution, code repositories, CI/CD pipelines, and defect trackers into a single unified data layer automatically.",
  },
  {
    number: "02",
    title: "Build Custom Dashboards",
    description:
      "Choose from pre-built dashboard templates or create custom views tailored to your role. Engineering managers, QA leads, and executives each get the metrics that matter most to them.",
  },
  {
    number: "03",
    title: "AI-Driven Insights",
    description:
      "The analytics engine surfaces trends, anomalies, and correlations that manual reporting would miss. Get proactive alerts when quality metrics deviate from established baselines.",
  },
  {
    number: "04",
    title: "Act on Intelligence",
    description:
      "Turn insights into action with drill-down capabilities that connect high-level metrics to specific requirements, tests, and code changes for immediate investigation and resolution.",
  },
];

const benefits = [
  "Single source of truth for quality, coverage, velocity, and risk across all projects",
  "Role-based dashboards that give each stakeholder exactly the visibility they need",
  "AI-powered trend detection alerts you to quality regressions before they impact releases",
  "Full drill-down from executive metrics to individual test results and code changes",
  "Automated reporting eliminates hours of manual data gathering for sprint reviews and audits",
];

export default function UnifiedAnalyticsPage() {
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
                  src="/assets/features/unified-analytics.svg"
                  alt="Unified Analytics — one dashboard with complete visibility"
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
              Unified{" "}
              <span style={{ color: "#F17F0D" }}>Analytics</span>
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
              One dashboard, complete visibility. See quality, velocity, and
              coverage across your entire delivery pipeline at a glance.
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
                Software delivery generates an enormous amount of data across
                dozens of tools, but most organizations struggle to turn that data
                into actionable intelligence. Requirements live in Jira, test
                results are scattered across multiple frameworks, code metrics sit
                in SonarQube, and deployment data lives in the CI/CD platform.
                Getting a unified picture requires hours of manual data gathering,
                spreadsheet wrangling, and dashboard maintenance that is outdated
                the moment it is published.
              </p>
              <p className="feature-card-desc" style={{ marginBottom: 16 }}>
                WalnutAI&apos;s Unified Analytics solves this by aggregating data
                from every stage of your delivery pipeline into a single,
                real-time intelligence layer. Requirements coverage, test pass
                rates, defect trends, code quality metrics, deployment frequency,
                and cycle time are all visualized in cohesive dashboards that
                update continuously. Role-based views ensure that engineering
                managers see sprint health, QA leads see test effectiveness, and
                executives see release readiness &mdash; all from the same
                underlying data.
              </p>
              <p className="feature-card-desc" style={{ marginBottom: 0 }}>
                What elevates this beyond traditional reporting is the AI-driven
                insights layer. The analytics engine continuously analyzes your
                data to surface trends, correlations, and anomalies that humans
                would miss. It detects when test pass rates are declining for a
                specific module, when cycle time is creeping up for a team, or when
                coverage gaps are emerging in a high-risk area. Proactive alerts
                notify the right people before small issues become release
                blockers. Every metric supports full drill-down, connecting
                high-level indicators to specific requirements, test cases, and
                code commits for immediate investigation. This is decision
                intelligence for software delivery, turning raw data into the
                clarity your team needs to ship better software faster.
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
              Ready for Complete Delivery Visibility?
            </h2>
            <p
              style={{
                color: "#9ca3af",
                fontSize: 16,
                marginBottom: 28,
                lineHeight: 1.7,
              }}
            >
              See your entire delivery pipeline in one unified dashboard with
              AI-driven insights.
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
