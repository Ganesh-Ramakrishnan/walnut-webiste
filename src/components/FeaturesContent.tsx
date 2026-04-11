"use client";

import { useState } from "react";
import {
  FileText,
  Code2,
  GitPullRequest,
  MessageSquare,
  Blocks,
  Server,
  Figma,
  Search,
  TestTube2,
  Smartphone,
  Network,
  ClipboardCheck,
  BarChart3,
  Cpu,
  ShieldCheck,
  Import,
} from "lucide-react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";

interface Feature {
  number: string;
  title: string;
  pillar: string;
  category: string;
  description: string;
  icon: LucideIcon;
  href?: string;
}

const features: Feature[] = [
  {
    number: "1.1",
    title: "Intelligence Hub",
    pillar: "requirements",
    category: "Requirements Intelligence",
    icon: FileText,
    href: "/features/intelligence-hub",
    description:
      "Upload any document \u2014 Word, PDF, Excel, CSV, or PowerPoint \u2014 and WalnutAI automatically extracts a structured hierarchy of Epics, Features, Modules, and User Stories with acceptance criteria. What used to take days of BA effort takes minutes.",
  },
  {
    number: "1.2",
    title: "Code-to-Story (Reverse Requirements)",
    pillar: "requirements",
    category: "Requirements Intelligence",
    icon: Code2,
    href: "/features/code-to-story",
    description:
      "Already have code but no requirements? WalnutAI analyzes your entire codebase \u2014 folder structure, AST parsing, module boundaries \u2014 and generates a complete requirements hierarchy from the actual implementation. Perfect for legacy systems and undocumented codebases.",
  },
  {
    number: "1.3",
    title: "Jira & Azure DevOps Import",
    pillar: "requirements",
    category: "Requirements Intelligence",
    icon: Import,
    href: "/features/jira-azure-import",
    description:
      "Import user stories and work items from Jira or Azure DevOps with custom field mapping and bidirectional sync. WalnutAI keeps your stories aligned with your project management tools automatically \u2014 no double-entry, no drift.",
  },
  {
    number: "1.4",
    title: "Figma Design Import",
    pillar: "requirements",
    category: "Requirements Intelligence",
    icon: Figma,
    href: "/features/figma-import",
    description:
      "Connect directly to Figma and select screens, frames, or flows. WalnutAI\u2019s vision AI reads your designs and generates user stories based on the UI behaviors and interactions it sees \u2014 bridging the gap between design and development.",
  },
  {
    number: "2.1",
    title: "Cloud Agent (Autonomous Code Generation)",
    pillar: "code",
    category: "Code Generation",
    icon: Cpu,
    href: "/features/cloud-agent",
    description:
      "Assign any user story to a WalnutAI Cloud Agent. The agent reads your codebase, understands the requirements, implements the feature, commits to a feature branch, and raises a draft pull request \u2014 autonomously. You review. The agent ships.",
  },
  {
    number: "2.2",
    title: "Auto-Fix Defects from Workboard",
    pillar: "code",
    category: "Code Generation",
    icon: GitPullRequest,
    href: "/features/auto-fix-defects",
    description:
      "Log a defect in WalnutAI\u2019s workboard and the AI agent reads the failure context \u2014 test case, steps, screenshots, expected vs actual \u2014 finds the broken code, and raises a fix PR automatically. No copy-pasting into your editor. No re-explaining what QA already documented.",
  },
  {
    number: "2.3",
    title: "VS Code AI Extension",
    pillar: "code",
    category: "Code Generation",
    icon: Blocks,
    href: "/features/vscode-extension",
    description:
      "Bring WalnutAI into your editor. The VS Code extension puts Ask, Plan, and Agent modes directly in your IDE \u2014 query your codebase, draft implementation plans with human approval, and spawn autonomous sub-agents without leaving VS Code.",
  },
  {
    number: "2.4",
    title: "External MCP Integration",
    pillar: "code",
    category: "Code Generation",
    icon: Server,
    href: "/features/mcp-integration",
    description:
      "Connect external MCP servers \u2014 Figma, GitHub, databases, internal APIs, and more \u2014 directly into WalnutAI\u2019s code editor. Your AI agents can call any connected tool as they work, so nothing needs to be copy-pasted in from another tab.",
  },
  {
    number: "3.1",
    title: "AI-Powered Gap Analysis",
    pillar: "gap",
    category: "Gap Analysis",
    icon: Search,
    href: "/features/ai-gap-analysis",
    description:
      "WalnutAI\u2019s three-phase gap analysis engine compares your user stories against your codebase to find exactly what\u2019s missing, incomplete, or outdated. Phase 1 finds code gaps. Phase 2 validates the stories themselves. Phase 3 scores code quality per story.",
  },
  {
    number: "3.2",
    title: "AI Test Case Generation",
    pillar: "test",
    category: "Test Intelligence",
    icon: TestTube2,
    href: "/features/ai-test-case-generation",
    description:
      "Generate complete, step-by-step test cases \u2014 positive, negative, API, UI, and integration scenarios \u2014 from any user story in under 30 seconds. WalnutAI produces a human-reviewable draft for every story. Teams cut test creation time by up to 40%.",
  },
  {
    number: "3.3",
    title: "Smart Test Recording",
    pillar: "test",
    category: "Test Intelligence",
    icon: Smartphone,
    href: "/features/smart-test-recording",
    description:
      "Interact with your web or mobile app and WalnutAI converts every click, input, and navigation into a structured test case automatically. No scripting. No transcription. Works for web, Android, and iOS \u2014 test cases ready the moment you stop recording.",
  },
  {
    number: "3.4",
    title: "Requirement Traceability Matrix (RTM)",
    pillar: "test",
    category: "Test Intelligence",
    icon: Network,
    href: "/features/requirement-traceability-matrix",
    description:
      "An interactive, always-current visual map linking every Epic \u2192 Feature \u2192 User Story \u2192 Test Case \u2192 Defect. Click any node for full details. Export to Excel for compliance audits. Know your test coverage at a glance \u2014 automatically maintained every sprint.",
  },
  {
    number: "3.5",
    title: "Test Execution & Reporting",
    pillar: "test",
    category: "Test Intelligence",
    icon: ClipboardCheck,
    href: "/features/test-execution-reporting",
    description:
      "Execute tests step-by-step, capture screenshots for failures, track pass/fail/blocked/skip results, and generate rich PDF reports \u2014 all in one place. Suite-level reports give leadership real-time quality visibility at release time.",
  },
  {
    number: "3.6",
    title: "Analytics & LLM Insights",
    pillar: "analytics",
    category: "Analytics",
    icon: BarChart3,
    href: "/features/analytics-llm-insights",
    description:
      "Track test execution trends, defect rates, flaky test detection, team productivity, and AI model token usage \u2014 across every project and sprint. WalnutAI\u2019s analytics dashboards turn QA data into release confidence and executive-ready ROI reporting.",
  },
  {
    number: "3.7",
    title: "Multi-Model AI Configuration",
    pillar: "test",
    category: "AI Infrastructure",
    icon: MessageSquare,
    href: "/features/multi-model-ai",
    description:
      "Choose any AI model \u2014 OpenAI, Azure OpenAI, AWS Bedrock (Claude), Google Gemini, Anthropic, or local Ollama. Per-project model configuration with AES-256 encrypted keys and spending limits gives enterprises full control over AI cost, privacy, and performance.",
  },
  {
    number: "3.8",
    title: "Role-Based Access Control & Audit Logs",
    pillar: "test",
    category: "Security & Compliance",
    icon: ShieldCheck,
    href: "/features/rbac-audit-logs",
    description:
      "Enterprise-grade RBAC with granular permissions across organizations, projects, and roles (Admin, Manager, Tester, Developer, Viewer). Immutable audit logs with 7-year retention keep every story and test action permanently recorded for compliance.",
  },
];

