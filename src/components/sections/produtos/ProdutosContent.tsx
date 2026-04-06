"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PRODUTOS } from "@/data/content";

const ArrowIcon = () => (
  <span style={{ width: 24, height: 24, border: "1px solid rgba(212,160,23,0.4)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
    <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
      <path d="M1 9L9 1M9 1H2M9 1V8" stroke="#d4a017" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

export default function ProdutosContent() {
  const [activeTab, setActiveTab] = useState(0);
  const cat = PRODUTOS.categorias[activeTab];

  return (
    <>
      {/* ── HERO ── */}
      <section style={{ position: "relative", minHeight: "60vh", display: "flex", alignItems: "flex-end", overflow: "hidden", background: "#0c0b08" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <img src="/produtos-bg.png" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.65 }} />
        </div>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(12,11,8,1) 0%, rgba(12,11,8,0.5) 50%, rgba(12,11,8,0.25) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(12,11,8,0.85) 0%, transparent 65%)" }} />

        <div style={{ position: "relative", zIndex: 10, maxWidth: 1280, margin: "0 auto", padding: "120px 2rem 5rem", width: "100%" }}>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}>
            <p className="section-label" style={{ marginBottom: 20 }}>{PRODUTOS.hero.label}</p>
            <h1 style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
              lineHeight: 0.95,
              letterSpacing: "-0.01em",
              textTransform: "uppercase",
              maxWidth: 680,
              margin: "0 0 24px",
            }}>
              {PRODUTOS.hero.title}{" "}
              <span style={{ fontStyle: "italic", color: "#d4a017" }}>{PRODUTOS.hero.titleEM}</span>
            </h1>
            <p style={{ fontSize: "1rem", color: "#a09888", lineHeight: 1.75, maxWidth: 500, fontWeight: 400 }}>
              {PRODUTOS.hero.body}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── TABS + CATÁLOGO ── */}
      <section className="section-pad" style={{ padding: "100px 2rem", background: "#0f0e0b" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>

          {/* Tab buttons */}
          <div style={{ display: "flex", gap: 0, marginBottom: 64, borderBottom: "1px solid rgba(255,255,255,0.08)", overflowX: "auto" }}>
            {PRODUTOS.categorias.map((c, i) => (
              <button
                key={c.id}
                onClick={() => setActiveTab(i)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "14px 28px",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: activeTab === i ? "#d4a017" : "rgba(255,255,255,0.3)",
                  borderBottom: activeTab === i ? "2px solid #d4a017" : "2px solid transparent",
                  marginBottom: -1,
                  transition: "color 0.25s, border-color 0.25s",
                  whiteSpace: "nowrap",
                }}
              >
                {c.tag}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
            >
              {/* Header da categoria — agora com 3 colunas: info | imagem | specs */}
              <div
                className="services-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  gap: "3rem",
                  alignItems: "start",
                  marginBottom: 56,
                }}
              >
                {/* Coluna 1: info textual */}
                <div>
                  <span style={{
                    display: "inline-block",
                    background: "rgba(212,160,23,0.1)",
                    border: "1px solid rgba(212,160,23,0.25)",
                    color: "#d4a017",
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.7rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    padding: "5px 14px",
                    marginBottom: 20,
                  }}>
                    {cat.tag}
                  </span>
                  <h2 style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 800,
                    fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                    textTransform: "uppercase",
                    lineHeight: 1,
                    marginBottom: 20,
                  }}>
                    {cat.title}
                  </h2>
                  <p style={{ color: "#7a7265", lineHeight: 1.75, fontSize: "0.95rem" }}>
                    {cat.desc}
                  </p>
                </div>

                {/* Coluna 2: imagem do produto */}
                {"image" in cat && cat.image && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    style={{ position: "relative" }}
                  >
                    {/* Borda dourada decorativa */}
                    <div style={{
                      position: "absolute",
                      inset: 0,
                      border: "1px solid rgba(212,160,23,0.2)",
                      borderRadius: 4,
                      zIndex: 2,
                      pointerEvents: "none",
                    }} />

                    {/* Tag do produto sobre a imagem */}
                    <div style={{
                      position: "absolute",
                      bottom: 16,
                      left: 16,
                      zIndex: 3,
                      background: "rgba(12,11,8,0.85)",
                      border: "1px solid rgba(212,160,23,0.3)",
                      backdropFilter: "blur(8px)",
                      padding: "6px 14px",
                      borderRadius: 2,
                    }}>
                      <span style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontWeight: 700,
                        fontSize: "0.7rem",
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "#d4a017",
                      }}>
                        {cat.tag}
                      </span>
                    </div>

                    <img
                      src={cat.image}
                      alt={cat.title}
                      style={{
                        width: "100%",
                        aspectRatio: "4/5",
                        objectFit: "cover",
                        borderRadius: 4,
                        display: "block",
                        filter: "brightness(0.92) contrast(1.05)",
                      }}
                    />

                    {/* Gradiente inferior para blend com o fundo */}
                    <div style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "35%",
                      background: "linear-gradient(to top, rgba(15,14,11,0.6), transparent)",
                      borderRadius: "0 0 4px 4px",
                      pointerEvents: "none",
                    }} />
                  </motion.div>
                )}

                {/* Coluna 3: especificações */}
                <div style={{ paddingTop: 8 }}>
                  <p style={{
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.25)",
                    marginBottom: 20,
                  }}>
                    Especificações disponíveis
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                    {cat.items.map((item, i) => (
                      <motion.div
                        key={item.cod}
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.06 }}
                        className="diff-item"
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-start",
                          gap: 24,
                          padding: "1.1rem 0",
                        }}
                      >
                        <div>
                          <p style={{
                            fontFamily: "'Barlow Condensed', sans-serif",
                            fontWeight: 700,
                            fontSize: "1rem",
                            letterSpacing: "0.05em",
                            textTransform: "uppercase",
                            marginBottom: 4,
                          }}>
                            {item.cod}
                          </p>
                          <p style={{ color: "#7a7265", fontSize: "0.85rem", lineHeight: 1.5 }}>
                            {item.desc}
                          </p>
                        </div>
                        <ArrowIcon />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Todas as categorias em cards compactos (visão geral) */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 56 }}>
            <p className="section-label" style={{ marginBottom: 32 }}>Visão geral do portfólio</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
              {PRODUTOS.categorias.map((c, i) => (
                <motion.div
                  key={c.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setActiveTab(i)}
                  className="service-card"
                  style={{
                    position: "relative",
                    borderRadius: 4,
                    padding: "1.75rem 2rem",
                    cursor: "pointer",
                    overflow: "hidden",
                    background: activeTab === i ? "rgba(212,160,23,0.05)" : "rgba(255,255,255,0.02)",
                    borderColor: activeTab === i ? "rgba(212,160,23,0.4)" : undefined,
                    minHeight: 160,
                  }}
                >
                  {/* Imagem de fundo sutil no card */}
                  {"image" in c && c.image && (
                    <>
                      <div style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage: `url(${c.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        opacity: activeTab === i ? 0.12 : 0.06,
                        transition: "opacity 0.4s ease",
                        filter: "grayscale(30%)",
                      }} />
                      <div style={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(135deg, rgba(15,14,11,0.85) 0%, rgba(15,14,11,0.5) 100%)",
                      }} />
                    </>
                  )}

                  {/* Conteúdo do card */}
                  <div style={{ position: "relative", zIndex: 1 }}>
                    <span style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 700,
                      fontSize: "0.65rem",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "#d4a017",
                      display: "block",
                      marginBottom: 10,
                    }}>
                      {c.tag}
                    </span>
                    <h3 style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 700,
                      fontSize: "1.15rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.03em",
                      marginBottom: 10,
                    }}>
                      {c.title}
                    </h3>
                    <p style={{ color: "#7a7265", fontSize: "0.85rem", lineHeight: 1.6 }}>
                      {c.items.length} especificações
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "80px 2rem", background: "#0c0b08", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 32 }}>
          <div>
            <p className="section-label" style={{ marginBottom: 12 }}>Precisa de orientação técnica?</p>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", textTransform: "uppercase", lineHeight: 1 }}>
              Nossa equipe indica o produto<br />
              <span style={{ color: "#d4a017", fontStyle: "italic" }}>certo para sua obra</span>
            </h2>
          </div>
          <a href="/#contato" className="btn-primary" style={{ textDecoration: "none" }}>
            Solicitar proposta
          </a>
        </div>
      </section>
    </>
  );
}