"use client";

import type { Editor } from "@tiptap/react";
import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Heading1,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  Quote,
  Code,
  Minus,
  ImageIcon,
  Link2,
  Table,
  Undo,
  Redo,
} from "lucide-react";

interface Props {
  editor: Editor;
  onImageUpload: () => void;
  onAddLink: () => void;
}

export default function Toolbar({ editor, onImageUpload, onAddLink }: Props) {
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
      <div className="re-tb-group">
        {btn(editor.isActive("bold"), () => editor.chain().focus().toggleBold().run(), <Bold size={16} />, "Bold (Ctrl+B)")}
        {btn(editor.isActive("italic"), () => editor.chain().focus().toggleItalic().run(), <Italic size={16} />, "Italic (Ctrl+I)")}
        {btn(editor.isActive("underline"), () => editor.chain().focus().toggleUnderline().run(), <Underline size={16} />, "Underline (Ctrl+U)")}
        {btn(editor.isActive("strike"), () => editor.chain().focus().toggleStrike().run(), <Strikethrough size={16} />, "Strikethrough")}
      </div>

      <div className="re-tb-sep" />

      <div className="re-tb-group">
        {btn(editor.isActive("heading", { level: 1 }), () => editor.chain().focus().toggleHeading({ level: 1 }).run(), <Heading1 size={16} />, "Heading 1")}
        {btn(editor.isActive("heading", { level: 2 }), () => editor.chain().focus().toggleHeading({ level: 2 }).run(), <Heading2 size={16} />, "Heading 2")}
        {btn(editor.isActive("heading", { level: 3 }), () => editor.chain().focus().toggleHeading({ level: 3 }).run(), <Heading3 size={16} />, "Heading 3")}
      </div>

      <div className="re-tb-sep" />

      <div className="re-tb-group">
        {btn(editor.isActive("bulletList"), () => editor.chain().focus().toggleBulletList().run(), <List size={16} />, "Bullet list")}
        {btn(editor.isActive("orderedList"), () => editor.chain().focus().toggleOrderedList().run(), <ListOrdered size={16} />, "Ordered list")}
        {btn(editor.isActive("blockquote"), () => editor.chain().focus().toggleBlockquote().run(), <Quote size={16} />, "Blockquote")}
        {btn(editor.isActive("codeBlock"), () => editor.chain().focus().toggleCodeBlock().run(), <Code size={16} />, "Code block")}
        {btn(false, () => editor.chain().focus().setHorizontalRule().run(), <Minus size={16} />, "Divider")}
      </div>

      <div className="re-tb-sep" />

      <div className="re-tb-group">
        {btn(editor.isActive("link"), onAddLink, <Link2 size={16} />, "Link")}
        {btn(false, onImageUpload, <ImageIcon size={16} />, "Image")}
        {btn(false, () => editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run(), <Table size={16} />, "Table")}
      </div>

      <div className="re-tb-sep" />

      <div className="re-tb-group">
        {btn(false, () => editor.chain().focus().undo().run(), <Undo size={16} />, "Undo (Ctrl+Z)", !editor.can().undo())}
        {btn(false, () => editor.chain().focus().redo().run(), <Redo size={16} />, "Redo (Ctrl+Shift+Z)", !editor.can().redo())}
      </div>
    </div>
  );
}
