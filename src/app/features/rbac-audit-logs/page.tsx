import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FAQAccordion } from "@/components/FeaturePageUI";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "RBAC & Audit Logs. Enterprise-Grade Access Control and an Audit Trail That Never Lies | WalnutAI",
  description:
    "Granular role-based access control across organizations, projects, and roles. Immutable audit logs with retention \u2014 every action on every story and test permanently recorded.",
  openGraph: {
    title: "RBAC & Audit Logs \u2014 Enterprise-Grade Access Control & Audit Trail | WalnutAI",
    description:
      "Granular role-based access control across organizations, projects, and roles. Immutable audit logs with retention \u2014 every action on every story and test permanently recorded.",
    url: "https://www.walnutai.ai/features/rbac-audit-logs",
    siteName: "WalnutAI",
    type: "website",
    images: [
      {
        url: "https://walnutai.dev/og/rbac-audit-logs.png",
        width: 1200,
        height: 630,
        alt: "WalnutAI RBAC & Audit Logs \u2014 enterprise access control and immutable audit trail",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@WalnutAI",
    title: "RBAC & Audit Logs \u2014 Enterprise-Grade Access Control & Audit Trail | WalnutAI",
    description:
      "Granular role-based access control across organizations, projects, and roles. Immutable audit logs with retention \u2014 every action on every story and test permanently recorded.",
    images: ["https://walnutai.dev/og/rbac-audit-logs.png"],
  },
  alternates: {
    canonical: "https://www.walnutai.ai/features/rbac-audit-logs",
  },
};

const sections = [
  {
    title: "Granular permissions across every level of your organization",
    desc: "RBAC in WalnutAI operates at the organization, project, and role level. Admins configure access globally. Project owners control who can view, edit, or execute within their project. Viewers can access dashboards and reports without risk of accidentally modifying requirements or test cases.",
  },
  {
    title: "Every action permanently recorded with full context",
    desc: "Every create, edit, delete, import, export, execution, and AI generation operation is written to an immutable audit log with the acting user\u2019s identity, timestamp, IP address, and the before/after state of the changed item. Logs cannot be edited or deleted \u2014 not even by administrators.",
  },
  {
    title: "Compliance documentation generated on demand",
    desc: "Audit reports for specific time periods, projects, users, or action types can be exported on demand \u2014 formatted for submission to compliance reviews, security audits, and internal governance processes. No manual log parsing, no hunting across systems for the history of a specific story or test case.",
  },
  {
    title: "Scales across multi-tenant enterprise deployments",
    desc: "Organizations with multiple teams, business units, or client projects operate in isolated environments with independent RBAC configurations. A tester in one project has no visibility into another project\u2019s requirements or results unless explicitly granted access.",
  },
];

const faqs = [
  {
    q: "What roles does WalnutAI\u2019s RBAC support?",
    a: "WalnutAI supports five default roles: Admin, Manager, Tester, Developer, and Viewer. Permissions are configured at the organization and project level, and custom role definitions are available on Enterprise plans.",
  },
  {
    q: "How long are audit logs retained?",
    a: "Audit logs are retained for seven years by default \u2014 meeting the compliance requirements of most regulated industries. Enterprise deployments can extend retention as needed.",
  },
  {
    q: "Can administrators edit or delete audit logs?",
    a: "No. Audit logs are immutable. No user \u2014 not even administrators \u2014 can edit or delete entries. This ensures the audit trail remains tamper-proof for compliance reviews.",
  },
  {
    q: "Can I export audit reports for compliance reviews?",
    a: "Yes. Audit reports can be generated on demand for specific time periods, projects, users, or action types \u2014 formatted for submission to compliance reviews, security audits, or internal governance processes.",
  },
  {
    q: "Does WalnutAI support multi-tenant enterprise deployments?",
    a: "Yes. Organizations with multiple teams, business units, or client projects can operate in isolated environments with independent RBAC configurations. Project visibility is strictly scoped unless explicitly granted.",
  },
];

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.walnutai.ai" },
        { "@type": "ListItem", position: 2, name: "Features", item: "https://www.walnutai.ai/features" },
        { "@type": "ListItem", position: 3, name: "RBAC & Audit Logs", item: "https://www.walnutai.ai/features/rbac-audit-logs" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
  ],
};

