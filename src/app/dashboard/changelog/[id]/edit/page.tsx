"use client";

import { useEffect, useState, use } from "react";
import ChangelogForm, { type ChangelogFormValue } from "@/components/ChangelogForm";

interface PageProps {
  params: Promise<{ id: string }>;
}

interface ApiEntry {
  date: string;
  version?: string;
  releaseName?: string;
  summary?: string;
  tag: ChangelogFormValue["tag"];
  content?: string;
  published: boolean;
}

export default function EditChangelogEntry({ params }: PageProps) {
  const { id } = use(params);
  const [initial, setInitial] = useState<ChangelogFormValue | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`/api/changelog/${id}`)
      .then(async (res) => {
        if (!res.ok) {
          const data = await res.json().catch(() => ({}));
          throw new Error(data.error || "Failed to load entry");
        }
        return res.json();
      })
      .then((data: ApiEntry) => {
        setInitial({
          date: data.date,
          version: data.version ?? "",
          releaseName: data.releaseName ?? "",
          summary: data.summary ?? "",
          tag: data.tag,
          content: data.content ?? "",
          published: data.published,
        });
      })
      .catch((e: Error) => setError(e.message));
  }, [id]);

  return (
    <div>
      <div className="d-page-head">
        <div>
          <h1 className="d-page-title">Edit Changelog Entry</h1>
          <p className="d-page-sub">Update the release note for {id}.</p>
        </div>
      </div>

      <div className="d-card" style={{ padding: 28 }}>
        {error ? (
          <div className="d-empty">{error}</div>
        ) : !initial ? (
          <div className="d-empty">Loading...</div>
        ) : (
          <ChangelogForm mode="edit" initial={initial} originalDate={id} />
        )}
      </div>
    </div>
  );
}
