import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Integrations - Your Tools. Your Workflow. Now Supercharged by AI.",
  description:
    "WalnutAI plugs directly into GitHub, GitLab, Bitbucket, Jira, Azure DevOps, and Figma. No new workflows. No learning curves. Just AI-powered gap analysis, test generation, and traceability.",
  openGraph: {
    title: "Integrations - Your Tools. Your Workflow. Now Supercharged by AI.",
    description: "WalnutAI plugs directly into the tools your engineering, QA, and product teams already use.",
    url: "https://www.walnutai.ai/integrations",
    siteName: "WalnutAI",
    type: "website",
  },
  alternates: { canonical: "https://www.walnutai.ai/integrations" },
};

/* ── Icon components ── */
const icons: Record<string, React.ReactNode> = {
  GitHub: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  ),
  GitLab: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M23.955 13.587l-1.342-4.135-2.664-8.189a.455.455 0 00-.867 0L16.418 9.45H7.582L4.918 1.263a.455.455 0 00-.867 0L1.387 9.452.045 13.587a.924.924 0 00.331 1.023L12 23.054l11.624-8.443a.92.92 0 00.331-1.024" fill="#E24329" />
    </svg>
  ),
  Jira: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M11.571 11.513H0a5.218 5.218 0 005.232 5.215h2.13v2.057A5.215 5.215 0 0012.575 24V12.518a1.005 1.005 0 00-1.005-1.005z" fill="#2684FF" />
      <path d="M6.19 6.323h11.524a5.215 5.215 0 00-5.214-5.218H10.37V-.952A5.218 5.218 0 005.185 4.26v11.489a1.005 1.005 0 001.005 1.005z" fill="#2684FF" opacity=".65" />
    </svg>
  ),
  Docker: (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="#2496ED">
      <path d="M4.82 17.27c-.15 0-.29-.05-.41-.14a.636.636 0 01-.22-.36c-.29-1.24-.18-2.55.3-3.76a6.4 6.4 0 012.36-3.14c-.39-.75-.56-1.59-.5-2.44a4.4 4.4 0 01.72-2.2L7.34 5l.31.21c1.07.73 1.88 1.76 2.33 2.95h5.6V5.28h-2.3V3.04h2.3V.92h2.24v2.12h2.3v2.24h-2.3v2.88h2.53c.71 0 1.38.33 1.81.89.64.84.83 1.92.51 2.91-.82 2.5-2.93 4.36-5.42 5.17-.65.21-1.33.32-2.01.34h-.48c-1.58-.04-3.11-.55-4.39-1.47a7.55 7.55 0 01-1.9-2.02c-.53.3-1.13.44-1.75.44zM13.35 9.4h-2.3v2.3h2.3V9.4zm-3.54 0H7.51v2.3h2.3V9.4zm7.07 0h-2.3v2.3h2.3V9.4zm3.54 0h-2.3v2.3h2.3V9.4zm-7.07-3.53H11v2.3h2.35v-2.3zm3.54 0h-2.3v2.3h2.3v-2.3zm0-3.54h-2.3v2.3h2.3v-2.3z" />
    </svg>
  ),
  Kubernetes: (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <path d="M15.9 1.1a2.2 2.2 0 00-1.1.3L4.5 7.5a2.2 2.2 0 00-1.1 1.9v12.2a2.2 2.2 0 001.1 1.9l10.3 6.1a2.2 2.2 0 002.2 0l10.3-6.1a2.2 2.2 0 001.1-1.9V9.4a2.2 2.2 0 00-1.1-1.9L17 1.4a2.2 2.2 0 00-1.1-.3z" fill="#326CE5" />
      <path d="M16 7.6c-.3 0-.5.2-.6.5l-.7 4.2-.1.5-3.4-2.6c-.2-.2-.5-.2-.8 0-.2.2-.3.5-.2.8l1.3 4-.2.5-4.3-.4c-.3 0-.6.1-.7.4-.1.3 0 .6.3.8l3.7 2.2.3.4-2.7 3.3c-.2.2-.2.6 0 .8.2.2.5.3.8.1l3.8-1.9.4.2.8 4.2c.1.3.3.5.6.5s.5-.2.6-.5l.8-4.2.4-.2 3.8 1.9c.3.1.6.1.8-.1.2-.2.2-.6 0-.8l-2.7-3.3.3-.4 3.7-2.2c.3-.2.4-.5.3-.8-.1-.3-.4-.5-.7-.4l-4.3.4-.2-.5 1.3-4c.1-.3 0-.6-.2-.8-.2-.2-.6-.2-.8 0l-3.4 2.6-.1-.5-.7-4.2c-.1-.3-.3-.5-.6-.5z" fill="#fff" />
    </svg>
  ),
  AWS: (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <path d="M9.2 13.5c0 .4 0 .7.1.9.1.2.2.5.3.7.1.1.1.2.1.2 0 .1-.1.2-.2.3l-.6.4c-.1.1-.2.1-.3.1-.1 0-.2-.1-.3-.2-.1-.1-.3-.3-.4-.5-.1-.2-.2-.4-.3-.6-.8.9-1.8 1.4-3 1.4-.8 0-1.5-.2-2-.7-.5-.5-.7-1.1-.7-1.9 0-.9.3-1.6.9-2.1.6-.5 1.4-.8 2.5-.8.3 0 .7 0 1.1.1.4 0 .8.1 1.2.2v-.7c0-.8-.2-1.3-.5-1.6-.3-.3-.9-.5-1.7-.5-.4 0-.7 0-1.1.1-.4.1-.7.2-1.1.3h-.1c-.1 0-.2-.1-.2-.3V8c0-.1 0-.2.1-.3.4-.2.8-.3 1.3-.5.5-.1 1-.2 1.6-.2 1.2 0 2.1.3 2.7.8.6.6.8 1.4.8 2.5v3.2z" fill="#FF9900" />
      <path fillRule="evenodd" clipRule="evenodd" d="M24.1 20c-3 1.3-6.1 2-9.3 2-4.6 0-8.5-1.5-11.6-4-.4-.4-.1-.9.5-.6 3.3 1.7 7.4 2.8 11.6 2.8 3 0 6.3-.6 9.3-1.8.5-.2.8.3.4.6l-.9 1z" fill="#FF9900" />
      <path fillRule="evenodd" clipRule="evenodd" d="M25.5 18.4c-.6-.7-4-.4-5.5-.2-.5.1-.5-.3-.1-.6 2.7-1.8 7.1-1.3 7.6-.7.5.6-.1 4.7-2.7 6.7-.4.3-.7.1-.6-.3.6-1.4 1.8-4.2 1.3-4.9z" fill="#FF9900" />
    </svg>
  ),
  Figma: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z" fill="#0ACF83" />
      <path d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z" fill="#A259FF" />
      <path d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z" fill="#F24E1E" />
      <path d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z" fill="#FF7262" />
      <path d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z" fill="#1ABCFE" />
    </svg>
  ),
  Playwright: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#2EAD33" />
      <path d="M10 17l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#fff" />
    </svg>
  ),
  "VS Code": (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M17.583 2.1L9.83 8.96 5.12 5.52l-1.37.82v11.32l1.37.82 4.71-3.44 7.753 6.86L22.25 20V4.03L17.583 2.1zM5.12 14.62V9.38l3.15 2.62-3.15 2.62zm12.463 2.77l-5.49-5.39 5.49-5.39v10.78z" fill="#007ACC" />
    </svg>
  ),
  Slack: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M5.042 15.165a2.528 2.528 0 01-2.52 2.523A2.528 2.528 0 010 15.165a2.527 2.527 0 012.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 012.521-2.52 2.527 2.527 0 012.521 2.52v6.313A2.528 2.528 0 018.834 24a2.528 2.528 0 01-2.521-2.522v-6.313z" fill="#E01E5A" />
      <path d="M8.834 5.042a2.528 2.528 0 01-2.521-2.52A2.528 2.528 0 018.834 0a2.528 2.528 0 012.521 2.522v2.52H8.834zm0 1.271a2.527 2.527 0 012.521 2.521 2.527 2.527 0 01-2.521 2.521H2.522A2.528 2.528 0 010 8.834a2.528 2.528 0 012.522-2.521h6.312z" fill="#36C5F0" />
      <path d="M18.956 8.834a2.528 2.528 0 012.522-2.521A2.528 2.528 0 0124 8.834a2.528 2.528 0 01-2.522 2.521h-2.522V8.834zm-1.27 0a2.527 2.527 0 01-2.522 2.521 2.527 2.527 0 01-2.522-2.521V2.522A2.527 2.527 0 0115.164 0a2.527 2.527 0 012.522 2.522v6.312z" fill="#2EB67D" />
      <path d="M15.164 18.956a2.528 2.528 0 012.522 2.522A2.528 2.528 0 0115.164 24a2.527 2.527 0 01-2.522-2.522v-2.522h2.522zm0-1.27a2.527 2.527 0 01-2.522-2.522 2.527 2.527 0 012.522-2.522h6.313A2.527 2.527 0 0124 15.164a2.527 2.527 0 01-2.523 2.522h-6.313z" fill="#ECB22E" />
    </svg>
  ),
  "Azure DevOps": (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M22 4v16l-6 2-8.5-2.9V22l-4-5.2 14.8 1.6V5.4L22 4zM6 7.2l-4 1.4v8l4 1.6V7.2zm2-2.4L18 2v3.6L8 8.4V4.8z" fill="#0078D7" />
    </svg>
  ),
  Bitbucket: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M.778 1.213a.768.768 0 00-.768.892l3.263 19.81c.084.5.515.868 1.022.873H19.65a.772.772 0 00.77-.646l3.27-20.03a.768.768 0 00-.768-.891zM14.52 15.53H9.522L8.17 8.466h7.561z" fill="#2684FF" />
      <path d="M22.03 8.466h-6.291L14.52 15.53H9.522l-5.16 6.13c.165.143.376.222.594.225H19.65a.772.772 0 00.77-.645z" fill="url(#bb-grad)" />
      <defs>
        <linearGradient id="bb-grad" x1="24" y1="10.7" x2="12.1" y2="19.95" gradientUnits="userSpaceOnUse">
          <stop offset=".18" stopColor="#0052CC" />
          <stop offset="1" stopColor="#2684FF" />
        </linearGradient>
      </defs>
    </svg>
  ),
  Selenium: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#43B02A" />
      <text x="12" y="16" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">Se</text>
    </svg>
  ),
};

