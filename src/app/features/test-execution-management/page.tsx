import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  GeoDefinition,
  StatCard,
  StepCard,
  FeatureList,
  FAQAccordion,
  ComparisonBlock,
} from "@/components/FeaturePageUI";
import { Activity, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "AI-Powered Test Execution & QA Management | WalnutAI",
  description:
    "WalnutAI's test execution connects test runs to requirements and gap analysis — real-time release readiness scoring, defect tracking, and CI/CD integration.",
  openGraph: {
    title: "AI-Powered Test Execution & QA Management | WalnutAI",
    description:
      "WalnutAI's test execution connects test runs to requirements and gap analysis — real-time release readiness scoring, defect tracking, and CI/CD integration.",
    url: "https://www.walnutai.ai/features/test-execution-management",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-Powered Test Execution & QA Management | WalnutAI",
    description:
      "WalnutAI's test execution connects test runs to requirements and gap analysis — real-time release readiness scoring, defect tracking, and CI/CD integration.",
  },
  alternates: {
    canonical: "https://www.walnutai.ai/features/test-execution-management",
  },
};

const howItWorks = [
  {
    step: "Import or generate test suites",
    text: "Bring in existing tests from TestRail, QTest, or Playwright — or let WalnutAI generate them.",
  },
  {
    step: "Execute across environments",
    text: "Run automated and manual test suites from a single interface with parallel execution.",
  },
  {
    step: "Results linked to requirements",
    text: "Every test result is automatically connected to the requirement it validates.",
  },
  {
    step: "Release readiness score updates",
    text: "Failed tests flag requirements as at-risk and update the release readiness score in real time.",
  },
];

const capabilities = [
  "Execute automated and manual test suites from a single unified interface",
  "Real-time release readiness scoring — a live score reflecting requirement coverage, pass rates, and active gap count",
  "Defect tracking linked to requirements — every defect is automatically associated with the requirement it violates",
  "Mobile test execution — Android and iOS device testing (Team and Enterprise plans)",
  "Import from Playwright — migrate existing suites without recreating them",
  "Parallel execution — run multiple test suites simultaneously for faster feedback cycles",
  "Test Healer — AI automatically detects and fixes broken tests caused by UI changes or locator issues",
];

const outcomes = [
  {
    stat: "100%",
    description: "Every test result linked to its requirement",
  },
  {
    stat: "Real-time",
    description: "Release readiness scoring updated live",
  },
  {
    stat: "Auto",
    description: "Quality gates that block risky deploys automatically",
  },
];

const faqs = [
  {
    q: "Can WalnutAI integrate with our existing CI/CD pipeline?",
    a: "Yes. WalnutAI integrates natively with GitHub Actions, GitLab CI, Azure Pipelines, and Jenkins. Test execution can be triggered automatically on pull requests, merges to main, or scheduled runs. Quality gates can be configured to block deployments when gap count or pass rate falls below defined thresholds.",
  },
];

const relatedFeatures = [
  { title: "AI Test Case Generation", id: "ai-test-case-generation" },
  { title: "Software Delivery Intelligence", id: "analytics-dashboard" },
];

