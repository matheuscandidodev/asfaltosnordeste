import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Asfaltos Nordeste",
  description: "Soluções em pavimentação asfáltica para obras que exigem resultado.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600&family=Barlow+Condensed:ital,wght@0,700;0,800;1,700&display=swap"
          rel="stylesheet"/>
          <link rel="icon" href="/logoicon.png" />
        <style>{`
          *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
          ::selection { background: #d4a017; color: #0c0b08; }
          html { scroll-behavior: smooth; }
          body { background: #0c0b08; color: #fff; font-family: 'Barlow', sans-serif; }
          img, video { max-width: 100%; }

          /* ── NAV LINKS ── */
          .nav-link {
            position: relative;
            font-size: 0.8rem;
            font-weight: 600;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            color: #111;
            text-decoration: none;
            transition: color 0.3s;
          }
          .nav-link::after {
            content: '';
            position: absolute;
            bottom: -3px; left: 0;
            width: 0; height: 1px;
            background: #d4a017;
            transition: width 0.25s ease;
          }
          .nav-link:hover            { color: #000; }
          .nav-link:hover::after     { width: 100%; }
          .header-scrolled .nav-link { color: #e8e4dc; }
          .header-scrolled .nav-link:hover { color: #fff; }

          /* ── BUTTONS ── */
          .btn-primary {
            background: #d4a017;
            color: #0c0b08;
            font-family: 'Barlow', sans-serif;
            font-weight: 700;
            font-size: 0.8rem;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            padding: 14px 32px;
            border: none;
            cursor: pointer;
            text-decoration: none;
            display: inline-block;
            transition: background 0.2s, transform 0.15s;
            white-space: nowrap;
          }
          .btn-primary:hover  { background: #e6b420; transform: translateY(-1px); }
          .btn-primary:active { transform: translateY(0); }

          .btn-outline {
            background: transparent;
            color: #d4a017;
            font-family: 'Barlow', sans-serif;
            font-weight: 700;
            font-size: 0.8rem;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            padding: 13px 32px;
            border: 1px solid #d4a017;
            cursor: pointer;
            transition: background 0.2s, color 0.2s;
            text-decoration: none;
            display: inline-block;
            white-space: nowrap;
          }
          .btn-outline:hover { background: #d4a017; color: #0c0b08; }

          /* ── CARDS ── */
          .service-card {
            border: 1px solid rgba(212,160,23,0.15);
            transition: border-color 0.3s, transform 0.3s;
          }
          .service-card:hover {
            border-color: rgba(212,160,23,0.5);
            transform: translateY(-4px);
          }

          /* ── DIFERENCIAIS ── */
          .diff-item { border-top: 1px solid rgba(255,255,255,0.08); transition: border-color 0.3s; }
          .diff-item:hover            { border-top-color: rgba(212,160,23,0.4); }
          .diff-item:hover .diff-num  { color: #d4a017; }

          /* ── FORM ── */
          .form-input {
            width: 100%;
            background: rgba(255,255,255,0.04);
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 4px;
            padding: 14px 16px;
            color: #fff;
            font-family: 'Barlow', sans-serif;
            font-size: 0.95rem;
            outline: none;
            transition: border-color 0.2s, background 0.2s;
          }
          .form-input::placeholder { color: rgba(255,255,255,0.3); }
          .form-input:focus        { border-color: #d4a017; background: rgba(212,160,23,0.05); }

          /* ── TYPOGRAPHY ── */
          .stat-number {
            font-family: 'Barlow Condensed', sans-serif;
            font-weight: 800;
            font-size: clamp(2.5rem, 6vw, 5rem);
            line-height: 1;
            color: #d4a017;
            letter-spacing: -0.02em;
          }
          .section-label {
            font-size: 0.7rem;
            font-weight: 600;
            letter-spacing: 0.2em;
            text-transform: uppercase;
            color: #d4a017;
          }

          /* ── TICKER ── */
          .ticker { white-space: nowrap; animation: ticker 22s linear infinite; }
          @keyframes ticker {
            from { transform: translateX(0); }
            to   { transform: translateX(-50%); }
          }

          /* ── HAMBURGER ── */
          .hamburger { display: none; background: none; border: none; cursor: pointer; padding: 6px; flex-direction: column; gap: 5px; }

          /* ══ TABLET 641–1024px ══ */
          @media (max-width: 1024px) {
            .desktop-nav        { display: none !important; }
            .hamburger          { display: flex !important; }
            .services-grid      { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
            .contact-grid       { grid-template-columns: 1fr !important; gap: 3rem !important; }
            .form-sticky        { position: static !important; }
            .diff-row           { grid-template-columns: 56px 1fr !important; }
            .diff-desc          { grid-column: 2 !important; }
            .stats-grid         { grid-template-columns: repeat(2, 1fr) !important; }
            .stat-r1 { border-right: 1px solid rgba(255,255,255,0.06) !important; }
            .stat-r2 { border-right: none !important; border-top: 1px solid rgba(255,255,255,0.06) !important; }
            .stat-r3 { border-right: 1px solid rgba(255,255,255,0.06) !important; border-top: 1px solid rgba(255,255,255,0.06) !important; }
            .stat-r4 { border-right: none !important; border-top: 1px solid rgba(255,255,255,0.06) !important; }
            .diferenciais-header { flex-direction: column !important; align-items: flex-start !important; }
          }

          /* ══ MOBILE ≤640px ══ */
          @media (max-width: 640px) {
            .section-pad  { padding: 60px 1.25rem !important; }
            .hero-content { padding: 0 1.25rem 3.5rem !important; }

            .hero-title   { font-size: clamp(2.3rem, 9.5vw, 3.2rem) !important; line-height: 1 !important; }
            .hero-btns    { flex-direction: column !important; }
            .hero-btns a  { width: 100% !important; text-align: center !important; box-sizing: border-box !important; }

            .scroll-indicator { display: none !important; }

            .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
            .stat-pad   { padding: 1.75rem 1rem !important; }
            .stat-r1 { border-right: 1px solid rgba(255,255,255,0.06) !important; }
            .stat-r2 { border-right: none !important; border-top: 1px solid rgba(255,255,255,0.06) !important; }
            .stat-r3 { border-right: 1px solid rgba(255,255,255,0.06) !important; border-top: 1px solid rgba(255,255,255,0.06) !important; }
            .stat-r4 { border-right: none !important; border-top: 1px solid rgba(255,255,255,0.06) !important; }

            .diff-row  { grid-template-columns: 44px 1fr !important; gap: 1rem !important; padding: 1.5rem 0 !important; }
            .diff-desc { grid-column: 1 / -1 !important; padding-left: 44px !important; margin-top: -0.5rem !important; }

            .diferenciais-header { flex-direction: column !important; align-items: flex-start !important; gap: 16px !important; }
            .diferenciais-cta    { width: 100% !important; text-align: center !important; }

            .contact-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
            .form-sticky  { position: static !important; }
            .form-pad     { padding: 1.5rem !important; }

            .footer-inner { flex-direction: column !important; align-items: center !important; text-align: center !important; gap: 20px !important; }
            .footer-nav   { flex-wrap: wrap !important; justify-content: center !important; gap: 14px 20px !important; }
          }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}