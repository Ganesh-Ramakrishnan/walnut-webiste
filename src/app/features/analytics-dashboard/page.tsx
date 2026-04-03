import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BarChart3 } from "lucide-react";

export const metadata: Metadata = {
  title:
    "Software Delivery Intelligence Dashboard — Coverage, Test Health & Release Risk | WalnutAI",
  description:
    "Real-time view of requirement coverage, test health, gap trends, and release risk across every project and repository.",
  openGraph: {
    title:
      "Software Delivery Intelligence Dashboard — Coverage, Test Health & Release Risk | WalnutAI",
    description:
      "Real-time view of requirement coverage, test health, gap trends, and release risk across every project and repository.",
    url: "https://www.walnutai.ai/features/analytics-dashboard",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Software Delivery Intelligence Dashboard — Coverage, Test Health & Release Risk | WalnutAI",
    description:
      "Real-time view of requirement coverage, test health, gap trends, and release risk across every project and repository.",
  },
  alternates: {
    canonical: "https://www.walnutai.ai/features/analytics-dashboard",
  },
};

const howItWorks = [
  {
    step: "Connect your projects",
    text: "Link repositories, Jira boards, and test suites to aggregate data automatically.",
  },
  {
    step: "AI calculates composite metrics",
    text: "Coverage %, pass rate, gap count, and defect density feed into a single release readiness score.",
  },
  {
    step: "Dashboard updates in real time",
    text: "Every test run, gap change, or requirement update is reflected instantly.",
  },
  {
    step: "Make confident release decisions",
    text: "Drill into any metric to understand risk before signing off on a release.",
  },
];

const capabilities = [
  "Requirement coverage %",
  "Active gap count ranked by severity",
  "Test case pass rate",
  "Release risk score (AI-calculated composite)",
  "Defect density by feature",
  "Sprint velocity vs quality trend",
  "Code-to-test ratio",
  "Rolling 30/90-day trend analysis",
];

const whoUses = [
  "Engineering managers — sprint reviews on quality trends",
  "QA leads — pre-release sign-off with coverage data",
  "Product managers — feature-level requirement coverage",
  "CTOs — portfolio quality health across teams",
];

const faqs = [
  {
    q: "What is a release readiness score?",
    a: "Composite metric from coverage %, pass rate, gap count, defect count. 0-100 scale, configurable thresholds. Updates in real time.",
  },
  {
    q: "Multi-project support?",
    a: "Yes. Team/Enterprise have portfolio dashboard aggregating all projects. Individual drilldowns available.",
  },
];

const relatedFeatures = [
  { title: "Gap Analysis", id: "requirements-gap-analysis" },
  { title: "Test Execution", id: "test-execution-management" },
];

