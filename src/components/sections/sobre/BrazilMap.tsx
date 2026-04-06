"use client";
import { useEffect, useRef } from "react";

const COVERAGE_REGIONS = new Set(["norte", "nordeste"]);

const REGION_LABEL: Record<string, string> = {
  norte: "Norte",
  nordeste: "Nordeste",
};

export default function BrazilMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgWrapRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const listenersAttached = useRef(false);

  // ── Atualiza o tooltip diretamente no DOM (sem re-render do React) ────
  const showTooltip = (x: number, y: number, name: string, region: string) => {
    const tip = tooltipRef.current;
    const container = containerRef.current;
    if (!tip || !container) return;

    const containerWidth = container.clientWidth;
    tip.style.left = `${Math.min(x + 14, containerWidth - 210)}px`;
    tip.style.top = `${Math.max(y - 72, 4)}px`;
    tip.style.opacity = "1";

    const titleEl = tip.querySelector<HTMLElement>(".tip-title");
    const nameEl = tip.querySelector<HTMLElement>(".tip-name");
    const regionEl = tip.querySelector<HTMLElement>(".tip-region");

    if (titleEl) titleEl.textContent = "✓ Temos cobertura";

    if (nameEl) {
      const showName = !!name && !["Nordeste", "Sul"].includes(name);
      nameEl.textContent = showName ? name : "";
      nameEl.style.display = showName ? "block" : "none";
    }

    if (regionEl) {
      regionEl.textContent = `Região ${REGION_LABEL[region] ?? region}`;
    }
  };

  const hideTooltip = () => {
    if (tooltipRef.current) tooltipRef.current.style.opacity = "0";
  };

  // ── Aplica estilos e listeners nos paths do SVG ───────────────────────
  const attachListeners = (svgEl: SVGSVGElement) => {
    if (listenersAttached.current) return;
    listenersAttached.current = true;

    svgEl.style.width = "100%";
    svgEl.style.height = "auto";
    svgEl.style.display = "block";
    svgEl.removeAttribute("width");
    svgEl.removeAttribute("height");

    const paths = svgEl.querySelectorAll<SVGPathElement>("path[data-region]");

    paths.forEach((path) => {
      const region = path.getAttribute("data-region") ?? "";
      const isCoverage = COVERAGE_REGIONS.has(region);
      const name = path.getAttribute("data-name") ?? "";

      // Estilos base via atributo (não sobrescrito pelo React)
      path.style.cssText = [
        "transition: fill 0.18s ease, filter 0.18s ease",
        "stroke: rgba(0,0,0,0.3)",
        "stroke-width: 0.6",
        "stroke-linejoin: round",
        `fill: ${isCoverage ? "rgba(212,160,23,0.72)" : "rgba(255,255,255,0.06)"}`,
        `cursor: ${isCoverage ? "pointer" : "default"}`,
      ].join(";");

      if (!isCoverage) return;

      path.addEventListener("mouseenter", (e: MouseEvent) => {
        path.style.fill = "#f0c040";
        path.style.filter = "drop-shadow(0 0 8px rgba(212,160,23,0.55))";
        const rect = containerRef.current?.getBoundingClientRect();
        if (rect) showTooltip(e.clientX - rect.left, e.clientY - rect.top, name, region);
      });

      path.addEventListener("mousemove", (e: MouseEvent) => {
        const tip = tooltipRef.current;
        const rect = containerRef.current?.getBoundingClientRect();
        if (!tip || !rect || tip.style.opacity === "0") return;
        const containerWidth = containerRef.current?.clientWidth ?? 560;
        tip.style.left = `${Math.min(e.clientX - rect.left + 14, containerWidth - 210)}px`;
        tip.style.top = `${Math.max(e.clientY - rect.top - 72, 4)}px`;
      });

      path.addEventListener("mouseleave", () => {
        path.style.fill = "rgba(212,160,23,0.72)";
        path.style.filter = "";
        hideTooltip();
      });
    });
  };

  // ── Carrega o SVG uma única vez — o React nunca toca neste nó ─────────
  useEffect(() => {
    const wrap = svgWrapRef.current;
    if (!wrap || wrap.childElementCount > 0) return;

    fetch("/brasil_mapa.svg")
      .then((r) => r.text())
      .then((svgText) => {
        wrap.innerHTML = svgText;
        const svgEl = wrap.querySelector<SVGSVGElement>("svg");
        if (svgEl) attachListeners(svgEl);
      })
      .catch((err) => console.error("Falha ao carregar mapa SVG:", err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // executa apenas uma vez, sem dependências

  return (
    <div
      ref={containerRef}
      style={{ position: "relative", width: "100%", maxWidth: 560 }}
    >
      {/* SVG container — gerenciado puramente via DOM, React nunca re-renderiza */}
      <div ref={svgWrapRef} style={{ width: "100%", lineHeight: 0 }} />

      {/* Tooltip — manipulado diretamente via ref.current, zero re-renders */}
      <div
        ref={tooltipRef}
        style={{
          position: "absolute",
          opacity: 0,
          pointerEvents: "none",
          zIndex: 10,
          background: "rgba(10,9,7,0.95)",
          border: "1px solid rgba(212,160,23,0.45)",
          borderRadius: 3,
          padding: "8px 14px",
          backdropFilter: "blur(10px)",
          boxShadow: "0 4px 24px rgba(0,0,0,0.5)",
          minWidth: 152,
          transition: "opacity 0.15s ease",
        }}
      >
        <p
          className="tip-title"
          style={{
            margin: 0,
            fontSize: "0.6rem",
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#d4a017",
            fontFamily: "'Barlow Condensed', sans-serif",
          }}
        />
        <p
          className="tip-name"
          style={{
            margin: "4px 0 0",
            fontSize: "0.8rem",
            fontWeight: 600,
            color: "rgba(255,255,255,0.85)",
            fontFamily: "'Barlow Condensed', sans-serif",
            letterSpacing: "0.04em",
          }}
        />
        <p
          className="tip-region"
          style={{
            margin: "2px 0 0",
            fontSize: "0.65rem",
            color: "rgba(255,255,255,0.35)",
            fontFamily: "'Barlow Condensed', sans-serif",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        />
      </div>
    </div>
  );
}