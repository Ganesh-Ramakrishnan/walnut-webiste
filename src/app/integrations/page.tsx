import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const icons: Record<string, React.ReactNode> = {
  GitHub: (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  ),
  GitLab: (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
      <path d="M23.955 13.587l-1.342-4.135-2.664-8.189a.455.455 0 00-.867 0L16.418 9.45H7.582L4.918 1.263a.455.455 0 00-.867 0L1.387 9.452.045 13.587a.924.924 0 00.331 1.023L12 23.054l11.624-8.443a.92.92 0 00.331-1.024" fill="#E24329"/>
    </svg>
  ),
  Jira: (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
      <path d="M11.571 11.513H0a5.218 5.218 0 005.232 5.215h2.13v2.057A5.215 5.215 0 0012.575 24V12.518a1.005 1.005 0 00-1.005-1.005z" fill="#2684FF"/>
      <path d="M6.19 6.323h11.524a5.215 5.215 0 00-5.214-5.218H10.37V-.952A5.218 5.218 0 005.185 4.26v11.489a1.005 1.005 0 001.005 1.005z" fill="#2684FF" opacity=".65"/>
    </svg>
  ),
  Docker: (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="#2496ED">
      <path d="M4.82 17.27c-.15 0-.29-.05-.41-.14a.636.636 0 01-.22-.36c-.29-1.24-.18-2.55.3-3.76a6.4 6.4 0 012.36-3.14c-.39-.75-.56-1.59-.5-2.44a4.4 4.4 0 01.72-2.2L7.34 5l.31.21c1.07.73 1.88 1.76 2.33 2.95h5.6V5.28h-2.3V3.04h2.3V.92h2.24v2.12h2.3v2.24h-2.3v2.88h2.53c.71 0 1.38.33 1.81.89.64.84.83 1.92.51 2.91-.82 2.5-2.93 4.36-5.42 5.17-.65.21-1.33.32-2.01.34h-.48c-1.58-.04-3.11-.55-4.39-1.47a7.55 7.55 0 01-1.9-2.02c-.53.3-1.13.44-1.75.44zM13.35 9.4h-2.3v2.3h2.3V9.4zm-3.54 0H7.51v2.3h2.3V9.4zm7.07 0h-2.3v2.3h2.3V9.4zm3.54 0h-2.3v2.3h2.3V9.4zm-7.07-3.53H11v2.3h2.35v-2.3zm3.54 0h-2.3v2.3h2.3v-2.3zm0-3.54h-2.3v2.3h2.3v-2.3z"/>
    </svg>
  ),
  Kubernetes: (
    <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
      <path d="M15.9 1.1a2.2 2.2 0 00-1.1.3L4.5 7.5a2.2 2.2 0 00-1.1 1.9v12.2a2.2 2.2 0 001.1 1.9l10.3 6.1a2.2 2.2 0 002.2 0l10.3-6.1a2.2 2.2 0 001.1-1.9V9.4a2.2 2.2 0 00-1.1-1.9L17 1.4a2.2 2.2 0 00-1.1-.3z" fill="#326CE5"/>
      <path d="M16 7.6c-.3 0-.5.2-.6.5l-.7 4.2-.1.5-3.4-2.6c-.2-.2-.5-.2-.8 0-.2.2-.3.5-.2.8l1.3 4-.2.5-4.3-.4c-.3 0-.6.1-.7.4-.1.3 0 .6.3.8l3.7 2.2.3.4-2.7 3.3c-.2.2-.2.6 0 .8.2.2.5.3.8.1l3.8-1.9.4.2.8 4.2c.1.3.3.5.6.5s.5-.2.6-.5l.8-4.2.4-.2 3.8 1.9c.3.1.6.1.8-.1.2-.2.2-.6 0-.8l-2.7-3.3.3-.4 3.7-2.2c.3-.2.4-.5.3-.8-.1-.3-.4-.5-.7-.4l-4.3.4-.2-.5 1.3-4c.1-.3 0-.6-.2-.8-.2-.2-.6-.2-.8 0l-3.4 2.6-.1-.5-.7-4.2c-.1-.3-.3-.5-.6-.5z" fill="#fff"/>
    </svg>
  ),
  AWS: (
    <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
      <path d="M9.2 13.5c0 .4 0 .7.1.9.1.2.2.5.3.7.1.1.1.2.1.2 0 .1-.1.2-.2.3l-.6.4c-.1.1-.2.1-.3.1-.1 0-.2-.1-.3-.2-.1-.1-.3-.3-.4-.5-.1-.2-.2-.4-.3-.6-.8.9-1.8 1.4-3 1.4-.8 0-1.5-.2-2-.7-.5-.5-.7-1.1-.7-1.9 0-.9.3-1.6.9-2.1.6-.5 1.4-.8 2.5-.8.3 0 .7 0 1.1.1.4 0 .8.1 1.2.2v-.7c0-.8-.2-1.3-.5-1.6-.3-.3-.9-.5-1.7-.5-.4 0-.7 0-1.1.1-.4.1-.7.2-1.1.3h-.1c-.1 0-.2-.1-.2-.3V8c0-.1 0-.2.1-.3.4-.2.8-.3 1.3-.5.5-.1 1-.2 1.6-.2 1.2 0 2.1.3 2.7.8.6.6.8 1.4.8 2.5v3.2z" fill="#FF9900"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M24.1 20c-3 1.3-6.1 2-9.3 2-4.6 0-8.5-1.5-11.6-4-.4-.4-.1-.9.5-.6 3.3 1.7 7.4 2.8 11.6 2.8 3 0 6.3-.6 9.3-1.8.5-.2.8.3.4.6l-.9 1z" fill="#FF9900"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M25.5 18.4c-.6-.7-4-.4-5.5-.2-.5.1-.5-.3-.1-.6 2.7-1.8 7.1-1.3 7.6-.7.5.6-.1 4.7-2.7 6.7-.4.3-.7.1-.6-.3.6-1.4 1.8-4.2 1.3-4.9z" fill="#FF9900"/>
    </svg>
  ),
  Figma: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z" fill="#0ACF83"/>
      <path d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z" fill="#A259FF"/>
      <path d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z" fill="#F24E1E"/>
      <path d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z" fill="#FF7262"/>
      <path d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z" fill="#1ABCFE"/>
    </svg>
  ),
  Playwright: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M21.68 6.915c-.313.396-.795.834-1.503 1.14-.708.308-1.573.44-2.593.192l-.13 1.467c-.013.14-.017.27-.012.393.024.57.24 1.064.572 1.514.331.45.775.85 1.254 1.222 1.155.897 1.08 1.263.977 1.476-.052.107-.137.156-.18.173-.042.017-.09.035-.204-.003-.228-.076-.559-.37-.91-.903a5.61 5.61 0 01-.588-1.222c-.36.053-.745.07-1.152.04a5.7 5.7 0 01-1.075-.18c.118.533.313 1.101.623 1.655.573 1.024 1.447 1.77 2.328 1.988.44.11.87.09 1.234-.084.364-.173.616-.47.77-.84.257-.62.077-1.465-1.023-2.32-.478-.372-.878-.73-1.147-1.1-.268-.37-.42-.756-.438-1.19a2.67 2.67 0 01.009-.39l.166-1.882c.06-.01.118-.022.176-.036l1.35 1.166c.12.104.3.09.403-.03a.286.286 0 00-.03-.403l-1.268-1.095c.18-.106.33-.237.453-.382.292-.342.412-.748.462-1.062a3.07 3.07 0 00-.002-.758l-.003-.024a.286.286 0 00-.32-.247.286.286 0 00-.247.32l.002.02c.02.163.04.42-.017.662-.055.24-.17.486-.378.73z" fill="#2EAD33"/>
      <path d="M11.466 8.066c-.89.278-1.666.233-2.31.064-.644-.17-1.152-.468-1.534-.72l-.777 1.246c-.077.123-.147.243-.207.361-.278.545-.357 1.082-.284 1.616.073.533.296 1.05.617 1.547.776 1.198.595 1.535.452 1.712-.072.089-.164.12-.212.128-.048.008-.098.01-.196-.054-.196-.128-.44-.476-.638-1.074a5.61 5.61 0 01-.248-1.33c-.337.128-.702.223-1.096.274a5.7 5.7 0 01-1.085.046c-.018.547.044 1.138.24 1.744.364 1.121 1.097 1.993 1.923 2.367.413.187.841.235 1.225.122.384-.113.676-.372.882-.716.342-.575.27-1.44-.658-2.46-.403-.443-.727-.862-.912-1.281-.184-.418-.248-.834-.164-1.26a2.67 2.67 0 01.107-.376l.993-1.59a1.5 1.5 0 00.178.011l.663 1.68c.052.13.2.195.33.143a.257.257 0 00.143-.33l-.623-1.578c.2-.058.383-.147.543-.261.378-.272.597-.64.735-.934.14-.296.2-.562.227-.733l.005-.024a.257.257 0 00-.21-.296.257.257 0 00-.296.21l-.004.02c-.033.158-.1.388-.213.627-.113.24-.284.476-.558.673z" fill="#E2574C"/>
    </svg>
  ),
};

