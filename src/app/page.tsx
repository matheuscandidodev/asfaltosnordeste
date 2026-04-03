"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const NAV_LINKS = [
  { label: "Início", href: "#top" },
  { label: "Sobre nós", href: "/sobre" },
  { label: "Produtos", href: "/produtos" },
  { label: "Trabalhe conosco", href: "/trabalhe" },
];

const DIFERENCIAIS = [
  {
    num: "01",
    title: "Assistência técnica",
    desc: "Projetos de mistura sob medida e suporte especializado em todas as fases da obra.",
  },
  {
    num: "02",
    title: "Laboratório próprio",
    desc: "Ensaios internos que asseguram rastreabilidade e conformidade em cada lote produzido.",
  },
  {
    num: "03",
    title: "Logística própria",
    desc: "Frota dedicada com rotas planejadas para entregas pontuais no Norte e Nordeste.",
  },
  {
    num: "04",
    title: "Cobertura regional",
    desc: "Base em Maracanaú–CE, com capacidade de atendimento em todo o arco Norte-Nordeste.",
  },
];

function useWindowWidth() {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const update = () => setWidth(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return width;
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const width = useWindowWidth();

  const isMobile = width > 0 && width <= 640;
  const isDesktop = width > 1024;

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  // Disable parallax on mobile for performance
  const videoY = useTransform(scrollYProgress, [0, 1], isMobile ? ["0%", "0%"] : ["0%", "25%"]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isDesktop) setMenuOpen(false);
  }, [isDesktop]);

  return (
    <main id="top" className="bg-[#0c0b08] text-white" style={{ fontFamily: "'Barlow', sans-serif" }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600&family=Barlow+Condensed:ital,wght@0,700;0,800;1,700&display=swap');

        *, *::before, *::after { box-sizing: border-box; }
        ::selection { background: #d4a017; color: #0c0b08; }
        html { scroll-behavior: smooth; }
        img, video { max-width: 100%; }

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
        .nav-link:hover { color: #000; }
        .nav-link:hover::after { width: 100%; }
        .header-scrolled .nav-link { color: #e8e4dc; }
        .header-scrolled .nav-link:hover { color: #fff; }

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
        .btn-primary:hover { background: #e6b420; transform: translateY(-1px); }
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

        .service-card {
          border: 1px solid rgba(212,160,23,0.15);
          transition: border-color 0.3s, transform 0.3s;
        }
        .service-card:hover {
          border-color: rgba(212,160,23,0.5);
          transform: translateY(-4px);
        }

        .diff-item { border-top: 1px solid rgba(255,255,255,0.08); transition: border-color 0.3s; }
        .diff-item:hover { border-top-color: rgba(212,160,23,0.4); }
        .diff-item:hover .diff-num { color: #d4a017; }

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
        .form-input:focus { border-color: #d4a017; background: rgba(212,160,23,0.05); }

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

        .ticker { white-space: nowrap; animation: ticker 22s linear infinite; }
        @keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }

        /* hamburger hidden on desktop */
        .hamburger { display: none; background: none; border: none; cursor: pointer; padding: 6px; flex-direction: column; gap: 5px; }

        /* ── TABLET (641–1024px) ── */
        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .hamburger   { display: flex !important; }
          .services-grid  { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .contact-grid   { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .form-sticky    { position: static !important; }
          .diff-row       { grid-template-columns: 56px 1fr !important; }
          .diff-desc      { grid-column: 2 !important; }
          .stats-grid     { grid-template-columns: repeat(2, 1fr) !important; }
          .stat-r1 { border-right: 1px solid rgba(255,255,255,0.06) !important; }
          .stat-r2 { border-right: none !important; border-top: 1px solid rgba(255,255,255,0.06) !important; }
          .stat-r3 { border-right: 1px solid rgba(255,255,255,0.06) !important; border-top: 1px solid rgba(255,255,255,0.06) !important; }
          .stat-r4 { border-right: none !important; border-top: 1px solid rgba(255,255,255,0.06) !important; }
          .diferenciais-header { flex-direction: column !important; align-items: flex-start !important; }
        }

        /* ── MOBILE (≤640px) ── */
        @media (max-width: 640px) {
          .section-pad  { padding: 60px 1.25rem !important; }
          .hero-content { padding: 0 1.25rem 3.5rem !important; }

          .hero-title   { font-size: clamp(2.3rem, 9.5vw, 3.2rem) !important; line-height: 1 !important; }
          .hero-btns    { flex-direction: column !important; }
          .hero-btns a  { width: 100% !important; text-align: center !important; box-sizing: border-box !important; }

          .scroll-indicator { display: none !important; }

          .stats-grid   { grid-template-columns: repeat(2, 1fr) !important; }
          .stat-pad     { padding: 1.75rem 1rem !important; }
          .stat-r1 { border-right: 1px solid rgba(255,255,255,0.06) !important; }
          .stat-r2 { border-right: none !important; border-top: 1px solid rgba(255,255,255,0.06) !important; }
          .stat-r3 { border-right: 1px solid rgba(255,255,255,0.06) !important; border-top: 1px solid rgba(255,255,255,0.06) !important; }
          .stat-r4 { border-right: none !important; border-top: 1px solid rgba(255,255,255,0.06) !important; }

          .diff-row     { grid-template-columns: 44px 1fr !important; gap: 1rem !important; padding: 1.5rem 0 !important; }
          .diff-desc    { grid-column: 1 / -1 !important; padding-left: 44px !important; margin-top: -0.5rem !important; }

          .diferenciais-header { flex-direction: column !important; align-items: flex-start !important; gap: 16px !important; }
          .diferenciais-cta    { width: 100% !important; text-align: center !important; }

          .contact-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .form-sticky  { position: static !important; }
          .form-pad     { padding: 1.5rem !important; }

          .footer-inner { flex-direction: column !important; align-items: center !important; text-align: center !important; gap: 20px !important; }
          .footer-nav   { flex-wrap: wrap !important; justify-content: center !important; gap: 14px 20px !important; }
        }
      `}</style>

      {/* ── HEADER ── */}
      <header
        className={scrolled ? "header-scrolled" : ""}
        style={{
          position: "fixed", top: 0, left: 0, width: "100%", zIndex: 50,
          transition: "background 0.4s, border-color 0.4s, backdrop-filter 0.4s",
          background: scrolled ? "rgba(38,36,32,0.96)" : "transparent",
          backdropFilter: scrolled ? "blur(14px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(212,160,23,0.15)" : "1px solid transparent",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>

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
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Abrir menu"
              aria-expanded={menuOpen}
            >
              {[
                menuOpen ? "rotate(45deg) translate(4.5px, 4.5px)" : "none",
                "none",
                menuOpen ? "rotate(-45deg) translate(4.5px, -4.5px)" : "none",
              ].map((transform, i) => (
                <span key={i} style={{
                  display: "block", width: 24, height: 1.5,
                  background: scrolled ? "#fff" : "#111",
                  transition: "all 0.3s",
                  transform,
                  opacity: i === 1 && menuOpen ? 0 : 1,
                }} />
              ))}
            </button>
          </div>
        </div>

        {/* Drawer menu */}
        {menuOpen && (
          <div style={{ background: "rgba(18,17,14,0.98)", borderTop: "1px solid rgba(212,160,23,0.15)", padding: "1.25rem 1.5rem 1.75rem" }}>
            {NAV_LINKS.map((l) => (
              <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)}
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

      {/* ── HERO ── */}
      <section ref={heroRef} id="inicio" style={{ position: "relative", minHeight: "100svh", display: "flex", alignItems: "flex-end", overflow: "hidden" }}>

        <motion.div style={{ position: "absolute", inset: 0, y: videoY }}>
          <video autoPlay muted playsInline
            style={{ width: "100%", height: isMobile ? "100%" : "115%", objectFit: "cover", display: "block" }}
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>
        </motion.div>

        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(12,11,8,1) 0%, rgba(12,11,8,0.65) 40%, rgba(12,11,8,0.2) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(12,11,8,0.75) 0%, transparent 70%)" }} />

        <div className="hero-content" style={{ position: "relative", zIndex: 10, maxWidth: 1280, margin: "0 auto", padding: "0 2rem 5rem", width: "100%" }}>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}>
            <p className="section-label" style={{ marginBottom: 20 }}>Qualidade que sustenta o progresso</p>

            <h1 className="hero-title" style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(3.2rem, 7.5vw, 6.5rem)",
              lineHeight: 0.95,
              letterSpacing: "-0.01em",
              textTransform: "uppercase",
              maxWidth: 860,
              margin: "0 0 24px",
            }}>
              Soluções asfálticas{" "}
              <span style={{ fontStyle: "italic", color: "#d4a017" }}>de alto desempenho</span>{" "}
              para obras que exigem resultado.
            </h1>

            <p style={{ fontSize: "1rem", color: "#a09888", lineHeight: 1.7, maxWidth: 540, marginBottom: 36, fontWeight: 400 }}>
              Desde 1997, atendemos grandes construtoras e órgãos públicos nas regiões Norte e Nordeste com tecnologia, controle rigoroso e logística própria.
            </p>

            <div className="hero-btns" style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center" }}>
              <a href="/produtos" className="btn-primary">Conheça nossos produtos</a>
              <a href="#contato" className="btn-outline">Solicitar proposta</a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="scroll-indicator"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          style={{ position: "absolute", bottom: 28, right: 40, display: "flex", flexDirection: "column", alignItems: "center", gap: 6, zIndex: 10 }}
        >
          <span style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", writingMode: "vertical-rl" }}>Scroll</span>
          <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom, rgba(212,160,23,0.6), transparent)" }} />
        </motion.div>
      </section>

      {/* ── TICKER ── */}
      <div style={{ background: "#d4a017", padding: "12px 0", overflow: "hidden" }}>
        <div className="ticker" style={{ display: "inline-flex" }}>
          {Array(4).fill(null).map((_, i) => (
            <span key={i} style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#0c0b08", padding: "0 3rem" }}>
              Fabricação · Transporte · Controle de qualidade · Desde 1997 · Norte e Nordeste · Logística própria · Laboratório próprio ·
            </span>
          ))}
        </div>
      </div>

      {/* ── NÚMEROS ── */}
      <section className="section-pad" style={{ padding: "80px 2rem", background: "#0f0e0b" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 2 }}>
            {[
              { num: "+27", label: "Anos de operação" },
              { num: "2",   label: "Regiões atendidas" },
              { num: "100%", label: "Logística própria" },
              { num: "24/7", label: "Controle de qualidade" },
            ].map((s, i) => {
              const borderClass = ["", "stat-r1", "stat-r2", "stat-r3", "stat-r4"][i + 1];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={`stat-pad ${borderClass}`}
                  style={{ padding: "3rem 2rem", borderRight: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none", textAlign: "center" }}
                >
                  <p className="stat-number">{s.num}</p>
                  <p style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginTop: 8 }}>{s.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SERVIÇOS ── */}
      <section id="servicos" className="section-pad" style={{ padding: "100px 2rem", background: "#0c0b08" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}>

            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <p className="section-label" style={{ marginBottom: 16 }}>Nossos serviços</p>
              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1, textTransform: "uppercase", letterSpacing: "-0.01em", marginBottom: 24 }}>
                Da matéria-prima<br />
                <span style={{ color: "#d4a017", fontStyle: "italic" }}>à entrega final</span>
              </h2>
              <p style={{ color: "#7a7265", lineHeight: 1.75, fontSize: "0.95rem", maxWidth: 380 }}>
                Controlamos toda a cadeia operacional — fabricação, ensaios laboratoriais e logística — para garantir conformidade em cada etapa do fornecimento.
              </p>
            </motion.div>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { title: "Fabricação", text: "Produção com estrutura industrial, tecnologia de controle de processo e rastreabilidade completa por lote." },
                { title: "Transporte", text: "Frota própria com operação planejada para entregas dentro do prazo, sem dependência de terceiros." },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.15 }} viewport={{ once: true }}
                  className="service-card"
                  style={{ background: "rgba(255,255,255,0.02)", borderRadius: 4, padding: "2rem" }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
                    <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.4rem", textTransform: "uppercase", letterSpacing: "0.03em" }}>{s.title}</h3>
                    <span style={{ width: 28, height: 28, border: "1px solid rgba(212,160,23,0.4)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1 9L9 1M9 1H2M9 1V8" stroke="#d4a017" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                  </div>
                  <p style={{ color: "#7a7265", lineHeight: 1.7, fontSize: "0.9rem" }}>{s.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── DIFERENCIAIS ── */}
      <section className="section-pad" style={{ padding: "100px 2rem", background: "#0f0e0b" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>

          <div className="diferenciais-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 64, flexWrap: "wrap", gap: 24 }}>
            <div>
              <p className="section-label" style={{ marginBottom: 12 }}>Por que escolher a Asfaltos Nordeste</p>
              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3.2rem)", textTransform: "uppercase", lineHeight: 1, maxWidth: 520 }}>
                Estrutura completa para<br />
                <span style={{ color: "#d4a017", fontStyle: "italic" }}>sustentar grandes obras</span>
              </h2>
            </div>
            <a href="#contato" className="btn-outline diferenciais-cta" style={{ textDecoration: "none" }}>
              Fale com um especialista
            </a>
          </div>

          <div>
            {DIFERENCIAIS.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }} viewport={{ once: true }}
                className="diff-item diff-row"
                style={{ display: "grid", gridTemplateColumns: "80px 1fr 1fr", gap: "2rem", padding: "2rem 0", alignItems: "start" }}
              >
                <span className="diff-num" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1rem", letterSpacing: "0.1em", color: "rgba(255,255,255,0.2)", transition: "color 0.3s" }}>{d.num}</span>
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.2rem", textTransform: "uppercase", letterSpacing: "0.04em", paddingTop: 2 }}>{d.title}</h3>
                <p className="diff-desc" style={{ color: "#7a7265", lineHeight: 1.7, fontSize: "0.9rem" }}>{d.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTATO ── */}
      <section id="contato" className="section-pad" style={{ padding: "100px 2rem", background: "#0c0b08" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}>

            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <p className="section-label" style={{ marginBottom: 16 }}>Contato</p>
              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3.2rem)", textTransform: "uppercase", lineHeight: 1, marginBottom: 24 }}>
                Vamos conversar sobre<br />
                <span style={{ color: "#d4a017", fontStyle: "italic" }}>a sua demanda</span>
              </h2>
              <p style={{ color: "#7a7265", lineHeight: 1.75, fontSize: "0.9rem", marginBottom: 40 }}>
                Atendimento especializado para construtoras, órgãos públicos e projetos que demandam precisão técnica e logística eficiente.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 40 }}>
                {[
                  { label: "Telefone", value: "(85) 3311-2844" },
                  { label: "WhatsApp", value: "(85) 98174-9558" },
                  { label: "E-mail", value: "comercial@asfaltosnordeste.com.br" },
                ].map((c) => (
                  <div key={c.label} style={{ display: "flex", gap: 16, alignItems: "baseline", flexWrap: "wrap" }}>
                    <span style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", minWidth: 80 }}>{c.label}</span>
                    <span style={{ color: "#d4a017", fontSize: "0.9rem", wordBreak: "break-all" }}>{c.value}</span>
                  </div>
                ))}
              </div>

              <div style={{ borderRadius: 4, overflow: "hidden", border: "1px solid rgba(212,160,23,0.12)" }}>
                <iframe
                  src="https://www.google.com/maps?q=Av.+Wilson+Camurça,+1998,+Maracanaú&output=embed"
                  width="100%" height="320"
                  style={{ border: 0, display: "block", filter: "grayscale(80%) invert(10%) contrast(90%)" }}
                  loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>

            <motion.div
              className="form-sticky"
              initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }} viewport={{ once: true }}
              style={{ position: "sticky", top: 90 }}
            >
              <div className="form-pad" style={{ border: "1px solid rgba(212,160,23,0.12)", borderRadius: 4, padding: "2.5rem" }}>
                <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.1rem", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 28, borderBottom: "1px solid rgba(255,255,255,0.06)", paddingBottom: 20 }}>
                  Solicitar proposta
                </p>
                <form style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  <input type="text"  placeholder="Nome completo"              className="form-input" />
                  <input type="email" placeholder="E-mail corporativo"         className="form-input" />
                  <input type="text"  placeholder="Empresa"                    className="form-input" />
                  <input type="tel"   placeholder="Telefone"                   className="form-input" />
                  <textarea placeholder="Descreva brevemente sua demanda" rows={4} className="form-input" style={{ resize: "vertical" }} />
                  <button type="submit" className="btn-primary" style={{ marginTop: 8, width: "100%", textAlign: "center" }}>
                    Enviar solicitação
                  </button>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#2a2825", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "40px 1.5rem" }}>
        <div className="footer-inner" style={{ maxWidth: 1280, margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 24 }}>
          <img src="/logo.png" alt="Asfaltos Nordeste" style={{ height: 32, width: "auto", opacity: 0.85 }} />

          <nav className="footer-nav" style={{ display: "flex", gap: 28 }}>
            {NAV_LINKS.map((l) => (
              <a key={l.label} href={l.href}
                style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.2)", letterSpacing: "0.05em" }}>
            © {new Date().getFullYear()} Asfaltos Nordeste
          </p>
        </div>
      </footer>

    </main>
  );
}