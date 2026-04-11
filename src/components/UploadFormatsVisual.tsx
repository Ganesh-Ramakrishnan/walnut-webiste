export default function UploadFormatsVisual() {
  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden flex items-center justify-center px-6 py-10"
      style={{
        background: "#0f0f0f",
        minHeight: 360,
        border: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      {/* Ambient orange glow behind the drop zone */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[460px] h-[260px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(249,115,22,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Drop zone card */}
      <div
        className="relative w-full max-w-[560px] rounded-2xl flex flex-col items-center"
        style={{
          padding: "26px 28px 22px",
          border: "2px dashed rgba(249,115,22,0.35)",
          background: "rgba(255,255,255,0.03)",
          boxShadow:
            "0 0 0 8px rgba(249,115,22,0.04), 0 0 50px rgba(249,115,22,0.08), 0 12px 40px rgba(0,0,0,0.4)",
        }}
      >
        {/* Upload icon */}
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-3"
          style={{
            background: "rgba(249,115,22,0.12)",
            border: "1px solid rgba(249,115,22,0.18)",
          }}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#f97316"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" y1="3" x2="12" y2="15" />
          </svg>
        </div>

        <p className="text-[13px] font-bold text-neutral-300 mb-6">
          Drag &amp; drop or click to browse
        </p>

        {/* File format icons row */}
        <div className="flex items-end justify-center gap-3 mb-4 flex-wrap">
          <FileIconDOCX />
          <FileIconXLSX />
          <FileIconPDF />
          <FileIconPPTX />
          <FileIconTXT />
          <FileIconCSV />
          <FileIconMD />
        </div>

        <p className="text-[11px] text-neutral-600 mt-2">
          Max 10 MB &middot; 500 pages
        </p>
      </div>
    </div>
  );
}

/* ──────── File Icons — dark theme ──────── */

const iconShadow = {
  filter:
    "drop-shadow(0 8px 18px rgba(0,0,0,0.55)) drop-shadow(0 2px 6px rgba(0,0,0,0.4))",
};

function IconWrap({
  children,
  label,
  offset = 0,
}: {
  children: React.ReactNode;
  label: string;
  offset?: number;
}) {
  return (
    <div
      className="flex flex-col items-center gap-1.5"
      style={{ transform: `translateY(${offset}px)` }}
    >
      {children}
      <span
        className="text-[9px] font-semibold tracking-wider"
        style={{ color: "#555" }}
      >
        {label}
      </span>
    </div>
  );
}

function FileIconDOCX() {
  return (
    <IconWrap label="DOCX" offset={-4}>
      <svg width="52" height="60" viewBox="0 0 48 56" xmlns="http://www.w3.org/2000/svg" style={iconShadow}>
        <defs>
          <linearGradient id="wordBg-dk" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2B7CD3" />
            <stop offset="100%" stopColor="#185ABD" />
          </linearGradient>
        </defs>
        <rect x="6" y="0" width="42" height="56" rx="4" fill="#242424" />
        <rect x="6" y="0" width="42" height="56" rx="4" fill="none" stroke="#333" strokeWidth="0.8" />
        <polygon points="32,0 48,16 48,0" fill="#1e3a5c" />
        <polygon points="32,0 48,16 32,16" fill="#253f60" />
        <rect x="12" y="22" width="20" height="2" rx="1" fill="#2d3d50" />
        <rect x="12" y="27" width="26" height="2" rx="1" fill="#2d3d50" />
        <rect x="12" y="32" width="22" height="2" rx="1" fill="#2d3d50" />
        <rect x="12" y="37" width="18" height="2" rx="1" fill="#2d3d50" />
        <rect x="2" y="16" width="28" height="24" rx="4" fill="url(#wordBg-dk)" />
        <text x="16" y="32" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="700" fill="white">W</text>
      </svg>
    </IconWrap>
  );
}

function FileIconXLSX() {
  return (
    <IconWrap label="XLSX" offset={3}>
      <svg width="52" height="60" viewBox="0 0 48 56" xmlns="http://www.w3.org/2000/svg" style={iconShadow}>
        <defs>
          <linearGradient id="xlBg-dk" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#21A366" />
            <stop offset="100%" stopColor="#107C41" />
          </linearGradient>
        </defs>
        <rect x="6" y="0" width="42" height="56" rx="4" fill="#1e2820" />
        <rect x="6" y="0" width="42" height="56" rx="4" fill="none" stroke="#2a3a2c" strokeWidth="0.8" />
        <polygon points="32,0 48,16 48,0" fill="#1a3a22" />
        <polygon points="32,0 48,16 32,16" fill="#1f4028" />
        <rect x="14" y="22" width="28" height="2" rx="0.5" fill="#1e3826" />
        <rect x="14" y="27" width="28" height="2" rx="0.5" fill="#1e3826" />
        <rect x="14" y="32" width="28" height="2" rx="0.5" fill="#1e3826" />
        <rect x="14" y="37" width="28" height="2" rx="0.5" fill="#1e3826" />
        <line x1="26" y1="20" x2="26" y2="42" stroke="#1e3826" strokeWidth="1" />
        <rect x="2" y="16" width="28" height="24" rx="4" fill="url(#xlBg-dk)" />
        <text x="16" y="32" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="13" fontWeight="700" fill="white">X</text>
      </svg>
    </IconWrap>
  );
}

function FileIconPDF() {
  return (
    <IconWrap label="PDF" offset={-4}>
      <svg width="54" height="62" viewBox="0 0 48 56" xmlns="http://www.w3.org/2000/svg" style={iconShadow}>
        <defs>
          <linearGradient id="pdfBg-dk" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F05138" />
            <stop offset="100%" stopColor="#C0392B" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="48" height="56" rx="5" fill="url(#pdfBg-dk)" />
        <rect x="0" y="0" width="48" height="20" rx="5" fill="rgba(255,255,255,0.12)" />
        <polygon points="34,0 48,14 34,14" fill="rgba(255,255,255,0.16)" />
        <text x="24" y="36" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="800" fill="white" letterSpacing="0.5">PDF</text>
        <rect x="10" y="42" width="28" height="1.8" rx="0.9" fill="rgba(255,255,255,0.3)" />
        <rect x="10" y="46" width="20" height="1.8" rx="0.9" fill="rgba(255,255,255,0.2)" />
      </svg>
    </IconWrap>
  );
}

function FileIconPPTX() {
  return (
    <IconWrap label="PPTX" offset={3}>
      <svg width="52" height="60" viewBox="0 0 48 56" xmlns="http://www.w3.org/2000/svg" style={iconShadow}>
        <defs>
          <linearGradient id="pptBg-dk" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#D24726" />
            <stop offset="100%" stopColor="#B83B1E" />
          </linearGradient>
        </defs>
        <rect x="6" y="0" width="42" height="56" rx="4" fill="#261a17" />
        <rect x="6" y="0" width="42" height="56" rx="4" fill="none" stroke="#38241e" strokeWidth="0.8" />
        <polygon points="32,0 48,16 48,0" fill="#3a1f14" />
        <polygon points="32,0 48,16 32,16" fill="#3f2518" />
        <rect x="12" y="22" width="28" height="18" rx="2" fill="#2e1e1a" stroke="#3a2820" strokeWidth="0.8" />
        <rect x="14" y="24" width="14" height="2" rx="0.5" fill="#4a2e28" />
        <rect x="14" y="28" width="22" height="1.5" rx="0.5" fill="#3e2820" />
        <rect x="14" y="31" width="18" height="1.5" rx="0.5" fill="#3e2820" />
        <rect x="2" y="16" width="28" height="24" rx="4" fill="url(#pptBg-dk)" />
        <text x="16" y="32" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="13" fontWeight="700" fill="white">P</text>
      </svg>
    </IconWrap>
  );
}

function FileIconTXT() {
  return (
    <IconWrap label="TXT" offset={-4}>
      <svg width="48" height="56" viewBox="0 0 48 56" xmlns="http://www.w3.org/2000/svg" style={iconShadow}>
        <defs>
          <linearGradient id="txtPage-dk" x1="0" y1="0" x2="0.2" y2="1">
            <stop offset="0%" stopColor="#2a2a2a" />
            <stop offset="100%" stopColor="#222222" />
          </linearGradient>
        </defs>
        <rect x="2" y="0" width="44" height="56" rx="5" fill="url(#txtPage-dk)" />
        <rect x="2" y="0" width="44" height="56" rx="5" fill="none" stroke="#383838" strokeWidth="1" />
        <polygon points="32,0 46,14 46,0" fill="#333" />
        <polygon points="32,0 46,14 32,14" fill="#2e2e2e" />
        <rect x="9" y="20" width="28" height="2" rx="1" fill="#3a4050" />
        <rect x="9" y="25" width="24" height="2" rx="1" fill="#343844" />
        <rect x="9" y="30" width="26" height="2" rx="1" fill="#343844" />
        <rect x="9" y="35" width="20" height="2" rx="1" fill="#343844" />
        <rect x="9" y="40" width="22" height="2" rx="1" fill="#343844" />
        <rect x="9" y="46" width="30" height="6" rx="2" fill="#555" />
        <text x="24" y="51" textAnchor="middle" fontFamily="monospace" fontSize="5.5" fontWeight="700" fill="white">TXT</text>
      </svg>
    </IconWrap>
  );
}

function FileIconCSV() {
  return (
    <IconWrap label="CSV" offset={3}>
      <svg width="50" height="58" viewBox="0 0 48 56" xmlns="http://www.w3.org/2000/svg" style={iconShadow}>
        <defs>
          <linearGradient id="csvPage-dk" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1a2520" />
            <stop offset="100%" stopColor="#172020" />
          </linearGradient>
          <linearGradient id="csvBadge-dk" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#26A98B" />
            <stop offset="100%" stopColor="#1A8870" />
          </linearGradient>
        </defs>
        <rect x="3" y="0" width="42" height="56" rx="4" fill="url(#csvPage-dk)" />
        <rect x="3" y="0" width="42" height="56" rx="4" fill="none" stroke="#253530" strokeWidth="0.8" />
        <polygon points="30,0 45,15 45,0" fill="#183028" />
        <polygon points="30,0 45,15 30,15" fill="#1c3830" />
        <rect x="9" y="19" width="30" height="22" rx="1.5" fill="none" stroke="#243830" strokeWidth="0.8" />
        <line x1="9" y1="25" x2="39" y2="25" stroke="#243830" strokeWidth="0.7" />
        <line x1="9" y1="31" x2="39" y2="31" stroke="#243830" strokeWidth="0.7" />
        <line x1="9" y1="37" x2="39" y2="37" stroke="#243830" strokeWidth="0.7" />
        <line x1="19" y1="19" x2="19" y2="41" stroke="#243830" strokeWidth="0.7" />
        <line x1="29" y1="19" x2="29" y2="41" stroke="#243830" strokeWidth="0.7" />
        <rect x="9" y="19" width="30" height="6" rx="1.5" fill="rgba(38,169,139,0.12)" />
        <rect x="3" y="43" width="30" height="10" rx="3" fill="url(#csvBadge-dk)" />
        <text x="18" y="51" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="5.5" fontWeight="800" fill="white" letterSpacing="0.8">CSV</text>
      </svg>
    </IconWrap>
  );
}

function FileIconMD() {
  return (
    <IconWrap label="MD" offset={-4}>
      <svg width="48" height="56" viewBox="0 0 48 56" xmlns="http://www.w3.org/2000/svg" style={iconShadow}>
        <defs>
          <linearGradient id="mdBg-dk" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7C5FCC" />
            <stop offset="100%" stopColor="#5540B0" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="48" height="56" rx="5" fill="url(#mdBg-dk)" />
        <rect x="0" y="0" width="48" height="20" rx="5" fill="rgba(255,255,255,0.10)" />
        <polygon points="34,0 48,14 34,14" fill="rgba(255,255,255,0.12)" />
        <text x="24" y="26" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="11" fontWeight="800" fill="rgba(255,255,255,0.95)">MD</text>
        <polygon points="17,32 24,40 31,32 28,32 28,28 20,28 20,32" fill="rgba(255,255,255,0.85)" />
        <rect x="8" y="44" width="32" height="1.8" rx="0.9" fill="rgba(255,255,255,0.28)" />
        <rect x="8" y="48" width="22" height="1.8" rx="0.9" fill="rgba(255,255,255,0.18)" />
      </svg>
    </IconWrap>
  );
}
