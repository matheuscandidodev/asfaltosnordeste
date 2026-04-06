"use client";
import { motion } from "framer-motion";
import { SOBRE } from "@/data/content";
import BrazilMap from "@/components/sections/sobre/BrazilMap";

const BORDER_CLASSES = ["stat-r1", "stat-r2", "stat-r3", "stat-r4"] as const;

const FROTA_STATS = [
  { num: "+30", label: "Cavalos mecânicos" },
  { num: "55",  label: "Semirreboques" },
  { num: "4",   label: "Caminhões truck" },
  { num: "24/7", label: "Monitoramento" },
];

const FROTA_DIFERENCIAIS = [
  {
    num: "01",
    title: "Operação 100% própria",
    desc: "Sem dependência de terceiros. Controle total da cadeia logística garante entregas pontuais e previsíveis em qualquer escala de obra.",
  },
  {
    num: "02",
    title: "Gestão e monitoramento",
    desc: "Padronização em todas as etapas e rastreamento contínuo da frota, assegurando conformidade e eficiência operacional.",
  },
  {
    num: "03",
    title: "Confiabilidade para sua obra",
    desc: "Fornecimento contínuo e previsível — essencial para o cumprimento de prazos e manutenção da qualidade nos projetos.",
  },
  {
    num: "04",
    title: "Compromisso ambiental",
    desc: "Operação alinhada às normas reguladoras, reforçando responsabilidade e parceria de longo prazo com nossos clientes.",
  },
];

