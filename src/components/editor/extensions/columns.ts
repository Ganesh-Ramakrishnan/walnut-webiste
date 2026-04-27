import { Node, mergeAttributes } from "@tiptap/core";

export type ColumnLayout = "2-equal" | "3-equal" | "sidebar-left" | "sidebar-right";

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    columns: {
      setColumns: (attrs?: { layout?: ColumnLayout }) => ReturnType;
    };
  }
}

export const Column = Node.create({
  name: "column",
  group: "column",
  content: "block+",
  isolating: true,

  parseHTML() {
    return [{ tag: 'div[data-type="column"]' }];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "div",
      mergeAttributes(HTMLAttributes, { "data-type": "column", class: "column-block" }),
      0,
    ];
  },
});

export const Columns = Node.create({
  name: "columns",
  group: "block",
  content: "column{2,4}",
  defining: true,

  addAttributes() {
    return {
      layout: {
        default: "2-equal" as ColumnLayout,
        parseHTML: (el: HTMLElement) => (el.getAttribute("data-layout") as ColumnLayout) || "2-equal",
        renderHTML: (attrs: Record<string, string>) => ({ "data-layout": attrs.layout }),
      },
    };
  },

  parseHTML() {
    return [{ tag: 'div[data-type="columns"]' }];
  },

  renderHTML({ HTMLAttributes, node }) {
    return [
      "div",
      mergeAttributes(HTMLAttributes, {
        "data-type": "columns",
        class: `columns-block layout-${node.attrs.layout}`,
      }),
      0,
    ];
  },

  addCommands() {
    return {
      setColumns:
        (attrs) =>
        ({ commands }) => {
          const layout = attrs?.layout || "2-equal";
          const colCount = layout === "3-equal" ? 3 : 2;
          const cols = Array.from({ length: colCount }, () => ({
            type: "column",
            content: [{ type: "paragraph" }],
          }));
          return commands.insertContent({
            type: this.name,
            attrs: { layout },
            content: cols,
          });
        },
    };
  },
});
