/*
 * ProjectsSection.jsx — Portfolio showcase.
 *
 * Layout:
 *  - Featured card (Anson General) — full-width hero card
 *  - 2 standard project cards in a responsive flex row
 *    (Líderes del Cambio hidden — see PROJECTS_META comment below)
 *
 * Tech badges are hidden by default (B2B audience).
 * A small toggle lets recruiters expand the full stack per project.
 *
 * Animations: GSAP scroll-triggered slide-in (desktop only).
 * Translations: all user-facing text from T.projects via useLanguage().
 */

import { useRef, useLayoutEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "../context/LanguageContext";
import { T } from "../i18n/translations";

gsap.registerPlugin(ScrollTrigger);

// Static metadata (non-text) for the grid cards — text comes from T.projects.cardText
// NOTE: indices must stay in sync with cardText arrays in translations.js
const PROJECTS_META = [
  { tech: ["React", "Golang", "MySQL", "Docker", "Redis"],               image: "/Proyects/IMSS.svg",            url: "https://github.com/Gamequic/LivePreview",             color: "#BD34FE" },
  // ── TEMPORARILY HIDDEN — Líderes del Cambio ───────────────────────────────
  // { tech: ["React", "Tailwind CSS", "Vite", "Framer Motion"],              image: "/Proyects/LideresDelCambio.png", url: "https://LideresDelCambio.org",                        color: "#FFBE00" },
  // ─────────────────────────────────────────────────────────────────────────
  { tech: ["React", "Node.js", "MySQL", "Golang", "JWT Auth"],            image: "/Proyects/ArenasCRM.png",        url: "https://github.com/Gamequic/ArenasCRM_Front",         color: "#FF6B6B" },
];

const FEATURED_META = {
  tech:      ["Flutter", "Dart", "Python", "FastAPI", "PostgreSQL", "Redis", "Docker", "JWT Auth"],
  image:     "/assets/AnsonGeneral.png",
  url:       null,
  isPrivate: true,
  color:     "#64FFDA",
};

// ── Tech toggle button ────────────────────────────────────────────────────────
function TechToggle({ show, onToggle, color, lang }) {
  return (
    <button
      onClick={(e) => { e.stopPropagation(); onToggle(); }}
      style={{
        fontFamily: "var(--font-body)",
        fontSize: 12,
        fontWeight: 600,
        color: show ? color : "rgba(255,255,255,0.3)",
        background: "transparent",
        border: `1px solid ${show ? color + "40" : "rgba(255,255,255,0.1)"}`,
        padding: "5px 12px",
        borderRadius: 6,
        cursor: "pointer",
        transition: "all 0.2s ease",
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        marginBottom: show ? 0 : 20,
      }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = color + "60"; e.currentTarget.style.color = color; }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = show ? color + "40" : "rgba(255,255,255,0.1)";
        e.currentTarget.style.color = show ? color : "rgba(255,255,255,0.3)";
      }}
    >
      {show ? T.projects.hideTech[lang] : T.projects.showTech[lang]}
    </button>
  );
}