export const metadata: Metadata = {
  title: "Integrations - Your Tools. Your Workflow. Now Supercharged by AI.",
  description:
    "WalnutAI plugs directly into GitHub, Jira, Figma, Playwright, Docker, Kubernetes, AWS, and GitLab. No new workflows. No learning curves. Just AI-powered gap analysis, test generation, and traceability — right where your team works.",
  openGraph: {
    title: "Integrations - Your Tools. Your Workflow. Now Supercharged by AI.",
    description:
      "WalnutAI plugs directly into the tools your engineering, QA, and product teams already use. No new workflows. Just AI-powered gap analysis and traceability.",
    url: "https://www.walnutai.ai/integrations",
    siteName: "WalnutAI",
    type: "website",
  },
  alternates: { canonical: "https://www.walnutai.ai/integrations" },
};

const stats = [
  { value: "8+", label: "Native Integrations" },
  { value: "96%", label: "Avg Requirement Coverage" },
  { value: "15+ hrs", label: "Saved Per Sprint" },
  { value: "80%", label: "Reduction in Release Risk" },
];

const categories = [
  {
    num: "01",
    heading: "Source Control & CI/CD",
    subtitle: "Enforce quality at every commit. Automate test generation on every pull request.",
    integrations: [
      {
        name: "GitHub",
        icon: "GitHub",
        category: "Source Control & CI/CD",
        tagline: "Connect your repositories to automatically link commits, pull requests, and branches to Jira stories and test cases. Get AI-powered quality gates on every PR — before code merges.",
        features: [
          "Automated PR quality gates with configurable pass/fail thresholds",
          "AI test generation scoped to code diffs — unit, integration, and E2E",
          "Continuous repo sync for accurate gap analysis across all branches",
          "Commit-level traceability: story → code → test → deployment",
          "Native GitHub Actions support for seamless CI/CD pipeline integration",
        ],
        why: "Developers get instant, actionable feedback on every PR without waiting for QA cycles. Engineering managers enforce coverage standards automatically — no manual gate-keeping required.",
        href: "/integrations/github",
      },
      {
        name: "GitLab",
        icon: "GitLab",
        category: "Source Control & CI/CD",
        tagline: "Sync GitLab repos, merge requests, and CI/CD pipelines with WalnutAI. Get full visibility into what's deployed, what's tested, and what still has coverage gaps.",
        features: [
          "Connect repos, pipelines, and merge requests for end-to-end visibility",
          "Automated test generation triggered on merge request events",
          "Pipeline status integrated with WalnutAI gap analysis dashboards",
          "Branch-level traceability linking requirements to deployments",
          "Compatible with GitLab CI/CD for in-pipeline quality enforcement",
        ],
        why: "GitLab teams get the same AI-powered quality automation as GitHub users — without changing their existing workflow.",
        href: "/integrations/gitlab",
      },
    ],
  },
  {
    num: "02",
    heading: "Project Management",
    subtitle: "Turn backlog items into test-ready requirements. Automatically.",
    integrations: [
      {
        name: "Jira",
        icon: "Jira",
        category: "Project Management",
        tagline: "The backbone of WalnutAI's requirement intelligence. Sync user stories, epics, and sprints. WalnutAI auto-generates test cases from acceptance criteria and flags ambiguous requirements — inside Jira itself.",
        features: [
          "Bi-directional sync of stories, epics, bugs, and custom issue types",
          "AI-generated test cases auto-linked to originating Jira issues",
          "Requirements gap detection posted as Jira comments — before dev begins",
          "Sprint and release quality dashboards: coverage per story, per sprint",
          "Full custom field and workflow support — adapts to your Jira config",
        ],
        why: "Product Managers see requirement gaps before a single line of code is written. QA Managers get a living traceability matrix with zero manual upkeep.",
        href: "/integrations/jira",
      },
    ],
  },
  {
    num: "03",
    heading: "Infrastructure & Cloud",
    subtitle: "Scale test execution across cloud-native environments. Reproduce anywhere.",
    integrations: [
      {
        name: "Docker",
        icon: "Docker",
        category: "Infrastructure & Cloud",
        tagline: "Run AI-generated test suites in fully containerized, reproducible environments. Every test execution is isolated, consistent, and traceable across environments.",
        features: [
          "Containerized test execution in isolated Docker environments",
          "Consistent test results across local, staging, and production parity",
          "Pre-built WalnutAI images for zero-config test runner deployment",
          "Supports multi-container test scenarios with Docker Compose",
          "Eliminates 'works on my machine' failures in QA pipelines",
        ],
        why: "Dev Managers and QA Leads eliminate environment-based flakiness. Every test run is reproducible, auditable, and consistent.",
        href: "/integrations/docker",
      },
      {
        name: "Kubernetes",
        icon: "Kubernetes",
        category: "Infrastructure & Cloud",
        tagline: "Scale test workloads dynamically across distributed clusters. WalnutAI orchestrates test execution across K8s pods — so parallel testing doesn't mean parallel chaos.",
        features: [
          "Distribute test execution across Kubernetes clusters for speed",
          "Autoscale test runners based on workload demand",
          "Namespace-level isolation for multi-team test environments",
          "Integrated with Helm charts for GitOps-compatible deployment",
          "Pod-level test result aggregation into WalnutAI dashboards",
        ],
        why: "Enterprise engineering teams gain the parallelism and scalability to keep release velocity high without sacrificing coverage quality.",
        href: "/integrations/kubernetes",
      },
      {
        name: "AWS",
        icon: "AWS",
        category: "Infrastructure & Cloud",
        tagline: "Leverage S3, Lambda, EC2, and CloudWatch natively. WalnutAI uses your cloud infrastructure to store artifacts, trigger test runs, and monitor production quality signals.",
        features: [
          "S3-based test artifact storage and report archiving",
          "EC2 and Lambda for scalable, on-demand test runner provisioning",
          "CloudWatch integration for real-time test health monitoring",
          "IAM-based authentication for enterprise-grade security compliance",
          "Multi-region test execution for global application coverage",
        ],
        why: "CXOs and Dev Managers operating cloud-first organizations get test infrastructure that scales with their AWS estate.",
        href: "/integrations/aws",
      },
    ],
  },
  {
    num: "04",
    heading: "Design & Testing",
    subtitle: "From wireframes to test cases. From scripts to results. Fully automated.",
    integrations: [
      {
        name: "Figma",
        icon: "Figma",
        category: "Design & Testing",
        tagline: "Turn design files into requirements and test cases automatically. WalnutAI reads your Figma frames and generates UI/UX test scenarios before a single line of code is written.",
        features: [
          "AI analysis of Figma frames, component variants, and prototype flows",
          "Design-to-requirement extraction: every state, interaction, and edge case",
          "Automatic test case generation from navigation flows and UI components",
          "Visual regression baselines sourced from Figma design files",
          "Design change monitoring: alerts when updates impact existing tests",
        ],
        why: "Business Analysts capture implicit design requirements before handoff. QA teams receive structured test cases from day one.",
        href: "/integrations/figma",
      },
      {
        name: "Playwright",
        icon: "Playwright",
        category: "Design & Testing",
        tagline: "Import existing Playwright scripts or let WalnutAI generate new ones. Execute browser automation at scale with AI-driven test maintenance that adapts to UI changes.",
        features: [
          "Import existing Playwright scripts into WalnutAI for AI-enhanced analysis",
          "AI-generated Playwright tests from requirements and design flows",
          "Cross-browser execution: Chromium, Firefox, and WebKit",
          "Parallel test execution with built-in retry and flakiness detection",
          "Test results with screenshots, traces, and video linked to Jira issues",
        ],
        why: "QA Engineers get production-grade browser automation generated from requirements — without scripting from scratch.",
        href: "/integrations/playwright",
      },
    ],
  },
];

