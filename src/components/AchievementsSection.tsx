"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const slides = [
  {
    stat: "60%",
    title: "faster team\nramp-up",
    subtitle: "New Team Members Productive in Days",
    description:
      "Your entire requirements-to-code-to-test structure is visible. New engineers can trace any feature from story to implementation.",
    dashboardTitle: "Fintricity",
    balance: "$28,520.30",
    savings: "$24,800.45",
    cashFlow: "$540,323.45",
  },
  {
    stat: "73%",
    title: "fewer bugs\nin production",
    subtitle: "Catch Issues Before They Ship",
    description:
      "AI-powered gap analysis identifies missing test coverage and edge cases before code reaches production.",
    dashboardTitle: "BugTracker",
    balance: "1,247",
    savings: "98.2%",
    cashFlow: "12 min",
  },
  {
    stat: "96%",
    title: "requirement\ncoverage",
    subtitle: "Nothing Falls Through the Cracks",
    description:
      "Every user story, acceptance criteria, and edge case is mapped to code and tests — automatically verified in real time.",
    dashboardTitle: "CoverageHub",
    balance: "96.4%",
    savings: "1,892",
    cashFlow: "99.1%",
  },
  {
    stat: "15+ hrs",
    title: "saved per\nsprint",
    subtitle: "Automate the Repetitive Work",
    description:
      "Test case generation, gap reports, and traceability updates happen automatically — freeing your team for creative work.",
    dashboardTitle: "SprintBoard",
    balance: "15.4 hrs",
    savings: "342",
    cashFlow: "$12,450",
  },
  {
    stat: "80%",
    title: "reduced\nrelease risk",
    subtitle: "Ship With Confidence Every Time",
    description:
      "Continuous gap detection flags coverage holes, security risks, and compliance gaps before every release.",
    dashboardTitle: "RiskGuard",
    balance: "Low Risk",
    savings: "99.7%",
    cashFlow: "0 Critical",
  },
  {
    stat: "3x",
    title: "faster\ndelivery",
    subtitle: "From Intent to Production at Speed",
    description:
      "End-to-end AI orchestration across requirements, code, and testing collapses your delivery timeline dramatically.",
    dashboardTitle: "DeliveryOps",
    balance: "3.2x",
    savings: "94.8%",
    cashFlow: "2.1 days",
  },
];

