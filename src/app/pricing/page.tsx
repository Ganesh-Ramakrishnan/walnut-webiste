"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SIGNUP_URL } from "@/lib/links";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const plans = [
  {
    name: "Free Trial",
    tagline: "Everything You Need to Get Started",
    price: "$0",
    annual: "$0",
    discount: "",
    cta: "Start Free Trial",
    ctaHref: SIGNUP_URL,
    highlighted: false,
    outcomes: [
      "Build applications, websites by simply describing your idea (prompt-to-development)",
      "See your first requirement-to-code analysis in minutes",
      "Instantly create and run automated tests",
      "Experience how your workflow translates into a working system",
    ],
    outcomeNote:
      "No credit card required. Get started in minutes with full access to the WalnutAI platform.",
    features: [
      "Unlimited projects with up to unlimited users",
      "Generate stories from BRD/FRS, meeting transcripts (audio/video), and AI prompts",
      "Figma integration to generate stories and test cases",
      "Connect repositories (GitHub, GitLab, Bitbucket, Azure), upload code, and use Visual Studio extension",
      "Import and generate Playwright automation scripts",
      "Test case generation, test data management, test suites, and execution with exportable reports",
      "Web, API, Mobile test execution (hybrid supported)",
      "Gap analysis across stories \u2192 code \u2192 test cases with exportable reports",
      "Import issues from Jira and Azure with Live sync",
      "Custom methods for actions and ticket-based support",
    ],
  },
  {
    name: "Explorer",
    tagline: "For Teams Ready to Ship Faster",
    price: "$18",
    annual: "$15",
    discount: "-10%",
    cta: "Upgrade to Explorer",
    ctaHref: "/contact",
    highlighted: false,
    outcomes: [
      "Save 15+ hours/sprint",
      "Catch 40+ gaps per project",
      "Reduce manual testing by 50%",
    ],
    outcomeNote:
      "If WalnutAI doesn\u2019t save you at least 10 hours in your first month, we\u2019ll refund your subscription.",
    features: [
      "Multiple Projects (upto 5)",
      "Invite upto 5 users",
      "Jira/Azure integration",
      "Upload code repo",
      "Figma integration",
      "Generate automation test cases",
      "Create test suites and execution",
      "Shareable gap reports",
    ],
  },
  {
    name: "Team",
    tagline: "For Teams Who Can\u2019t Afford Production Bugs",
    price: "$65",
    annual: "$60",
    discount: "-10%",
    cta: "Start Team Trial",
    ctaHref: SIGNUP_URL,
    highlighted: true,
    includes: "Explorer features plus:",
    outcomes: [
      "Cut production defects by 80%",
      "95%+ requirements coverage",
      "Ship 2x faster",
    ],
    outcomeNote:
      "Teams on this plan ship an average of 2.3x more features per quarter while reducing bugs by 73%.",
    features: [
      "Unlimited projects",
      "Invite upto 10 users",
      "Connect via gitlab/github/bitbucket",
      "Import playwright scripts",
      "Import from Qtest/Testrail",
      "Mobile test execution",
      "Continuous gap analysis",
      "Community support",
      "Custom domains",
    ],
  },
  {
    name: "Enterprise",
    tagline: "For Organizations Where Failure Isn\u2019t an Option",
    price: "Custom pricing",
    annual: "",
    discount: "",
    cta: "Talk to Us",
    ctaHref: "/contact",
    highlighted: false,
    includes: "Team features plus:",
    outcomes: [
      "Zero-downtime deployments",
      "Complete audit compliance",
      "10x scale efficiency",
    ],
    outcomeNote:
      "Our dedicated support team works with you to define and achieve specific quality metrics within 90 days.",
    features: [
      "Predictable billing",
      "Unlimited projects",
      "Unlimited users",
      "Role based access management",
      "SSO/SAML",
      "Cloud & parallel executions",
      "On-premise/private cloud",
      "Audit logs",
      "Dedicated support & SLA",
    ],
  },
];