const roleTable = [
  { role: "CXO / VP Engineering", benefit: "Full SDLC visibility, release confidence, risk reduction", tools: "Jira, GitHub, AWS" },
  { role: "Dev / Engineering Manager", benefit: "Automated quality gates, CI/CD enforcement, sprint metrics", tools: "GitHub, GitLab, Docker, K8s" },
  { role: "QA / Test Manager", benefit: "AI test case generation, coverage traceability, automated execution", tools: "Playwright, Jira, GitHub" },
  { role: "Product / Project Manager", benefit: "Requirement-to-test traceability, gap detection, sprint readiness", tools: "Jira, Figma" },
  { role: "Developer", benefit: "PR-level feedback, diff-aware test generation, repo sync", tools: "GitHub, GitLab, Playwright" },
  { role: "Business Analyst", benefit: "Design-to-requirement extraction, acceptance criteria coverage", tools: "Figma, Jira" },
];

const steps = [
  { num: "01", text: "Sign up free — no credit card" },
  { num: "02", text: "Connect your first tool (Jira or GitHub)" },
  { num: "03", text: "Run your first gap analysis in 5 min" },
  { num: "04", text: "Add integrations as your team grows" },
];

export default function IntegrationsPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: 80, background: "var(--bg-page)" }}>
        {/* Hero */}
        <section className="intg-hero">
          <div className="intg-hero-inner">
            <p className="intg-hero-label">WalnutAI Integrations</p>
            <h1 className="intg-hero-title">
              Your Tools. Your Workflow.{" "}
              <span style={{ color: "#F17F0D" }}>Now Supercharged by AI.</span>
            </h1>
            <p className="intg-hero-sub">
              WalnutAI plugs directly into the tools your engineering, QA, and product teams already use — GitHub, Jira, Figma, Playwright, Docker, Kubernetes, AWS, and GitLab. No new workflows. No learning curves. Just AI-powered gap analysis, test generation, and traceability — right where your team works.
            </p>
            {/* Stats */}
            <div className="intg-stats">
              {stats.map((s) => (
                <div key={s.label} className="intg-stat">
                  <span className="intg-stat-val">{s.value}</span>
                  <span className="intg-stat-lbl">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why section */}
        <section className="intg-section">
          <div className="intg-container">
            <h2 className="intg-section-title">Why Our Integrations Are <span style={{ color: "#F17F0D" }}>Different</span></h2>
            <p className="intg-section-desc">
              Most tools ask you to change how you work. WalnutAI doesn&apos;t. It reads your Jira stories, watches your GitHub PRs, understands your Figma designs, and runs your Playwright tests — then surfaces what&apos;s missing before it becomes a production bug. Every integration is built around one goal: complete software delivery traceability, from intent to production.
            </p>
          </div>
        </section>

        {/* Integration Cards by Category */}
        {categories.map((cat) => (
          <section key={cat.num} className="intg-section">
            <div className="intg-container">
              <div className="intg-cat-head">
                <span className="intg-cat-num">{cat.num}</span>
                <div>
                  <h2 className="intg-cat-title">{cat.heading}</h2>
                  <p className="intg-cat-sub">{cat.subtitle}</p>
                </div>
              </div>

              <div className="intg-cards">
                {cat.integrations.map((item) => (
                  <div key={item.name} className="intg-card">
                    <div className="intg-card-body">
                      {/* Left content */}
                      <div className="intg-card-main">
                        <div className="intg-card-header">
                          <div className="intg-card-icon">{icons[item.name]}</div>
                          <div>
                            <h3 className="intg-card-name">{item.name}</h3>
                            <span className="intg-card-cat">{item.category}</span>
                          </div>
                        </div>
                        <p className="intg-card-tagline">{item.tagline}</p>
                        <ul className="intg-card-features">
                          {item.features.map((f) => (
                            <li key={f}>
                              <span className="intg-check">&#10003;</span>
                              {f}
                            </li>
                          ))}
                        </ul>
                        <div className="intg-card-why">
                          <span className="intg-why-label">WHY IT MATTERS</span>
                          <p>{item.why}</p>
                        </div>
                      </div>

                      {/* Right metadata panel */}
                      <div className="intg-card-meta">
                        <div className="intg-meta-item">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
                          <span>{item.category}</span>
                        </div>
                        <div className="intg-meta-item">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                          <span>OAuth 2.0</span>
                        </div>
                        <div className="intg-meta-item">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                          <span>5 min setup</span>
                        </div>
                        <div className="intg-meta-item intg-meta-free">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                          <span>Free with all plans</span>
                        </div>
                        <Link href={item.href} className="intg-meta-link">
                          View details &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Role Table */}
        <section className="intg-section">
          <div className="intg-container">
            <h2 className="intg-section-title">Integration Value by <span style={{ color: "#F17F0D" }}>Role</span></h2>
            <div className="intg-table-wrap">
              <table className="intg-table">
                <thead>
                  <tr>
                    <th>Audience</th>
                    <th>Primary Benefit</th>
                    <th>Key Integrations</th>
                  </tr>
                </thead>
                <tbody>
                  {roleTable.map((r) => (
                    <tr key={r.role}>
                      <td style={{ fontWeight: 600, color: "var(--text-primary)" }}>{r.role}</td>
                      <td>{r.benefit}</td>
                      <td><span className="intg-tools">{r.tools}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="intg-section">
          <div className="intg-container">
            <h2 className="intg-section-title">Getting Connected in <span style={{ color: "#F17F0D" }}>4 Steps</span></h2>
            <div className="intg-steps">
              {steps.map((s) => (
                <div key={s.num} className="intg-step">
                  <span className="intg-step-num">{s.num}</span>
                  <p className="intg-step-text">{s.text}</p>
                </div>
              ))}
            </div>
            <p className="intg-steps-note">
              Every integration is configured through WalnutAI&apos;s secure OAuth-based connector — no custom scripts, no API key juggling. Most teams are fully connected within a single working session.
            </p>
          </div>
        </section>

        {/* Don't See Your Tool */}
        <section className="intg-section">
          <div className="intg-container" style={{ textAlign: "center" }}>
            <h2 className="intg-section-title">Don&apos;t See Your <span style={{ color: "#F17F0D" }}>Tool?</span></h2>
            <p className="intg-section-desc">
              We&apos;re continuously expanding. Tell us what you need and we&apos;ll prioritize it.
            </p>
            <Link href="/contact" style={{ display: "inline-block", marginTop: 16, color: "#F17F0D", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>
              Request an integration &rarr;
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="intg-cta">
          <div className="intg-container" style={{ textAlign: "center" }}>
            <h2 className="intg-cta-title">See What You&apos;re Missing</h2>
            <p className="intg-cta-sub">Connect one repo and one requirements doc. Get your first gap analysis in 5 minutes.</p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="https://app.walnutai.ai" className="intg-cta-btn">Start Free Trial &rarr;</Link>
              <Link href="/contact" className="intg-cta-btn-alt">Contact Sales</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
