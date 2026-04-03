import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TestTube2 } from "lucide-react";

export const metadata: Metadata = {
  title:
    "Automated Test Case Generation from Requirements — AI-Written Test Cases | WalnutAI",
  description:
    "WalnutAI generates functional, edge case, regression, and security test cases from Jira user stories — saving 15+ hours per sprint. Ready in minutes.",
  openGraph: {
    title:
      "Automated Test Case Generation from Requirements — AI-Written Test Cases | WalnutAI",
    description:
      "WalnutAI generates functional, edge case, regression, and security test cases from Jira user stories — saving 15+ hours per sprint. Ready in minutes.",
    url: "https://www.walnutai.ai/features/ai-test-case-generation",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Automated Test Case Generation from Requirements — AI-Written Test Cases | WalnutAI",
    description:
      "WalnutAI generates functional, edge case, regression, and security test cases from Jira user stories — saving 15+ hours per sprint. Ready in minutes.",
  },
  alternates: {
    canonical: "https://www.walnutai.ai/features/ai-test-case-generation",
  },
};

const howItWorks = [
  {
    step: "Connect requirements source",
    text: "Link Jira, Azure DevOps, or upload a document.",
  },
  {
    step: "Generate test cases through Smart Recording and prompting",
    text: "Using Smart Recording, users can describe feature functionality step-by-step without breaking flow. WalnutAI converts these into structured user stories and allows users to generate multiple test cases by prompting different scenarios, including edge cases, negative paths, and real-world usage conditions.",
  },
  {
    step: "AI analyzes each requirement",
    text: "Identifies actors, actions, outcomes, boundaries, and failure scenarios.",
  },
  {
    step: "Test cases generated and mapped",
    text: "Comprehensive set created and mapped to originating requirement.",
  },
  {
    step: "Export and execute",
    text: "Available in WalnutAI, export to Jira, or CI/CD pipeline.",
  },
];

const capabilities = [
  "Functional test cases",
  "Edge case test cases",
  "Negative test cases",
  "Regression test cases",
  "API test cases",
  "UI and UX test cases (Figma integration)",
  "Security test cases",
  "Performance test scenarios",
];

const integrations = [
  "Input: Jira, Azure DevOps, GitHub Issues, Figma, uploaded PRDs",
  "Export: Jira (Zephyr/Xray), Playwright scripts, CSV",
  "Execution: WalnutAI Test Runner, CI/CD pipelines",
];

const faqs = [
  {
    q: "Can it generate from Jira stories?",
    a: "Yes. Connects directly, reads stories and acceptance criteria. Auto-generates on new stories.",
  },
  {
    q: "How accurate are AI-generated test cases?",
    a: "Grounded in YOUR requirements. Teams report edge cases covered that manual writers miss. Review before execution.",
  },
  {
    q: "How many test cases per user story?",
    a: "5-15 on average: happy path, 2-3 alternative flows, boundary conditions, negative scenario, security/performance.",
  },
  {
    q: "Can I import existing test cases?",
    a: "Yes. Imported tests are mapped to requirements and integrated into gap analysis.",
  },
  {
    q: "Does it support mobile apps?",
    a: "Yes. Android/iOS on Team and Enterprise plans. Covers device-specific behaviors, touch, orientation, permissions, offline.",
  },
];

const relatedFeatures = [
  { title: "Gap Analysis", id: "requirements-gap-analysis" },
  { title: "Test Execution", id: "test-execution-management" },
];

export default function AiTestCaseGenerationPage() {
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
                name: "AI Test Case Generation",
                item: "https://www.walnutai.ai/features/ai-test-case-generation",
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
            name: "How to Generate Test Cases from Requirements with WalnutAI",
            description:
              "WalnutAI reads your Jira stories, requirements documents, or Figma designs and generates comprehensive test cases covering every scenario — in seconds per user story.",
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
              <span className="text-white">ai-test-case-generation</span>
              {"/"}
            </p>
          </div>
        </div>

        {/* Hero */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex items-center gap-3 mb-6">
            <TestTube2 className="h-9 w-9 text-orange-500" />
            <span className="rounded-full bg-orange-500/10 border border-orange-500/30 px-4 py-1 text-sm font-medium text-orange-500">
              Highest Priority
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Automated Test Case Generation from Requirements
            <br />
            <span className="text-orange-500">
              AI-Written Test Cases in Minutes, Not Hours
            </span>
          </h1>
          <h2 className="mt-8 max-w-3xl border-l-4 border-orange-500 pl-6 text-lg md:text-xl text-neutral-300 leading-relaxed">
            WalnutAI reads your Jira stories, requirements documents, or Figma
            designs and generates comprehensive test cases covering every
            scenario — in seconds per user story.
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
                Automated test case generation is the use of AI to create
                software test cases from requirements documents, user stories, or
                application specifications. WalnutAI generates functional, edge
                case, boundary value, negative, regression, API, and security
                test cases — all mapped to the originating requirement — in
                seconds. Teams eliminate 15+ hours per sprint of manual test
                writing.
              </p>
            </div>
            <div className="rounded-2xl bg-neutral-900 border border-neutral-800 p-8">
              <h3 className="text-sm font-mono uppercase tracking-widest text-orange-500 mb-4">
                Outcomes
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-neutral-300">
                  <span className="mt-1 block h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                  Save 15+ hours per sprint
                </li>
                <li className="flex items-start gap-3 text-neutral-300">
                  <span className="mt-1 block h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                  96% average requirement coverage
                </li>
                <li className="flex items-start gap-3 text-neutral-300">
                  <span className="mt-1 block h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                  First test cases in minutes of connecting Jira
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <h2 className="text-3xl font-bold mb-12">How It Works</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
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

        {/* Test Types Generated */}
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <h2 className="text-3xl font-bold mb-8">Test Types Generated</h2>
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

        {/* Integrations */}
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <h2 className="text-3xl font-bold mb-8">
            Integrations for Test Case Generation
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {integrations.map((item, i) => (
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
            Traditional vs WalnutAI
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-neutral-900 border border-neutral-800 p-8">
              <h3 className="text-sm font-mono uppercase tracking-widest text-neutral-500 mb-4">
                Traditional
              </h3>
              <p className="text-neutral-400 leading-relaxed">
                QA engineers manually write test cases from requirements —
                time-consuming, inconsistent coverage, and prone to missing edge
                cases.
              </p>
            </div>
            <div className="rounded-2xl bg-neutral-900 border border-orange-500/30 p-8">
              <h3 className="text-sm font-mono uppercase tracking-widest text-orange-500 mb-4">
                WalnutAI
              </h3>
              <p className="text-neutral-300 leading-relaxed">
                AI reads every requirement and generates comprehensive test cases
                in seconds — covering functional, edge, negative, and security
                scenarios with full traceability.
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
              Ready to generate test cases automatically?
            </h2>
            <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
              See how WalnutAI turns your Jira stories into comprehensive test
              cases — in minutes, not hours.
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
