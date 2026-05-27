import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function FloatingCallButton() {
  const href = siteConfig.phonePublic && siteConfig.phone ? siteConfig.phoneLink : "/contact/";
  const label = siteConfig.phonePublic && siteConfig.phone ? "Appeler maintenant" : "Devis gratuit";

  return (
    <Link
      href={href}
      className="floating-cta-round"
      style={{
        position: "fixed",
        bottom: "calc(20px + env(safe-area-inset-bottom))",
        left: "50%",
        transform: "translateX(-50%)",
        padding: "16px 28px",
        borderRadius: 999,
        background: "#C28840",
        color: "#FFFFFF",
        border: "3px solid #FFFFFF",
        boxShadow: "0 10px 32px rgba(15,26,43,0.35), 0 4px 12px rgba(216,85,53,0.4)",
        fontSize: 15,
        fontWeight: 700,
        zIndex: 998,
        alignItems: "center",
        gap: 10,
      }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="white" strokeWidth="2" />
      </svg>
      {label}
    </Link>
  );
}
