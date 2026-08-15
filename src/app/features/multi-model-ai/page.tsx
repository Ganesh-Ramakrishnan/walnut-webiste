import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FAQAccordion } from "@/components/FeaturePageUI";
import Image from "next/image";
import { ArrowLeft, MessageSquare } from "lucide-react";
import { SIGNUP_URL } from "@/lib/links";

export const metadata: Metadata = {
  title: "Multi-Model AI Configuration \u2014 Choose Your AI Models in WalnutAI | WalnutAI",
  description:
    "Run WalnutAI on OpenAI, Azure OpenAI, AWS Bedrock, Google Gemini, Anthropic Claude, or local Ollama. Per-project model configuration with spending limits and AES-256 key encryption.",
  openGraph: {
    title: "Multi-Model AI Configuration \u2014 Choose Your AI Models in WalnutAI | WalnutAI",
    description:
      "Run WalnutAI on OpenAI, Azure OpenAI, AWS Bedrock, Google Gemini, Anthropic Claude, or local Ollama. Per-project model configuration with spending limits and AES-256 key encryption.",
    url: "https://www.walnutai.ai/features/multi-model-ai",
    siteName: "WalnutAI",
    type: "website",
    images: [
      {
        url: "https://walnutai.dev/og/multi-model-ai.png",
        width: 1200,
        height: 630,
        alt: "WalnutAI Multi-Model AI Configuration \u2014 bring your own AI model with enterprise controls",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@WalnutAI",
    title: "Multi-Model AI Configuration \u2014 Choose Your AI Models in WalnutAI | WalnutAI",
    description:
      "Run WalnutAI on OpenAI, Azure OpenAI, AWS Bedrock, Google Gemini, Anthropic Claude, or local Ollama. Per-project model configuration with spending limits and AES-256 key encryption.",
    images: ["https://walnutai.dev/og/multi-model-ai.png"],
  },
  alternates: {
    canonical: "https://www.walnutai.ai/features/multi-model-ai",
  },
};

const sections = [
  {
    title: "Choose any model per project \u2014 not one model for everything",
    desc: "Different projects have different needs. A cost-sensitive internal tooling project might run on a fast, efficient model. A high-stakes customer-facing feature might warrant the most capable available. WalnutAI\u2019s per-project model configuration lets each team optimize independently without affecting others.",
  },
  {
    title: "Bring your own keys \u2014 WalnutAI never holds your API credentials insecurely",
    desc: "API keys for every configured model are encrypted with AES-256 at rest. WalnutAI calls the model on your behalf using your credentials \u2014 the model provider sees your account, your usage, and your billing. No intermediary markup, no shared model pool that leaks usage across customers.",
  },
  {
    title: "Run fully on-premise with Ollama for complete data sovereignty",
    desc: "For air-gapped environments, regulated industries, or organizations with strict data sovereignty requirements, WalnutAI\u2019s Ollama integration enables fully local AI inference. Every story generation, gap analysis, and test generation call stays within your infrastructure \u2014 nothing reaches an external API.",
  },
  {
    title: "Set spending limits per project before costs surprise you",
    desc: "Each project can be configured with a spending cap on AI model usage. When usage approaches the limit, WalnutAI alerts the project owner \u2014 no runaway token costs from a batch job that processed more than expected.",
  },
];

const faqs = [
  {
    q: "Which AI models does WalnutAI support?",
    a: "WalnutAI supports OpenAI (GPT-4, GPT-4o, o-series), Azure OpenAI, AWS Bedrock (Claude and other models), Google Gemini, Anthropic Claude (direct), and local Ollama for on-premise inference. Any of these can be configured per project.",
  },
  {
    q: "Can different projects use different AI models?",
    a: "Yes. Model configuration is per-project, so different teams can optimize independently based on cost, compliance, or capability needs \u2014 without affecting each other\u2019s setup.",
  },
  {
    q: "How are my API keys secured?",
    a: "All API keys are encrypted with AES-256 at rest. WalnutAI calls the model on your behalf using your credentials \u2014 the provider sees your account, your usage, and your billing directly. No intermediary markup, no shared pools.",
  },
  {
    q: "Does WalnutAI support fully on-premise AI inference?",
    a: "Yes. Via the Ollama integration, WalnutAI can run fully local AI inference for air-gapped environments or organizations with strict data sovereignty requirements. Nothing leaves your infrastructure.",
  },
  {
    q: "Can I set spending limits on AI usage?",
    a: "Yes. Each project can be configured with a spending cap. WalnutAI alerts the project owner as usage approaches the limit so runaway token costs are prevented.",
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
        { "@type": "ListItem", position: 3, name: "Multi-Model AI Configuration", item: "https://www.walnutai.ai/features/multi-model-ai" },
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

export default function MultiModelAIPage() {
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
              Multi-Model AI Configuration &mdash;{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
                Choose Your AI Models in WalnutAI.
              </span>
            </h1>
            <p className="text-neutral-400 text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
              Run WalnutAI on OpenAI, Azure OpenAI, AWS Bedrock, Google Gemini,
              Anthropic Claude, or local Ollama. Per-project model configuration
              with spending limits and AES-256 key encryption.
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
              Trusted by enterprises that can&apos;t afford AI vendor lock-in
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                { value: "6+", label: "AI providers supported \u2014 OpenAI, Azure, AWS Bedrock, Gemini, Anthropic, and local Ollama" },
                { value: "Per-project", label: "Model configuration means different teams can use different models based on cost, compliance, or capability needs" },
                { value: "100%", label: "Data residency control \u2014 on-premise inference via Ollama means data never leaves your infrastructure" },
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
              The best AI model for your team today might not be the best one tomorrow
            </h2>
            <p className="text-neutral-400 text-[15px] leading-[1.8]">
              The AI model landscape changes faster than any enterprise can standardize on. A model that leads on code generation today may be surpassed next quarter. Organizations with strict data residency requirements need local inference options that cloud-only platforms can&apos;t offer. WalnutAI is model-agnostic by design &mdash; configure any supported model per project, switch without rebuilding workflows, and retain full control over cost, compliance, and performance.
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
                      src={`/assets/model${i + 1}.png`}
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
