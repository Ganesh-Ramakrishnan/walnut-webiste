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
    step: "Connect your requirements source",
    text: "Link your Jira project, Azure DevOps backlog, or upload a requirements document. WalnutAI reads and indexes every user story and acceptance criterion.",
  },
  {
    step: "Generate test cases through Smart Recording and prompting",
    text: "Using Smart Recording, users can describe feature functionality step-by-step without breaking flow. WalnutAI converts these into structured user stories and allows users to generate multiple test cases by prompting different scenarios, including edge cases, negative paths, and real-world usage conditions.",
  },
  {
    step: "AI analyzes each requirement",
    text: "For each user story, WalnutAI\u2019s test generation model identifies the actors, actions, expected outcomes, boundary conditions, and failure scenarios implied by the requirement.",
  },
  {
    step: "Test cases are generated and mapped",
    text: "A comprehensive set of test cases is created and automatically mapped back to the originating requirement — maintaining full traceability from story to test.",
  },
  {
    step: "Export and execute",
    text: "Generated test cases are available in WalnutAI\u2019s test management interface, or export directly to Jira, or your CI/CD pipeline.",
  },
];

const capabilities = [
  "Functional test cases — verify that each requirement behaves as specified under normal conditions",
  "Edge case test cases — identify boundary conditions and unusual inputs that often cause failures",
  "Negative test cases — verify correct error handling when invalid inputs or unexpected states occur",
  "Regression test cases — ensure existing functionality is not broken by new changes",
  "API test cases — validate request/response contracts, status codes, and data integrity",
  "UI and UX test cases — verify interface behavior against design specifications (requires Figma integration)",
  "Security test cases — common vulnerability scenarios including input validation and authentication edge cases",
  "Performance test scenarios — load and response time benchmarks based on acceptance criteria",
];

const outcomes = [
  { stat: "15+ hrs", description: "Save 15+ hours per sprint — eliminate manual test case writing for your entire backlog" },
  { stat: "96%", description: "96% average requirement coverage — WalnutAI generates test cases for every requirement, including edge cases and negative scenarios that manual writers commonly miss" },
  {
    stat: "Minutes",
    description: "First test cases generated within minutes of connecting your Jira project — no configuration or prompting required",
  },
];

const faqs = [
  {
    q: "Can WalnutAI generate test cases from Jira user stories?",
    a: "Yes. WalnutAI connects directly to your Jira project and reads user stories, acceptance criteria, and epic descriptions. Test cases are generated for every story automatically — with no manual prompting required. New stories added to Jira trigger automatic test case generation, keeping your test suite synchronized with your backlog at all times.",
  },
  {
    q: "How accurate are AI-generated test cases?",
    a: "WalnutAI-generated test cases are grounded in your specific requirements — not generic patterns — which significantly improves relevance compared to general AI tools. Teams consistently report that AI-generated test cases cover edge cases and boundary conditions that manual writers frequently miss. All generated test cases are reviewed in WalnutAI\u2019s interface before execution, allowing QA engineers to approve, edit, or reject individual cases before they run.",
  },
  {
    q: "How many test cases does WalnutAI generate per user story?",
    a: "On average, WalnutAI generates between 5 and 15 test cases per user story — covering the happy path, 2-3 alternative flows, boundary conditions, at least one negative scenario, and any security or performance considerations implied by the acceptance criteria. Complex stories with multiple actors or integration points generate more test cases accordingly.",
  },
  {
    q: "Can I import existing test cases into WalnutAI?",
    a: "Yes. WalnutAI supports importing existing test cases. Imported test cases are mapped to your requirements and integrated into gap analysis — so WalnutAI can identify which existing tests cover which requirements and where additional AI-generated tests are needed.",
  },
  {
    q: "Does WalnutAI generate test cases for mobile applications?",
    a: "Yes. Mobile test case generation for Android and iOS applications is available on the Team and Enterprise plans. Mobile test cases cover device-specific behaviors, touch interactions, orientation changes, permission handling, and offline scenarios — in addition to standard functional and regression coverage.",
  },
];

const integrations = [
  "Input sources: Jira, Azure DevOps, GitHub Issues, Figma (design-to-test), uploaded PRDs and documents",
  "Export destinations: Jira (Zephyr/Xray), Playwright scripts, CSV",
  "Execution environments: WalnutAI Test Runner, CI/CD pipeline (GitHub Actions, GitLab CI, Azure Pipelines)",
];

const relatedFeatures = [
  { title: "Requirements Gap Analysis", id: "requirements-gap-analysis" },
  { title: "Test Execution & Management", id: "test-execution-management" },
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
            scenario — in seconds per user story, with zero manual QA writing.
          </h2>
        </section>

        {/* Feature Demo */}
        <section className="mx-auto max-w-5xl px-6 pb-12">
          <div style={{ background: "#0d0d0d", border: "1px solid #1a1a1a", borderRadius: 16, padding: 24, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img
              src="/assets/gif/Stop_Writing_Test_Cases_Manually.gif"
              alt="AI Test Case Generation demo"
              style={{ maxWidth: "100%", maxHeight: 400, borderRadius: 8 }}
              loading="eager"
            />
          </div>
        </section>

        {/* GEO Definition */}
        <section className="mx-auto max-w-6xl px-6 pb-16">
          <GeoDefinition>
            Automated test case generation is the use of AI to create software
            test cases from requirements documents, user stories, or application
            specifications — replacing the manual process of writing test cases
            by hand. WalnutAI generates functional test cases, edge case
            scenarios, boundary value tests, negative test cases, regression
            tests, API tests, and security test cases — all mapped back to the
            originating requirement — in seconds per user story. Teams using
            WalnutAI eliminate an average of 15 hours per sprint previously spent
            on manual test case authoring.
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
          <h3 className="text-2xl font-bold text-white mb-8">How WalnutAI Generates Test Cases</h3>
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
            Test Types WalnutAI Generates
          </h3>
          <FeatureList items={capabilities} />
        </section>

        {/* Integrations for Test Case Generation */}
        <section className="mx-auto max-w-6xl px-6 pb-16">
          <h3 className="text-2xl font-bold text-white mb-4">
            Integrations for Test Case Generation
          </h3>
          <FeatureList items={integrations} />
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
