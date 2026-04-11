import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FAQAccordion } from "@/components/FeaturePageUI";
import { ArrowLeft, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "External MCP Integration \u2014 Every Tool Your Team Uses, Available Inside WalnutAI\u2019s Code Editor | WalnutAI",
  description:
    "Connect external MCP servers \u2014 Figma, GitHub, databases, internal APIs, and more \u2014 directly into WalnutAI\u2019s code editor. Your AI agents work with every tool your team uses.",
  openGraph: {
    title: "External MCP Integration \u2014 Connect Any Tool to WalnutAI\u2019s Code Editor | WalnutAI",
    description:
      "Connect external MCP servers \u2014 Figma, GitHub, databases, internal APIs, and more \u2014 directly into WalnutAI\u2019s code editor. Your AI agents work with every tool your team uses.",
    url: "https://www.walnutai.ai/features/mcp-integration",
    siteName: "WalnutAI",
    type: "website",
    images: [
      {
        url: "https://walnutai.dev/og/mcp-integration.png",
        width: 1200,
        height: 630,
        alt: "WalnutAI MCP Integration \u2014 connect external tools directly into the AI code editor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@WalnutAI",
    title: "External MCP Integration \u2014 Connect Any Tool to WalnutAI\u2019s Code Editor | WalnutAI",
    description:
      "Connect external MCP servers \u2014 Figma, GitHub, databases, internal APIs, and more \u2014 directly into WalnutAI\u2019s code editor. Your AI agents work with every tool your team uses.",
    images: ["https://walnutai.dev/og/mcp-integration.png"],
  },
  alternates: {
    canonical: "https://www.walnutai.ai/features/mcp-integration",
  },
};

const sections = [
  {
    title: "Connect any external MCP server directly into WalnutAI",
    desc: "WalnutAI\u2019s code editor supports connecting external MCP servers \u2014 Figma, GitHub, Notion, Slack, databases, internal APIs, or any custom MCP server your team builds. Once connected, the tools those servers expose are available to WalnutAI\u2019s AI agents as callable actions during code generation, planning, and analysis.",
  },
  {
    title: "Agents use external tools as naturally as they use your codebase",
    desc: "When an agent needs to reference a Figma screen to implement a UI story, check a GitHub issue for context, or query a live database schema before writing a migration \u2014 it calls the connected MCP tool directly. No developer needs to copy the information across. The agent goes and gets it.",
  },
  {
    title: "Extend WalnutAI\u2019s capabilities with tools built for your team",
    desc: "Any team can build a custom MCP server that exposes internal systems \u2014 proprietary APIs, internal documentation, company-specific data sources \u2014 and connect it to WalnutAI. The AI agents then treat your internal tools as first-class capabilities, making them usable in every code generation and planning workflow.",
  },
  {
    title: "One consistent interface regardless of what tools you add",
    desc: "Adding or removing external MCP connections doesn\u2019t change how developers interact with the code editor. Tools appear as available capabilities and the AI agents decide when to use them based on task context \u2014 no configuration per agent, no custom prompts required.",
  },
];

const faqs = [
  {
    q: "What is MCP integration in a code editor?",
    a: "MCP (Model Context Protocol) integration allows AI agents inside a code editor to call external tools \u2014 Figma, GitHub, databases, internal APIs \u2014 as part of their workflow. WalnutAI supports connecting any MCP-compatible server so agents can access your full stack while coding.",
  },
  {
    q: "What external tools can I connect via MCP?",
    a: "Any tool with an MCP server \u2014 Figma, GitHub, Notion, Slack, PostgreSQL, MongoDB, internal REST APIs, and thousands more. If your team builds a custom MCP server for a proprietary system, that works too.",
  },
  {
    q: "Do I need to configure MCP tools per agent?",
    a: "No. Connected MCP tools are available to all AI agents automatically. The agents decide when to use them based on task context \u2014 no per-agent configuration or custom prompts required.",
  },
  {
    q: "Is my data secure when using external MCP connections?",
    a: "Yes. MCP connections run through authenticated server endpoints. Data is transmitted securely and WalnutAI does not store data from external tool calls. Your team controls which MCP servers are connected and what they expose.",
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
        { "@type": "ListItem", position: 3, name: "MCP Integration", item: "https://www.walnutai.ai/features/mcp-integration" },
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

export default function MCPIntegrationPage() {
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
              External MCP Integration &mdash;{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
                Every Tool Your Team Uses, Available Inside WalnutAI&apos;s Code Editor.
              </span>
            </h1>
            <p className="text-neutral-400 text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
              Connect external MCP servers &mdash; Figma, GitHub, databases,
              internal APIs, and more &mdash; directly into WalnutAI&apos;s code
              editor. Your AI agents work with every tool your team uses, with
              zero context switches.
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
              Trusted by teams who need their AI to work with their entire stack
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                { value: "1000s", label: "Of MCP-compatible tools and servers available to connect \u2014 Figma, GitHub, Notion, databases, and more" },
                { value: "0", label: "Context switches needed to pull in data from external tools while coding in WalnutAI" },
                { value: "Any", label: "Internal API, database, or proprietary tool your team builds an MCP server for can be plugged straight in" },
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
              Your AI agent shouldn&apos;t have to stop at the edge of your code editor
            </h2>
            <p className="text-neutral-400 text-[15px] leading-[1.8]">
              Most AI code editors are closed boxes &mdash; the agent can read and write files, but the moment it needs to reference a Figma design, query a database, check a GitHub issue, or call an internal service, it stops. WalnutAI&apos;s code editor supports the Model Context Protocol standard, meaning any external MCP server your team connects becomes a live tool the AI agent can use as it works &mdash; no copy-pasting from other tabs, no re-explaining what the design says or what the database schema looks like.
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
