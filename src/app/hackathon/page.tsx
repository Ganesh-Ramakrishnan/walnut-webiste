import type { Metadata } from "next";
import Image from "next/image";
import { Inter, Space_Grotesk } from "next/font/google";
import { Code } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import HackathonCanvas from "@/components/HackathonCanvas";
import HackathonForm from "@/components/HackathonForm";

// Typography from the original hackathon mockup: Space Grotesk for display,
// Inter for body. Self-hosted by next/font and scoped to this page only —
// the rest of the site keeps Plus Jakarta Sans.
const inter = Inter({ subsets: ["latin"], variable: "--hk-font-sans", display: "swap" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--hk-font-display",
  display: "swap",
});

const siteUrl = "https://www.walnutai.ai";

export const metadata: Metadata = {
  title: "WalnutAI Hackathon - The 24-Hour Sprint",
  description:
    "Join elite engineers, product visionaries, and AI researchers for the WalnutAI Hackathon. 24 hours, ₹1 Lakh+ prize pool, and free API credits. Registrations close 10th September.",
  openGraph: {
    title: "WalnutAI Hackathon - The 24-Hour Sprint",
    description:
      "24 hours. ₹1 Lakh+ prize pool. Free API credits. Build production-ready AI, not throwaway prototypes.",
    url: `${siteUrl}/hackathon`,
    siteName: "WalnutAI",
    type: "website",
  },
  alternates: { canonical: `${siteUrl}/hackathon` },
};

const stats = [
  { value: "₹1 Lakh+", label: "Prize Pool" },
  { value: "24", label: "Hours to Build" },
  { value: "Offline", label: "In-Person Event" },
  { value: "Free", label: "API Credits" },
];

