import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FAQAccordion } from "@/components/FeaturePageUI";
import { ArrowLeft, Blocks } from "lucide-react";

export const metadata: Metadata = {
  title: "WalnutAI VS Code Extension \u2014 AI Coding Assistant in Your Editor",
  description:
    "Ask, Plan, and Agent modes directly in VS Code. Query your codebase, plan features with AI approval, and spawn autonomous sub-agents \u2014 without leaving your IDE.",
  openGraph: {
    title: "WalnutAI VS Code Extension \u2014 AI Coding Assistant in Your Editor",
    description:
      "Ask, Plan, and Agent modes directly in VS Code. Query your codebase, plan features with AI approval, and spawn autonomous sub-agents \u2014 without leaving your IDE.",
    url: "https://www.walnutai.ai/features/vscode-extension",
    siteName: "WalnutAI",
    type: "website",
    images: [
      {
        url: "https://walnutai.dev/og/vscode-extension.png",
        width: 1200,
        height: 630,
        alt: "WalnutAI VS Code Extension showing Ask, Plan, and Agent modes in the IDE",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@WalnutAI",
    title: "WalnutAI VS Code Extension \u2014 AI Coding Assistant in Your Editor",
    description:
      "Ask, Plan, and Agent modes directly in VS Code. Query your codebase, plan features with AI approval, and spawn autonomous sub-agents \u2014 without leaving your IDE.",
    images: ["https://walnutai.dev/og/vscode-extension.png"],
  },
  alternates: {
    canonical: "https://www.walnutai.ai/features/vscode-extension",
  },
};

const sections = [
  {
    title: "Ask anything about your codebase and get grounded answers",
    desc: "Ask Mode searches your actual repository to answer questions \u2014 \u201CWhere is the authentication logic?\u201D, \u201CHow are payments processed?\u201D, \u201CWhat does this module depend on?\u201D \u2014 with answers grounded in real code, not general AI training data.",
  },
  {
    title: "Plan complex features before any code is touched",
    desc: "Plan Mode generates a step-by-step technical implementation plan identifying exactly which files, modules, and changes are needed. The plan is shown for human review and approval before any agent executes it \u2014 so nothing moves until you\u2019re confident in the approach.",
  },
  {
    title: "Spawn specialized sub-agents for different parts of a task",
    desc: "Agent Mode breaks work across specialized sub-agents: Explore maps the codebase, Plan designs the strategy, Bash handles shell operations, and General-Purpose manages research and multi-step analysis. Multiple agents run in parallel background threads \u2014 no waiting for one to finish before the next starts.",
  },
  {
    title: "Stays in context no matter what you\u2019re looking at",
    desc: "Selected code, the current open file, your workspace folder, and pinned reference files are all passed as context to every query. WalnutAI always knows exactly what you\u2019re working on, so answers are precise rather than generic.",
  },
];

const faqs = [
  {
    q: "What is an AI coding assistant for VS Code?",
    a: "An AI coding assistant for VS Code is an extension that brings AI capabilities directly into your editor \u2014 letting you query your codebase, plan implementations, and execute code changes without switching to a browser or external tool. WalnutAI\u2019s extension provides Ask, Plan, and Agent modes for complete coverage.",
  },
  {
    q: "How is this different from GitHub Copilot?",
    a: "GitHub Copilot provides inline code completions based on patterns. WalnutAI\u2019s VS Code extension provides three distinct modes: Ask for codebase queries, Plan for implementation planning with approval gates, and Agent for autonomous multi-step execution \u2014 all grounded in your actual requirements and codebase context.",
  },
  {
    q: "Does the extension work with any programming language?",
    a: "Yes. The extension works with any language supported by VS Code. It reads your repository structure and file contents directly, so language support is not limited to a specific set \u2014 it understands whatever your codebase is written in.",
  },
  {
    q: "Can Agent Mode modify my code directly?",
    a: "Yes. In Agent Mode, the AI can create, edit, and delete files in your workspace. All changes are made in your local working copy \u2014 nothing is pushed or committed automatically. You review every change before committing.",
  },
  {
    q: "Does the extension require an internet connection?",
    a: "Yes. The extension communicates with WalnutAI\u2019s backend for AI model inference. Your code context is sent securely and is not stored or used for training.",
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
        { "@type": "ListItem", position: 3, name: "VS Code Extension", item: "https://www.walnutai.ai/features/vscode-extension" },
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

export default function VSCodeExtensionPage() {
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
              Your AI Coding Assistant{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
                Lives in VS Code Now.
              </span>
            </h1>
            <p className="text-neutral-400 text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
              Ask, Plan, and Agent modes directly in VS Code. Query your codebase,
              plan features with AI approval, and spawn autonomous sub-agents &mdash;
              without leaving your IDE.
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
              Trusted by developers who stay in flow
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                { value: "23 min", label: "Lost to every context switch out of your IDE \u2014 eliminated completely" },
                { value: "3 modes", label: "Ask, Plan, and Agent \u2014 covering every developer interaction from query to autonomous execution" },
                { value: "0", label: "Browser tabs needed to query requirements, gap analysis, or test data" },
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
              The best AI coding assistant is the one you never have to leave your editor to use
            </h2>
            <p className="text-neutral-400 text-[15px] leading-[1.8]">
              Research from UC Irvine found it takes an average of 23 minutes to fully regain focus after an interruption. For developers, every switch to a browser tab &mdash; whether to check Jira, query an AI chat tool, or look up a test case &mdash; is a 23-minute tax on deep work. WalnutAI&apos;s VS Code extension eliminates the switch entirely. Everything you need is where you already are.
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
