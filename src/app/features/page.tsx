import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GeoDefinition } from "@/components/FeaturePageUI";
import { ShieldCheck, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title:
    "WalnutAI Features — AI Test Case Generation, Gap Analysis & SDLC Automation",
  description:
    "Explore WalnutAI's 8 AI-powered features: automated test case generation, continuous gap analysis, requirements engineering, end-to-end traceability, and more. Built for QA and engineering teams.",
  openGraph: {
    title:
      "WalnutAI Features — AI Test Case Generation, Gap Analysis & SDLC Automation",
    description:
      "Explore WalnutAI's 8 AI-powered features: automated test case generation, continuous gap analysis, requirements engineering, end-to-end traceability, and more. Built for QA and engineering teams.",
    url: "https://www.walnutai.ai/features",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "WalnutAI Features — AI Test Case Generation, Gap Analysis & SDLC Automation",
    description:
      "Explore WalnutAI's 8 AI-powered features: automated test case generation, continuous gap analysis, requirements engineering, end-to-end traceability, and more. Built for QA and engineering teams.",
  },
  alternates: {
    canonical: "https://www.walnutai.ai/features",
  },
};

const features = [
  {
    id: "ai-sdlc-automation",
    title: "AI-Orchestrated SDLC",
    description: "Automate your entire software delivery lifecycle from intent to production with intelligent AI orchestration that coordinates every phase seamlessly.",
    bullets: [
      "Prompt WalnutAI or upload requirements — AI bots break down and assign tasks",
      "AI bots generate requirements, code, and testing end to end",
      "Wake up to a completely built app with zero human-in-loop",
    ],
    stat: "80%",
    statLabel: "faster delivery",
    gif: "/assets/gif/Ai- Orchestrated SDLC.gif",
  },
  {
    id: "requirements-gap-analysis",
    title: "Continuous Gap Analysis",
    description: "Real-time scanning across requirements, code, and tests to identify coverage gaps before they become production bugs.",
    bullets: [
      "Scans your entire codebase and requirement docs continuously",
      "Identifies untested paths, missing requirements, and coverage gaps",
      "Generates shareable gap reports for stakeholder alignment",
    ],
    stat: "40+",
    statLabel: "gaps found per project",
    gif: "/assets/gif/Gap analysis.gif",
  },
  {
    id: "requirements-engineering",
    title: "Requirements Engineering",
    description: "Transform documents and Figma designs into structured, validated requirements with AI-driven priority setting.",
    bullets: [
      "Upload PDFs, DOCX, audio/video files, or Figma designs",
      "AI extracts, validates, and deduplicates requirements automatically",
      "Push structured user stories directly to Jira",
    ],
    stat: "30m",
    statLabel: "instead of 2-3 days",
    gif: "/assets/gif/Requirements Engineering.gif",
  },
  {
    id: "ai-code-generation",
    title: "AI Code Generation",
    description: "Generate production-ready code grounded in your actual requirements — every suggestion traceable to the user story it implements.",
    bullets: [
      "Requirement-grounded suggestions linked to user stories",
      "Real-time requirement coverage feedback as you code",
      "Two modes: chat-based generation and autonomous agent",
    ],
    stat: "100%",
    statLabel: "requirement-linked code",
    gif: "/assets/gif/AI code generation.gif",
  },
  {
    id: "ai-test-case-generation",
    title: "AI Test Case Generation",
    description: "Generate functional, edge case, regression, and security test cases from your Jira stories — saving 15+ hours per sprint.",
    bullets: [
      "Generates test cases from requirements in seconds per user story",
      "Covers edge cases, boundary conditions, and negative paths",
      "Export to Playwright, Jira, or your CI/CD pipeline",
    ],
    stat: "15h+",
    statLabel: "saved per sprint",
    gif: "/assets/gif/Test Case Generation.gif",
  },
  {
    id: "test-execution-management",
    title: "Test Execution & QA",
    description: "Unified test runs, defect tracking, and real-time release readiness scoring — connected to requirements.",
    bullets: [
      "Execute automated and manual test suites from one interface",
      "Real-time release readiness scoring linked to requirements",
      "Test Healer auto-fixes broken tests from UI changes",
    ],
    stat: "96%",
    statLabel: "requirement coverage",
    gif: "/assets/gif/Test Execution & QA.gif",
  },
  {
    id: "analytics-dashboard",
    title: "Delivery Dashboard",
    description: "Real-time dashboard for requirement coverage, test health, gap trends, and release risk across all projects.",
    bullets: [
      "Requirement coverage %, test pass rate, and release risk score",
      "Sprint velocity vs quality trend analysis",
      "Portfolio-level visibility across all teams and projects",
    ],
    stat: "0-100",
    statLabel: "release readiness score",
    gif: "/assets/gif/Delivery Dashboard.gif",
  },
];

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "WalnutAI",
  applicationCategory: "DeveloperApplication",
  featureList: [
    "AI software development automation",
    "Automated requirements gap analysis",
    "AI requirements engineering from documents",
    "Requirements-aware AI code generation",
    "AI test case generation from requirements",
    "Test execution and QA management",
    "Software delivery analytics dashboard",
    "End-to-end requirements traceability",
  ],
};

