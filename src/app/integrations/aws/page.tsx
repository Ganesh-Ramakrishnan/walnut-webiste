import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AWS Integration - S3, EC2, Lambda & CloudWatch for Testing",
  description:
    "Integrate WalnutAI with AWS to store test artifacts on S3, run tests on EC2, trigger serverless workflows with Lambda, and monitor execution via CloudWatch dashboards.",
  openGraph: {
    title: "AWS Integration - S3, EC2, Lambda & CloudWatch for Testing",
    description:
      "Leverage S3, EC2, Lambda, and CloudWatch for cloud-native test execution with WalnutAI.",
    url: "https://www.walnutai.ai/integrations/aws",
  },
  twitter: {
    card: "summary_large_image",
    title: "AWS Integration - S3, EC2, Lambda & CloudWatch for Testing",
    description:
      "Leverage S3, EC2, Lambda, and CloudWatch for cloud-native test execution with WalnutAI.",
  },
  alternates: {
    canonical: "https://www.walnutai.ai/integrations/aws",
  },
};

const setupSteps = [
  {
    number: "01",
    title: "Configure IAM Credentials",
    description:
      "Create a dedicated IAM role or user with the minimum permissions WalnutAI needs. Use cross-account roles for added security, or connect via AWS SSO for enterprise environments.",
  },
  {
    number: "02",
    title: "Select AWS Services",
    description:
      "Choose which AWS services to enable: S3 for artifact storage, EC2 for compute, Lambda for event-driven workflows, and CloudWatch for monitoring. Each service is configured independently.",
  },
  {
    number: "03",
    title: "Define Storage & Compute",
    description:
      "Set up S3 buckets for test reports and artifacts, choose EC2 instance types for test runners, and configure Lambda functions for lightweight triggers and notifications.",
  },
  {
    number: "04",
    title: "Enable Monitoring Dashboards",
    description:
      "WalnutAI publishes custom metrics and logs to CloudWatch. Configure dashboards, alarms, and log groups to monitor test execution health, cost, and performance in real time.",
  },
];

const capabilities = [
  {
    title: "S3 Artifact Storage",
    description:
      "All test reports, screenshots, logs, and coverage data are automatically uploaded to S3 with configurable retention policies. Artifacts are versioned and accessible via pre-signed URLs.",
  },
  {
    title: "EC2 Test Compute",
    description:
      "Provision EC2 instances on demand for compute-intensive test suites. WalnutAI manages instance lifecycles, launching the right instance type and terminating it when tests complete.",
  },
  {
    title: "Lambda Event Triggers",
    description:
      "Use Lambda functions to trigger test runs on events like deployments, S3 uploads, or API Gateway requests. Serverless triggers ensure near-instant response to pipeline events.",
  },
  {
    title: "CloudWatch Observability",
    description:
      "Monitor test execution metrics, set alarms for failure thresholds, and stream test logs to CloudWatch Logs. Unified dashboards provide a single pane of glass for all testing activity.",
  },
  {
    title: "VPC & Security Group Support",
    description:
      "Run test infrastructure inside your VPC with fine-grained security group rules. Access private APIs, databases, and internal services without exposing them to the public internet.",
  },
];

