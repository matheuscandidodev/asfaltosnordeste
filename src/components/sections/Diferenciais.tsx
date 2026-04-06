"use client";
import { motion } from "framer-motion";
import { DIFERENCIAIS } from "@/data/content";

export default function Diferenciais() {
  return (
    <section className="section-pad" style={{ padding: "100px 2rem", background: "#0f0e0b" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>

        {/* Cabeçalho */}
        <div
          className="diferenciais-header"
          style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 64, flexWrap: "wrap", gap: 24 }}
        >
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

        {/* Lista */}
        <div>
          {DIFERENCIAIS.map((d, i) => (
            <motion.div
              key={d.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="diff-item diff-row"
              style={{ display: "grid", gridTemplateColumns: "80px 1fr 1fr", gap: "2rem", padding: "2rem 0", alignItems: "start" }}
            >
              <span
                className="diff-num"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1rem", letterSpacing: "0.1em", color: "rgba(255,255,255,0.2)", transition: "color 0.3s" }}
              >
                {d.num}
              </span>
              <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.2rem", textTransform: "uppercase", letterSpacing: "0.04em", paddingTop: 2 }}>
                {d.title}
              </h3>
              <p className="diff-desc" style={{ color: "#7a7265", lineHeight: 1.7, fontSize: "0.9rem" }}>
                {d.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
