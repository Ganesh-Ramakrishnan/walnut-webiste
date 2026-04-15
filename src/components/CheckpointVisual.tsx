interface Phase {
  num: number;
  name: string;
  state: "dim" | "orange" | "red" | "pending";
}

const phases: Phase[] = [
  { num: 1, name: "Ingest & Parse", state: "dim" },
  { num: 2, name: "Structure Detect", state: "dim" },
  { num: 3, name: "Chunk", state: "dim" },
  { num: 4, name: "Vectorize", state: "dim" },
  { num: 5, name: "Index", state: "orange" }, // Resume point
  { num: 6, name: "RAG Query", state: "red" }, // Failed
  { num: 7, name: "Assemble", state: "pending" },
  { num: 8, name: "Extract", state: "pending" },
  { num: 9, name: "Deliver", state: "pending" },
];

function Circle({ phase }: { phase: Phase }) {
  const isKey = phase.state === "orange" || phase.state === "red";
  const size = isKey ? 48 : 36;

  if (phase.state === "orange") {
    return (
      <div
        className="rounded-full flex items-center justify-center flex-shrink-0 relative z-10"
        style={{
          width: size,
          height: size,
          border: "2px solid #f97316",
          background: "rgba(249,115,22,0.14)",
          color: "#f97316",
          boxShadow:
            "0 0 0 5px rgba(249,115,22,0.09), 0 0 24px rgba(249,115,22,0.25)",
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
    );
  }

  if (phase.state === "red") {
    return (
      <div
        className="rounded-full flex items-center justify-center flex-shrink-0 relative z-10"
        style={{
          width: size,
          height: size,
          border: "2px solid #ef4444",
          background: "rgba(239,68,68,0.12)",
          color: "#ef4444",
          boxShadow:
            "0 0 0 5px rgba(239,68,68,0.08), 0 0 20px rgba(239,68,68,0.22)",
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      </div>
    );
  }

  if (phase.state === "dim") {
    return (
      <div
        className="rounded-full flex items-center justify-center flex-shrink-0 relative z-10"
        style={{
          width: 36,
          height: 36,
          border: "1.5px solid rgba(52,211,153,0.18)",
          background: "rgba(52,211,153,0.04)",
          color: "rgba(52,211,153,0.38)",
        }}
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
    );
  }

  // pending
  return (
    <div
      className="rounded-full flex items-center justify-center flex-shrink-0 relative z-10 text-[11px] font-extrabold"
      style={{
        width: 36,
        height: 36,
        border: "1.5px solid rgba(255,255,255,0.06)",
        background: "transparent",
        color: "rgba(255,255,255,0.25)",
        opacity: 0.5,
      }}
    >
      {phase.num}
    </div>
  );
}

function StatusTag({ state }: { state: Phase["state"] }) {
  const base = "text-[9px] font-extrabold uppercase tracking-wider rounded px-1.5 h-[18px] flex items-center whitespace-nowrap";
  if (state === "orange") {
    return (
      <div
        className={base}
        style={{
          background: "rgba(249,115,22,0.15)",
          border: "1px solid rgba(249,115,22,0.45)",
          color: "#f97316",
          fontSize: 9,
        }}
      >
        RESUME ↩
      </div>
    );
  }
  if (state === "red") {
    return (
      <div
        className={base}
        style={{
          background: "rgba(239,68,68,0.12)",
          border: "1px solid rgba(239,68,68,0.38)",
          color: "#ef4444",
          fontSize: 9,
        }}
      >
        ⚡ FAILED
      </div>
    );
  }
  if (state === "dim") {
    return (
      <div
        className={base}
        style={{
          background: "rgba(52,211,153,0.09)",
          border: "1px solid rgba(52,211,153,0.22)",
          color: "rgba(52,211,153,0.5)",
        }}
      >
        CKPT
      </div>
    );
  }
  // pending — invisible placeholder to keep alignment
  return <div className={base} style={{ opacity: 0 }}>·</div>;
}

function Connector({ state }: { state: Phase["state"] }) {
  let bg = "rgba(255,255,255,0.04)";
  if (state === "dim") bg = "rgba(52,211,153,0.15)";
  if (state === "orange") bg = "rgba(249,115,22,0.25)";
  if (state === "red") bg = "rgba(239,68,68,0.18)";

  return (
    <div
      className="absolute"
      style={{
        top: 42,
        left: "50%",
        width: "100%",
        height: 2,
        background: bg,
        zIndex: 0,
      }}
    />
  );
}

export default function CheckpointVisual() {
  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden flex flex-col justify-center"
      style={{
        background: "var(--card-bg)",
        border: "1px solid var(--border-subtle)",
        padding: "22px 20px 18px",
        minHeight: 360,
      }}
    >
      {/* Top radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 30% at 50% 0%, rgba(249,115,22,0.05) 0%, transparent 70%)",
        }}
      />

      {/* Top bar: label + badges */}
      <div className="relative z-10 flex items-center justify-between flex-wrap gap-2 mb-4">
        <div className="text-[9.5px] font-bold uppercase tracking-[1.3px] text-neutral-400">
          Live Checkpoint State
        </div>
        <div className="flex items-center gap-1.5 flex-wrap">
          <span
            className="inline-flex items-center gap-1 text-[9.5px] font-bold px-2 py-1 rounded-md"
            style={{
              background: "rgba(239,68,68,0.09)",
              border: "1px solid rgba(239,68,68,0.25)",
              color: "#ef4444",
            }}
          >
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
            Phase 6 failed
          </span>
          <span
            className="inline-flex items-center gap-1 text-[9.5px] font-bold px-2 py-1 rounded-md"
            style={{
              background: "rgba(249,115,22,0.1)",
              border: "1px solid rgba(249,115,22,0.35)",
              color: "#f97316",
            }}
          >
            ↩ Resuming from 5
          </span>
        </div>
      </div>

      {/* Phase track */}
      <div className="relative z-10" style={{ paddingTop: 32, paddingBottom: 32 }}>
        {/* Spotlight columns behind orange/red nodes */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: 0,
            bottom: 0,
            left: `calc(${(4 / 9) * 100}% + 2px)`,
            width: `calc(${(1 / 9) * 100}% - 4px)`,
            borderRadius: 12,
            background: "rgba(249,115,22,0.07)",
            border: "1px solid rgba(249,115,22,0.2)",
            boxShadow: "inset 0 0 32px rgba(249,115,22,0.08)",
            zIndex: 0,
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            top: 0,
            bottom: 0,
            left: `calc(${(5 / 9) * 100}% + 2px)`,
            width: `calc(${(1 / 9) * 100}% - 4px)`,
            borderRadius: 12,
            background: "rgba(239,68,68,0.07)",
            border: "1px solid rgba(239,68,68,0.18)",
            boxShadow: "inset 0 0 32px rgba(239,68,68,0.07)",
            zIndex: 0,
          }}
        />

        {/* Nodes row */}
        <div className="flex items-stretch relative z-10">
          {phases.map((phase, i) => (
            <div
              key={phase.num}
              className="flex-1 flex flex-col items-center relative"
              style={{ padding: "10px 2px 12px" }}
            >
              <div className="mb-2">
                <StatusTag state={phase.state} />
              </div>
              <Circle phase={phase} />
              {i < phases.length - 1 && <Connector state={phase.state} />}
              <div
                className="mt-2 text-center leading-tight"
                style={{
                  fontSize: phase.state === "orange" || phase.state === "red" ? 10 : 9.5,
                  fontWeight: phase.state === "orange" || phase.state === "red" ? 700 : 600,
                  color:
                    phase.state === "orange"
                      ? "#f97316"
                      : phase.state === "red"
                      ? "#ef4444"
                      : phase.state === "dim"
                      ? "rgba(52,211,153,0.4)"
                      : "rgba(255,255,255,0.2)",
                  maxWidth: 70,
                }}
              >
                {phase.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress */}
      <div className="relative z-10 mt-2">
        <div className="flex items-center justify-between flex-wrap gap-2 mb-1.5">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-[10px] font-bold text-neutral-400">
              Processing progress
            </span>
            <div className="flex items-center gap-1">
              <span
                className="block rounded-full"
                style={{ width: 6, height: 6, background: "#34d399" }}
              />
              <span className="text-[9px] font-semibold" style={{ color: "#34d399" }}>
                5 saved
              </span>
            </div>
            <div className="flex items-center gap-1">
              <span
                className="block rounded-full"
                style={{ width: 6, height: 6, background: "#ef4444" }}
              />
              <span className="text-[9px] font-semibold" style={{ color: "#ef4444" }}>
                Phase 6 failed
              </span>
            </div>
          </div>
          <span className="text-[10px] font-extrabold" style={{ color: "#f97316" }}>
            ~56% · resuming
          </span>
        </div>
        <div
          className="w-full rounded-full overflow-hidden"
          style={{ height: 6, background: "rgba(255,255,255,0.05)" }}
        >
          <div
            className="h-full relative"
            style={{
              width: "67%",
              borderRadius: 999,
              background:
                "linear-gradient(90deg, #34d399 0%, #34d399 80%, #f97316 82%, #f97316 100%)",
            }}
          >
            <div
              className="absolute top-0 bottom-0 rounded-full"
              style={{
                right: -1,
                width: 3,
                background: "#f97316",
                boxShadow: "0 0 8px rgba(249,115,22,0.7)",
              }}
            />
          </div>
        </div>
        <div
          className="text-right mt-1"
          style={{ fontSize: 9.5, color: "rgba(255,255,255,0.25)" }}
        >
          0 pages re-processed — resuming from checkpoint
        </div>
      </div>
    </div>
  );
}
