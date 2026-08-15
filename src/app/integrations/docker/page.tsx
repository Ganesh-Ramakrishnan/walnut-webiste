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
            background: "var(--surface-2b)",
            padding: "80px 24px 60px",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <span style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
              <svg width="56" height="56" viewBox="0 0 24 24" fill="#2496ED"><path d="M13.983 11.078h2.119a.186.186 0 00.186-.186V9.006a.186.186 0 00-.186-.186h-2.119a.186.186 0 00-.187.186v1.886c0 .103.084.186.187.186zm-2.954-5.43h2.118a.186.186 0 00.187-.185V3.577a.186.186 0 00-.187-.186h-2.118a.186.186 0 00-.187.186v1.886c0 .102.084.185.187.185zm0 2.716h2.118a.187.187 0 00.187-.186V6.292a.187.187 0 00-.187-.186h-2.118a.187.187 0 00-.187.186v1.886c0 .103.084.186.187.186zm-2.93 0h2.12a.186.186 0 00.186-.186V6.292a.186.186 0 00-.186-.186h-2.12a.186.186 0 00-.184.186v1.886c0 .103.083.186.185.186zm-2.964 0h2.119a.186.186 0 00.185-.186V6.292a.186.186 0 00-.185-.186H5.136a.186.186 0 00-.186.186v1.886c0 .103.084.186.186.186zm5.893 2.715h2.118a.186.186 0 00.187-.186V9.006a.186.186 0 00-.187-.186h-2.118a.186.186 0 00-.187.186v1.886c0 .103.084.186.187.186zm-2.93 0h2.12a.186.186 0 00.186-.186V9.006a.186.186 0 00-.186-.186h-2.12a.186.186 0 00-.184.186v1.886c0 .103.083.186.185.186zm-2.964 0h2.119a.186.186 0 00.185-.186V9.006a.186.186 0 00-.185-.186H5.136a.186.186 0 00-.186.186v1.886c0 .103.084.186.186.186zm-2.92 0h2.12a.187.187 0 00.186-.186V9.006a.187.187 0 00-.186-.186h-2.12a.187.187 0 00-.186.186v1.886c0 .103.084.186.186.186zM23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.687 11.687 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.028 12.028 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288z"/></svg>
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
              <span style={{ color: "var(--accent)" }}>Docker</span> Integration
            </h1>
            <p
              style={{
                color: "var(--text-soft)",
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
        <section style={{ background: "var(--surface-2b)", padding: "40px 24px 60px" }}>
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
            <div style={{ color: "var(--text-soft)", fontSize: 16, lineHeight: 1.8 }}>
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
        <section style={{ background: "var(--surface-2b)", padding: "40px 24px 60px" }}>
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
                    background: "var(--surface-2)",
                    border: "1px solid var(--border-grey)",
                    borderRadius: 12,
                    padding: "24px",
                  }}
                >
                  <span
                    style={{
                      color: "var(--accent)",
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
                        color: "var(--text-faint)",
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
        <section style={{ background: "var(--surface-2b)", padding: "40px 24px 60px" }}>
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
                    background: "var(--surface-2)",
                    border: "1px solid var(--border-grey)",
                    borderRadius: 12,
                    padding: "24px",
                  }}
                >
                  <h3
                    style={{
                      color: "var(--accent)",
                      fontSize: 17,
                      fontWeight: 700,
                      marginBottom: 8,
                    }}
                  >
                    {cap.title}
                  </h3>
                  <p
                    style={{
                      color: "var(--text-faint)",
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
            background: "var(--surface-2b)",
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
                color: "var(--text-faint)",
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
                  background: "var(--accent)",
                  color: "var(--text-on-accent)",
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
                  color: "var(--accent)",
                  padding: "14px 32px",
                  borderRadius: 8,
                  fontWeight: 700,
                  fontSize: 15,
                  textDecoration: "none",
                  border: "1px solid var(--accent)",
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
