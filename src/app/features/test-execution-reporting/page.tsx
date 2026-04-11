import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FAQAccordion } from "@/components/FeaturePageUI";
import { ArrowLeft, ClipboardCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Test Execution & Reporting \u2014 Full Lifecycle in One Place. Execute. Capture. Report. Done. | WalnutAI",
  description:
    "Step-by-step guided execution, screenshot capture for failures, data-driven iterations, and comprehensive PDF reports \u2014 complete test lifecycle management in WalnutAI.",
  openGraph: {
    title: "Test Execution & Reporting \u2014 Execute. Capture. Report. Done. | WalnutAI",
    description:
      "Step-by-step guided execution, screenshot capture for failures, data-driven iterations, and comprehensive PDF reports \u2014 complete test lifecycle management in WalnutAI.",
    url: "https://www.walnutai.ai/features/test-execution-reporting",
    siteName: "WalnutAI",
    type: "website",
    images: [
      {
        url: "https://walnutai.dev/og/test-execution-reporting.png",
        width: 1200,
        height: 630,
        alt: "WalnutAI Test Execution & Reporting \u2014 complete QA test lifecycle management",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@WalnutAI",
    title: "Test Execution & Reporting \u2014 Execute. Capture. Report. Done. | WalnutAI",
    description:
      "Step-by-step guided execution, screenshot capture for failures, data-driven iterations, and comprehensive PDF reports \u2014 complete test lifecycle management in WalnutAI.",
    images: ["https://walnutai.dev/og/test-execution-reporting.png"],
  },
  alternates: {
    canonical: "https://www.walnutai.ai/features/test-execution-reporting",
  },
};

const sections = [
  {
    title: "Get a quick overview with run results and execution trends",
    desc: "Get an instant summary of every test run \u2014 total cases executed, passed, failed, blocked, and skipped. Track execution trends and pass/fail distribution over time so quality patterns become visible before they become problems.",
  },
  {
    title: "Step-by-step guided execution with evidence capture built in",
    desc: "Walk through each test step, mark pass, fail, blocked, or skip, and capture screenshots directly inline for any failure. Evidence is attached to the step automatically \u2014 no external screenshot tool, no copy-pasting into a separate report.",
  },
  {
    title: "Run data-driven tests across entire datasets automatically",
    desc: "Link a test dataset to any test case and WalnutAI iterates through every row automatically \u2014 one execution run, full dataset coverage. No manual repetition, no missed data combinations.",
  },
  {
    title: "Generate and share comprehensive reports at every level",
    desc: "PDF reports are generated per test case, per suite, and per release \u2014 covering full step results, screenshots, summary statistics, and pass/fail charts. Filter by status, date range, environment, assignee, or test case before exporting so every stakeholder gets exactly the view they need.",
  },
];

const faqs = [
  {
    q: "What is a test execution management tool?",
    a: "A test execution management tool guides QA engineers through test case execution step by step, captures evidence like screenshots, tracks pass/fail results, and generates reports \u2014 all in one place. WalnutAI does this with built-in data-driven testing and PDF report generation.",
  },
  {
    q: "Can I capture screenshots during test execution?",
    a: "Yes. Screenshots are captured inline during step-by-step execution and automatically attached to the failing step. No external tools or manual copy-pasting needed.",
  },
  {
    q: "What report formats does WalnutAI support?",
    a: "WalnutAI generates PDF reports at the test case, suite, and release level \u2014 with step results, screenshots, summary statistics, and pass/fail charts. Reports can be filtered by status, date range, environment, or assignee before export.",
  },
  {
    q: "Does WalnutAI support data-driven testing?",
    a: "Yes. Link a dataset to any test case and WalnutAI iterates through every row automatically in a single execution run. Full dataset coverage with no manual repetition.",
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
        { "@type": "ListItem", position: 3, name: "Test Execution & Reporting", item: "https://www.walnutai.ai/features/test-execution-reporting" },
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

export default function TestExecutionReportingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Navbar />
      <main
        className="min-h-screen text-white"
        style={{ paddingTop: 80, background: "linear-gradient(160deg, #1a0e05 0%, #0a1628 25%, #060b18 55%, #0a1628 100%)" }}
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
              Test Execution &amp; Reporting &mdash;{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
                Execute. Capture. Report. Done.
              </span>
            </h1>
            <p className="text-neutral-400 text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
              Step-by-step guided execution, screenshot capture for failures,
              data-driven iterations, and comprehensive PDF reports &mdash;
              complete test execution management and QA test lifecycle management
              in one place.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section
          className="relative overflow-hidden border-y border-white/[0.06]"
          style={{ background: "linear-gradient(180deg, #060b18 0%, #0f1a3d 50%, #060b18 100%)" }}
        >
          <div className="max-w-7xl mx-auto px-6 py-20 sm:py-24">
            <p className="text-center text-sm font-semibold uppercase tracking-widest mb-16" style={{ color: "#F17F0D" }}>
              Trusted by QA teams closing release cycles faster
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                { value: "3X", label: "Faster release sign-off when execution evidence and reports are generated automatically" },
                { value: "2\u20133 hrs", label: "Saved per release cycle previously spent manually compiling test results into reports" },
                { value: "360\u00b0", label: "Coverage of execution lifecycle \u2014 step results, evidence, data-driven iterations, and suite-level reporting in one place" },
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
              Release sign-off used to mean two days of report writing &mdash; not anymore
            </h2>
            <p className="text-neutral-400 text-[15px] leading-[1.8]">
              The final stage before a release &mdash; gathering test results, compiling execution evidence, producing stakeholder reports, confirming environment coverage &mdash; routinely adds two to three days to release cycles. Not because the testing isn&apos;t done, but because the documentation of it takes nearly as long as the testing itself. WalnutAI generates comprehensive, evidence-backed reports at the moment execution ends, so release sign-off happens the same day.
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
                  className="grid lg:grid-cols-2 gap-8 items-center rounded-2xl bg-[#0a1628]/75 p-8 sm:p-10"
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
            background: "#0a1628",
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