/* comparison-table rows: [feature, free, explorer, team, enterprise] */
const comparisonRows: [string, string, string, string, string][] = [
  ["Projects", "Unlimited", "Up to 5", "Unlimited", "Unlimited"],
  ["Users", "Unlimited", "Up to 5", "Up to 10", "Unlimited"],
  ["Story generation (BRD/FRS/Audio/Video)", "\u2713", "\u2713", "\u2713", "\u2713"],
  ["Role based access (custom roles)", "\u2713", "\u2014", "\u2014", "\u2713"],
  ["Custom domains", "\u2713", "\u2014", "\u2713", "\u2713"],
  ["Upload code repo", "\u2713", "\u2713", "\u2713", "\u2713"],
  ["VS Code extension", "\u2713", "\u2014", "\u2713", "\u2713"],
  ["Import Playwright scripts", "\u2713", "\u2014", "\u2713", "\u2713"],
  ["Generate Playwright scripts", "\u2713", "\u2014", "\u2713", "\u2713"],
  ["Test Case Generation", "\u2713", "\u2713", "\u2713", "\u2713"],
  ["Test data management", "\u2713", "\u2014", "\u2713", "\u2713"],
  ["Gap analysis (stories \u2192 code \u2192 tests)", "\u2713", "\u2713", "\u2713", "\u2713"],
  ["Jira / Azure integration", "\u2713", "\u2713", "\u2713", "\u2713"],
  ["Figma integration", "\u2713", "\u2713", "\u2713", "\u2713"],
  ["Test suites & execution", "\u2713", "\u2713", "\u2713", "\u2713"],
  ["Web & API execution (hybrid)", "\u2713", "\u2014", "\u2713", "\u2713"],
  ["Exportable execution reports", "\u2713", "\u2014", "\u2713", "\u2713"],
  ["Shareable gap reports", "\u2713", "\u2713", "\u2713", "\u2713"],
  ["GitLab / GitHub / Bitbucket / Azure", "\u2713", "\u2014", "\u2713", "\u2713"],
  ["Mobile test execution (Android/iOS)", "\u2713", "\u2014", "\u2713", "\u2713"],
  ["Import from Qtest / TestRail", "Coming Soon", "\u2014", "\u2713", "\u2713"],
  ["Ticket based support", "\u2713", "\u2014", "\u2713", "\u2713"],
  ["SSO / SAML", "\u2014", "\u2014", "\u2014", "\u2713"],
  ["Cloud & parallel executions", "\u2014", "\u2014", "\u2014", "\u2713"],
  ["On-premise / private cloud", "\u2014", "\u2014", "\u2014", "\u2713"],
  ["Audit logs", "\u2014", "\u2014", "\u2014", "\u2713"],
  ["Dedicated support & SLA", "\u2014", "\u2014", "\u2014", "\u2713"],
];

const faqs = [
  {
    q: "Is there a free trial?",
    a: "Yes. WalnutAI offers a Free Trial with unlimited projects, up to 10 users, and full access to all core features including test case generation, gap analysis, code repo upload, Playwright scripts, and more \u2014 no credit card required. Upgrade to Explorer, Team, or Enterprise for advanced features like SSO, on-premise deployment, and dedicated support.",
  },
  {
    q: "What happens when my trial ends?",
    a: "You\u2019ll be prompted to choose a paid plan. If you don\u2019t upgrade, your account moves to a read-only state\u2014your data stays safe, and you can reactivate any time.",
  },
  {
    q: "Can I switch plans later?",
    a: "Absolutely. Upgrade or downgrade at any time from your account settings. When you upgrade, the new features are available immediately; when you downgrade, the change takes effect at the next billing cycle.",
  },
  {
    q: "How does annual billing work?",
    a: "Annual billing gives you a 10% discount compared to monthly pricing. You\u2019re billed once per year, and the price is locked for the entire 12-month period.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit cards (Visa, Mastercard, Amex), as well as ACH and wire transfers for Enterprise plans. All payments are processed securely via Stripe.",
  },
  {
    q: "Do you offer refunds?",
    a: "If WalnutAI doesn\u2019t save you at least 10 hours in your first month on the Explorer plan, we\u2019ll refund your subscription\u2014no questions asked. For Team and Enterprise, contact us and we\u2019ll work with you.",
  },
];

