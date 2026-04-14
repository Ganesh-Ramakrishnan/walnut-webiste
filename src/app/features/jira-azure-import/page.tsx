import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FAQAccordion } from "@/components/FeaturePageUI";
import Image from "next/image";
import { ArrowLeft, Import } from "lucide-react";

export const metadata: Metadata = {
  title: "Sync Stories into WalnutAI Automatically. Your Stories Are Already in Jira. WalnutAI Knows That | WalnutAI",
  description:
    "Import user stories and work items from Jira or Azure DevOps with custom field mapping and bidirectional sync. No double-entry, no drift between tools.",
  openGraph: {
    title: "Sync Stories into WalnutAI Automatically \u2014 Jira & Azure DevOps Integration | WalnutAI",
    description:
      "Import user stories and work items from Jira or Azure DevOps with custom field mapping and bidirectional sync. No double-entry, no drift between tools.",
    url: "https://www.walnutai.ai/features/jira-azure-import",
    siteName: "WalnutAI",
    type: "website",
    images: [
      {
        url: "https://walnutai.dev/og/jira-azure-import.png",
        width: 1200,
        height: 630,
        alt: "WalnutAI Jira & Azure DevOps Import \u2014 bidirectional requirements sync",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@WalnutAI",
    title: "Sync Stories into WalnutAI Automatically \u2014 Jira & Azure DevOps Integration | WalnutAI",
    description:
      "Import user stories and work items from Jira or Azure DevOps with custom field mapping and bidirectional sync. No double-entry, no drift between tools.",
    images: ["https://walnutai.dev/og/jira-azure-import.png"],
  },
  alternates: {
    canonical: "https://www.walnutai.ai/features/jira-azure-import",
  },
};

const sections = [
  {
    title: "Import stories with full field mapping, not just titles",
    desc: "WalnutAI maps Jira and Azure DevOps fields \u2014 epics, stories, acceptance criteria, priority, labels, assignees, and custom fields \u2014 into WalnutAI\u2019s hierarchy. The imported stories arrive complete, not stripped down to a title and a description.",
  },
  {
    title: "Bidirectional sync keeps both systems aligned automatically",
    desc: "When a story is updated in Jira, WalnutAI reflects the change. When test results or coverage data changes in WalnutAI, the linked Jira item stays current. No manual reconciliation, no status drift between your project management tool and your test intelligence platform.",
  },
  {
    title: "Fit into your existing workflow without disrupting it",
    desc: "Teams don\u2019t need to change how they write stories or how they use Jira. WalnutAI imports what\u2019s already there and adds gap analysis, test generation, and traceability on top \u2014 the existing Jira workflow stays exactly as it is.",
  },
];

const faqs = [
  {
    q: "Does WalnutAI support both Jira and Azure DevOps?",
    a: "Yes. WalnutAI imports work items from both Jira (Cloud and Server) and Azure DevOps with full field mapping. Both platforms support bidirectional sync so updates flow in both directions.",
  },
  {
    q: "Will importing stories into WalnutAI affect my Jira workflow?",
    a: "No. WalnutAI imports your existing stories without modifying how your team uses Jira. Your Jira stays the source of truth \u2014 WalnutAI adds AI intelligence, gap analysis, and test generation on top.",
  },
  {
    q: "Can I map custom Jira fields to WalnutAI?",
    a: "Yes. The field mapping interface supports standard and custom Jira and Azure DevOps fields. You control which fields import and how they map into WalnutAI\u2019s hierarchy.",
  },
  {
    q: "How does bidirectional sync work?",
    a: "When a story is updated in Jira or Azure DevOps, WalnutAI reflects the change automatically. When test results, coverage, or defect status changes in WalnutAI, the linked work item is updated in the source tool. No manual reconciliation needed.",
  },
  {
    q: "Do I need to re-import stories every time there\u2019s a change?",
    a: "No. Once the initial import is complete, bidirectional sync keeps everything current. New stories added to Jira are automatically pulled in, and updates flow both ways without any manual re-import.",
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
        { "@type": "ListItem", position: 3, name: "Jira & Azure DevOps Import", item: "https://www.walnutai.ai/features/jira-azure-import" },
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

export default function JiraAzureImportPage() {
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
              Sync Stories into WalnutAI Automatically.{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
                Your Stories Are Already in Jira. WalnutAI Knows That.
              </span>
            </h1>
            <p className="text-neutral-400 text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
              Import user stories and work items from Jira or Azure DevOps with
              custom field mapping and bidirectional sync. No double-entry, no
              drift between tools.
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
              Trusted by teams who refuse to manage requirements in two places
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                { value: "0", label: "Stories manually re-entered \u2014 everything imports with full field mapping" },
                { value: "2-way", label: "Bidirectional sync keeps status, updates, and new stories aligned automatically" },
                { value: "100%", label: "Of your existing Jira and Azure DevOps workflow preserved \u2014 WalnutAI fits in, not over" },
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
              Stop maintaining the same story in two different tools
            </h2>
            <p className="text-neutral-400 text-[15px] leading-[1.8]">
              The average engineering team already has requirements in Jira or Azure DevOps. Adding a test management or AI platform shouldn&apos;t mean re-entering everything from scratch or accepting that the two systems will drift apart within a week. WalnutAI imports your work items with full field mapping and keeps them in sync bidirectionally &mdash; so your Jira stays the source of truth while WalnutAI adds the AI intelligence layer on top.
            </p>
          </div>
        </section>

        {/* Feature Sections — alternating layout */}
        <section className="mx-auto max-w-[1480px] px-6 pb-20">
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
                    <Image
                      src={`/assets/feature-visuals/${
                        ["field-mapping", "bidirectional-sync", "workflow-fit"][i]
                      }.png`}
                      alt={s.title}
                      width={700}
                      height={460}
                      className="rounded-xl w-full h-auto"
                      loading={i < 2 ? "eager" : "lazy"}
                    />
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
