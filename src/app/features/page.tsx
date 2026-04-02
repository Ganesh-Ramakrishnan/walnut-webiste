import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Features - AI-Powered Software Delivery Tools",
  description:
    "Explore WalnutAI features: AI-orchestrated SDLC, gap analysis, requirements engineering, AI IDE, test generation, execution, CI/CD, and analytics.",
  openGraph: {
    title: "Features - AI-Powered Software Delivery Tools",
    description:
      "Explore WalnutAI features: AI-orchestrated SDLC, gap analysis, requirements engineering, AI IDE, test generation, execution, CI/CD, and analytics.",
    url: "https://www.walnutai.ai/features",
  },
  twitter: {
    card: "summary_large_image",
    title: "Features - AI-Powered Software Delivery Tools",
    description:
      "Explore WalnutAI features: AI-orchestrated SDLC, gap analysis, requirements engineering, AI IDE, test generation, execution, CI/CD, and analytics.",
  },
  alternates: {
    canonical: "https://www.walnutai.ai/features",
  },
};

const features = [
  {
    title: "AI-Orchestrated SDLC",
    description: "Automate software delivery from intent to built application with no human intervention.",
    bullets: [
      "Prompt WalnutAI or upload requirement files and assign tasks to specialized AI bots",
      "AI bots exchange context and coordinate dependencies in real time",
      "AI bots generate requirements, code, and testing end to end",
    ],
    outcome: "Wake up to a completely built app with No human-in-loop",
    href: "/features/ai-orchestrated-sdlc",
    image: "/assets/features/agent.webp",
    isWebp: true,
  },
  {
    title: "Continuous Gap Analysis",
    description: "Real-time scanning across requirements, code, and tests to surface coverage gaps before they become production bugs.",
    bullets: [
      "Scans your entire codebase and requirement docs continuously",
      "Identifies untested paths, missing requirements, and coverage gaps",
      "Generates shareable gap reports for stakeholder alignment",
    ],
    outcome: "96% requirement coverage — catch gaps before they reach production",
    href: "/features/gap-analysis",
    image: "/assets/features/gap-analysis.svg",
    isWebp: false,
  },
  {
    title: "Requirements Engineering",
    description: "Transform documents and Figma designs into structured, validated requirements with AI-driven priority setting.",
    bullets: [
      "Upload documents, Figma files, or paste requirements text",
      "AI extracts, validates, and deduplicates requirements automatically",
      "Priority scoring highlights the most critical items first",
    ],
    outcome: "Reduce misalignment — no requirement goes uncaptured",
    href: "/features/requirements-engineering",
    image: "/assets/features/documentation-structure.svg",
    isWebp: false,
  },
  {
    title: "AI-Powered IDE",
    description: "Three AI modes — Autopilot, Copilot, and Chat — integrated directly into your development environment.",
    bullets: [
      "Autopilot: fully autonomous code generation from requirements",
      "Copilot: real-time inline suggestions as you type",
      "Chat: conversational problem-solving and code exploration",
    ],
    outcome: "Context-aware development that understands your entire codebase",
    href: "/features/ai-powered-ide",
    image: "/assets/features/ide.svg",
    isWebp: false,
  },
  {
    title: "AI Test Generation",
    description: "Generate comprehensive test cases from requirements in seconds. Cover edge cases humans miss at scale.",
    bullets: [
      "AI generates test cases from requirements and user stories",
      "Covers edge cases, boundary conditions, and negative paths",
      "Export to Playwright and other automation frameworks",
    ],
    outcome: "Seconds not hours — comprehensive test coverage at scale",
    href: "/features/ai-test-generation",
    image: "/assets/features/ai-testcase.svg",
    isWebp: false,
  },
  {
    title: "Test Execution & Management",
    description: "Execute tests across web and mobile platforms with parallel cloud execution and real-time results.",
    bullets: [
      "Web and mobile testing including Android and iOS",
      "Parallel cloud execution for faster feedback cycles",
      "Import tests from QTest, TestRail, and Playwright scripts",
    ],
    outcome: "Run thousands of tests in minutes with real-time results",
    href: "/features/test-execution",
    image: "/assets/features/test-execution.svg",
    isWebp: false,
  },
  {
    title: "CI/CD Integration",
    description: "Seamless integration with GitHub, GitLab, Jenkins, and your existing pipeline with automated quality gates.",
    bullets: [
      "Connect via GitHub, GitLab, or Bitbucket in minutes",
      "Automated quality gates on every push and pull request",
      "Block risky deploys with pre-release gap analysis",
    ],
    outcome: "Deploy with confidence — zero risky releases",
    href: "/features/ci-cd-integration",
    image: "/assets/features/gap-analysis.svg",
    isWebp: false,
  },
  {
    title: "Unified Analytics",
    description: "Single dashboard connecting requirements, code, tests, and deployments with end-to-end traceability.",
    bullets: [
      "Full traceability from requirement to code to test to deployment",
      "Real-time dashboards for quality, velocity, and coverage metrics",
      "Compliance-ready reports with audit trail",
    ],
    outcome: "Complete visibility across your entire delivery pipeline",
    href: "/features/unified-analytics",
    image: "/assets/features/unified-analytics.svg",
    isWebp: false,
  },
];

