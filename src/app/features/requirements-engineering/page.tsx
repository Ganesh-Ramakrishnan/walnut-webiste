import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Requirements Engineering - Documents to Structured Requirements",
  description:
    "Transform unstructured documents into structured, traceable requirements with WalnutAI. AI-powered parsing turns specs into actionable delivery items.",
  openGraph: {
    title: "Requirements Engineering - Documents to Structured Requirements",
    description:
      "Transform unstructured documents into structured, traceable requirements with WalnutAI. AI-powered parsing turns specs into actionable delivery items.",
    url: "https://www.walnutai.ai/features/requirements-engineering",
  },
  twitter: {
    card: "summary_large_image",
    title: "Requirements Engineering - Documents to Structured Requirements",
    description:
      "Transform unstructured documents into structured, traceable requirements with WalnutAI. AI-powered parsing turns specs into actionable delivery items.",
  },
  alternates: {
    canonical: "https://www.walnutai.ai/features/requirements-engineering",
  },
};

const steps = [
  {
    number: "01",
    title: "Upload Your Documents",
    description:
      "Import product specs, business requirement documents, user research notes, meeting transcripts, or any unstructured text. WalnutAI supports PDFs, Word docs, Confluence pages, and more.",
  },
  {
    number: "02",
    title: "AI Extraction & Structuring",
    description:
      "Advanced NLP models parse your documents, extracting functional requirements, non-functional constraints, acceptance criteria, and edge cases into a structured, standardized format.",
  },
  {
    number: "03",
    title: "Review & Refine",
    description:
      "Collaborate with your team to review AI-generated requirements. The platform highlights ambiguities, conflicts, and missing details, suggesting clarifications for each finding.",
  },
  {
    number: "04",
    title: "Export & Trace",
    description:
      "Approved requirements flow directly into test generation, development planning, and traceability tracking. Every requirement maintains a living link to its downstream artifacts.",
  },
];

const benefits = [
  "Convert weeks of manual requirements analysis into hours of AI-assisted review",
  "Eliminate ambiguity with AI that detects vague language and suggests precise alternatives",
  "Maintain bidirectional traceability from business need to test case to deployed code",
  "Support every input format from formal BRDs to informal Slack conversations and emails",
  "Ensure regulatory compliance with structured, auditable requirement documentation",
];

