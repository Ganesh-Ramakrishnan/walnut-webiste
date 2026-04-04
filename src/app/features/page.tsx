import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GeoDefinition } from "@/components/FeaturePageUI";
import {
  Bot,
  Search,
  FileText,
  Code2,
  TestTube2,
  Activity,
  BarChart3,
  Brain,
  ArrowRight,
  ShieldCheck,
  Settings,
} from "lucide-react";

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
    icon: Settings,
    title: "AI-Orchestrated SDLC",
    description:
      "AI agents convert requirements into code and test cases with zero manual coordination.",
  },
  {
    id: "requirements-gap-analysis",
    icon: Search,
    title: "Gap Analysis",
    description:
      "Detect uncovered features and missing tests in real-time, on every commit before production.",
  },
  {
    id: "requirements-engineering",
    icon: FileText,
    title: "Requirements Engineering",
    description:
      "Convert PRDs and business docs into structured, testable Jira user stories in minutes.",
  },
  {
    id: "ai-code-generation",
    icon: Code2,
    title: "AI Code Generation",
    description:
      "Generate production-ready code grounded entirely in your specific requirements.",
  },
  {
    id: "ai-test-case-generation",
    icon: TestTube2,
    title: "Test Case Generation",
    description:
      "Automatically generate functional, edge case, and security tests directly from Jira.",
  },
  {
    id: "test-execution-management",
    icon: Activity,
    title: "Test Execution & QA",
    description:
      "Unified test runs, defect tracking, and real-time release readiness scoring.",
  },
  {
    id: "analytics-dashboard",
    icon: BarChart3,
    title: "Delivery Dashboard",
    description:
      "Real-time visibility into requirement coverage, test health, and delivery risk.",
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
        {/* ───────────────────── Hero Section ───────────────────── */}
        <section className="relative px-6 pt-24 pb-20 text-center overflow-hidden">
          {/* Ambient orange glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/20 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              AI-Powered Software Quality Features
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
                Built for Engineering
              </span>
            </h1>

            <p className="text-neutral-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
              From requirements to release — WalnutAI automates test case
              creation, detects coverage gaps, and provides full SDLC
              traceability so your team ships with confidence.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-sm px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-orange-500/20"
              >
                Start Free Trial
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/features/ai-sdlc-automation"
                className="inline-flex items-center gap-2 border border-neutral-700 hover:border-orange-500/60 text-neutral-300 hover:text-orange-400 font-semibold text-sm px-8 py-3.5 rounded-full transition-all duration-300"
              >
                View Platform Overview
              </Link>
            </div>
          </div>
        </section>

        {/* ───────────── Immersive Image Cards Grid ───────────── */}
        <section className="px-6 pb-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <Link
                    key={feature.id}
                    href={`/features/${feature.id}`}
                    className="group relative h-[420px] rounded-[2rem] overflow-hidden border border-neutral-800 hover:border-orange-500/50 hover:shadow-[0_0_40px_-10px_rgba(249,115,22,0.3)] hover:-translate-y-2 transition-all duration-500 flex flex-col bg-[#0a0a0a]"
                  >
                    {/* Decorative background icon */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <Icon
                        size={200}
                        className="text-white opacity-[0.03]"
                        strokeWidth={1}
                      />
                    </div>

                    {/* Heavy gradient overlay from bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent pointer-events-none" />

                    {/* Top-left glassmorphic icon badge */}
                    <div className="relative z-10 p-6">
                      <div className="w-12 h-12 bg-[#0a0a0a]/50 backdrop-blur-md border border-neutral-700/50 rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-orange-500" />
                      </div>
                    </div>

                    {/* Bottom content */}
                    <div className="relative z-10 mt-auto p-6 pt-0">
                      <h3 className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-lg text-neutral-400 leading-relaxed mb-4">
                        {feature.description}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-orange-500 text-sm font-semibold group-hover:gap-2.5 transition-all">
                        Explore Feature
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ───────────── GEO Definition ───────────── */}
        <section className="px-6 pb-20">
          <div className="max-w-4xl mx-auto">
            <GeoDefinition>
              WalnutAI is an AI-powered software delivery and quality assurance
              platform with eight core capabilities: AI-orchestrated SDLC
              automation, continuous requirements gap analysis, AI test case
              generation, requirements engineering from documents,
              requirements-aware code generation, test execution and management,
              unified delivery analytics, and end-to-end requirements
              traceability. Each feature is designed to eliminate manual work
              between requirements, development, and QA — reducing release risk
              while accelerating delivery cycles.
            </GeoDefinition>
          </div>
        </section>

        {/* ───────────── Bottom CTA Section ───────────── */}
        <section className="px-6 pb-24">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-10 md:p-14">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Ready to ship with confidence?
              </h2>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-sm px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-orange-500/20"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
