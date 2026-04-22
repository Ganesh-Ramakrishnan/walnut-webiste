"use client";

import {
  useState,
  useEffect,
  useCallback,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import {
  Pilcrow,
  Heading1,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  ListChecks,
  Minus,
  Quote,
  Code,
  ImageIcon,
  Table,
  Globe,
} from "lucide-react";
import type { SlashCommandItem } from "./slash-commands";

const iconMap: Record<string, React.ReactNode> = {
  pilcrow: <Pilcrow size={18} />,
  "heading-1": <Heading1 size={18} />,
  "heading-2": <Heading2 size={18} />,
  "heading-3": <Heading3 size={18} />,
  list: <List size={18} />,
  "list-ordered": <ListOrdered size={18} />,
  "list-checks": <ListChecks size={18} />,
  minus: <Minus size={18} />,
  quote: <Quote size={18} />,
  code: <Code size={18} />,
  image: <ImageIcon size={18} />,
  table: <Table size={18} />,
  globe: <Globe size={18} />,
};

interface Props {
  items: SlashCommandItem[];
  command: (item: SlashCommandItem) => void;
}

export interface SlashCommandMenuRef {
  onKeyDown: (props: { event: KeyboardEvent }) => boolean;
}

const SlashCommandMenu = forwardRef<SlashCommandMenuRef, Props>(
  ({ items, command }, ref) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      setSelectedIndex(0);
    }, [items]);

    // Scroll selected item into view
    useEffect(() => {
      if (!scrollRef.current) return;
      const el = scrollRef.current.querySelector(`[data-index="${selectedIndex}"]`);
      if (el) el.scrollIntoView({ block: "nearest" });
    }, [selectedIndex]);

    const selectItem = useCallback(
      (index: number) => {
        const item = items[index];
        if (item) command(item);
      },
      [items, command]
    );

    useImperativeHandle(ref, () => ({
      onKeyDown: ({ event }: { event: KeyboardEvent }) => {
        if (event.key === "ArrowUp") {
          setSelectedIndex((i) => (i <= 0 ? items.length - 1 : i - 1));
          return true;
        }
        if (event.key === "ArrowDown") {
          setSelectedIndex((i) => (i >= items.length - 1 ? 0 : i + 1));
          return true;
        }
        if (event.key === "Enter") {
          selectItem(selectedIndex);
          return true;
        }
        return false;
      },
    }));

    if (items.length === 0) {
      return (
        <div className="sc-menu">
          <div className="sc-empty">No matching blocks</div>
        </div>
      );
    }

    const basicItems = items.filter((i) => i.group === "basic");
    const advancedItems = items.filter((i) => i.group === "advanced");
    let flatIdx = 0;

    const renderItem = (item: SlashCommandItem) => {
      const idx = flatIdx++;
      return (
        <button
          type="button"
          key={item.title}
          data-index={idx}
          className={`sc-item ${idx === selectedIndex ? "is-selected" : ""}`}
          onClick={() => selectItem(idx)}
          onMouseEnter={() => setSelectedIndex(idx)}
        >
          <span className="sc-item-icon">{iconMap[item.icon] || null}</span>
          <span className="sc-item-text">
            <span className="sc-item-title">{item.title}</span>
            <span className="sc-item-desc">{item.description}</span>
          </span>
        </button>
      );
    };

    return (
      <div className="sc-menu" ref={scrollRef}>
        <div className="sc-header">Insert block...</div>
        {basicItems.length > 0 && (
          <>
            <div className="sc-group-label">Basic blocks</div>
            {basicItems.map(renderItem)}
          </>
        )}
        {advancedItems.length > 0 && (
          <>
            <div className="sc-group-label">Advanced blocks</div>
            {advancedItems.map(renderItem)}
          </>
        )}
      </div>
    );
  }
);

SlashCommandMenu.displayName = "SlashCommandMenu";

export default SlashCommandMenu;
