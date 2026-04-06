"use client";

import { NAV_LINKS } from "@/data/content";

const IconInstagram = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);

const IconLinkedIn = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="4" ry="4" />
    <line x1="8" y1="11" x2="8" y2="17" />
    <line x1="8" y1="7" x2="8" y2="8" />
    <path d="M12 17v-4a2 2 0 0 1 4 0v4" />
    <line x1="12" y1="11" x2="12" y2="13" />
  </svg>
);

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/asfaltosnordeste/",
    icon: <IconInstagram />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/asfaltos-nordeste/",
    icon: <IconLinkedIn />,
  },
];

export default function Footer() {
  return (
    <footer style={{ background: "#2a2825", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "40px 1.5rem" }}>
      <div
        className="footer-inner"
        style={{ maxWidth: 1280, margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 24 }}
      >
        <img src="/logo.png" alt="Asfaltos Nordeste" style={{ height: 32, width: "auto", opacity: 0.85 }} />

        <nav className="footer-nav" style={{ display: "flex", gap: 28 }}>
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {/* Ícones sociais */}
          <div style={{ display: "flex", gap: 12 }}>
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                style={{ color: "rgba(255,255,255,0.3)", transition: "color 0.2s", display: "flex", alignItems: "center" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#d4a017")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* Divider */}
          <div style={{ width: 1, height: 16, background: "rgba(255,255,255,0.1)" }} />

          <p style={{ margin: 0, fontSize: "0.75rem", color: "rgba(255,255,255,0.2)", letterSpacing: "0.05em" }}>
            © {new Date().getFullYear()} Asfaltos Nordeste
          </p>
        </div>
      </div>
    </footer>
  );
}