/* ------------------------------------------------------------------ */
/*  FAQ JSON-LD                                                        */
/* ------------------------------------------------------------------ */

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};

/* ------------------------------------------------------------------ */
/*  Checkmark SVG                                                      */
/* ------------------------------------------------------------------ */

function Check() {
  return (
    <svg className="pricing-check" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="9" stroke="var(--accent)" strokeWidth="1" />
      <path
        d="M6 10l3 3 5-5"
        stroke="var(--accent)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Navbar />

      <main id="main-content" style={{ paddingTop: 80, background: "var(--surface-2b)", color: "var(--text-primary)" }}>
        {/* ============================================================ */}
        {/*  HERO                                                        */}
        {/* ============================================================ */}
        <section style={{ textAlign: "center", padding: "64px 16px 32px" }}>
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3.25rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: 16,
            }}
          >
            Plans That{" "}
            <span style={{ color: "var(--accent)" }}>Pay for Themselves</span>
          </h1>
          <p style={{ color: "var(--text-secondary)", maxWidth: 560, margin: "0 auto", fontSize: "1.05rem" }}>
            Start free. Upgrade when WalnutAI starts saving you real release
            risk. Every plan includes a 14-day trial.
          </p>
        </section>

        {/* ============================================================ */}
        {/*  GLOBAL BILLING TOGGLE                                       */}
        {/* ============================================================ */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            marginBottom: 40,
          }}
        >
          <span
            className="pricing-toggle-label"
            style={{ color: !annual ? "#ffffff" : "var(--text-tertiary)" }}
          >
            Monthly
          </span>
          <button
            className={`pricing-toggle ${annual ? "pricing-toggle-on" : ""}`}
            onClick={() => setAnnual((v) => !v)}
            aria-label={`Switch to ${annual ? "monthly" : "annual"} billing`}
          >
            <span className="pricing-toggle-knob" />
          </button>
          <span
            className="pricing-toggle-label"
            style={{ color: annual ? "#ffffff" : "var(--text-tertiary)" }}
          >
            Annual
          </span>
          <span className="pricing-discount">-10%</span>
        </div>

        {/* ============================================================ */}
        {/*  PRICING CARDS                                               */}
        {/* ============================================================ */}
        <section style={{ maxWidth: 1320, margin: "0 auto", padding: "0 16px 64px" }}>
          <div className="pricing-grid">
            {plans.map((plan) => {
              const isCustom = plan.price === "Custom pricing";
              const isFree = plan.name === "Free Trial";
              return (
                <div
                  key={plan.name}
                  className={`pricing-card${plan.highlighted ? " pricing-card-highlighted" : ""}`}
                >
                  {plan.highlighted && (
                    <div className="pricing-badge">Most teams choose this</div>
                  )}

                  <h3 className="pricing-plan-name">{plan.name}</h3>
                  <p className="pricing-tagline">{plan.tagline}</p>

                  {/* Price */}
                  <div className="pricing-price-row">
                    {isCustom ? (
                      <span className="pricing-price pricing-price-custom">
                        Custom pricing
                      </span>
                    ) : isFree ? (
                      <span className="pricing-price">$0</span>
                    ) : (
                      <>
                        <span className="pricing-price">
                          {annual ? plan.annual : plan.price}
                        </span>
                        <span className="pricing-period">
                          / user / month
                        </span>
                      </>
                    )}
                  </div>

                  {/* Per-card toggle (mirrors global but kept per card for clarity) */}
                  {!isCustom && !isFree && (
                    <div className="pricing-toggle-row">
                      <span
                        className="pricing-toggle-label"
                        style={{ color: !annual ? "#ffffff" : "var(--text-tertiary)" }}
                      >
                        Monthly
                      </span>
                      <button
                        className={`pricing-toggle ${annual ? "pricing-toggle-on" : ""}`}
                        onClick={() => setAnnual((v) => !v)}
                        aria-label={`Switch to ${annual ? "monthly" : "annual"} billing`}
                      >
                        <span className="pricing-toggle-knob" />
                      </button>
                      <span
                        className="pricing-toggle-label"
                        style={{ color: annual ? "#ffffff" : "var(--text-tertiary)" }}
                      >
                        Annual
                      </span>
                      {plan.discount && (
                        <span className="pricing-discount">{plan.discount}</span>
                      )}
                    </div>
                  )}

                  {/* Key Outcomes */}
                  <div className="pricing-outcomes">
                    <span className="pricing-outcomes-title">
                      Key Outcomes You&apos;ll Achieve:
                    </span>
                    <ul className="pricing-outcomes-list">
                      {plan.outcomes.map((o) => (
                        <li key={o}>{o}</li>
                      ))}
                    </ul>
                    <p className="pricing-outcomes-note">{plan.outcomeNote}</p>
                  </div>

                  {/* Features */}
                  {("includes" in plan && plan.includes) && (
                    <p style={{ color: "var(--accent)", fontSize: 13, fontWeight: 700, marginBottom: 12 }}>
                      {plan.includes as string}
                    </p>
                  )}
                  <ul className="pricing-features">
                    {plan.features.map((f, i) => (
                      <li key={i}>
                        <Check />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href={plan.ctaHref}
                    {...(plan.ctaHref === SIGNUP_URL
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className={`pricing-cta${plan.highlighted ? " pricing-cta-highlighted" : ""}`}
                  >
                    {plan.cta}
                  </a>
                </div>
              );
            })}
          </div>

          {/* AutoBot Add-on — inside pricing section */}
          <div style={{ background: "var(--surface-2)", border: "1px solid var(--border-inset)", borderRadius: 20, padding: "32px 32px", marginTop: 20, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(to right, var(--accent), #FF9D42)" }} />
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: 32 }}>
              <div style={{ flex: "1 1 320px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                  <h3 style={{ color: "var(--text-primary)", fontSize: 20, fontWeight: 800, margin: 0 }}>AutoBot</h3>
                  <span style={{ background: "rgba(241, 127, 13, 0.1)", border: "1px solid rgba(241, 127, 13, 0.3)", color: "var(--accent)", fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 50 }}>ADD-ON (Custom Pricing)</span>
                </div>
                <p style={{ color: "var(--text-tertiary)", fontSize: 12, marginBottom: 12 }}>Available across all licenses</p>
                <p style={{ color: "var(--text-secondary-strong)", fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                  AutoBot helps you go from an idea to a fully built application, while keeping everything in sync — requirements, development, and test cases — so nothing gets missed.
                </p>
              </div>
              <div style={{ flex: "1 1 320px" }}>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                  {[
                    "Builds a complete application from your input or idea",
                    "Creates and keeps requirements up to date automatically",
                    "Generates test cases alongside the application",
                    "Keeps requirements, code, and test cases aligned at all times",
                    "Identifies and reduces gaps across the entire flow",
                    "Reflects any changes across all parts without manual effort",
                  ].map((item) => (
                    <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                      <span style={{ color: "var(--accent)", marginTop: 2, flexShrink: 0 }}>&#10003;</span>
                      <span style={{ color: "var(--text-secondary-strong)", fontSize: 13, lineHeight: 1.6 }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  FEATURE COMPARISON TABLE                                    */}
        {/* ============================================================ */}
        <section
          style={{
            maxWidth: 960,
            margin: "0 auto",
            padding: "0 16px 80px",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 700,
              marginBottom: 40,
            }}
          >
            Feature <span style={{ color: "var(--accent)" }}>Comparison</span>
          </h2>

          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                minWidth: 640,
              }}
            >
              <thead>
                <tr
                  style={{
                    borderBottom: "1px solid var(--border-inset)",
                  }}
                >
                  <th
                    style={{
                      textAlign: "left",
                      padding: "12px 16px",
                      color: "var(--text-secondary)",
                      fontWeight: 600,
                      fontSize: 13,
                    }}
                  >
                    Feature
                  </th>
                  {["Free Trial", "Explorer", "Team", "Enterprise"].map((h) => (
                    <th
                      key={h}
                      style={{
                        textAlign: "center",
                        padding: "12px 16px",
                        color: h === "Team" ? "var(--accent)" : "#ffffff",
                        fontWeight: 700,
                        fontSize: 14,
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map(([feature, free, explorer, team, enterprise], idx) => (
                  <tr
                    key={feature}
                    style={{
                      borderBottom: "1px solid var(--border-muted)",
                      background: idx % 2 === 0 ? "transparent" : "var(--surface-2c)",
                    }}
                  >
                    <td
                      style={{
                        padding: "10px 16px",
                        color: "var(--text-secondary-strong)",
                        fontSize: 13,
                      }}
                    >
                      {feature}
                    </td>
                    {[free, explorer, team, enterprise].map((val, ci) => (
                      <td
                        key={ci}
                        style={{
                          textAlign: "center",
                          padding: "10px 16px",
                          color:
                            val === "\u2713"
                              ? "var(--accent)"
                              : val === "\u2014"
                              ? "var(--border-strong)"
                              : "var(--text-secondary-strong)",
                          fontSize: 13,
                          fontWeight: val === "\u2713" ? 700 : 400,
                        }}
                      >
                        {val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  FAQ                                                         */}
        {/* ============================================================ */}
        <section
          style={{
            maxWidth: 760,
            margin: "0 auto",
            padding: "0 16px 80px",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 700,
              marginBottom: 40,
            }}
          >
            Frequently Asked{" "}
            <span style={{ color: "var(--accent)" }}>Questions</span>
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  style={{
                    background: "var(--surface-2c)",
                    border: "1px solid var(--border-inset)",
                    borderRadius: 12,
                    overflow: "hidden",
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "16px 20px",
                      background: "transparent",
                      border: "none",
                      color: "var(--text-primary)",
                      fontSize: 15,
                      fontWeight: 600,
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    {faq.q}
                    <span
                      style={{
                        color: "var(--accent)",
                        fontSize: 22,
                        lineHeight: 1,
                        transition: "transform 0.2s",
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                        flexShrink: 0,
                        marginLeft: 12,
                      }}
                    >
                      +
                    </span>
                  </button>
                  {isOpen && (
                    <div
                      style={{
                        padding: "0 20px 16px",
                        color: "var(--text-secondary)",
                        fontSize: 14,
                        lineHeight: 1.7,
                      }}
                    >
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ============================================================ */}
        {/*  BOTTOM CTA                                                  */}
        {/* ============================================================ */}
        <section
          style={{
            textAlign: "center",
            padding: "64px 16px 80px",
            background:
              "radial-gradient(ellipse at center, rgba(241,127,13,0.08) 0%, transparent 70%)",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)",
              fontWeight: 800,
              marginBottom: 16,
            }}
          >
            Ready to Ship{" "}
            <span style={{ color: "var(--accent)" }}>With Confidence?</span>
          </h2>
          <p
            style={{
              color: "var(--text-secondary)",
              maxWidth: 520,
              margin: "0 auto 32px",
              fontSize: "1.05rem",
            }}
          >
            Start your 14-day free trial today. No credit card required.
          </p>
          <a
            href={SIGNUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              background: "var(--accent)",
              color: "var(--text-on-accent)",
              fontWeight: 700,
              fontSize: 16,
              padding: "14px 40px",
              borderRadius: 10,
              textDecoration: "none",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.background = "var(--accent-hover)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.background = "var(--accent)")
            }
          >
            Get Started Free
          </a>
        </section>
      </main>

      <Footer />
    </>
  );
}
