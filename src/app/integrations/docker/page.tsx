import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Docker Integration - Containerized Test Execution",
  description:
    "Integrate WalnutAI with Docker to run test suites in isolated, reproducible containers. Ensure consistent test environments, parallel execution, and clean-room reliability for every run.",
  openGraph: {
    title: "Docker Integration - Containerized Test Execution",
    description:
      "Run test suites in isolated, reproducible containers with WalnutAI and Docker.",
    url: "https://www.walnutai.ai/integrations/docker",
  },
  twitter: {
    card: "summary_large_image",
    title: "Docker Integration - Containerized Test Execution",
    description:
      "Run test suites in isolated, reproducible containers with WalnutAI and Docker.",
  },
  alternates: {
    canonical: "https://www.walnutai.ai/integrations/docker",
  },
};

const setupSteps = [
  {
    number: "01",
    title: "Configure Docker Endpoint",
    description:
      "Point WalnutAI to your Docker daemon or remote Docker host. Supports Docker Engine, Docker Desktop, and container registries for pulling pre-built test environment images.",
  },
  {
    number: "02",
    title: "Define Test Images",
    description:
      "Specify the Docker images your tests require. Use existing images from Docker Hub, your private registry, or let WalnutAI generate optimized Dockerfiles for your test stack.",
  },
  {
    number: "03",
    title: "Set Resource Limits",
    description:
      "Configure CPU, memory, and network constraints for test containers. Define concurrency limits to control how many containers run simultaneously based on your infrastructure capacity.",
  },
  {
    number: "04",
    title: "Launch Containerized Tests",
    description:
      "Trigger test runs that automatically spin up containers, execute test suites, collect results, and tear down environments. Every run starts from a clean state for full reproducibility.",
  },
];

const capabilities = [
  {
    title: "Isolated Test Environments",
    description:
      "Every test run executes inside a fresh container with no shared state. This eliminates flaky tests caused by leftover data, conflicting dependencies, or environment drift between runs.",
  },
  {
    title: "Parallel Container Execution",
    description:
      "Split large test suites across multiple containers running in parallel. WalnutAI intelligently distributes tests to minimize total execution time while respecting resource limits.",
  },
  {
    title: "Custom Image Management",
    description:
      "Build, cache, and version test environment images. WalnutAI tracks which image versions produce which results, making it easy to identify environment-related regressions.",
  },
  {
    title: "Docker Compose Support",
    description:
      "For integration and end-to-end tests that need databases, message queues, or APIs, WalnutAI orchestrates multi-container environments using Docker Compose configurations.",
  },
  {
    title: "Artifact & Log Collection",
    description:
      "Test results, screenshots, logs, and coverage reports are automatically extracted from containers before teardown. All artifacts are indexed and linked to the originating test case.",
  },
];

