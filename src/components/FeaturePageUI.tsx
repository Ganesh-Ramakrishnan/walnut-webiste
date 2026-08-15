"use client";

import { useState } from "react";
import { CheckCircle2, Target, ChevronDown, ChevronUp } from "lucide-react";

export function GeoDefinition({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[var(--surface-translucent-soft)] border-l-4 border-orange-500 p-8 rounded-r-2xl shadow-lg my-10 backdrop-blur-md relative overflow-hidden">
      <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
        <Target size={120} className="text-orange-500" />
      </div>
      <h4 className="text-sm font-bold text-orange-500 uppercase tracking-wider mb-3 flex items-center gap-2 relative z-10">
        <Target size={16} /> Concept Definition
      </h4>
      <div className="text-text-secondary-strong leading-relaxed text-lg relative z-10">
        {children}
      </div>
    </div>
  );
}

export function StatCard({ stat, description }: { stat: string; description: string }) {
  return (
    <div className="bg-[var(--surface-2)]/80 backdrop-blur-sm border border-[var(--border-default)] p-8 rounded-2xl shadow-xl hover:border-orange-500/50 hover:-translate-y-1 transition-all duration-300 group">
      <div className="text-4xl font-extrabold text-orange-500 mb-3 group-hover:scale-105 transform origin-left transition-transform">{stat}</div>
      <p className="text-text-secondary font-medium leading-relaxed">{description}</p>
    </div>
  );
}

export function StepCard({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="bg-[var(--surface-2)]/80 backdrop-blur-sm border border-[var(--border-default)] rounded-2xl p-8 h-full hover:border-orange-500/30 transition-colors group relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-orange-300 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
      <div className="w-12 h-12 bg-orange-500/10 text-orange-500 border border-orange-500/20 rounded-xl flex items-center justify-center font-bold text-xl mb-6 shadow-md">
        {number}
      </div>
      <h4 className="text-xl font-bold text-text-primary mb-3">{title}</h4>
      <p className="text-text-secondary leading-relaxed">{description}</p>
    </div>
  );
}

export function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3 my-8">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-3">
          <span className="text-orange-500 mt-1.5 flex-shrink-0">•</span>
          <span className="text-text-secondary-strong leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function FAQAccordion({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <div className="space-y-4 my-12 max-w-4xl mx-auto">
      <h3 className="text-3xl font-bold text-text-primary mb-8 text-center">Frequently Asked Questions</h3>
      {faqs.map((faq, idx) => (
        <div key={idx} className="border border-[var(--border-default)] rounded-2xl overflow-hidden bg-[var(--surface-2)]/80 backdrop-blur-sm">
          <button
            className="w-full px-8 py-6 flex justify-between items-center text-left hover:bg-[var(--surface-translucent)] transition-colors focus:outline-none"
            onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
          >
            <span className="font-semibold text-lg text-neutral-100 pr-8">{faq.q}</span>
            {openIdx === idx ? <ChevronUp className="text-orange-500 flex-shrink-0" size={24} /> : <ChevronDown className="text-text-tertiary flex-shrink-0" size={24} />}
          </button>
          {openIdx === idx && (
            <div className="px-8 py-6 text-text-secondary leading-relaxed border-t border-[var(--border-default)] bg-[var(--surface-2b)]/50">
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export function ComparisonBlock({ traditional, walnut, title }: { traditional: string; walnut: string; title?: string }) {
  return (
    <div className="my-20">
      <h3 className="text-2xl font-bold text-orange-500 mb-8">{title || "Comparison — WalnutAI vs Traditional"}</h3>
      <p className="text-text-secondary text-lg leading-relaxed mb-6">
        <strong className="text-text-primary">Traditional:</strong> {traditional}
      </p>
      <p className="text-text-secondary text-lg leading-relaxed">
        <strong className="text-orange-500">With WalnutAI:</strong> {walnut}
      </p>
    </div>
  );
}
