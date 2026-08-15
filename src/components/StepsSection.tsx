"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimateOnScroll from "./AnimateOnScroll";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "1",
    description: "Sign up free (no credit card required)",
  },
  {
    number: "2",
    description: "Upload a requirements doc or connect your Jira",
  },
  {
    number: "3",
    description: "Connect your GitHub repo (read-only access)",
  },
  {
    number: "4",
    description: "Get your first gap analysis in 5 minutes",
  },
];

export default function StepsSection() {
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = stepsRef.current;
    if (!el) return;

    const circles = el.querySelectorAll<HTMLElement>(".step-circle");
    const descs = el.querySelectorAll<HTMLElement>(".step-desc");
    const connectors = el.querySelectorAll<HTMLElement>(".step-connector-fill");

    // Start all faded
    gsap.set(circles, { opacity: 0.25, scale: 0.8 });
    gsap.set(descs, { opacity: 0.15 });
    gsap.set(connectors, { clipPath: "inset(0 100% 0 0)" });

    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 2,
      scrollTrigger: {
        trigger: el,
        start: "top 75%",
        toggleActions: "play pause resume pause",
      },
    });

    // Animate each step sequentially
    circles.forEach((circle, i) => {
      // Highlight circle with a glow pop
      tl.to(circle, {
        opacity: 1,
        scale: 1.05,
        duration: 0.5,
        ease: "back.out(1.7)",
      });
      tl.to(circle, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
      // Fade in description
      tl.to(
        descs[i],
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
        "<-0.3"
      );

      // Draw the dashed line to next step
      if (i < circles.length - 1) {
        tl.to(connectors[i], {
          clipPath: "inset(0 0% 0 0)",
          duration: 1.2,
          ease: "power1.inOut",
        }, "+=0.3");
      }
    });

    // Hold the completed state
    tl.to({}, { duration: 2 });

    // Fade everything out gently before loop
    tl.to(
      circles,
      { opacity: 0.25, scale: 0.8, duration: 0.8, ease: "power2.inOut" },
    );
    tl.to(descs, { opacity: 0.15, duration: 0.8, ease: "power2.inOut" }, "<");
    tl.to(connectors, { clipPath: "inset(0 100% 0 0)", duration: 0.6, ease: "power2.inOut" }, "<");

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="fadeUp" className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            Find Out What{" "}
            <span className="text-orange">You&apos;re Missing</span>{" "}In 5 Minutes
          </h2>
          <p className="text-text-secondary text-sm sm:text-base max-w-2xl mx-auto">
            Upload one requirements document. Connect one repo. See the gaps.
          </p>
        </AnimateOnScroll>

        {/* Steps with circles and dashed connectors */}
        <div ref={stepsRef} className="mb-10 sm:mb-14">
          <div className="steps-row">
            {steps.map((step, i) => (
              <div key={step.number} className="step-item">
                <div className="step-circle-wrapper">
                  {i > 0 && (
                    <div className="step-connector">
                      <div className="step-connector-fill" />
                    </div>
                  )}
                  <div className="step-circle">
                    <span className="step-number">{step.number}</span>
                  </div>
                </div>
                <p className="step-desc">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Outcome Promise */}
        <AnimateOnScroll animation="fadeUp" className="mb-8 sm:mb-10">
          <div className="bg-card-bg border border-card-border rounded-xl sm:rounded-2xl px-5 sm:px-8 py-4 sm:py-5 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
            <span className="text-orange font-bold text-sm sm:text-base whitespace-nowrap">Outcome Promise :</span>
            <p className="text-text-secondary-strong text-xs sm:text-sm leading-relaxed">
              You&apos;ll discover at least 5 things you didn&apos;t know were missing. If not, we&apos;ll personally review your setup for free
            </p>
          </div>
        </AnimateOnScroll>

      </div>
    </section>
  );
}
