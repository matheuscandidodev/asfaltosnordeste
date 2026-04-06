"use client";
import { motion } from "framer-motion";
import { CONTACT } from "@/data/content";

export default function Contact() {
  return (
    <section id="contato" className="section-pad" style={{ padding: "100px 2rem", background: "#0c0b08" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}>

          {/* Informações + mapa */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="section-label" style={{ marginBottom: 16 }}>{CONTACT.label}</p>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3.2rem)", textTransform: "uppercase", lineHeight: 1, marginBottom: 24 }}>
              {CONTACT.title}<br />
              <span style={{ color: "#d4a017", fontStyle: "italic" }}>{CONTACT.titleEM}</span>
            </h2>
            <p style={{ color: "#7a7265", lineHeight: 1.75, fontSize: "0.9rem", marginBottom: 40 }}>
              {CONTACT.body}
            </p>

            {/* Dados de contato */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 40 }}>
              {CONTACT.info.map((c) => (
                <div key={c.label} style={{ display: "flex", gap: 16, alignItems: "baseline", flexWrap: "wrap" }}>
                  <span style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", minWidth: 80 }}>
                    {c.label}
                  </span>
                  <span style={{ color: "#d4a017", fontSize: "0.9rem", wordBreak: "break-all" }}>
                    {c.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Mapa */}
            <div style={{ borderRadius: 4, overflow: "hidden", border: "1px solid rgba(212,160,23,0.12)" }}>
              <iframe
                src={CONTACT.mapSrc}
                width="100%" height="320"
                style={{ border: 0, display: "block", filter: "grayscale(80%) invert(10%) contrast(90%)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
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
                Solicitar proposta
              </p>
              <form style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <input type="text"  placeholder="Nome completo"                className="form-input" />
                <input type="email" placeholder="E-mail corporativo"           className="form-input" />
                <input type="text"  placeholder="Empresa"                      className="form-input" />
                <input type="tel"   placeholder="Telefone"                     className="form-input" />
                <textarea
                  placeholder="Descreva brevemente sua demanda"
                  rows={4}
                  className="form-input"
                  style={{ resize: "vertical" }}
                />
                <button type="submit" className="btn-primary" style={{ marginTop: 8, width: "100%", textAlign: "center" }}>
                  Enviar solicitação
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
