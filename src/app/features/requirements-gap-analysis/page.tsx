import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
  "QA leads needing coverage visibility",
  "Engineering managers wanting release readiness scoring",
  "DevOps engineers integrating quality gates",
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
              <span className="text-white">requirements-gap-analysis</span>
              {"/"}
            </p>
          </div>
        </div>

        {/* Hero */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl">🔍</span>
            <span className="rounded-full bg-orange-500/10 border border-orange-500/30 px-4 py-1 text-sm font-medium text-orange-500">
              Continuous Coverage Analysis
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Automated Requirements Coverage Gap Analysis
            <br />
            <span className="text-orange-500">
              Identify What&apos;s Missing Before It Reaches Production
            </span>
          </h1>
          <h2 className="mt-8 max-w-3xl border-l-4 border-orange-500 pl-6 text-lg md:text-xl text-neutral-300 leading-relaxed">
            WalnutAI continuously scans your requirements, codebase, and test
            suite — detecting uncovered features, untested code paths, and
            missing acceptance criteria in real time.
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
                Requirements gap analysis is the automated process of comparing
                software specification documents against an implemented codebase
                and test suite to identify requirements missing from code, code
                lacking test coverage, and test cases not mapped to any
                requirement. WalnutAI runs this continuously — detecting new gaps
                within minutes of each code commit.
              </p>
            </div>
            <div className="rounded-2xl bg-neutral-900 border border-neutral-800 p-8">
              <h3 className="text-sm font-mono uppercase tracking-widest text-orange-500 mb-4">
                Outcomes
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-neutral-300">
                  <span className="mt-1 block h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                  80% reduction in production defects
                </li>
                <li className="flex items-start gap-3 text-neutral-300">
                  <span className="mt-1 block h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                  5 minutes to first gap report
                </li>
                <li className="flex items-start gap-3 text-neutral-300">
                  <span className="mt-1 block h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                  40+ gaps discovered per project on average
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
          <h2 className="text-3xl font-bold mb-8">
            What the Gap Report Includes
          </h2>
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
            Traditional Gap Analysis vs WalnutAI
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-neutral-900 border border-neutral-800 p-8">
              <h3 className="text-sm font-mono uppercase tracking-widest text-neutral-500 mb-4">
                Traditional
              </h3>
              <p className="text-neutral-400 leading-relaxed">
                Manual gap analysis at sprint-end, 4-8 hours of QA time.
              </p>
            </div>
            <div className="rounded-2xl bg-neutral-900 border border-orange-500/30 p-8">
              <h3 className="text-sm font-mono uppercase tracking-widest text-orange-500 mb-4">
                WalnutAI
              </h3>
              <p className="text-neutral-300 leading-relaxed">
                Runs automatically on every commit — surfacing gaps within
                minutes.
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
