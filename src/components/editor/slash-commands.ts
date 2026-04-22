import { Extension } from "@tiptap/react";
import { Suggestion } from "@tiptap/suggestion";
import type { Editor, Range } from "@tiptap/react";

export interface SlashCommandItem {
  title: string;
  description: string;
  icon: string;
  group: "basic" | "advanced";
  command: (props: { editor: Editor; range: Range }) => void;
}

export const slashMenuItems: SlashCommandItem[] = [
  // ── Basic blocks ──
  {
    title: "Paragraph",
    description: "Plain text block",
    icon: "pilcrow",
    group: "basic",
    command: ({ editor, range }) => {
      editor.chain().focus().deleteRange(range).setParagraph().run();
    },
  },
  {
    title: "Heading 1",
    description: "Large heading",
    icon: "heading-1",
    group: "basic",
    command: ({ editor, range }) => {
      editor.chain().focus().deleteRange(range).setHeading({ level: 1 }).run();
    },
  },
  {
    title: "Heading 2",
    description: "Medium heading",
    icon: "heading-2",
    group: "basic",
    command: ({ editor, range }) => {
      editor.chain().focus().deleteRange(range).setHeading({ level: 2 }).run();
    },
  },
  {
    title: "Heading 3",
    description: "Small heading",
    icon: "heading-3",
    group: "basic",
    command: ({ editor, range }) => {
      editor.chain().focus().deleteRange(range).setHeading({ level: 3 }).run();
    },
  },
  {
    title: "Unordered list",
    description: "Bullet point list",
    icon: "list",
    group: "basic",
    command: ({ editor, range }) => {
      editor.chain().focus().deleteRange(range).toggleBulletList().run();
    },
  },
  {
    title: "Ordered list",
    description: "Numbered list",
    icon: "list-ordered",
    group: "basic",
    command: ({ editor, range }) => {
      editor.chain().focus().deleteRange(range).toggleOrderedList().run();
    },
  },
  {
    title: "Task list",
    description: "Checklist with checkboxes",
    icon: "list-checks",
    group: "basic",
    command: ({ editor, range }) => {
      editor.chain().focus().deleteRange(range).toggleTaskList().run();
    },
  },
  {
    title: "Divider",
    description: "Horizontal separator line",
    icon: "minus",
    group: "basic",
    command: ({ editor, range }) => {
      editor.chain().focus().deleteRange(range).setHorizontalRule().run();
    },
  },
  {
    title: "Quote",
    description: "Blockquote for callouts",
    icon: "quote",
    group: "basic",
    command: ({ editor, range }) => {
      editor.chain().focus().deleteRange(range).toggleBlockquote().run();
    },
  },
  {
    title: "Code block",
    description: "Syntax-highlighted code",
    icon: "code",
    group: "basic",
    command: ({ editor, range }) => {
      editor.chain().focus().deleteRange(range).toggleCodeBlock().run();
    },
  },
  // ── Advanced blocks ──
  {
    title: "Insert image",
    description: "Upload or embed an image",
    icon: "image",
    group: "advanced",
    command: ({ editor, range }) => {
      editor.chain().focus().deleteRange(range).run();
      // Trigger image upload via custom event
      const event = new CustomEvent("slash-image-upload");
      document.dispatchEvent(event);
    },
  },
  {
    title: "Table",
    description: "Insert a 3×3 table",
    icon: "table",
    group: "advanced",
    command: ({ editor, range }) => {
      editor
        .chain()
        .focus()
        .deleteRange(range)
        .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
        .run();
    },
  },
  {
    title: "Embed a URL",
    description: "YouTube, Loom, Figma, CodePen, etc.",
    icon: "globe",
    group: "advanced",
    command: ({ editor, range }) => {
      const url = prompt(
        "Enter the URL to embed:\n(Supported: YouTube, Loom, Figma, CodePen, CodeSandbox, StackBlitz)"
      );
      if (!url) return;
      // Basic sanitization — encode to prevent XSS in src attribute
      const safeUrl = url.replace(/"/g, "&quot;");
      editor
        .chain()
        .focus()
        .deleteRange(range)
        .insertContent(
          `<div data-type="embed"><iframe src="${safeUrl}" width="100%" height="400" frameborder="0" allowfullscreen></iframe></div>`
        )
        .run();
    },
  },
];

export const SlashCommands = Extension.create({
  name: "slashCommands",

  addOptions() {
    return {
      suggestion: {
        char: "/",
        startOfLine: false,
        command: ({
          editor,
          range,
          props,
        }: {
          editor: Editor;
          range: Range;
          props: SlashCommandItem;
        }) => {
          props.command({ editor, range });
        },
      },
    };
  },

  addProseMirrorPlugins() {
    return [
      Suggestion({
        editor: this.editor,
        ...this.options.suggestion,
      }),
    ];
  },
});
