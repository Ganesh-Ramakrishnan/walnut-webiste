import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI-Powered IDE - Three Modes of AI Development",
  description:
    "Develop faster with WalnutAI's AI-Powered IDE featuring Autopilot, Copilot, and Chat modes. Accelerate coding with intelligent AI assistance built in.",
  openGraph: {
    title: "AI-Powered IDE - Three Modes of AI Development",
    description:
      "Develop faster with WalnutAI's AI-Powered IDE featuring Autopilot, Copilot, and Chat modes. Accelerate coding with intelligent AI assistance built in.",
    url: "https://www.walnutai.ai/features/ai-powered-ide",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-Powered IDE - Three Modes of AI Development",
    description:
      "Develop faster with WalnutAI's AI-Powered IDE featuring Autopilot, Copilot, and Chat modes. Accelerate coding with intelligent AI assistance built in.",
  },
  alternates: {
    canonical: "https://www.walnutai.ai/features/ai-powered-ide",
  },
};

const steps = [
  {
    number: "01",
    title: "Choose Your Mode",
    description:
      "Select Autopilot for fully autonomous code generation, Copilot for real-time inline suggestions as you type, or Chat for conversational problem-solving and code exploration.",
  },
  {
    number: "02",
    title: "Provide Context",
    description:
      "The IDE automatically ingests your project structure, requirements, existing code patterns, and team conventions to ensure every AI suggestion aligns with your codebase standards.",
  },
  {
    number: "03",
    title: "Generate & Iterate",
    description:
      "AI produces code, tests, and documentation based on your intent. Review suggestions inline, accept or modify them, and watch the AI learn from your feedback in real time.",
  },
  {
    number: "04",
    title: "Validate Automatically",
    description:
      "Every generated artifact is automatically validated against your project's linting rules, type system, and test suite. The IDE flags issues before they ever reach a pull request.",
  },
];

const benefits = [
  "Three distinct AI modes let you choose the right level of assistance for every task",
  "Context-aware suggestions that understand your codebase, patterns, and conventions",
  "Generate complete functions, test suites, and documentation from natural language prompts",
  "Built-in validation ensures AI-generated code meets your quality and style standards",
  "Seamless integration with your existing workflow, version control, and CI/CD pipeline",
];

export default function AiPoweredIdePage() {
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
                  src="/assets/features/ide.svg"
                  alt="AI-Powered IDE — three modes of AI development"
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
              AI-Powered{" "}
              <span style={{ color: "#F17F0D" }}>IDE</span>
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
              Three modes of AI development &mdash; Autopilot, Copilot, and
              Chat &mdash; that adapt to your workflow and accelerate every line
              of code.
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
                The modern developer juggles between writing code, understanding
                existing systems, debugging issues, and writing tests. Traditional
                IDEs provide syntax highlighting and autocomplete, but they cannot
                understand intent, reason about architecture, or generate
                meaningful code from a high-level description. Developers still
                spend the majority of their time on repetitive tasks that could be
                automated if the tooling were intelligent enough to understand what
                they are trying to accomplish.
              </p>
              <p className="feature-card-desc" style={{ marginBottom: 16 }}>
                WalnutAI&apos;s AI-Powered IDE introduces three distinct modes
                designed for different development scenarios. Autopilot mode handles
                entire tasks autonomously &mdash; describe what you need in natural
                language, and the AI generates complete implementations including
                code, tests, and documentation. Copilot mode works alongside you in
                real time, offering intelligent inline suggestions as you type,
                completing functions, and anticipating your next move. Chat mode
                provides a conversational interface for exploring solutions,
                debugging problems, and getting explanations of complex code.
              </p>
              <p className="feature-card-desc" style={{ marginBottom: 0 }}>
                What sets our IDE apart is deep context awareness. Rather than
                generating generic code snippets, it understands your project
                structure, coding conventions, dependency graph, and even your
                team&apos;s pull request history. Every suggestion is tailored to
                fit seamlessly into your existing codebase. The IDE also integrates
                with the broader WalnutAI platform, meaning generated code
                automatically links to requirements and test coverage data. This
                is not just a smarter editor &mdash; it is an AI development
                partner that understands your entire delivery context and helps you
                ship better software faster.
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
              Ready to Supercharge Your Development?
            </h2>
            <p
              style={{
                color: "#9ca3af",
                fontSize: 16,
                marginBottom: 28,
                lineHeight: 1.7,
              }}
            >
              Experience three modes of AI-powered development that adapt to
              your workflow.
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
