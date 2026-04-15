import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FAQAccordion } from "@/components/FeaturePageUI";
import { ArrowLeft, Cpu } from "lucide-react";

export const metadata: Metadata = {
  title: "An AI Developer That Never Clocks Out | WalnutAI Cloud Agent",
  description:
    "While your team sleeps, WalnutAI\u2019s Cloud Agent is clearing the backlog \u2014 reading stories, understanding your codebase, writing code, and opening pull requests autonomously. Ship faster without burning out your engineers.",
  openGraph: {
    title: "WalnutAI Cloud Agent \u2014 Assign a Story. Get a Pull Request.",
    description:
      "While your team sleeps, WalnutAI\u2019s Cloud Agent is clearing the backlog \u2014 reading stories, understanding your codebase, writing code, and opening pull requests autonomously.",
    url: "https://www.walnutai.ai/features/cloud-agent",
    siteName: "WalnutAI",
    type: "website",
    images: [
      {
        url: "https://walnutai.dev/og/cloud-agent.png",
        width: 1200,
        height: 630,
        alt: "WalnutAI Cloud Agent live terminal showing autonomous story implementation and PR creation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@WalnutAI",
    title: "WalnutAI Cloud Agent \u2014 Assign a Story. Get a Pull Request.",
    description:
      "While your team sleeps, WalnutAI\u2019s Cloud Agent is clearing the backlog \u2014 reading stories, understanding your codebase, writing code, and opening pull requests autonomously.",
    images: ["https://walnutai.dev/og/cloud-agent.png"],
  },
  alternates: {
    canonical: "https://www.walnutai.ai/features/cloud-agent",
  },
};

const sections = [
  {
    title: "Run multiple agents in parallel across a sprint",
    desc: "Each agent has its own task queue and compute profile. Assign stories to multiple agents simultaneously and let the entire sprint\u2019s boilerplate get implemented overnight \u2014 while your developers focus on architecture and complex logic.",
  },
  {
    title: "Watch the agent work in real time",
    desc: "A live terminal streams the agent\u2019s output via WebSocket as it runs \u2014 showing every tool call, file read, and decision in real time. Check the completion card when it\u2019s done for a full summary of files changed, PR link, elapsed time, and token cost.",
  },
  {
    title: "Reads your codebase before writing a single line of code",
    desc: "The Cloud Agent doesn\u2019t generate code in a vacuum. It first maps your entire repository \u2014 folder structure, module boundaries, existing conventions, and framework patterns \u2014 so every implementation fits naturally into what you\u2019ve already built.",
  },
  {
    title: "Implements features end-to-end, not just snippets",
    desc: "From creating new files to modifying existing ones across multiple directories, the agent handles the full scope of a feature implementation. It follows your codebase\u2019s patterns, runs existing tests to verify nothing is broken, and only commits once the work is complete.",
  },
  {
    title: "Opens a draft PR on your Git platform automatically",
    desc: "Once implementation is done, the agent creates a feature branch (walnut-ai/[story-slug]), pushes it, and opens a draft pull request on GitHub, GitLab, Bitbucket, or Azure DevOps \u2014 with an auto-generated description covering the story, files changed, and acceptance criteria.",
  },
  {
    title: "Responds to reviewer comments without developer involvement",
    desc: "When reviewers leave comments on an AI-generated PR, WalnutAI picks them up via webhook and re-runs the agent with the full feedback. A fix commit is pushed to the same branch automatically \u2014 no developer hand-off needed for standard review iterations.",
  },
];

const faqs = [
  {
    q: "What is an AI code generation agent?",
    a: "An AI code generation agent is an autonomous AI that reads a software requirement, explores a codebase, writes the implementation, and delivers it as a pull request \u2014 without human direction. WalnutAI\u2019s Cloud Agent does this end-to-end: from story assignment through branch creation to PR delivery.",
  },
  {
    q: "Does the Cloud Agent modify production code?",
    a: "No. The agent works exclusively on feature branches prefixed with walnut-ai/. It never pushes to main or protected branches. All changes arrive as draft pull requests for team review before anything is merged.",
  },
  {
    q: "What Git platforms does WalnutAI\u2019s Cloud Agent support?",
    a: "WalnutAI supports GitHub (Cloud and Enterprise), GitLab (Cloud and self-hosted), Bitbucket (Cloud and Server), and Azure DevOps \u2014 including PR creation and review comment webhooks on all four platforms.",
  },
  {
    q: "How does Auto-Fix PR work?",
    a: "When a reviewer comments on a WalnutAI-generated PR, a webhook triggers a 60-second debounce to collect all review feedback, then re-runs the Cloud Agent with the original task plus all reviewer comments. The agent pushes a fix commit automatically \u2014 no developer intervention needed.",
  },
  {
    q: "Can multiple agents run at the same time?",
    a: "Yes. WalnutAI supports multiple agent instances per project, each with its own task queue. Agents operate independently and in parallel, enabling simultaneous implementation of multiple user stories across a sprint.",
  },
  {
    q: "What happens if the agent fails?",
    a: "Failed tasks are flagged with a \u201CFailed\u201D status and the terminal log is preserved for inspection. Users can retry the task, adjust the story\u2019s acceptance criteria for clarity, or manually complete the implementation. Per-agent failure rates are tracked in the agents dashboard.",
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
        { "@type": "ListItem", position: 3, name: "Cloud Agent", item: "https://www.walnutai.ai/features/cloud-agent" },
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

export default function CloudAgentPage() {
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
              Assign a Story. Wake Up to Merged PRs.{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
                No Developer Required for Boilerplate.
              </span>
            </h1>
            <p className="text-neutral-400 text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
              While your team sleeps, WalnutAI&apos;s Cloud Agent is clearing the
              backlog &mdash; reading stories, understanding your codebase, writing
              code, and opening pull requests autonomously. Ship faster without
              burning out your engineers.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section
          className="relative overflow-hidden border-y border-white/[0.06]"
          style={{ background: "var(--bg-body-gradient)" }}
        >
          <div className="max-w-7xl mx-auto px-6 py-20 sm:py-24">
            {/* Tagline */}
            <p className="text-center text-sm font-semibold uppercase tracking-widest mb-16" style={{ color: "#F17F0D" }}>
              Trusted by engineering teams shipping faster with AI
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                { value: "80%", label: "Of sprint work is predictable boilerplate the Cloud Agent handles autonomously" },
                { value: "10X", label: "Faster time from story assignment to open pull request" },
                { value: "3X", label: "More stories shipped per sprint without adding headcount" },
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
              Ship more in every sprint without burning out your engineers
            </h2>
            <p className="text-neutral-400 text-[15px] leading-[1.8]">
              Industry research consistently shows that 80% of development work in a typical sprint &mdash; CRUD operations, API endpoints, form handlers, configuration updates &mdash; follows predictable patterns that require no architectural creativity. WalnutAI&apos;s Cloud Agent takes full ownership of this layer, so your engineers spend their time on the 20% that actually requires human judgment.
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
          {/* Glow orb */}
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
