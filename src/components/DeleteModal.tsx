"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";

interface DeleteModalProps {
  title: string;
  onConfirm: () => void;
  onCancel: () => void;
  deleting?: boolean;
}

export default function DeleteModal({ title, onConfirm, onCancel, deleting }: DeleteModalProps) {
  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return createPortal(
    <div
      onClick={() => !deleting && onCancel()}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0, 0, 0, 0.75)",
        backdropFilter: "blur(4px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 99999,
        padding: 16,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "var(--surface-2d)",
          border: "1px solid var(--border-raised)",
          borderRadius: 16,
          padding: 32,
          maxWidth: 420,
          width: "100%",
          textAlign: "center",
          boxShadow: "0 20px 60px var(--shadow-strong)",
        }}
      >
        {/* Icon */}
        <div
          style={{
            width: 56,
            height: 56,
            background: "rgba(239, 68, 68, 0.1)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 16px",
          }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 6h18" />
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
            <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            <line x1="10" y1="11" x2="10" y2="17" />
            <line x1="14" y1="11" x2="14" y2="17" />
          </svg>
        </div>

        {/* Title */}
        <h3 style={{ color: "var(--text-primary)", fontSize: 18, fontWeight: 700, margin: "0 0 8px" }}>
          Delete Blog Post
        </h3>

        {/* Message */}
        <p style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.6, margin: "0 0 24px" }}>
          Are you sure you want to delete{" "}
          <strong style={{ color: "var(--text-secondary-strong)" }}>&quot;{title}&quot;</strong>?
          <br />
          This action cannot be undone.
        </p>

        {/* Buttons */}
        <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
          <button
            onClick={onCancel}
            disabled={deleting}
            style={{
              padding: "10px 24px",
              fontSize: 14,
              fontWeight: 600,
              borderRadius: 8,
              border: "1px solid var(--border-raised)",
              background: "transparent",
              color: "var(--text-secondary)",
              cursor: deleting ? "not-allowed" : "pointer",
              minWidth: 100,
            }}
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            disabled={deleting}
            style={{
              padding: "10px 24px",
              fontSize: 14,
              fontWeight: 600,
              borderRadius: 8,
              border: "1px solid rgba(239, 68, 68, 0.3)",
              background: "rgba(239, 68, 68, 0.15)",
              color: "var(--status-danger-soft)",
              cursor: deleting ? "not-allowed" : "pointer",
              opacity: deleting ? 0.6 : 1,
              minWidth: 120,
            }}
          >
            {deleting ? "Deleting..." : "Delete Post"}
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