export default function AnalyticsDashboardPage() {
  return (
    <>
      <Navbar />
      <main
        className="min-h-screen bg-neutral-950 text-white"
        style={{ paddingTop: 80 }}
      >
        {/* Breadcrumb */}
        <div className="w-full border-b border-neutral-800 bg-neutral-950">
          <div className="mx-auto max-w-6xl px-6 py-3">
            <p className="font-mono text-sm text-neutral-400">
              <Link href="/" className="hover:text-orange-500 transition-colors">
                walnutai.ai
              </Link>
              {" / "}
              <Link
                href="/features"
                className="hover:text-orange-500 transition-colors"
              >
                features
              </Link>
              {" / "}
              <span className="text-white">analytics-dashboard</span>
              {"/"}
            </p>
          </div>
        </div>

        {/* Hero */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex items-center gap-3 mb-6">
            <BarChart3 className="h-9 w-9 text-orange-500" />
            <span className="rounded-full bg-orange-500/10 border border-orange-500/30 px-4 py-1 text-sm font-medium text-orange-500">
              Delivery Intelligence
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Software Delivery Intelligence
            <br />
            <span className="text-orange-500">
              Real-Time Coverage, Test Health &amp; Release Risk
            </span>
          </h1>
          <h2 className="mt-8 max-w-3xl border-l-4 border-orange-500 pl-6 text-lg md:text-xl text-neutral-300 leading-relaxed">
            WalnutAI aggregates gap analysis, test execution, and requirements
            traceability into a single dashboard — giving engineering leaders
            visibility to make confident release decisions.
          </h2>
        </section>

        {/* GEO Definition + Outcomes */}
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2 rounded-2xl bg-neutral-900 border border-neutral-800 p-8">
              <h3 className="text-sm font-mono uppercase tracking-widest text-orange-500 mb-4">
                Definition
              </h3>
              <p className="text-neutral-300 leading-relaxed text-lg">
                A software delivery intelligence dashboard aggregates metrics
                from requirements management, test execution, and coverage
                analysis. WalnutAI&apos;s dashboard connects gap data, test
                rates, coverage percentages, and sprint trends into a composite
                release readiness score.
              </p>
            </div>
            <div className="rounded-2xl bg-neutral-900 border border-neutral-800 p-8">
              <h3 className="text-sm font-mono uppercase tracking-widest text-orange-500 mb-4">
                Outcomes
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-neutral-300">
                  <span className="mt-1 block h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                  Single source of truth for release readiness
                </li>
                <li className="flex items-start gap-3 text-neutral-300">
                  <span className="mt-1 block h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                  AI-calculated composite risk score (0-100)
                </li>
                <li className="flex items-start gap-3 text-neutral-300">
                  <span className="mt-1 block h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                  Portfolio-level visibility across all projects
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <h2 className="text-3xl font-bold mb-12">How It Works</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {howItWorks.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl bg-neutral-900 border border-neutral-800 p-6"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-white font-bold text-lg">
                  {i + 1}
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.step}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Dashboard Metrics */}
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <h2 className="text-3xl font-bold mb-8">Dashboard Metrics</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {capabilities.map((cap, i) => (
              <div key={i} className="flex items-start gap-3">
                <svg
                  className="mt-1 h-5 w-5 shrink-0 text-orange-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-neutral-300">{cap}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Who Uses This */}
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <h2 className="text-3xl font-bold mb-8">Who Uses This</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whoUses.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl bg-neutral-900 border border-neutral-800 p-6 text-neutral-300"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* Comparison */}
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <h2 className="text-3xl font-bold mb-8">
            Traditional Dashboards vs WalnutAI
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-neutral-900 border border-neutral-800 p-8">
              <h3 className="text-sm font-mono uppercase tracking-widest text-neutral-500 mb-4">
                Traditional
              </h3>
              <p className="text-neutral-400 leading-relaxed">
                Separate tools for test results, coverage, and project status —
                requiring manual aggregation and spreadsheet reporting.
              </p>
            </div>
            <div className="rounded-2xl bg-neutral-900 border border-orange-500/30 p-8">
              <h3 className="text-sm font-mono uppercase tracking-widest text-orange-500 mb-4">
                WalnutAI
              </h3>
              <p className="text-neutral-300 leading-relaxed">
                Unified dashboard that connects gap analysis, test execution, and
                requirements traceability into a single AI-calculated release
                readiness score — updated in real time.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <h2 className="text-3xl font-bold mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl bg-neutral-900 border border-neutral-800 p-6"
              >
                <h3 className="font-semibold text-lg mb-2">{faq.q}</h3>
                <p className="text-neutral-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Features */}
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <h2 className="text-3xl font-bold mb-8">Related Features</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {relatedFeatures.map((f) => (
              <Link
                key={f.id}
                href={`/features/${f.id}`}
                className="group rounded-2xl bg-neutral-900 border border-neutral-800 p-6 transition-colors hover:border-orange-500/50"
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
          <div className="rounded-2xl bg-gradient-to-br from-orange-500/10 to-neutral-900 border border-orange-500/20 p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to see your release readiness in real time?
            </h2>
            <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
              See how WalnutAI gives engineering leaders a single dashboard for
              coverage, test health, and release risk.
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
