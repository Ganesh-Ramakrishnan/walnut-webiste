import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const siteUrl = "https://www.walnutai.ai";

export const metadata: Metadata = {
  title: "Reports - Certifications, Research & Insights",
  description:
    "Download WalnutAI reports including certifications, research papers, and industry insights on AI-powered software delivery.",
  openGraph: {
    title: "Reports - Certifications, Research & Insights",
    description:
      "Download WalnutAI reports, certifications, and research papers.",
    url: `${siteUrl}/resources/reports`,
    siteName: "WalnutAI",
    type: "website",
  },
  alternates: { canonical: `${siteUrl}/resources/reports` },
};

type ReportCategory = "Reports" | "Certifications" | "Research Papers";

interface Report {
  title: string;
  description: string;
  category: ReportCategory;
  image: string;
  downloadUrl: string;
}

const reports: Report[] = [
  {
    title: "ISO/IEC 27001:2022 Certification",
    description:
      "Simplify3x Software has been certified compliant with the Information Security Management System (ISMS) standard ISO/IEC 27001:2022.",
    category: "Certifications",
    image: "/assets/reports/iso-27001-thumb.svg",
    downloadUrl: "/assets/reports/iso-27001.pdf",
  },
];

const categories: ReportCategory[] = ["Reports", "Certifications", "Research Papers"];

function ReportsPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="rpt-page">
        <section className="rpt-hero">
          <div className="rpt-hero-inner">
            <p className="rpt-hero-label">Resources</p>
            <h1 className="rpt-hero-title">WalnutAI Reports</h1>
            <div className="rpt-tabs">
              {categories.map((cat) => {
                const count = reports.filter((r) => r.category === cat).length;
                return (
                  <span
                    key={cat}
                    className={`rpt-tab ${count > 0 ? "rpt-tab--active" : ""}`}
                  >
                    {cat}
                  </span>
                );
              })}
            </div>
          </div>
        </section>

        <section className="rpt-grid-section">
          <div className="rpt-container">
            {categories.map((cat) => {
              const items = reports.filter((r) => r.category === cat);
              if (items.length === 0) return null;
              return (
                <div key={cat} className="rpt-cat-block">
                  <h2 className="rpt-cat-title">{cat}</h2>
                  <div className="rpt-grid">
                    {items.map((report) => (
                      <div key={report.title} className="rpt-card">
                        <div className="rpt-card-img">
                          <div className="rpt-card-icon">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#F17F0D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                              <polyline points="14 2 14 8 20 8" />
                              <line x1="16" y1="13" x2="8" y2="13" />
                              <line x1="16" y1="17" x2="8" y2="17" />
                              <polyline points="10 9 9 9 8 9" />
                            </svg>
                          </div>
                        </div>
                        <div className="rpt-card-body">
                          <h3 className="rpt-card-title">{report.title}</h3>
                          <p className="rpt-card-desc">{report.description}</p>
                          <Link
                            href={report.downloadUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rpt-card-btn"
                          >
                            Download
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default ReportsPage;
