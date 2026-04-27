import { Node, mergeAttributes } from "@tiptap/core";

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    toggleBlock: {
      setToggleBlock: () => ReturnType;
      unsetToggleBlock: () => ReturnType;
    };
  }
}

export const ToggleBlock = Node.create({
  name: "toggleBlock",
  group: "block",
  content: "block+",
  defining: true,

  addAttributes() {
    return {
      open: {
        default: true,
        parseHTML: (el: HTMLElement) => el.getAttribute("data-open") !== "false",
        renderHTML: (attrs: Record<string, boolean>) => ({ "data-open": attrs.open ? "true" : "false" }),
      },
    };
  },

  parseHTML() {
    return [{ tag: "div[data-toggle-block]" }];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "div",
      mergeAttributes(HTMLAttributes, {
        "data-toggle-block": "true",
        class: "toggle-block",
      }),
      0,
    ];
  },

  addCommands() {
    return {
      setToggleBlock:
        () =>
        ({ commands }) =>
          commands.wrapIn(this.name, { open: true }),
      unsetToggleBlock:
        () =>
        ({ commands }) =>
          commands.lift(this.name),
    };
  },
});
