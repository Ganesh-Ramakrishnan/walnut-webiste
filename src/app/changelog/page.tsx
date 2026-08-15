import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChangelogClient, {
  type Year,
  type Month,
  type DateEntry,
  type EntryTag,
} from "@/components/ChangelogClient";
import { connectDB } from "@/lib/mongodb";
import Changelog, { type IChangelog } from "@/models/Changelog";

const siteUrl = "https://www.walnutai.ai";

export const dynamic = "force-dynamic";
export const revalidate = 60;

export const metadata: Metadata = {
  title: "Changelog - Product Updates & Release Notes",
  description:
    "Stay up to date with WalnutAI product updates, new features, and release notes. See what's new in the AI ecosystem for software delivery.",
  keywords: [
    "WalnutAI changelog",
    "WalnutAI release notes",
    "WalnutAI updates",
    "product updates",
    "new features",
    "AI software delivery updates",
  ],
  openGraph: {
    title: "Changelog - Product Updates & Release Notes",
    description:
      "Stay up to date with WalnutAI product updates, new features, and release notes.",
    url: `${siteUrl}/changelog`,
    siteName: "WalnutAI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Changelog - Product Updates & Release Notes",
    description:
      "Stay up to date with WalnutAI product updates, new features, and release notes.",
  },
  alternates: { canonical: `${siteUrl}/changelog` },
};

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

interface DbEntry {
  date: string;
  version?: string;
  releaseName?: string;
  summary?: string;
  tag: EntryTag;
  content: string;
  published: boolean;
}

function buildYears(rows: DbEntry[]): Year[] {
  const yearMap = new Map<string, Map<number, DateEntry[]>>();

  for (const row of rows) {
    if (!row.published) continue;
    const d = new Date(row.date + "T00:00:00");
    if (Number.isNaN(d.getTime())) continue;
    const yearLabel = String(d.getFullYear());
    const monthIdx = d.getMonth();
    const monthLabel = MONTHS[monthIdx];
    const day = d.getDate();
    const longLabel = `${monthLabel} ${day}, ${yearLabel}`;
    const shortLabel = `${monthLabel} ${day}`;

    if (!yearMap.has(yearLabel)) yearMap.set(yearLabel, new Map());
    const months = yearMap.get(yearLabel)!;
    if (!months.has(monthIdx)) months.set(monthIdx, []);
    months.get(monthIdx)!.push({
      id: row.date,
      date: row.date,
      dateLabel: longLabel,
      shortLabel,
      monthLabel,
      title: shortLabel,
      version: row.version || undefined,
      releaseName: row.releaseName || undefined,
      summary: row.summary || undefined,
      tag: row.tag,
      content: row.content || "",
    });
  }

  const years: Year[] = [];
  const sortedYears = [...yearMap.keys()].sort((a, b) => Number(b) - Number(a));
  for (const yLabel of sortedYears) {
    const months: Month[] = [];
    const sortedMonths = [...yearMap.get(yLabel)!.keys()].sort((a, b) => b - a);
    for (const mIdx of sortedMonths) {
      const entries = yearMap.get(yLabel)!.get(mIdx)!;
      entries.sort((a, b) => (a.date < b.date ? 1 : -1));
      months.push({
        id: `${yLabel}-${MONTHS[mIdx].toLowerCase()}`,
        label: MONTHS[mIdx],
        entries,
      });
    }
    years.push({ label: yLabel, months });
  }
  return years;
}

async function fetchChangelog(): Promise<Year[]> {
  try {
    await connectDB();
    const rows = (await Changelog.find({ published: true })
      .sort({ date: -1 })
      .lean()) as unknown as IChangelog[];
    return buildYears(
      rows.map((r) => ({
        date: r.date,
        version: r.version,
        releaseName: r.releaseName,
        summary: r.summary,
        tag: r.tag,
        content: r.content,
        published: r.published,
      }))
    );
  } catch (error) {
    console.error("Failed to load changelog:", error);
    return [];
  }
}

export default async function ChangelogPage() {
  const data = await fetchChangelog();

  return (
    <>
      <Navbar />
      <main id="main-content" className="cl2-page">
        <section className="cl2-hero">
          <p className="cl2-hero-label">Changelog</p>
          <h1 className="cl2-hero-title">
            Product Updates & <span style={{ color: "var(--accent)" }}>Release Notes</span>
          </h1>
          <p className="cl2-hero-sub">
            Follow along as we build the AI ecosystem for software delivery — new
            features, improvements, and platform updates, day by day.
          </p>
        </section>
        {data.length === 0 ? (
          <div style={{ padding: "60px 24px", textAlign: "center", color: "var(--text-secondary)" }}>
            No changelog entries yet. Check back soon.
          </div>
        ) : (
          <ChangelogClient data={data} />
        )}
      </main>
      <Footer />
    </>
  );
}