export default function SobreContent() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ position: "relative", minHeight: "60vh", display: "flex", alignItems: "flex-end", overflow: "hidden", background: "#0c0b08" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <img
            src="/sobre-bg.png"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", opacity: 0.85 }}
          />
        </div>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(12,11,8,1) 0%, rgba(12,11,8,0.5) 50%, rgba(12,11,8,0.3) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(12,11,8,0.8) 0%, transparent 65%)" }} />

        <div style={{ position: "relative", zIndex: 10, maxWidth: 1280, margin: "0 auto", padding: "120px 2rem 5rem", width: "100%" }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="section-label" style={{ marginBottom: 20 }}>{SOBRE.hero.label}</p>
            <h1 style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
              lineHeight: 0.95,
              letterSpacing: "-0.01em",
              textTransform: "uppercase",
              maxWidth: 700,
              margin: "0 0 24px",
            }}>
              {SOBRE.hero.title}{" "}
              <span style={{ fontStyle: "italic", color: "#d4a017" }}>{SOBRE.hero.titleEM}</span>
            </h1>
            <p style={{ fontSize: "1rem", color: "#a09888", lineHeight: 1.75, maxWidth: 520, fontWeight: 400 }}>
              {SOBRE.hero.body}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── NÚMEROS ── */}
      <section style={{ background: "#0f0e0b" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div
            className="stats-grid"
            style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            {SOBRE.stats.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`stat-pad ${BORDER_CLASSES[i]}`}
                style={{ padding: "3rem 2rem", borderRight: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none", textAlign: "center" }}
              >
                <p className="stat-number">{s.num}</p>
                <p style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginTop: 8 }}>
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FROTA PRÓPRIA ── */}
      <section style={{ padding: "100px 2rem", background: "#0c0b08", overflow: "hidden" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>

          <div style={{ marginBottom: 56 }}>
            <p className="section-label" style={{ marginBottom: 12 }}>Logística própria</p>
            <h2 style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              textTransform: "uppercase",
              lineHeight: 1,
              maxWidth: 600,
            }}>
              Frota robusta,{" "}
              <span style={{ color: "#d4a017", fontStyle: "italic" }}>entrega garantida</span>
            </h2>
          </div>

          <div
            className="services-grid"
            style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: "1.5rem", marginBottom: 64, alignItems: "start" }}
          >
            {/* Coluna esquerda: imagem panorâmica + stats */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                style={{ position: "relative", borderRadius: 4, overflow: "hidden" }}
              >
                <img
                  src="/frota-panoramica.png"
                  alt="Frota Asfaltos Nordeste"
                  style={{ width: "100%", aspectRatio: "21/9", objectFit: "cover", display: "block", filter: "brightness(0.9) contrast(1.05)" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(12,11,8,0.7) 0%, transparent 50%)" }} />
                <div style={{ position: "absolute", bottom: 20, left: 24 }}>
                  <span style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.7rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#d4a017",
                  }}>
                    Frota própria — Operação Norte e Nordeste
                  </span>
                </div>
                <div style={{ position: "absolute", top: 20, right: 20, background: "rgba(12,11,8,0.8)", border: "1px solid rgba(212,160,23,0.3)", backdropFilter: "blur(8px)", padding: "8px 16px", borderRadius: 2 }}>
                  <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "0.95rem", color: "#d4a017", letterSpacing: "0.05em" }}>
                    DESDE 1997
                  </span>
                </div>
              </motion.div>

              {/* Stats da frota */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, background: "rgba(255,255,255,0.04)", borderRadius: 4, overflow: "hidden" }}>
                {FROTA_STATS.map((s, i) => (
                  <motion.div
                    key={s.num}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    viewport={{ once: true }}
                    style={{
                      background: "#0f0e0b",
                      padding: "1.5rem 1rem",
                      textAlign: "center",
                      borderRight: i < 3 ? "1px solid rgba(255,255,255,0.05)" : "none",
                    }}
                  >
                    <p style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 800,
                      fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                      color: "#d4a017",
                      lineHeight: 1,
                      marginBottom: 6,
                    }}>
                      {s.num}
                    </p>
                    <p style={{ fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", lineHeight: 1.4 }}>
                      {s.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Coluna direita: imagem vertical do caminhão em rota */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              style={{ position: "relative", borderRadius: 4, overflow: "hidden", height: "100%" }}
            >
              <img
                src="/frota-rota.png"
                alt="Caminhão Asfaltos Nordeste em rota"
                style={{ width: "100%", height: "100%", minHeight: 320, objectFit: "cover", display: "block", filter: "brightness(0.88) contrast(1.06)" }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(12,11,8,0.65) 0%, transparent 55%)" }} />
              <div style={{ position: "absolute", bottom: 24, left: 24, right: 24 }}>
                <p style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.7rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#d4a017",
                  marginBottom: 6,
                }}>
                  Operação em campo
                </p>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.85rem", lineHeight: 1.5 }}>
                  Pontualidade e controle total em cada entrega
                </p>
              </div>
            </motion.div>
          </div>

          {/* Diferenciais da frota */}
          <div>
            {FROTA_DIFERENCIAIS.map((d, i) => (
              <motion.div
                key={d.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                viewport={{ once: true }}
                className="diff-item diff-row"
                style={{ display: "grid", gridTemplateColumns: "80px 1fr 1fr", gap: "2rem", padding: "1.75rem 0", alignItems: "start" }}
              >
                <span className="diff-num" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1rem", letterSpacing: "0.1em", color: "rgba(255,255,255,0.2)" }}>
                  {d.num}
                </span>
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.15rem", textTransform: "uppercase", letterSpacing: "0.04em", paddingTop: 2 }}>
                  {d.title}
                </h3>
                <p style={{ color: "#7a7265", lineHeight: 1.7, fontSize: "0.9rem" }}>
                  {d.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PILARES ── */}
      <section className="section-pad" style={{ padding: "100px 2rem", background: "#0f0e0b" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ marginBottom: 64 }}>
            <p className="section-label" style={{ marginBottom: 12 }}>O que nos define</p>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3.2rem)", textTransform: "uppercase", lineHeight: 1, maxWidth: 520 }}>
              Estrutura e valores que<br />
              <span style={{ color: "#d4a017", fontStyle: "italic" }}>sustentam nossa operação</span>
            </h2>
          </div>
          <div>
            {SOBRE.pilares.map((p, i) => (
              <motion.div
                key={p.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                viewport={{ once: true }}
                className="diff-item diff-row"
                style={{ display: "grid", gridTemplateColumns: "80px 1fr 1fr", gap: "2rem", padding: "2rem 0", alignItems: "start" }}
              >
                <span className="diff-num" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1rem", letterSpacing: "0.1em", color: "rgba(255,255,255,0.2)", transition: "color 0.3s" }}>
                  {p.num}
                </span>
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.2rem", textTransform: "uppercase", letterSpacing: "0.04em", paddingTop: 2 }}>
                  {p.title}
                </h3>
                <p className="diff-desc" style={{ color: "#7a7265", lineHeight: 1.7, fontSize: "0.9rem" }}>
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COBERTURA REGIONAL ── */}
      <section style={{ padding: "100px 2rem", background: "#0c0b08" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div
            className="services-grid"
            style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: "5rem", alignItems: "center" }}
          >
            {/* Texto */}
            <div>
              <p className="section-label" style={{ marginBottom: 20 }}>Onde atuamos</p>
              <h2 style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                textTransform: "uppercase",
                lineHeight: 1,
                marginBottom: 24,
              }}>
                Presença consolidada no{" "}
                <span style={{ color: "#d4a017", fontStyle: "italic" }}>Norte e Nordeste</span>
              </h2>
              <p style={{ color: "#7a7265", lineHeight: 1.8, fontSize: "0.95rem", marginBottom: 40, maxWidth: 440 }}>
                Com base estratégica no Distrito Industrial de Maracanaú–CE, atendemos construtoras e órgãos públicos em 16 estados, garantindo agilidade logística e suporte técnico em todo o arco Norte-Nordeste.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {[
                  { label: "Estados atendidos", value: "16 estados" },
                  { label: "Regiões cobertas", value: "Norte e Nordeste" },
                  { label: "Base de operação", value: "Maracanaú, CE" },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="diff-item"
                    style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 0", gap: 24 }}
                  >
                    <span style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)" }}>
                      {item.label}
                    </span>
                    <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#d4a017", letterSpacing: "0.05em" }}>
                      {item.value}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Legenda */}
              <div style={{ display: "flex", gap: 24, marginTop: 40 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 14, height: 14, borderRadius: 2, background: "rgba(212,160,23,0.72)", border: "1px solid rgba(212,160,23,0.4)" }} />
                  <span style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>
                    Área de atendimento
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 14, height: 14, borderRadius: 2, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }} />
                  <span style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>
                    Demais estados
                  </span>
                </div>
              </div>
            </div>

            {/* Mapa geográfico */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
            >
              <BrazilMap />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "80px 2rem", background: "#0f0e0b", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 32 }}>
          <div>
            <p className="section-label" style={{ marginBottom: 12 }}>Vamos trabalhar juntos</p>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", textTransform: "uppercase", lineHeight: 1 }}>
              Solicite uma proposta<br />
              <span style={{ color: "#d4a017", fontStyle: "italic" }}>para o seu projeto</span>
            </h2>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="/produtos" className="btn-outline" style={{ textDecoration: "none" }}>Ver produtos</a>
            <a href="/#contato" className="btn-primary" style={{ textDecoration: "none" }}>Solicitar proposta</a>
          </div>
        </div>
      </section>
    </>
  );
}