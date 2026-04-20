/*
 * NavBar.jsx — Sticky navigation bar.
 *
 * Behavior:
 *  - Hides when scrolling DOWN past 50 px, reappears on scroll UP
 *  - Glass-morphism background kicks in after 20 px of scroll
 *  - Desktop: horizontal links + language toggle + CTA button
 *  - Mobile: hamburger → animated dropdown with language toggle
 *
 * Z-INDEX: 100 — below LoadingScreen (1000), above all page content.
 */

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { T } from "../i18n/translations";

function scrollTo(e, href, label) {
  e.preventDefault();
  if (window.gtag) window.gtag("event", "nav_click_" + (label || href.replace("#", "")), { event_category: "navigation", value: 1 });
  const el = document.querySelector(href);
  if (!el) return;
  if (window.__lenis) {
    window.__lenis.scrollTo(el);
  } else {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// Small EN / ES pill toggle
function LangToggle({ minimal = false }) {
  const { lang, setLang } = useLanguage();
  const next = lang === "en" ? "es" : "en";

  return (
    <button
      onClick={() => setLang(next)}
      title={lang === "en" ? "Cambiar a Español" : "Switch to English"}
      style={{
        fontFamily: "var(--font-body)",
        fontSize:   minimal ? 13 : 13,
        fontWeight: 700,
        letterSpacing: "0.5px",
        color:     "var(--accent)",
        background: "rgba(100, 255, 218, 0.08)",
        border:    "1px solid rgba(100, 255, 218, 0.25)",
        borderRadius: 100,
        padding:   minimal ? "5px 12px" : "5px 14px",
        cursor:    "pointer",
        transition: "all 0.2s ease",
        display:   "flex",
        alignItems: "center",
        gap:        5,
        whiteSpace: "nowrap",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "rgba(100, 255, 218, 0.16)";
        e.currentTarget.style.borderColor = "rgba(100, 255, 218, 0.5)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "rgba(100, 255, 218, 0.08)";
        e.currentTarget.style.borderColor = "rgba(100, 255, 218, 0.25)";
      }}
    >
      {/* Globe icon */}
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
      {next.toUpperCase()}
    </button>
  );
}

export default function NavBar() {
  const { lang } = useLanguage();
  const [visible,  setVisible]  = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(0);

  const NAV_LINKS = [
    { label: T.nav.projects[lang], href: "#projects" },
    { label: T.nav.about[lang],    href: "#about"    },
    { label: T.nav.skills[lang],   href: "#skills"   },
    { label: T.nav.contact[lang],  href: "#contact"  },
  ];

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y < 50)                      setVisible(true);
      else if (y > lastY.current + 5)  { setVisible(false); setMenuOpen(false); }
      else if (y < lastY.current - 5)    setVisible(true);
      setScrolled(y > 20);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0,   opacity: 1 }}
          exit={{   y: -80, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          style={{
            position:   "fixed",
            top: 44, left: 0, right: 0,
            zIndex:     100,
            background: scrolled ? "rgba(10,10,15,0.85)" : "transparent",
            backdropFilter: scrolled ? "blur(20px)" : "none",
            borderBottom:   scrolled ? "1px solid rgba(100,255,218,0.08)" : "none",
            transition: "background 0.4s ease, border 0.4s ease",
          }}
        >
          {/* ── Inner container ── */}
          <div
            style={{
              maxWidth: 1200,
              margin:   "0 auto",
              padding:  "0 24px",
              height:   64,
              display:  "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* Logo */}
            <a href="#hero" onClick={(e) => scrollTo(e, "#hero", "logo")}>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 20, color: "#fff", letterSpacing: "-0.5px" }}>
                Demian <span style={{ color: "var(--accent)" }}>Calleros</span>
              </span>
            </a>

            {/* Desktop links + lang toggle + CTA */}
            <div className="nav-desktop-links" style={{ display: "flex", gap: 32, alignItems: "center" }}>
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  style={{ fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 500, color: "rgba(255,255,255,0.65)", letterSpacing: "0.5px", transition: "color 0.2s ease" }}
                  onMouseEnter={(e) => (e.target.style.color = "var(--accent)")}
                  onMouseLeave={(e) => (e.target.style.color = "rgba(255,255,255,0.65)")}
                >
                  {link.label}
                </a>
              ))}

              {/* Language toggle */}
              <LangToggle />

              {/* CTA */}
              <a
                href="#contact"
                onClick={(e) => scrollTo(e, "#contact", "nav_cta_start_project")}
                style={{ fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 600, color: "#0A0A0F", background: "var(--accent)", padding: "8px 20px", borderRadius: 8, transition: "all 0.2s ease" }}
                onMouseEnter={(e) => { e.target.style.background = "#4DFFCE"; e.target.style.transform = "translateY(-1px)"; }}
                onMouseLeave={(e) => { e.target.style.background = "var(--accent)"; e.target.style.transform = "translateY(0)"; }}
              >
                {T.nav.startProject[lang]}
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="nav-hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ background: "none", border: "none", cursor: "pointer", padding: 8, display: "none", flexDirection: "column", gap: 5 }}
              aria-label="Toggle menu"
            >
              {[
                menuOpen ? "rotate(45deg) translate(5px, 5px)"   : "none",
                null,
                menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
              ].map((transform, i) => (
                <span
                  key={i}
                  style={{
                    display: "block", width: 24, height: 2, background: "#fff", borderRadius: 2,
                    transform: i === 1 ? undefined : transform,
                    opacity:   i === 1 ? (menuOpen ? 0 : 1) : 1,
                    transition: "all 0.3s ease",
                  }}
                />
              ))}
            </button>
          </div>

          {/* Mobile dropdown */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{   opacity: 0, height: 0 }}
                style={{ background: "rgba(10,10,15,0.97)", borderTop: "1px solid rgba(100,255,218,0.1)", overflow: "hidden" }}
              >
                <div style={{ padding: "16px 24px 24px", display: "flex", flexDirection: "column", gap: 16 }}>
                  {NAV_LINKS.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => { scrollTo(e, link.href); setMenuOpen(false); }}
                      style={{ fontFamily: "var(--font-body)", fontSize: 16, fontWeight: 500, color: "rgba(255,255,255,0.8)" }}
                    >
                      {link.label}
                    </a>
                  ))}
                  {/* Language toggle in mobile menu */}
                  <div>
                    <LangToggle minimal />
                  </div>
                  <a
                    href="#contact"
                    onClick={(e) => { scrollTo(e, "#contact", "nav_cta_start_project"); setMenuOpen(false); }}
                    style={{ fontFamily: "var(--font-body)", fontSize: 16, fontWeight: 600, color: "#0A0A0F", background: "var(--accent)", padding: "12px 20px", borderRadius: 8, textAlign: "center", marginTop: 8 }}
                  >
                    {T.nav.startProject[lang]}
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