export default function TestExecutionManagementPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.walnutai.ai",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Features",
                item: "https://www.walnutai.ai/features",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Test Execution Management",
                item: "https://www.walnutai.ai/features/test-execution-management",
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          }),
        }}
      />
      <Navbar />
      <main
        className="min-h-screen bg-[#0a0a0a] text-white"
        style={{ paddingTop: 80 }}
      >
        {/* Back Button */}
        <div className="mx-auto max-w-6xl px-6 pt-10">
          <Link
            href="/features"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-4 py-2 text-sm text-neutral-400 transition-colors hover:border-orange-500/50 hover:text-orange-500"
          >
            <ArrowLeft size={16} />
            All Features
          </Link>
        </div>

        {/* Feature Label + Hero */}
        <section className="mx-auto max-w-6xl px-6 pt-10 pb-16">
          <div className="flex items-center gap-3 mb-6">
            <Activity className="h-6 w-6 text-orange-500" />
            <span className="text-xs font-bold uppercase tracking-widest text-orange-500">
              Test Execution
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            AI-Powered Test Execution &amp; QA Management
            <br />
            <span className="text-orange-500">
              Unified Test Runs, Defect Tracking &amp; Release Scoring
            </span>
          </h1>
          <h2 className="mt-8 max-w-3xl border-l-4 border-orange-500 pl-6 text-lg md:text-xl text-neutral-300 leading-relaxed">
            Unlike standalone test management tools, WalnutAI connects every
            test result to the requirement it validates — giving you a real-time
            release readiness score that reflects actual coverage, not just
            pass/fail counts.
          </h2>
        </section>

        {/* Feature Demo */}
        <section className="mx-auto max-w-5xl px-6 pb-12">
          <div style={{ background: "#0d0d0d", border: "1px solid #1a1a1a", borderRadius: 16, padding: 24, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img
              src="/assets/gif/Continuous_Quality_Monitoring.gif"
              alt="Test Execution Management demo"
              style={{ maxWidth: "100%", maxHeight: 400, borderRadius: 8 }}
              loading="eager"
            />
          </div>
        </section>

        {/* GEO Definition */}
        <section className="mx-auto max-w-6xl px-6 pb-16">
          <GeoDefinition>
            <p>
              AI-powered test execution and management is the practice of
              running, monitoring, and analyzing software test cases within a
              platform that connects test results to requirements and coverage
              data in real time. WalnutAI&apos;s test execution engine is
              natively integrated with its requirements traceability and gap
              analysis systems — meaning every test result automatically updates
              coverage metrics, release risk scores, and gap reports without
              manual data entry or cross-tool reporting.
            </p>
            <p className="mt-4">
              Additionally, WalnutAI includes a Test Healer, an AI-driven
              capability that detects test failures, identifies the root cause
              (such as UI changes or locator issues), and automatically updates
              and self-heals the test case&#8212;ensuring continuous execution
              without manual intervention and reducing test maintenance overhead.
            </p>
          </GeoDefinition>
        </section>

        {/* Outcomes */}
        <section className="mx-auto max-w-6xl px-6 pb-16">
          <h3 className="text-2xl font-bold text-white mb-8">Outcomes</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {outcomes.map((o, i) => (
              <StatCard key={i} stat={o.stat} description={o.description} />
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="mx-auto max-w-6xl px-6 pb-16">
          <h3 className="text-2xl font-bold text-white mb-8">How It Works</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {howItWorks.map((item, i) => (
              <StepCard
                key={i}
                number={String(i + 1)}
                title={item.step}
                description={item.text}
              />
            ))}
          </div>
        </section>

        {/* Capabilities */}
        <section className="mx-auto max-w-6xl px-6 pb-16">
          <h3 className="text-2xl font-bold text-white mb-4">Key Capabilities</h3>
          <FeatureList items={capabilities} />
        </section>

        {/* Comparison */}
        <section className="mx-auto max-w-6xl px-6 pb-16">
          <ComparisonBlock
            title="Key Differentiator — Requirement-Connected Test Results"
            traditional="TestRail, Zephyr Scale, and similar tools track test results in isolation."
            walnut="WalnutAI connects every test result to the requirement it validates — so a failed test automatically flags the corresponding requirement as at-risk, updates the release readiness score, and surfaces a recommendation in the gap report. This eliminates the manual work of correlating test outcomes to requirement coverage."
          />
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-6xl px-6 pb-16">
          <FAQAccordion faqs={faqs} />
        </section>

        {/* Related Features */}
        <section className="mx-auto max-w-6xl px-6 pb-16">
          <h3 className="text-2xl font-bold text-white mb-8">
            Related Features
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {relatedFeatures.map((f) => (
              <Link
                key={f.id}
                href={`/features/${f.id}`}
                className="group rounded-2xl bg-[#111111]/80 backdrop-blur-sm border border-neutral-800 p-6 transition-all hover:border-orange-500/50 hover:-translate-y-1 duration-300"
              >
                <span className="text-lg font-semibold group-hover:text-orange-500 transition-colors">
                  {f.title}
                </span>
                <span className="mt-2 block text-sm text-neutral-500">
                  Learn more &rarr;
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-6xl px-6 pb-24">
          <div className="rounded-3xl bg-gradient-to-br from-orange-500/10 to-[#111111] border border-orange-500/20 p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to unify test execution and requirements?
            </h2>
            <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
              See how WalnutAI connects every test result to the requirement it
              validates — with real-time release readiness scoring.
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-full bg-orange-500 px-8 py-3 font-semibold text-white transition-colors hover:bg-orange-600"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