export default function RBACAuditLogsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Navbar />
      <main
        className="min-h-screen text-white"
        style={{ paddingTop: 80, background: "linear-gradient(160deg, #1a0e05 0%, #0a1628 25%, #060b18 55%, #0a1628 100%)" }}
      >
        {/* Back Button */}
        <div className="mx-auto max-w-7xl px-6 pt-10">
          <Link
            href="/features"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-4 py-2 text-sm text-neutral-400 transition-colors hover:border-orange-500/50 hover:text-orange-500"
          >
            <ArrowLeft size={16} />
            All Features
          </Link>
        </div>

        {/* Hero */}
        <section className="relative px-6 pt-10 pb-16 text-center overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="relative z-10 max-w-5xl mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold tracking-tight mb-6 leading-tight">
              RBAC &amp; Audit Logs.{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
                Enterprise-Grade Access Control and an Audit Trail That Never Lies.
              </span>
            </h1>
            <p className="text-neutral-400 text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
              Granular role-based access control across organizations, projects,
              and roles. Immutable audit logs with retention &mdash; every action
              on every story and test permanently recorded.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section
          className="relative overflow-hidden border-y border-white/[0.06]"
          style={{ background: "linear-gradient(180deg, #060b18 0%, #0f1a3d 50%, #060b18 100%)" }}
        >
          <div className="max-w-7xl mx-auto px-6 py-20 sm:py-24">
            <p className="text-center text-sm font-semibold uppercase tracking-widest mb-16" style={{ color: "#F17F0D" }}>
              Trusted by enterprise security and compliance teams
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                { value: "5 roles", label: "Admin, Manager, Tester, Developer, Viewer \u2014 granular enough for any team structure" },
                { value: "0", label: "Unauthorized actions possible \u2014 every operation validated against role permissions before execution" },
              ].map((stat) => (
                <div
                  key={stat.value}
                  className="relative rounded-2xl px-9 py-12 text-center overflow-hidden"
                  style={{
                    background: "linear-gradient(160deg, rgba(249,115,22,0.07) 0%, rgba(249,115,22,0.02) 50%, rgba(10,10,10,0.95) 100%)",
                    border: "1px solid rgba(249,115,22,0.1)",
                  }}
                >
                  <div className="absolute top-0 left-6 right-6 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(249,115,22,0.2), transparent)" }} />
                  <div className="text-3xl sm:text-4xl font-extrabold text-orange-500 mb-3">{stat.value}</div>
                  <p className="text-neutral-400 text-sm leading-relaxed">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="mx-auto max-w-7xl px-6 py-10 sm:py-14">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">
              Regulated industries don&apos;t get to say &quot;we&apos;re not sure who changed that&quot;
            </h2>
            <p className="text-neutral-400 text-[15px] leading-[1.8]">
              In regulated industries &mdash; healthcare, finance, government &mdash; the question &quot;who changed this requirement and when?&quot; is not optional. It&apos;s an audit requirement. WalnutAI&apos;s immutable audit logs record every action across every story, test case, execution, and defect &mdash; with user identity, timestamp, and the exact change made &mdash; and retain them. When the auditor asks, the answer is ready instantly.
            </p>
          </div>
        </section>

        {/* Feature Sections — alternating layout */}
        <section className="mx-auto max-w-7xl px-6 pb-20">
          <div className="space-y-6">
            {sections.map((s, i) => {
              const isEven = i % 2 === 0;
              return (
                <div
                  key={i}
                  className="grid lg:grid-cols-2 gap-8 items-center rounded-2xl bg-[#0a1628]/75 p-8 sm:p-10"
                >
                  <div className={isEven ? "" : "lg:order-2"}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/15 flex items-center justify-center text-xs font-bold text-orange-400 font-mono">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug">
                      {s.title}
                    </h3>
                    <p className="text-neutral-400 text-[15px] leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                  <div className={isEven ? "" : "lg:order-1"}>
                    <div className="rounded-xl bg-[#060b18] h-48 sm:h-56 flex items-center justify-center">
                      <span className="text-neutral-700 text-sm">Feature visual</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section
          className="relative overflow-hidden"
          style={{
            background: "#0a1628",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-[120px] pointer-events-none" style={{ background: "rgba(249,115,22,0.2)" }} />

          <div className="relative z-10 max-w-3xl mx-auto px-6 py-20 sm:py-24 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to ship with confidence?
            </h2>
            <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
              See how WalnutAI connects requirements, code, testing, and
              deployment into one intelligent workflow.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-orange-500 text-white font-semibold transition-colors hover:bg-orange-600"
              >
                Start Free Trial
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-orange-500/25 text-neutral-300 font-medium transition-colors hover:border-orange-500/50 hover:text-white"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-7xl px-6 py-20">
          <FAQAccordion faqs={faqs} />
        </section>
      </main>
      <Footer />
    </>
  );
}
