import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI-Orchestrated SDLC - Automate Software Delivery",
  description:
    "Automate your entire software delivery lifecycle with WalnutAI's AI-orchestrated SDLC. From intent to production, every phase is coordinated by AI.",
  openGraph: {
    title: "AI-Orchestrated SDLC - Automate Software Delivery",
    description:
      "Automate your entire software delivery lifecycle with WalnutAI's AI-orchestrated SDLC. From intent to production, every phase is coordinated by AI.",
    url: "https://www.walnutai.ai/features/ai-orchestrated-sdlc",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-Orchestrated SDLC - Automate Software Delivery",
    description:
      "Automate your entire software delivery lifecycle with WalnutAI's AI-orchestrated SDLC. From intent to production, every phase is coordinated by AI.",
  },
  alternates: {
    canonical: "https://www.walnutai.ai/features/ai-orchestrated-sdlc",
  },
};

const steps = [
  {
    number: "01",
    title: "Capture Intent",
    description:
      "Feed in user stories, product briefs, or business requirements in any format. WalnutAI's AI parses and structures your intent into actionable delivery items automatically.",
  },
  {
    number: "02",
    title: "Generate Delivery Plan",
    description:
      "The orchestration engine breaks down work into development tasks, test plans, and deployment steps, creating a comprehensive delivery roadmap driven by AI.",
  },
  {
    number: "03",
    title: "Coordinate Execution",
    description:
      "AI agents work across code generation, test creation, and environment setup in parallel, keeping every phase synchronized and progressing toward release.",
  },
  {
    number: "04",
    title: "Validate & Deploy",
    description:
      "Automated quality gates verify every artifact before promotion. Once all checks pass, the pipeline deploys to production with full traceability and audit trail.",
  },
];

const benefits = [
  "Reduce delivery cycle time by up to 70% with end-to-end automation",
  "Eliminate handoff delays between requirements, development, and testing",
  "Maintain full traceability from business intent to deployed feature",
  "Scale delivery capacity without proportionally scaling headcount",
  "Catch integration issues early with continuous AI-driven validation",
];

export default function AiOrchestratedSdlcPage() {
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
                <Image
                  src="/assets/features/agent.webp"
                  alt="AI-Orchestrated SDLC — automate software delivery from intent to production"
                  width={700}
                  height={400}
                  loading="eager"
                  style={{ width: "100%", height: "auto" }}
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
              AI-Orchestrated{" "}
              <span style={{ color: "#F17F0D" }}>SDLC</span>
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
              Automate your entire software delivery lifecycle from intent to
              production with intelligent AI orchestration.
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
                Traditional software delivery is fragmented. Requirements live in one
                tool, development happens in another, testing is siloed, and
                deployment is a manual, error-prone process. Teams spend more time
                coordinating work than actually doing it. Context is lost at every
                handoff, and the gap between what was intended and what gets shipped
                grows wider with every sprint.
              </p>
              <p className="feature-card-desc" style={{ marginBottom: 16 }}>
                WalnutAI&apos;s AI-Orchestrated SDLC changes this fundamentally. Our
                platform acts as an intelligent conductor that understands your
                business intent and coordinates every phase of delivery
                automatically. From the moment a requirement is captured, AI agents
                generate structured specifications, produce implementation code,
                create comprehensive test suites, and prepare deployment
                configurations &mdash; all in a unified, traceable workflow.
              </p>
              <p className="feature-card-desc" style={{ marginBottom: 0 }}>
                The orchestration engine continuously monitors progress, identifies
                bottlenecks, and reallocates resources to keep delivery on track. It
                learns from your team&apos;s patterns to predict risks before they
                materialize, suggests optimizations to your workflow, and ensures
                that quality standards are met at every stage. The result is a
                delivery pipeline that moves at the speed of thought while
                maintaining the rigor and traceability that enterprise teams demand.
                Whether you are shipping a microservice update or coordinating a
                multi-team platform release, the AI orchestrator scales with you.
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
              Ready to Orchestrate Your SDLC?
            </h2>
            <p
              style={{
                color: "#9ca3af",
                fontSize: 16,
                marginBottom: 28,
                lineHeight: 1.7,
              }}
            >
              See how WalnutAI can automate your software delivery from intent
              to production.
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
                transition: "opacity 0.2s",
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
