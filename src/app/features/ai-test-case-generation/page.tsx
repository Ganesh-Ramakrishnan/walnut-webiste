import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FAQAccordion } from "@/components/FeaturePageUI";
import Image from "next/image";
import { ArrowLeft, TestTube2 } from "lucide-react";
import { SIGNUP_URL } from "@/lib/links";

export const metadata: Metadata = {
  title: "AI Test Case Generation from User Stories \u2014 Every User Story Deserves a Complete Test Suite | WalnutAI",
  description:
    "Generate complete test cases \u2014 steps, expected results, positive and negative scenarios \u2014 from any user story in under 5min. Cut test creation time by up to 40%.",
  openGraph: {
    title: "AI Test Case Generation \u2014 Every User Story Deserves a Complete Test Suite | WalnutAI",
    description:
      "Generate complete test cases \u2014 steps, expected results, positive and negative scenarios \u2014 from any user story in under 5min. Cut test creation time by up to 40%.",
    url: "https://www.walnutai.ai/features/ai-test-case-generation",
    siteName: "WalnutAI",
    type: "website",
    images: [
      {
        url: "https://walnutai.dev/og/ai-test-case-generation.png",
        width: 1200,
        height: 630,
        alt: "WalnutAI AI Test Case Generation \u2014 Generate Test Cases from User Stories Automatically",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@WalnutAI",
    title: "AI Test Case Generation \u2014 Every User Story Deserves a Complete Test Suite | WalnutAI",
    description:
      "Generate complete test cases \u2014 steps, expected results, positive and negative scenarios \u2014 from any user story in under 5min. Cut test creation time by up to 40%.",
    images: ["https://walnutai.dev/og/ai-test-case-generation.png"],
  },
  alternates: {
    canonical: "https://www.walnutai.ai/features/ai-test-case-generation",
  },
};

const sections = [
  {
    title: "Get a complete, reviewable test case in under 5 minutes",
    desc: "Select a user story, choose your test types, and WalnutAI returns a fully structured test case \u2014 prerequisites, step-by-step instructions, expected results per step, overall expected outcome, and test data suggestions \u2014 for both positive and negative scenarios, in minutes.",
  },
  {
    title: "Test cases grounded in how the feature was actually built",
    desc: "If gap analysis has been run on the project, WalnutAI incorporates the actual code context into test generation \u2014 so the cases reflect how the feature behaves in the implementation, not just what the story spec says it should do.",
  },
  {
    title: "Generate across an entire sprint, not just one story at a time",
    desc: "Single-story generation misses the bigger picture. Batch mode runs across an entire sprint or module so WalnutAI understands how stories connect \u2014 shared data flows, integration boundaries, and cross-feature dependencies all feed into more contextually accurate test cases. Select your scope, generate the full suite, and duplicate detection handles the cleanup.",
  },
  {
    title: "Every case goes through human review before it\u2019s saved",
    desc: "No AI-generated test case is committed to your project without QA approval. Review, edit, or regenerate any case in the structured review interface \u2014 and convert approved cases directly into executable Playwright scripts with smart recording.",
  },
];

const faqs = [
  {
    q: "Can WalnutAI generate test cases from Jira user stories?",
    a: "Yes. WalnutAI connects directly to your Jira project and reads user stories, acceptance criteria, and epic descriptions. Test cases are generated for every story automatically \u2014 with no manual prompting required.",
  },
  {
    q: "How accurate are AI-generated test cases?",
    a: "WalnutAI-generated test cases are grounded in your specific requirements \u2014 not generic patterns. Teams consistently report that AI-generated test cases cover edge cases and boundary conditions that manual writers frequently miss. All cases are reviewed before execution.",
  },
  {
    q: "How many test cases does WalnutAI generate per user story?",
    a: "On average, WalnutAI generates between 5 and 15 test cases per user story \u2014 covering the happy path, alternative flows, boundary conditions, negative scenarios, and security or performance considerations implied by the acceptance criteria.",
  },
  {
    q: "Can I import existing test cases into WalnutAI?",
    a: "Yes. Imported test cases are mapped to your requirements and integrated into gap analysis \u2014 so WalnutAI can identify which existing tests cover which requirements and where additional AI-generated tests are needed.",
  },
  {
    q: "Does WalnutAI generate test cases for mobile applications?",
    a: "Yes. Mobile test case generation for Android and iOS is available on Team and Enterprise plans. Mobile test cases cover device-specific behaviors, touch interactions, orientation changes, permission handling, and offline scenarios.",
  },
];

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.walnutai.ai" },
        { "@type": "ListItem", position: 2, name: "Features", item: "https://www.walnutai.ai/features" },
        { "@type": "ListItem", position: 3, name: "AI Test Case Generation", item: "https://www.walnutai.ai/features/ai-test-case-generation" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
  ],
};

export default function AiTestCaseGenerationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Navbar />
      <main
        className="min-h-screen text-text-primary"
        style={{ paddingTop: 80, background: "linear-gradient(160deg, var(--surface-deep) 0%, var(--surface-1) 25%, var(--page-bg-solid) 55%, var(--surface-1) 100%)" }}
      >
        {/* Back Button */}
        <div className="mx-auto max-w-7xl px-6 pt-10">
          <Link
            href="/features"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--border-default)] bg-[var(--surface-translucent)] px-4 py-2 text-sm text-text-secondary transition-colors hover:border-orange-500/50 hover:text-orange-500"
          >
            <ArrowLeft size={16} />
            All Features
          </Link>
        </div>

        {/* Hero */}
        <section className="relative px-6 pt-10 pb-16 text-center overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="relative z-10 max-w-5xl mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold tracking-tight mb-6 leading-tight">
              AI Test Case Generation &mdash; Every User Story Deserves a{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
                Complete Test Suite. AI Makes That Possible.
              </span>
            </h1>
            <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
              Generate complete test cases &mdash; steps, expected results, positive
              and negative scenarios &mdash; from any user story in under 5 minutes.
              Automated test case creation that cuts test creation time by up to 40%.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section
          className="relative overflow-hidden border-y border-white/[0.06]"
          style={{ background: "linear-gradient(180deg, var(--page-bg-solid) 0%, var(--surface-navy) 50%, var(--page-bg-solid) 100%)" }}
        >
          <div className="max-w-7xl mx-auto px-6 py-20 sm:py-24">
            <p className="text-center text-sm font-semibold uppercase tracking-widest mb-16" style={{ color: "var(--accent)" }}>
              Trusted by QA teams that test everything, not just what time allows
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                { value: "40%", label: "Reduction in test case creation time reported by WalnutAI customers" },
                { value: "5 min", label: "To generate a complete test case with positive and negative scenarios from a user story" },
                { value: "60X", label: "Faster than a QA engineer writing the same test case manually" },
              ].map((stat) => (
                <div
                  key={stat.value}
                  className="relative rounded-2xl px-9 py-12 text-center overflow-hidden"
                  style={{
                    background: "linear-gradient(160deg, rgba(249,115,22,0.07) 0%, rgba(249,115,22,0.02) 50%, var(--surface-scrim) 100%)",
                    border: "1px solid rgba(249,115,22,0.1)",
                  }}
                >
                  <div className="absolute top-0 left-6 right-6 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(249,115,22,0.2), transparent)" }} />
                  <div className="text-3xl sm:text-4xl font-extrabold text-orange-500 mb-3">{stat.value}</div>
                  <p className="text-text-secondary text-sm leading-relaxed">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="mx-auto max-w-7xl px-6 py-10 sm:py-14">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-5">
              Stop choosing which stories get tested because you don&apos;t have time for all of them
            </h2>
            <p className="text-text-secondary text-[15px] leading-[1.8]">
              The average QA engineer spends 30 to 45 minutes writing a single complete test case from a user story &mdash; and most sprints have more stories than available QA time. The result: complex, edge-case-heavy stories get shallow test coverage, and some get none at all. WalnutAI generates a complete, reviewable test case in under 5 minutes, making full coverage achievable for every story in every sprint.
            </p>
          </div>
        </section>

        {/* Feature Sections — alternating layout */}
        <section className="mx-auto max-w-[1480px] px-6 pb-20">
          <div className="space-y-6">
            {sections.map((s, i) => {
              const isEven = i % 2 === 0;
              return (
                <div
                  key={i}
                  className="grid lg:grid-cols-2 gap-8 items-center rounded-2xl bg-[var(--surface-1)]/75 p-8 sm:p-10"
                >
                  <div className={isEven ? "" : "lg:order-2"}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/15 flex items-center justify-center text-xs font-bold text-orange-400 font-mono">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-3 leading-snug">
                      {s.title}
                    </h3>
                    <p className="text-text-secondary text-[15px] leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                  <div className={isEven ? "" : "lg:order-1"}>
                    <Image
                      src={`/assets/test${i + 1}.png`}
                      alt={s.title}
                      width={700}
                      height={460}
                      className="rounded-xl w-full h-auto"
                      loading={i < 2 ? "eager" : "lazy"}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section
          className="relative overflow-hidden"
          style={{
            background: "var(--surface-1)",
            borderTop: "1px solid var(--border-default)",
            borderBottom: "1px solid var(--border-default)",
          }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-[120px] pointer-events-none" style={{ background: "rgba(249,115,22,0.2)" }} />

          <div className="relative z-10 max-w-3xl mx-auto px-6 py-20 sm:py-24 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to ship with confidence?
            </h2>
            <p className="text-text-secondary mb-8 max-w-xl mx-auto">
              See how WalnutAI connects requirements, code, testing, and
              deployment into one intelligent workflow.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={SIGNUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-orange-500 text-white font-semibold transition-colors hover:bg-orange-600"
              >
                Start Free Trial
              </a>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-orange-500/25 text-text-secondary-strong font-medium transition-colors hover:border-orange-500/50 hover:text-text-primary"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-7xl px-6 py-20">
          <FAQAccordion faqs={faqs} />
        </section>
      </main>
      <Footer />
    </>
  );
}
