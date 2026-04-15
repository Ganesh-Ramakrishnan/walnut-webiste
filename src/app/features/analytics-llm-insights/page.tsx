import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FAQAccordion } from "@/components/FeaturePageUI";
import { ArrowLeft, BarChart3 } from "lucide-react";

export const metadata: Metadata = {
  title: "Analytics & LLM Insights. Data Your Engineering Team Can Act On. Numbers Your Leadership Can Trust | WalnutAI",
  description:
    "Track test execution trends, defect rates, team productivity, and AI model token usage across every project and sprint. Turn QA data into release confidence and ROI reporting.",
  openGraph: {
    title: "Analytics & LLM Insights \u2014 QA Analytics Dashboard & AI Cost Tracking | WalnutAI",
    description:
      "Track test execution trends, defect rates, team productivity, and AI model token usage across every project and sprint. Turn QA data into release confidence and ROI reporting.",
    url: "https://www.walnutai.ai/features/analytics-llm-insights",
    siteName: "WalnutAI",
    type: "website",
    images: [
      {
        url: "https://walnutai.dev/og/analytics-llm-insights.png",
        width: 1200,
        height: 630,
        alt: "WalnutAI Analytics & LLM Insights \u2014 QA analytics dashboard with AI cost tracking",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@WalnutAI",
    title: "Analytics & LLM Insights \u2014 QA Analytics Dashboard & AI Cost Tracking | WalnutAI",
    description:
      "Track test execution trends, defect rates, team productivity, and AI model token usage across every project and sprint. Turn QA data into release confidence and ROI reporting.",
    images: ["https://walnutai.dev/og/analytics-llm-insights.png"],
  },
  alternates: {
    canonical: "https://www.walnutai.ai/features/analytics-llm-insights",
  },
};

const sections = [
  {
    title: "Track test execution trends across every sprint and project",
    desc: "Pass rates, failure distributions, execution velocity, blocked test rates, and defect discovery trends are tracked continuously across every project and sprint. Patterns that indicate quality risk become visible weeks before they would surface as production incidents.",
  },
  {
    title: "Spot and eliminate flaky tests before they erode confidence",
    desc: "Flaky tests \u2014 tests that pass and fail intermittently without code changes \u2014 silently undermine release confidence and waste QA time. WalnutAI\u2019s analytics identify flaky tests automatically so they can be fixed or quarantined before they distort your execution results.",
  },
  {
    title: "Monitor AI model cost and token usage per project",
    desc: "Every AI operation in WalnutAI \u2014 story generation, gap analysis, test case creation, code generation \u2014 is tracked by model, token count, and estimated cost per project. Engineering managers can see exactly what AI is costing, control spending limits, and compare cost-per-output across different model configurations.",
  },
  {
    title: "Executive-ready reports without manual compilation",
    desc: "Generate release readiness reports, sprint quality summaries, and AI ROI dashboards in one click \u2014 formatted for leadership review, not just QA internal use. No manual data gathering, no spreadsheet assembly, no time spent translating test data into business language.",
  },
];

const faqs = [
  {
    q: "What does WalnutAI\u2019s QA analytics dashboard track?",
    a: "WalnutAI tracks test execution trends, pass/fail rates, defect discovery patterns, flaky test detection, team productivity, and AI model token usage with cost estimates \u2014 across every project and sprint, updated in real time.",
  },
  {
    q: "Can I track AI model costs per project?",
    a: "Yes. Every AI operation is tracked by model, token count, and estimated cost on a per-project basis. You can set spending limits and compare cost-per-output across different model configurations to optimize AI spend.",
  },
  {
    q: "How does flaky test detection work?",
    a: "WalnutAI automatically identifies tests that pass and fail intermittently without code changes. These flaky tests are flagged in the analytics dashboard so they can be fixed or quarantined before they distort execution results and erode release confidence.",
  },
  {
    q: "Can I generate executive reports from the dashboard?",
    a: "Yes. Release readiness reports, sprint quality summaries, and AI ROI dashboards can be generated in one click \u2014 formatted for leadership review. No manual data gathering or spreadsheet assembly needed.",
  },
];

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.walnutai.ai" },
        { "@type": "ListItem", position: 2, name: "Features", item: "https://www.walnutai.ai/features" },
        { "@type": "ListItem", position: 3, name: "Analytics & LLM Insights", item: "https://www.walnutai.ai/features/analytics-llm-insights" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
  ],
};

export default function AnalyticsLLMInsightsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Navbar />
      <main
        className="min-h-screen text-white"
        style={{ paddingTop: 80, background: "var(--bg-body-gradient)" }}
      >
        {/* Back Button */}
        <div className="mx-auto max-w-7xl px-6 pt-10">
          <Link
            href="/features"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-4 py-2 text-sm text-neutral-400 transition-colors hover:border-orange-500/50 hover:text-orange-500"
          >
            <ArrowLeft size={16} />
            All Features
          </Link>
        </div>

        {/* Hero */}
        <section className="relative px-6 pt-10 pb-16 text-center overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="relative z-10 max-w-5xl mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold tracking-tight mb-6 leading-tight">
              Analytics &amp; LLM Insights.{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
                Data Your Engineering Team Can Act On. Numbers Your Leadership Can Trust.
              </span>
            </h1>
            <p className="text-neutral-400 text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
              Track test execution trends, defect rates, team productivity, and
              AI model token usage across every project and sprint. Turn QA data
              into release confidence and ROI reporting.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section
          className="relative overflow-hidden border-y border-white/[0.06]"
          style={{ background: "var(--bg-body-gradient)" }}
        >
          <div className="max-w-7xl mx-auto px-6 py-20 sm:py-24">
            <p className="text-center text-sm font-semibold uppercase tracking-widest mb-16" style={{ color: "#F17F0D" }}>
              Trusted by QA leads and engineering managers who run data-driven releases
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                { value: "Real-time", label: "Execution trends, defect rates, and coverage metrics updated as tests run \u2014 not at report time" },
                { value: "360\u00b0", label: "Visibility across test quality, team productivity, AI model usage, and cost in a single dashboard" },
                { value: "Every sprint", label: "Historical trend data across sprints surfaces patterns before they become incidents" },
              ].map((stat) => (
                <div
                  key={stat.value}
                  className="relative rounded-2xl px-9 py-12 text-center overflow-hidden"
                  style={{
                    background: "linear-gradient(160deg, rgba(249,115,22,0.07) 0%, rgba(249,115,22,0.02) 50%, rgba(10,10,10,0.95) 100%)",
                    border: "1px solid rgba(249,115,22,0.1)",
                  }}
                >
                  <div className="absolute top-0 left-6 right-6 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(249,115,22,0.2), transparent)" }} />
                  <div className="text-3xl sm:text-4xl font-extrabold text-orange-500 mb-3">{stat.value}</div>
                  <p className="text-neutral-400 text-sm leading-relaxed">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="mx-auto max-w-7xl px-6 py-10 sm:py-14">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">
              Most teams only look at quality data after something goes wrong
            </h2>
            <p className="text-neutral-400 text-[15px] leading-[1.8]">
              A release-day dashboard tells you what already happened. WalnutAI&apos;s analytics surface trends across sprints &mdash; rising defect rates, slipping coverage, flaky tests accumulating, AI model costs creeping up &mdash; early enough to act. QA leads get the operational data they need for sprint retrospectives. Engineering managers get the executive-ready metrics they need for release confidence and ROI conversations.
            </p>
          </div>
        </section>

        {/* Feature Sections — alternating layout */}
        <section className="mx-auto max-w-7xl px-6 pb-20">
          <div className="space-y-6">
            {sections.map((s, i) => {
              const isEven = i % 2 === 0;
              return (
                <div
                  key={i}
                  className="grid lg:grid-cols-2 gap-8 items-center rounded-2xl bg-bg-surface p-8 sm:p-10"
                >
                  <div className={isEven ? "" : "lg:order-2"}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/15 flex items-center justify-center text-xs font-bold text-orange-400 font-mono">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug">
                      {s.title}
                    </h3>
                    <p className="text-neutral-400 text-[15px] leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                  <div className={isEven ? "" : "lg:order-1"}>
                    <div className="rounded-xl bg-[#060b18] h-48 sm:h-56 flex items-center justify-center">
                      <span className="text-neutral-700 text-sm">Feature visual</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section
          className="relative overflow-hidden"
          style={{
            background: "var(--card-bg)",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-[120px] pointer-events-none" style={{ background: "rgba(249,115,22,0.2)" }} />

          <div className="relative z-10 max-w-3xl mx-auto px-6 py-20 sm:py-24 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to ship with confidence?
            </h2>
            <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
              See how WalnutAI connects requirements, code, testing, and
              deployment into one intelligent workflow.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-orange-500 text-white font-semibold transition-colors hover:bg-orange-600"
              >
                Start Free Trial
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-orange-500/25 text-neutral-300 font-medium transition-colors hover:border-orange-500/50 hover:text-white"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-7xl px-6 py-20">
          <FAQAccordion faqs={faqs} />
        </section>
      </main>
      <Footer />
    </>
  );
}
