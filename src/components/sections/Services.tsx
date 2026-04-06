"use client";
import { motion } from "framer-motion";
import { SERVICES } from "@/data/content";

const ArrowIcon = () => (
  <span style={{ width: 28, height: 28, border: "1px solid rgba(212,160,23,0.4)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path d="M1 9L9 1M9 1H2M9 1V8" stroke="#d4a017" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

export default function Services() {
  return (
    <section id="servicos" className="section-pad" style={{ padding: "100px 2rem", background: "#0c0b08" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="section-label" style={{ marginBottom: 16 }}>{SERVICES.label}</p>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1, textTransform: "uppercase", letterSpacing: "-0.01em", marginBottom: 24 }}>
              {SERVICES.title}<br />
              <span style={{ color: "#d4a017", fontStyle: "italic" }}>{SERVICES.titleEM}</span>
            </h2>
            <p style={{ color: "#7a7265", lineHeight: 1.75, fontSize: "0.95rem", maxWidth: 380 }}>
              {SERVICES.body}
            </p>
          </motion.div>

          {/* Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {SERVICES.items.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="service-card"
                style={{ background: "rgba(255,255,255,0.02)", borderRadius: 4, padding: "2rem" }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
                  <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.4rem", textTransform: "uppercase", letterSpacing: "0.03em" }}>
                    {s.title}
                  </h3>
                  <ArrowIcon />
                </div>
                <p style={{ color: "#7a7265", lineHeight: 1.7, fontSize: "0.9rem" }}>{s.text}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