export default function FeaturesPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: 80, background: "#0a0a0a" }}>
        {/* Hero */}
        <section style={{ padding: "80px 24px 60px", textAlign: "center" }}>
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Our{" "}<span className="text-orange">Features</span>
            </h1>
            <p style={{ color: "#fff", fontSize: 16, fontWeight: 500, marginBottom: 8 }}>
              Build exactly what you intended — from requirements to production.
            </p>
            <p style={{ color: "#9ca3af", fontSize: 14, maxWidth: 600, margin: "0 auto" }}>
              WalnutAI connects documents, design, code, testing, and AI into a single intelligent system, eliminating gaps between intent and implementation.
            </p>
          </div>
        </section>

        {/* Feature Rows — alternating layout */}
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px 80px" }}>
          <div className="features-wrapper" style={{ width: "100%" }}>
            {features.map((f, i) => {
              const isReversed = i % 2 === 1;
              return (
                <div key={f.href} className="features-grid-2" style={{ marginBottom: 24 }}>
                  {/* Image side */}
                  {!isReversed && (
                    <div style={{ borderRadius: 14, overflow: "hidden" }}>
                      {f.isWebp ? (
                        <Image
                          src={f.image}
                          alt={f.title}
                          width={530}
                          height={300}
                          loading={i === 0 ? "eager" : "lazy"}
                          style={{ width: "100%", height: "auto", display: "block" }}
                        />
                      ) : (
                        <img
                          src={f.image}
                          alt={f.title}
                          loading="lazy"
                          width={530}
                          height={300}
                          style={{ width: "100%", display: "block", objectFit: "contain" }}
                        />
                      )}
                    </div>
                  )}

                  {/* Content side */}
                  <div className="feature-card-full">
                    <div className="feature-card-body">
                      <h2 className="feature-card-title">{f.title}</h2>
                      <p className="feature-card-desc">{f.description}</p>
                      <ul className="feature-card-list">
                        {f.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                      <div className="feature-card-outcome">
                        <span className="feature-card-outcome-label">Outcome : </span>
                        {f.outcome}
                      </div>
                      <Link
                        href={f.href}
                        style={{
                          display: "inline-block",
                          marginTop: 16,
                          color: "#F17F0D",
                          fontSize: 14,
                          fontWeight: 600,
                          textDecoration: "none",
                        }}
                      >
                        Learn more &rarr;
                      </Link>
                    </div>
                  </div>

                  {/* Image side (reversed) */}
                  {isReversed && (
                    <div style={{ borderRadius: 14, overflow: "hidden" }}>
                      <img
                        src={f.image}
                        alt={f.title}
                        loading="lazy"
                        width={530}
                        height={300}
                        style={{ width: "100%", display: "block", objectFit: "contain" }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Bottom CTA */}
        <section style={{ padding: "0 24px 100px", textAlign: "center" }}>
          <div style={{ maxWidth: 600, margin: "0 auto" }}>
            <h2 style={{ color: "#fff", fontSize: 30, fontWeight: 700, marginBottom: 16 }}>
              Ready to transform your SDLC?
            </h2>
            <p style={{ color: "#9ca3af", fontSize: 16, lineHeight: 1.7, marginBottom: 32 }}>
              See how WalnutAI can automate your entire software delivery from intent to production.
            </p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <Link
                href="/contact"
                className="gradient-orange"
                style={{
                  display: "inline-block",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 15,
                  padding: "14px 32px",
                  borderRadius: 50,
                  textDecoration: "none",
                }}
              >
                Get a Demo
              </Link>
              <Link
                href="/pricing"
                style={{
                  display: "inline-block",
                  color: "#F17F0D",
                  fontWeight: 600,
                  fontSize: 15,
                  padding: "13px 28px",
                  borderRadius: 50,
                  border: "1px solid rgba(241, 127, 13, 0.3)",
                  textDecoration: "none",
                }}
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
