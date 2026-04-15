import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FAQAccordion } from "@/components/FeaturePageUI";
import Image from "next/image";
import { ArrowLeft, Figma } from "lucide-react";

export const metadata: Metadata = {
  title: "Generate User Stories from Figma Designs. Your Figma Designs Are Already Full of Requirements. WalnutAI Just Reads Them | WalnutAI",
  description:
    "Connect WalnutAI to Figma and select screens, frames, or flows. WalnutAI\u2019s vision AI reads your designs and generates user stories from the UI behaviors and interactions it sees.",
  openGraph: {
    title: "Generate User Stories from Figma Designs \u2014 Figma to User Stories AI | WalnutAI",
    description:
      "Connect WalnutAI to Figma and select screens, frames, or flows. WalnutAI\u2019s vision AI reads your designs and generates user stories from the UI behaviors and interactions it sees.",
    url: "https://www.walnutai.ai/features/figma-import",
    siteName: "WalnutAI",
    type: "website",
    images: [
      {
        url: "https://walnutai.dev/og/figma-import.png",
        width: 1200,
        height: 630,
        alt: "WalnutAI Figma Import \u2014 vision AI generating user stories from Figma designs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@WalnutAI",
    title: "Generate User Stories from Figma Designs \u2014 Figma to User Stories AI | WalnutAI",
    description:
      "Connect WalnutAI to Figma and select screens, frames, or flows. WalnutAI\u2019s vision AI reads your designs and generates user stories from the UI behaviors and interactions it sees.",
    images: ["https://walnutai.dev/og/figma-import.png"],
  },
  alternates: {
    canonical: "https://www.walnutai.ai/features/figma-import",
  },
};

const sections = [
  {
    title: "Connects directly to Figma \u2014 no export, no file upload required",
    desc: "Link WalnutAI to your Figma workspace and select specific screens, frames, or user flows to process. WalnutAI pulls the design data directly via the Figma API \u2014 no exporting to PDF, no uploading screenshots, no intermediate steps.",
  },
  {
    title: "Reads UI behavior, not just layout",
    desc: "WalnutAI\u2019s vision AI identifies interactive components, navigation flows, form inputs, validation states, error conditions, and conditional UI logic from your designs \u2014 generating stories that reflect how the interface actually behaves, not just what it looks like.",
  },
  {
    title: "Stories are ready for development and testing the moment they\u2019re generated",
    desc: "Each generated story includes a title, description, and acceptance criteria derived from what the design shows. They arrive in WalnutAI\u2019s standard story format \u2014 immediately linkable to gap analysis, test generation, and the Cloud Agent for implementation.",
  },
];

const faqs = [
  {
    q: "How does Figma to user stories AI work?",
    a: "WalnutAI connects to Figma via the Figma API, reads the selected screens or frames, and uses vision AI to interpret the UI components, interactions, and navigation flows. The AI generates structured user stories with acceptance criteria \u2014 directly from the design.",
  },
  {
    q: "Do I need to export Figma files first?",
    a: "No. WalnutAI connects directly to your Figma workspace via the API. There\u2019s no export to PDF, no uploading screenshots, and no intermediate steps \u2014 just authenticate and select the frames you want to process.",
  },
  {
    q: "Can WalnutAI understand interactive prototypes?",
    a: "Yes. The vision AI reads navigation flows, click interactions, form inputs, validation states, and conditional UI logic \u2014 generating stories that reflect actual UI behavior, not just visual layout.",
  },
  {
    q: "Are the generated stories immediately usable?",
    a: "Yes. Stories arrive in WalnutAI\u2019s standard hierarchy with titles, descriptions, and acceptance criteria. They\u2019re instantly linkable to gap analysis, test generation, and the Cloud Agent for implementation.",
  },
  {
    q: "Does it work with Figma\u2019s Auto Layout or Variants?",
    a: "Yes. WalnutAI handles Auto Layout components, variants, and component instances. Reusable UI patterns are recognized so the generated stories cover the underlying behavior without duplicating across instances.",
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
        { "@type": "ListItem", position: 3, name: "Figma Import", item: "https://www.walnutai.ai/features/figma-import" },
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

export default function FigmaImportPage() {
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
              Generate User Stories from Figma Designs.{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
                Your Figma Designs Are Already Full of Requirements. WalnutAI Just Reads Them.
              </span>
            </h1>
            <p className="text-neutral-400 text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
              Connect WalnutAI to Figma and select screens, frames, or flows.
              WalnutAI&apos;s vision AI reads your designs and generates user
              stories from the UI behaviors and interactions it sees.
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
              Trusted by teams who&apos;ve eliminated the design-to-story translation step
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                { value: "60\u201370%", label: "Of requirement mismatches between design and development stem from manual interpretation of UI specs" },
                { value: "0", label: "Screens manually transcribed into stories \u2014 WalnutAI\u2019s vision AI reads Figma directly" },
                { value: "Same day", label: "Stories generated from a Figma handoff are ready for development and testing immediately" },
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
              Designers hand off in Figma. Developers shouldn&apos;t have to re-write that as stories manually.
            </h2>
            <p className="text-neutral-400 text-[15px] leading-[1.8]">
              The gap between a Figma design and a development-ready user story is typically filled by a business analyst or product manager spending hours manually reading screens and writing stories from what they see. WalnutAI&apos;s vision AI connects directly to Figma, selects the frames and flows you specify, reads the UI components, interactions, and behaviors, and generates the user stories automatically &mdash; so by the time the design is handed off, the requirements are already written.
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
                        ["figma-connect", "design-behavior", "stories-ready"][i]
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
