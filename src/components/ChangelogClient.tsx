"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import { Search, ChevronDown, ChevronRight, List } from "lucide-react";

export type EntryTag = "NEW" | "IMPROVED" | "FIXED" | "SECURITY";

export interface DateEntry {
  id: string;
  date: string;
  dateLabel: string;
  shortLabel: string;
  monthLabel: string;
  title: string;
  summary?: string;
  tag: EntryTag;
  content: string;
  version?: string;
  releaseName?: string;
}

export interface Month {
  id: string;
  label: string;
  entries: DateEntry[];
}

export interface Year {
  label: string;
  months: Month[];
}

interface Props {
  data: Year[];
}

const tagStyles: Record<EntryTag, { bg: string; color: string; border: string }> = {
  NEW: { bg: "rgba(241, 127, 13, 0.12)", color: "#F17F0D", border: "rgba(241, 127, 13, 0.28)" },
  IMPROVED: { bg: "rgba(59, 130, 246, 0.12)", color: "#60a5fa", border: "rgba(59, 130, 246, 0.28)" },
  FIXED: { bg: "rgba(16, 185, 129, 0.12)", color: "#34d399", border: "rgba(16, 185, 129, 0.28)" },
  SECURITY: { bg: "rgba(239, 68, 68, 0.12)", color: "#f87171", border: "rgba(239, 68, 68, 0.28)" },
};

