"use client";

import { useState } from "react";
import AnimateOnScroll from "./AnimateOnScroll";

const plans = [
  {
    name: "Explorer",
    tagline: "For Teams Ready to Ship Faster",
    price: "$18",
    annual: "$194.4",
    discount: "-10%",
    outcomes: [
      "Save 15+ hours/sprint on test case creation",
      "Catch 40+ gaps per project between requirements and code",
      "Reduce manual testing effort by 50%",
    ],
    outcomeNote:
      "If WalnutAI doesn't save you at least 10 hours in your first month, we'll refund your subscription.",
    credits: "1,000 credits (+$20/mo)",
    features: [
      "Multiple Projects (upto 5)",
      "Invite upto 5 users",
      "Jira/Azure integration for project management",
      "Upload the code repo",
      "Figma integration to generate stories and test cases",
      "Generate automation test cases from AI prompts/Live application",
      "Create test suites and execution",
      "Create test suites and execution",
      "Shareable gap reports",
    ],
    cta: "Upgrade to Explorer",
    highlighted: false,
  },
  {
    name: "Team",
    tagline: "For Teams Who Can't Afford Production Bugs",
    price: "$65",
    annual: "$702",
    discount: "-10%",
    outcomes: [
      "Cut production defects by 80%",
      "Achieve 95%+ requirements coverage across all repos",
      "Ship 2+ faster with automated test generation",
      "Reduce technical debt accumulation",
    ],
    outcomeNote:
      "Teams on this plan ship an average of 2.3x more features per quarter while reducing bugs by 73%.",
    credits: "3,000 credits (+$35/mo)",
    features: [
      "Unlimited projects",
      "Invite upto 10 users",
      "Role based access management",
      "Connect the code base via gitlab/github/bitbucket",
      "Import playwright scripts",
      "Import tests from Qtest and Testrail",
      "Mobile test execution (includes android and iOS)",
      "Continuous gap analysis across multiple repositories",
      "Community support",
      "Custom domains",
    ],
    cta: "Start Team trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    tagline: "For Organizations Where Failure Isn't an Option",
    price: "Custom pricing",
    annual: "",
    discount: "",
    outcomes: [
      "Zero-downtime deployments with comprehensive pre-release gap analysis",
      "Complete audit compliance with automated traceability",
      "10x scale efficiency with unlimited projects",
      "Custom integration with your proprietary tools",
    ],
    outcomeNote:
      "Your dedicated success team works with you to define and achieve specific quality metrics within 90 days.",
    credits: "Custom annual credit bundle or unlimited usage",
    features: [
      "Predictable billing with no surprise overages",
      "Unlimited projects",
      "Unlimited users",
      "SSO/SAML integration",
      "Cloud & parallel executions",
      "On-premise/private cloud setup",
      "Audit logs",
      "Dedicated support & SLA",
    ],
    cta: "Talk to us",
    highlighted: false,
  },
];

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<Record<string, boolean>>({
    Explorer: false,
    Team: false,
    Enterprise: false,
  });
  const [creditsOn, setCreditsOn] = useState<Record<string, boolean>>({
    Explorer: true,
    Team: true,
    Enterprise: true,
  });

  const toggleBilling = (plan: string) => {
    setBillingCycle((prev) => ({ ...prev, [plan]: !prev[plan] }));
  };

  const toggleCredits = (plan: string) => {
    setCreditsOn((prev) => ({ ...prev, [plan]: !prev[plan] }));
  };

  return (
    <section id="pricing" className="relative py-16 sm:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimateOnScroll animation="fadeUp" className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            Plans That <span className="text-orange">Pay for Themselves</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Start free. Upgrade when WalnutAI starts saving you real release risk.
          </p>
        </AnimateOnScroll>

        <div className="pricing-grid">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`pricing-card ${plan.highlighted ? "pricing-card-highlighted" : ""}`}
            >
              {/* Badge for Team plan */}
              {plan.highlighted && (
                <div className="pricing-badge">Most teams choose this</div>
              )}

              {/* Plan name + tagline */}
              <h3 className="pricing-plan-name">{plan.name}</h3>
              <p className="pricing-tagline">{plan.tagline}</p>

              {/* Price */}
              <div className="pricing-price-row">
                {plan.price !== "Custom pricing" ? (
                  <>
                    <span className="pricing-price">
                      {billingCycle[plan.name] ? plan.annual : plan.price}
                    </span>
                    <span className="pricing-period">/ user / {billingCycle[plan.name] ? "year" : "month"}</span>
                  </>
                ) : (
                  <span className="pricing-price pricing-price-custom">
                    Custom pricing
                  </span>
                )}
              </div>

              {/* Monthly / Annual toggle */}
              {plan.price !== "Custom pricing" && (
                <div className="pricing-toggle-row">
                  <span className={`pricing-toggle-label ${!billingCycle[plan.name] ? "text-white" : "text-gray-500"}`}>
                    Monthly
                  </span>
                  <button
                    className={`pricing-toggle ${billingCycle[plan.name] ? "pricing-toggle-on" : ""}`}
                    onClick={() => toggleBilling(plan.name)}
                  >
                    <span className="pricing-toggle-knob" />
                  </button>
                  <span className={`pricing-toggle-label ${billingCycle[plan.name] ? "text-white" : "text-gray-500"}`}>
                    Annual
                  </span>
                  {plan.discount && (
                    <span className="pricing-discount">{plan.discount}</span>
                  )}
                </div>
              )}

              {/* Key Outcomes box */}
              <div className="pricing-outcomes">
                <span className="pricing-outcomes-title">Key Outcomes You&apos;ll Achieve:</span>
                <ul className="pricing-outcomes-list">
                  {plan.outcomes.map((o) => (
                    <li key={o}>{o}</li>
                  ))}
                </ul>
                <p className="pricing-outcomes-note">{plan.outcomeNote}</p>
              </div>

              {/* Credits section */}
              <div className="pricing-credits-row">
                <span className="pricing-credits-label">Credits</span>
                {plan.name !== "Enterprise" && (
                  <button
                    className={`pricing-toggle pricing-toggle-sm ${creditsOn[plan.name] ? "pricing-toggle-on" : ""}`}
                    onClick={() => toggleCredits(plan.name)}
                  >
                    <span className="pricing-toggle-knob" />
                  </button>
                )}
              </div>
              <div className="pricing-credits-amount-row">
                <p className="pricing-credits-amount">{plan.credits}</p>
                <span className="pricing-info-wrap">
                  <svg className="pricing-info-icon" width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="7" stroke="#6b7280" strokeWidth="1.2" />
                    <text x="8" y="11.5" textAnchor="middle" fill="#6b7280" fontSize="10" fontWeight="600" fontFamily="sans-serif">i</text>
                  </svg>
                  <span className="pricing-info-tooltip">
                    Need more usage? Top up additional credits anytime without changing your subscription.
                  </span>
                </span>
              </div>

              {/* Feature list */}
              <ul className="pricing-features">
                {plan.features.map((f, i) => (
                  <li key={i}>
                    <svg className="pricing-check" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="9" stroke="#F17F0D" strokeWidth="1" />
                      <path d="M6 10l3 3 5-5" stroke="#F17F0D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href="#contact"
                className={`pricing-cta ${plan.highlighted ? "pricing-cta-highlighted" : ""}`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
