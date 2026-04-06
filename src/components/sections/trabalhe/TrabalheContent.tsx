"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { TRABALHE } from "@/data/content";

export default function TrabalheContent() {
  const [formData, setFormData] = useState({ nome: "", email: "", telefone: "", area: "", mensagem: "" });
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui conectar ao backend / email service
    setEnviado(true);
  };

  return (
    <>
      {/* ── HERO ── */}
      <section style={{ position: "relative", minHeight: "60vh", display: "flex", alignItems: "flex-end", overflow: "hidden", background: "#0c0b08" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <img src="/trabalhe-bg.png" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.75 }} />
        </div>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(12,11,8,1) 0%, rgba(12,11,8,0.5) 50%, rgba(12,11,8,0.25) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(12,11,8,0.85) 0%, transparent 65%)" }} />

        <div style={{ position: "relative", zIndex: 10, maxWidth: 1280, margin: "0 auto", padding: "120px 2rem 5rem", width: "100%" }}>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}>
            <p className="section-label" style={{ marginBottom: 20 }}>{TRABALHE.hero.label}</p>
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
              {TRABALHE.hero.title}{" "}
              <span style={{ fontStyle: "italic", color: "#d4a017" }}>{TRABALHE.hero.titleEM}</span>
            </h1>
            <p style={{ fontSize: "1rem", color: "#a09888", lineHeight: 1.75, maxWidth: 520, fontWeight: 400 }}>
              {TRABALHE.hero.body}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── NOSSOS VALORES ── */}
      <section className="section-pad" style={{ padding: "100px 2rem", background: "#0f0e0b" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ marginBottom: 64 }}>
            <p className="section-label" style={{ marginBottom: 12 }}>Nossos valores</p>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3.2rem)", textTransform: "uppercase", lineHeight: 1, maxWidth: 500 }}>
              O que buscamos em<br />
              <span style={{ color: "#d4a017", fontStyle: "italic" }}>quem faz parte do time</span>
            </h2>
          </div>

          <div>
            {TRABALHE.valores.map((v, i) => (
              <motion.div
                key={v.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="diff-item diff-row"
                style={{ display: "grid", gridTemplateColumns: "80px 1fr 1fr", gap: "2rem", padding: "2rem 0", alignItems: "start" }}
              >
                <span className="diff-num" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1rem", letterSpacing: "0.1em", color: "rgba(255,255,255,0.2)", transition: "color 0.3s" }}>
                  {v.num}
                </span>
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.2rem", textTransform: "uppercase", letterSpacing: "0.04em", paddingTop: 2 }}>
                  {v.title}
                </h3>
                <p className="diff-desc" style={{ color: "#7a7265", lineHeight: 1.7, fontSize: "0.9rem" }}>
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VAGAS ── */}
      <section className="section-pad" style={{ padding: "100px 2rem", background: "#0c0b08" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48, flexWrap: "wrap", gap: 20 }}>
            <div>
              <p className="section-label" style={{ marginBottom: 12 }}>Oportunidades abertas</p>
              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3rem)", textTransform: "uppercase", lineHeight: 1 }}>
                Vagas disponíveis
              </h2>
            </div>
          </div>

          {TRABALHE.vagas.length === 0 ? (
            /* Estado vazio — sem vagas */
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              style={{ border: "1px solid rgba(255,255,255,0.06)", borderRadius: 4, padding: "4rem 3rem", textAlign: "center" }}
            >
              {/* Ícone minimalista */}
              <div style={{ width: 56, height: 56, border: "1px solid rgba(212,160,23,0.25)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2v8M10 14v.5M3 18h14a1 1 0 001-1V7l-5-5H3a1 1 0 00-1 1v14a1 1 0 001 1z" stroke="#d4a017" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.2rem", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 12 }}>
                Nenhuma vaga aberta no momento
              </p>
              <p style={{ color: "#7a7265", fontSize: "0.9rem", lineHeight: 1.7, maxWidth: 400, margin: "0 auto" }}>
                Acompanhe esta página — atualizamos as oportunidades assim que surgem novas posições na empresa.
              </p>
            </motion.div>
          ) : (
            /* Lista de vagas (quando houver) */
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {TRABALHE.vagas.map((v, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  viewport={{ once: true }}
                  className="service-card"
                  style={{ background: "rgba(255,255,255,0.02)", borderRadius: 4, padding: "1.5rem 2rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}
                >
                  <div>
                    <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.2rem", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 6 }}>
                      {v.titulo}
                    </p>
                    <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
                      {[v.area, v.regime, v.local].map((tag) => (
                        <span key={tag} style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a href="#banco-talentos" className="btn-outline" style={{ textDecoration: "none", padding: "10px 24px", fontSize: "0.75rem" }}>
                    Inscrever-se
                  </a>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── BANCO DE TALENTOS ── */}
      <section id="banco-talentos" className="section-pad" style={{ padding: "100px 2rem", background: "#0f0e0b" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}>

            {/* Texto */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="section-label" style={{ marginBottom: 16 }}>{TRABALHE.banco.title}</p>
              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3rem)", textTransform: "uppercase", lineHeight: 1, marginBottom: 24 }}>
                Envie seu currículo e<br />
                <span style={{ color: "#d4a017", fontStyle: "italic" }}>entre para o nosso banco</span>
              </h2>
              <p style={{ color: "#7a7265", lineHeight: 1.8, fontSize: "0.95rem", marginBottom: 32 }}>
                {TRABALHE.banco.body}
              </p>
              <div style={{ display: "flex", gap: 12, alignItems: "baseline" }}>
              </div>
            </motion.div>

            {/* Formulário */}
            <motion.div
              className="form-sticky"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              style={{ position: "sticky", top: 90 }}
            >
              <div className="form-pad" style={{ border: "1px solid rgba(212,160,23,0.12)", borderRadius: 4, padding: "2.5rem" }}>
                <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.1rem", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 28, borderBottom: "1px solid rgba(255,255,255,0.06)", paddingBottom: 20 }}>
                  Banco de talentos
                </p>

                {enviado ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{ textAlign: "center", padding: "2rem 0" }}
                  >
                    <div style={{ width: 48, height: 48, border: "1px solid rgba(212,160,23,0.4)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M3 9l4.5 4.5 7.5-9" stroke="#d4a017" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.1rem", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 10 }}>
                      Currículo recebido!
                    </p>
                    <p style={{ color: "#7a7265", fontSize: "0.9rem", lineHeight: 1.6 }}>
                      Obrigado pelo interesse. Entraremos em contato quando surgir uma oportunidade alinhada ao seu perfil.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    <input
                      type="text"
                      placeholder="Nome completo"
                      required
                      className="form-input"
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    />
                    <input
                      type="email"
                      placeholder="E-mail"
                      required
                      className="form-input"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    <input
                      type="tel"
                      placeholder="Telefone"
                      className="form-input"
                      value={formData.telefone}
                      onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                    />
                    <input
                      type="text"
                      placeholder="Área de interesse (ex: Logística, Laboratorio...)"
                      className="form-input"
                      value={formData.area}
                      onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                    />
                    <textarea
                      placeholder="Conte brevemente sobre sua experiência"
                      rows={4}
                      className="form-input"
                      style={{ resize: "vertical" }}
                      value={formData.mensagem}
                      onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                    />

                    {/* Upload de currículo */}
                    <label style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      background: "rgba(255,255,255,0.04)",
                      border: "1px dashed rgba(255,255,255,0.15)",
                      borderRadius: 4,
                      padding: "14px 16px",
                      cursor: "pointer",
                      transition: "border-color 0.2s",
                      color: "rgba(255,255,255,0.3)",
                      fontSize: "0.9rem",
                    }}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8 1v9M4 5l4-4 4 4M2 12h12v2a1 1 0 01-1 1H3a1 1 0 01-1-1v-2z" stroke="rgba(255,255,255,0.3)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Anexar currículo (PDF)
                      <input type="file" accept=".pdf,.doc,.docx" style={{ display: "none" }} />
                    </label>

                    <button type="submit" className="btn-primary" style={{ marginTop: 8, width: "100%", textAlign: "center" }}>
                      Enviar currículo
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
