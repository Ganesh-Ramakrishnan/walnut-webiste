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
            background: "#0a0a0a",
            padding: "80px 24px 60px",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <span style={{ fontSize: 48, display: "block", marginBottom: 16 }}>
              {"\u2601\uFE0F"}
            </span>
            <h1
              style={{
                color: "#fff",
                fontSize: 44,
                fontWeight: 800,
                marginBottom: 16,
                lineHeight: 1.15,
              }}
            >
              <span style={{ color: "#F17F0D" }}>AWS</span> Integration
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
              Leverage Amazon Web Services for cloud-native test execution.
              Store artifacts on S3, run tests on EC2, trigger workflows with
              Lambda, and monitor everything through CloudWatch.
            </p>
          </div>
        </section>

        {/* Overview */}
        <section style={{ background: "#0a0a0a", padding: "40px 24px 60px" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <h2
              style={{
                color: "#fff",
                fontSize: 28,
                fontWeight: 700,
                marginBottom: 20,
              }}
            >
              Overview
            </h2>
            <div style={{ color: "#b0b0b0", fontSize: 16, lineHeight: 1.8 }}>
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
        <section style={{ background: "#0a0a0a", padding: "40px 24px 60px" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <h2
              style={{
                color: "#fff",
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
                    background: "#111",
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
        <section style={{ background: "#0a0a0a", padding: "40px 24px 60px" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <h2
              style={{
                color: "#fff",
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
                    background: "#111",
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
            background: "#0a0a0a",
            padding: "40px 24px 100px",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: 600, margin: "0 auto" }}>
            <h2
              style={{
                color: "#fff",
                fontSize: 28,
                fontWeight: 700,
                marginBottom: 16,
              }}
            >
              Ready to integrate AWS?
            </h2>
            <p
              style={{
                color: "#999",
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