// ── Single grid card ──────────────────────────────────────────────────────────
function ProjectCard({ project, meta, cardRef }) {
  const { lang } = useLanguage();
  const [showTech, setShowTech] = useState(false);

  const handleClick = () => {
    if (!meta.url) return;
    if (window.gtag) window.gtag("event", "project_click_" + project.name, { event_category: "engagement", value: 1 });
    setTimeout(() => window.open(meta.url, "_blank", "noopener,noreferrer"), 150);
  };

  return (
    <div
      ref={cardRef}
      onClick={meta.url ? handleClick : undefined}
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: 20,
        overflow: "hidden",
        cursor: meta.url ? "pointer" : "default",
        transition: "all 0.35s ease",
        minWidth: 300,
        flex: 1,
      }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-8px)"; e.currentTarget.style.borderColor = meta.color + "40"; e.currentTarget.style.boxShadow = `0 24px 48px rgba(0,0,0,0.4),0 0 0 1px ${meta.color}20`; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; e.currentTarget.style.boxShadow = "none"; }}
    >
      {/* Image */}
      <div style={{ width: "100%", height: 200, overflow: "hidden", background: "#0D0D14", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
        <img src={meta.image} alt={project.name} style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.85 }} onError={(e) => { e.target.style.display = "none"; }} />
        <div style={{ position: "absolute", inset: 0, background: `linear-gradient(135deg,${meta.color}15 0%,transparent 60%)` }} />
      </div>

      {/* Body */}
      <div style={{ padding: 24 }}>
        <div style={{ width: 32, height: 3, background: meta.color, borderRadius: 2, marginBottom: 14 }} />
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 700, color: "#FFF", margin: "0 0 8px", letterSpacing: "-0.3px" }}>{project.name}</h3>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 500, color: meta.color, margin: "0 0 12px", letterSpacing: "0.3px" }}>{project.tagline}</p>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.65, color: "rgba(255,255,255,0.5)", margin: "0 0 20px" }}>{project.description}</p>

        {/* Tech toggle — hidden by default for B2B, expandable for recruiters */}
        <TechToggle show={showTech} onToggle={() => setShowTech(v => !v)} color={meta.color} lang={lang} />

        <AnimatePresence>
          {showTech && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              style={{ overflow: "hidden" }}
            >
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 12, marginBottom: 20 }}>
                {meta.tech.map((t) => (
                  <span key={t} style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 600, color: meta.color, background: meta.color + "12", border: `1px solid ${meta.color}25`, padding: "4px 10px", borderRadius: 6 }}>{t}</span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Link or private label */}
        {meta.url
          ? <span style={{ fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600, color: meta.color, display: "flex", alignItems: "center", gap: 6 }}>{T.projects.viewProject[lang]}</span>
          : <span style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.3)", display: "flex", alignItems: "center", gap: 6 }}>{T.projects.privateNDA[lang]}</span>
        }
      </div>
    </div>
  );
}

