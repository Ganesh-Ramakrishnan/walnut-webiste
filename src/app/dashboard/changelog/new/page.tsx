"use client";

import ChangelogForm from "@/components/ChangelogForm";

export default function NewChangelogEntry() {
  const today = new Date().toISOString().split("T")[0];

  return (
    <div>
      <div className="d-page-head">
        <div>
          <h1 className="d-page-title">New Changelog Entry</h1>
          <p className="d-page-sub">Add a release note that will appear on the public changelog.</p>
        </div>
      </div>

      <div className="d-card" style={{ padding: 28 }}>
        <ChangelogForm
          mode="create"
          initial={{
            date: today,
            version: "",
            releaseName: "",
            summary: "",
            tag: "NEW",
            content: "",
            published: true,
          }}
        />
      </div>
    </div>
  );
}
