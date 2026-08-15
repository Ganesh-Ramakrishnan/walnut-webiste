import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Kubernetes Integration - Scalable Test Orchestration",
  description:
    "Integrate WalnutAI with Kubernetes to orchestrate test workloads across distributed clusters. Auto-scale test execution, manage resources dynamically, and run thousands of tests in parallel.",
  openGraph: {
    title: "Kubernetes Integration - Scalable Test Orchestration",
    description:
      "Orchestrate test workloads across distributed clusters with WalnutAI and Kubernetes.",
    url: "https://www.walnutai.ai/integrations/kubernetes",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kubernetes Integration - Scalable Test Orchestration",
    description:
      "Orchestrate test workloads across distributed clusters with WalnutAI and Kubernetes.",
  },
  alternates: {
    canonical: "https://www.walnutai.ai/integrations/kubernetes",
  },
};

const setupSteps = [
  {
    number: "01",
    title: "Connect Your Cluster",
    description:
      "Provide WalnutAI with kubeconfig access to your Kubernetes cluster. Supports EKS, GKE, AKS, and self-managed clusters. Role-based access ensures WalnutAI only operates within designated namespaces.",
  },
  {
    number: "02",
    title: "Define Test Namespaces",
    description:
      "Create dedicated namespaces for test workloads. WalnutAI provisions resources within these namespaces, isolating test execution from production and development workloads.",
  },
  {
    number: "03",
    title: "Configure Auto-Scaling Rules",
    description:
      "Set scaling policies that control how WalnutAI expands and contracts test pods. Define minimum and maximum replicas, resource requests, and scaling triggers based on queue depth.",
  },
  {
    number: "04",
    title: "Deploy Test Runners",
    description:
      "WalnutAI deploys lightweight test runner pods to your cluster. These pods pull test suites, execute them, report results, and terminate automatically when the run completes.",
  },
];

const capabilities = [
  {
    title: "Dynamic Auto-Scaling",
    description:
      "Test workloads scale up and down automatically based on demand. When a large test suite is queued, WalnutAI spins up additional pods. When tests complete, resources are released back to the cluster.",
  },
  {
    title: "Distributed Test Execution",
    description:
      "Split test suites across dozens or hundreds of pods running in parallel. WalnutAI coordinates execution, collects results from all pods, and assembles a unified report.",
  },
  {
    title: "Namespace Isolation",
    description:
      "Test workloads run in dedicated namespaces with strict resource quotas and network policies. This prevents test execution from impacting production services sharing the same cluster.",
  },
  {
    title: "Multi-Cluster Support",
    description:
      "Distribute tests across multiple Kubernetes clusters in different regions or cloud providers. WalnutAI routes test workloads to the optimal cluster based on availability and latency.",
  },
  {
    title: "Helm Chart & Operator",
    description:
      "Deploy WalnutAI test infrastructure using a Helm chart or Kubernetes Operator. Manage configuration declaratively, integrate with GitOps workflows, and track deployments via standard Kubernetes tooling.",
  },
];

export default function KubernetesIntegrationPage() {
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
              <svg width="56" height="56" viewBox="0 0 32 32" fill="none"><path d="M15.9 1.1a2.2 2.2 0 00-1.1.3L4.5 7.5a2.2 2.2 0 00-1.1 1.9v12.2a2.2 2.2 0 001.1 1.9l10.3 6.1a2.2 2.2 0 002.2 0l10.3-6.1a2.2 2.2 0 001.1-1.9V9.4a2.2 2.2 0 00-1.1-1.9L17 1.4a2.2 2.2 0 00-1.1-.3z" fill="#326CE5"/><path d="M16 7.6c-.3 0-.5.2-.6.5l-.7 4.2-.1.5-3.4-2.6c-.2-.2-.5-.2-.8 0-.2.2-.3.5-.2.8l1.3 4-.2.5-4.3-.4c-.3 0-.6.1-.7.4-.1.3 0 .6.3.8l3.7 2.2.3.4-2.7 3.3c-.2.2-.2.6 0 .8.2.2.5.3.8.1l3.8-1.9.4.2.8 4.2c.1.3.3.5.6.5s.5-.2.6-.5l.8-4.2.4-.2 3.8 1.9c.3.1.6.1.8-.1.2-.2.2-.6 0-.8l-2.7-3.3.3-.4 3.7-2.2c.3-.2.4-.5.3-.8-.1-.3-.4-.5-.7-.4l-4.3.4-.2-.5 1.3-4c.1-.3 0-.6-.2-.8-.2-.2-.6-.2-.8 0l-3.4 2.6-.1-.5-.7-4.2c-.1-.3-.3-.5-.6-.5z" fill="#fff"/></svg>
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
              <span style={{ color: "var(--accent)" }}>Kubernetes</span> Integration
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
              Orchestrate test workloads across distributed Kubernetes clusters.
              Auto-scale execution, manage resources dynamically, and run
              thousands of tests in parallel.
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
                As test suites grow, single-machine execution becomes a
                bottleneck. Kubernetes integration lets WalnutAI distribute test
                workloads across a cluster of machines, running hundreds of tests
                simultaneously while managing infrastructure automatically. The
                result is dramatically faster feedback loops without manual
                capacity planning.
              </p>
              <p style={{ marginTop: 16 }}>
                WalnutAI deploys ephemeral test runner pods that pull test suites
                from a queue, execute them in isolation, report results, and
                terminate. Auto-scaling policies ensure the cluster expands when
                demand peaks, such as after a major merge, and contracts during
                quiet periods to minimize cost. Each pod runs in a dedicated
                namespace with strict resource quotas, so test execution never
                impacts production workloads sharing the same cluster.
              </p>
              <p style={{ marginTop: 16 }}>
                For enterprises with multi-cloud or multi-region requirements,
                WalnutAI supports routing tests to different clusters based on
                geographic proximity, cloud provider, or available capacity.
                Infrastructure is managed declaratively via Helm charts or a
                Kubernetes Operator, fitting naturally into GitOps workflows and
                existing platform engineering practices.
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
              Ready to integrate Kubernetes?
            </h2>
            <p
              style={{
                color: "var(--text-faint)",
                fontSize: 16,
                marginBottom: 32,
                lineHeight: 1.7,
              }}
            >
              Scale your test execution across clusters. Our team will help you
              configure namespaces, auto-scaling, and distributed test runners.
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