const categories = [
  {
    title: "Source Control",
    desc: "Seamlessly connect your version control tools.",
    items: [
      {
        name: "GitHub",
        desc: "Connect repositories, enforce PR quality gates, and auto-generate tests on every diff.",
        href: "/integrations/github",
      },
      {
        name: "GitLab",
        desc: "Sync repos, merge requests, and CI/CD pipelines. Full visibility into coverage gaps.",
        href: "/integrations/gitlab",
      },
      {
        name: "Bitbucket",
        desc: "Connect Bitbucket repositories and pull requests for AI-powered code review and test generation.",
        href: "/integrations/github",
      },
    ],
  },
  {
    title: "Project Management",
    desc: "Keep your requirements and test cases in sync with your project tracking tools.",
    items: [
      {
        name: "Jira",
        desc: "Bi-directional sync of stories, epics, and sprints. Auto-generate test cases from acceptance criteria.",
        href: "/integrations/jira",
      },
      {
        name: "Azure DevOps",
        desc: "Sync work items, boards, and sprints with Azure Boards for end-to-end traceability.",
        href: "/integrations/jira",
      },
    ],
  },
  {
    title: "Design",
    desc: "Bridge the gap between design and development.",
    items: [
      {
        name: "Figma",
        desc: "Turn design files into requirements and test cases automatically. Catch UI gaps pre-dev.",
        href: "/integrations/figma",
      },
    ],
  },
];

