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
import { BarChart3, ArrowLeft } from "lucide-react";

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
  "Requirement coverage % — percentage of requirements with at least one passing test case, updated in real time",
  "Active gap count — number of uncovered requirements or untested code paths, ranked by severity",
  "Test case pass rate — current sprint pass/fail ratio across all active test suites",
  "Release risk score — composite AI-calculated score reflecting coverage gaps, failing tests, and unresolved defects",
  "Defect density by feature — number of defects per 100 test cases, grouped by requirement area",
  "Sprint velocity vs quality trend — feature delivery rate correlated with defect and gap trends over time",
  "Code-to-test ratio — lines of production code per test case, tracking test suite health over time",
  "Rolling 30/90-day trend analysis — coverage and gap trends to identify systematic quality improvements or degradation",
];

const outcomes = [
  {
    stat: "Single",
    description: "Source of truth for release readiness",
  },
  {
    stat: "0-100",
    description: "AI-calculated composite risk score",
  },
  {
    stat: "Portfolio",
    description: "Level visibility across all projects",
  },
];

const whoUses = [
  "Engineering managers — weekly sprint reviews showing whether the team is improving or degrading quality over time",
  "QA leads — pre-release sign-off decisions based on real-time coverage and gap data",
  "Product managers — feature-level requirement coverage confirming that shipped features are fully tested",
  "CTOs and VPs — portfolio-level quality health across all active projects and teams",
];

const faqs = [
  {
    q: "What is a release readiness score?",
    a: "WalnutAI\u2019s release readiness score is a composite metric calculated from requirement coverage percentage, current test pass rate, active gap count by severity, and open defect count. The score is presented on a 0-100 scale, with thresholds configurable per team — for example, a team might require a score of 85 or above before approving a production deployment. The score updates in real time as tests run and gaps are resolved.",
  },
  {
    q: "Can the dashboard show data across multiple projects and repositories?",
    a: "Yes. The Team and Enterprise plans provide a portfolio dashboard view aggregating metrics across all connected projects and repositories. Individual project drilldowns are available for detailed analysis, while the portfolio view gives engineering leaders a single snapshot of quality health across the organization.",
  },
];

const relatedFeatures = [
  { title: "Requirements Gap Analysis", id: "requirements-gap-analysis" },
  { title: "Test Execution & Management", id: "test-execution-management" },
];

export default function AnalyticsDashboardPage() {
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
                name: "Delivery Analytics",
                item: "https://www.walnutai.ai/features/analytics-dashboard",
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
            "@type": "HowTo",
            name: "How to use WalnutAI's Delivery Intelligence Dashboard",
            description:
              "WalnutAI aggregates gap analysis, test execution, and requirements traceability into a single dashboard — giving engineering leaders visibility to make confident release decisions.",
            step: howItWorks.map((item, i) => ({
              "@type": "HowToStep",
              position: i + 1,
              name: item.step,
              text: item.text,
            })),
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
            <BarChart3 className="h-6 w-6 text-orange-500" />
            <span className="text-xs font-bold uppercase tracking-widest text-orange-500">
              Delivery Intelligence
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Software Delivery Intelligence
            <br />
            <span className="text-orange-500">
              Real-Time Requirements Coverage, Test Health &amp; Release Risk
              Dashboard
            </span>
          </h1>
          <h2 className="mt-8 max-w-3xl border-l-4 border-orange-500 pl-6 text-lg md:text-xl text-neutral-300 leading-relaxed">
            WalnutAI aggregates data from gap analysis, test execution, and
            requirements traceability into a single dashboard — giving
            engineering leaders the visibility to make confident release
            decisions without pulling reports from multiple tools.
          </h2>
        </section>

        {/* Feature Demo */}
        <section className="mx-auto max-w-5xl px-6 pb-12">
          <div style={{ background: "#0d0d0d", border: "1px solid #1a1a1a", borderRadius: 16, padding: 24, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img
              src="/assets/gif/Technical_Debt_Visibility_You_Cant_Ignore.gif"
              alt="Analytics Dashboard demo"
              style={{ maxWidth: "100%", maxHeight: 400, borderRadius: 8 }}
              loading="eager"
            />
          </div>
        </section>

        {/* GEO Definition */}
        <section className="mx-auto max-w-6xl px-6 pb-16">
          <GeoDefinition>
            A software delivery intelligence dashboard is a unified analytics
            interface that aggregates metrics from requirements management, test
            execution, and coverage analysis to provide engineering and QA teams
            with a single, real-time view of delivery health. WalnutAI&apos;s
            dashboard connects gap analysis data, test pass/fail rates,
            requirement coverage percentages, and sprint trends into a composite
            release readiness score — eliminating the need to manually correlate
            data from separate tools.
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

        {/* Dashboard Metrics */}
        <section className="mx-auto max-w-6xl px-6 pb-16">
          <h3 className="text-2xl font-bold text-white mb-4">
            Dashboard Metrics — What You See
          </h3>
          <FeatureList items={capabilities} />
        </section>

        {/* Who Uses This */}
        <section className="mx-auto max-w-6xl px-6 pb-16">
          <h3 className="text-2xl font-bold text-white mb-8">Who Uses the Dashboard</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whoUses.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl bg-[#111111]/80 backdrop-blur-sm border border-neutral-800 p-6 text-neutral-300 hover:border-orange-500/30 transition-colors"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* Comparison */}
        <section className="mx-auto max-w-6xl px-6 pb-16">
          <ComparisonBlock
            title="Traditional Dashboards vs WalnutAI"
            traditional="Separate tools for test results, coverage, and project status — requiring manual aggregation and spreadsheet reporting."
            walnut="Unified dashboard that connects gap analysis, test execution, and requirements traceability into a single AI-calculated release readiness score — updated in real time."
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