export default function FeaturesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationSchema),
        }}
      />
      <Navbar />
      <main
        id="main-content"
        style={{ paddingTop: 80 }}
        className="bg-[#0a0a0a]"
      >
        {/* Hero */}
        <section className="relative px-6 pt-24 pb-16 text-center overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              AI-Powered Software Quality Features{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
                Built for Engineering
              </span>
            </h1>
            <p className="text-neutral-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              From requirements to release — WalnutAI automates test case
              creation, detects coverage gaps, and provides full SDLC
              traceability so your team ships with confidence.
            </p>
          </div>
        </section>

        {/* Feature Rows */}
        <section className="px-6 pb-16">
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            {features.map((f, i) => {
              const reversed = i % 2 === 1;
              return (
                <div
                  key={f.id}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 40,
                    alignItems: "center",
                    padding: "48px 0",
                    borderBottom: i < features.length - 1 ? "1px solid #141414" : "none",
                    direction: reversed ? "rtl" : "ltr",
                  }}
                  className="feat-hub-row"
                >
                  {/* Left: Details */}
                  <div style={{ direction: "ltr" }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 16 }}>
                      <span style={{ fontSize: 36, fontWeight: 900, color: "#F17F0D", lineHeight: 1 }}>{f.stat}</span>
                      <span style={{ fontSize: 12, color: "#555", textTransform: "uppercase", letterSpacing: 1 }}>{f.statLabel}</span>
                    </div>
                    <h2 style={{ color: "#fff", fontSize: 28, fontWeight: 800, marginBottom: 12, lineHeight: 1.2 }}>
                      {f.title}
                    </h2>
                    <p style={{ color: "#888", fontSize: 15, lineHeight: 1.75, marginBottom: 20 }}>
                      {f.description}
                    </p>
                    <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "flex", flexDirection: "column", gap: 8 }}>
                      {f.bullets.map((b) => (
                        <li key={b} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                          <span style={{ color: "#F17F0D", marginTop: 4, flexShrink: 0 }}>&#10003;</span>
                          <span style={{ color: "#aaa", fontSize: 14, lineHeight: 1.6 }}>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/features/${f.id}`}
                      style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#F17F0D", fontSize: 14, fontWeight: 600, textDecoration: "none" }}
                    >
                      Read more
                      <ArrowRight size={16} />
                    </Link>
                  </div>

                  {/* Right: GIF */}
                  <div style={{ direction: "ltr" }}>
                    <div style={{ background: "#0d0d0d", border: "1px solid #1a1a1a", borderRadius: 16, padding: 20, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <img
                        src={f.gif}
                        alt={`${f.title} demo`}
                        loading={i < 2 ? "eager" : "lazy"}
                        style={{ maxWidth: "100%", maxHeight: 320, borderRadius: 8 }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* GEO Definition */}
        <section className="px-6 pb-16">
          <div className="max-w-4xl mx-auto">
            <GeoDefinition>
              WalnutAI is an AI-powered software delivery and quality
              assurance platform with eight core capabilities: AI-orchestrated
              SDLC automation, continuous requirements gap analysis, AI test
              case generation, requirements engineering from documents,
              requirements-aware code generation, flexible AI interaction
              modes, test execution and management, and unified delivery
              analytics. Each feature is designed to eliminate manual work
              between requirements, development, and QA — reducing release
              risk while accelerating delivery cycles.
            </GeoDefinition>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 pb-24">
          <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ color: "#fff", fontSize: 30, fontWeight: 700, marginBottom: 16 }}>
              Ready to ship with confidence?
            </h2>
            <p style={{ color: "#888", fontSize: 16, lineHeight: 1.7, marginBottom: 32 }}>
              See how WalnutAI connects requirements, code, testing, and deployment into one intelligent workflow.
            </p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <Link
                href="/contact"
                style={{ display: "inline-block", background: "#F17F0D", color: "#fff", fontWeight: 700, fontSize: 15, padding: "14px 32px", borderRadius: 50, textDecoration: "none" }}
              >
                Start Free Trial
              </Link>
              <Link
                href="/pricing"
                style={{ display: "inline-block", color: "#F17F0D", fontWeight: 600, fontSize: 15, padding: "13px 28px", borderRadius: 50, border: "1px solid rgba(241, 127, 13, 0.3)", textDecoration: "none" }}
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .feat-hub-row {
            grid-template-columns: 1fr !important;
            direction: ltr !important;
          }
        }
      `}</style>
    </>
  );
}
