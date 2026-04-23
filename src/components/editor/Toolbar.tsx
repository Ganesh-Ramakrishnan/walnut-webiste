"use client";

import { useCallback, useRef, useState } from "react";
import type { Editor } from "@tiptap/react";
import {
  Bold, Italic, Underline, Strikethrough,
  Heading1, Heading2, Heading3,
  List, ListOrdered, Quote, Code, Minus,
  ImageIcon, Link2, Table,
  Undo, Redo,
  AlignLeft, AlignCenter, AlignRight, AlignJustify,
  Highlighter, Palette,
  Type,
} from "lucide-react";

interface Props {
  editor: Editor;
  onImageUpload: () => void;
  onAddLink: () => void;
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

export default function Toolbar({ editor, onImageUpload, onAddLink }: Props) {
  const [showFontSize, setShowFontSize] = useState(false);
  const [showFontFamily, setShowFontFamily] = useState(false);
  const [showTextColor, setShowTextColor] = useState(false);
  const [showHighlight, setShowHighlight] = useState(false);
  const fontSizeRef = useRef<HTMLDivElement>(null);
  const fontFamilyRef = useRef<HTMLDivElement>(null);
  const textColorRef = useRef<HTMLDivElement>(null);
  const highlightRef = useRef<HTMLDivElement>(null);

  const closeAll = useCallback(() => {
    setShowFontSize(false);
    setShowFontFamily(false);
    setShowTextColor(false);
    setShowHighlight(false);
  }, []);

  const btn = (
    active: boolean,
    onClick: () => void,
    icon: React.ReactNode,
    title: string,
    disabled = false
  ) => (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`re-tb-btn ${active ? "is-active" : ""}`}
      title={title}
    >
      {icon}
    </button>
  );

  return (
    <div className="re-toolbar">
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
          onClick={() => { closeAll(); setShowFontFamily(!showFontFamily); }}
          title="Font family"
        >
          <Type size={14} />
          <span className="re-tb-dropdown-arrow">▾</span>
        </button>
        {showFontFamily && (
          <div className="re-tb-popup">
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
          onClick={() => { closeAll(); setShowFontSize(!showFontSize); }}
          title="Font size"
        >
          <span style={{ fontSize: 11, fontWeight: 700 }}>A</span>
          <span className="re-tb-dropdown-arrow">▾</span>
        </button>
        {showFontSize && (
          <div className="re-tb-popup">
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
          onClick={() => { closeAll(); setShowTextColor(!showTextColor); }}
          title="Text color"
        >
          <Palette size={16} />
        </button>
        {showTextColor && (
          <div className="re-tb-popup re-tb-color-grid">
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
                title={c}
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
          onClick={() => { closeAll(); setShowHighlight(!showHighlight); }}
          title="Highlight text"
        >
          <Highlighter size={16} />
        </button>
        {showHighlight && (
          <div className="re-tb-popup re-tb-color-grid">
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
                title={c}
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
        {btn(false, () => editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run(), <Table size={16} />, "Table")}
      </div>
      <div className="re-tb-sep" />

      {/* Undo/Redo */}
      <div className="re-tb-group">
        {btn(false, () => editor.chain().focus().undo().run(), <Undo size={16} />, "Undo", !editor.can().undo())}
        {btn(false, () => editor.chain().focus().redo().run(), <Redo size={16} />, "Redo", !editor.can().redo())}
      </div>
    </div>
  );
}
