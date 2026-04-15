import {
  CodeXml,
  FolderOpen,
  Folder,
  FileCode,
  FileText,
  Layers,
  GitBranch,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  Shield,
} from "lucide-react";

export default function FolderHierarchyVisual() {
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
      {/* ─── Blurred backdrop: two-panel IDE (LIGHT / WHITE) ─── */}
      <div
        className="absolute rounded-2xl overflow-hidden"
        style={{
          top: 72,
          left: 40,
          right: 40,
          bottom: 60,
          filter: "blur(2px)",
          background: "#fafafa",
          boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
        }}
      >
        <div className="grid grid-cols-2 h-full">
          {/* LEFT: Repository Structure */}
          <div
            className="overflow-hidden"
            style={{
              background: "#f4f5f7",
              borderRight: "1px solid #e5e7eb",
            }}
          >
            {/* Panel header */}
            <div
              className="flex items-center gap-1.5 px-3 py-2"
              style={{
                background: "#ffffff",
                borderBottom: "1px solid #e5e7eb",
              }}
            >
              <CodeXml size={11} color="#f97316" />
              <span className="text-[9px] font-bold" style={{ color: "#1f2937" }}>
                Repository Structure
              </span>
              <span className="ml-auto text-[7px]" style={{ color: "#9ca3af" }}>
                main
              </span>
              <GitBranch size={8} color="#9ca3af" />
            </div>
            {/* Tree content */}
            <div className="py-1.5 text-[8px] space-y-[2px]">
              {/* src/ */}
              <div className="flex items-center gap-1 px-2">
                <ChevronDown size={8} color="#9ca3af" />
                <FolderOpen size={9} color="#f97316" />
                <span className="font-bold" style={{ color: "#1f2937" }}>src/</span>
              </div>
              {/* auth/ */}
              <div className="flex items-center gap-1 pl-5">
                <ChevronDown size={8} color="#9ca3af" />
                <FolderOpen size={9} color="#f97316" />
                <span className="font-bold" style={{ color: "#1f2937" }}>auth/</span>
              </div>
              <div className="flex items-center gap-1 pl-9">
                <FileCode size={8} color="#9ca3af" />
                <span style={{ color: "#6b7280" }}>login.ts</span>
              </div>
              <div className="flex items-center gap-1 pl-9">
                <FileCode size={8} color="#9ca3af" />
                <span style={{ color: "#6b7280" }}>register.ts</span>
              </div>
              <div className="flex items-center gap-1 pl-9">
                <FileCode size={8} color="#9ca3af" />
                <span style={{ color: "#6b7280" }}>forgot-password.ts</span>
              </div>
              <div className="flex items-center gap-1 pl-9">
                <FileCode size={8} color="#9ca3af" />
                <span style={{ color: "#6b7280" }}>oauth-callback.ts</span>
              </div>
              {/* payments/ */}
              <div className="flex items-center gap-1 pl-5">
                <ChevronDown size={8} color="#9ca3af" />
                <FolderOpen size={9} color="#f97316" />
                <span className="font-bold" style={{ color: "#1f2937" }}>payments/</span>
              </div>
              <div className="flex items-center gap-1 pl-9">
                <ChevronDown size={8} color="#9ca3af" />
                <FolderOpen size={9} color="#f97316" />
                <span className="font-bold" style={{ color: "#1f2937" }}>checkout/</span>
              </div>
              <div className="flex items-center gap-1 pl-14">
                <FileCode size={8} color="#9ca3af" />
                <span style={{ color: "#6b7280" }}>cart.ts</span>
              </div>
              <div className="flex items-center gap-1 pl-14">
                <FileCode size={8} color="#9ca3af" />
                <span style={{ color: "#6b7280" }}>stripe-integration.ts</span>
              </div>
              <div className="flex items-center gap-1 pl-14">
                <FileCode size={8} color="#9ca3af" />
                <span style={{ color: "#6b7280" }}>order-summary.ts</span>
              </div>
              <div className="flex items-center gap-1 pl-9">
                <ChevronRight size={8} color="#d1d5db" />
                <Folder size={9} color="rgba(249,115,22,0.5)" />
                <span className="font-bold" style={{ color: "#4b5563" }}>billing/</span>
              </div>
              {/* inventory/ */}
              <div className="flex items-center gap-1 pl-5">
                <ChevronRight size={8} color="#d1d5db" />
                <Folder size={9} color="rgba(249,115,22,0.5)" />
                <span className="font-bold" style={{ color: "#4b5563" }}>inventory/</span>
              </div>
              {/* analytics/ */}
              <div className="flex items-center gap-1 pl-5">
                <ChevronRight size={8} color="#d1d5db" />
                <Folder size={9} color="rgba(249,115,22,0.5)" />
                <span className="font-bold" style={{ color: "#4b5563" }}>analytics/</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Generated Hierarchy */}
          <div className="overflow-hidden" style={{ background: "#fafafa" }}>
            <div
              className="flex items-center gap-1.5 px-3 py-2"
              style={{
                background: "#ffffff",
                borderBottom: "1px solid #e5e7eb",
              }}
            >
              <Layers size={11} color="#f97316" />
              <span className="text-[9px] font-bold" style={{ color: "#1f2937" }}>
                Generated Hierarchy
              </span>
              <span className="ml-auto text-[7px]" style={{ color: "#9ca3af" }}>
                4 Epics · 12 Features
              </span>
            </div>
            <div className="p-2 space-y-1.5">
              {[
                { epic: "Authentication", slug: "auth/", features: [["User Login", "4"], ["User Registration", "3"], ["Password Recovery", "2"], ["OAuth Integration", "3"]] },
                { epic: "Payments", slug: "payments/", features: [["Checkout", "5"], ["Billing & Invoicing", "4"]] },
                { epic: "Product Inventory", slug: "inventory/", features: [["Product Management", "3"], ["Stock Tracking", "2"]] },
                { epic: "Analytics & Reporting", slug: "analytics/", features: [["Dashboard", "3"], ["Report Generation", "2"]] },
              ].map((epic) => (
                <div
                  key={epic.epic}
                  className="rounded-lg p-1.5"
                  style={{
                    background: "#ffffff",
                    border: "1px solid #e5e7eb",
                  }}
                >
                  <div className="flex items-center gap-1 mb-1">
                    <Layers size={9} color="#f97316" />
                    <span className="text-[8px] font-bold" style={{ color: "#1f2937" }}>
                      {epic.epic}
                    </span>
                    <span
                      className="ml-auto text-[6.5px] px-1 py-0.5 rounded-full"
                      style={{
                        background: "#f3f4f6",
                        color: "#6b7280",
                      }}
                    >
                      {epic.slug}
                    </span>
                  </div>
                  <div className="ml-3 space-y-0.5">
                    {epic.features.map(([name, count]) => (
                      <div key={name} className="flex items-center gap-1">
                        <FileText size={7} color="#9ca3af" />
                        <span className="text-[7px]" style={{ color: "#6b7280" }}>
                          {name}
                        </span>
                        <span className="ml-auto text-[6.5px]" style={{ color: "#9ca3af" }}>
                          {count}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ─── Subtle dark vignette so overlay cards read cleanly ─── */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: 72,
          left: 40,
          right: 40,
          bottom: 60,
          background:
            "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(10,22,40,0) 0%, rgba(10,22,40,0.35) 100%)",
          borderRadius: 16,
        }}
      />

      {/* ═══════ FOREGROUND OVERLAY CARDS (white) ═══════ */}

      {/* Top-left: Your Code card */}
      <div
        className="absolute rounded-xl p-2.5"
        style={{
          top: 24,
          left: 10,
          width: 155,
          background: "#ffffff",
          boxShadow: "0 12px 36px rgba(0,0,0,0.35)",
          zIndex: 10,
        }}
      >
        <div className="flex items-center gap-1.5 mb-2">
          <CodeXml size={12} color="#f97316" />
          <span className="text-[10px] font-extrabold" style={{ color: "#111827" }}>
            Your Code
          </span>
        </div>
        <div className="space-y-1 font-mono">
          <div className="flex items-center gap-1.5">
            <Folder size={10} color="#f97316" />
            <span className="text-[9px] font-semibold" style={{ color: "#1f2937" }}>
              auth/
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <Folder size={10} color="#f97316" />
            <span className="text-[9px] font-semibold" style={{ color: "#1f2937" }}>
              payments/
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <Folder size={10} color="#d1d5db" />
            <span className="text-[9px]" style={{ color: "#9ca3af" }}>
              inventory/
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <Folder size={10} color="#d1d5db" />
            <span className="text-[9px]" style={{ color: "#9ca3af" }}>
              analytics/
            </span>
          </div>
        </div>
      </div>

      {/* Top-right: Epics card */}
      <div
        className="absolute rounded-xl p-2.5"
        style={{
          top: 24,
          right: 10,
          width: 175,
          background: "#ffffff",
          boxShadow: "0 12px 36px rgba(0,0,0,0.35)",
          zIndex: 10,
        }}
      >
        <div className="flex items-center gap-1.5 mb-2">
          <Layers size={12} color="#f97316" />
          <span className="text-[10px] font-extrabold" style={{ color: "#111827" }}>
            Epics
          </span>
        </div>
        <div className="space-y-1.5">
          {[
            ["Authentication", "4"],
            ["Payments", "2"],
            ["Product Inventory", "2"],
            ["Analytics & Reporting", "2"],
          ].map(([name, count]) => (
            <div key={name} className="flex items-center gap-1.5">
              <GitBranch size={9} color="#f97316" />
              <span className="text-[9px]" style={{ color: "#374151" }}>
                {name}
              </span>
              <span className="ml-auto text-[8px]" style={{ color: "#9ca3af" }}>
                {count}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Center: Folder → Epic mapping card */}
      <div
        className="absolute rounded-2xl p-4"
        style={{
          top: "48%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 350,
          background: "#ffffff",
          boxShadow: "0 20px 50px rgba(0,0,0,0.45)",
          zIndex: 15,
        }}
      >
        {/* Arrow mapping row */}
        <div className="flex items-center gap-2 mb-3">
          <div
            className="flex items-center gap-1.5 rounded-lg px-2 py-1.5"
            style={{ background: "#f3f4f6" }}
          >
            <FolderOpen size={12} color="#f97316" />
            <span className="text-[10px] font-bold font-mono" style={{ color: "#111827" }}>
              payments/checkout/
            </span>
          </div>
          <ArrowRight size={14} color="#f97316" className="shrink-0" />
          <div
            className="flex items-center gap-1.5 rounded-lg px-2 py-1.5"
            style={{
              background: "rgba(249,115,22,0.1)",
              border: "1px solid rgba(249,115,22,0.25)",
            }}
          >
            <Layers size={12} color="#f97316" />
            <span className="text-[10px] font-bold" style={{ color: "#f97316" }}>
              Checkout
            </span>
          </div>
        </div>

        {/* Divider */}
        <div
          className="border-t pt-2.5"
          style={{ borderColor: "#e5e7eb" }}
        >
          <div
            className="text-[8px] font-semibold uppercase tracking-wider mb-2"
            style={{ color: "#9ca3af" }}
          >
            AI-Generated Stories
          </div>
          <div className="space-y-1.5">
            {[
              "Add items to shopping cart",
              "Process Stripe payment",
              "Display order confirmation",
            ].map((story) => (
              <div
                key={story}
                className="flex items-center gap-1.5 rounded-md px-2 py-1.5"
                style={{ background: "#f9fafb" }}
              >
                <FileText size={9} color="#10b981" />
                <span className="text-[9px]" style={{ color: "#1f2937" }}>
                  {story}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom-left: "Structure = Reality" pill */}
      <div
        className="absolute flex items-center gap-1.5 rounded-xl px-3 py-2"
        style={{
          bottom: 24,
          left: 18,
          background: "linear-gradient(135deg, #f97316, #ea580c)",
          boxShadow: "0 10px 28px rgba(249,115,22,0.4)",
          zIndex: 10,
        }}
      >
        <Folder size={13} color="#fff" />
        <span className="text-[11px] font-extrabold text-white">Structure = Reality</span>
      </div>

      {/* Bottom-right: "No hallucinated hierarchy" pill */}
      <div
        className="absolute flex items-center gap-1.5 rounded-xl px-3 py-2"
        style={{
          bottom: 24,
          right: 18,
          background: "#ffffff",
          boxShadow: "0 10px 28px rgba(0,0,0,0.35)",
          zIndex: 10,
        }}
      >
        <Shield size={13} color="#f97316" />
        <span className="text-[10px] font-semibold" style={{ color: "#1f2937" }}>
          No hallucinated hierarchy
        </span>
      </div>
    </div>
  );
}