export default function RequirementsEngineeringPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: 80 }}>
        {/* Hero */}
        <section
          style={{
            background: "#0a0a0a",
            padding: "80px 24px 60px",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <Link
              href="/features"
              style={{
                color: "#F17F0D",
                fontSize: 14,
                textDecoration: "none",
                fontWeight: 600,
                display: "inline-block",
                marginBottom: 32,
              }}
            >
              &larr; Back to Features
            </Link>

            <div className="feature-card-full" style={{ maxWidth: 700, margin: "0 auto 32px" }}>
              <div className="feature-card-img">
                <img
                  src="/assets/features/documentation-structure.svg"
                  alt="Requirements Engineering — transform documents into structured requirements"
                  loading="eager"
                  width={700}
                  height={400}
                  style={{ width: "100%", display: "block", objectFit: "cover" }}
                />
              </div>
            </div>

            <h1
              style={{
                color: "#fff",
                fontSize: 44,
                fontWeight: 800,
                marginBottom: 16,
                lineHeight: 1.15,
              }}
            >
              Requirements{" "}
              <span style={{ color: "#F17F0D" }}>Engineering</span>
            </h1>
            <p
              style={{
                color: "#9ca3af",
                fontSize: 18,
                lineHeight: 1.7,
                maxWidth: 640,
                margin: "0 auto",
              }}
            >
              Transform unstructured documents, conversations, and specs into
              structured, traceable requirements ready for development and
              testing.
            </p>
          </div>
        </section>

        {/* Description */}
        <section
          style={{
            background: "#0a0a0a",
            padding: "0 24px 60px",
          }}
        >
          <div
            className="feature-card-full"
            style={{
              maxWidth: 800,
              margin: "0 auto",
            }}
          >
            <div className="feature-card-body">
              <p className="feature-card-desc" style={{ marginBottom: 16 }}>
                Requirements are the foundation of every successful software
                project, yet they remain one of the most error-prone phases of
                delivery. Business stakeholders communicate intent through lengthy
                documents, slide decks, emails, and meetings. By the time these
                reach development teams, critical details are lost, assumptions go
                undocumented, and ambiguities create a breeding ground for defects.
                Studies consistently show that the majority of production defects
                trace back to requirements issues.
              </p>
              <p className="feature-card-desc" style={{ marginBottom: 16 }}>
                WalnutAI&apos;s Requirements Engineering capability bridges this gap
                with AI-powered document intelligence. Feed the platform any source
                material &mdash; product requirement documents, meeting transcripts,
                user research findings, regulatory documents, or even informal
                notes &mdash; and it extracts, structures, and classifies
                requirements automatically. The AI identifies functional needs,
                non-functional constraints, acceptance criteria, dependencies, and
                edge cases that human reviewers commonly overlook.
              </p>
              <p className="feature-card-desc" style={{ marginBottom: 0 }}>
                But extraction is only the beginning. The platform&apos;s analysis
                engine detects ambiguous language, conflicting requirements, and
                incomplete specifications, presenting clear suggestions for
                resolution. Once requirements are finalized, they become the living
                backbone of your delivery pipeline &mdash; automatically linked to
                test cases, development tasks, and deployment artifacts. Every
                change to a requirement triggers downstream impact analysis,
                ensuring your entire team stays aligned. This is requirements
                engineering reimagined for the AI era, turning your weakest link
                into your strongest foundation.
              </p>
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section
          style={{
            background: "#0a0a0a",
            padding: "0 24px 60px",
          }}
        >
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <h2
              style={{
                color: "#fff",
                fontSize: 32,
                fontWeight: 700,
                marginBottom: 32,
                textAlign: "center",
              }}
            >
              How It Works
            </h2>
            <div style={{ display: "grid", gap: 20 }}>
              {steps.map((step) => (
                <div
                  key={step.number}
                  style={{
                    background: "#1a1a1a",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 20,
                    padding: 28,
                    display: "flex",
                    gap: 20,
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      background: "#F17F0D",
                      color: "#000",
                      fontWeight: 800,
                      fontSize: 14,
                      borderRadius: 8,
                      minWidth: 44,
                      height: 44,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {step.number}
                  </div>
                  <div>
                    <h3
                      style={{
                        color: "#fff",
                        fontSize: 18,
                        fontWeight: 700,
                        marginBottom: 8,
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      style={{
                        color: "#b0b0b0",
                        fontSize: 15,
                        lineHeight: 1.7,
                      }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section
          style={{
            background: "#0a0a0a",
            padding: "0 24px 60px",
          }}
        >
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <h2
              style={{
                color: "#fff",
                fontSize: 32,
                fontWeight: 700,
                marginBottom: 32,
                textAlign: "center",
              }}
            >
              Key Benefits
            </h2>
            <div
              style={{
                background: "#1a1a1a",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 20,
                padding: 32,
              }}
            >
              {benefits.map((benefit, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 12,
                    marginBottom: i < benefits.length - 1 ? 16 : 0,
                  }}
                >
                  <span style={{ color: "#F17F0D", fontSize: 18, lineHeight: 1.6 }}>
                    &#10003;
                  </span>
                  <p
                    style={{
                      color: "#d1d5db",
                      fontSize: 15,
                      lineHeight: 1.7,
                    }}
                  >
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          style={{
            background: "#0a0a0a",
            padding: "0 24px 100px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              maxWidth: 600,
              margin: "0 auto",
              background: "#1a1a1a",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 20,
              padding: "48px 32px",
            }}
          >
            <h2
              style={{
                color: "#fff",
                fontSize: 28,
                fontWeight: 700,
                marginBottom: 12,
              }}
            >
              Ready to Transform Your Requirements?
            </h2>
            <p
              style={{
                color: "#9ca3af",
                fontSize: 16,
                marginBottom: 28,
                lineHeight: 1.7,
              }}
            >
              Turn unstructured documents into structured, traceable
              requirements in minutes.
            </p>
            <Link
              href="/contact"
              style={{
                display: "inline-block",
                background: "#F17F0D",
                color: "#000",
                fontWeight: 700,
                fontSize: 16,
                padding: "14px 36px",
                borderRadius: 8,
                textDecoration: "none",
              }}
            >
              Get a Demo
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