const tabs = [
  { key: "all", label: "All Features" },
  { key: "requirements", label: "Requirements Intelligence" },
  { key: "code", label: "Code Generation" },
  { key: "test", label: "Test Intelligence" },
  { key: "gap", label: "Gap Analysis" },
  { key: "analytics", label: "Analytics" },
];

const pillarColors: Record<string, { dot: string; text: string; glow: string; iconBg: string }> = {
  requirements: {
    dot: "#3b82f6",
    text: "#60a5fa",
    glow: "rgba(59,130,246,0.25)",
    iconBg: "rgba(59,130,246,0.12)",
  },
  code: {
    dot: "#a855f7",
    text: "#c084fc",
    glow: "rgba(168,85,247,0.25)",
    iconBg: "rgba(168,85,247,0.12)",
  },
  test: {
    dot: "#14b8a6",
    text: "#2dd4bf",
    glow: "rgba(20,184,166,0.25)",
    iconBg: "rgba(20,184,166,0.12)",
  },
  gap: {
    dot: "#f97316",
    text: "#fb923c",
    glow: "rgba(249,115,22,0.25)",
    iconBg: "rgba(249,115,22,0.12)",
  },
  analytics: {
    dot: "#f59e0b",
    text: "#fbbf24",
    glow: "rgba(245,158,11,0.25)",
    iconBg: "rgba(245,158,11,0.12)",
  },
  amber: {
    dot: "#f59e0b",
    text: "#fbbf24",
    glow: "rgba(245,158,11,0.25)",
    iconBg: "rgba(245,158,11,0.12)",
  },
};

