import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  GeoDefinition,
  StatCard,
  StepCard,
  FeatureList,
  FAQAccordion,
  ComparisonBlock,
} from "@/components/FeaturePageUI";
import { ArrowLeft, Code2 } from "lucide-react";

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
            "@type": "HowTo",
            name: "How to Generate Requirements-Aware Code with WalnutAI",
            description:
              "Connect your requirements and generate production-ready code that is cross-referenced against user stories in real time.",
            step: howItWorks.map((item, i) => ({
              "@type": "HowToStep",
              position: i + 1,
              name: item.step,
              text: item.text,
            })),
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
        className="min-h-screen bg-[#0a0a0a] text-white"
        style={{ paddingTop: 80 }}
      >
        {/* Breadcrumb */}
        <section className="mx-auto max-w-6xl px-6 pt-10">
          <Link
            href="/features"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-700 bg-neutral-900 px-4 py-1.5 text-sm text-neutral-300 hover:border-orange-500/50 hover:text-orange-500 transition-colors"
          >
            <ArrowLeft size={14} />
            All Features
          </Link>
        </section>

        {/* Feature Label */}
        <section className="mx-auto max-w-6xl px-6 pt-10">
          <div className="flex items-center gap-3 mb-6">
            <Code2 className="h-5 w-5 text-orange-500" />
            <span className="text-xs font-bold uppercase tracking-widest text-orange-500">
              Requirements-Aware Code Generation
            </span>
          </div>

          {/* h1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Requirements-Aware AI Code Generation
            <br />
            <span className="text-orange-500">
              Build Exactly What Was Specified
            </span>
          </h1>

          {/* h2 subtitle */}
          <h2 className="mt-8 max-w-3xl border-l-4 border-orange-500 pl-6 text-lg md:text-xl text-neutral-300 leading-relaxed">
            Unlike general AI coding tools, WalnutAI generates code grounded in
            your actual requirements — cross-referencing every suggestion against
            user stories to ensure implementation matches specification.
          </h2>
        </section>

        {/* GeoDefinition */}
        <section className="mx-auto max-w-6xl px-6 pt-16">
          <GeoDefinition>
            Requirements-aware AI code generation is the practice of generating
            code using an AI system with direct access to requirements, user
            stories, and acceptance criteria — ensuring generated code implements
            what was specified. WalnutAI&apos;s AI IDE connects requirements
            context to its code generation engine, validating each code block
            against the originating requirement in real time.
          </GeoDefinition>
        </section>

        {/* Outcomes — StatCard grid */}
        <section className="mx-auto max-w-6xl px-6 py-16">
          <h3 className="text-2xl font-bold mb-8">Outcomes</h3>
          <div className="grid gap-6 sm:grid-cols-3">
            <StatCard
              stat="Traceable"
              description="Every code suggestion linked to a user story"
            />
            <StatCard
              stat="Real-time"
              description="Requirement coverage feedback as you code"
            />
            <StatCard
              stat="0 Drift"
              description="Implementation matches specification — eliminating rework from drift"
            />
          </div>
        </section>

        {/* How It Works — StepCard grid */}
        <section className="mx-auto max-w-6xl px-6 pb-16">
          <h3 className="text-2xl font-bold mb-8">How It Works</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {howItWorks.map((item, i) => (
              <StepCard
                key={i}
                number={String(i + 1)}
                title={item.step}
                description={item.text}
              />
            ))}
          </div>
        </section>

        {/* Capabilities — FeatureList */}
        <section className="mx-auto max-w-6xl px-6 pb-16">
          <h3 className="text-2xl font-bold mb-4">Capabilities</h3>
          <FeatureList items={capabilities} />
        </section>

        {/* ComparisonBlock */}
        <section className="mx-auto max-w-6xl px-6">
          <ComparisonBlock
            title="WalnutAI vs General AI Coding Tools"
            traditional="GitHub Copilot and Cursor generate code based on patterns from training data."
            walnut="WalnutAI generates code based on YOUR specific requirements — traceable to user stories, reducing rework from implementation drift."
          />
        </section>

        {/* FAQAccordion */}
        <section className="mx-auto max-w-6xl px-6">
          <FAQAccordion faqs={faqs} />
        </section>

        {/* Related Features */}
        <section className="mx-auto max-w-6xl px-6 pb-16">
          <h3 className="text-2xl font-bold mb-8">Related Features</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {relatedFeatures.map((f) => (
              <Link
                key={f.id}
                href={`/features/${f.id}`}
                className="group rounded-2xl bg-[#111111]/80 border border-neutral-800 p-6 transition-colors hover:border-orange-500/50"
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