export default function AWSIntegrationPage() {
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
              <svg width="56" height="56" viewBox="0 0 64 64" fill="none"><path d="M36.8 43.1c0 .6-.1 1.1-.2 1.4-.1.3-.3.7-.5 1.1-.1.1-.1.2-.1.3 0 .2.1.3.3.5l1 .7c.1.1.3.1.4.1.2 0 .3-.1.5-.3.2-.3.4-.5.5-.8.2-.3.3-.7.5-1.1 1.3 1.5 2.8 2.2 4.7 2.2 1.4 0 2.4-.4 3.2-1.1.8-.8 1.1-1.7 1.1-3 0-.7-.1-1.3-.4-1.8-.3-.5-.6-.9-1.1-1.2-.5-.3-1-.6-1.5-.8-.5-.2-1.1-.4-1.8-.5-.9-.2-1.6-.4-2-.7-.4-.2-.6-.6-.6-1.1 0-.4.2-.8.5-1.1.4-.3.8-.4 1.5-.4.3 0 .7 0 1.1.1.4.1.8.2 1.1.3.2.1.3.1.4.1s.2 0 .2-.1c.1-.1.1-.2.1-.4v-.4c0-.2 0-.3-.1-.4 0-.1-.1-.1-.2-.2-.3-.1-.7-.3-1.1-.4-.5-.1-.9-.2-1.4-.2-1.5 0-2.6.4-3.4 1.2-.8.8-1.1 1.8-1.1 3 0 1.3.5 2.3 1.6 3.1.5.4 1.3.7 2.4 1 .8.2 1.4.4 1.8.7.4.2.6.4.8.6.2.3.2.6.2.9 0 .6-.2 1-.6 1.4-.4.3-1 .5-1.7.5-1 0-2-.4-3-1.1-.2-.1-.3-.2-.4-.2-.2 0-.3.1-.4.3l-.8 1.1z" fill="#FF9900"/><path d="M18.3 27.4c0 .6-.1 1.1-.2 1.4-.1.3-.3.7-.5 1.1-.1.1-.1.2-.1.3 0 .2.1.3.3.5l1 .7c.1.1.3.1.4.1.2 0 .3-.1.5-.3.2-.3.4-.5.5-.8.2-.3.3-.7.5-1.1 1.3 1.5 2.8 2.2 4.7 2.2 1.4 0 2.4-.4 3.2-1.1.8-.8 1.1-1.7 1.1-3 0-1.4-.5-2.5-1.6-3.3-.5-.3-1.3-.7-2.4-1-.8-.2-1.4-.4-1.8-.7-.4-.2-.6-.4-.8-.6-.1-.3-.2-.5-.2-.9 0-.5.2-.9.5-1.2.4-.3.8-.4 1.5-.4.3 0 .7 0 1.1.1.4.1.8.2 1.1.3.2.1.3.1.4.1s.2 0 .2-.1c.1-.1.1-.2.1-.4v-.4c0-.2 0-.3-.1-.4 0-.1-.1-.1-.2-.2-.3-.1-.7-.3-1.1-.4-.5-.1-.9-.2-1.4-.2-1.5 0-2.6.4-3.4 1.2-.8.8-1.1 1.8-1.1 3 0 1.3.5 2.3 1.6 3.1.5.4 1.3.7 2.4 1 .8.2 1.4.4 1.8.7.4.2.6.4.8.6.1.3.2.6.2.9 0 .6-.2 1-.6 1.4-.4.3-1 .5-1.7.5-1 0-2-.4-3-1.1-.2-.1-.3-.2-.4-.2-.2 0-.3.1-.4.3l-.8 1.1z" fill="#FF9900"/><path fillRule="evenodd" clipRule="evenodd" d="M48.2 40c-6 2.6-12.2 4-18.6 4-9.2 0-17-3-23.2-8-.8-.8-.2-1.8 1-1.2 6.6 3.4 14.8 5.6 23.2 5.6 6 0 12.6-1.2 18.6-3.6 1-.4 1.6.6.8 1.2l-1.8 2z" fill="#FF9900"/><path fillRule="evenodd" clipRule="evenodd" d="M51 36.8c-1.2-1.4-8-.8-11-.4-1 .2-1-.6-.2-1.2 5.4-3.6 14.2-2.6 15.2-1.4 1 1.2-.2 9.4-5.4 13.4-.8.6-1.4.2-1.2-.6 1.2-2.8 3.6-8.4 2.6-9.8z" fill="#FF9900"/></svg>
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
              <span style={{ color: "var(--accent)" }}>AWS</span> Integration
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
              Leverage Amazon Web Services for cloud-native test execution.
              Store artifacts on S3, run tests on EC2, trigger workflows with
              Lambda, and monitor everything through CloudWatch.
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
                Most engineering teams already run their infrastructure on AWS,
                and WalnutAI&apos;s native integration lets your testing
                ecosystem take full advantage of the cloud services you already
                pay for. Rather than adding another vendor&apos;s infrastructure,
                WalnutAI plugs directly into your AWS account to use S3, EC2,
                Lambda, and CloudWatch for test execution, storage, and
                observability.
              </p>
              <p style={{ marginTop: 16 }}>
                Test artifacts like reports, screenshots, and coverage files are
                stored in your own S3 buckets with your retention and access
                policies. Compute-intensive test suites can burst onto EC2
                instances that WalnutAI provisions and tears down automatically,
                so you only pay for what you use. For event-driven workflows,
                Lambda functions trigger test runs in response to deployments,
                code pushes, or scheduled events with near-zero latency.
              </p>
              <p style={{ marginTop: 16 }}>
                CloudWatch ties everything together with real-time metrics,
                alarms, and log aggregation. You can monitor test execution
                health alongside your application metrics, set failure rate
                alarms, and drill into individual test run logs without leaving
                the AWS console. For teams with strict network requirements, all
                components run inside your VPC with configurable security groups
                and private endpoint support.
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
              Ready to integrate AWS?
            </h2>
            <p
              style={{
                color: "var(--text-faint)",
                fontSize: 16,
                marginBottom: 32,
                lineHeight: 1.7,
              }}
            >
              Use the cloud infrastructure you already have. Our team will help
              you configure IAM roles, S3 buckets, and CloudWatch dashboards.
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
