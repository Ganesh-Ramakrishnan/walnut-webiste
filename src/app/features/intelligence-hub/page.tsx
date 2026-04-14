import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FAQAccordion } from "@/components/FeaturePageUI";
import Image from "next/image";
import { ArrowLeft, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Every Document You Have Is a Requirements Document Now | WalnutAI",
  description:
    "Upload Word docs, PDFs, Excel, CSV, or PowerPoint and WalnutAI instantly extracts structured user stories, features, and modules. Requirements from any source in minutes.",
  openGraph: {
    title: "Every Document You Have Is a Requirements Document Now | WalnutAI",
    description:
      "Upload Word docs, PDFs, Excel, CSV, or PowerPoint and WalnutAI instantly extracts structured user stories, features, and modules. Requirements from any source in minutes.",
    url: "https://www.walnutai.ai/features/intelligence-hub",
    siteName: "WalnutAI",
    type: "website",
    images: [
      {
        url: "https://walnutai.dev/og/intelligence-hub.png",
        width: 1200,
        height: 630,
        alt: "WalnutAI Intelligence Hub \u2014 AI requirements extraction from any document format",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@WalnutAI",
    title: "Every Document You Have Is a Requirements Document Now | WalnutAI",
    description:
      "Upload Word docs, PDFs, Excel, CSV, or PowerPoint and WalnutAI instantly extracts structured user stories, features, and modules. Requirements from any source in minutes.",
    images: ["https://walnutai.dev/og/intelligence-hub.png"],
  },
  alternates: {
    canonical: "https://www.walnutai.ai/features/intelligence-hub",
  },
};

const sections = [
  {
    title: "Processes any format your team already works in",
    desc: "Word documents, PDFs (scanned or digital), Excel sheets, CSVs, PowerPoint decks, Figma designs, Jira exports, Azure DevOps exports, Playwright scripts, and Git repositories \u2014 WalnutAI reads them all and outputs the same structured result regardless of what format requirements arrived in.",
  },
  {
    title: "A 9-phase AI pipeline that preserves document context",
    desc: "Rather than sending your document as a raw text dump, WalnutAI section-aware chunks it, vectorizes it, and uses RAG to pull the most relevant sections as context for each extraction call. The result is stories that reflect the document\u2019s actual structure and intent \u2014 not a flat summary.",
  },
  {
    title: "Recovers from failures without starting over",
    desc: "LangGraph stateful processing keeps a checkpoint after every pipeline phase. If processing fails on a large document mid-run, it resumes from the last successful step automatically \u2014 not from page one. A 100-page BRD processes in under 5 minutes in standard deployments.",
  },
  {
    title: "You stay in control before anything is saved",
    desc: "Every extracted story goes through a human review gate. Accept, edit, or reject stories individually or in bulk \u2014 and use the built-in chat panel to query the extracted content, groom the stories and refine the output and verify accuracy before committing anything to your project.",
  },
];

const faqs = [
  {
    q: "What is AI requirement extraction?",
    a: "AI requirement extraction automatically reads a document \u2014 specification, design, or spreadsheet \u2014 and generates structured software requirements including user stories and acceptance criteria using large language models. WalnutAI does this through a 9-phase RAG pipeline that preserves document context and hierarchy.",
  },
  {
    q: "How does WalnutAI handle large documents?",
    a: "WalnutAI uses section-aware chunking that respects document structure rather than splitting by character count. LangGraph processing with checkpointing ensures failures mid-pipeline resume from the last successful step. In standard deployments, a 100-page document processes in under 5 minutes.",
  },
  {
    q: "Can I process multiple documents at once?",
    a: "Yes. The Intelligence Hub\u2019s batch processor handles multiple documents in parallel with a configurable worker pool. Results are aggregated, deduplicated across documents, and presented in a unified review interface.",
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
        { "@type": "ListItem", position: 3, name: "Intelligence Hub", item: "https://www.walnutai.ai/features/intelligence-hub" },
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

export default function IntelligenceHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Navbar />
      <main
        className="min-h-screen text-white"
        style={{ paddingTop: 80, background: "linear-gradient(160deg, #1a0e05 0%, #0a1628 25%, #060b18 55%, #0a1628 100%)" }}
      >
        {/* Back Button */}
        <div className="mx-auto max-w-7xl px-6 pt-10">
          <Link
            href="/features"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-4 py-2 text-sm text-neutral-400 transition-colors hover:border-orange-500/50 hover:text-orange-500"
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
              Every Document You Have Is a{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
                Requirements Document Now.
              </span>
            </h1>
            <p className="text-neutral-400 text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
              Upload Word docs, PDFs, Excel, CSV, or PowerPoint and WalnutAI
              instantly extracts structured user stories, features, and modules.
              AI requirements extraction software that turns any source into
              development-ready requirements in minutes.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section
          className="relative overflow-hidden border-y border-white/[0.06]"
          style={{ background: "linear-gradient(180deg, #060b18 0%, #0f1a3d 50%, #060b18 100%)" }}
        >
          <div className="max-w-7xl mx-auto px-6 py-20 sm:py-24">
            <p className="text-center text-sm font-semibold uppercase tracking-widest mb-16" style={{ color: "#F17F0D" }}>
              Trusted by BA and QA teams who&apos;ve eliminated manual extraction
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                { value: "40X", label: "Faster than manually extracting requirements from a 100-page document" },
                { value: "5 min", label: "To process a 100-page BRD into a structured, traceable requirements hierarchy" },
                { value: "10+", label: "Input formats processed \u2014 from Word and PDF to Figma, Jira, and Git repositories" },
              ].map((stat) => (
                <div
                  key={stat.value}
                  className="relative rounded-2xl px-9 py-12 text-center overflow-hidden"
                  style={{
                    background: "linear-gradient(160deg, rgba(249,115,22,0.07) 0%, rgba(249,115,22,0.02) 50%, rgba(10,10,10,0.95) 100%)",
                    border: "1px solid rgba(249,115,22,0.1)",
                  }}
                >
                  <div className="absolute top-0 left-6 right-6 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(249,115,22,0.2), transparent)" }} />
                  <div className="text-3xl sm:text-4xl font-extrabold text-orange-500 mb-3">{stat.value}</div>
                  <p className="text-neutral-400 text-sm leading-relaxed">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="mx-auto max-w-7xl px-6 py-10 sm:py-14">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">
              Requirements extraction that used to take days now takes minutes
            </h2>
            <p className="text-neutral-400 text-[15px] leading-[1.8]">
              A senior business analyst manually extracting and structuring requirements from a 100-page BRD typically spends two to three full days reading, interpreting, and writing stories. WalnutAI&apos;s Intelligence Hub processes the same document in under five minutes &mdash; with human review of every extracted story before anything is saved. The BA&apos;s time is spent on judgment, not transcription.
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
                  className="grid lg:grid-cols-2 gap-8 items-center rounded-2xl bg-[#0a1628]/75 p-8 sm:p-10"
                >
                  <div className={isEven ? "" : "lg:order-2"}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/15 flex items-center justify-center text-xs font-bold text-orange-400 font-mono">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug">
                      {s.title}
                    </h3>
                    <p className="text-neutral-400 text-[15px] leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                  <div className={isEven ? "" : "lg:order-1"}>
                    <Image
                      src={`/assets/feature-visuals/${
                        ["upload-formats", "pipeline-flow", "checkpoint-recovery", "human-review"][i] || "upload-formats"
                      }.png`}
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
            background: "#0a1628",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-[120px] pointer-events-none" style={{ background: "rgba(249,115,22,0.2)" }} />

          <div className="relative z-10 max-w-3xl mx-auto px-6 py-20 sm:py-24 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to ship with confidence?
            </h2>
            <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
              See how WalnutAI connects requirements, code, testing, and
              deployment into one intelligent workflow.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-orange-500 text-white font-semibold transition-colors hover:bg-orange-600"
              >
                Start Free Trial
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-orange-500/25 text-neutral-300 font-medium transition-colors hover:border-orange-500/50 hover:text-white"
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
