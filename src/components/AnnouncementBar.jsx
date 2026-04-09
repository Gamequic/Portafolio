/*
 * AnnouncementBar.jsx — Fixed top strip with primary contact CTA.
 *
 * Sits above the NavBar (z-index 101). Height: 44px.
 * Scrolls user to #contact when clicked.
 */

import { useLanguage } from "../context/LanguageContext";
import { T } from "../i18n/translations";

export const BAR_HEIGHT = 44;

function scrollToContact(e) {
  e.preventDefault();
  const el = document.getElementById("contact");
  if (!el) return;
  if (window.__lenis) window.__lenis.scrollTo(el);
  else el.scrollIntoView({ behavior: "smooth" });
}

export default function AnnouncementBar() {
  const { lang } = useLanguage();

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 101,
        height: BAR_HEIGHT,
        background: "rgba(100,255,218,0.07)",
        borderBottom: "1px solid rgba(100,255,218,0.13)",
        backdropFilter: "blur(12px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 48px",
      }}
    >
      <a
        href="#contact"
        onClick={scrollToContact}
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 13,
          fontWeight: 400,
          color: "rgba(255,255,255,0.65)",
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          gap: 10,
          whiteSpace: "nowrap",
        }}
      >
        {T.announcement.text[lang]}
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 12,
            fontWeight: 700,
            color: "var(--accent)",
            background: "rgba(100,255,218,0.10)",
            border: "1px solid rgba(100,255,218,0.22)",
            borderRadius: 100,
            padding: "2px 12px",
            transition: "background 0.2s ease",
          }}
        >
          {T.announcement.cta[lang]} →
        </span>
      </a>
    </div>
  );
}
