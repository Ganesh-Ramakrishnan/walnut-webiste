import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FAQAccordion } from "@/components/FeaturePageUI";
import { ArrowLeft, Code2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Your Code Already Knows What It Does. We Just Write It Down into Structured Requirements | WalnutAI",
  description:
    "WalnutAI AST-parses your repository and generates structured Epics, Features, and User Stories from what the code actually implements. Perfect for legacy codebases.",
  openGraph: {
    title: "Your Code Already Knows What It Does. We Just Write It Down | WalnutAI",
    description:
      "WalnutAI AST-parses your repository and generates structured Epics, Features, and User Stories from what the code actually implements. Perfect for legacy codebases.",
    url: "https://www.walnutai.ai/features/code-to-story",
    siteName: "WalnutAI",
    type: "website",
    images: [
      {
        url: "https://walnutai.dev/og/code-to-story.png",
        width: 1200,
        height: 630,
        alt: "WalnutAI Code-to-Story \u2014 reverse requirements engineering from your codebase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@WalnutAI",
    title: "Your Code Already Knows What It Does. We Just Write It Down | WalnutAI",
    description:
      "WalnutAI AST-parses your repository and generates structured Epics, Features, and User Stories from what the code actually implements. Perfect for legacy codebases.",
    images: ["https://walnutai.dev/og/code-to-story.png"],
  },
  alternates: {
    canonical: "https://www.walnutai.ai/features/code-to-story",
  },
};

const sections = [
  {
    title: "The hierarchy comes from your folder structure, not the AI\u2019s imagination",
    desc: "Epic and Feature names are derived directly from your repository\u2019s actual directory structure \u2014 auth/ becomes \u201CAuthentication\u201D, payments/checkout/ becomes \u201CCheckout\u201D. The AI generates story titles and descriptions, but the structure is always grounded in reality.",
  },
  {
    title: "Stories are grounded strictly in what the code implements",
    desc: "WalnutAI queries the most relevant code snippets for each story and generates descriptions and acceptance criteria based on what the code actually does \u2014 not what someone thinks it should do, not gaps, not wishes. If the code doesn\u2019t do it, the story won\u2019t claim it does.",
  },
  {
    title: "Solves the cold-start problem for legacy systems",
    desc: "Every codebase that predates modern requirements practices \u2014 years of features with no tickets, no documentation \u2014 can now get a complete requirements baseline in hours. Once Code-to-Story runs, gap analysis and test generation have the stories they need to operate.",
  },
  {
    title: "Re-indexes efficiently as your codebase evolves",
    desc: "Merkle tree change detection means subsequent runs only re-index files that have actually changed. For large repositories already indexed, incremental updates are fast \u2014 keeping your requirements baseline current without full re-processing every time.",
  },
];

const faqs = [
  {
    q: "What is reverse requirements engineering?",
    a: "Reverse requirements engineering is the process of analyzing an existing codebase to generate the requirements it implements. WalnutAI automates this by AST-parsing your repository, mapping folder structures to Epics and Features, and generating User Stories with acceptance criteria grounded in what the code actually does.",
  },
  {
    q: "Does Code-to-Story work with any programming language?",
    a: "Yes. WalnutAI reads your repository structure and file contents directly. It supports any language present in your codebase \u2014 the AST parsing and story generation adapts to the language and framework conventions it encounters.",
  },
  {
    q: "How accurate are the generated requirements?",
    a: "Stories are grounded strictly in code behavior, not AI assumptions. Every generated story references the actual code it describes, and all stories go through a human review gate before being saved. You approve, edit, or reject each one.",
  },
  {
    q: "How long does it take to process a large codebase?",
    a: "Initial processing depends on repository size \u2014 most codebases complete in hours, not days. Subsequent runs use Merkle tree change detection to only re-index modified files, making incremental updates significantly faster.",
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
        { "@type": "ListItem", position: 3, name: "Code-to-Story", item: "https://www.walnutai.ai/features/code-to-story" },
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

export default function CodeToStoryPage() {
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
              Your Code Already Knows What It Does.{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
                We Just Write It Down into Structured Requirements.
              </span>
            </h1>
            <p className="text-neutral-400 text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
              WalnutAI AST-parses your repository and generates structured Epics,
              Features, and User Stories from what the code actually implements.
              Reverse requirements engineering and AI codebase documentation for
              legacy systems and undocumented codebases.
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
              Trusted by teams inheriting codebases without documentation
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                { value: "70%", label: "Of enterprise codebases have incomplete or missing requirements documentation" },
                { value: "3 weeks", label: "Average onboarding time for a QA engineer on an undocumented legacy codebase \u2014 Code-to-Story eliminates this" },
                { value: "Hours", label: "To generate a full requirements baseline from a codebase that\u2019s been in production for years" },
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
              Stop treating your legacy codebase as a documentation black hole
            </h2>
            <p className="text-neutral-400 text-[15px] leading-[1.8]">
              Gartner research estimates that over 70% of enterprise software systems lack adequate requirements documentation &mdash; not because teams were careless, but because requirements and code drift apart the moment a sprint closes. Code-to-Story reverses the problem: instead of writing requirements and hoping code follows them, it reads the code and generates the requirements it already represents. Every system has a story. WalnutAI just writes it down.
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
