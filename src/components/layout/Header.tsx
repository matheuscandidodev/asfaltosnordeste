"use client";
import { useEffect, useState } from "react";
import { useBreakpoint } from "@/hooks/useWindowWidth";
import { NAV_LINKS } from "@/data/content";

export default function Header() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const { isDesktop, scrolled: _ } = { ...useBreakpoint(), scrolled };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isDesktop) setMenuOpen(false);
  }, [isDesktop]);

  const barBg = scrolled ? "#fff" : "#111";

  return (
    <header
      className={scrolled ? "header-scrolled" : ""}
      style={{
        position: "fixed", top: 0, left: 0, width: "100%", zIndex: 50,
        transition: "background 0.4s, border-color 0.4s, backdrop-filter 0.4s",
        background:    scrolled ? "rgba(38,36,32,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom:   scrolled ? "1px solid rgba(212,160,23,0.15)" : "1px solid transparent",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>

          {/* Logo */}
          <a href="/" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
            <img src="/logo.png" alt="Asfaltos Nordeste" style={{ height: 34, width: "auto" }} />
          </a>

          {/* Desktop nav */}
          <nav className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: 36 }}>
            {NAV_LINKS.map((l) => (
              <a key={l.label} href={l.href} className="nav-link">{l.label}</a>
            ))}
            <a href="#contato" className="btn-primary" style={{ padding: "10px 24px", fontSize: "0.75rem" }}>
              Solicitar proposta
            </a>
          </nav>

          {/* Hamburger */}
          <button
            className="hamburger"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
          >
            {[
              menuOpen ? "rotate(45deg) translate(4.5px, 4.5px)"  : "none",
              "none",
              menuOpen ? "rotate(-45deg) translate(4.5px, -4.5px)" : "none",
            ].map((transform, i) => (
              <span key={i} style={{
                display: "block", width: 24, height: 1.5,
                background: barBg,
                transition: "all 0.3s",
                transform,
                opacity: i === 1 && menuOpen ? 0 : 1,
              }} />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile / tablet drawer */}
      {menuOpen && (
        <div style={{ background: "rgba(18,17,14,0.98)", borderTop: "1px solid rgba(212,160,23,0.15)", padding: "1.25rem 1.5rem 1.75rem" }}>
          {NAV_LINKS.map((l) => (
            <a
              key={l.label} href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{ display: "block", padding: "13px 0", color: "#c8c0b0", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", borderBottom: "1px solid rgba(255,255,255,0.05)", textDecoration: "none" }}
            >
              {l.label}
            </a>
          ))}
          <a href="#contato" onClick={() => setMenuOpen(false)} className="btn-primary"
            style={{ marginTop: 20, display: "block", textAlign: "center" }}
          >
            Solicitar proposta
          </a>
        </div>
      )}
    </header>
  );
}