export default function DockerIntegrationPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: 80 }}>
        {/* Hero */}
        <section
          style={{
            background: "var(--bg-page)",
            padding: "80px 24px 60px",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <span style={{ fontSize: 48, display: "block", marginBottom: 16 }}>
              {"\uD83D\uDC33"}
            </span>
            <h1
              style={{
                color: "var(--text-primary)",
                fontSize: 44,
                fontWeight: 800,
                marginBottom: 16,
                lineHeight: 1.15,
              }}
            >
              <span style={{ color: "#F17F0D" }}>Docker</span> Integration
            </h1>
            <p
              style={{
                color: "#b0b0b0",
                fontSize: 18,
                lineHeight: 1.7,
                maxWidth: 640,
                margin: "0 auto",
              }}
            >
              Run every test suite inside isolated, reproducible containers.
              WalnutAI and Docker together eliminate environment inconsistencies
              and guarantee clean-room test execution.
            </p>
          </div>
        </section>

        {/* Overview */}
        <section style={{ background: "var(--bg-page)", padding: "40px 24px 60px" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <h2
              style={{
                color: "var(--text-primary)",
                fontSize: 28,
                fontWeight: 700,
                marginBottom: 20,
              }}
            >
              Overview
            </h2>
            <div style={{ color: "#b0b0b0", fontSize: 16, lineHeight: 1.8 }}>
              <p>
                Flaky tests and environment drift are among the most frustrating
                problems in software testing. Docker integration solves this by
                ensuring every test run starts from an identical, version-controlled
                container image. WalnutAI leverages Docker to create disposable
                test environments that are spun up on demand, used once, and
                discarded, guaranteeing that results are always reproducible.
              </p>
              <p style={{ marginTop: 16 }}>
                For teams running complex integration tests, WalnutAI supports
                Docker Compose workflows that stand up entire application stacks
                including databases, caches, and third-party service mocks. Tests
                execute against a realistic environment without polluting shared
                staging servers or waiting for infrastructure provisioning. When
                a test fails, the exact container state can be inspected or
                re-created for debugging.
              </p>
              <p style={{ marginTop: 16 }}>
                Performance is a first-class concern. WalnutAI distributes test
                suites across parallel containers, using intelligent sharding to
                balance execution time. Image layers are cached aggressively to
                minimize startup latency, and resource limits prevent runaway
                containers from affecting other workloads. The result is faster,
                more reliable test feedback without compromising environment
                fidelity.
              </p>
            </div>
          </div>
        </section>

        {/* Setup Steps */}
        <section style={{ background: "var(--bg-page)", padding: "40px 24px 60px" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <h2
              style={{
                color: "var(--text-primary)",
                fontSize: 28,
                fontWeight: 700,
                marginBottom: 32,
              }}
            >
              Setup in 4 Steps
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {setupSteps.map((step) => (
                <div
                  key={step.number}
                  style={{
                    display: "flex",
                    gap: 20,
                    background: "var(--bg-surface)",
                    border: "1px solid #222",
                    borderRadius: 12,
                    padding: "24px",
                  }}
                >
                  <span
                    style={{
                      color: "#F17F0D",
                      fontSize: 28,
                      fontWeight: 800,
                      lineHeight: 1,
                      minWidth: 40,
                    }}
                  >
                    {step.number}
                  </span>
                  <div>
                    <h3
                      style={{
                        color: "var(--text-primary)",
                        fontSize: 18,
                        fontWeight: 700,
                        marginBottom: 8,
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      style={{
                        color: "#999",
                        fontSize: 14,
                        lineHeight: 1.7,
                        margin: 0,
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

        {/* Capabilities */}
        <section style={{ background: "var(--bg-page)", padding: "40px 24px 60px" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <h2
              style={{
                color: "var(--text-primary)",
                fontSize: 28,
                fontWeight: 700,
                marginBottom: 32,
              }}
            >
              Key Capabilities
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {capabilities.map((cap) => (
                <div
                  key={cap.title}
                  style={{
                    background: "var(--bg-surface)",
                    border: "1px solid #222",
                    borderRadius: 12,
                    padding: "24px",
                  }}
                >
                  <h3
                    style={{
                      color: "#F17F0D",
                      fontSize: 17,
                      fontWeight: 700,
                      marginBottom: 8,
                    }}
                  >
                    {cap.title}
                  </h3>
                  <p
                    style={{
                      color: "#999",
                      fontSize: 14,
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {cap.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          style={{
            background: "var(--bg-page)",
            padding: "40px 24px 100px",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: 600, margin: "0 auto" }}>
            <h2
              style={{
                color: "var(--text-primary)",
                fontSize: 28,
                fontWeight: 700,
                marginBottom: 16,
              }}
            >
              Ready to integrate Docker?
            </h2>
            <p
              style={{
                color: "#999",
                fontSize: 16,
                marginBottom: 32,
                lineHeight: 1.7,
              }}
            >
              Eliminate flaky tests with containerized execution. Our team will
              help you set up optimized Docker images for your test environments.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link
                href="/contact"
                style={{
                  display: "inline-block",
                  background: "#F17F0D",
                  color: "#fff",
                  padding: "14px 32px",
                  borderRadius: 8,
                  fontWeight: 700,
                  fontSize: 15,
                  textDecoration: "none",
                }}
              >
                Contact Us
              </Link>
              <Link
                href="/integrations"
                style={{
                  display: "inline-block",
                  background: "transparent",
                  color: "#F17F0D",
                  padding: "14px 32px",
                  borderRadius: 8,
                  fontWeight: 700,
                  fontSize: 15,
                  textDecoration: "none",
                  border: "1px solid #F17F0D",
                }}
              >
                All Integrations
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
