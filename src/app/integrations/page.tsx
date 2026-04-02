import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Integrations - Connect Your Development Tools",
  description:
    "Connect WalnutAI with GitHub, GitLab, Jira, Docker, Kubernetes, AWS, Figma, and Playwright. Seamlessly integrate your development, testing, and deployment tools into one AI-powered ecosystem.",
  openGraph: {
    title: "Integrations - Connect Your Development Tools",
    description:
      "Connect WalnutAI with GitHub, GitLab, Jira, Docker, Kubernetes, AWS, Figma, and Playwright. Seamlessly integrate your entire toolchain.",
    url: "https://www.walnutai.ai/integrations",
  },
  twitter: {
    card: "summary_large_image",
    title: "Integrations - Connect Your Development Tools",
    description:
      "Connect WalnutAI with GitHub, GitLab, Jira, Docker, Kubernetes, AWS, Figma, and Playwright.",
  },
  alternates: {
    canonical: "https://www.walnutai.ai/integrations",
  },
};

const categories = [
  {
    heading: "Source Control & CI/CD",
    integrations: [
      {
        emoji: "\uD83D\uDC19",
        name: "GitHub",
        description: "Sync repos, PRs, and enforce quality gates on every commit.",
        href: "/integrations/github",
      },
      {
        emoji: "\uD83E\uDD8A",
        name: "GitLab",
        description: "Connect repos, pipelines, and merge requests for full visibility.",
        href: "/integrations/gitlab",
      },
    ],
  },
  {
    heading: "Project Management",
    integrations: [
      {
        emoji: "\uD83D\uDCCB",
        name: "Jira",
        description: "Sync stories, link requirements, and maintain end-to-end traceability.",
        href: "/integrations/jira",
      },
    ],
  },
  {
    heading: "Infrastructure & Cloud",
    integrations: [
      {
        emoji: "\uD83D\uDC33",
        name: "Docker",
        description: "Run containerized test execution in isolated, reproducible environments.",
        href: "/integrations/docker",
      },
      {
        emoji: "\u2638\uFE0F",
        name: "Kubernetes",
        description: "Orchestrate scalable test workloads across distributed clusters.",
        href: "/integrations/kubernetes",
      },
      {
        emoji: "\u2601\uFE0F",
        name: "AWS",
        description: "Leverage S3, EC2, Lambda, and CloudWatch for cloud-native testing.",
        href: "/integrations/aws",
      },
    ],
  },
  {
    heading: "Design & Testing",
    integrations: [
      {
        emoji: "\uD83C\uDFA8",
        name: "Figma",
        description: "Transform design files into requirements and test cases automatically.",
        href: "/integrations/figma",
      },
      {
        emoji: "\uD83C\uDFAD",
        name: "Playwright",
        description: "Import, generate, and execute browser automation scripts at scale.",
        href: "/integrations/playwright",
      },
    ],
  },
];

export default function IntegrationsPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: 80 }}>
        {/* Hero */}
        <section
          style={{
            background: "#0a0a0a",
            padding: "80px 24px 40px",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <h1
              style={{
                color: "#fff",
                fontSize: 44,
                fontWeight: 800,
                marginBottom: 16,
                lineHeight: 1.15,
              }}
            >
              Connect Your{" "}
              <span style={{ color: "#F17F0D" }}>Development Tools</span>
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
              WalnutAI integrates with the tools your team already uses.
              From source control to cloud infrastructure, bring your entire
              workflow into one AI-powered ecosystem.
            </p>
          </div>
        </section>

        {/* Integration Grid by Category */}
        <section
          style={{
            background: "#0a0a0a",
            padding: "40px 24px 100px",
          }}
        >
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            {categories.map((cat) => (
              <div key={cat.heading} style={{ marginBottom: 56 }}>
                <h2
                  style={{
                    color: "#F17F0D",
                    fontSize: 14,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: 1.5,
                    marginBottom: 20,
                  }}
                >
                  {cat.heading}
                </h2>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                    gap: 20,
                  }}
                >
                  {cat.integrations.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      style={{
                        display: "block",
                        background: "#111111",
                        border: "1px solid #222",
                        borderRadius: 12,
                        padding: "28px 24px",
                        textDecoration: "none",
                        transition: "border-color 0.2s",
                      }}
                    >
                      <span style={{ fontSize: 32, display: "block", marginBottom: 12 }}>
                        {item.emoji}
                      </span>
                      <h3
                        style={{
                          color: "#fff",
                          fontSize: 20,
                          fontWeight: 700,
                          marginBottom: 8,
                        }}
                      >
                        {item.name}
                      </h3>
                      <p
                        style={{
                          color: "#999",
                          fontSize: 14,
                          lineHeight: 1.6,
                          margin: 0,
                        }}
                      >
                        {item.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
