import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "CI/CD Integration - Quality Gates in Your Pipeline",
  description:
    "Embed intelligent quality gates into your CI/CD pipeline with WalnutAI. Catch defects early, enforce standards, and ship with confidence every sprint.",
  openGraph: {
    title: "CI/CD Integration - Quality Gates in Your Pipeline",
    description:
      "Embed intelligent quality gates into your CI/CD pipeline with WalnutAI. Catch defects early, enforce standards, and ship with confidence every sprint.",
    url: "https://www.walnutai.ai/features/ci-cd-integration",
  },
  twitter: {
    card: "summary_large_image",
    title: "CI/CD Integration - Quality Gates in Your Pipeline",
    description:
      "Embed intelligent quality gates into your CI/CD pipeline with WalnutAI. Catch defects early, enforce standards, and ship with confidence every sprint.",
  },
  alternates: {
    canonical: "https://www.walnutai.ai/features/ci-cd-integration",
  },
};

const steps = [
  {
    number: "01",
    title: "Connect Your Pipeline",
    description:
      "Integrate WalnutAI with your existing CI/CD platform using native plugins for Jenkins, GitHub Actions, GitLab CI, Azure DevOps, CircleCI, and other popular tools in minutes.",
  },
  {
    number: "02",
    title: "Define Quality Gates",
    description:
      "Configure pass/fail criteria based on test coverage thresholds, defect severity limits, performance benchmarks, and security scan results tailored to each stage of your pipeline.",
  },
  {
    number: "03",
    title: "Automate Test Execution",
    description:
      "Trigger the right tests at the right time. Smoke tests on every commit, regression suites on merge requests, and full validation before production deployment, all orchestrated automatically.",
  },
  {
    number: "04",
    title: "Gate & Report",
    description:
      "Builds are promoted or blocked based on quality gate results. Detailed reports with failure analysis, coverage metrics, and trend data are posted directly to your pull requests and dashboards.",
  },
];

const benefits = [
  "Native integrations with Jenkins, GitHub Actions, GitLab CI, Azure DevOps, and more",
  "Configurable quality gates that enforce coverage, performance, and security standards",
  "Intelligent test selection runs only relevant tests per commit to speed up feedback loops",
  "Automatic failure reports posted as pull request comments with root cause analysis",
  "Shift-left quality assurance that catches defects in minutes instead of days",
];

export default function CiCdIntegrationPage() {
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
                  src="/assets/features/gap-analysis.svg"
                  alt="CI/CD Integration — quality gates in your pipeline"
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
              CI/CD{" "}
              <span style={{ color: "#F17F0D" }}>Integration</span>
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
              Embed intelligent quality gates directly into your CI/CD pipeline
              to catch defects early and ship with confidence every sprint.
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
                Continuous integration and continuous deployment pipelines are the
                backbone of modern software delivery. Yet most CI/CD
                implementations treat testing as an afterthought &mdash; a step
                that runs at the end, takes too long, and produces results that are
                hard to interpret. When quality checks are bolted on rather than
                built in, teams face a painful tradeoff: slow down the pipeline
                for thorough testing, or skip tests to maintain velocity and hope
                nothing breaks in production.
              </p>
              <p className="feature-card-desc" style={{ marginBottom: 16 }}>
                WalnutAI&apos;s CI/CD Integration eliminates this tradeoff by
                embedding intelligent quality gates directly into your pipeline.
                Our native plugins for Jenkins, GitHub Actions, GitLab CI, Azure
                DevOps, and other popular platforms make setup effortless. Once
                connected, WalnutAI automatically triggers the right tests at the
                right time &mdash; smoke tests on every commit, targeted regression
                tests on merge requests, and comprehensive validation suites
                before production deployment.
              </p>
              <p className="feature-card-desc" style={{ marginBottom: 0 }}>
                The intelligence layer goes beyond simple pass/fail. WalnutAI
                analyzes code changes to determine which tests are relevant,
                running only what is needed to validate the change rather than the
                entire suite. Quality gates are fully configurable with thresholds
                for coverage, defect severity, performance, and security. When a
                gate blocks a build, detailed failure reports with AI-powered root
                cause analysis are posted directly to the pull request, giving
                developers immediate actionable feedback. The result is a pipeline
                that moves faster because quality is built into every step, not
                bolted on at the end. Teams ship with confidence knowing that
                every deployment has been validated against their exact standards.
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
              Ready to Add Quality Gates to Your Pipeline?
            </h2>
            <p
              style={{
                color: "#9ca3af",
                fontSize: 16,
                marginBottom: 28,
                lineHeight: 1.7,
              }}
            >
              Integrate WalnutAI into your CI/CD workflow and ship with
              confidence.
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
