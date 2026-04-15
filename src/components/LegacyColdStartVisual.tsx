import {
  FolderOpen,
  FileCode,
  Layers,
  CircleCheck,
  TriangleAlert,
  Clock,
  GitCommitHorizontal,
  FileQuestion,
  Zap,
  BarChart3,
  TestTube2,
  BookOpen,
  FileText,
} from "lucide-react";

export default function LegacyColdStartVisual() {
  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden"
      style={{
        background: "#0a1628",
        border: "1px solid rgba(255,255,255,0.07)",
        minHeight: 480,
        padding: 28,
      }}
    >
      {/* ─── Blurred backdrop: legacy codebase + generated baseline (white) ─── */}
      <div
        className="absolute rounded-2xl overflow-hidden"
        style={{
          top: 72,
          left: 40,
          right: 40,
          bottom: 70,
          filter: "blur(2px)",
          opacity: 0.5,
          background: "#fafafa",
          boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
        }}
      >
        <div className="grid grid-cols-2 h-full">
          {/* LEFT: Legacy Codebase file list */}
          <div style={{ background: "#f4f5f7", borderRight: "1px solid #e5e7eb" }}>
            <div className="flex items-center gap-1.5 px-3 py-2" style={{ background: "#fff", borderBottom: "1px solid #e5e7eb" }}>
              <FolderOpen size={10} color="#f97316" />
              <span className="text-[8px] font-bold" style={{ color: "#1f2937" }}>Legacy Codebase</span>
              <span className="ml-auto text-[6.5px]" style={{ color: "#9ca3af" }}>8,800+ lines · No docs</span>
            </div>
            <div className="divide-y" style={{ borderColor: "#e5e7eb" }}>
              {[
                { file: "auth/login.php", year: "2014", lines: "1240L" },
                { file: "billing/invoice.py", year: "2016", lines: "890L" },
                { file: "core/engine.java", year: "2012", lines: "3400L" },
                { file: "api/handlers.go", year: "2018", lines: "620L" },
                { file: "utils/helpers.rb", year: "2015", lines: "450L" },
                { file: "reports/generate.cs", year: "2017", lines: "780L" },
                { file: "jobs/scheduler.py", year: "2013", lines: "1100L" },
                { file: "data/migration.sql", year: "2011", lines: "320L" },
              ].map((f) => (
                <div key={f.file} className="px-2.5 py-1.5 flex items-center gap-1.5">
                  <FileCode size={8} color="#9ca3af" />
                  <span className="text-[7.5px] font-mono flex-1" style={{ color: "#1f2937" }}>{f.file}</span>
                  <span className="text-[6.5px]" style={{ color: "#9ca3af" }}>{f.year}</span>
                  <span className="text-[6.5px] px-1 py-0.5 rounded-full" style={{ background: "#f3f4f6", color: "#6b7280" }}>{f.lines}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Generated Baseline */}
          <div style={{ background: "#fafafa" }}>
            <div className="flex items-center gap-1.5 px-3 py-2" style={{ background: "#fff", borderBottom: "1px solid #e5e7eb" }}>
              <Layers size={10} color="#f97316" />
              <span className="text-[8px] font-bold" style={{ color: "#1f2937" }}>Generated Baseline</span>
              <span className="ml-auto text-[6.5px]" style={{ color: "#9ca3af" }}>63 stories</span>
            </div>
            <div className="divide-y" style={{ borderColor: "#e5e7eb" }}>
              {[
                { epic: "Authentication", count: "14 stories" },
                { epic: "Billing & Invoices", count: "9 stories" },
                { epic: "Core Engine", count: "22 stories" },
                { epic: "API Handlers", count: "7 stories" },
                { epic: "Report Generation", count: "11 stories" },
              ].map((e) => (
                <div key={e.epic} className="px-2.5 py-2 flex items-center gap-1.5">
                  <CircleCheck size={9} color="rgba(16,185,129,0.7)" />
                  <span className="text-[8px] font-bold flex-1" style={{ color: "#1f2937" }}>{e.epic}</span>
                  <span className="text-[6.5px] px-1 py-0.5 rounded-full" style={{ background: "#f3f4f6", color: "#6b7280" }}>{e.count}</span>
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
          top: 72, left: 40, right: 40, bottom: 70,
          background: "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(10,22,40,0) 0%, rgba(10,22,40,0.35) 100%)",
          borderRadius: 16,
        }}
      />

      {/* ═══════ FOREGROUND OVERLAY CARDS (white) ═══════ */}

      {/* Top-left: "Before" card */}
      <div
        className="absolute rounded-xl p-3"
        style={{ top: 18, left: 8, width: 160, background: "#fff", boxShadow: "0 12px 36px rgba(0,0,0,0.35)", zIndex: 10 }}
      >
        <div className="flex items-center gap-1.5 mb-2">
          <Clock size={11} color="#f59e0b" />
          <span className="text-[10px] font-extrabold" style={{ color: "#111827" }}>Before</span>
        </div>
        <div className="space-y-1.5">
          {["No tickets", "No documentation", "No traceability", "No test coverage map"].map((item) => (
            <div key={item} className="flex items-center gap-1.5">
              <TriangleAlert size={8} color="rgba(245,158,11,0.6)" />
              <span className="text-[9px]" style={{ color: "#6b7280" }}>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Top-right: "Now Unlocked" card */}
      <div
        className="absolute rounded-xl p-3"
        style={{ top: 18, right: 8, width: 170, background: "#fff", boxShadow: "0 12px 36px rgba(0,0,0,0.35)", zIndex: 10 }}
      >
        <div className="flex items-center gap-1.5 mb-2">
          <Zap size={11} color="#f97316" />
          <span className="text-[10px] font-extrabold" style={{ color: "#111827" }}>Now Unlocked</span>
        </div>
        <div className="space-y-1.5">
          {[
            { icon: BarChart3, label: "Gap analysis" },
            { icon: TestTube2, label: "Test generation" },
            { icon: BookOpen, label: "Living documentation" },
            { icon: FileText, label: "Sprint planning" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-1.5">
              <item.icon size={9} color="rgba(249,115,22,0.65)" />
              <span className="text-[9px]" style={{ color: "#374151" }}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Center: Legacy Code → Complete Baseline card */}
      <div
        className="absolute rounded-2xl p-4"
        style={{
          top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: 380,
          background: "#fff",
          boxShadow: "0 20px 50px rgba(0,0,0,0.45)",
          zIndex: 15,
        }}
      >
        {/* Problem header */}
        <div className="flex items-center gap-1.5 mb-2">
          <TriangleAlert size={12} color="#f59e0b" />
          <span className="text-[10px] font-bold" style={{ color: "#1f2937" }}>Legacy Code — No Requirements</span>
        </div>
        {/* Problem details */}
        <div
          className="rounded-lg px-2.5 py-2 mb-3 space-y-1.5"
          style={{ background: "rgba(245,158,11,0.05)", border: "1px solid rgba(245,158,11,0.15)" }}
        >
          {[
            { icon: FileQuestion, text: "0 user stories documented" },
            { icon: Clock, text: "12 years of undocumented features" },
            { icon: GitCommitHorizontal, text: "4,200+ commits with no traceability" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-1.5">
              <item.icon size={9} color="rgba(245,158,11,0.7)" />
              <span className="text-[9px]" style={{ color: "#1f2937" }}>{item.text}</span>
            </div>
          ))}
        </div>

        {/* Arrow divider with "Code-to-Story" label */}
        <div className="flex items-center gap-2 mb-3">
          <div className="h-px flex-1" style={{ background: "#e5e7eb" }} />
          <div className="rounded-full p-1" style={{ background: "rgba(249,115,22,0.1)" }}>
            <Zap size={12} color="#f97316" />
          </div>
          <span className="text-[9px] font-bold" style={{ color: "#f97316" }}>Code-to-Story</span>
          <div className="h-px flex-1" style={{ background: "#e5e7eb" }} />
        </div>

        {/* Result */}
        <div className="flex items-center gap-1.5 mb-1.5">
          <CircleCheck size={12} color="#10b981" />
          <span className="text-[10px] font-bold" style={{ color: "#1f2937" }}>Complete Requirements Baseline</span>
        </div>
        <div
          className="rounded-lg px-2.5 py-2.5"
          style={{ background: "rgba(16,185,129,0.05)", border: "1px solid rgba(16,185,129,0.15)" }}
        >
          <div className="grid grid-cols-3 gap-3 text-center">
            {[
              { val: "5", label: "Epics" },
              { val: "63", label: "Stories" },
              { val: "280+", label: "Acceptance Criteria" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-lg font-extrabold" style={{ color: "#10b981" }}>{s.val}</div>
                <div className="text-[8px]" style={{ color: "#6b7280" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom-left: "Hours, not months" pill */}
      <div
        className="absolute flex items-center gap-1.5 rounded-xl px-3 py-2"
        style={{
          bottom: 22, left: 16,
          background: "linear-gradient(135deg, #f97316, #ea580c)",
          boxShadow: "0 10px 28px rgba(249,115,22,0.4)",
          zIndex: 10,
        }}
      >
        <Zap size={13} color="#fff" />
        <span className="text-[11px] font-bold text-white">Hours, not months</span>
      </div>

      {/* Bottom-right: "Complete baseline from code alone" pill */}
      <div
        className="absolute flex items-center gap-1.5 rounded-xl px-3 py-2"
        style={{
          bottom: 22, right: 16,
          background: "#fff",
          boxShadow: "0 10px 28px rgba(0,0,0,0.35)",
          zIndex: 10,
        }}
      >
        <BookOpen size={13} color="#10b981" />
        <span className="text-[10px] font-semibold" style={{ color: "#1f2937" }}>Complete baseline from code alone</span>
      </div>
    </div>
  );
}
