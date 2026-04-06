import { TICKER_TEXT } from "@/data/content";

export default function Ticker() {
  return (
    <div style={{ background: "#d4a017", padding: "12px 0", overflow: "hidden" }}>
      <div className="ticker" style={{ display: "inline-flex" }}>
        {Array(4).fill(null).map((_, i) => (
          <span
            key={i}
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#0c0b08", padding: "0 3rem" }}
          >
            {TICKER_TEXT}
          </span>
        ))}
      </div>
    </div>
  );
}
