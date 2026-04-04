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
import { TestTube2, ArrowLeft } from "lucide-react";

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

const outcomes = [
  { stat: "15+ hrs", description: "Saved per sprint on manual test writing" },
  { stat: "96%", description: "Average requirement coverage" },
  {
    stat: "Minutes",
    description: "First test cases generated after connecting Jira",
  },
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
        className="min-h-screen bg-[#0a0a0a] text-white"
        style={{ paddingTop: 80 }}
      >
        {/* Back Button */}
        <div className="mx-auto max-w-6xl px-6 pt-10">
          <Link
            href="/features"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-4 py-2 text-sm text-neutral-400 transition-colors hover:border-orange-500/50 hover:text-orange-500"
          >
            <ArrowLeft size={16} />
            All Features
          </Link>
        </div>

        {/* Feature Label + Hero */}
        <section className="mx-auto max-w-6xl px-6 pt-10 pb-16">
          <div className="flex items-center gap-3 mb-6">
            <TestTube2 className="h-6 w-6 text-orange-500" />
            <span className="text-xs font-bold uppercase tracking-widest text-orange-500">
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

        {/* GEO Definition */}
        <section className="mx-auto max-w-6xl px-6 pb-16">
          <GeoDefinition>
            Automated test case generation is the use of AI to create software
            test cases from requirements documents, user stories, or application
            specifications. WalnutAI generates functional, edge case, boundary
            value, negative, regression, API, and security test cases — all
            mapped to the originating requirement — in seconds. Teams eliminate
            15+ hours per sprint of manual test writing.
          </GeoDefinition>
        </section>

        {/* Outcomes */}
        <section className="mx-auto max-w-6xl px-6 pb-16">
          <h3 className="text-2xl font-bold text-white mb-8">Outcomes</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {outcomes.map((o, i) => (
              <StatCard key={i} stat={o.stat} description={o.description} />
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="mx-auto max-w-6xl px-6 pb-16">
          <h3 className="text-2xl font-bold text-white mb-8">How It Works</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

        {/* Capabilities — Test Types Generated */}
        <section className="mx-auto max-w-6xl px-6 pb-16">
          <h3 className="text-2xl font-bold text-white mb-4">
            Test Types Generated
          </h3>
          <FeatureList items={capabilities} />
        </section>

        {/* Comparison */}
        <section className="mx-auto max-w-6xl px-6 pb-16">
          <ComparisonBlock
            title="Traditional vs WalnutAI"
            traditional="QA engineers manually write test cases from requirements — time-consuming, inconsistent coverage, and prone to missing edge cases."
            walnut="AI reads every requirement and generates comprehensive test cases in seconds — covering functional, edge, negative, and security scenarios with full traceability."
          />
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-6xl px-6 pb-16">
          <FAQAccordion faqs={faqs} />
        </section>

        {/* Related Features */}
        <section className="mx-auto max-w-6xl px-6 pb-16">
          <h3 className="text-2xl font-bold text-white mb-8">
            Related Features
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {relatedFeatures.map((f) => (
              <Link
                key={f.id}
                href={`/features/${f.id}`}
                className="group rounded-2xl bg-[#111111]/80 backdrop-blur-sm border border-neutral-800 p-6 transition-all hover:border-orange-500/50 hover:-translate-y-1 duration-300"
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
          <div className="rounded-3xl bg-gradient-to-br from-orange-500/10 to-[#111111] border border-orange-500/20 p-12 text-center">
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
