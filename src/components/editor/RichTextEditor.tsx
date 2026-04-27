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
import { useEffect, useRef, useCallback, useState } from "react";
import { SlashCommands } from "./slash-commands";
import { suggestionConfig } from "./suggestion";
import { Callout } from "./extensions/callout";
import { ToggleBlock } from "./extensions/toggle";
import { Columns, Column } from "./extensions/columns";
import Toolbar from "./Toolbar";
import "./editor-styles.css";

const lowlight = createLowlight(common);

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
  const linkInputRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [initialHtml] = useState(content);

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
    <div className="re-shell">
      <Toolbar editor={editor} onImageUpload={triggerImageUpload} onAddLink={addLink} />

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
