"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Editor } from "@tiptap/react";
import {
  Bold, Italic, Underline, Strikethrough,
  Heading1, Heading2, Heading3,
  List, ListOrdered, Quote, Code, Minus,
  ImageIcon, Link2, Table,
  Undo, Redo,
  AlignLeft, AlignCenter, AlignRight, AlignJustify,
  Highlighter,
  Type,
  Plus, Trash2, Rows3, Columns3,
  Maximize2, Minimize2,
} from "lucide-react";

interface Props {
  editor: Editor;
  onImageUpload: () => void;
  onAddLink: () => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
}

const FONT_SIZES = ["12px", "14px", "16px", "18px", "20px", "24px", "28px", "32px", "36px", "48px"];
const FONT_FAMILIES = [
  { label: "Default", value: "" },
  { label: "Sans Serif", value: "Plus Jakarta Sans, sans-serif" },
  { label: "Serif", value: "Georgia, Times New Roman, serif" },
  { label: "Mono", value: "monospace" },
  { label: "Inter", value: "Inter, sans-serif" },
  { label: "Arial", value: "Arial, sans-serif" },
];
const COLORS = [
  "#ffffff", "#e6e9ef", "#9ca3af", "#6b7280",
  "#F17F0D", "#ef4444", "#f59e0b", "#10b981",
  "#3b82f6", "#8b5cf6", "#ec4899", "#06b6d4",
];

