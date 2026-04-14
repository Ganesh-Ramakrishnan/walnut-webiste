export default function HumanReviewVisual() {
  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden"
      style={{
        background: "#0a1628",
        border: "1px solid rgba(255,255,255,0.07)",
        minHeight: 380,
        padding: 24,
      }}
    >
      {/* ─── Inset blurred WalnutAI app screenshot backdrop ─── */}
      <div
        className="absolute rounded-xl overflow-hidden"
        style={{
          top: 52,
          left: 72,
          right: 72,
          bottom: 62,
          filter: "blur(4px)",
          background: "#f4f5f7",
          boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
        }}
      >
        <div className="absolute inset-0 flex">
          {/* Left sidebar: requirement IDs */}
          <div
            className="flex-shrink-0 py-2.5 px-2"
            style={{
              width: 68,
              background: "#ffffff",
              borderRight: "1px solid #e5e7eb",
            }}
          >
            <div
              className="text-[6.5px] font-bold uppercase tracking-wider mb-2"
              style={{ color: "#9ca3af" }}
            >
              34 Features
            </div>
            <div className="space-y-1">
              {Array.from({ length: 14 }).map((_, i) => (
                <div key={i} className="text-[5.5px] leading-tight" style={{ color: "#6b7280" }}>
                  REQ-{String(i + 1).padStart(3, "0")}
                </div>
              ))}
            </div>
          </div>

          {/* Main content area */}
          <div className="flex-1 p-3">
            <div
              className="flex gap-2 mb-2 pb-1.5 border-b"
              style={{ borderColor: "#e5e7eb" }}
            >
              <div
                className="text-[7px] font-bold px-2 py-0.5 rounded"
                style={{ background: "rgba(249,115,22,0.15)", color: "#f97316" }}
              >
                Stories
              </div>
              <div className="text-[7px] font-semibold px-2 py-0.5" style={{ color: "#9ca3af" }}>
                Document Preview
              </div>
            </div>
            <div className="text-[7px] font-bold mb-2" style={{ color: "#f97316" }}>
              User Stories (68)
            </div>
            <div className="space-y-1">
              {[
                "Validate and enforce project input rules",
                "Store and retrieve project settings securely",
                "Set and manage effort calculation rates",
                "Validate and enforce effort settings",
                "Store and retrieve effort preferences",
                "Create and manage project templates",
                "Configure team roles and permissions",
              ].map((title, i) => (
                <div
                  key={i}
                  className="rounded px-1.5 py-1"
                  style={{
                    background: "#ffffff",
                    border: "1px solid #e5e7eb",
                  }}
                >
                  <div className="text-[7px] font-bold" style={{ color: "#1f2937" }}>
                    {title}
                  </div>
                  <div className="text-[5.5px] leading-tight mt-0.5" style={{ color: "#9ca3af" }}>
                    As a project administrator, I want to validate inputs...
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right chat panel */}
          <div
            className="flex-shrink-0 py-2.5 px-2"
            style={{
              width: 72,
              background: "#ffffff",
              borderLeft: "1px solid #e5e7eb",
            }}
          >
            <div className="flex items-center gap-1 mb-2">
              <div
                className="w-3 h-3 rounded-full flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #f97316, #ea580c)" }}
              />
              <span className="text-[6.5px] font-bold" style={{ color: "#1f2937" }}>
                Walnut AI
              </span>
            </div>
            <div className="text-[5.5px] leading-tight" style={{ color: "#6b7280" }}>
              Processing your document...
            </div>
          </div>
        </div>
      </div>

      {/* ═══════ FOREGROUND OVERLAY CARDS ═══════ */}

      {/* Top-left: 34 Features card — sits outside the blurred area (left margin / top) */}
      <div
        className="absolute rounded-xl px-3 py-2.5"
        style={{
          top: 20,
          left: 16,
          background: "rgba(255,255,255,0.98)",
          boxShadow: "0 8px 24px rgba(0,0,0,0.35)",
          zIndex: 10,
        }}
      >
        <div className="text-[11px] font-extrabold mb-1.5" style={{ color: "#111827" }}>
          34 Features
        </div>
        <div className="space-y-1">
          {["Project Settings", "External Integrations", "User & Team Mgmt"].map((item) => (
            <div key={item} className="flex items-center gap-1.5">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="3">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="text-[9px] font-semibold" style={{ color: "#374151" }}>
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Top-right: 1 file uploaded badge — top margin */}
      <div
        className="absolute flex items-center gap-1.5 rounded-xl px-3 py-2"
        style={{
          top: 20,
          right: 16,
          background: "rgba(255,255,255,0.98)",
          boxShadow: "0 6px 20px rgba(0,0,0,0.35)",
          zIndex: 10,
        }}
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
        </svg>
        <span className="text-[10px] font-bold" style={{ color: "#1f2937" }}>
          1 file uploaded
        </span>
        <span className="text-[9px] font-bold" style={{ color: "#f97316" }}>
          View
        </span>
      </div>

      {/* Center: Story review card with Accept/Reject (main focal point) */}
      <div
        className="absolute rounded-2xl overflow-hidden"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 270,
          background: "rgba(255,255,255,0.99)",
          boxShadow: "0 20px 50px rgba(0,0,0,0.55)",
          zIndex: 15,
        }}
      >
        <div style={{ padding: "20px 20px 16px" }}>
          <div className="flex items-start gap-2 mb-3">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#10b981"
              strokeWidth="2.5"
              className="flex-shrink-0 mt-0.5"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <h4 className="text-[12.5px] font-extrabold leading-snug" style={{ color: "#111827" }}>
              Validate and enforce project input rules
            </h4>
          </div>
          <p
            className="text-[9.5px] mb-3.5"
            style={{ color: "#6b7280", lineHeight: 1.6 }}
          >
            As a project administrator, I want to validate and enforce project input rules when creating or editing projects...
          </p>
          <div className="flex items-center gap-1.5">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="3">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span className="text-[9.5px] font-semibold" style={{ color: "#374151" }}>
              20 acceptance criteria
            </span>
          </div>
        </div>
        <div className="flex gap-2" style={{ padding: "0 20px 20px" }}>
          <button
            className="flex-1 flex items-center justify-center gap-1.5 rounded-lg text-[10.5px] font-bold"
            style={{
              padding: "9px 8px",
              background: "rgba(16,185,129,0.1)",
              border: "1px solid rgba(16,185,129,0.3)",
              color: "#10b981",
            }}
          >
            <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23 10c0-1.1-.9-2-2-2h-6.3l.9-4.5v-.3c0-.4-.2-.8-.4-1.1L14 1 6.6 8.6c-.4.3-.6.8-.6 1.4v10c0 1.1.9 2 2 2h9c.8 0 1.5-.5 1.8-1.2l3-7 .1-.5V10zM1 22h4V10H1v12z" />
            </svg>
            Accept
          </button>
          <button
            className="flex-1 flex items-center justify-center gap-1.5 rounded-lg text-[10.5px] font-bold"
            style={{
              padding: "9px 8px",
              background: "rgba(239,68,68,0.08)",
              border: "1px solid rgba(239,68,68,0.28)",
              color: "#ef4444",
            }}
          >
            <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15 3H6c-.8 0-1.5.5-1.8 1.2l-3 7c-.1.2-.2.5-.2.8v2c0 1.1.9 2 2 2h6.3l-.9 4.5v.3c0 .4.2.8.4 1.1L10 23l7.4-7.6c.4-.3.6-.8.6-1.4V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z" />
            </svg>
            Reject
          </button>
        </div>
      </div>

      {/* Bottom-left: 68 Stories Extracted pill */}
      <div
        className="absolute flex items-center gap-2 rounded-xl px-3.5 py-2.5"
        style={{
          bottom: 18,
          left: 16,
          background: "linear-gradient(135deg, #f97316, #ea580c)",
          boxShadow: "0 10px 30px rgba(249,115,22,0.4)",
          zIndex: 10,
        }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
        </svg>
        <span className="text-[11px] font-extrabold text-white">68 Stories Extracted</span>
      </div>

      {/* Bottom-right: Walnut AI chat bubble */}
      <div
        className="absolute rounded-xl p-2.5"
        style={{
          bottom: 18,
          right: 16,
          background: "rgba(255,255,255,0.98)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
          maxWidth: 165,
          zIndex: 10,
        }}
      >
        <div className="flex items-center gap-1.5 mb-1">
          <div
            className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ background: "linear-gradient(135deg, #f97316, #ea580c)" }}
          >
            <svg width="10" height="10" viewBox="0 0 24 24" fill="white">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <span className="text-[10px] font-extrabold" style={{ color: "#111827" }}>
            Walnut AI
          </span>
        </div>
        <p className="text-[9px] leading-snug" style={{ color: "#374151" }}>
          I&apos;ve extracted 68 user stories from your document, organized under 34 features.
        </p>
      </div>
    </div>
  );
}
