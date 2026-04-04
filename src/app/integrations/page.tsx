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

const icons: Record<string, React.ReactNode> = {
  GitHub: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="#fff">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  ),
  GitLab: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="#E24329">
      <path d="M23.955 13.587l-1.342-4.135-2.664-8.189a.455.455 0 00-.867 0L16.418 9.45H7.582L4.918 1.263a.455.455 0 00-.867 0L1.387 9.452.045 13.587a.924.924 0 00.331 1.023L12 23.054l11.624-8.443a.92.92 0 00.331-1.024"/>
    </svg>
  ),
  Jira: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="#2684FF">
      <path d="M11.571 11.513H0a5.218 5.218 0 005.232 5.215h2.13v2.057A5.215 5.215 0 0012.575 24V12.518a1.005 1.005 0 00-1.005-1.005z"/>
      <path d="M6.19 6.323H17.714a5.215 5.215 0 00-5.214-5.218H10.37V-.952A5.218 5.218 0 005.185 4.26v11.489a1.005 1.005 0 001.005 1.005z" opacity=".65"/>
    </svg>
  ),
  Docker: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="#2496ED">
      <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185zm-2.954 0h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185zm-2.93 0h2.12a.186.186 0 00.184-.185V9.006a.186.186 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185zm-2.964 0h2.12a.186.186 0 00.184-.185V9.006a.186.186 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.184.185zm2.964-2.442h2.12a.186.186 0 00.184-.185V6.564a.186.186 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185zm2.93 0h2.118a.186.186 0 00.186-.185V6.564a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185zm2.954 0h2.119a.186.186 0 00.186-.185V6.564a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185zm0-2.442h2.119a.186.186 0 00.186-.185V4.122a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185zm-5.884 7.154c.018-.404.164-.776.437-1.066a4.788 4.788 0 00-.848-.366c-1.14-.4-2.062-.188-2.553.587-.327.516-.382 1.107-.362 1.705.055 1.646 1.208 2.86 2.767 2.982.7.055 1.395-.083 2.018-.402-.487-.62-.734-1.38-.634-2.157-.506-.137-.87-.58-.825-1.283z"/>
    </svg>
  ),
  Kubernetes: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="#326CE5">
      <path d="M10.204 14.35l.007.01-.999 2.413a5.171 5.171 0 01-2.075-2.597l2.578-.437.004.005a.44.44 0 01.485.606zm3.592 0a.44.44 0 01.485-.606l.004-.005 2.577.437a5.165 5.165 0 01-2.075 2.597l-.999-2.413.008-.01zm-1.8 1.683a.44.44 0 01-.785 0l-.006-.01-1.74-2.229a5.174 5.174 0 003.278 0l-1.74 2.23-.007.009zM12 6.8c-.898 0-1.778.241-2.553.697l1.156 1.98.008.007a.44.44 0 01-.293.716l-.01.002L7.6 10.86a5.169 5.169 0 01.14-2.993L10.47 9.55l.004.004a.44.44 0 01.717-.293l.008.007 1.98 1.157A5.158 5.158 0 0012 6.8zm4.26 4.06l-2.708-.658-.01-.002a.44.44 0 01-.293-.716l.008-.007 1.157-1.98a5.174 5.174 0 012.064 3.86l-.218-.497zm-8.52 0l-.218.498a5.174 5.174 0 012.064-3.86l1.157 1.98.007.007a.44.44 0 01-.293.716l-.01.002-2.707.657z"/>
      <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 21.6c-5.292 0-9.6-4.308-9.6-9.6S6.708 2.4 12 2.4s9.6 4.308 9.6 9.6-4.308 9.6-9.6 9.6z"/>
    </svg>
  ),
  AWS: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="#FF9900">
      <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 01-.208.072c-.08 0-.16-.04-.24-.112a2.47 2.47 0 01-.287-.374 6.18 6.18 0 01-.248-.467c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.256-.248-.686-.367-1.3-.367-.28 0-.568.032-.863.104-.296.072-.583.16-.863.272a2.287 2.287 0 01-.28.104.488.488 0 01-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 01.224-.167c.28-.144.616-.264 1.01-.36a4.84 4.84 0 011.244-.152c.95 0 1.644.216 2.091.647.44.43.662 1.085.662 1.963v2.586z"/>
      <path d="M18.749 14.997c-2.327 1.04-4.763 1.548-7.264 1.548-3.584 0-6.598-1.184-9.024-3.08-.343-.279-.04-.664.38-.448 2.585 1.355 5.747 2.157 9.05 2.157 2.343 0 4.906-.45 7.22-1.39.35-.14.647.236.31.475l-.672.738z"/>
      <path d="M19.883 13.774c-.465-.576-3.076-.277-4.253-.14-.359.041-.415-.267-.093-.497 2.08-1.412 5.494-.998 5.894-.535.391.472-.111 3.68-2.068 5.214-.296.24-.583.111-.45-.207.44-1.085 1.431-3.267.97-3.835z"/>
    </svg>
  ),
  Figma: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
      <path d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z" fill="#0ACF83"/>
      <path d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z" fill="#A259FF"/>
      <path d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z" fill="#F24E1E"/>
      <path d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z" fill="#FF7262"/>
      <path d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z" fill="#1ABCFE"/>
    </svg>
  ),
  Playwright: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="#2EAD33">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
    </svg>
  ),
};

const categories = [
  {
    heading: "Source Control & CI/CD",
    integrations: [
      { name: "GitHub", description: "Sync repos, PRs, and enforce quality gates on every commit.", href: "/integrations/github" },
      { name: "GitLab", description: "Connect repos, pipelines, and merge requests for full visibility.", href: "/integrations/gitlab" },
    ],
  },
  {
    heading: "Project Management",
    integrations: [
      { name: "Jira", description: "Sync stories, link requirements, and maintain end-to-end traceability.", href: "/integrations/jira" },
    ],
  },
  {
    heading: "Infrastructure & Cloud",
    integrations: [
      { name: "Docker", description: "Run containerized test execution in isolated, reproducible environments.", href: "/integrations/docker" },
      { name: "Kubernetes", description: "Orchestrate scalable test workloads across distributed clusters.", href: "/integrations/kubernetes" },
      { name: "AWS", description: "Leverage S3, EC2, Lambda, and CloudWatch for cloud-native testing.", href: "/integrations/aws" },
    ],
  },
  {
    heading: "Design & Testing",
    integrations: [
      { name: "Figma", description: "Transform design files into requirements and test cases automatically.", href: "/integrations/figma" },
      { name: "Playwright", description: "Import, generate, and execute browser automation scripts at scale.", href: "/integrations/playwright" },
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
                      <span style={{ display: "block", marginBottom: 12 }}>
                        {icons[item.name]}
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
