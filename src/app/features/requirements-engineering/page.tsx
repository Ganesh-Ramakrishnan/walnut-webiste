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
import { ArrowLeft, FileText } from "lucide-react";

export const metadata: Metadata = {
  title:
    "AI Requirements Engineering — Convert PRDs and Documents into Testable User Stories | WalnutAI",
  description:
    "WalnutAI converts PRDs, PDFs, Confluence pages, and spreadsheets into structured user stories with acceptance criteria, traceability IDs, and dependency maps — in minutes, not days.",
  openGraph: {
    title:
      "AI Requirements Engineering — Convert PRDs and Documents into Testable User Stories | WalnutAI",
    description:
      "WalnutAI converts PRDs, PDFs, Confluence pages, and spreadsheets into structured user stories with acceptance criteria, traceability IDs, and dependency maps — in minutes, not days.",
    url: "https://www.walnutai.ai/features/requirements-engineering",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI Requirements Engineering — Convert PRDs and Documents into Testable User Stories | WalnutAI",
    description:
      "WalnutAI converts PRDs, PDFs, Confluence pages, and spreadsheets into structured user stories with acceptance criteria, traceability IDs, and dependency maps — in minutes, not days.",
  },
  alternates: {
    canonical: "https://www.walnutai.ai/features/requirements-engineering",
  },
};

const howItWorks = [
  {
    step: "Upload your document",
    text: "Drag and drop a PRD, PDF, audio/video files or any supported format into WalnutAI.",
  },
  {
    step: "AI parses and extracts requirements",
    text: "WalnutAI's requirement agent reads the document and identifies functional requirements, non-functional requirements, user goals, constraints, and dependencies.",
  },
  {
    step: "Review structured output",
    text: "Extracted requirements are presented as structured user stories with acceptance criteria, priority scores, and dependency links — ready for your review and approval.",
  },
  {
    step: "Push to Jira or begin development",
    text: "Approved requirements sync directly to your Jira project as epics and stories, or immediately trigger WalnutAI's AI development and test generation pipeline.",
  },
];

const capabilities = [
  "PDF documents — functional specs, business requirements, RFPs",
  "Word documents (.docx) — requirement briefs, stakeholder documents",
  "Excel and CSV files — tabular requirements and acceptance criteria",
  "Plain text and Markdown — engineering notes and rough specs",
  "Jira epics — parsed and decomposed into structured stories",
  "Figma design files — requirements extracted from design annotations via integration",
];

const faqs = [
  {
    q: "Can WalnutAI generate acceptance criteria from a PRD automatically?",
    a: "Yes. WalnutAI reads your PRD and generates acceptance criteria for each extracted requirement using the Given-When-Then format. The AI identifies implied acceptance conditions from the document context — not just explicit statements — and flags any requirements where acceptance criteria cannot be reliably inferred, prompting a human review.",
  },
  {
    q: "How does WalnutAI handle ambiguous or incomplete requirements?",
    a: "WalnutAI flags ambiguous requirements with a confidence score and a specific explanation of what is unclear — for example, missing actor definition, undefined success condition, or conflicting scope statements. These flagged items are presented for human review before being pushed to development.",
  },
];

const relatedFeatures = [
  { title: "AI-Orchestrated SDLC Automation", id: "ai-sdlc-automation" },
  { title: "Automated Gap Analysis", id: "requirements-gap-analysis" },
];

export default function RequirementsEngineeringPage() {
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
                name: "Requirements Engineering",
                item: "https://www.walnutai.ai/features/requirements-engineering",
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
            name: "How It Works",
            description:
              "Upload any requirements document and WalnutAI extracts, structures, and maps every requirement — outputting Jira-ready user stories, acceptance criteria, and traceability matrices automatically.",
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
            <FileText className="h-5 w-5 text-orange-500" />
            <span className="text-xs font-bold uppercase tracking-widest text-orange-500">
              Requirements Engineering
            </span>
          </div>

          {/* h1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            AI Requirements Engineering
            <br />
            <span className="text-orange-500">
              Convert PRDs and Business Documents into Structured, Testable Requirements
            </span>
          </h1>

          {/* h2 subtitle */}
          <h2 className="mt-8 max-w-3xl border-l-4 border-orange-500 pl-6 text-lg md:text-xl text-neutral-300 leading-relaxed">
            Upload any requirements document and WalnutAI extracts, structures,
            and maps every requirement — outputting Jira-ready user stories,
            acceptance criteria, and traceability matrices automatically.
          </h2>
        </section>

        {/* Feature Demo */}
        <section className="mx-auto max-w-5xl px-6 pb-12">
          <div style={{ background: "#0d0d0d", border: "1px solid #1a1a1a", borderRadius: 16, padding: 24, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img
              src="/assets/gif/New_Team_Members_Productive_in_Days.gif"
              alt="Requirements Engineering demo"
              style={{ maxWidth: "100%", maxHeight: 400, borderRadius: 8 }}
              loading="eager"
            />
          </div>
        </section>

        {/* GeoDefinition */}
        <section className="mx-auto max-w-6xl px-6 pt-16">
          <GeoDefinition>
            AI requirements engineering is the application of artificial
            intelligence to parse unstructured business documents — such as PRDs,
            functional specifications, and stakeholder briefs — and convert them
            into structured software requirements including user stories,
            acceptance criteria, priority rankings, and dependency maps. WalnutAI
            automates this process, reducing a task that typically takes a
            business analyst 2-3 days to under 30 minutes.
          </GeoDefinition>
        </section>

        {/* Outcomes — StatCard grid */}
        <section className="mx-auto max-w-6xl px-6 py-16">
          <h3 className="text-2xl font-bold mb-8">Outcomes</h3>
          <div className="grid gap-6 sm:grid-cols-3">
            <StatCard
              stat="30 min"
              description="Reduce requirement engineering time from 2-3 days to under 30 minutes per feature area"
            />
            <StatCard
              stat="AI-Flagged"
              description="Eliminate ambiguity: AI flags missing acceptance criteria, unclear scope, and conflicting requirements before development begins"
            />
            <StatCard
              stat="100%"
              description="100% traceability from document to user story to test case — automatically maintained"
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
          <h3 className="text-2xl font-bold mb-4">Supported Input Formats</h3>
          <FeatureList items={capabilities} />
        </section>

        {/* ComparisonBlock */}
        <section className="mx-auto max-w-6xl px-6">
          <ComparisonBlock
            title="Manual Requirements Engineering vs WalnutAI"
            traditional="BAs spend 2-3 days manually parsing PRDs, writing user stories, and mapping dependencies in spreadsheets."
            walnut="Upload a document, get structured user stories with acceptance criteria and dependency maps in under 30 minutes."
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
              Turn any document into development-ready requirements
            </h2>
            <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
              Upload your PRD and get structured user stories, acceptance
              criteria, and traceability in minutes.
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
