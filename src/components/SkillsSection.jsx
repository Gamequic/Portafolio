/*
 * SkillsSection.jsx — Tech stack showcase.
 *
 * Collapsed by default — audience is B2B (non-technical).
 * A "for recruiters" toggle expands the full grid.
 *
 * Skill badge names are the same in both languages (they are proper nouns).
 * Section header text is translated.
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { T } from "../i18n/translations";

// Skill names are tech proper nouns — same in both languages
const SKILL_CATEGORIES = [
  { category: { en: "Frontend",       es: "Frontend"       }, color: "#64FFDA", skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "GSAP", "TypeScript"] },
  { category: { en: "Backend",        es: "Backend"        }, color: "#BD34FE", skills: ["Node.js", "Express", "REST APIs", "JWT Auth", "WebSockets", "GraphQL"]    },
  { category: { en: "Databases",      es: "Bases de Datos" }, color: "#FFBE00", skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Supabase", "Firebase"]         },
  { category: { en: "DevOps & Tools", es: "DevOps y Herramientas" }, color: "#FF6B6B", skills: ["Docker", "GitHub Actions", "Linux / VPS", "Nginx", "Git", "Vite"] },
];

export default function SkillsSection({ isMobile }) {
  const { lang } = useLanguage();
  const ts = T.skills;
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="skills" style={{ background: "var(--bg)", padding: isMobile ? "72px 20px" : "120px 40px", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ marginBottom: isMobile ? 32 : 48, textAlign: "center" }}>
          <span style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 600, color: "#FFBE00", letterSpacing: "2px", textTransform: "uppercase", display: "block", marginBottom: 12 }}>{ts.eyebrow[lang]}</span>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: isMobile ? "clamp(28px,8vw,40px)" : "clamp(32px,5vw,52px)", fontWeight: 800, color: "#FFF", margin: "0 0 16px", letterSpacing: "-1.5px" }}>{ts.headline[lang]}</h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: isMobile ? 15 : 17, color: "rgba(255,255,255,0.4)", maxWidth: 480, lineHeight: 1.7, margin: "0 auto 28px" }}>{ts.subtitle[lang]}</p>

          {/* Recruiter toggle */}
          <button
            onClick={() => setExpanded(v => !v)}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 13,
              fontWeight: 600,
              color: expanded ? "#FFBE00" : "rgba(255,255,255,0.4)",
              background: expanded ? "rgba(255,190,0,0.06)" : "transparent",
              border: `1px solid ${expanded ? "rgba(255,190,0,0.3)" : "rgba(255,255,255,0.12)"}`,
              padding: "9px 20px",
              borderRadius: 100,
              cursor: "pointer",
              transition: "all 0.25s ease",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(255,190,0,0.4)"; e.currentTarget.style.color = "#FFBE00"; }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = expanded ? "rgba(255,190,0,0.3)" : "rgba(255,255,255,0.12)";
              e.currentTarget.style.color = expanded ? "#FFBE00" : "rgba(255,255,255,0.4)";
            }}
          >
            {expanded ? ts.hideStack[lang] : ts.showStack[lang]}
          </button>
        </motion.div>

        {/* Category cards — collapsible */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              key="skills-grid"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              style={{ overflow: "hidden" }}
            >
              <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit,minmax(260px,1fr))", gap: isMobile ? 16 : 24, paddingTop: 8 }}>
                {SKILL_CATEGORIES.map((cat, ci) => (
                  <motion.div
                    key={cat.category.en}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: ci * 0.07 }}
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 20, padding: isMobile ? 20 : 28, transition: "border-color 0.3s ease" }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = cat.color + "30"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; }}
                  >
                    {/* Category header */}
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                      <div style={{ width: 8, height: 8, borderRadius: "50%", background: cat.color, flexShrink: 0 }} />
                      <span style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700, color: "#FFF", letterSpacing: "-0.3px" }}>{cat.category[lang]}</span>
                    </div>

                    {/* Skill badges */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                      {cat.skills.map((skill, si) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.85 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: ci * 0.07 + si * 0.04 }}
                          style={{ fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 500, color: cat.color, background: cat.color + "10", border: `1px solid ${cat.color}20`, padding: "6px 14px", borderRadius: 8, cursor: "default", transition: "all 0.2s ease" }}
                          onMouseEnter={(e) => { e.currentTarget.style.background = cat.color + "20"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                          onMouseLeave={(e) => { e.currentTarget.style.background = cat.color + "10"; e.currentTarget.style.transform = "translateY(0)"; }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
