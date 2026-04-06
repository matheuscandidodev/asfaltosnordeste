"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useBreakpoint } from "@/hooks/useWindowWidth";
import { HERO } from "@/data/content";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { isMobile } = useBreakpoint();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Parallax desativado no mobile para performance
  const videoY = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? ["0%", "0%"] : ["0%", "25%"]
  );

  return (
    <section
      ref={heroRef}
      id="inicio"
      style={{ position: "relative", minHeight: "100svh", display: "flex", alignItems: "flex-end", overflow: "hidden" }}
    >
      {/* Vídeo com parallax */}
      <motion.div style={{ position: "absolute", inset: 0, y: videoY }}>
        <video
          autoPlay muted playsInline
          style={{ width: "100%", height: isMobile ? "100%" : "115%", objectFit: "cover", display: "block" }}
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Overlays */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(12,11,8,1) 0%, rgba(12,11,8,0.65) 40%, rgba(12,11,8,0.2) 100%)" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(12,11,8,0.75) 0%, transparent 70%)" }} />

      {/* Conteúdo */}
      <div
        className="hero-content"
        style={{ position: "relative", zIndex: 10, maxWidth: 1280, margin: "0 auto", padding: "0 2rem 5rem", width: "100%" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="section-label" style={{ marginBottom: 20 }}>{HERO.label}</p>

          <h1
            className="hero-title"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(3.2rem, 7.5vw, 6.5rem)",
              lineHeight: 0.95,
              letterSpacing: "-0.01em",
              textTransform: "uppercase",
              maxWidth: 860,
              margin: "0 0 24px",
            }}
          >
            {HERO.title}{" "}
            <span style={{ fontStyle: "italic", color: "#d4a017" }}>{HERO.titleEM}</span>{" "}
            {HERO.titleEnd}
          </h1>

          <p style={{ fontSize: "1rem", color: "#a09888", lineHeight: 1.7, maxWidth: 540, marginBottom: 36, fontWeight: 400 }}>
            {HERO.body}
          </p>

          <div className="hero-btns" style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center" }}>
            <a href={HERO.cta1.href} className="btn-primary">{HERO.cta1.label}</a>
            <a href={HERO.cta2.href} className="btn-outline">{HERO.cta2.label}</a>
          </div>
        </motion.div>
      </div>

      {/* Indicador de scroll */}
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
  );
}
