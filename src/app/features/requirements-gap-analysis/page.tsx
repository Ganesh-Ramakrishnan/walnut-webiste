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
    "AI Requirements Gap Analysis — Requirements vs Code Analysis & Shift-Left Testing Tool | WalnutAI",
  description:
    "WalnutAI\u2019s AI requirements gap analysis compares requirements vs code in real time \u2014 a shift-left testing tool that identifies code coverage requirements gaps and untested features before production. First report in 5 minutes.",
  openGraph: {
    title:
      "AI Requirements Gap Analysis — Requirements vs Code Analysis & Shift-Left Testing Tool | WalnutAI",
    description:
      "WalnutAI\u2019s AI requirements gap analysis compares requirements vs code in real time \u2014 a shift-left testing tool that identifies code coverage requirements gaps before production.",
    url: "https://www.walnutai.ai/features/requirements-gap-analysis",
    siteName: "WalnutAI",
    type: "website",
    images: [{ url: "https://walnutai.dev/og/requirements-gap-analysis.png", width: 1200, height: 630, alt: "WalnutAI AI Requirements Gap Analysis — Requirements vs Code Analysis" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@WalnutAI",
    title:
      "AI Requirements Gap Analysis — Requirements vs Code Analysis & Shift-Left Testing Tool | WalnutAI",
    description:
      "WalnutAI\u2019s AI requirements gap analysis compares requirements vs code in real time \u2014 a shift-left testing tool that identifies code coverage requirements gaps before production.",
    images: ["https://walnutai.dev/og/requirements-gap-analysis.png"],
  },
  alternates: {
    canonical: "https://www.walnutai.ai/features/requirements-gap-analysis",
  },
};

const howItWorks = [
  {
    step: "Connect your requirements source",
    text: "Link your Jira project, Azure DevOps backlog, or upload a requirements document. WalnutAI structures and indexes every requirement.",
  },
  {
    step: "Link your code repository",
    text: "Connect your GitHub, GitLab, or Bitbucket repository with read-only access. WalnutAI maps each requirement to its corresponding code implementation.",
  },
  {
    step: "Map requirements to test coverage",
    text: "WalnutAI cross-references your existing test suite against requirements and code — identifying which requirements have no associated tests and which code paths are untested.",
  },
  {
    step: "Receive your gap report",
    text: "A gap analysis report is delivered showing coverage percentage, uncovered requirements ranked by risk severity, missing edge cases, and AI-generated test case suggestions to fill each identified gap.",
  },
];

const capabilities = [
  "Overall requirements coverage percentage across connected repositories",
  "List of requirements with no associated test cases, ranked by business risk",
  "Code paths with no test coverage, grouped by feature area",
  "Missing edge cases and negative scenarios identified by AI analysis",
  "Suggested test cases to fill each identified gap — ready to import into your test suite",
  "Architectural gaps identified through AI analysis — including scalability bottlenecks, tightly coupled components, and inefficient system design patterns",
  "Security gaps and vulnerabilities detected — such as broken access control, missing validations, sensitive data exposure risks, and compliance issues",
  "Code documentation gaps identified — highlighting missing or unclear documentation, along with AI-generated structured documentation for improved maintainability",
  "Suggested improvements and fixes for each identified gap — across architecture, security, and documentation layers, ready for implementation",
  "Trend comparison against previous sprint — showing whether coverage is improving or declining",
];

const whoUses = [
  {
    icon: ShieldCheck,
    label: "QA leads who need visibility into coverage before sign-off on a release",
  },
  {
    icon: Users,
    label: "Engineering managers who want automated release readiness scoring per sprint",
  },
  {
    icon: Settings,
    label: "DevOps engineers integrating quality gates into CI/CD pipelines",
  },
];

const faqs = [
  {
    q: "How often does WalnutAI run gap analysis?",
    a: "Gap Analysis in WalnutAI acts as an end-to-end intelligence layer that continuously bridges the gap between requirements and code. It automatically runs on every code commit to your connected repository and is also triggered whenever requirements are added, updated, or removed in tools like Jira. In addition, users can initiate on-demand analysis directly from the dashboard. WalnutAI verifies that every requirement is implemented; every code change is reflected in requirements, and that the codebase meets quality standards across architecture, security, documentation, and testing. By identifying gaps at each stage of the SDLC, it ensures complete traceability, prevents leakages, and significantly reduces delivery risk and rework.",
  },
  {
    q: "What does a gap analysis report show?",
    a: "A WalnutAI gap analysis report shows overall requirement coverage percentage, a prioritized list of uncovered requirements, untested code paths by feature. It also highlights architectural gaps such as scalability bottlenecks and tightly coupled components, security gaps including access control issues and validation weaknesses, and code documentation gaps where clarity and maintainability are lacking. The report provides AI-generated recommendations and fixes for each identified gap, and can be shared as PDFs or accessed via the dashboard.",
  },
  {
    q: "Can gap analysis run across multiple repositories?",
    a: "Yes. The Team and Enterprise plans support continuous gap analysis across unlimited repositories — mapping requirements to code and tests spread across multiple microservices, front-end and back-end repos, or monorepo structures.",
  },
];

const relatedFeatures = [
  { title: "AI Test Case Generation", id: "ai-test-case-generation" },
  { title: "Test Execution & Management", id: "test-execution-management" },
  { title: "Release Analytics Dashboard", id: "analytics-dashboard" },
];

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
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
          name: "Gap Analysis",
          item: "https://www.walnutai.ai/features/requirements-gap-analysis",
        },
      ],
    },
    {
      "@type": "HowTo",
      name: "How WalnutAI Gap Analysis Works",
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Connect your requirements source",
          text: "Link your Jira project, Azure DevOps backlog, or upload a requirements document. WalnutAI structures and indexes every requirement.",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Link your code repository",
          text: "Connect your GitHub, GitLab, or Bitbucket repository with read-only access. WalnutAI maps each requirement to its corresponding code implementation.",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Map requirements to test coverage",
          text: "WalnutAI cross-references your existing test suite against requirements and code — identifying which requirements have no associated tests and which code paths are untested.",
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "Receive your gap report",
          text: "A gap analysis report is delivered showing coverage percentage, uncovered requirements ranked by risk severity, missing edge cases, and AI-generated test case suggestions to fill each identified gap.",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How often does WalnutAI run gap analysis?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Gap Analysis in WalnutAI acts as an end-to-end intelligence layer that continuously bridges the gap between requirements and code. It automatically runs on every code commit to your connected repository and is also triggered whenever requirements are added, updated, or removed in tools like Jira. In addition, users can initiate on-demand analysis directly from the dashboard. WalnutAI verifies that every requirement is implemented; every code change is reflected in requirements, and that the codebase meets quality standards across architecture, security, documentation, and testing. By identifying gaps at each stage of the SDLC, it ensures complete traceability, prevents leakages, and significantly reduces delivery risk and rework.",
          },
        },
        {
          "@type": "Question",
          name: "What does a gap analysis report show?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A WalnutAI gap analysis report shows overall requirement coverage percentage, a prioritized list of uncovered requirements, untested code paths by feature. It also highlights architectural gaps such as scalability bottlenecks and tightly coupled components, security gaps including access control issues and validation weaknesses, and code documentation gaps where clarity and maintainability are lacking. The report provides AI-generated recommendations and fixes for each identified gap, and can be shared as PDFs or accessed via the dashboard.",
          },
        },
        {
          "@type": "Question",
          name: "Can gap analysis run across multiple repositories?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The Team and Enterprise plans support continuous gap analysis across unlimited repositories — mapping requirements to code and tests spread across multiple microservices, front-end and back-end repos, or monorepo structures.",
          },
        },
      ],
    },
  ],
};

export default function RequirementsGapAnalysisPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
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
            AI Requirements Gap Analysis
            <br />
            <span className="text-orange-500">
              Requirements vs Code Analysis for Shift-Left Testing
            </span>
          </h1>

          {/* h2 subtitle */}
          <h2 className="mt-8 max-w-3xl border-l-4 border-orange-500 pl-6 text-lg md:text-xl text-neutral-300 leading-relaxed">
            WalnutAI&apos;s AI requirements gap analysis continuously performs
            requirements vs code analysis across your codebase and test suite —
            acting as a shift-left testing tool that detects code coverage
            requirements gaps on every commit, before they reach production.
          </h2>
        </section>

        {/* Feature Demo */}
        <section className="mx-auto max-w-5xl px-6 pb-12">
          <div style={{ background: "var(--bg-surface-alt)", border: "1px solid var(--border-primary)", borderRadius: 16, padding: 24, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img
              src="/assets/gif/Gap analysis.gif"
              alt="Requirements Gap Analysis demo"
              style={{ maxWidth: "100%", maxHeight: 400, borderRadius: 8 }}
              loading="eager"
            />
          </div>
        </section>

        {/* GeoDefinition */}
        <section className="mx-auto max-w-6xl px-6 pt-16">
          <GeoDefinition>
            Requirements gap analysis is the automated process of comparing
            software specification documents against an implemented codebase and
            test suite to identify requirements that are missing from code, code
            that lacks corresponding test coverage, and test cases that are not
            mapped to any requirement. WalnutAI runs this analysis consecutively
            — detecting new gaps within minutes of each code commit rather than
            waiting for a manual sprint-end review.
          </GeoDefinition>
        </section>

        {/* Outcomes — StatCard grid */}
        <section className="mx-auto max-w-6xl px-6 py-16">
          <h3 className="text-2xl font-bold mb-8">Outcomes</h3>
          <div className="grid gap-6 sm:grid-cols-3">
            <StatCard
              stat="80%"
              description="reduction in production defects — teams catch coverage gaps during development, not after release"
            />
            <StatCard
              stat="5 min"
              description="to first gap report — connect your Jira and GitHub to receive your initial analysis immediately"
            />
            <StatCard
              stat="40+"
              description="gaps discovered per project on average — even in codebases with existing test suites"
            />
          </div>
        </section>

        {/* How It Works — StepCard grid */}
        <section className="mx-auto max-w-6xl px-6 pb-16">
          <h3 className="text-2xl font-bold mb-8">How WalnutAI Gap Analysis Works</h3>
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
            What a Gap Analysis Report Contains
          </h3>
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
            title="Comparison — Continuous vs Manual Gap Analysis"
            traditional="gap analysis is conducted manually at sprint-end, consuming 4-8 hours of QA time and often missing gaps introduced by late code changes."
            walnut="WalnutAI runs analysis automatically on every commit — surfacing new gaps within minutes and eliminating the manual review cycle entirely."
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
