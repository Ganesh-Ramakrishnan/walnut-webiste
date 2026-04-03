import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "AI-Orchestrated SDLC Automation — From Requirements to Production | WalnutAI",
  description:
    "WalnutAI automates the entire software development lifecycle — AI agents convert requirements into code and test cases with zero manual coordination. Ship production-ready applications from a single prompt.",
  openGraph: {
    title:
      "AI-Orchestrated SDLC Automation — From Requirements to Production | WalnutAI",
    description:
      "WalnutAI automates the entire software development lifecycle — AI agents convert requirements into code and test cases with zero manual coordination. Ship production-ready applications from a single prompt.",
    url: "https://www.walnutai.ai/features/ai-sdlc-automation",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI-Orchestrated SDLC Automation — From Requirements to Production | WalnutAI",
    description:
      "WalnutAI automates the entire software development lifecycle — AI agents convert requirements into code and test cases with zero manual coordination.",
  },
  alternates: {
    canonical: "https://www.walnutai.ai/features/ai-sdlc-automation",
  },
};

const howItWorks = [
  {
    step: "Input your requirements",
    text: "Prompt WalnutAI in natural language, upload a PRD, or connect Jira.",
  },
  {
    step: "AI agents structure requirements",
    text: "Specialized requirement agents parse your input and generate structured epics, features, user stories, acceptance criteria, and dependency maps — automatically.",
  },
  {
    step: "Development agents generate code",
    text: "Code generation agents produce production-ready code aligned to requirements.",
  },
  {
    step: "QA agents test and validate",
    text: "Testing agents generate comprehensive test cases and execute them automatically.",
  },
];

const capabilities = [
  "AI Requirement Analysis — Convert prompts, Figma designs, meeting recordings, videos, PRDs, or documents into structured, testable requirements automatically",
  "Multi-Agent Orchestration — AI agents exchange context in real time",
  "Autonomous Code Generation — Generate production-ready code from requirements",
  "Integrated Test Creation — QA agents auto-produce test cases",
  "Parallel Execution — Multiple AI agents run concurrently",
  "Continuous Alignment Validation — Generated code checked against requirements throughout",
];

const whoUses = [
  "CTOs evaluating autonomous development for MVPs",
  "Engineering managers reducing sprint coordination overhead",
  "Startup teams shipping faster without expanding headcount",
];

const faqs = [
  {
    q: "Does this replace developers?",
    a: "No. Handles well-defined tasks autonomously. Complex architecture and product strategy remain human.",
  },
  {
    q: "What types of apps can WalnutAI build?",
    a: "Web apps, REST APIs, internal tools, microservices with clear requirements.",
  },
  {
    q: "How does it maintain context across stages?",
    a: "Shared context model — each agent reads from a common requirement graph.",
  },
];

const relatedFeatures = [
  { title: "AI Test Case Generation", id: "ai-test-case-generation" },
  { title: "Gap Analysis", id: "requirements-gap-analysis" },
  { title: "Requirements Engineering", id: "requirements-engineering" },
];

const breadcrumbSchema = {
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
      name: "AI SDLC Automation",
      item: "https://www.walnutai.ai/features/ai-sdlc-automation",
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to automate your SDLC with WalnutAI",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Input your requirements",
      text: "Prompt WalnutAI in natural language, upload a PRD, or connect Jira.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "AI agents structure requirements",
      text: "Specialized requirement agents parse your input and generate structured epics, features, user stories, acceptance criteria, and dependency maps — automatically.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Development agents generate code",
      text: "Code generation agents produce production-ready code aligned to requirements.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "QA agents test and validate",
      text: "Testing agents generate comprehensive test cases and execute them automatically.",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does this replace developers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Handles well-defined tasks autonomously. Complex architecture and product strategy remain human.",
      },
    },
    {
      "@type": "Question",
      name: "What types of apps can WalnutAI build?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Web apps, REST APIs, internal tools, microservices with clear requirements.",
      },
    },
    {
      "@type": "Question",
      name: "How does it maintain context across stages?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Shared context model — each agent reads from a common requirement graph.",
      },
    },
  ],
};

