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
import { ArrowLeft, Cog, Briefcase, Users, Rocket } from "lucide-react";

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
    text: "Prompt WalnutAI in natural language, upload a PRD or requirements document, or connect your Jira project to provide the specification input.",
  },
  {
    step: "AI agents structure requirements",
    text: "Specialized requirement agents parse your input and generate structured epics, features, user stories, acceptance criteria, and dependency maps — automatically.",
  },
  {
    step: "Development agents generate code",
    text: "Code generation agents produce production-ready application code aligned to the structured requirements, with no manual developer intervention required.",
  },
  {
    step: "QA agents test and validate",
    text: "Testing agents automatically generate comprehensive test cases and execute them against the generated code — producing a full test report before any human reviews the output.",
  },
];

const capabilities = [
  "AI Requirement Analysis — Convert prompts, Figma designs, meeting recordings, videos, PRDs, or documents into structured, testable requirements automatically",
  "Multi-Agent Orchestration — AI agents exchange context and manage dependencies in real time to maintain end-to-end alignment",
  "Autonomous Code Generation — Generate production-ready application code from structured requirements without manual coding",
  "Integrated Test Creation — QA agents automatically produce test cases for every generated feature",
  "Parallel Execution — Multiple AI agents operate concurrently, compressing delivery timelines",
  "Continuous Alignment Validation — The system checks that generated code matches the original requirements throughout the build process",
];

const whoUses = [
  {
    icon: Briefcase,
    label: "CTOs and VPs of Engineering evaluating autonomous development for internal tooling or MVP builds",
  },
  {
    icon: Users,
    label: "Engineering managers looking to reduce sprint coordination overhead between product, development, and QA",
  },
  {
    icon: Rocket,
    label: "Startup teams that need to ship functional applications faster without expanding headcount",
  },
];

const faqs = [
  {
    q: "Does AI-orchestrated SDLC replace software developers?",
    a: "No. WalnutAI\u2019s SDLC automation handles well-defined, scoped development tasks autonomously \u2014 internal tools, CRUD applications, API integrations, and feature modules. Complex system architecture, product strategy, and creative problem-solving remain human responsibilities. The goal is to eliminate repetitive delivery work, not replace engineering judgment.",
  },
  {
    q: "What types of applications can WalnutAI build autonomously?",
    a: "WalnutAI is best suited for web applications, REST APIs, internal tools, microservices, and feature modules with clear requirements. Applications requiring complex UI/UX design decisions or proprietary business logic benefit from a human-in-the-loop approach alongside WalnutAI\u2019s automation.",
  },
  {
    q: "How does WalnutAI maintain context across all SDLC stages?",
    a: "WalnutAI uses a shared context model \u2014 each AI agent (requirements, development, QA) reads from and writes to a common requirement graph. This ensures that code generation is always grounded in the original specification and test cases are always mapped to the feature they validate.",
  },
];

