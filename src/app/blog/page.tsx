"use client";

import { useState, useEffect, useRef, useCallback, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import BlogCard from "@/components/BlogCard";
import Footer from "@/components/Footer";
import Pagination from "@/components/Pagination";
import type { BlogPost } from "@/data/blogPosts";

type CategoryGroup =
  | { kind: "single"; label: string }
  | { kind: "group"; label: string; children: string[] };

const CATEGORIES: CategoryGroup[] = [
  { kind: "single", label: "Latest" },
  { kind: "single", label: "Announcements" },
  { kind: "single", label: "Integrations" },
  { kind: "single", label: "Success Stories" },
  {
    kind: "group",
    label: "Playbooks",
    children: ["Dev Playbook", "QA Playbook", "Management Playbook"],
  },
  { kind: "single", label: "Behind the Scenes" },
];

// 6 posts per page → pagination kicks in starting at the 7th post.
// Page 1 with featured = featured card + 5 grid cards (3 + 2 layout).
// Page 2+ = pure 6-card grid (3 + 3 rows).
const POSTS_PER_PAGE = 6;

interface BlogApiResponse {
  posts: BlogPost[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

function BlogListingInner() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = Math.max(1, parseInt(searchParams.get("page") || "1", 10) || 1);
  const cat = searchParams.get("cat") || "Latest";
  const q = searchParams.get("q") || "";

  // Local search input — synced to URL on submit / debounce.
  const [searchInput, setSearchInput] = useState(q);
  const [data, setData] = useState<BlogApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const gridTopRef = useRef<HTMLDivElement>(null);

  // Keep search input in sync if URL changes externally (back/forward).
  useEffect(() => {
    setSearchInput(q);
  }, [q]);

  // Fetch whenever URL state changes.
  useEffect(() => {
    setLoading(true);
    const params = new URLSearchParams({
      page: String(page),
      limit: String(POSTS_PER_PAGE),
    });
    if (cat && cat !== "Latest") params.set("cat", cat);
    if (q) params.set("q", q);

    fetch(`/api/blogs?${params.toString()}`)
      .then((r) => r.json())
      .then((d: BlogApiResponse | BlogPost[]) => {
        // Defensive: in case server returns the legacy array shape.
        if (Array.isArray(d)) {
          setData({
            posts: d.slice(0, POSTS_PER_PAGE),
            total: d.length,
            page: 1,
            limit: POSTS_PER_PAGE,
            totalPages: Math.max(1, Math.ceil(d.length / POSTS_PER_PAGE)),
          });
        } else {
          setData(d);
        }
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [page, cat, q]);

  // Close dropdown on outside click / Escape.
  useEffect(() => {
    if (!dropdownOpen) return;
    const onDocClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDropdownOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [dropdownOpen]);

  // URL helpers — replace one or more params, always reset page to 1
  // when filter / search changes.
  const updateUrl = useCallback(
    (next: { page?: number; cat?: string; q?: string }) => {
      const params = new URLSearchParams(searchParams.toString());
      if ("cat" in next) {
        if (!next.cat || next.cat === "Latest") params.delete("cat");
        else params.set("cat", next.cat);
        params.delete("page");
      }
      if ("q" in next) {
        if (!next.q) params.delete("q");
        else params.set("q", next.q);
        params.delete("page");
      }
      if ("page" in next) {
        if (!next.page || next.page === 1) params.delete("page");
        else params.set("page", String(next.page));
      }
      router.push(`/blog${params.toString() ? "?" + params.toString() : ""}`, {
        scroll: false,
      });
    },
    [router, searchParams]
  );

  const onPickCategory = (label: string) => {
    setDropdownOpen(false);
    updateUrl({ cat: label });
  };

  const onSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateUrl({ q: searchInput.trim() });
  };

  const onPageChange = (next: number) => {
    updateUrl({ page: next });
    // Smooth scroll to the top of the grid.
    requestAnimationFrame(() => {
      gridTopRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  const showFeatured =
    !!data &&
    data.posts.length > 0 &&
    page === 1 &&
    cat === "Latest" &&
    !q;
  const featured = showFeatured ? data!.posts[0] : null;
  const gridPosts = featured ? data!.posts.slice(1) : data?.posts || [];

  const startIdx = data ? (data.page - 1) * data.limit + 1 : 0;
  const endIdx = data ? Math.min(data.page * data.limit, data.total) : 0;

  return (
    <div className="blog-page">
      <Navbar />

      {/* ── Hero ── */}
      <header className="blog-hero">
        <span className="blog-hero-eyebrow">WalnutAI Blog</span>
        <h1 className="blog-hero-title">
          Notes from the team building{" "}
          <span className="blog-hero-accent">smarter QA.</span>
        </h1>
        <p className="blog-hero-sub">
          Playbooks, product updates, and field reports from teams shipping
          AI-powered testing.
        </p>

        <form className="blog-hero-search" onSubmit={onSearchSubmit}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            placeholder="Search posts, tags, topics…"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          {searchInput && (
            <button
              type="button"
              className="blog-hero-search-clear"
              onClick={() => {
                setSearchInput("");
                if (q) updateUrl({ q: "" });
              }}
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </form>
      </header>

      {/* ── Filter bar ── */}
      <div className="blog-filter-bar">
        <div className="blog-filter-bar-inner">
          <div className="blog-cat-dropdown" ref={dropdownRef}>
            <button
              type="button"
              className={`blog-cat-trigger ${dropdownOpen ? "is-open" : ""}`}
              onClick={() => setDropdownOpen((v) => !v)}
              aria-haspopup="listbox"
              aria-expanded={dropdownOpen}
            >
              <span className="blog-cat-trigger-label">Category</span>
              <span className="blog-cat-trigger-value">{cat}</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="blog-cat-trigger-chev">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {dropdownOpen && (
              <div className="blog-cat-menu" role="listbox">
                {CATEGORIES.map((c) =>
                  c.kind === "single" ? (
                    <button
                      key={c.label}
                      type="button"
                      className={`blog-cat-option ${cat === c.label ? "is-active" : ""}`}
                      onClick={() => onPickCategory(c.label)}
                      role="option"
                      aria-selected={cat === c.label}
                    >
                      {c.label}
                      {cat === c.label && (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      )}
                    </button>
                  ) : (
                    <div key={c.label} className="blog-cat-group">
                      <div className="blog-cat-group-label">{c.label}</div>
                      {c.children.map((child) => (
                        <button
                          key={child}
                          type="button"
                          className={`blog-cat-option blog-cat-option-indent ${cat === child ? "is-active" : ""}`}
                          onClick={() => onPickCategory(child)}
                          role="option"
                          aria-selected={cat === child}
                        >
                          {child}
                          {cat === child && (
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          )}
                        </button>
                      ))}
                    </div>
                  )
                )}
              </div>
            )}
          </div>

          <span className="blog-filter-count">
            {loading
              ? "Loading…"
              : data && data.total > 0
              ? `Showing ${startIdx}–${endIdx} of ${data.total}`
              : "0 posts"}
          </span>
        </div>
      </div>

      {/* ── Posts ── */}
      <main className="blog-main-v2">
        <div ref={gridTopRef} />

        {loading ? (
          <SkeletonGrid showFeatured={page === 1 && cat === "Latest" && !q} />
        ) : !data || data.total === 0 ? (
          <div className="blog-empty">
            <h3>No posts found</h3>
            <p>
              {q
                ? `Nothing matches "${q}".`
                : "Try a different category."}
            </p>
            {(q || cat !== "Latest") && (
              <button
                type="button"
                className="blog-empty-reset"
                onClick={() => updateUrl({ q: "", cat: "Latest" })}
              >
                Reset filters
              </button>
            )}
          </div>
        ) : (
          <>
            {featured && (
              <section className="blog-featured-wrap">
                <span className="blog-featured-tag">Featured</span>
                <BlogCard post={featured} />
              </section>
            )}
            <div className="blog-grid-v2">
              {gridPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
            <Pagination
              page={data.page}
              totalPages={data.totalPages}
              onPageChange={onPageChange}
            />
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}

function SkeletonGrid({ showFeatured }: { showFeatured: boolean }) {
  return (
    <>
      {showFeatured && <div className="blog-skel blog-skel-featured" />}
      <div className="blog-grid-v2">
        {Array.from({ length: POSTS_PER_PAGE }).map((_, i) => (
          <div key={i} className="blog-skel blog-skel-card" />
        ))}
      </div>
    </>
  );
}

export default function BlogListingPage() {
  return (
    <Suspense fallback={<div className="blog-page" />}>
      <BlogListingInner />
    </Suspense>
  );
}
