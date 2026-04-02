import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Continuous Gap Analysis - Find What You're Missing",
  description:
    "WalnutAI's continuous gap analysis identifies missing requirements, untested scenarios, and coverage gaps in real time before they become production issues.",
  openGraph: {
    title: "Continuous Gap Analysis - Find What You're Missing",
    description:
      "WalnutAI's continuous gap analysis identifies missing requirements, untested scenarios, and coverage gaps in real time before they become production issues.",
    url: "https://www.walnutai.ai/features/gap-analysis",
  },
  twitter: {
    card: "summary_large_image",
    title: "Continuous Gap Analysis - Find What You're Missing",
    description:
      "WalnutAI's continuous gap analysis identifies missing requirements, untested scenarios, and coverage gaps in real time before they become production issues.",
  },
  alternates: {
    canonical: "https://www.walnutai.ai/features/gap-analysis",
  },
};

const steps = [
  {
    number: "01",
    title: "Ingest All Artifacts",
    description:
      "WalnutAI connects to your requirements, user stories, test cases, code repositories, and documentation sources to build a complete picture of your delivery landscape.",
  },
  {
    number: "02",
    title: "Build Traceability Matrix",
    description:
      "AI constructs a dynamic traceability map that links every requirement to its corresponding tests, code implementations, and deployment configurations automatically.",
  },
  {
    number: "03",
    title: "Detect Gaps Continuously",
    description:
      "The analysis engine runs continuously in the background, flagging untested requirements, orphaned tests, missing edge cases, and coverage blind spots as they emerge.",
  },
  {
    number: "04",
    title: "Prioritize & Remediate",
    description:
      "Gaps are ranked by risk and business impact. WalnutAI generates remediation suggestions including auto-created test cases and requirement clarifications ready for review.",
  },
];

const benefits = [
  "Discover untested requirements and missing edge cases before release day",
  "Maintain a live traceability matrix without manual effort or spreadsheet tracking",
  "Reduce production defect escape rate by identifying coverage blind spots early",
  "Prioritize testing efforts based on AI-assessed risk and business impact scores",
  "Generate remediation artifacts automatically including test cases and spec updates",
];

export default function GapAnalysisPage() {
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
                  src="/assets/features/gap-analysis.svg"
                  alt="Continuous Gap Analysis — identify missing requirements and coverage gaps"
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
              Continuous{" "}
              <span style={{ color: "#F17F0D" }}>Gap Analysis</span>
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
              Find what you are missing before your users do. Real-time
              identification of coverage gaps across your entire delivery
              pipeline.
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
                Most software teams operate with significant blind spots. Test
                suites cover the happy paths but miss critical edge cases.
                Requirements specify the expected behavior but leave ambiguities
                that lead to defects. Code gets written for features that are never
                properly validated. These gaps are invisible until a bug reaches
                production, a customer reports an issue, or an audit reveals missing
                coverage. By then, the cost of remediation is orders of magnitude
                higher.
              </p>
              <p className="feature-card-desc" style={{ marginBottom: 16 }}>
                WalnutAI&apos;s Continuous Gap Analysis solves this by creating a
                living, breathing map of your entire delivery ecosystem. The
                platform ingests requirements, test cases, code, and documentation
                from every source in your toolchain, then uses AI to construct a
                dynamic traceability matrix that reveals exactly where gaps exist.
                Unlike static analysis tools that provide a one-time snapshot, our
                analysis runs continuously, adapting as your project evolves.
              </p>
              <p className="feature-card-desc" style={{ marginBottom: 0 }}>
                Every identified gap is assigned a risk score based on business
                impact, user exposure, and historical defect patterns. The platform
                does not just surface problems &mdash; it generates actionable
                remediation plans including auto-generated test cases, requirement
                clarification suggestions, and coverage improvement roadmaps. Teams
                gain confidence that every requirement is tested, every test has a
                purpose, and every release goes out with full coverage awareness.
                This systematic approach turns quality assurance from a reactive
                gate into a proactive, continuous discipline.
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
              Ready to Close Your Coverage Gaps?
            </h2>
            <p
              style={{
                color: "#9ca3af",
                fontSize: 16,
                marginBottom: 28,
                lineHeight: 1.7,
              }}
            >
              Discover what you are missing and ship with complete confidence.
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
