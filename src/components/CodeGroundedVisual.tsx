import {
  CodeXml,
  FileText,
  FileCode,
  Layers,
  GitBranch,
  Braces,
  ArrowRight,
  Eye,
  CircleCheck,
  CircleX,
} from "lucide-react";

export default function CodeGroundedVisual() {
  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden"
      style={{
        background: "#0a1628",
        border: "1px solid rgba(255,255,255,0.07)",
        minHeight: 460,
        padding: 28,
      }}
    >
      {/* ─── Blurred backdrop: code + generated stories (white/light) ─── */}
      <div
        className="absolute rounded-2xl overflow-hidden"
        style={{
          top: 72,
          left: 40,
          right: 40,
          bottom: 65,
          filter: "blur(2px)",
          opacity: 0.5,
          background: "#fafafa",
          boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
        }}
      >
        <div className="grid grid-cols-2 h-full">
          {/* LEFT: Code editor */}
          <div style={{ background: "#f4f5f7", borderRight: "1px solid #e5e7eb" }}>
            <div
              className="flex items-center gap-1.5 px-3 py-2"
              style={{ background: "#fff", borderBottom: "1px solid #e5e7eb" }}
            >
              <CodeXml size={10} color="#f97316" />
              <span className="text-[8px] font-bold" style={{ color: "#1f2937" }}>payments/checkout.ts</span>
              <span className="ml-auto text-[7px]" style={{ color: "#9ca3af" }}>TypeScript</span>
            </div>
            <div className="py-1.5 px-2 font-mono text-[7px] leading-[1.7] space-y-0">
              {[
                { n: 1, c: "export async function validatePayment(", cls: "#f97316" },
                { n: 2, c: "  amount: number,", cls: "#6b7280" },
                { n: 3, c: "  currency: string,", cls: "#6b7280" },
                { n: 4, c: "  cardToken: string", cls: "#6b7280" },
                { n: 5, c: ") {", cls: "#1f2937" },
                { n: 6, c: "  if (amount <= 0) throw new Error('Invalid');", cls: "#ef4444" },
                { n: 7, c: "  const supported = ['USD','EUR','GBP'];", cls: "#6b7280" },
                { n: 8, c: "  if (!supported.includes(currency))", cls: "#6b7280" },
                { n: 9, c: "    throw new Error('Unsupported');", cls: "#ef4444" },
                { n: 10, c: "  const charge = await stripe.charges.create({", cls: "#1f2937" },
                { n: 11, c: "    amount, currency, source: cardToken", cls: "#6b7280" },
                { n: 12, c: "  });", cls: "#1f2937" },
                { n: 13, c: "  return { success: true, chargeId: charge.id };", cls: "#10b981" },
                { n: 14, c: "}", cls: "#1f2937" },
                { n: 15, c: "", cls: "" },
                { n: 16, c: "export async function refundPayment(", cls: "#f97316" },
                { n: 17, c: "  chargeId: string,", cls: "#6b7280" },
                { n: 18, c: "  reason?: string", cls: "#6b7280" },
                { n: 19, c: ") {", cls: "#1f2937" },
                { n: 20, c: "  const refund = await stripe.refunds.create({", cls: "#1f2937" },
              ].map((line) => (
                <div key={line.n} className="flex items-center gap-1.5">
                  <span className="w-4 text-right text-[6px] shrink-0" style={{ color: "#d1d5db" }}>{line.n}</span>
                  <span style={{ color: line.cls }}>{line.c}</span>
                </div>
              ))}
            </div>
          </div>
          {/* RIGHT: Generated stories */}
          <div style={{ background: "#fafafa" }}>
            <div
              className="flex items-center gap-1.5 px-3 py-2"
              style={{ background: "#fff", borderBottom: "1px solid #e5e7eb" }}
            >
              <FileText size={10} color="#f97316" />
              <span className="text-[8px] font-bold" style={{ color: "#1f2937" }}>Generated Stories</span>
              <span className="ml-auto text-[7px]" style={{ color: "#9ca3af" }}>5 stories</span>
            </div>
            <div className="divide-y" style={{ borderColor: "#e5e7eb" }}>
              {[
                { title: "Validate payment amount before processing", fn: "validatePayment()", ac: "5" },
                { title: "Restrict payments to supported currencies", fn: "validatePayment()", ac: "3" },
                { title: "Process charge via Stripe integration", fn: "stripe.charges.create()", ac: "8" },
                { title: "Issue refund for existing charge", fn: "refundPayment()", ac: "4" },
                { title: "Return structured success response", fn: "return { success: true }", ac: "3" },
              ].map((s) => (
                <div key={s.title} className="px-2.5 py-2">
                  <div className="flex items-start gap-1.5">
                    <CircleCheck size={9} color="rgba(16,185,129,0.7)" className="shrink-0 mt-0.5" />
                    <div className="flex-1 min-w-0">
                      <div className="text-[7.5px] font-bold" style={{ color: "#1f2937" }}>{s.title}</div>
                      <div className="text-[6px] flex items-center gap-0.5 mt-0.5" style={{ color: "#9ca3af" }}>
                        <Braces size={6} /> {s.fn}
                      </div>
                    </div>
                    <span className="text-[6.5px] px-1 py-0.5 rounded-full shrink-0" style={{ background: "#f3f4f6", color: "#6b7280" }}>{s.ac} AC</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Vignette */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: 72, left: 40, right: 40, bottom: 65,
          background: "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(10,22,40,0) 0%, rgba(10,22,40,0.35) 100%)",
          borderRadius: 16,
        }}
      />

      {/* ═══════ FOREGROUND OVERLAY CARDS (white) ═══════ */}

      {/* Top-left: Code Snippets */}
      <div
        className="absolute rounded-xl p-3"
        style={{ top: 22, left: 8, width: 165, background: "#fff", boxShadow: "0 12px 36px rgba(0,0,0,0.35)", zIndex: 10 }}
      >
        <div className="flex items-center gap-1.5 mb-2">
          <Braces size={11} color="#f97316" />
          <span className="text-[10px] font-extrabold" style={{ color: "#111827" }}>Code Snippets</span>
        </div>
        <div className="space-y-1.5">
          {[
            { fn: "validatePayment()", active: true },
            { fn: "refundPayment()", active: true },
            { fn: "stripe.charges", active: false },
            { fn: "stripe.refunds", active: false },
          ].map((item) => (
            <div key={item.fn} className="flex items-center gap-1.5">
              <FileCode size={9} color={item.active ? "#f97316" : "#d1d5db"} />
              <span className="text-[9px] font-mono font-semibold" style={{ color: item.active ? "#1f2937" : "#9ca3af" }}>{item.fn}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Top-right: Traced Stories */}
      <div
        className="absolute rounded-xl p-3"
        style={{ top: 22, right: 8, width: 175, background: "#fff", boxShadow: "0 12px 36px rgba(0,0,0,0.35)", zIndex: 10 }}
      >
        <div className="flex items-center gap-1.5 mb-2">
          <Layers size={11} color="#f97316" />
          <span className="text-[10px] font-extrabold" style={{ color: "#111827" }}>Traced Stories</span>
        </div>
        <div className="space-y-1.5">
          {[
            "Validate payment amount",
            "Restrict to supported currencies",
            "Process charge via Stripe",
            "Issue refund for charge",
          ].map((s) => (
            <div key={s} className="flex items-center gap-1.5">
              <GitBranch size={9} color="rgba(249,115,22,0.65)" />
              <span className="text-[8.5px] truncate" style={{ color: "#374151" }}>{s}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Center: Source → Generated Story card */}
      <div
        className="absolute rounded-2xl p-4"
        style={{
          top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: 370,
          background: "#fff",
          boxShadow: "0 20px 50px rgba(0,0,0,0.45)",
          zIndex: 15,
        }}
      >
        {/* Source code section */}
        <div className="flex items-center gap-1.5 mb-2">
          <CodeXml size={12} color="#f97316" />
          <span className="text-[10px] font-bold" style={{ color: "#1f2937" }}>Source Code</span>
          <span className="ml-auto text-[8px] font-mono px-1.5 py-0.5 rounded-full" style={{ background: "#f3f4f6", color: "#6b7280" }}>checkout.ts:6</span>
        </div>
        <div
          className="rounded-lg px-2.5 py-2 font-mono text-[9px] leading-relaxed mb-3"
          style={{ background: "#f9fafb", border: "1px solid #e5e7eb", color: "#1f2937" }}
        >
          <span style={{ color: "#f97316" }}>if</span> (amount &lt;= 0) <span style={{ color: "#f97316" }}>throw new</span> Error(<span style={{ color: "#ef4444" }}>&apos;Invalid amount&apos;</span>);<br />
          <span style={{ color: "#f97316" }}>const</span> supported = [<span style={{ color: "#10b981" }}>&apos;USD&apos;</span>, <span style={{ color: "#10b981" }}>&apos;EUR&apos;</span>, <span style={{ color: "#10b981" }}>&apos;GBP&apos;</span>];<br />
          <span style={{ color: "#f97316" }}>if</span> (!supported.includes(currency)) ...
        </div>

        {/* Arrow divider */}
        <div className="flex items-center gap-2 mb-3">
          <div className="h-px flex-1" style={{ background: "#e5e7eb" }} />
          <div className="rounded-full p-1" style={{ background: "rgba(249,115,22,0.1)" }}>
            <ArrowRight size={12} color="#f97316" />
          </div>
          <div className="h-px flex-1" style={{ background: "#e5e7eb" }} />
        </div>

        {/* Generated story */}
        <div className="flex items-center gap-1.5 mb-1.5">
          <FileText size={12} color="#10b981" />
          <span className="text-[10px] font-bold" style={{ color: "#1f2937" }}>Generated Story</span>
        </div>
        <div
          className="rounded-lg px-2.5 py-2.5"
          style={{ background: "rgba(16,185,129,0.05)", border: "1px solid rgba(16,185,129,0.15)" }}
        >
          <div className="text-[10px] font-bold" style={{ color: "#1f2937" }}>
            Validate payment amount before processing
          </div>
          <p className="text-[8.5px] mt-1 leading-relaxed" style={{ color: "#6b7280" }}>
            As a payment system, I want to validate that the amount is positive and the currency is in the supported list (USD, EUR, GBP) before creating a charge.
          </p>
          <div className="flex items-center gap-3 mt-2">
            <span className="inline-flex items-center gap-1 text-[8px] font-semibold" style={{ color: "#10b981" }}>
              <CircleCheck size={8} /> 5 acceptance criteria
            </span>
            <span className="inline-flex items-center gap-1 text-[8px] font-semibold" style={{ color: "#f97316" }}>
              <Eye size={8} /> Traced to code
            </span>
          </div>
        </div>
      </div>

      {/* Bottom-left: "Every story traced to code" pill */}
      <div
        className="absolute flex items-center gap-1.5 rounded-xl px-3 py-2"
        style={{
          bottom: 22, left: 16,
          background: "linear-gradient(135deg, #f97316, #ea580c)",
          boxShadow: "0 10px 28px rgba(249,115,22,0.4)",
          zIndex: 10,
        }}
      >
        <Eye size={13} color="#fff" />
        <span className="text-[11px] font-bold text-white">Every story traced to code</span>
      </div>

      {/* Bottom-right: "No gaps · No wishes · No fiction" pill */}
      <div
        className="absolute flex items-center gap-1.5 rounded-xl px-3 py-2"
        style={{
          bottom: 22, right: 16,
          background: "#fff",
          boxShadow: "0 10px 28px rgba(0,0,0,0.35)",
          zIndex: 10,
        }}
      >
        <CircleX size={13} color="#ef4444" />
        <span className="text-[10px] font-semibold" style={{ color: "#1f2937" }}>No gaps &middot; No wishes &middot; No fiction</span>
      </div>
    </div>
  );
}