const relatedFeatures = [
  { title: "AI Test Case Generation from Requirements", id: "ai-test-case-generation" },
  { title: "Automated Gap Analysis", id: "requirements-gap-analysis" },
  { title: "Requirements Engineering from Documents", id: "requirements-engineering" },
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
  name: "How WalnutAI SDLC Automation Works",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Input your requirements",
      text: "Prompt WalnutAI in natural language, upload a PRD or requirements document, or connect your Jira project to provide the specification input.",
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
      text: "Code generation agents produce production-ready application code aligned to the structured requirements, with no manual developer intervention required.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "QA agents test and validate",
      text: "Testing agents automatically generate comprehensive test cases and execute them against the generated code — producing a full test report before any human reviews the output.",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does AI-orchestrated SDLC replace software developers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. WalnutAI\u2019s SDLC automation handles well-defined, scoped development tasks autonomously \u2014 internal tools, CRUD applications, API integrations, and feature modules. Complex system architecture, product strategy, and creative problem-solving remain human responsibilities. The goal is to eliminate repetitive delivery work, not replace engineering judgment.",
      },
    },
    {
      "@type": "Question",
      name: "What types of applications can WalnutAI build autonomously?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WalnutAI is best suited for web applications, REST APIs, internal tools, microservices, and feature modules with clear requirements. Applications requiring complex UI/UX design decisions or proprietary business logic benefit from a human-in-the-loop approach alongside WalnutAI\u2019s automation.",
      },
    },
    {
      "@type": "Question",
      name: "How does WalnutAI maintain context across all SDLC stages?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WalnutAI uses a shared context model \u2014 each AI agent (requirements, development, QA) reads from and writes to a common requirement graph. This ensures that code generation is always grounded in the original specification and test cases are always mapped to the feature they validate.",
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
            <Cog className="h-5 w-5 text-orange-500" />
            <span className="text-xs font-bold uppercase tracking-widest text-orange-500">
              Full Lifecycle Automation
            </span>
          </div>

          {/* h1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            AI Software Development Automation
            <br />
            <span className="text-orange-500">
              From Requirements to Production Code
            </span>
          </h1>

          {/* h2 subtitle */}
          <h2 className="mt-8 max-w-3xl border-l-4 border-orange-500 pl-6 text-lg md:text-xl text-neutral-300 leading-relaxed">
            WalnutAI&apos;s AI agents orchestrate every stage of the SDLC —
            requirements analysis, code generation, and test creation —
            autonomously, so your team wakes up to built, tested applications.
          </h2>
        </section>

        {/* Feature Demo */}
        <section className="mx-auto max-w-5xl px-6 pb-12">
          <div style={{ background: "#0d0d0d", border: "1px solid #1a1a1a", borderRadius: 16, padding: 24, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img
              src="/assets/gif/Idea_to_Production.gif"
              alt="AI SDLC Automation demo"
              style={{ maxWidth: "100%", maxHeight: 400, borderRadius: 8 }}
              loading="eager"
            />
          </div>
        </section>

        {/* GeoDefinition */}
        <section className="mx-auto max-w-6xl px-6 pt-16">
          <GeoDefinition>
            AI-orchestrated SDLC automation is the use of specialized AI agents
            to manage and execute every stage of the software development
            lifecycle — from requirement analysis through code generation and
            automated testing — without manual handoffs between teams. WalnutAI
            implements multi-agent orchestration where independent AI systems
            collaborate in real time to maintain context and dependency alignment
            across the full delivery pipeline.
          </GeoDefinition>
        </section>

        {/* Outcomes — StatCard grid */}
        <section className="mx-auto max-w-6xl px-6 py-16">
          <h3 className="text-2xl font-bold mb-8">Key Outcomes (stat-backed)</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard
              stat="80%"
              description="Reduce time-to-first-build by up to 80% — go from a requirements document to a working, tested application without manual development coordination"
            />
            <StatCard
              stat="1"
              description="Eliminate tool fragmentation: requirements, code generation, and test creation happen within a single orchestrated system"
            />
            <StatCard
              stat="0"
              description="Zero manual QA coordination — AI agents generate and execute test cases before human review is required"
            />
            <StatCard
              stat="Early"
              description="Automated bug detection and resolution — identify, analyze, and fix defects early using AI-driven debugging and gap analysis, reducing production issues and rework"
            />
          </div>
        </section>

        {/* How It Works — StepCard grid */}
        <section className="mx-auto max-w-6xl px-6 pb-16">
          <h3 className="text-2xl font-bold mb-8">How WalnutAI SDLC Automation Works</h3>
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
          <h3 className="text-2xl font-bold mb-4">Key Capabilities</h3>
          <FeatureList items={capabilities} />
        </section>

        {/* Who Uses This */}
        <section className="mx-auto max-w-6xl px-6 pb-16">
          <h3 className="text-2xl font-bold mb-8">Who Uses This Feature</h3>
          <div className="grid gap-6 sm:grid-cols-3">
            {whoUses.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-2xl border border-neutral-800 bg-[#111111]/80 p-6 hover:border-orange-500/30 transition-colors"
              >
                <div className="mt-0.5 rounded-lg bg-orange-500/10 p-2 flex-shrink-0">
                  <item.icon className="h-5 w-5 text-orange-500" />
                </div>
                <span className="text-neutral-300 leading-relaxed">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ComparisonBlock */}
        <section className="mx-auto max-w-6xl px-6">
          <ComparisonBlock
            title="Comparison — WalnutAI vs Traditional Development"
            traditional="Requirements are written by business analysts, handed to developers, and then passed to QA, each handoff introducing delays, context loss, and misalignment, with requirements, development, and testing happening in silos."
            walnut="Development starts with intent: you provide prompt or input documents, and AI agents simultaneously structure requirements (epics, features, user stories), generate application code, and create test cases in parallel. By maintaining shared context across the lifecycle and eliminating manual handoffs, WalnutAI ensures everything stays aligned from the start, resulting in fully built, tested applications with synchronized requirements — reducing delivery time by up to 80% and minimizing rework."
          />
        </section>

        {/* FAQAccordion */}
        <section className="mx-auto max-w-6xl px-6">
          <FAQAccordion faqs={faqs} />
        </section>

        {/* Related Features */}
        <section className="mx-auto max-w-6xl px-6 pb-16">
          <h3 className="text-2xl font-bold mb-8">Related Features</h3>
          <div className="grid gap-4 sm:grid-cols-3">
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
