"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    label: "Blog Posts",
    href: "/dashboard/blogs",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [authed, setAuthed] = useState<boolean | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const isLoginPage = pathname === "/dashboard/login";

  useEffect(() => {
    if (isLoginPage) {
      setAuthed(true);
      return;
    }

    fetch("/api/auth/check")
      .then((res) => {
        if (res.ok) {
          setAuthed(true);
        } else {
          router.push("/dashboard/login");
        }
      })
      .catch(() => {
        router.push("/dashboard/login");
      });
  }, [isLoginPage, router]);

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/dashboard/login");
  };

  if (isLoginPage) return <>{children}</>;

  if (authed === null) {
    return (
      <div className="d-loading">
        <div className="d-loading-spinner" />
      </div>
    );
  }

  return (
    <div className="d-shell">
      {sidebarOpen && <div className="d-overlay" onClick={() => setSidebarOpen(false)} />}

      <aside className={`d-sidebar ${sidebarOpen ? "d-sidebar--open" : ""}`}>
        {/* Logo */}
        <div className="d-sidebar-head">
          <div className="d-logo">
            <span className="d-logo-icon">W</span>
            <span className="d-logo-text">WalnutAI</span>
          </div>
          <button className="d-sidebar-close" onClick={() => setSidebarOpen(false)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>

        {/* Nav label */}
        <div className="d-sidebar-label">Menu</div>

        {/* Nav */}
        <nav className="d-sidebar-nav">
          {navItems.map((item) => {
            const active = pathname === item.href || (item.href !== "/dashboard" && pathname.startsWith(item.href));
            return (
              <a
                key={item.href}
                href={item.href}
                className={`d-nav-link ${active ? "d-nav-link--active" : ""}`}
                onClick={() => setSidebarOpen(false)}
              >
                {item.icon}
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Bottom */}
        <div className="d-sidebar-bottom">
          <a href="/" className="d-nav-link" target="_blank">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            View Website
          </a>
          <button onClick={handleLogout} className="d-nav-link d-logout">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" />
            </svg>
            Logout
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="d-main">
        <header className="d-topbar">
          <button className="d-hamburger" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
          <div className="d-topbar-left">
            <h2 className="d-topbar-title">
              {navItems.find((n) => pathname === n.href || (n.href !== "/dashboard" && pathname.startsWith(n.href)))?.label || "Dashboard"}
            </h2>
          </div>
        </header>

        <div className="d-content">
          {children}
        </div>
      </div>
    </div>
  );
}
