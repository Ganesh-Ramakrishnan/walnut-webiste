import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Bot,
  Search,
  FileText,
  Code2,
  TestTube2,
  Activity,
  BarChart3,
  Zap,
  ShieldCheck,
  ArrowRight,
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
    icon: Bot,
    menuTitle: "SDLC Automation",
    description:
      "WalnutAI automates the entire software development lifecycle — AI agents convert requirements into code and test cases with zero manual coordination.",
  },
  {
    id: "requirements-gap-analysis",
    icon: Search,
    menuTitle: "Gap Analysis",
    description:
      "WalnutAI's continuous gap analysis compares your requirements, code, and test suite in real time — identifying untested features and missing coverage before they reach production.",
  },
  {
    id: "requirements-engineering",
    icon: FileText,
    menuTitle: "Requirements Engineering",
    description:
      "WalnutAI converts PRDs, PDFs, Confluence pages, and spreadsheets into structured user stories with acceptance criteria, traceability IDs, and dependency maps.",
  },
  {
    id: "ai-code-generation",
    icon: Code2,
    menuTitle: "AI Code Generation",
    description:
      "WalnutAI generates production-ready code grounded in your actual requirements — not generic patterns. Every suggestion is cross-referenced against your user stories.",
  },
  {
    id: "ai-test-case-generation",
    icon: TestTube2,
    menuTitle: "Test Case Generation",
    badge: "Highest Priority",
    description:
      "WalnutAI generates functional, edge case, regression, and security test cases directly from Jira user stories — saving 15+ hours per sprint.",
  },
  {
    id: "test-execution-management",
    icon: Activity,
    menuTitle: "Test Execution",
    description:
      "WalnutAI's test execution platform connects test runs directly to requirements and gap analysis — giving QA teams real-time release readiness scoring.",
  },
  {
    id: "analytics-dashboard",
    icon: BarChart3,
    menuTitle: "Delivery Analytics",
    description:
      "WalnutAI's analytics dashboard gives engineering managers a real-time view of requirement coverage, test health, gap trends, and release risk.",
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
      <main id="main-content" style={{ paddingTop: 80 }} className="bg-neutral-950">
        {/* Hero Section */}
        <section className="px-6 pt-20 pb-16 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              AI-Powered Software Quality Features{" "}
              <span className="text-orange-500">
                Built for Engineering and QA Teams
              </span>
            </h1>
            <p className="text-neutral-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              From requirements to release — WalnutAI automates test case
              creation, detects coverage gaps, and provides full SDLC
              traceability so your team ships with confidence.
            </p>
          </div>
        </section>

        {/* Platform Definition Card (GEO) */}
        <section className="px-6 pb-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 md:p-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-neutral-950 border border-neutral-800 rounded-lg flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-orange-500" />
                </div>
                <h2 className="text-xl font-bold text-white">
                  Platform Definition
                </h2>
              </div>
              <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
                WalnutAI is an AI-powered software delivery and quality
                assurance platform with eight core capabilities: AI-orchestrated
                SDLC automation, continuous requirements gap analysis, AI test
                case generation, requirements engineering from documents,
                requirements-aware code generation, test execution and
                management, and unified delivery analytics. Each feature is
                designed to eliminate manual work between requirements,
                development, and QA — reducing release risk while accelerating
                delivery cycles.
              </p>
            </div>
          </div>
        </section>

        {/* Explore Our Core Features */}
        <section className="px-6 pb-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Explore Our Core Features
              </h2>
              <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-orange-500 to-orange-300" />
            </div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <Link
                    key={feature.id}
                    href={`/features/${feature.id}`}
                    className="group relative bg-neutral-900 border border-neutral-800 rounded-2xl p-8 hover:border-orange-500/50 hover:bg-neutral-800/80 transition-all duration-300 flex flex-col"
                  >
                    {/* Badge */}
                    {feature.badge && (
                      <span className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        {feature.badge}
                      </span>
                    )}

                    {/* Icon */}
                    <div className="w-14 h-14 bg-neutral-950 border border-neutral-800 rounded-xl flex items-center justify-center mb-5">
                      <Icon className="w-7 h-7 text-orange-500" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors mb-3">
                      {feature.menuTitle}
                    </h3>

                    {/* Description */}
                    <p className="text-neutral-400 text-sm leading-relaxed flex-grow mb-5">
                      {feature.description}
                    </p>

                    {/* Learn more */}
                    <span className="inline-flex items-center gap-1.5 text-orange-500 text-sm font-semibold group-hover:gap-2.5 transition-all">
                      Learn more
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Bottom CTA Section */}
        <section className="px-6 pb-24">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-10 md:p-14">
              <div className="w-14 h-14 bg-neutral-950 border border-neutral-800 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-7 h-7 text-orange-500" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Ready to Transform Your Software Delivery?
              </h2>
              <p className="text-neutral-400 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-8">
                See how WalnutAI eliminates the gap between requirements,
                development, and QA — so your team ships faster with fewer
                defects.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm px-8 py-3.5 rounded-full transition-colors"
                >
                  Start Free Trial
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border border-orange-500/30 hover:border-orange-500/60 text-orange-500 font-semibold text-sm px-8 py-3.5 rounded-full transition-colors"
                >
                  Book a Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
