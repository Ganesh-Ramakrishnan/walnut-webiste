import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI Test Generation - Generate Test Cases at Scale",
  description:
    "Generate comprehensive test cases at scale from requirements and user stories with WalnutAI. AI creates functional, edge case, and regression tests automatically.",
  openGraph: {
    title: "AI Test Generation - Generate Test Cases at Scale",
    description:
      "Generate comprehensive test cases at scale from requirements and user stories with WalnutAI. AI creates functional, edge case, and regression tests automatically.",
    url: "https://www.walnutai.ai/features/ai-test-generation",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Test Generation - Generate Test Cases at Scale",
    description:
      "Generate comprehensive test cases at scale from requirements and user stories with WalnutAI. AI creates functional, edge case, and regression tests automatically.",
  },
  alternates: {
    canonical: "https://www.walnutai.ai/features/ai-test-generation",
  },
};

const steps = [
  {
    number: "01",
    title: "Feed Requirements",
    description:
      "Connect your structured requirements, user stories, acceptance criteria, or API specifications. WalnutAI analyzes the inputs to understand expected behaviors and constraints.",
  },
  {
    number: "02",
    title: "AI Generates Test Cases",
    description:
      "Advanced AI models produce comprehensive test suites including positive paths, negative paths, boundary conditions, edge cases, and data-driven scenarios for each requirement.",
  },
  {
    number: "03",
    title: "Review & Customize",
    description:
      "Browse generated tests organized by requirement, priority, and type. Modify test steps, add custom assertions, adjust data inputs, and approve tests for inclusion in your suite.",
  },
  {
    number: "04",
    title: "Export & Execute",
    description:
      "Export approved tests to your preferred execution framework or run them directly within WalnutAI. Tests maintain traceability links to their source requirements throughout.",
  },
];

const benefits = [
  "Generate hundreds of test cases in minutes instead of weeks of manual authoring",
  "Achieve comprehensive coverage with AI that identifies edge cases humans commonly miss",
  "Maintain full traceability between requirements and generated test cases automatically",
  "Support multiple test types including functional, integration, API, and UI test generation",
  "Reduce test maintenance burden with AI that updates tests when requirements change",
];

export default function AiTestGenerationPage() {
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
                  src="/assets/features/ai-testcase.svg"
                  alt="AI Test Generation — generate comprehensive test cases at scale"
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
              AI Test{" "}
              <span style={{ color: "#F17F0D" }}>Generation</span>
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
              Generate comprehensive test cases at scale from requirements,
              user stories, and application context using advanced AI models.
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
                Writing test cases is one of the most time-consuming activities in
                software delivery. Quality engineers spend days or weeks crafting
                detailed test scenarios for each feature, yet coverage gaps
                persist because manually enumerating every edge case, boundary
                condition, and error scenario is practically impossible at scale.
                As applications grow more complex and release cycles accelerate,
                the testing bottleneck becomes the single biggest constraint on
                delivery speed.
              </p>
              <p className="feature-card-desc" style={{ marginBottom: 16 }}>
                WalnutAI&apos;s AI Test Generation eliminates this bottleneck by
                automatically producing comprehensive test suites from your
                requirements and application context. The AI analyzes each
                requirement to understand the expected behavior, then generates
                positive test paths, negative scenarios, boundary conditions, data
                variations, and edge cases that experienced testers would write
                &mdash; plus the obscure scenarios they would likely miss. Each
                generated test includes clear steps, expected results, test data,
                and preconditions ready for review and execution.
              </p>
              <p className="feature-card-desc" style={{ marginBottom: 0 }}>
                The generation engine supports multiple test types including
                functional tests, API tests, integration tests, and UI test
                scripts. It learns from your existing test patterns to match your
                team&apos;s style and conventions. When requirements change, the AI
                identifies affected tests and suggests updates, dramatically
                reducing maintenance overhead. Generated tests are fully traceable
                to their source requirements, giving you instant visibility into
                coverage completeness. Teams using AI test generation report
                producing test suites ten times faster while achieving
                significantly higher defect detection rates compared to manual
                authoring alone.
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
              Ready to Generate Tests at Scale?
            </h2>
            <p
              style={{
                color: "#9ca3af",
                fontSize: 16,
                marginBottom: 28,
                lineHeight: 1.7,
              }}
            >
              See how AI can produce comprehensive test suites in minutes, not
              weeks.
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
