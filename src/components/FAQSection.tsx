"use client";

import { useState } from "react";
import AnimateOnScroll from "./AnimateOnScroll";

const faqs = [
  {
    question: "What is WalnutAI?",
    answer:
      "WalnutAI is an AI ecosystem for software delivery that orchestrates the entire development lifecycle from intent to production. Unlike traditional tools that focus on a single stage, WalnutAI connects requirements engineering, AI-powered code generation, comprehensive test case creation, continuous gap analysis, and CI/CD pipeline automation into one unified platform. Teams assign tasks to specialized AI bots that coordinate in real time, delivering fully built applications with zero blind spots and no human-in-the-loop. WalnutAI helps development teams ship faster while catching defects earlier, reducing release risk by up to 80%.",
  },
  {
    question: "How does WalnutAI generate test cases?",
    answer:
      "WalnutAI uses AI to automatically generate comprehensive test cases directly from your requirements and user stories. Simply upload your requirements document or connect your repository, and WalnutAI analyzes the intent behind each requirement to produce unit tests, integration tests, and end-to-end tests in seconds. The platform achieves an average of 96% requirement coverage, identifying edge cases that manual testing frequently misses.",
  },
  {
    question: "What is continuous gap analysis?",
    answer:
      "Continuous gap analysis is WalnutAI's real-time process of identifying missing test coverage, untracked requirements, and architectural blind spots throughout the software delivery lifecycle. Unlike periodic audits, WalnutAI's gap analysis runs continuously, alerting teams within 5 minutes of connecting a repository. This ensures that no requirement goes untested and no code change introduces undetected risk before release.",
  },
  {
    question: "How is WalnutAI different from GitHub Copilot or Cursor?",
    answer:
      "While GitHub Copilot and Cursor focus specifically on AI-assisted code completion inside an IDE, WalnutAI covers the full software delivery lifecycle — from requirements engineering through code generation, testing, gap analysis, and deployment. WalnutAI doesn't just help you write code faster; it ensures that what you build aligns with requirements, is thoroughly tested, and is ready for production with complete traceability.",
  },
  {
    question: "What technologies does WalnutAI support?",
    answer:
      "WalnutAI supports a wide range of modern technologies including Python, JavaScript, TypeScript, Java, Go, React, Node.js, Docker, Kubernetes, AWS, PostgreSQL, MongoDB, Redis, GraphQL, RabbitMQ, and LangChain. The platform is designed to integrate with your existing stack and CI/CD workflows without requiring migration.",
  },
  {
    question: "Is WalnutAI free to use?",
    answer:
      "Yes, WalnutAI offers a free Explorer plan for individuals and small experiments. For growing teams shipping regularly, the Pro plan is available, and Enterprise plans offer custom pricing for organizations with advanced needs including dedicated support and custom integrations.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-16 sm:py-24 overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px" }}>
        <AnimateOnScroll animation="fadeUp" className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            Frequently Asked{" "}<span className="text-orange">Questions</span>
          </h2>
        </AnimateOnScroll>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{
                background: "linear-gradient(106deg, #1a1a1a 48.63%, #252525 93.68%)",
                border: "1px solid #2a2a2a",
                borderRadius: 12,
                overflow: "hidden",
                transition: "border-color 0.3s",
                borderColor: openIndex === i ? "rgba(241, 127, 13, 0.3)" : "#2a2a2a",
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "18px 24px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  color: "var(--text-primary)",
                  fontSize: 16,
                  fontWeight: 500,
                  fontFamily: "inherit",
                  gap: 16,
                }}
                aria-expanded={openIndex === i}
              >
                {faq.question}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#9ca3af"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{
                    flexShrink: 0,
                    transition: "transform 0.3s",
                    transform: openIndex === i ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <div
                style={{
                  maxHeight: openIndex === i ? 400 : 0,
                  overflow: "hidden",
                  transition: "max-height 0.3s ease",
                }}
              >
                <p
                  style={{
                    padding: "0 24px 18px",
                    color: "var(--text-muted)",
                    fontSize: 14,
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