export default function HackathonPage() {
  return (
    // hk-light scopes the light theme to this page only — the shared Navbar and
    // Footer are dark by default and are overridden inside this wrapper.
    <div className={`hk-light ${inter.variable} ${spaceGrotesk.variable}`}>
      <Navbar />
      <main id="main-content" className="hk-page">
        {/* ── Hero ───────────────────────────────────── */}
        <section className="hk-hero">
          <HackathonCanvas />
          <div className="hk-glow hk-glow--orange" />
          <div className="hk-glow hk-glow--cyan" />

          <div className="hk-container hk-hero-inner">
            <div className="hk-badge">
              <span className="hk-ping">
                <span />
                <span />
              </span>
              Registrations closing on 10th September
            </div>

            <p className="hk-kicker">WalnutAI Hackathon 2026</p>

            <h1 className="hk-h1">
              Build the future in <br />
              <span className="hk-gemini-text">24 Hours.</span>
            </h1>

            <p className="hk-hero-sub">
              Join elite engineers, product visionaries, and AI researchers for WalnutAI&apos;s
              premier hackathon. Don&apos;t just prototype — build production-ready solutions.
            </p>

            <div className="hk-cta-row">
              <a href="#register" className="hk-btn-primary">
                <Code size={18} />
                Register to participate
              </a>
              <a href="#schedule" className="hk-btn-ghost">
                View Agenda
              </a>
            </div>

            <div className="hk-stats">
              {stats.map((stat) => (
                <div key={stat.label} className="hk-stat">
                  <span className="hk-stat-num">{stat.value}</span>
                  <span className="hk-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why attend ─────────────────────────────── */}
        <section id="about" className="hk-section hk-section--alt">
          <div className="hk-container">
            <div className="hk-about-grid">
              <AnimateOnScroll animation="fadeUp">
                <h2 className="hk-h2">
                  More than a hackathon. An <span className="hk-cyan-text">accelerator</span> for
                  ideas.
                </h2>
                <p className="hk-about-copy">
                  The WalnutAI Hackathon isn&apos;t about building simple wrappers that get thrown
                  away on Monday. We are bringing together domain experts, product thinkers, and
                  elite engineers to solve specific, real-world problems.
                </p>
                <p className="hk-about-copy">
                  Whether you are tackling automated customer support, advanced predictive
                  logistics, or computer vision in healthcare, you&apos;ll have the resources,
                  mentorship, and API credits you need to build something production-ready.
                </p>

                <div className="hk-facts">
                  <div className="hk-fact">
                    <span className="hk-fact-num">24</span>
                    <span className="hk-fact-label">Hours</span>
                  </div>
                  <div className="hk-fact">
                    <span className="hk-fact-num">4</span>
                    <span className="hk-fact-label">Per Team</span>
                  </div>
                  <div className="hk-fact">
                    <span className="hk-fact-num">3</span>
                    <span className="hk-fact-label">Min Demo</span>
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fadeUp" className="hk-about-visual">
                <div className="hk-photo-frame">
                  <div className="hk-photo-clip">
                    <Image
                      src="/assets/hackathon-team.jpg"
                      alt="Team collaborating on laptops around a table during the sprint"
                      width={1400}
                      height={934}
                      className="hk-photo"
                      sizes="(max-width: 900px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* ── Schedule ───────────────────────────────── */}
        <section id="schedule" className="hk-section">
          <div className="hk-container hk-container--narrow">
            <AnimateOnScroll animation="fadeUp" className="hk-section-head">
              <h2 className="hk-h2">
                The <span className="hk-gemini-text">24-Hour</span> Sprint
              </h2>
              <p className="hk-section-sub">
                A structured, high-intensity agenda designed for rapid development from kickoff to
                final demos.
              </p>
            </AnimateOnScroll>

            <div className="hk-timeline">
              <AnimateOnScroll animation="fadeUp" className="hk-tl-item">
                <span className="hk-tl-dot" />
                <h3 className="hk-tl-day">Saturday, 26th September</h3>
                <div className="hk-sched-card hk-glass">
                  <div className="hk-sched-head">
                    <h4 className="hk-sched-title">Kickoff &amp; Team Formation</h4>
                  </div>
                  <p className="hk-sched-desc">
                    The sprint begins. Opening ceremony, reveal of secret problem statements, and a
                    networking mixer. Form your squad and get your API keys.
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fadeUp" className="hk-tl-item">
                <span className="hk-tl-dot" />
                <h3 className="hk-tl-day">Saturday, 26th September</h3>
                <div className="hk-sched-card hk-sched-card--cyan hk-glass">
                  <div className="hk-sched-head">
                    <h4 className="hk-sched-title">Deep Work &amp; Mentorship</h4>
                    <span className="hk-sched-time">All Day</span>
                  </div>
                  <p className="hk-sched-desc">
                    Uninterrupted build time. Mentors will be available on-site for technical
                    troubleshooting, architecture reviews, and prompt engineering assistance.
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fadeUp" className="hk-tl-item">
                <span className="hk-tl-dot" />
                <h3 className="hk-tl-day">Sunday, 27th September</h3>
                <div className="hk-sched-card hk-sched-card--emerald hk-glass">
                  <div className="hk-sched-head">
                    <h4 className="hk-sched-title">Code Freeze &amp; Demos</h4>
                    <span className="hk-sched-time hk-sched-time--emerald">All Day</span>
                  </div>
                  <p className="hk-sched-desc">
                    Tools down at precisely 12:00 PM. Teams will have 3-5 minutes to demo their
                    working prototype (Input + AI = Output + Action) to our panel of judges,
                    followed by a 2-minute Q&amp;A.
                  </p>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* ── Register ───────────────────────────────── */}
        <section id="register" className="hk-register hk-section--alt">
          <div className="hk-register-glow" />
          <div className="hk-container">
            <AnimateOnScroll animation="fadeUp" className="hk-register-head">
              <h2 className="hk-h2">
                Ready to <span className="hk-orange-text">Build</span>?
              </h2>
              <p className="hk-section-sub" style={{ maxWidth: 620, margin: "0 auto" }}>
                Applications are reviewed on a rolling basis. Secure your spot, API credits, and
                early access to the community.
              </p>
            </AnimateOnScroll>

            <div className="hk-form-card hk-glass">
              <HackathonForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
