"use client";
import { motion } from "framer-motion";
import { STATS } from "@/data/content";

// Classes de borda por índice para o layout responsivo 2×2
const BORDER_CLASSES = ["stat-r1", "stat-r2", "stat-r3", "stat-r4"] as const;

export default function Stats() {
  return (
    <section className="section-pad" style={{ padding: "80px 2rem", background: "#0f0e0b" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div
          className="stats-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 2 }}
        >
          {STATS.map((s, i) => (
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
  );
}
