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
import { ArrowLeft, ScanSearch, ShieldCheck, Users, Settings } from "lucide-react";

export const metadata: Metadata = {
  title:
    "Automated Requirements Gap Analysis Tool — Catch Missing Tests Before Production | WalnutAI",
  description:
    "WalnutAI's continuous gap analysis compares requirements, code, and test suite in real time — identifying untested features before production. First report in 5 minutes.",
  openGraph: {
    title:
      "Automated Requirements Gap Analysis Tool — Catch Missing Tests Before Production | WalnutAI",
    description:
      "WalnutAI's continuous gap analysis compares requirements, code, and test suite in real time — identifying untested features before production. First report in 5 minutes.",
    url: "https://www.walnutai.ai/features/requirements-gap-analysis",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Automated Requirements Gap Analysis Tool — Catch Missing Tests Before Production | WalnutAI",
    description:
      "WalnutAI's continuous gap analysis compares requirements, code, and test suite in real time — identifying untested features before production.",
  },
  alternates: {
    canonical: "https://www.walnutai.ai/features/requirements-gap-analysis",
  },
};

const howItWorks = [
  {
    step: "Connect your requirements source",
    text: "Link Jira, Azure DevOps, or upload a requirements document.",
  },
  {
    step: "Link your code repository",
    text: "Connect GitHub, GitLab, or Bitbucket with read-only access.",
  },
  {
    step: "Map requirements to test coverage",
    text: "WalnutAI cross-references test suite against requirements and code.",
  },
  {
    step: "Receive your gap report",
    text: "Coverage percentage, uncovered requirements by risk, missing edge cases, and AI-suggested test cases.",
  },
];

const capabilities = [
  "Overall requirements coverage percentage",
  "Requirements with no tests, ranked by risk",
  "Code paths with no coverage, grouped by feature",
  "Missing edge cases identified by AI",
  "Suggested test cases to fill gaps",
  "Sprint trend comparison",
  "Architectural gaps identified through AI analysis — including scalability bottlenecks, tightly coupled components, and inefficient system design patterns",
  "Security gaps and vulnerabilities detected — such as broken access control, missing validations, sensitive data exposure risks, and compliance issues",
  "Code documentation gaps identified — highlighting missing or unclear documentation, along with AI-generated structured documentation for improved maintainability",
  "Suggested improvements and fixes for each identified gap — across architecture, security, and documentation layers, ready for implementation",
];

const whoUses = [
  {
    icon: ShieldCheck,
    label: "QA leads needing coverage visibility",
  },
  {
    icon: Users,
    label: "Engineering managers wanting release readiness scoring",
  },
  {
    icon: Settings,
    label: "DevOps engineers integrating quality gates",
  },
];

const faqs = [
  {
    q: "How often does it run?",
    a: "Gap Analysis in WalnutAI acts as an end-to-end intelligence layer that continuously bridges the gap between requirements and code. It automatically runs on every code commit to your connected repository and is also triggered whenever requirements are added, updated, or removed in tools like Jira. In addition, users can initiate on-demand analysis directly from the dashboard. WalnutAI verifies that every requirement is implemented; every code change is reflected in requirements, and that the codebase meets quality standards across architecture, security, documentation, and testing. By identifying gaps at each stage of the SDLC, it ensures complete traceability, prevents leakages, and significantly reduces delivery risk and rework.",
  },
  {
    q: "What does a report show?",
    a: "Coverage %, prioritized uncovered requirements, untested code paths, edge cases, AI test suggestions. It also highlights architectural gaps such as scalability bottlenecks and tightly coupled components, security gaps including access control issues and validation weaknesses, and code documentation gaps where clarity and maintainability are lacking. The report provides AI-generated recommendations and fixes for each identified gap, and can be shared as PDFs or accessed via the dashboard.",
  },
  {
    q: "Can it run across multiple repos?",
    a: "Yes. Team and Enterprise plans support unlimited repositories.",
  },
];