export default function ChangelogClient({ data }: Props) {
  const allEntries = useMemo(
    () => data.flatMap((y) => y.months.flatMap((m) => m.entries)),
    [data]
  );

  const [activeEntryId, setActiveEntryId] = useState(allEntries[0]?.id ?? "");
  const [search, setSearch] = useState("");
  const [openMonths, setOpenMonths] = useState<Set<string>>(() => {
    const first = data[0]?.months[0];
    return new Set(first ? [first.id] : []);
  });
  const [openYears, setOpenYears] = useState<Set<string>>(() => new Set(data.map((y) => y.label)));

  const entryRefs = useRef<Map<string, HTMLElement>>(new Map());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length === 0) return;
        const top = visible.reduce((a, b) => (a.boundingClientRect.top < b.boundingClientRect.top ? a : b));
        const id = top.target.getAttribute("data-entry-id");
        if (id) setActiveEntryId(id);
      },
      { rootMargin: "-100px 0px -60% 0px", threshold: 0 }
    );
    entryRefs.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [allEntries]);

  // Always treat the month containing the active entry as expanded,
  // without mutating user toggles.
  const activeMonthId = useMemo(() => {
    return data
      .flatMap((y) => y.months)
      .find((m) => m.entries.some((e) => e.id === activeEntryId))?.id;
  }, [activeEntryId, data]);

  const effectiveOpenMonths = useMemo(() => {
    const next = new Set(openMonths);
    if (activeMonthId) next.add(activeMonthId);
    return next;
  }, [openMonths, activeMonthId]);

  const toggleYear = (label: string) => {
    setOpenYears((prev) => {
      const next = new Set(prev);
      if (next.has(label)) next.delete(label);
      else next.add(label);
      return next;
    });
  };
  const toggleMonth = (id: string) => {
    setOpenMonths((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 90;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const filteredData = useMemo(() => {
    if (!search.trim()) return data;
    const q = search.toLowerCase();
    return data
      .map((y) => ({
        ...y,
        months: y.months
          .map((m) => ({
            ...m,
            entries: m.entries.filter(
              (e) =>
                e.title.toLowerCase().includes(q) ||
                e.dateLabel.toLowerCase().includes(q) ||
                (e.version?.toLowerCase().includes(q) ?? false) ||
                (e.releaseName?.toLowerCase().includes(q) ?? false) ||
                (e.summary?.toLowerCase().includes(q) ?? false) ||
                e.content.toLowerCase().includes(q)
            ),
          }))
          .filter((m) => m.entries.length > 0),
      }))
      .filter((y) => y.months.length > 0);
  }, [data, search]);

  // For "on this page" — show entries in the same month as the active one
  const activeMonth = useMemo(() => {
    return data.flatMap((y) => y.months).find((m) => m.id === activeMonthId);
  }, [activeMonthId, data]);

  return (
    <div className="cl2-shell">
      {/* Left sidebar */}
      <aside className="cl2-sidebar" aria-label="Changelog navigation">
        <div className="cl2-search">
          <Search size={14} aria-hidden />
          <input
            type="search"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search changelog"
          />
          <kbd className="cl2-kbd">⌘K</kbd>
        </div>

        <nav className="cl2-nav">
          {filteredData.map((year) => {
            const isYearOpen = openYears.has(year.label);
            return (
              <div key={year.label} className="cl2-year">
                <button
                  type="button"
                  className="cl2-year-btn"
                  onClick={() => toggleYear(year.label)}
                  aria-expanded={isYearOpen}
                >
                  <span>{year.label}</span>
                </button>
                {isYearOpen && (
                  <div className="cl2-months">
                    {year.months.map((month) => {
                      const isOpen = effectiveOpenMonths.has(month.id);
                      const hasActive = month.entries.some((e) => e.id === activeEntryId);
                      return (
                        <div key={month.id} className="cl2-month">
                          <button
                            type="button"
                            className={`cl2-month-btn ${hasActive ? "is-active-parent" : ""}`}
                            onClick={() => toggleMonth(month.id)}
                            aria-expanded={isOpen}
                          >
                            <span>{month.label}</span>
                            {isOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                          </button>
                          {isOpen && (
                            <ul className="cl2-weeks">
                              {month.entries.map((entry) => {
                                const isActive = entry.id === activeEntryId;
                                return (
                                  <li key={entry.id}>
                                    <button
                                      type="button"
                                      className={`cl2-week-btn ${isActive ? "is-active" : ""}`}
                                      onClick={() => scrollTo(entry.id)}
                                    >
                                      {entry.shortLabel}
                                    </button>
                                  </li>
                                );
                              })}
                            </ul>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </aside>

      {/* Main content */}
      <main className="cl2-main">
        {allEntries.map((entry) => {
          const tag = tagStyles[entry.tag];
          return (
            <section
              key={entry.id}
              id={entry.id}
              data-entry-id={entry.id}
              ref={(el) => {
                if (el) entryRefs.current.set(entry.id, el);
                else entryRefs.current.delete(entry.id);
              }}
              className="cl2-week"
            >
              <p className="cl2-week-month">{entry.monthLabel}</p>
              <div className="cl2-entry-head">
                <h2 className="cl2-week-title">{entry.title}</h2>
                <span
                  className="cl2-entry-tag"
                  style={{ background: tag.bg, color: tag.color, border: `1px solid ${tag.border}` }}
                >
                  {entry.tag}
                </span>
              </div>
              {entry.summary && <p className="cl2-week-summary">{entry.summary}</p>}

              <div
                className="cl2-content"
                dangerouslySetInnerHTML={{ __html: entry.content }}
              />
            </section>
          );
        })}
      </main>

      {/* Right "On this page" */}
      <aside className="cl2-toc" aria-label="On this page">
        <p className="cl2-toc-label">
          <List size={13} aria-hidden /> On this page
        </p>
        <ul className="cl2-toc-list">
          {activeMonth?.entries.map((entry) => {
            const hasMeta = !!(entry.version || entry.releaseName);
            return (
              <li key={entry.id}>
                <button
                  type="button"
                  className={`cl2-toc-link ${activeEntryId === entry.id ? "is-active" : ""}`}
                  onClick={() => scrollTo(entry.id)}
                >
                  {hasMeta ? (
                    <span className="cl2-toc-meta">
                      {entry.version && <span className="cl2-toc-version">{entry.version}</span>}
                      {entry.releaseName && <span className="cl2-toc-name">{entry.releaseName}</span>}
                    </span>
                  ) : (
                    entry.shortLabel
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </aside>
    </div>
  );
}
