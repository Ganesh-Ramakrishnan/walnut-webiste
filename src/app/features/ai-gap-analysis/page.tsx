import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FAQAccordion } from "@/components/FeaturePageUI";
import Image from "next/image";
import { ArrowLeft, Search } from "lucide-react";
import { SIGNUP_URL } from "@/lib/links";

export const metadata: Metadata = {
  title: "AI Gap Analysis \u2014 Know Exactly What\u2019s Implemented, What\u2019s Missing, and What\u2019s Gone Wrong | WalnutAI",
  description:
    "WalnutAI\u2019s 3-phase gap analysis finds missing, incomplete, and outdated code against user stories, validates story accuracy, and scores code quality \u2014 before every release.",
  openGraph: {
    title: "AI Gap Analysis \u2014 Know Exactly What\u2019s Implemented, What\u2019s Missing, and What\u2019s Gone Wrong | WalnutAI",
    description:
      "WalnutAI\u2019s 3-phase gap analysis finds missing, incomplete, and outdated code against user stories, validates story accuracy, and scores code quality \u2014 before every release.",
    url: "https://www.walnutai.ai/features/ai-gap-analysis",
    siteName: "WalnutAI",
    type: "website",
    images: [
      {
        url: "https://walnutai.dev/og/ai-gap-analysis.png",
        width: 1200,
        height: 630,
        alt: "WalnutAI AI Gap Analysis \u2014 3-phase requirements vs code analysis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@WalnutAI",
    title: "AI Gap Analysis \u2014 Know Exactly What\u2019s Implemented, What\u2019s Missing, and What\u2019s Gone Wrong | WalnutAI",
    description:
      "WalnutAI\u2019s 3-phase gap analysis finds missing, incomplete, and outdated code against user stories, validates story accuracy, and scores code quality \u2014 before every release.",
    images: ["https://walnutai.dev/og/ai-gap-analysis.png"],
  },
  alternates: {
    canonical: "https://www.walnutai.ai/features/ai-gap-analysis",
  },
};

const sections = [
  {
    title: "Find the code gaps before QA finds them",
    desc: "Phase 1 semantically compares every user story and acceptance criterion against your actual source code \u2014 returning a gap category (Missing, Incomplete, or Outdated), a confidence score from 0\u2013100%, and the exact code snippets that are relevant. No more guessing what got built and what didn\u2019t.",
  },
  {
    title: "Validate whether your stories are still accurate",
    desc: "Phase 2 checks the stories themselves \u2014 not just the code. It detects duplicates above 85% semantic similarity, compares story descriptions against what the code actually implements, and suggests corrections to titles and acceptance criteria. You review and accept or reject each suggestion individually.",
  },
  {
    title: "Score code quality per story and get a report you can act on",
    desc: "Phase 3 scores every user story\u2019s code from 0\u2013100 across complexity, pattern adherence, and anti-patterns \u2014 then goes further. Architectural gaps, security vulnerabilities (OWASP-class), missing unit tests, and undocumented code are all surfaced per story. A PDF report with annotated snippets and prioritized fixes lands ready for your next sprint or leadership review.",
  },
  {
    title: "Works across any scale of codebase and repository setup",
    desc: "Repositories up to 10GB and 100,000+ files are supported across GitHub, GitLab, Bitbucket, and Azure DevOps (cloud and self-hosted). Multi-repository projects are analyzed together with results aggregated into a single view.",
  },
];

const faqs = [
  {
    q: "What is AI requirements gap analysis?",
    a: "AI requirements gap analysis is an automated comparison of your user stories against your codebase to identify what\u2019s missing, incomplete, or outdated. WalnutAI runs this in three phases: missing code detection, story validation, and code quality scoring \u2014 producing actionable results before every release.",
  },
  {
    q: "How often should gap analysis run?",
    a: "WalnutAI can run gap analysis on every commit, on a schedule, or on demand. Most teams run it at least once per sprint before release to catch gaps early. Continuous mode triggers automatically when requirements or code change.",
  },
  {
    q: "What does the gap analysis report include?",
    a: "The report includes overall coverage percentage, a prioritized list of gaps by category (Missing, Incomplete, Outdated), per-story quality scores from 0\u2013100, annotated code snippets, and a PDF export with executive summary and recommendations.",
  },
  {
    q: "Does it work with multiple repositories?",
    a: "Yes. Multi-repository projects are analyzed together with results aggregated into a single view. Supports GitHub, GitLab, Bitbucket, and Azure DevOps \u2014 cloud and self-hosted.",
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
        { "@type": "ListItem", position: 3, name: "AI Gap Analysis", item: "https://www.walnutai.ai/features/ai-gap-analysis" },
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

export default function AIGapAnalysisPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Navbar />
      <main
        className="min-h-screen text-text-primary"
        style={{ paddingTop: 80, background: "linear-gradient(160deg, var(--surface-deep) 0%, var(--surface-1) 25%, var(--page-bg-solid) 55%, var(--surface-1) 100%)" }}
      >
        {/* Back Button */}
        <div className="mx-auto max-w-7xl px-6 pt-10">
          <Link
            href="/features"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--border-default)] bg-[var(--surface-translucent)] px-4 py-2 text-sm text-text-secondary transition-colors hover:border-orange-500/50 hover:text-orange-500"
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
              AI Gap Analysis &mdash; Know Exactly What&apos;s Implemented, What&apos;s Missing,{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
                and What&apos;s Gone Wrong.
              </span>
            </h1>
            <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
              WalnutAI&apos;s 3-phase AI requirements gap analysis finds missing,
              incomplete, and outdated code against user stories, validates story
              accuracy, and scores code quality &mdash; a shift-left testing tool
              that catches gaps before every release.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section
          className="relative overflow-hidden border-y border-white/[0.06]"
          style={{ background: "linear-gradient(180deg, var(--page-bg-solid) 0%, var(--surface-navy) 50%, var(--page-bg-solid) 100%)" }}
        >
          <div className="max-w-7xl mx-auto px-6 py-20 sm:py-24">
            <p className="text-center text-sm font-semibold uppercase tracking-widest mb-16" style={{ color: "var(--accent)" }}>
              Trusted by teams shipping with confidence before every release
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                { value: "100X", label: "More expensive to fix a defect in production than at the requirements stage" },
                { value: "50%", label: "Fewer production defects reported by teams using WalnutAI gap analysis and test generation" },
                { value: "3 phases", label: "Missing code detection, story validation, and code quality scoring \u2014 in a single automated run" },
              ].map((stat) => (
                <div
                  key={stat.value}
                  className="relative rounded-2xl px-9 py-12 text-center overflow-hidden"
                  style={{
                    background: "linear-gradient(160deg, rgba(249,115,22,0.07) 0%, rgba(249,115,22,0.02) 50%, var(--surface-scrim) 100%)",
                    border: "1px solid rgba(249,115,22,0.1)",
                  }}
                >
                  <div className="absolute top-0 left-6 right-6 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(249,115,22,0.2), transparent)" }} />
                  <div className="text-3xl sm:text-4xl font-extrabold text-orange-500 mb-3">{stat.value}</div>
                  <p className="text-text-secondary text-sm leading-relaxed">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="mx-auto max-w-7xl px-6 py-10 sm:py-14">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-5">
              The bugs you catch before QA cost 100X less than the ones you don&apos;t
            </h2>
            <p className="text-text-secondary text-[15px] leading-[1.8]">
              IBM&apos;s System Sciences Institute study found that fixing a defect in production costs 100 times more than fixing it during the requirements phase. WalnutAI&apos;s gap analysis is the mechanism that closes that window &mdash; running a semantic comparison of every story against your actual code before the sprint ends, not after the release ships. Teams using WalnutAI&apos;s gap analysis pipeline have reported up to 50% fewer production defects escaping to release.
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
                  className="grid lg:grid-cols-2 gap-8 items-center rounded-2xl bg-[var(--surface-1)]/75 p-8 sm:p-10"
                >
                  <div className={isEven ? "" : "lg:order-2"}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/15 flex items-center justify-center text-xs font-bold text-orange-400 font-mono">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-3 leading-snug">
                      {s.title}
                    </h3>
                    <p className="text-text-secondary text-[15px] leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                  <div className={isEven ? "" : "lg:order-1"}>
                    <Image
                      src={`/assets/gap ${i + 1}.png`}
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
            background: "var(--surface-1)",
            borderTop: "1px solid var(--border-default)",
            borderBottom: "1px solid var(--border-default)",
          }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-[120px] pointer-events-none" style={{ background: "rgba(249,115,22,0.2)" }} />

          <div className="relative z-10 max-w-3xl mx-auto px-6 py-20 sm:py-24 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to ship with confidence?
            </h2>
            <p className="text-text-secondary mb-8 max-w-xl mx-auto">
              See how WalnutAI connects requirements, code, testing, and
              deployment into one intelligent workflow.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={SIGNUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-orange-500 text-white font-semibold transition-colors hover:bg-orange-600"
              >
                Start Free Trial
              </a>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-orange-500/25 text-text-secondary-strong font-medium transition-colors hover:border-orange-500/50 hover:text-text-primary"
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
