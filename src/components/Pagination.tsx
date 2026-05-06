"use client";

interface Props {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

/**
 * Smart-truncated pagination control:
 *   « Prev  1  …  4  [5]  6  …  12  Next »
 *
 * Always shows: first page, last page, current ± 1.
 * Adds ellipsis when there's a gap.
 *
 * Mobile compact mode (≤ 480 px) is handled in CSS — only Prev / "Page X of Y"
 * / Next stay visible.
 */
export default function Pagination({ page, totalPages, onPageChange }: Props) {
  if (totalPages <= 1) return null;

  const numbers = pageNumbers(page, totalPages);

  return (
    <nav className="pgn" aria-label="Pagination">
      <button
        type="button"
        className="pgn-arrow"
        onClick={() => onPageChange(page - 1)}
        disabled={page <= 1}
        aria-label="Previous page"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
        <span className="pgn-arrow-label">Prev</span>
      </button>

      <ul className="pgn-numbers">
        {numbers.map((n, i) =>
          n === "…" ? (
            <li key={`gap-${i}`} className="pgn-gap" aria-hidden="true">
              …
            </li>
          ) : (
            <li key={n}>
              <button
                type="button"
                className={`pgn-num ${n === page ? "is-active" : ""}`}
                onClick={() => onPageChange(n)}
                aria-current={n === page ? "page" : undefined}
                aria-label={`Page ${n}`}
              >
                {n}
              </button>
            </li>
          )
        )}
      </ul>

      <span className="pgn-mobile-status">
        Page {page} of {totalPages}
      </span>

      <button
        type="button"
        className="pgn-arrow"
        onClick={() => onPageChange(page + 1)}
        disabled={page >= totalPages}
        aria-label="Next page"
      >
        <span className="pgn-arrow-label">Next</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </nav>
  );
}

// Returns the array of page numbers (and "…" gaps) to display, preserving
// first / last / current ± 1.
function pageNumbers(current: number, total: number): Array<number | "…"> {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }
  const out: Array<number | "…"> = [1];
  const left = Math.max(2, current - 1);
  const right = Math.min(total - 1, current + 1);
  if (left > 2) out.push("…");
  for (let i = left; i <= right; i++) out.push(i);
  if (right < total - 1) out.push("…");
  out.push(total);
  return out;
}
