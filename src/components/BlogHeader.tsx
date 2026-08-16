"use client";

import Link from "next/link";
import Logo from "@/components/Logo";

export default function BlogHeader() {
  return (
    <div style={{ borderBottom: "1px solid var(--border-inset)", padding: "20px 0" }}>
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link href="/">
          <Logo height={26} />
        </Link>
        <Link
          href="/"
          style={{ color: "var(--text-secondary)", fontSize: 14, textDecoration: "none" }}
        >
          &larr; Back to Home
        </Link>
      </div>
    </div>
  );
}
