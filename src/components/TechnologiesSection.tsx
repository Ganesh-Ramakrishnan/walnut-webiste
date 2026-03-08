"use client";

import AnimateOnScroll from "./AnimateOnScroll";

const row1 = [
  { name: "MQ", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rabbitmq/rabbitmq-original.svg", color: "#8B5CF6" },
  { name: "LangChain", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", color: "#1A8C5B" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", color: "#3776AB" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "#61DAFB" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", color: "#336791" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", color: "#2496ED" },
];

const row2 = [
  { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg", color: "#E535AB" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", color: "#ED8B00" },
  { name: "Go", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg", color: "#00ADD8" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "#F7DF1E" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", color: "#3178C6" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "#539E43" },
];

function TechPill({ tech }: { tech: { name: string; icon: string; color: string } }) {
  return (
    <div className="tech-pill">
      <div className="tech-pill-icon">
        <img src={tech.icon} alt={tech.name} className="tech-pill-img" />
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
            Built with <span className="text-orange">Modern Technologies</span>
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
