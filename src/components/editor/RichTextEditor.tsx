"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import { TableRow, TableCell, TableHeader } from "@tiptap/extension-table";
import { StyledTable } from "./extensions/styled-table";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import Placeholder from "@tiptap/extension-placeholder";
import Typography from "@tiptap/extension-typography";
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";
import TextAlign from "@tiptap/extension-text-align";
import { TextStyle } from "@tiptap/extension-text-style";
import { Color } from "@tiptap/extension-color";
import { FontSize } from "@tiptap/extension-text-style/font-size";
import Highlight from "@tiptap/extension-highlight";
import FontFamily from "@tiptap/extension-font-family";
import { common, createLowlight } from "lowlight";
import { marked } from "marked";
import { DOMParser as ProseMirrorDOMParser } from "@tiptap/pm/model";
import { useEffect, useRef, useCallback, useState } from "react";
import { SlashCommands } from "./slash-commands";
import { suggestionConfig } from "./suggestion";
import { Callout } from "./extensions/callout";
import { ToggleBlock } from "./extensions/toggle";
import { Columns, Column } from "./extensions/columns";
import Toolbar from "./Toolbar";
import "./editor-styles.css";

const lowlight = createLowlight(common);

// Clean up text copied from a PDF. PDFs use hard line breaks for visual
// wrapping rather than paragraph structure, so naive paste turns every line
// into its own <p>. This helper:
//  • joins hyphenated words split across lines ("engi-\nneering" → "engineering")
//  • merges lines that are part of the same paragraph (no terminator + next
//    line starts lowercase)
//  • PRESERVES structural breaks: short standalone lines become headings,
//    bulleted/numbered lines become list items
//  • collapses 2+ blank lines into a paragraph break
//  • strips lone page-number lines
//  • removes form-feed and other PDF control chars
//
// Returns markdown-flavoured text so the downstream `marked` parser turns the
// detected headings/lists into real <h2>/<ul>/<li> nodes.
function reflowPdfText(input: string): string {
  const noFormFeed = input.replace(/\f/g, "\n\n");
  const rawLines = noFormFeed.split(/\r?\n/).map((l) => l.trim());

  // Drop page numbers and collapse runs of blank lines.
  const lines: string[] = [];
  for (const line of rawLines) {
    if (/^(?:page\s+)?\d{1,4}$/i.test(line)) continue;
    if (line === "") {
      if (lines.length && lines[lines.length - 1] !== "") lines.push("");
      continue;
    }
    lines.push(line);
  }
  while (lines.length && lines[lines.length - 1] === "") lines.pop();

  // Median line length — used to detect "short last line of paragraph". When a
  // PDF doesn't include blank lines between paragraphs, the only signal we
  // have is that the final line of a paragraph rarely fills the full column
  // width.
  const lengths = lines.filter((l) => l !== "").map((l) => l.length);
  const sortedLen = [...lengths].sort((a, b) => a - b);
  const medianLen = sortedLen.length
    ? sortedLen[Math.floor(sortedLen.length / 2)]
    : 80;
  // Threshold is somewhat generous (85% of median) so we don't over-split,
  // but still catch the typical short trailing line.
  const paragraphEndShortThreshold = Math.max(40, medianLen * 0.85);

  // Classify each non-empty line.
  type Kind = "heading" | "bullet" | "ordered" | "body" | "blank";
  const isBullet = (l: string) => /^[•●▪◦‣⁃○\-*]\s+/.test(l);
  const isOrdered = (l: string) => /^(?:\d{1,3}|[ivxIVX]{1,4}|[a-zA-Z])[.)]\s+/.test(l);
  const stripBullet = (l: string) => l.replace(/^[•●▪◦‣⁃○]\s+/, "").replace(/^[-*]\s+/, "");
  const stripOrdered = (l: string) =>
    l.replace(/^(?:\d{1,3}|[ivxIVX]{1,4}|[a-zA-Z])[.)]\s+/, "");

  const classify = (line: string, prev: string, next: string): Kind => {
    if (line === "") return "blank";
    if (isBullet(line)) return "bullet";
    if (isOrdered(line)) return "ordered";
    // Heading heuristic: short line (< 80 chars), no trailing sentence
    // punctuation, and surrounded by blanks (or at the very top).
    const short = line.length < 80;
    const noTerminator = !/[.!?]$/.test(line);
    const isolated =
      (prev === "" || prev === undefined) &&
      (next === "" || next === undefined);
    const allCaps = /^[A-Z0-9 ,:&'’\-/()]{4,}$/.test(line) && /[A-Z]/.test(line);
    if (short && noTerminator && (isolated || allCaps)) return "heading";
    return "body";
  };

  // Walk the list, merging body runs into paragraphs and emitting markdown
  // for headings / bullets / numbered items.
  const md: string[] = [];
  let bodyBuf: string[] = [];
  const flushBody = () => {
    if (!bodyBuf.length) return;
    let joined = "";
    for (let i = 0; i < bodyBuf.length; i++) {
      const cur = bodyBuf[i];
      if (i === 0) { joined = cur; continue; }
      if (/[a-z]-$/.test(joined)) joined = joined.slice(0, -1) + cur;
      else joined += " " + cur;
    }
    md.push(joined.replace(/\s{2,}/g, " ").trim());
    bodyBuf = [];
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const prev = lines[i - 1] ?? "";
    const next = lines[i + 1] ?? "";
    const kind = classify(line, prev, next);

    if (kind === "blank") { flushBody(); continue; }
    if (kind === "heading") {
      flushBody();
      md.push(`## ${line}`);
      continue;
    }
    if (kind === "bullet") {
      flushBody();
      md.push(`- ${stripBullet(line)}`);
      continue;
    }
    if (kind === "ordered") {
      flushBody();
      // Renumber to "1." — marked handles list continuation correctly.
      md.push(`1. ${stripOrdered(line)}`);
      continue;
    }
    bodyBuf.push(line);
    // Implicit paragraph break detection (PDF rarely emits blank lines):
    // current line ends with a sentence terminator AND is shorter than the
    // typical column width AND the next non-empty line starts with a capital
    // letter. If all three hold, this is the end of a paragraph.
    if (
      next &&
      /[.!?][')\]"’”]?$/.test(line) &&
      line.length <= paragraphEndShortThreshold &&
      /^[A-Z]/.test(next.trim()) &&
      classify(next, line, lines[i + 2] ?? "") === "body"
    ) {
      flushBody();
    }
  }
  flushBody();

  return md.join("\n\n");
}

// Same idea as reflowPdfText but operates on the clipboard's HTML so inline
// marks (<strong>, <em>, <a>, <u>, etc.) survive the reflow. Returns HTML
// ready to feed to ProseMirror's DOMParser.
function reflowPdfHtml(htmlString: string): string {
  const doc = new window.DOMParser().parseFromString(htmlString, "text/html");

  // Strip clipboard styling that doesn't belong in our editor:
  //   • inline `color` / `background-color` / `background` — PDFs/Word ship
  //     colors tuned for a white page; on our dark theme they render as
  //     unreadable dark-on-dark text.
  //   • `font-family` / `font-size` — preserve our editor's typography
  //     instead of inheriting the source's.
  //   • class attributes — usually point to stylesheets we don't have.
  const propsToStrip = /(?:^|;)\s*(?:color|background(?:-color)?|font-family|font-size|line-height|letter-spacing)\s*:[^;]*/gi;
  doc.querySelectorAll<HTMLElement>("[style]").forEach((el) => {
    const cleaned = (el.getAttribute("style") || "")
      .replace(propsToStrip, "")
      .replace(/^;+|;+$/g, "")
      .replace(/;{2,}/g, ";")
      .trim();
    if (cleaned) el.setAttribute("style", cleaned);
    else el.removeAttribute("style");
  });
  doc.querySelectorAll<HTMLElement>("[class]").forEach((el) => {
    el.removeAttribute("class");
  });

  // Collect block-level elements in order. Each becomes one "line".
  const lines: Array<{ text: string; inner: string }> = [];
  const blockRe = /^(P|DIV|H[1-6]|LI|BLOCKQUOTE|PRE)$/;
  const containerRe = /^(BODY|UL|OL|SECTION|ARTICLE|MAIN|HEADER|FOOTER|NAV|ASIDE)$/;
  const walk = (root: Element) => {
    for (const child of Array.from(root.children)) {
      const tag = child.tagName;
      if (blockRe.test(tag)) {
        const text = (child.textContent || "").trim();
        const inner = child.innerHTML.trim();
        if (text) {
          // Drop standalone page numbers
          if (/^(?:page\s+)?\d{1,4}$/i.test(text)) continue;
          lines.push({ text, inner });
        }
      } else if (containerRe.test(tag)) {
        walk(child);
      } else {
        // Inline-level content directly inside body — wrap as a single line.
        const text = (child.textContent || "").trim();
        if (text) lines.push({ text, inner: child.outerHTML });
      }
    }
  };
  walk(doc.body);

  if (lines.length === 0) {
    const text = (doc.body.textContent || "").trim();
    return text ? `<p>${doc.body.innerHTML}</p>` : "";
  }

  // Median line length — used for paragraph-break detection.
  const lens = lines.map((l) => l.text.length).sort((a, b) => a - b);
  const medianLen = lens[Math.floor(lens.length / 2)] || 80;
  const shortThreshold = Math.max(40, medianLen * 0.85);

  // Classification (same heuristics as the text version).
  type Kind = "heading" | "bullet" | "ordered" | "body";
  const isBullet = (l: string) => /^[•●▪◦‣⁃○]\s+/.test(l);
  const isOrdered = (l: string) =>
    /^(?:\d{1,3}|[ivxIVX]{1,4}|[a-zA-Z])[.)]\s+/.test(l);
  const classify = (line: string, prev: string, next: string): Kind => {
    if (isBullet(line)) return "bullet";
    if (isOrdered(line)) return "ordered";
    const short = line.length < 80;
    const noTerminator = !/[.!?]$/.test(line);
    const isolated = !prev || !next;
    const allCaps = /^[A-Z0-9 ,:&'’\-/()]{4,}$/.test(line) && /[A-Z]/.test(line);
    if (short && noTerminator && (isolated || allCaps)) return "heading";
    return "body";
  };

  // Build output. <li> elements are buffered into <ul>/<ol> wrappers as runs.
  const out: string[] = [];
  let bodyBuf: typeof lines = [];
  let listKind: "ul" | "ol" | null = null;
  let listBuf: string[] = [];

  const flushBody = () => {
    if (!bodyBuf.length) return;
    let joined = "";
    for (let i = 0; i < bodyBuf.length; i++) {
      const cur = bodyBuf[i];
      if (i === 0) {
        joined = cur.inner;
      } else if (/[a-z]-$/.test(bodyBuf[i - 1].text)) {
        // Hyphen continuation — drop trailing hyphen (incl. one trailing tag).
        joined = joined.replace(/-(<\/[^>]+>)?$/, "$1") + cur.inner;
      } else {
        joined += " " + cur.inner;
      }
    }
    out.push(`<p>${joined.replace(/\s{2,}/g, " ").trim()}</p>`);
    bodyBuf = [];
  };
  const flushList = () => {
    if (!listKind || !listBuf.length) return;
    out.push(`<${listKind}>${listBuf.join("")}</${listKind}>`);
    listKind = null;
    listBuf = [];
  };
  const flushAll = () => { flushBody(); flushList(); };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const prev = lines[i - 1]?.text ?? "";
    const next = lines[i + 1]?.text ?? "";
    const kind = classify(line.text, prev, next);

    if (kind === "heading") {
      flushAll();
      out.push(`<h2>${line.inner}</h2>`);
      continue;
    }
    if (kind === "bullet") {
      flushBody();
      if (listKind && listKind !== "ul") flushList();
      listKind = "ul";
      const stripped = line.inner.replace(/^[•●▪◦‣⁃○]\s+/, "");
      listBuf.push(`<li>${stripped}</li>`);
      continue;
    }
    if (kind === "ordered") {
      flushBody();
      if (listKind && listKind !== "ol") flushList();
      listKind = "ol";
      const stripped = line.inner.replace(
        /^(?:\d{1,3}|[ivxIVX]{1,4}|[a-zA-Z])[.)]\s+/,
        ""
      );
      listBuf.push(`<li>${stripped}</li>`);
      continue;
    }

    // body
    flushList();
    bodyBuf.push(line);
    // Implicit paragraph break.
    if (
      next &&
      /[.!?][')\]"’”]?$/.test(line.text) &&
      line.text.length <= shortThreshold &&
      /^[A-Z]/.test(next.trim()) &&
      classify(next, line.text, lines[i + 2]?.text ?? "") === "body"
    ) {
      flushBody();
    }
  }
  flushAll();

  return out.join("");
}