export default function IntegrationsPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="intg-page">
        {/* Hero */}
        <section className="intg-hero">
          <div className="intg-hero-inner">
            <p className="intg-hero-label">Integrations</p>
            <h1 className="intg-hero-title">
              Integrations for <span className="intg-hero-accent">all your needs</span>
            </h1>
            <p className="intg-hero-sub">
              WalnutAI plugs directly into the tools your engineering, QA, and product teams already use. No setup scripts. No API keys. Just connect and go.
            </p>
            <div className="intg-hero-actions">
              <Link href="https://app.walnutai.ai" className="intg-hero-cta">
                Get started free
              </Link>
              <Link href="/contact" className="intg-hero-cta-alt">
                Request a demo
              </Link>
            </div>
          </div>
        </section>

        {/* Categories + Cards */}
        {categories.map((cat) => (
          <section key={cat.title} className="intg-section">
            <div className="intg-container">
              <h2 className="intg-cat-heading">{cat.title}</h2>
              <p className="intg-cat-desc">{cat.desc}</p>
              <div className="intg-grid">
                {cat.items.map((item) => (
                  <Link key={item.name} href={item.href} className="intg-card">
                    <div className="intg-card-icon">{icons[item.name]}</div>
                    <h3 className="intg-card-name">{item.name}</h3>
                    <p className="intg-card-desc">{item.desc}</p>
                    <span className="intg-card-arrow">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Bottom CTA */}
        <section className="intg-bottom">
          <div className="intg-container">
            <h2 className="intg-bottom-title">Don&apos;t see your tool?</h2>
            <p className="intg-bottom-sub">
              We&apos;re continuously expanding our integration ecosystem. Tell us what you need and we&apos;ll prioritize it.
            </p>
            <div className="intg-bottom-actions">
              <Link href="/contact" className="intg-hero-cta">
                Request an integration
              </Link>
              <Link href="https://app.walnutai.ai" className="intg-hero-cta-alt">
                Explore all features
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
