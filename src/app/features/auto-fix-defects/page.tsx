import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FAQAccordion } from "@/components/FeaturePageUI";
import Image from "next/image";
import { ArrowLeft, GitPullRequest } from "lucide-react";

export const metadata: Metadata = {
  title: "Auto-Fix Defects \u2014 AI That Fixes Bugs Straight from Your Workboard. Log the Defect. The AI Fixes the Code | WalnutAI",
  description:
    "Log a defect in WalnutAI\u2019s workboard and the AI agent reads the failure context, finds the broken code, implements the fix, and raises a PR \u2014 no copy-pasting into your editor required.",
  openGraph: {
    title: "Auto-Fix Defects \u2014 AI That Fixes Bugs Straight from Your Workboard. Log the Defect. The AI Fixes the Code | WalnutAI",
    description:
      "Log a defect in WalnutAI\u2019s workboard and the AI agent reads the failure context, finds the broken code, implements the fix, and raises a PR \u2014 no copy-pasting into your editor required.",
    url: "https://www.walnutai.ai/features/auto-fix-defects",
    siteName: "WalnutAI",
    type: "website",
    images: [
      {
        url: "https://walnutai.dev/og/auto-fix-defects.png",
        width: 1200,
        height: 630,
        alt: "WalnutAI Auto-Fix Defects \u2014 AI agent fixing defects directly from the workboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@WalnutAI",
    title: "Auto-Fix Defects \u2014 AI That Fixes Bugs Straight from Your Workboard. Log the Defect. The AI Fixes the Code | WalnutAI",
    description:
      "Log a defect in WalnutAI\u2019s workboard and the AI agent reads the failure context, finds the broken code, implements the fix, and raises a PR \u2014 no copy-pasting into your editor required.",
    images: ["https://walnutai.dev/og/auto-fix-defects.png"],
  },
  alternates: {
    canonical: "https://www.walnutai.ai/features/auto-fix-defects",
  },
};

const sections = [
  {
    title: "The workboard is already the brief \u2014 the agent reads it directly",
    desc: "Every defect logged in WalnutAI\u2019s workboard carries the full context the agent needs: the failing test case, step-by-step reproduction steps, expected vs actual results, screenshots of the failure, and the linked user story. The agent reads all of it automatically \u2014 nothing needs to be re-entered or re-explained in a separate tool.",
  },
  {
    title: "Finds the broken code without being told where to look",
    desc: "The agent cross-references the defect\u2019s linked story and test case against the indexed codebase to identify which files, functions, and logic paths are responsible for the failure. Developers don\u2019t need to point it at the right file \u2014 the agent navigates to the source of the issue on its own.",
  },
  {
    title: "Implements the fix and raises a PR in the same workflow",
    desc: "Once the agent has understood the defect and located the root cause, it implements the fix, creates a dedicated branch, and opens a pull request with a description that references the original defect, the failing test case, and what was changed. The fix is reviewable and traceable before anything is merged.",
  },
  {
    title: "Closes the loop between test execution and code delivery",
    desc: "When a defect is fixed and the PR is merged, the linked test case and workboard item are updated automatically. QA sees the fix status without chasing the developer for an update \u2014 the defect-to-fix lifecycle is fully tracked inside WalnutAI from log to close.",
  },
];

const faqs = [
  {
    q: "What is AI defect auto fix?",
    a: "AI defect auto fix is an automated workflow where an AI agent reads a logged defect, understands the failure context, locates the broken code, implements a fix, and raises a pull request \u2014 without developer intervention. WalnutAI does this directly from the workboard, using the defect\u2019s existing test case, steps, and screenshots as context.",
  },
  {
    q: "Does the agent modify production code directly?",
    a: "No. The agent creates a dedicated feature branch and opens a pull request for every fix. All changes are reviewable and traceable, and nothing is merged until a developer approves the PR.",
  },
  {
    q: "How does the agent find the broken code?",
    a: "The agent cross-references the defect\u2019s linked user story and test case against the indexed codebase, identifying which files, functions, and logic paths are responsible for the failure. No manual pointing is required.",
  },
  {
    q: "What happens after the fix PR is merged?",
    a: "The linked test case and workboard item are automatically updated to reflect the fix status. QA sees the defect closed without chasing developers for updates \u2014 the full lifecycle is tracked inside WalnutAI from log to close.",
  },
  {
    q: "Can I still edit or override the AI\u2019s fix?",
    a: "Yes. Every fix arrives as a standard pull request. Developers can review, edit, comment on, or reject the PR just like any other code change. The AI is a collaborator, not an override.",
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
        { "@type": "ListItem", position: 3, name: "Auto-Fix Defects", item: "https://www.walnutai.ai/features/auto-fix-defects" },
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

export default function AutoFixDefectsPage() {
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
              Auto-Fix Defects &mdash; AI That Fixes Bugs Straight from Your Workboard.{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
                Log the Defect. The AI Fixes the Code.
              </span>
            </h1>
            <p className="text-neutral-400 text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
              Log a defect in WalnutAI&apos;s workboard and the AI agent reads the
              failure context, finds the broken code, implements the fix, and
              raises a PR &mdash; no copy-pasting into your editor required.
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
              Trusted by engineering teams closing defects faster than they open
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                { value: "4\u20138 hrs", label: "Average time a developer spends context-switching to understand, reproduce, and fix a defect logged by QA" },
                { value: "0", label: "Lines manually explained to the AI \u2014 the workboard already has every detail it needs" },
                { value: "1 click", label: "To assign a logged defect to the Cloud Agent and get a fix PR back" },
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
              Stop re-explaining defects to your code editor that QA already documented
            </h2>
            <p className="text-neutral-400 text-[15px] leading-[1.8]">
              The traditional defect workflow is a relay race with unnecessary handoffs: QA logs a defect with steps, screenshots, expected vs actual results, and a linked test case &mdash; then a developer reads it, switches to their editor, opens an AI assistant, and re-explains the entire thing from scratch. WalnutAI eliminates the relay. The workboard defect already contains everything the AI needs. Assign it to the Cloud Agent and get a fix PR &mdash; no copy-paste, no re-explanation, no context loss.
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
                      src={`/assets/${
                        [
                          "defect1-workboard-brief.gif",
                          "defect2-find-code.gif",
                          "defect3-fix-pr.gif",
                          "defect4-close-loop.gif",
                        ][i]
                      }`}
                      alt={s.title}
                      width={700}
                      height={460}
                      className="rounded-xl w-full h-auto"
                      loading={i < 2 ? "eager" : "lazy"}
                      unoptimized
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
