import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "Requirements-Aware AI Code Generation — Build Code That Matches Specs | WalnutAI",
  description:
    "WalnutAI generates production-ready code grounded in your requirements — not generic patterns. Every suggestion cross-referenced against user stories.",
  openGraph: {
    title:
      "Requirements-Aware AI Code Generation — Build Code That Matches Specs | WalnutAI",
    description:
      "WalnutAI generates production-ready code grounded in your requirements — not generic patterns. Every suggestion cross-referenced against user stories.",
    url: "https://www.walnutai.ai/features/ai-code-generation",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Requirements-Aware AI Code Generation — Build Code That Matches Specs | WalnutAI",
    description:
      "WalnutAI generates production-ready code grounded in your requirements — not generic patterns.",
  },
  alternates: {
    canonical: "https://www.walnutai.ai/features/ai-code-generation",
  },
};

const howItWorks = [
  {
    step: "Connect your requirements",
    text: "Link Jira, upload a PRD, or use WalnutAI's requirements engine to define user stories.",
  },
  {
    step: "Open the AI IDE",
    text: "Start coding with chat, autocomplete, or autonomous agent mode — all grounded in your requirements.",
  },
  {
    step: "Generate requirement-aware code",
    text: "Every suggestion is cross-referenced against your user stories and acceptance criteria in real time.",
  },
  {
    step: "Validate coverage as you build",
    text: "Real-time feedback shows which requirements are implemented, partially covered, or missing.",
  },
];

const capabilities = [
  "Requirement-grounded suggestions linked to user stories",
  "Real-time requirement coverage feedback as you code",
  "AI debugging grounded in requirements",
  "Two modes: chat-based generation, and fully autonomous agent mode",
  "Context continuity across sessions",
];

const faqs = [
  {
    q: "How is WalnutAI different from Copilot or Cursor?",
    a: "Requirements-driven code generation. Every suggestion traceable to a requirement.",
  },
  {
    q: "What tech stacks are supported?",
    a: "Python, JavaScript, TypeScript, Java, Go, Node.js. React, Next.js, Express, FastAPI, Spring Boot.",
  },
];

const relatedFeatures = [
  { title: "SDLC Automation", id: "ai-sdlc-automation" },
  { title: "AI Test Case Generation", id: "ai-test-case-generation" },
];

export default function AiCodeGenerationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.walnutai.ai",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Features",
                item: "https://www.walnutai.ai/features",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "AI Code Generation",
                item: "https://www.walnutai.ai/features/ai-code-generation",
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          }),
        }}
      />
      <Navbar />
      <main
        className="min-h-screen bg-neutral-950 text-white"
        style={{ paddingTop: 80 }}
      >
        {/* Breadcrumb */}
        <div className="w-full border-b border-neutral-800 bg-neutral-950">
          <div className="mx-auto max-w-6xl px-6 py-3">
            <p className="font-mono text-sm text-neutral-400">
              <Link href="/" className="hover:text-orange-500 transition-colors">
                walnutai.ai
              </Link>
              {" / "}
              <Link
                href="/features"
                className="hover:text-orange-500 transition-colors"
              >
                features
              </Link>
              {" / "}
              <span className="text-white">ai-code-generation</span>
              {"/"}
            </p>
          </div>
        </div>

        {/* Hero */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl">💻</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Requirements-Aware AI Code Generation
            <br />
            <span className="text-orange-500">
              Build Exactly What Was Specified
            </span>
          </h1>
          <h2 className="mt-8 max-w-3xl border-l-4 border-orange-500 pl-6 text-lg md:text-xl text-neutral-300 leading-relaxed">
            Unlike general AI coding tools, WalnutAI generates code grounded in
            your actual requirements — cross-referencing every suggestion against
            user stories to ensure implementation matches specification.
          </h2>
        </section>

        {/* GEO Definition */}
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <div className="rounded-2xl bg-neutral-900 border border-neutral-800 p-8">
            <h3 className="text-sm font-mono uppercase tracking-widest text-orange-500 mb-4">
              Definition
            </h3>
            <p className="text-neutral-300 leading-relaxed text-lg">
              Requirements-aware AI code generation is the practice of
              generating code using an AI system with direct access to
              requirements, user stories, and acceptance criteria — ensuring
              generated code implements what was specified. WalnutAI&apos;s AI
              IDE connects requirements context to its code generation engine,
              validating each code block against the originating requirement in
              real time.
            </p>
          </div>
        </section>

        {/* How It Works */}
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <h2 className="text-3xl font-bold mb-12">How It Works</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {howItWorks.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl bg-neutral-900 border border-neutral-800 p-6"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-white font-bold text-lg">
                  {i + 1}
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.step}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Capabilities */}
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <h2 className="text-3xl font-bold mb-8">Capabilities</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {capabilities.map((cap, i) => (
              <div key={i} className="flex items-start gap-3">
                <svg
                  className="mt-1 h-5 w-5 shrink-0 text-orange-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-neutral-300">{cap}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison */}
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <h2 className="text-3xl font-bold mb-8">
            WalnutAI vs General AI Coding Tools
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-neutral-900 border border-neutral-800 p-8">
              <h3 className="text-sm font-mono uppercase tracking-widest text-neutral-500 mb-4">
                General AI Coding Tools
              </h3>
              <p className="text-neutral-400 leading-relaxed">
                GitHub Copilot and Cursor generate code based on patterns from
                training data.
              </p>
            </div>
            <div className="rounded-2xl bg-neutral-900 border border-orange-500/30 p-8">
              <h3 className="text-sm font-mono uppercase tracking-widest text-orange-500 mb-4">
                WalnutAI
              </h3>
              <p className="text-neutral-300 leading-relaxed">
                WalnutAI generates code based on YOUR specific requirements —
                traceable to user stories, reducing rework from implementation
                drift.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <h2 className="text-3xl font-bold mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl bg-neutral-900 border border-neutral-800 p-6"
              >
                <h3 className="font-semibold text-lg mb-2">{faq.q}</h3>
                <p className="text-neutral-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Features */}
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <h2 className="text-3xl font-bold mb-8">Related Features</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {relatedFeatures.map((f) => (
              <Link
                key={f.id}
                href={`/features/${f.id}`}
                className="group rounded-2xl bg-neutral-900 border border-neutral-800 p-6 transition-colors hover:border-orange-500/50"
              >
                <span className="text-lg font-semibold group-hover:text-orange-500 transition-colors">
                  {f.title}
                </span>
                <span className="mt-2 block text-sm text-neutral-500">
                  Learn more &rarr;
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-6xl px-6 pb-24">
          <div className="rounded-2xl bg-gradient-to-br from-orange-500/10 to-neutral-900 border border-orange-500/20 p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Write code that matches what was specified
            </h2>
            <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
              See how requirements-aware code generation eliminates
              implementation drift and reduces rework.
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-full bg-orange-500 px-8 py-3 font-semibold text-white transition-colors hover:bg-orange-600"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