function DashboardMock({ slide }: { slide: (typeof slides)[0] }) {
  return (
    <div className="achv-dashboard">
      {/* Top bar */}
      <div className="achv-dash-topbar">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-orange flex items-center justify-center">
            <span className="text-white text-[8px] font-bold">W</span>
          </div>
          <span className="text-white text-xs font-semibold">{slide.dashboardTitle}</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 rounded-full bg-gray-700" />
          <div className="w-4 h-4 rounded-full bg-gray-700" />
        </div>
      </div>

      <div className="flex flex-1 min-h-0">
        {/* Sidebar */}
        <div className="achv-dash-sidebar">
          <div className="w-full h-5 bg-orange/20 rounded mb-3" />
          {["Dashboard", "Analytics", "Transactions", "Invoices"].map((item) => (
            <div key={item} className="flex items-center gap-1.5 py-1.5">
              <div className="w-3.5 h-3.5 rounded bg-orange/30 flex-shrink-0" />
              <span className="text-gray-400 text-[9px]">{item}</span>
            </div>
          ))}
          <div className="mt-3 pt-3 border-t border-white/5">
            <span className="text-gray-600 text-[8px] uppercase tracking-wider">Features</span>
            {["Recurring", "Subscriptions", "Feedback"].map((item) => (
              <div key={item} className="flex items-center gap-1.5 py-1.5">
                <div className="w-3.5 h-3.5 rounded bg-gray-700/50 flex-shrink-0" />
                <span className="text-gray-500 text-[9px]">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-auto pt-3">
            <div className="text-[8px] text-gray-500">Upgrade Pro! 🔥</div>
          </div>
        </div>

        {/* Main content */}
        <div className="achv-dash-main">
          <div className="flex items-center justify-between mb-3">
            <div>
              <span className="text-white text-sm font-semibold block">Overview</span>
              <span className="text-gray-500 text-[9px]">Here is the summary of overall data</span>
            </div>
          </div>

          {/* Balance cards */}
          <div className="flex gap-2 mb-3">
            <div className="flex-1 bg-orange rounded-lg p-2.5">
              <span className="text-white/70 text-[8px] block">My balance</span>
              <span className="text-white text-sm font-bold">{slide.balance}</span>
            </div>
            <div className="flex-1 bg-black/40 border border-white/5 rounded-lg p-2.5">
              <span className="text-gray-400 text-[8px] block">Savings account</span>
              <span className="text-white text-sm font-bold">{slide.savings}</span>
            </div>
          </div>

          {/* Wallet section */}
          <div className="flex gap-2">
            <div className="flex-1">
              <span className="text-white text-[10px] font-semibold block mb-2">My Wallet</span>
              <div className="space-y-1.5">
                {[
                  { flag: "🇺🇸", label: "USD", amount: "$24,678.00" },
                  { flag: "🇪🇺", label: "EUR", amount: "€28,345.00" },
                  { flag: "🇬🇧", label: "GBP", amount: "£25,000.00" },
                ].map((w) => (
                  <div key={w.label} className="flex items-center justify-between bg-black/30 rounded px-2 py-1.5">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px]">{w.flag}</span>
                      <span className="text-gray-400 text-[9px]">{w.label}</span>
                    </div>
                    <span className="text-white text-[9px]">{w.amount}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white text-[10px] font-semibold">Cash Flow</span>
              </div>
              <div className="bg-black/30 rounded-lg p-2.5 h-[calc(100%-24px)] flex flex-col justify-center">
                <span className="text-white text-lg font-bold">{slide.cashFlow}</span>
                <div className="mt-2 h-8 flex items-end gap-0.5">
                  {[40, 65, 45, 80, 55, 70, 90, 60, 75, 50, 85, 68].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm"
                      style={{
                        height: `${h}%`,
                        background: i > 8 ? '#F17F0D' : 'rgba(241,127,13,0.3)',
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-3">
            <span className="text-gray-500 text-[9px]">Recent Activities</span>
            <span className="text-gray-600 text-[8px]">🔍 Search</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AchievementsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const scrollDistance = track.scrollWidth - window.innerWidth;

    const ctx = gsap.context(() => {
      gsap.to(track, {
        x: -scrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1,
          end: () => `+=${scrollDistance * 1.2}`,
          invalidateOnRefresh: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="achievements-section">
      {/* Header */}
      <div className="achievements-header">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
          What Teams Achieve With <span className="text-orange">Walnut AI</span>
        </h2>
        <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
          Real outcomes from teams who stopped guessing and started knowing what&apos;s missing
        </p>
      </div>

      {/* Horizontal slide track */}
      <div ref={trackRef} className="achievements-track">
        {slides.map((slide, i) => (
          <div key={i} className="achievements-slide">
            <div className="achievements-slide-inner">
              {/* Left — Stats with orange dot bullets */}
              <div className="achievements-left">
                <div className="achv-stat-row">
                  <div className="achv-dots">
                    <div className="achv-dot" />
                    <div className="achv-dot" />
                  </div>
                  <div>
                    <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-none">
                      {slide.stat} <span className="text-white">faster team</span>
                    </div>
                    <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-none">
                      ramp-up
                    </div>
                  </div>
                </div>

                <div className="achv-stat-row mt-4">
                  <div className="achv-dots">
                    <div className="achv-dot" />
                  </div>
                  <p className="text-white font-semibold text-sm sm:text-base">
                    {slide.subtitle}
                  </p>
                </div>

                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mt-3 pl-5 max-w-xs">
                  {slide.description}
                </p>
              </div>

              {/* Right — Dashboard with perspective tilt */}
              <div className="achievements-right">
                <div className="achv-dashboard-wrapper">
                  <DashboardMock slide={slide} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
