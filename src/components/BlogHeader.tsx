"use client";

import Link from "next/link";

export default function BlogHeader() {
  return (
    <div style={{ borderBottom: "1px solid #1e1e1e", padding: "20px 0" }}>
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
          <img
            src="/assets/logo/Walnut-White.png"
            alt="WalnutAI"
            style={{ height: 32 }}
          />
        </Link>
        <Link
          href="/"
          style={{ color: "#9ca3af", fontSize: 14, textDecoration: "none" }}
        >
          &larr; Back to Home
        </Link>
      </div>
    </div>
  );
}
