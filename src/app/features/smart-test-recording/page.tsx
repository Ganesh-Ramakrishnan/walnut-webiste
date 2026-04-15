import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FAQAccordion } from "@/components/FeaturePageUI";
import { ArrowLeft, Smartphone } from "lucide-react";

export const metadata: Metadata = {
  title: "Smart Test Recording \u2014 Drop a URL. Walk Away With a Test Suite | WalnutAI",
  description:
    "Interact with your web or mobile app and WalnutAI converts every click and input into a structured test case. No scripting. Works for web, API, DB, Mainframe, Android, and iOS.",
  openGraph: {
    title: "Smart Test Recording \u2014 Drop a URL. Walk Away With a Test Suite | WalnutAI",
    description:
      "Interact with your web or mobile app and WalnutAI converts every click and input into a structured test case. No scripting. Works for web, API, DB, Mainframe, Android, and iOS.",
    url: "https://www.walnutai.ai/features/smart-test-recording",
    siteName: "WalnutAI",
    type: "website",
    images: [
      {
        url: "https://walnutai.dev/og/smart-test-recording.png",
        width: 1200,
        height: 630,
        alt: "WalnutAI Smart Test Recording \u2014 automated test creation from browser and mobile interactions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@WalnutAI",
    title: "Smart Test Recording \u2014 Drop a URL. Walk Away With a Test Suite | WalnutAI",
    description:
      "Interact with your web or mobile app and WalnutAI converts every click and input into a structured test case. No scripting. Works for web, API, DB, Mainframe, Android, and iOS.",
    images: ["https://walnutai.dev/og/smart-test-recording.png"],
  },
  alternates: {
    canonical: "https://www.walnutai.ai/features/smart-test-recording",
  },
};

const sections = [
  {
    title: "Generate End-to-End Automation Test Cases from a URL and a Prompt",
    desc: "Tell WalnutAI what to test, not how to test it. Drop a URL, describe your scenario, and the AI crawls your entire application \u2014 parsing screens, understanding navigation flows, and producing complete end-to-end automation test cases ready to execute.",
  },
  {
    title: "Works on live devices with a real-time feed",
    desc: "Mobile recording sessions stream a live device feed directly in WalnutAI so you can see exactly what\u2019s being captured as you interact. What you see is what gets recorded \u2014 no surprises when the test case appears.",
  },
];

const faqs = [
  {
    q: "What is smart test recording?",
    a: "Smart test recording captures your interactions with a web or mobile application \u2014 clicks, inputs, navigation \u2014 and automatically converts them into structured, reusable test cases with steps and expected results. No scripting required.",
  },
  {
    q: "What platforms does Smart Recording support?",
    a: "WalnutAI Smart Recording supports web browsers, Android devices, and iOS devices. All platforms use the same recording interface and produce the same structured test case output.",
  },
  {
    q: "Do I need to write any code to create test cases?",
    a: "No. Zero lines of script are needed. You interact with your application naturally and WalnutAI converts every action into a structured test case automatically.",
  },
  {
    q: "Can I edit the recorded test cases?",
    a: "Yes. Every recorded test case goes through a review interface where you can edit steps, update expected results, add assertions, or regenerate sections before saving to your project.",
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
        { "@type": "ListItem", position: 3, name: "Smart Test Recording", item: "https://www.walnutai.ai/features/smart-test-recording" },
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

export default function SmartTestRecordingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Navbar />
      <main
        className="min-h-screen text-white"
        style={{ paddingTop: 80, background: "var(--bg-body-gradient)" }}
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
              Smart Test Recording &mdash;{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
                Drop a URL. Walk Away With a Test Suite.
              </span>
            </h1>
            <p className="text-neutral-400 text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
              Interact with your web or mobile app and WalnutAI converts every
              click and input into a structured test case. No scripting. Works for
              web, API, DB, Mainframe, Android, and iOS.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section
          className="relative overflow-hidden border-y border-white/[0.06]"
          style={{ background: "var(--bg-body-gradient)" }}
        >
          <div className="max-w-7xl mx-auto px-6 py-20 sm:py-24">
            <p className="text-center text-sm font-semibold uppercase tracking-widest mb-16" style={{ color: "#F17F0D" }}>
              Trusted by QA teams testing flows faster than they can script
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                { value: "20\u201330 min", label: "Saved per test flow by eliminating manual step transcription after exploratory testing" },
                { value: "0", label: "Lines of script written to create a structured, reusable test case from a recorded session" },
                { value: "Web + Mobile", label: "Full cross-platform coverage from a single recording interface \u2014 web, Android, and iOS" },
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
              Every exploratory testing session was already a test case &mdash; you just couldn&apos;t save it
            </h2>
            <p className="text-neutral-400 text-[15px] leading-[1.8]">
              Exploratory testing produces the most realistic coverage of how real users interact with software. But the insights from those sessions have always been lost &mdash; there was no practical way to convert them into structured, repeatable test cases without spending 20&ndash;30 minutes transcribing steps by hand. WalnutAI Smart Recording captures every interaction automatically and delivers a ready-to-review test case the moment you stop recording.
            </p>
          </div>
        </section>

        {/* Feature Sections — alternating layout */}
        <section className="mx-auto max-w-7xl px-6 pb-20">
          <div className="space-y-6">
            {sections.map((s, i) => {
              const isEven = i % 2 === 0;
              return (
                <div
                  key={i}
                  className="grid lg:grid-cols-2 gap-8 items-center rounded-2xl bg-bg-surface p-8 sm:p-10"
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
                    <div className="rounded-xl bg-[#060b18] h-48 sm:h-56 flex items-center justify-center">
                      <span className="text-neutral-700 text-sm">Feature visual</span>
                    </div>
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
            background: "var(--card-bg)",
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
