interface NodeData {
  label: string;
  highlighted: boolean;
  icon: React.ReactNode;
}

const row1: NodeData[] = [
  {
    label: "Document Upload",
    highlighted: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    label: "Parse & Structure",
    highlighted: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    label: "Section Chunking",
    highlighted: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    label: "Vectorize + Index",
    highlighted: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
];

// Row 2 displayed right-to-left (reversed), so arrows point left
const row2: NodeData[] = [
  {
    label: "Jira / Export",
    highlighted: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    label: "Structured Stories",
    highlighted: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    label: "LLM Extraction",
    highlighted: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </svg>
    ),
  },
  {
    label: "Context Assembly",
    highlighted: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    label: "RAG Retrieval",
    highlighted: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
];

function Node({ node }: { node: NodeData }) {
  return (
    <div className="flex flex-col items-center gap-1.5 flex-1">
      <div
        className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center transition-all"
        style={{
          border: node.highlighted
            ? "1px solid rgba(249,115,22,0.55)"
            : "1px solid rgba(255,255,255,0.08)",
          background: node.highlighted
            ? "rgba(249,115,22,0.09)"
            : "rgba(255,255,255,0.03)",
          boxShadow: node.highlighted
            ? "0 0 18px rgba(249,115,22,0.12), inset 0 0 12px rgba(249,115,22,0.04)"
            : "none",
          color: node.highlighted ? "#f97316" : "#4b5563",
        }}
      >
        <div style={{ width: 22, height: 22 }}>{node.icon}</div>
      </div>
      <span
        className="text-[10px] text-center leading-[1.3]"
        style={{
          maxWidth: 62,
          color: node.highlighted ? "#f97316" : "#4b5563",
          fontWeight: node.highlighted ? 700 : 600,
        }}
      >
        {node.label}
      </span>
    </div>
  );
}

function ArrowRight({ highlighted = false }: { highlighted?: boolean }) {
  return (
    <div
      className="flex items-center justify-center flex-shrink-0"
      style={{
        width: 24,
        marginBottom: 22,
        color: highlighted ? "rgba(249,115,22,0.5)" : "rgba(255,255,255,0.15)",
      }}
    >
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </div>
  );
}

function ArrowLeft({ highlighted = false }: { highlighted?: boolean }) {
  return (
    <div
      className="flex items-center justify-center flex-shrink-0"
      style={{
        width: 24,
        marginBottom: 22,
        color: highlighted ? "rgba(249,115,22,0.5)" : "rgba(255,255,255,0.15)",
      }}
    >
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M19 12H5M12 19l-7-7 7-7" />
      </svg>
    </div>
  );
}

export default function PipelineFlowVisual() {
  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden flex flex-col justify-center"
      style={{
        background: "#080f1f",
        border: "1px solid rgba(255,255,255,0.07)",
        padding: "28px 24px",
        gap: 20,
        minHeight: 360,
      }}
    >
      {/* Orange ambient glow top */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 40% at 50% 0%, rgba(249,115,22,0.04) 0%, transparent 65%)",
        }}
      />

      <div
        className="text-center relative z-10"
        style={{
          fontSize: 9.5,
          fontWeight: 700,
          letterSpacing: 1.6,
          textTransform: "uppercase",
          color: "#6b7280",
        }}
      >
        Pipeline at a Glance &mdash; End-to-End Data Flow
      </div>

      <div className="flex flex-col gap-5 relative z-10 flex-1 justify-center">
        {/* Row 1: left → right */}
        <div className="flex items-start">
          {row1.map((node, i) => (
            <>
              <Node key={node.label} node={node} />
              {i < row1.length - 1 && (
                <ArrowRight
                  key={`arr-${i}`}
                  highlighted={node.highlighted && row1[i + 1].highlighted}
                />
              )}
            </>
          ))}
        </div>

        {/* Turn connector: drops from right end of row 1, sweeps left */}
        <div className="relative h-5">
          {/* vertical drop at the right edge, aligned with last row-1 node center */}
          <div
            className="absolute"
            style={{
              right: "9%",
              top: -10,
              width: 2,
              height: 20,
              background: "rgba(249,115,22,0.35)",
              borderRadius: 1,
            }}
          />
          {/* horizontal sweep gradient */}
          <div
            className="absolute"
            style={{
              right: "9%",
              top: 10,
              width: "82%",
              height: 2,
              background:
                "linear-gradient(90deg, rgba(249,115,22,0.15), rgba(249,115,22,0.35))",
              borderRadius: 1,
            }}
          >
            {/* arrow tip on the left */}
            <span
              style={{
                position: "absolute",
                left: -1,
                top: "50%",
                transform: "translateY(-50%)",
                width: 0,
                height: 0,
                borderTop: "5px solid transparent",
                borderBottom: "5px solid transparent",
                borderRight: "6px solid rgba(249,115,22,0.4)",
              }}
            />
          </div>
        </div>

        {/* Row 2: right → left (reversed with left arrows) */}
        <div className="flex items-start flex-row-reverse">
          {row2.map((node, i) => (
            <>
              <Node key={node.label} node={node} />
              {i < row2.length - 1 && (
                <ArrowLeft
                  key={`arr2-${i}`}
                  highlighted={node.highlighted && row2[i + 1].highlighted}
                />
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
