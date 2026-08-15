"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const leftStats = [
  {
    value: "1 prompt",
    title: "Idea to production",
    desc: "Ship your app in minutes with the first prompt",
  },
  {
    value: "5 min",
    title: "First Gap Analysis",
    desc: "Instant insights on missing coverage",
  },
  {
    value: "15+ hrs",
    title: "Saved Per Sprint",
    desc: "on manual test case creation",
  },
];

const rightStats = [
  {
    value: "96%",
    title: "Avg Requirement Coverage",
    desc: "on manual test case creation",
  },
  {
    value: "Instant",
    title: "Test Case Generation",
    desc: "from user stories in minutes",
  },
  {
    value: "80%",
    title: "Cut release risk",
    desc: "With continuous gap detection",
  },
];

export default function BrainStats() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".brain-stat-left", {
        x: -60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      gsap.from(".brain-stat-right", {
        x: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      gsap.from(".brain-bg-img", {
        scale: 1.1,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="brain-stats-section">
      {/* Brain image as full section background */}
      <div className="brain-stats-bg">
        <img
          src="/assets/brain-image.svg"
          alt=""
          role="presentation"
          className="brain-bg-img"
          loading="lazy"
          width={600}
          height={600}
        />
      </div>

      <div className="brain-stats-container">
        {/* Left stats */}
        <div className="brain-stats-col">
          {leftStats.map((stat, i) => (
            <div key={i} className="brain-stat brain-stat-left">
              <span className="brain-stat-value">{stat.value}</span>
              <span className="brain-stat-title">{stat.title}</span>
              <span className="brain-stat-desc">{stat.desc}</span>
            </div>
          ))}
        </div>

        {/* Right stats */}
        <div className="brain-stats-col">
          {rightStats.map((stat, i) => (
            <div key={i} className="brain-stat brain-stat-right">
              <span className="brain-stat-value">{stat.value}</span>
              <span className="brain-stat-title">{stat.title}</span>
              <span className="brain-stat-desc">{stat.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
