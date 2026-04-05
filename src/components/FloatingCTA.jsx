/*
 * FloatingCTA.jsx — Persistent floating action button (bottom-right).
 *
 * Primary: WhatsApp button.
 * Secondary: expandable menu with Call + Email options.
 * Full EN / ES translation support.
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { T } from "../i18n/translations";

const WHATSAPP_URL =
  "https://wa.me/19153046304?text=Hi%20Demian%2C%20I%20saw%20your%20portfolio%20and%20I%27d%20like%20to%20start%20a%20project.";

function trackClick(label) {
  if (window.gtag) window.gtag("event", "floating_cta_" + label.toLowerCase(), { event_category: "engagement", value: 1 });
}

export default function FloatingCTA() {
  const { lang }   = useLanguage();
  const tc         = T.cta;
  const [expanded, setExpanded] = useState(false);

  const secondaryOptions = [
    { icon: "📞", labelKey: "callUS", href: "tel:+19153046304",               color: "#64FFDA" },
    { icon: "✉️", labelKey: "email",  href: "mailto:demiancalleros1@gmail.com", color: "#FFBE00" },
  ];

  return (
    <div style={{ position: "fixed", bottom: 24, right: 24, zIndex: 50, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 10 }}>

      {/* Secondary options — appear when expanded */}
      <AnimatePresence>
        {expanded && secondaryOptions.map((opt, i) => (
          <motion.a
            key={opt.labelKey}
            href={opt.href}
            onClick={() => trackClick(opt.labelKey)}
            initial={{ opacity: 0, y: 20, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{   opacity: 0, y: 20, scale: 0.85 }}
            transition={{ delay: i * 0.07 }}
            style={{ display: "flex", alignItems: "center", gap: 10, background: "rgba(15,15,25,0.95)", backdropFilter: "blur(20px)", border: `1px solid ${opt.color}30`, borderRadius: 100, padding: "10px 18px", textDecoration: "none", cursor: "pointer" }}
          >
            <span style={{ fontSize: 16 }}>{opt.icon}</span>
            <span style={{ fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 700, color: opt.color, whiteSpace: "nowrap" }}>
              {tc[opt.labelKey][lang]}
            </span>
          </motion.a>
        ))}
      </AnimatePresence>

      {/* Primary row: expand toggle + WhatsApp button */}
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        {/* Expand/collapse toggle */}
        <motion.button
          onClick={() => setExpanded((v) => !v)}
          whileHover={{ scale: 1.1 }}
          whileTap={{   scale: 0.95 }}
          aria-label="More contact options"
          style={{ width: 40, height: 40, borderRadius: "50%", background: "rgba(15,15,25,0.9)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.1)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.6)", fontSize: 18 }}
        >
          {expanded ? "✕" : "⋯"}
        </motion.button>

        {/* WhatsApp CTA */}
        <motion.a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackClick("whatsapp")}
          whileHover={{ scale: 1.03 }}
          whileTap={{   scale: 0.97 }}
          style={{ display: "flex", alignItems: "center", gap: 10, background: "#25D366", padding: "12px 22px", borderRadius: 100, textDecoration: "none", boxShadow: "0 8px 32px rgba(37,211,102,0.35)", cursor: "pointer" }}
        >
          {/* WhatsApp SVG */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          <span style={{ fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 700, color: "#FFF", whiteSpace: "nowrap" }}>
            {tc.whatsapp[lang]}
          </span>
        </motion.a>
      </div>
    </div>
  );
}