export default function Toolbar({ editor, onImageUpload, onAddLink, isFullscreen, onToggleFullscreen }: Props) {
  const [showFontSize, setShowFontSize] = useState(false);
  const [showFontFamily, setShowFontFamily] = useState(false);
  const [showTextColor, setShowTextColor] = useState(false);
  const [showHighlight, setShowHighlight] = useState(false);
  const [showTableMenu, setShowTableMenu] = useState(false);
  const [tableSub, setTableSub] = useState<"" | "borders" | "weight" | "style" | "color" | "padding">("");
  const fontSizeRef = useRef<HTMLDivElement>(null);
  const fontFamilyRef = useRef<HTMLDivElement>(null);
  const textColorRef = useRef<HTMLDivElement>(null);
  const highlightRef = useRef<HTMLDivElement>(null);
  const [popupPos, setPopupPos] = useState<{ top?: number; bottom?: number; left: number }>({ top: 0, left: 0 });

  const closeAll = useCallback(() => {
    setShowFontSize(false);
    setShowFontFamily(false);
    setShowTextColor(false);
    setShowHighlight(false);
    setShowTableMenu(false);
    setTableSub("");
  }, []);

  // Popups use position:fixed so they stay anchored to a viewport coordinate.
  // If the user scrolls or resizes the page, the trigger button moves but the
  // popup doesn't — so the two get out of sync. Close any open popup on
  // scroll / resize so the user opens it fresh from the new button position.
  const anyOpen =
    showFontSize ||
    showFontFamily ||
    showTextColor ||
    showHighlight ||
    showTableMenu;
  useEffect(() => {
    if (!anyOpen) return;
    const onScroll = (e: Event) => {
      // Scrolls *inside* the popup itself shouldn't close it — only page-level
      // scrolling (which moves the trigger button away from the popup).
      const t = e.target;
      if (t instanceof Element && t.closest(".re-tb-popup")) return;
      closeAll();
    };
    const onResize = () => closeAll();
    window.addEventListener("scroll", onScroll, true);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll, true);
      window.removeEventListener("resize", onResize);
    };
  }, [anyOpen, closeAll]);

  const openPopup = useCallback((e: React.MouseEvent, setter: (v: boolean) => void) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const spaceBelow = window.innerHeight - rect.bottom;
    const maxH = 380;
    // If not enough space below, anchor the popup's BOTTOM just above the button.
    // Otherwise anchor its TOP just below the button. This keeps the popup adjacent
    // to the button regardless of the popup's actual rendered height.
    const pos =
      spaceBelow < maxH
        ? { bottom: window.innerHeight - rect.top + 4, left: rect.left }
        : { top: rect.bottom + 4, left: rect.left };
    setPopupPos(pos);
    closeAll();
    setter(true);
  }, [closeAll]);


  // Run a table-attribute command and then collapse any CellSelection back to a
  // text caret. Without this the orange "selected cell" outline lingers and is
  // easily mistaken for a border that wasn't removed.
  const runTableCmd = useCallback(
    (mutate: (chain: ReturnType<typeof editor.chain>) => ReturnType<typeof editor.chain>) => {
      const pos = editor.state.selection.from;
      mutate(editor.chain().focus()).setTextSelection(pos).run();
      setTableSub("");
    },
    [editor]
  );

  const btn = (
    active: boolean,
    onClick: () => void,
    icon: React.ReactNode,
    title: string,
    disabled = false
  ) => (
    <button
      type="button"
      // Prevent the button from stealing focus / collapsing the selection.
      // Without this, onClick fires AFTER the editor's text selection has
      // collapsed, so commands like setColor have nothing to act on.
      onMouseDown={(e) => e.preventDefault()}
      onClick={onClick}
      disabled={disabled}
      className={`re-tb-btn ${active ? "is-active" : ""}`}
      // data-tooltip drives the styled custom tooltip (see editor-styles.css).
      // aria-label keeps screen-reader access intact.
      data-tooltip={title}
      aria-label={title}
    >
      {icon}
    </button>
  );

  return (
    <div
      className="re-toolbar"
      // mousedown bubbles up from every <button> in the toolbar (including
      // popup items, color swatches, table-menu entries). Preventing the
      // default action here stops the browser from moving focus to the
      // clicked button, so the editor's text selection stays intact for the
      // command we're about to run from onClick.
      onMouseDown={(e) => e.preventDefault()}
    >
      {/* Formatting */}
      <div className="re-tb-group">
        {btn(editor.isActive("bold"), () => editor.chain().focus().toggleBold().run(), <Bold size={16} />, "Bold (Ctrl+B)")}
        {btn(editor.isActive("italic"), () => editor.chain().focus().toggleItalic().run(), <Italic size={16} />, "Italic (Ctrl+I)")}
        {btn(editor.isActive("underline"), () => editor.chain().focus().toggleUnderline().run(), <Underline size={16} />, "Underline (Ctrl+U)")}
        {btn(editor.isActive("strike"), () => editor.chain().focus().toggleStrike().run(), <Strikethrough size={16} />, "Strikethrough")}
      </div>
      <div className="re-tb-sep" />

      {/* Font family */}
      <div className="re-tb-group" ref={fontFamilyRef} style={{ position: "relative" }}>
        <button
          type="button"
          className={`re-tb-btn re-tb-dropdown-btn ${showFontFamily ? "is-active" : ""}`}
          onClick={(e) => showFontFamily ? closeAll() : openPopup(e, setShowFontFamily)}
          data-tooltip="Font family"
        >
          <Type size={14} />
          <span className="re-tb-dropdown-arrow">▾</span>
        </button>
        {showFontFamily && (
          <div className="re-tb-popup" style={popupPos}>
            {FONT_FAMILIES.map((f) => (
              <button
                key={f.label}
                type="button"
                className={`re-tb-popup-item ${!f.value && !editor.getAttributes("textStyle").fontFamily ? "is-active" : ""} ${f.value && editor.isActive("textStyle", { fontFamily: f.value }) ? "is-active" : ""}`}
                style={{ fontFamily: f.value || "inherit" }}
                onClick={() => {
                  if (f.value) editor.chain().focus().setFontFamily(f.value).run();
                  else editor.chain().focus().unsetFontFamily().run();
                  setShowFontFamily(false);
                }}
              >
                {f.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Font size */}
      <div className="re-tb-group" ref={fontSizeRef} style={{ position: "relative" }}>
        <button
          type="button"
          className={`re-tb-btn re-tb-dropdown-btn ${showFontSize ? "is-active" : ""}`}
          onClick={(e) => showFontSize ? closeAll() : openPopup(e, setShowFontSize)}
          data-tooltip="Font size"
        >
          <span style={{ fontSize: 11, fontWeight: 700 }}>A</span>
          <span className="re-tb-dropdown-arrow">▾</span>
        </button>
        {showFontSize && (
          <div className="re-tb-popup" style={popupPos}>
            <button
              type="button"
              className="re-tb-popup-item"
              onClick={() => { editor.chain().focus().unsetFontSize().run(); setShowFontSize(false); }}
            >
              Default
            </button>
            {FONT_SIZES.map((size) => (
              <button
                key={size}
                type="button"
                className={`re-tb-popup-item ${editor.isActive("textStyle", { fontSize: size }) ? "is-active" : ""}`}
                onClick={() => {
                  editor.chain().focus().setFontSize(size).run();
                  setShowFontSize(false);
                }}
              >
                {size}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="re-tb-sep" />

      {/* Text color */}
      <div className="re-tb-group" ref={textColorRef} style={{ position: "relative" }}>
        <button
          type="button"
          className={`re-tb-btn ${showTextColor ? "is-active" : ""}`}
          onClick={(e) => showTextColor ? closeAll() : openPopup(e, setShowTextColor)}
          data-tooltip="Text color"
        >
          {/* Custom "A with colored underline" icon — the standard text-color
              affordance in Word / Google Docs. */}
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M3.5 12L7.5 3h1L12.5 12M5 9.5h6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <rect x="3" y="13.5" width="10" height="1.5" rx="0.5" fill="#F17F0D" />
          </svg>
        </button>
        {showTextColor && (
          <div className="re-tb-popup re-tb-color-grid" style={popupPos}>
            <button
              type="button"
              className="re-tb-popup-item"
              onClick={() => { editor.chain().focus().unsetColor().run(); setShowTextColor(false); }}
            >
              Default
            </button>
            {COLORS.map((c) => (
              <button
                key={c}
                type="button"
                className="re-tb-color-swatch"
                style={{ background: c }}
                data-tooltip={c}
                onClick={() => { editor.chain().focus().setColor(c).run(); setShowTextColor(false); }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Highlight */}
      <div className="re-tb-group" ref={highlightRef} style={{ position: "relative" }}>
        <button
          type="button"
          className={`re-tb-btn ${editor.isActive("highlight") ? "is-active" : ""} ${showHighlight ? "is-active" : ""}`}
          onClick={(e) => showHighlight ? closeAll() : openPopup(e, setShowHighlight)}
          data-tooltip="Highlight text"
        >
          <Highlighter size={16} />
        </button>
        {showHighlight && (
          <div className="re-tb-popup re-tb-color-grid" style={popupPos}>
            <button
              type="button"
              className="re-tb-popup-item"
              onClick={() => { editor.chain().focus().unsetHighlight().run(); setShowHighlight(false); }}
            >
              None
            </button>
            {["#F17F0D33", "#ef444433", "#f59e0b33", "#10b98133", "#3b82f633", "#8b5cf633", "#ec489933", "#ffffff1a"].map((c) => (
              <button
                key={c}
                type="button"
                className="re-tb-color-swatch"
                style={{ background: c }}
                data-tooltip={c}
                onClick={() => { editor.chain().focus().toggleHighlight({ color: c }).run(); setShowHighlight(false); }}
              />
            ))}
          </div>
        )}
      </div>
      <div className="re-tb-sep" />

      {/* Headings */}
      <div className="re-tb-group">
        {btn(editor.isActive("heading", { level: 1 }), () => editor.chain().focus().toggleHeading({ level: 1 }).run(), <Heading1 size={16} />, "Heading 1")}
        {btn(editor.isActive("heading", { level: 2 }), () => editor.chain().focus().toggleHeading({ level: 2 }).run(), <Heading2 size={16} />, "Heading 2")}
        {btn(editor.isActive("heading", { level: 3 }), () => editor.chain().focus().toggleHeading({ level: 3 }).run(), <Heading3 size={16} />, "Heading 3")}
      </div>
      <div className="re-tb-sep" />

      {/* Alignment */}
      <div className="re-tb-group">
        {btn(editor.isActive({ textAlign: "left" }), () => editor.chain().focus().setTextAlign("left").run(), <AlignLeft size={16} />, "Align left")}
        {btn(editor.isActive({ textAlign: "center" }), () => editor.chain().focus().setTextAlign("center").run(), <AlignCenter size={16} />, "Align center")}
        {btn(editor.isActive({ textAlign: "right" }), () => editor.chain().focus().setTextAlign("right").run(), <AlignRight size={16} />, "Align right")}
        {btn(editor.isActive({ textAlign: "justify" }), () => editor.chain().focus().setTextAlign("justify").run(), <AlignJustify size={16} />, "Justify")}
      </div>
      <div className="re-tb-sep" />

      {/* Blocks */}
      <div className="re-tb-group">
        {btn(editor.isActive("bulletList"), () => editor.chain().focus().toggleBulletList().run(), <List size={16} />, "Bullet list")}
        {btn(editor.isActive("orderedList"), () => editor.chain().focus().toggleOrderedList().run(), <ListOrdered size={16} />, "Ordered list")}
        {btn(editor.isActive("blockquote"), () => editor.chain().focus().toggleBlockquote().run(), <Quote size={16} />, "Blockquote")}
        {btn(editor.isActive("codeBlock"), () => editor.chain().focus().toggleCodeBlock().run(), <Code size={16} />, "Code block")}
        {btn(false, () => editor.chain().focus().setHorizontalRule().run(), <Minus size={16} />, "Divider")}
      </div>
      <div className="re-tb-sep" />

      {/* Insert */}
      <div className="re-tb-group">
        {btn(editor.isActive("link"), onAddLink, <Link2 size={16} />, "Link")}
        {btn(false, onImageUpload, <ImageIcon size={16} />, "Image")}
      </div>
      <div className="re-tb-sep" />

      {/* Table dropdown */}
      <div className="re-tb-group" style={{ position: "relative" }}>
        <button
          type="button"
          className={`re-tb-btn re-tb-dropdown-btn ${showTableMenu ? "is-active" : ""}`}
          onClick={(e) => showTableMenu ? closeAll() : openPopup(e, setShowTableMenu)}
          data-tooltip="Table"
        >
          <Table size={14} />
          <span className="re-tb-dropdown-arrow">▾</span>
        </button>
        {showTableMenu && (
          <div className="re-tb-popup re-table-menu" style={popupPos}>
            {!editor.isActive("table") ? (
              <>
                <div className="re-table-menu-label">INSERT</div>
                <button type="button" className="re-table-menu-item" onClick={() => { editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run(); setShowTableMenu(false); }}>
                  <Plus size={14} /> Insert table
                </button>
              </>
            ) : (
              <>
                <div className="re-table-menu-label">ROWS</div>
                <button type="button" className="re-table-menu-item" onClick={() => { editor.chain().focus().addRowBefore().run(); setShowTableMenu(false); }}>
                  <Rows3 size={14} /> Insert row above
                </button>
                <button type="button" className="re-table-menu-item" onClick={() => { editor.chain().focus().addRowAfter().run(); setShowTableMenu(false); }}>
                  <Rows3 size={14} /> Insert row below
                </button>
                <button type="button" className="re-table-menu-item re-table-menu-item--danger" onClick={() => { editor.chain().focus().deleteRow().run(); setShowTableMenu(false); }}>
                  <Trash2 size={14} /> Delete row
                </button>

                <div className="re-table-menu-label">COLUMNS</div>
                <button type="button" className="re-table-menu-item" onClick={() => { editor.chain().focus().addColumnBefore().run(); setShowTableMenu(false); }}>
                  <Columns3 size={14} /> Insert column left
                </button>
                <button type="button" className="re-table-menu-item" onClick={() => { editor.chain().focus().addColumnAfter().run(); setShowTableMenu(false); }}>
                  <Columns3 size={14} /> Insert column right
                </button>
                <button type="button" className="re-table-menu-item re-table-menu-item--danger" onClick={() => { editor.chain().focus().deleteColumn().run(); setShowTableMenu(false); }}>
                  <Trash2 size={14} /> Delete column
                </button>

                <div className="re-table-menu-label">CELLS</div>
                <button type="button" className="re-table-menu-item" onClick={() => { editor.chain().focus().mergeCells().run(); setShowTableMenu(false); }}>
                  Merge cells
                </button>
                <button type="button" className="re-table-menu-item" onClick={() => { editor.chain().focus().splitCell().run(); setShowTableMenu(false); }}>
                  Split cell
                </button>
                <button type="button" className="re-table-menu-item" onClick={() => { editor.chain().focus().toggleHeaderRow().run(); setShowTableMenu(false); }}>
                  Toggle header row
                </button>
                <button type="button" className="re-table-menu-item" onClick={() => { editor.chain().focus().toggleHeaderColumn().run(); setShowTableMenu(false); }}>
                  Toggle header column
                </button>

                <div className="re-table-menu-label">BORDERS</div>
                {/* Border presets */}
                {tableSub !== "borders" ? (
                  <button type="button" className="re-table-menu-item re-table-menu-expand" onClick={() => setTableSub("borders")}>
                    Border options <span className="re-table-chevron">›</span>
                  </button>
                ) : (
                  <div className="re-table-sub">
                    <div className="re-table-border-grid">
                      <button type="button" data-tooltip="All borders" className="re-table-border-btn" onClick={() => runTableCmd((c) => c.setTableBorder("all"))}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="16" height="16" /><line x1="10" y1="2" x2="10" y2="18" /><line x1="2" y1="10" x2="18" y2="10" /></svg>
                      </button>
                      <button type="button" data-tooltip="No borders" className="re-table-border-btn" onClick={() => runTableCmd((c) => c.setTableBorder("none"))}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2"><rect x="2" y="2" width="16" height="16" /></svg>
                      </button>
                      <button type="button" data-tooltip="Outside borders" className="re-table-border-btn" onClick={() => runTableCmd((c) => c.setTableBorder("outside"))}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="16" height="16" /></svg>
                      </button>
                      <button type="button" data-tooltip="Horizontal borders" className="re-table-border-btn" onClick={() => runTableCmd((c) => c.setTableBorder("horizontal"))}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="2" y1="10" x2="18" y2="10" /><line x1="2" y1="18" x2="18" y2="18" /></svg>
                      </button>
                    </div>
                    <button type="button" className="re-table-menu-item" style={{ fontSize: 12, color: "#6b7280" }} onClick={() => setTableSub("")}>← Back</button>
                  </div>
                )}

                {/* Weight */}
                {tableSub !== "weight" ? (
                  <button type="button" className="re-table-menu-item re-table-menu-expand" onClick={() => setTableSub("weight")}>
                    Weight <span className="re-table-chevron">›</span>
                  </button>
                ) : (
                  <div className="re-table-sub">
                    {[{ label: "Thin", val: "thin" as const, px: 1 }, { label: "Medium", val: "medium" as const, px: 2 }, { label: "Thick", val: "thick" as const, px: 3 }].map((w) => (
                      <button key={w.val} type="button" className="re-table-menu-item" onClick={() => runTableCmd((c) => c.setTableBorderWeight(w.val))}>
                        <span style={{ display: "inline-block", width: 24, height: w.px, background: "#9ca3af", borderRadius: 1 }} /> {w.label}
                      </button>
                    ))}
                    <button type="button" className="re-table-menu-item" style={{ fontSize: 12, color: "#6b7280" }} onClick={() => setTableSub("")}>← Back</button>
                  </div>
                )}

                {/* Style */}
                {tableSub !== "style" ? (
                  <button type="button" className="re-table-menu-item re-table-menu-expand" onClick={() => setTableSub("style")}>
                    Style <span className="re-table-chevron">›</span>
                  </button>
                ) : (
                  <div className="re-table-sub">
                    {[{ label: "Solid", val: "solid" as const }, { label: "Dashed", val: "dashed" as const }, { label: "Dotted", val: "dotted" as const }].map((s) => (
                      <button key={s.val} type="button" className="re-table-menu-item" onClick={() => runTableCmd((c) => c.setTableBorderStyle(s.val))}>
                        <span style={{ display: "inline-block", width: 24, borderBottom: `2px ${s.val} #9ca3af` }} /> {s.label}
                      </button>
                    ))}
                    <button type="button" className="re-table-menu-item" style={{ fontSize: 12, color: "#6b7280" }} onClick={() => setTableSub("")}>← Back</button>
                  </div>
                )}

                {/* Color */}
                {tableSub !== "color" ? (
                  <button type="button" className="re-table-menu-item re-table-menu-expand" onClick={() => setTableSub("color")}>
                    Color <span className="re-table-chevron">›</span>
                  </button>
                ) : (
                  <div className="re-table-sub">
                    <div className="re-table-border-grid">
                      {([
                        { name: "default" as const, swatch: "rgba(255,255,255,0.15)" },
                        { name: "orange"  as const, swatch: "#F17F0D" },
                        { name: "red"     as const, swatch: "#ef4444" },
                        { name: "amber"   as const, swatch: "#f59e0b" },
                        { name: "green"   as const, swatch: "#10b981" },
                        { name: "blue"    as const, swatch: "#3b82f6" },
                        { name: "purple"  as const, swatch: "#8b5cf6" },
                        { name: "white"   as const, swatch: "#ffffff" },
                      ]).map((c) => (
                        <button key={c.name} type="button" data-tooltip={c.name} className="re-tb-color-swatch" style={{ background: c.swatch, width: 24, height: 24 }} onClick={() => runTableCmd((ch) => ch.setTableBorderColor(c.name))} />
                      ))}
                    </div>
                    <button type="button" className="re-table-menu-item" style={{ fontSize: 12, color: "#6b7280" }} onClick={() => setTableSub("")}>← Back</button>
                  </div>
                )}

                {/* Padding */}
                {tableSub !== "padding" ? (
                  <button type="button" className="re-table-menu-item re-table-menu-expand" onClick={() => setTableSub("padding")}>
                    Padding <span className="re-table-chevron">›</span>
                  </button>
                ) : (
                  <div className="re-table-sub">
                    {[{ label: "Compact", val: "compact" as const }, { label: "Normal", val: "normal" as const }, { label: "Comfortable", val: "comfortable" as const }, { label: "Spacious", val: "spacious" as const }].map((p) => (
                      <button key={p.val} type="button" className="re-table-menu-item" onClick={() => runTableCmd((c) => c.setTableCellPadding(p.val))}>
                        {p.label}
                      </button>
                    ))}
                    <button type="button" className="re-table-menu-item" style={{ fontSize: 12, color: "#6b7280" }} onClick={() => setTableSub("")}>← Back</button>
                  </div>
                )}

                <div className="re-table-menu-label">TABLE</div>
                <button type="button" className="re-table-menu-item re-table-menu-item--danger" onClick={() => { editor.chain().focus().deleteTable().run(); setShowTableMenu(false); }}>
                  <Trash2 size={14} /> Delete table
                </button>
              </>
            )}
          </div>
        )}
      </div>
      <div className="re-tb-sep" />

      {/* Undo/Redo */}
      <div className="re-tb-group">
        {btn(false, () => editor.chain().focus().undo().run(), <Undo size={16} />, "Undo", !editor.can().undo())}
        {btn(false, () => editor.chain().focus().redo().run(), <Redo size={16} />, "Redo", !editor.can().redo())}
      </div>

      {/* Fullscreen toggle — pushed to the right edge of the toolbar. */}
      <div className="re-tb-group" style={{ marginLeft: "auto" }}>
        {btn(
          isFullscreen,
          onToggleFullscreen,
          isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />,
          isFullscreen ? "Exit fullscreen (Esc)" : "Fullscreen"
        )}
      </div>
    </div>
  );
}