function getCategoryColors(category: string) {
  if (category === "Requirements Intelligence") return pillarColors.requirements;
  if (category === "Code Generation") return pillarColors.code;
  if (category === "Gap Analysis") return pillarColors.gap;
  if (category === "Analytics") return pillarColors.analytics;
  if (["AI Infrastructure", "Security & Compliance"].includes(category))
    return pillarColors.amber;
  return pillarColors.test;
}

export default function FeaturesContent() {
  const [activeTab, setActiveTab] = useState("all");

  const filtered =
    activeTab === "all"
      ? features
      : features.filter((f) => f.pillar === activeTab);

  return (
    <>
      {/* Sticky Tab Bar */}
      <div
        className="sticky z-30"
        style={{
          top: 72,
          background: "rgba(6,11,24,0.85)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(255,255,255,0.04)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div
            className="flex gap-2 justify-center"
            style={{
              overflowX: "auto",
              scrollbarWidth: "none",
            } as React.CSSProperties}
          >
            {tabs.map((tab) => {
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  style={{
                    padding: "9px 22px",
                    fontSize: 13,
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? "#F17F0D" : "#666",
                    background: "transparent",
                    border: isActive ? "1px solid rgba(241,127,13,0.4)" : "1px solid transparent",
                    borderRadius: 50,
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    transition: "all 0.25s ease",
                    flexShrink: 0,
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Cards Grid */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filtered.map((f) => (
              <FeatureCard key={f.number} feature={f} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function FeatureCard({ feature }: { feature: Feature }) {
  const colors = getCategoryColors(feature.category);
  const Icon = feature.icon;

  const cardStyle: React.CSSProperties = {
    background: "rgba(10,22,40,0.75)",
    border: "1px solid rgba(255,255,255,0.07)",
    borderRadius: 16,
    padding: "28px 26px 24px",
    display: "flex",
    flexDirection: "column",
    transition: "border-color 0.3s, box-shadow 0.3s",
    height: "100%",
    position: "relative",
    overflow: "hidden",
    textDecoration: "none",
    color: "inherit",
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.borderColor = "rgba(200,121,65,0.28)";
    e.currentTarget.style.boxShadow = "0 4px 40px rgba(200,121,65,0.08)";
  };
  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
    e.currentTarget.style.boxShadow = "none";
  };

  const cardContent = (
    <>

      {/* Top glow line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 24,
          right: 24,
          height: 1,
          background: `linear-gradient(90deg, transparent, ${colors.glow}, transparent)`,
          opacity: 0.4,
        }}
      />

      {/* Category label */}
      <span
        style={{
          fontSize: 11,
          fontWeight: 500,
          color: "#555",
          letterSpacing: 0.3,
          marginBottom: 14,
          display: "block",
        }}
      >
        {feature.category}
      </span>

      {/* Icon + Title */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: 10,
            background: colors.iconBg,
            border: `1px solid ${colors.glow}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <Icon size={18} style={{ color: colors.text }} />
        </div>
        <h3
          style={{
            color: "#fff",
            fontSize: 18,
            fontWeight: 700,
            lineHeight: 1.3,
            margin: 0,
          }}
        >
          {feature.title}
        </h3>
      </div>

      {/* Description */}
      <p
        style={{
          color: "#8a8f98",
          fontSize: 14.5,
          lineHeight: 1.75,
          flex: 1,
          marginBottom: 0,
        }}
      >
        {feature.description}
      </p>

    </>
  );

  if (feature.href) {
    return (
      <Link
        href={feature.href}
        className="feat-pillar-card block"
        style={cardStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {cardContent}
      </Link>
    );
  }

  return (
    <div
      className="feat-pillar-card"
      style={cardStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {cardContent}
    </div>
  );
}