// ── Featured card (Anson General) ─────────────────────────────────────────────
function FeaturedCard({ isMobile, lang }) {
  const [showTech, setShowTech] = useState(false);

  return (
    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ marginBottom: 32 }}>
      <div style={{ position: "relative", background: "linear-gradient(135deg,rgba(100,255,218,0.06) 0%,rgba(189,52,254,0.06) 100%)", border: "1px solid rgba(100,255,218,0.2)", borderRadius: 24, overflow: "hidden", padding: isMobile ? "28px 20px" : "48px 56px" }}>

        {/* Featured badge */}
        {isMobile ? (
          <div style={{ display: "inline-flex", marginBottom: 20, background: "rgba(100,255,218,0.12)", border: "1px solid rgba(100,255,218,0.3)", borderRadius: 100, padding: "5px 14px", fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 700, color: "var(--accent)", letterSpacing: "1px", textTransform: "uppercase" }}>
            {T.projects.featured[lang]}
          </div>
        ) : (
          <div style={{ position: "absolute", top: 24, right: 24, background: "rgba(100,255,218,0.12)", border: "1px solid rgba(100,255,218,0.3)", borderRadius: 100, padding: "6px 16px", fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 700, color: "var(--accent)", letterSpacing: "1px", textTransform: "uppercase" }}>
            {T.projects.featured[lang]}
          </div>
        )}

        {/* Decorative glow */}
        <div style={{ position: "absolute", top: -80, right: -80, width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle,rgba(100,255,218,0.08) 0%,transparent 70%)", pointerEvents: "none" }} />

        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 48, alignItems: "center" }}>

          {/* Left: content */}
          <div>
            <div style={{ width: 40, height: 4, background: "linear-gradient(90deg,#64FFDA,#BD34FE)", borderRadius: 2, marginBottom: 20 }} />
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: isMobile ? 28 : 40, fontWeight: 800, color: "#FFF", margin: "0 0 8px", letterSpacing: "-1px", lineHeight: 1.1 }}>Anson General</h3>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 15, fontWeight: 600, color: "var(--accent)", margin: "0 0 20px" }}>{T.projects.ansonTagline[lang]}</p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.7, color: "rgba(255,255,255,0.6)", margin: "0 0 28px" }}>{T.projects.ansonDesc[lang]}</p>

            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px" }}>
              {T.projects.ansonHighlights[lang].map((h) => (
                <li key={h} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 10, fontFamily: "var(--font-body)", fontSize: 14, color: "rgba(255,255,255,0.65)" }}>
                  <span style={{ color: "var(--accent)", flexShrink: 0, marginTop: 1 }}>✓</span>{h}
                </li>
              ))}
            </ul>

            {/* Tech toggle — collapsed by default */}
            <TechToggle show={showTech} onToggle={() => setShowTech(v => !v)} color="var(--accent)" lang={lang} />

            <AnimatePresence>
              {showTech && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25 }}
                  style={{ overflow: "hidden" }}
                >
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 12 }}>
                    {FEATURED_META.tech.map((t) => (
                      <span key={t} style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 600, color: "var(--accent)", background: "rgba(100,255,218,0.08)", border: "1px solid rgba(100,255,218,0.2)", padding: "5px 12px", borderRadius: 6 }}>{t}</span>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right: preview image */}
          <div style={{ background: "#0D0D14", borderRadius: 16, overflow: "hidden", border: "1px solid rgba(100,255,218,0.1)", minHeight: 280, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
            <img
              src={FEATURED_META.image}
              alt="Anson General Platform"
              style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.9 }}
              onError={(e) => {
                e.target.parentNode.innerHTML = `<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:280px;gap:16px;padding:24px;text-align:center;"><div style="font-size:48px">🏗️</div><p style="font-family:'DM Sans',sans-serif;font-size:14px;color:rgba(255,255,255,0.4);line-height:1.5;margin:0">Screenshot goes here<br/>/public/assets/preview.png</p></div>`;
              }}
            />
            <div style={{ position: "absolute", bottom: 16, right: 16, background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, padding: "6px 12px", fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.5)" }}>
              {T.projects.privateBadge[lang]}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ── Main section ──────────────────────────────────────────────────────────────
export default function ProjectsSection({ isMobile }) {
  const { lang } = useLanguage();
  const sectionRef = useRef(null);
  const cardsRef   = useRef([]);

  // GSAP: cards slide in from the right on scroll (desktop only)
  useLayoutEffect(() => {
    if (isMobile) return;
    const ctx = gsap.context(() => {
      cardsRef.current.filter(Boolean).forEach((card, i) => {
        gsap.fromTo(card, { x: 80, opacity: 0 }, {
          x: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: i * 0.1,
          scrollTrigger: { trigger: card, start: "top 88%", end: "top 60%", toggleActions: "play none none reverse" },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, [isMobile]);

  const cardText = T.projects.cardText[lang];

  return (
    <section id="projects" ref={sectionRef} style={{ background: "var(--bg)", padding: isMobile ? "80px 20px" : "120px 40px", maxWidth: "100vw", overflow: "hidden" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Section header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ marginBottom: isMobile ? 48 : 72 }}>
          <span style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 600, color: "var(--accent)", letterSpacing: "2px", textTransform: "uppercase", display: "block", marginBottom: 12 }}>{T.projects.eyebrow[lang]}</span>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: isMobile ? 36 : 56, fontWeight: 800, color: "#FFF", margin: "0 0 16px", letterSpacing: "-1.5px", lineHeight: 1.1 }}>
            {T.projects.headline[lang]}{" "}
            <span style={{ background: "linear-gradient(135deg,#64FFDA 0%,#BD34FE 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              {T.projects.headlineAccent[lang]}
            </span>
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 17, color: "rgba(255,255,255,0.45)", maxWidth: 520, lineHeight: 1.7, margin: 0 }}>{T.projects.subtitle[lang]}</p>
        </motion.div>

        {/* ── Featured: Anson General ── */}
        <FeaturedCard isMobile={isMobile} lang={lang} />

        {/* ── Grid cards ── */}
        <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: 24, flexWrap: isMobile ? "wrap" : "nowrap" }}>
          {cardText.map((text, i) => (
            <ProjectCard
              key={text.name}
              project={text}
              meta={PROJECTS_META[i]}
              cardRef={(el) => (cardsRef.current[i] = el)}
            />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ textAlign: "center", marginTop: 56 }}>
          <a
            href="https://github.com/Gamequic"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => { if (window.gtag) window.gtag("event", "projects_github_cta", { event_category: "engagement", value: 1 }); }}
            style={{ fontFamily: "var(--font-body)", fontSize: 15, fontWeight: 600, color: "rgba(255,255,255,0.5)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8, border: "1px solid rgba(255,255,255,0.1)", padding: "12px 28px", borderRadius: 100, transition: "all 0.25s ease" }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(100,255,218,0.3)"; e.currentTarget.style.color = "var(--accent)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "rgba(255,255,255,0.5)"; }}
          >
            {T.projects.githubCTA[lang]}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