interface Props {
  content: string;
  onChange: (html: string) => void;
  placeholder?: string;
}

export default function RichTextEditor({
  content,
  onChange,
  placeholder = "Type / to insert a block or paste a link to embed content",
}: Props) {
  const [linkUrl, setLinkUrl] = useState("");
  const [showLinkInput, setShowLinkInput] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const linkInputRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [initialHtml] = useState(content);

  // Toggle fullscreen + keep <body> from scrolling underneath while active.
  // Esc exits fullscreen.
  const toggleFullscreen = useCallback(() => setIsFullscreen((v) => !v), []);
  useEffect(() => {
    if (!isFullscreen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsFullscreen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [isFullscreen]);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({ codeBlock: false }),
      Underline,
      Link.configure({
        openOnClick: false,
        HTMLAttributes: { rel: "noopener noreferrer", target: "_blank" },
      }),
      Image.configure({ allowBase64: true }),
      StyledTable.configure({ resizable: false }),
      TableRow,
      TableCell,
      TableHeader,
      CodeBlockLowlight.configure({ lowlight }),
      Placeholder.configure({ placeholder }),
      Typography,
      TaskList,
      TaskItem.configure({ nested: true }),
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      TextStyle,
      Color,
      FontSize,
      Highlight.configure({ multicolor: true }),
      FontFamily,
      Callout,
      ToggleBlock,
      Columns,
      Column,
      SlashCommands.configure({ suggestion: suggestionConfig }),
    ],
    content: initialHtml,
    onUpdate: ({ editor: e }) => {
      onChange(e.getHTML());
    },
    immediatelyRender: false,
    editorProps: {
      handlePaste: (view, event) => {
        const text = event.clipboardData?.getData("text/plain");
        const html = event.clipboardData?.getData("text/html");
        if (!text) {
          // No plain text — let ProseMirror handle whatever HTML there is.
          return false;
        }

        // Markdown signals.
        const looksLikeMarkdown =
          /(^|\n)#{1,6}\s/.test(text) ||
          /(^|\n)>\s/.test(text) ||
          /(^|\n)[-*+]\s/.test(text) ||
          /(^|\n)\d+\.\s/.test(text) ||
          /\*\*[^*]+\*\*/.test(text) ||
          /(^|\n)```/.test(text) ||
          /\[[^\]]+\]\([^)]+\)/.test(text);

        // PDF signals — short hard-wrapped lines, sentences split across
        // breaks, hyphenated word continuations. We check this BEFORE deciding
        // whether to use the clipboard's HTML, because PDF viewers (Wondershare,
        // Acrobat, Chrome's built-in viewer) frequently emit HTML where each
        // visual line is its own <p>/<span>, which is exactly the garbage we
        // want to fix. Detect from the plain text and reflow.
        const lines = text.split(/\r?\n/);
        const nonEmpty = lines.filter((l) => l.trim().length > 0);
        const midBreaks = lines.filter((l, i) => {
          const next = lines[i + 1];
          if (!next) return false;
          const trimmed = l.trim();
          if (!trimmed) return false;
          const endsMidSentence = !/[.!?:;\]"')]$/.test(trimmed);
          const nextStartsLower = /^[a-z(]/.test(next.trim());
          const hyphenJoin = /[a-z]-$/.test(trimmed);
          return endsMidSentence && (nextStartsLower || hyphenJoin);
        }).length;
        const looksLikePdf =
          !looksLikeMarkdown &&
          nonEmpty.length >= 3 &&
          // Either ≥40% of breaks are mid-sentence, or there's hyphen
          // continuation (a near-certain PDF signal).
          (midBreaks / nonEmpty.length >= 0.4 || /[a-z]-\n/.test(text));

        if (looksLikeMarkdown || looksLikePdf) {
          try {
            // PDF + HTML clipboard → reflow the HTML so inline marks
            // (<strong>, <em>, <a>, etc.) are preserved.
            // PDF without HTML, or markdown text → use the plain-text path.
            let parsedHtml: string;
            if (looksLikePdf && html && html.trim()) {
              parsedHtml = reflowPdfHtml(html);
            } else {
              const source = looksLikePdf ? reflowPdfText(text) : text;
              parsedHtml = marked.parse(source, { async: false }) as string;
            }
            const { state } = view;
            const { tr, schema } = state;
            const node = ProseMirrorDOMParser.fromSchema(schema).parse(
              new window.DOMParser().parseFromString(parsedHtml, "text/html").body
            );
            tr.replaceSelectionWith(node, false);
            view.dispatch(tr);
            return true;
          } catch {
            // fall through to default handling
          }
        }

        // Rich HTML (Google Docs, Word, web pages, Notion) — let ProseMirror
        // handle it so headings/blockquotes/strong/lists are preserved.
        if (html && html.trim()) return false;
        // Plain text with no markdown / no PDF signals — default behaviour.
        return false;
      },
    },
  });

  useEffect(() => {
    if (!editor || !content || content === initialHtml) return;
    if (editor.isEmpty) {
      editor.commands.setContent(content);
    }
  }, [content, editor, initialHtml]);

  const triggerImageUpload = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  useEffect(() => {
    const handler = () => triggerImageUpload();
    document.addEventListener("slash-image-upload", handler);
    return () => document.removeEventListener("slash-image-upload", handler);
  }, [triggerImageUpload]);


  const onFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file || !editor) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        const src = ev.target?.result as string;
        editor.chain().focus().setImage({ src }).run();
      };
      reader.readAsDataURL(file);
      e.target.value = "";
    },
    [editor]
  );

  const addLink = useCallback(() => {
    if (!editor) return;
    const prev = editor.getAttributes("link").href || "";
    setLinkUrl(prev);
    setShowLinkInput(true);
    setTimeout(() => linkInputRef.current?.focus(), 50);
  }, [editor]);

  const confirmLink = useCallback(() => {
    if (!editor) return;
    if (linkUrl.trim()) {
      editor.chain().focus().extendMarkRange("link").setLink({ href: linkUrl.trim() }).run();
    } else {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
    }
    setShowLinkInput(false);
    setLinkUrl("");
  }, [editor, linkUrl]);

  const removeLink = useCallback(() => {
    if (!editor) return;
    editor.chain().focus().extendMarkRange("link").unsetLink().run();
    setShowLinkInput(false);
    setLinkUrl("");
  }, [editor]);

  if (!editor) {
    return (
      <div className="re-shell re-loading">
        <div className="re-loading-text">Loading editor...</div>
      </div>
    );
  }

  return (
    <div className={`re-shell${isFullscreen ? " is-fullscreen" : ""}`}>
      <Toolbar
        editor={editor}
        onImageUpload={triggerImageUpload}
        onAddLink={addLink}
        isFullscreen={isFullscreen}
        onToggleFullscreen={toggleFullscreen}
      />

      {showLinkInput && (
        <div className="re-link-popover">
          <input
            ref={linkInputRef}
            type="text"
            value={linkUrl}
            onChange={(e) => setLinkUrl(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") { e.preventDefault(); confirmLink(); }
              if (e.key === "Escape") setShowLinkInput(false);
            }}
            placeholder="Paste URL and press Enter"
            className="re-link-input"
          />
          <button type="button" onClick={confirmLink} className="re-link-btn">✓</button>
          {editor.isActive("link") && (
            <button type="button" onClick={removeLink} className="re-link-btn re-link-btn--danger">✕</button>
          )}
        </div>
      )}

      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
      <div className="re-content" onClick={() => { if (editor && !editor.isFocused) editor.commands.focus("end"); }}>
        <EditorContent editor={editor} />
      </div>

      <input ref={fileInputRef} type="file" accept="image/*" onChange={onFileChange} style={{ display: "none" }} />
    </div>
  );
}
