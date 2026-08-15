import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeaturesContent from "@/components/FeaturesContent";
import { SIGNUP_URL } from "@/lib/links";

export const metadata: Metadata = {
  title:
    "WalnutAI \u2014 From Requirements to Code to Tests, Automatically",
  description:
    "Most teams manage requirements in one tool, build in another, and test in a third. WalnutAI connects all three. Upload a document and get structured requirements. Assign a story to an AI agent and get a pull request. Run gap analysis and see exactly what isn\u2019t implemented or tested. From idea to shipped feature \u2014 WalnutAI runs the loop.",
  openGraph: {
    title:
      "WalnutAI \u2014 From Requirements to Code to Tests, Automatically",
    description:
      "Most teams manage requirements in one tool, build in another, and test in a third. WalnutAI connects all three. Upload a document and get structured requirements. Assign a story to an AI agent and get a pull request. Run gap analysis and see exactly what isn\u2019t implemented or tested.",
    url: "https://www.walnutai.ai/features",
    siteName: "WalnutAI",
    type: "website",
    images: [{ url: "https://walnutai.dev/og/features.png", width: 1200, height: 630, alt: "WalnutAI AI Testing Platform Features — Requirements to Code Automation & Software Quality AI" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@WalnutAI",
    title:
      "WalnutAI \u2014 From Requirements to Code to Tests, Automatically",
    description:
      "Most teams manage requirements in one tool, build in another, and test in a third. WalnutAI connects all three. Upload a document and get structured requirements. Assign a story to an AI agent and get a pull request. Run gap analysis and see exactly what isn\u2019t implemented or tested.",
    images: ["https://walnutai.dev/og/features.png"],
  },
  alternates: {
    canonical: "https://www.walnutai.ai/features",
  },
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "WalnutAI",
  applicationCategory: "DeveloperApplication",
  featureList: [
    "Intelligence Hub \u2014 document to requirements extraction",
    "Code-to-Story reverse requirements engineering",
    "Jira & Azure DevOps bidirectional sync",
    "Figma design import with vision AI",
    "AI story enhancement engine",
    "Cloud Agent autonomous code generation",
    "Auto-fix PR from review comments",
    "VS Code AI extension with Ask, Plan, Agent modes",
    "MCP server integration for AI tools",
    "AI-powered three-phase gap analysis",
    "AI test case generation",
    "Smart test recording for web and mobile",
    "Requirement traceability matrix",
    "Test execution and reporting",
    "Analytics and LLM insights dashboard",
    "Multi-model AI configuration",
    "Role-based access control and audit logs",
  ],
};

export default function FeaturesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationSchema),
        }}
      />
      <Navbar />
      <main
        id="main-content"
        style={{ paddingTop: 80, background: "linear-gradient(160deg, var(--surface-deep) 0%, var(--surface-1) 25%, var(--page-bg-solid) 55%, var(--surface-1) 100%)" }}
      >
        {/* Hero */}
        <section className="relative px-6 pt-24 pb-12 text-center overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="relative z-10 max-w-5xl mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-text-primary mb-6 leading-tight">
              WalnutAI &mdash;{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
                From Requirements to Code to Tests, Automatically
              </span>
            </h1>
            <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
              Most teams manage requirements in one tool, build in another, and test in a third. WalnutAI connects all three. Upload a document and get structured requirements. Assign a story to an AI agent and get a pull request. Run gap analysis and see exactly what isn&apos;t implemented or tested. From idea to shipped feature &mdash; WalnutAI runs the loop.
            </p>
          </div>
        </section>

        {/* Sticky Tabs + Feature Cards */}
        <FeaturesContent />

        {/* CTA */}
        <section className="px-6 pb-24">
          <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ color: "var(--text-primary)", fontSize: 30, fontWeight: 700, marginBottom: 16 }}>
              Ready to ship with confidence?
            </h2>
            <p style={{ color: "#888", fontSize: 16, lineHeight: 1.7, marginBottom: 32 }}>
              See how WalnutAI connects requirements, code, testing, and deployment into one intelligent workflow.
            </p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <a
                href={SIGNUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-block", background: "var(--accent)", color: "var(--text-on-accent)", fontWeight: 700, fontSize: 15, padding: "14px 32px", borderRadius: 50, textDecoration: "none" }}
              >
                Start Free Trial
              </a>
              <Link
                href="/pricing"
                style={{ display: "inline-block", color: "var(--accent)", fontWeight: 600, fontSize: 15, padding: "13px 28px", borderRadius: 50, border: "1px solid rgba(241, 127, 13, 0.3)", textDecoration: "none" }}
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