export default function AiSdlcAutomationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howToSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
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
              <span className="text-white">ai-sdlc-automation</span>
              {"/"}
            </p>
          </div>
        </div>

        {/* Hero */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl">⚙️</span>
            <span className="rounded-full bg-orange-500/10 border border-orange-500/30 px-4 py-1 text-sm font-medium text-orange-500">
              Full Lifecycle Automation
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            AI Software Development Automation
            <br />
            <span className="text-orange-500">
              From Requirements to Production Code
            </span>
          </h1>
          <h2 className="mt-8 max-w-3xl border-l-4 border-orange-500 pl-6 text-lg md:text-xl text-neutral-300 leading-relaxed">
            WalnutAI&apos;s AI agents orchestrate every stage of the SDLC —
            requirements analysis, code generation, and test creation —
            autonomously, so your team wakes up to built, tested applications.
          </h2>
        </section>

        {/* GEO Definition + Outcomes */}
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2 rounded-2xl bg-neutral-900 border border-neutral-800 p-8">
              <h3 className="text-sm font-mono uppercase tracking-widest text-orange-500 mb-4">
                Definition
              </h3>
              <p className="text-neutral-300 leading-relaxed text-lg">
                AI-orchestrated SDLC automation is the use of specialized AI
                agents to manage and execute every stage of the software
                development lifecycle — from requirement analysis through code
                generation and automated testing — without manual handoffs
                between teams. WalnutAI implements multi-agent orchestration
                where independent AI systems collaborate in real time to maintain
                context and dependency alignment across the full delivery
                pipeline.
              </p>
            </div>
            <div className="rounded-2xl bg-neutral-900 border border-neutral-800 p-8">
              <h3 className="text-sm font-mono uppercase tracking-widest text-orange-500 mb-4">
                Outcomes
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-neutral-300">
                  <span className="mt-1 block h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                  Reduce time-to-first-build by up to 80%
                </li>
                <li className="flex items-start gap-3 text-neutral-300">
                  <span className="mt-1 block h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                  Eliminate tool fragmentation: requirements, code generation,
                  and test creation in one system
                </li>
                <li className="flex items-start gap-3 text-neutral-300">
                  <span className="mt-1 block h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                  Zero manual QA coordination — AI agents generate and execute
                  test cases before human review
                </li>
                <li className="flex items-start gap-3 text-neutral-300">
                  <span className="mt-1 block h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                  Automated bug detection and resolution — identify, analyze, and fix defects early using AI-driven debugging and gap analysis, reducing production issues and rework
                </li>
              </ul>
            </div>
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

        {/* Who Uses This */}
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <h2 className="text-3xl font-bold mb-8">Who Uses This</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {whoUses.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl bg-neutral-900 border border-neutral-800 p-6 text-neutral-300"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* Comparison */}
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <h2 className="text-3xl font-bold mb-8">
            Traditional SDLC vs WalnutAI
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-neutral-900 border border-neutral-800 p-8">
              <h3 className="text-sm font-mono uppercase tracking-widest text-neutral-500 mb-4">
                Traditional
              </h3>
              <p className="text-neutral-400 leading-relaxed">
                Requirements are written by business analysts, handed to developers, and then passed to QA, each handoff introducing delays, context loss, and misalignment, with requirements, development, and testing happening in silos.
              </p>
            </div>
            <div className="rounded-2xl bg-neutral-900 border border-orange-500/30 p-8">
              <h3 className="text-sm font-mono uppercase tracking-widest text-orange-500 mb-4">
                WalnutAI
              </h3>
              <p className="text-neutral-300 leading-relaxed">
                Development starts with intent: you provide prompt or input documents, and AI agents simultaneously structure requirements (epics, features, user stories), generate application code, and create test cases in parallel. By maintaining shared context across the lifecycle and eliminating manual handoffs, WalnutAI ensures everything stays aligned from the start, resulting in fully built, tested applications with synchronized requirements—reducing delivery time by up to 80% and minimizing rework.
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
          <div className="grid gap-4 sm:grid-cols-3">
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
              Ready to automate your SDLC?
            </h2>
            <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
              See how WalnutAI can take your team from requirements to
              production-ready code — autonomously.
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
