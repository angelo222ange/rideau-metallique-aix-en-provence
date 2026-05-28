"use client";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      aria-label="Revenir en haut"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      style={{
        position: "fixed",
        right: "20px",
        bottom: "calc(20px + env(safe-area-inset-bottom))",
        width: "48px",
        height: "48px",
        borderRadius: "999px",
        background: "rgba(15,26,43,0.85)",
        color: "#fff",
        border: "2px solid rgba(255,255,255,0.4)",
        boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        zIndex: 997,
      }}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
    </button>
  );
}
