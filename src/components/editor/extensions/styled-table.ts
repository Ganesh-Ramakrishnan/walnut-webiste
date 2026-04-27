import { Table } from "@tiptap/extension-table";

export type BorderPreset = "all" | "none" | "outside" | "horizontal";
export type BorderWeight = "thin" | "medium" | "thick";
export type BorderStyleVal = "solid" | "dashed" | "dotted";
export type BorderColor =
  | "default"
  | "orange"
  | "red"
  | "amber"
  | "green"
  | "blue"
  | "purple"
  | "white";
export type CellPadding = "compact" | "normal" | "comfortable" | "spacious";

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    styledTable: {
      setTableBorder: (preset: BorderPreset) => ReturnType;
      setTableBorderWeight: (weight: BorderWeight) => ReturnType;
      setTableBorderStyle: (val: BorderStyleVal) => ReturnType;
      setTableBorderColor: (color: BorderColor) => ReturnType;
      setTableCellPadding: (padding: CellPadding) => ReturnType;
    };
  }
}

// Extend the Table node with table-level styling attributes.
// CSS targets these via [data-border="…"] selectors so styles apply
// to every cell in the table without per-cell schema changes.
export const StyledTable = Table.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      border: {
        default: null as BorderPreset | null,
        parseHTML: (el: HTMLElement) =>
          (el.getAttribute("data-border") as BorderPreset | null) || null,
        renderHTML: (attrs: Record<string, string | null>) =>
          attrs.border ? { "data-border": attrs.border } : {},
      },
      borderWeight: {
        default: null as BorderWeight | null,
        parseHTML: (el: HTMLElement) =>
          (el.getAttribute("data-border-weight") as BorderWeight | null) || null,
        renderHTML: (attrs: Record<string, string | null>) =>
          attrs.borderWeight ? { "data-border-weight": attrs.borderWeight } : {},
      },
      borderStyle: {
        default: null as BorderStyleVal | null,
        parseHTML: (el: HTMLElement) =>
          (el.getAttribute("data-border-style") as BorderStyleVal | null) || null,
        renderHTML: (attrs: Record<string, string | null>) =>
          attrs.borderStyle ? { "data-border-style": attrs.borderStyle } : {},
      },
      borderColor: {
        default: null as BorderColor | null,
        parseHTML: (el: HTMLElement) =>
          (el.getAttribute("data-border-color") as BorderColor | null) || null,
        renderHTML: (attrs: Record<string, string | null>) =>
          attrs.borderColor ? { "data-border-color": attrs.borderColor } : {},
      },
      cellPadding: {
        default: null as CellPadding | null,
        parseHTML: (el: HTMLElement) =>
          (el.getAttribute("data-cell-padding") as CellPadding | null) || null,
        renderHTML: (attrs: Record<string, string | null>) =>
          attrs.cellPadding ? { "data-cell-padding": attrs.cellPadding } : {},
      },
    };
  },

  addCommands() {
    const parent = this.parent?.();
    return {
      ...parent,
      setTableBorder:
        (preset) =>
        ({ commands }) =>
          commands.updateAttributes(this.name, { border: preset }),
      setTableBorderWeight:
        (weight) =>
        ({ commands }) =>
          commands.updateAttributes(this.name, { borderWeight: weight }),
      setTableBorderStyle:
        (val) =>
        ({ commands }) =>
          commands.updateAttributes(this.name, { borderStyle: val }),
      setTableBorderColor:
        (color) =>
        ({ commands }) =>
          commands.updateAttributes(this.name, { borderColor: color }),
      setTableCellPadding:
        (padding) =>
        ({ commands }) =>
          commands.updateAttributes(this.name, { cellPadding: padding }),
    };
  },
});
