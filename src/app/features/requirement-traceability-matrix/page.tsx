import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FAQAccordion } from "@/components/FeaturePageUI";
import { ArrowLeft, Network } from "lucide-react";

export const metadata: Metadata = {
  title: "Requirement Traceability Matrix \u2014 Total Traceability from Epic to Defect \u2014 Always Current, Never Manual | WalnutAI",
  description:
    "WalnutAI\u2019s RTM maps every Epic \u2192 Feature \u2192 Story \u2192 Test Case \u2192 Defect in an interactive D3 graph. Auto-maintained, filterable, and exportable to Excel for compliance.",
  openGraph: {
    title: "Requirement Traceability Matrix \u2014 Total Traceability from Epic to Defect | WalnutAI",
    description:
      "WalnutAI\u2019s RTM maps every Epic \u2192 Feature \u2192 Story \u2192 Test Case \u2192 Defect in an interactive D3 graph. Auto-maintained, filterable, and exportable to Excel for compliance.",
    url: "https://www.walnutai.ai/features/requirement-traceability-matrix",
    siteName: "WalnutAI",
    type: "website",
    images: [
      {
        url: "https://walnutai.dev/og/requirement-traceability-matrix.png",
        width: 1200,
        height: 630,
        alt: "WalnutAI Requirement Traceability Matrix \u2014 interactive D3 graph mapping Epic to Defect",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@WalnutAI",
    title: "Requirement Traceability Matrix \u2014 Total Traceability from Epic to Defect | WalnutAI",
    description:
      "WalnutAI\u2019s RTM maps every Epic \u2192 Feature \u2192 Story \u2192 Test Case \u2192 Defect in an interactive D3 graph. Auto-maintained, filterable, and exportable to Excel for compliance.",
    images: ["https://walnutai.dev/og/requirement-traceability-matrix.png"],
  },
  alternates: {
    canonical: "https://www.walnutai.ai/features/requirement-traceability-matrix",
  },
};

const sections = [
  {
    title: "See the full traceability chain in one interactive view",
    desc: "An interactive D3.js graph maps every Epic \u2192 Feature \u2192 User Story \u2192 Test Case \u2192 Defect relationship in your project. Color-coded nodes, drag-and-zoom navigation, and click-to-detail panels give you the full picture \u2014 and the ability to drill into any part of it \u2014 without switching tools.",
  },
  {
    title: "Always current, maintained automatically",
    desc: "Stories imported from Jira or Azure DevOps, test cases generated or created manually, and defects logged against test runs are all linked automatically as your project evolves. There\u2019s no matrix to maintain, no spreadsheet to update \u2014 the RTM reflects the truth of your project at all times.",
  },
  {
    title: "Export to Excel for compliance audits in one click",
    desc: "When a release or audit requires documented evidence of requirements coverage, export the full matrix to Excel instantly. Filter by any Epic, Feature, or Story root before exporting to produce exactly the scope of traceability documentation you need.",
  },
];

const faqs = [
  {
    q: "What is a requirement traceability matrix?",
    a: "A requirement traceability matrix (RTM) is a document or tool that maps every requirement to its corresponding test cases, code implementations, and defects \u2014 ensuring nothing falls through the cracks. WalnutAI automates this with an interactive D3 graph that stays current automatically.",
  },
  {
    q: "How is WalnutAI\u2019s RTM different from a spreadsheet?",
    a: "Traditional RTMs are static spreadsheets that require 6\u201310 hours per sprint to maintain. WalnutAI\u2019s RTM is an interactive, always-current graph that updates automatically as stories, test cases, and defects are created or modified \u2014 zero manual effort.",
  },
  {
    q: "Can I export the RTM for compliance audits?",
    a: "Yes. Export the full traceability matrix to Excel in one click. You can filter by Epic, Feature, or Story root before exporting to produce exactly the scope of documentation your audit requires.",
  },
  {
    q: "Does the RTM work with Jira and Azure DevOps?",
    a: "Yes. Stories imported from Jira or Azure DevOps are automatically linked to test cases and defects within WalnutAI. The RTM reflects all connections in real time across both platforms.",
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
        { "@type": "ListItem", position: 3, name: "Requirement Traceability Matrix", item: "https://www.walnutai.ai/features/requirement-traceability-matrix" },
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

export default function RequirementTraceabilityMatrixPage() {
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
              Requirement Traceability Matrix &mdash; Total Traceability from Epic to Defect.{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
                Always Current, Never Manual.
              </span>
            </h1>
            <p className="text-neutral-400 text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
              WalnutAI&apos;s RTM maps every Epic &rarr; Feature &rarr; Story &rarr;
              Test Case &rarr; Defect in an interactive D3 graph. Auto-maintained,
              filterable, and exportable to Excel for compliance. The automated RTM
              tool that eliminates manual traceability.
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
              Trusted by QA leads and compliance teams who&apos;ve eliminated manual traceability
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                { value: "8 hrs", label: "Saved per sprint that used to go to manually updating traceability spreadsheets" },
                { value: "100%", label: "Of requirement-to-test links maintained automatically \u2014 zero manual effort" },
                { value: "1 click", label: "To export a compliance-ready traceability report for any audit or release" },
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
              The RTM that used to take 8 hours a sprint now takes zero
            </h2>
            <p className="text-neutral-400 text-[15px] leading-[1.8]">
              Research from the International Software Testing Qualifications Board found that teams maintaining manual traceability matrices spend an average of 6&ndash;10 hours per sprint keeping them up to date. WalnutAI eliminates this entirely &mdash; every story linked, every test case connected, every defect traced, updated automatically as the project evolves. Compliance audits that once required days of preparation now take one click.
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