const relatedFeatures = [
  { title: "AI Test Case Generation", id: "ai-test-case-generation" },
  { title: "Test Execution", id: "test-execution-management" },
  { title: "Delivery Analytics", id: "analytics-dashboard" },
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
      name: "Requirements Gap Analysis",
      item: "https://www.walnutai.ai/features/requirements-gap-analysis",
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to run automated requirements gap analysis with WalnutAI",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Connect your requirements source",
      text: "Link Jira, Azure DevOps, or upload a requirements document.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Link your code repository",
      text: "Connect GitHub, GitLab, or Bitbucket with read-only access.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Map requirements to test coverage",
      text: "WalnutAI cross-references test suite against requirements and code.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Receive your gap report",
      text: "Coverage percentage, uncovered requirements by risk, missing edge cases, and AI-suggested test cases.",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How often does it run?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Gap Analysis in WalnutAI acts as an end-to-end intelligence layer that continuously bridges the gap between requirements and code. It automatically runs on every code commit to your connected repository and is also triggered whenever requirements are added, updated, or removed in tools like Jira. In addition, users can initiate on-demand analysis directly from the dashboard. WalnutAI verifies that every requirement is implemented; every code change is reflected in requirements, and that the codebase meets quality standards across architecture, security, documentation, and testing. By identifying gaps at each stage of the SDLC, it ensures complete traceability, prevents leakages, and significantly reduces delivery risk and rework.",
      },
    },
    {
      "@type": "Question",
      name: "What does a report show?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Coverage %, prioritized uncovered requirements, untested code paths, edge cases, AI test suggestions. It also highlights architectural gaps such as scalability bottlenecks and tightly coupled components, security gaps including access control issues and validation weaknesses, and code documentation gaps where clarity and maintainability are lacking. The report provides AI-generated recommendations and fixes for each identified gap, and can be shared as PDFs or accessed via the dashboard.",
      },
    },
    {
      "@type": "Question",
      name: "Can it run across multiple repos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Team and Enterprise plans support unlimited repositories.",
      },
    },
  ],
};

export default function RequirementsGapAnalysisPage() {
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
            <ScanSearch className="h-5 w-5 text-orange-500" />
            <span className="text-xs font-bold uppercase tracking-widest text-orange-500">
              Continuous Coverage Analysis
            </span>
          </div>

          {/* h1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Automated Requirements Coverage Gap Analysis
            <br />
            <span className="text-orange-500">
              Identify What&apos;s Missing Before It Reaches Production
            </span>
          </h1>

          {/* h2 subtitle */}
          <h2 className="mt-8 max-w-3xl border-l-4 border-orange-500 pl-6 text-lg md:text-xl text-neutral-300 leading-relaxed">
            WalnutAI continuously scans your requirements, codebase, and test
            suite — detecting uncovered features, untested code paths, and
            missing acceptance criteria in real time.
          </h2>
        </section>

        {/* GeoDefinition */}
        <section className="mx-auto max-w-6xl px-6 pt-16">
          <GeoDefinition>
            Requirements gap analysis is the automated process of comparing
            software specification documents against an implemented codebase and
            test suite to identify requirements missing from code, code lacking
            test coverage, and test cases not mapped to any requirement. WalnutAI
            runs this continuously — detecting new gaps within minutes of each
            code commit.
          </GeoDefinition>
        </section>

        {/* Outcomes — StatCard grid */}
        <section className="mx-auto max-w-6xl px-6 py-16">
          <h3 className="text-2xl font-bold mb-8">Outcomes</h3>
          <div className="grid gap-6 sm:grid-cols-3">
            <StatCard
              stat="80%"
              description="Reduction in production defects"
            />
            <StatCard
              stat="5 min"
              description="Time to first gap report"
            />
            <StatCard
              stat="40+"
              description="Gaps discovered per project on average"
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
          <h3 className="text-2xl font-bold mb-4">
            What the Gap Report Includes
          </h3>
          <FeatureList items={capabilities} />
        </section>

        {/* Who Uses This */}
        <section className="mx-auto max-w-6xl px-6 pb-16">
          <h3 className="text-2xl font-bold mb-8">Who Uses This</h3>
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
            title="Traditional Gap Analysis vs WalnutAI"
            traditional="Manual gap analysis at sprint-end, 4-8 hours of QA time."
            walnut="Runs automatically on every commit — surfacing gaps within minutes."
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
              Stop shipping blind spots
            </h2>
            <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
              Get your first gap report in 5 minutes. See exactly what your test
              suite is missing.
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
