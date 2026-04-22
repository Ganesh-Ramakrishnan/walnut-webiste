import { ReactRenderer } from "@tiptap/react";
import type { Editor } from "@tiptap/react";
import tippy, { type Instance as TippyInstance } from "tippy.js";
import SlashCommandMenu, { type SlashCommandMenuRef } from "./SlashCommandMenu";
import { slashMenuItems, type SlashCommandItem } from "./slash-commands";

interface SuggestionProps {
  editor: Editor;
  clientRect: (() => DOMRect | null) | null;
  command: (item: SlashCommandItem) => void;
  items: SlashCommandItem[];
  query: string;
}

export const suggestionConfig = {
  items: ({ query }: { query: string }): SlashCommandItem[] => {
    const q = query.toLowerCase();
    return slashMenuItems.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q)
    );
  },

  render: () => {
    let component: ReactRenderer<SlashCommandMenuRef> | null = null;
    let popup: TippyInstance[] | null = null;

    return {
      onStart: (props: SuggestionProps) => {
        component = new ReactRenderer(SlashCommandMenu, {
          props,
          editor: props.editor,
        }) as ReactRenderer<SlashCommandMenuRef>;

        if (!props.clientRect) return;

        popup = tippy("body", {
          getReferenceClientRect: props.clientRect as () => DOMRect,
          appendTo: () => document.body,
          content: component.element,
          showOnCreate: true,
          interactive: true,
          trigger: "manual",
          placement: "bottom-start",
          popperOptions: {
            modifiers: [
              { name: "flip", options: { fallbackPlacements: ["top-start"] } },
            ],
          },
          theme: "slash-menu",
          maxWidth: "none",
        });
      },

      onUpdate: (props: SuggestionProps) => {
        component?.updateProps(props);
        if (popup && props.clientRect) {
          popup[0]?.setProps({
            getReferenceClientRect: props.clientRect as () => DOMRect,
          });
        }
      },

      onKeyDown: (props: { event: KeyboardEvent }) => {
        if (props.event.key === "Escape") {
          popup?.[0]?.hide();
          return true;
        }
        return component?.ref?.onKeyDown(props) ?? false;
      },

      onExit: () => {
        popup?.[0]?.destroy();
        component?.destroy();
      },
    };
  },
};
