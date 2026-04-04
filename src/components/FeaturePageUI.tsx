"use client";

import { useState } from "react";
import { CheckCircle2, Target, ChevronDown, ChevronUp } from "lucide-react";

export function GeoDefinition({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-neutral-900/40 border-l-4 border-orange-500 p-8 rounded-r-2xl shadow-lg my-10 backdrop-blur-md relative overflow-hidden">
      <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
        <Target size={120} className="text-orange-500" />
      </div>
      <h4 className="text-sm font-bold text-orange-500 uppercase tracking-wider mb-3 flex items-center gap-2 relative z-10">
        <Target size={16} /> Concept Definition
      </h4>
      <div className="text-neutral-300 leading-relaxed text-lg relative z-10">
        {children}
      </div>
    </div>
  );
}

export function StatCard({ stat, description }: { stat: string; description: string }) {
  return (
    <div className="bg-[#111111]/80 backdrop-blur-sm border border-neutral-800 p-8 rounded-2xl shadow-xl hover:border-orange-500/50 hover:-translate-y-1 transition-all duration-300 group">
      <div className="text-4xl font-extrabold text-orange-500 mb-3 group-hover:scale-105 transform origin-left transition-transform">{stat}</div>
      <p className="text-neutral-400 font-medium leading-relaxed">{description}</p>
    </div>
  );
}

export function StepCard({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="bg-[#111111]/80 backdrop-blur-sm border border-neutral-800 rounded-2xl p-8 h-full hover:border-orange-500/30 transition-colors group relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-orange-300 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
      <div className="w-12 h-12 bg-orange-500/10 text-orange-500 border border-orange-500/20 rounded-xl flex items-center justify-center font-bold text-xl mb-6 shadow-md">
        {number}
      </div>
      <h4 className="text-xl font-bold text-white mb-3">{title}</h4>
      <p className="text-neutral-400 leading-relaxed">{description}</p>
    </div>
  );
}

export function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-4 my-8">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-4 bg-[#111111]/50 p-4 rounded-xl border border-neutral-800/50">
          <div className="mt-0.5 bg-orange-500/10 p-1 rounded-full flex-shrink-0">
            <CheckCircle2 className="text-orange-500" size={18} />
          </div>
          <span className="text-neutral-300 leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function FAQAccordion({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <div className="space-y-4 my-12 max-w-4xl mx-auto">
      <h3 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h3>
      {faqs.map((faq, idx) => (
        <div key={idx} className="border border-neutral-800 rounded-2xl overflow-hidden bg-[#111111]/80 backdrop-blur-sm">
          <button
            className="w-full px-8 py-6 flex justify-between items-center text-left hover:bg-neutral-800/50 transition-colors focus:outline-none"
            onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
          >
            <span className="font-semibold text-lg text-neutral-100 pr-8">{faq.q}</span>
            {openIdx === idx ? <ChevronUp className="text-orange-500 flex-shrink-0" size={24} /> : <ChevronDown className="text-neutral-500 flex-shrink-0" size={24} />}
          </button>
          {openIdx === idx && (
            <div className="px-8 py-6 text-neutral-400 leading-relaxed border-t border-neutral-800 bg-[#0a0a0a]/50">
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
    <div className="my-20 bg-neutral-900/40 border border-neutral-800 p-10 rounded-3xl">
      <h3 className="text-2xl font-bold text-white mb-6">{title || "Comparison — WalnutAI vs Traditional"}</h3>
      <p className="text-neutral-400 text-lg leading-relaxed mb-6">
        <strong className="text-white">Traditional:</strong> {traditional}
      </p>
      <p className="text-neutral-400 text-lg leading-relaxed">
        <strong className="text-white">With WalnutAI:</strong> {walnut}
      </p>
    </div>
  );
}
