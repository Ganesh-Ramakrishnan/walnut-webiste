"use client";

import AnimateOnScroll from "./AnimateOnScroll";

const row1 = [
  { name: "RabbitMQ", icon: "/assets/images-logo/RabbitMQ.png" },
  { name: "LangChain", icon: "/assets/images-logo/LangChain.png" },
  { name: "Python", icon: "/assets/images-logo/Python.png" },
  { name: "React", icon: "/assets/images-logo/React.png" },
  { name: "PostgreSQL", icon: "/assets/images-logo/PostgreSQL.png" },
  { name: "Docker", icon: "/assets/images-logo/Docker.png" },
  { name: "Kubernetes", icon: "/assets/images-logo/Kubernetes.png" },
  { name: "AWS", icon: "/assets/images-logo/AWS.png" },
];

const row2 = [
  { name: "GraphQL", icon: "/assets/images-logo/GraphQL.png" },
  { name: "Java", icon: "/assets/images-logo/Java.png" },
  { name: "Go", icon: "/assets/images-logo/Go.png" },
  { name: "JavaScript", icon: "/assets/images-logo/JavaScript.png" },
  { name: "TypeScript", icon: "/assets/images-logo/TypeScript.png" },
  { name: "Node.js", icon: "/assets/images-logo/Node.js.png" },
  { name: "Redis", icon: "/assets/images-logo/Redis.png" },
  { name: "MongoDB", icon: "/assets/images-logo/MongoDB.png" },
];

function TechPill({ tech }: { tech: { name: string; icon: string } }) {
  return (
    <div className="tech-pill">
      <div className="tech-pill-icon">
        <img src={tech.icon} alt={`${tech.name} logo`} className="tech-pill-img" loading="lazy" width={24} height={24} />
      </div>
      <span className="tech-pill-name">{tech.name}</span>
    </div>
  );
}

function MarqueeRow({
  items,
  direction,
  className,
}: {
  items: typeof row1;
  direction: "left" | "right";
  className?: string;
}) {
  const doubled = [...items, ...items, ...items];

  return (
    <div className={`tech-marquee ${direction === "right" ? "tech-marquee-reverse" : ""} ${className || ""}`}>
      <div className="tech-marquee-track">
        {doubled.map((tech, i) => (
          <TechPill key={`${tech.name}-${i}`} tech={tech} />
        ))}
      </div>
    </div>
  );
}

export default function TechnologiesSection() {
  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <AnimateOnScroll animation="fadeUp" className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            Built with{" "}<span className="text-orange">Modern Technologies</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            Real outcomes from teams who stopped guessing and started knowing what&apos;s missing
          </p>
        </AnimateOnScroll>
      </div>

      {/* Marquee rows with subtle angle */}
      <div className="tech-cross-wrapper">
        <MarqueeRow items={row1} direction="left" className="tech-cross-row-1" />
        <MarqueeRow items={row2} direction="right" className="tech-cross-row-2" />
      </div>
    </section>
  );
}
