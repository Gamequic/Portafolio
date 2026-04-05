/*
 * AboutSection.jsx — Value-first "About" section.
 *
 * Desktop layout: sticky left rail + scrolling right column (GSAP ScrollTrigger).
 * Mobile layout: single column, no sticky, no minHeight override — clean stack.
 * Full EN / ES translation support.
 */

import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "../context/LanguageContext";
import { T } from "../i18n/translations";

gsap.registerPlugin(ScrollTrigger);

// ── Mobile layout — completely separate, no sticky, no minHeight magic ─────
function AboutMobile({ ta, values, lang }) {
  return (
    <section id="about" style={{ background: "var(--surface)", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
      <div style={{ maxWidth: 600, margin: "0 auto", padding: "72px 20px 64px" }}>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 40 }}
        >
          <span style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 600, color: "var(--accent2)", letterSpacing: "2px", textTransform: "uppercase", display: "block", marginBottom: 12 }}>
            {ta.eyebrow[lang]}
          </span>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(30px,8vw,44px)", fontWeight: 800, color: "#FFF", margin: "0 0 16px", letterSpacing: "-1px", lineHeight: 1.1 }}>
            {ta.headline[lang]}{" "}
            <span style={{ background: "linear-gradient(135deg,#BD34FE 0%,#64FFDA 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              {ta.headlineAccent[lang]}
            </span>
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "rgba(255,255,255,0.45)", lineHeight: 1.7, margin: 0 }}>
            {ta.subtitle[lang]}
          </p>
        </motion.div>

        {/* Personal info card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 18, padding: "24px 20px", marginBottom: 40 }}
        >
          <div style={{ width: 4, height: 48, background: "linear-gradient(180deg,#BD34FE,#64FFDA)", borderRadius: 2, marginBottom: 20 }} />
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 800, color: "#FFF", margin: "0 0 12px", letterSpacing: "-0.5px", lineHeight: 1.15 }}>
            {ta.railHeadline[lang]}
          </h3>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.7, color: "rgba(255,255,255,0.45)", margin: "0 0 24px" }}>
            {ta.railBody[lang]}
          </p>

          {/* Quick stats */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { label: ta.statLabels.basedIn[lang],      value: ta.statValues.location[lang] },
              { label: ta.statLabels.languages[lang],    value: ta.statValues.langs[lang]    },
              { label: ta.statLabels.availability[lang], value: ta.statValues.avail[lang]    },
            ].map((item) => (
              <div key={item.label} style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,0.3)", minWidth: 96 }}>{item.label}</span>
                <span style={{ fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.7)" }}>{item.value}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Value blocks stacked */}
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          {values.map((block, i) => (
            <motion.div
              key={block.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{ paddingLeft: 20, borderLeft: "2px solid rgba(255,255,255,0.08)" }}
            >
              <div style={{ fontSize: 32, marginBottom: 12, lineHeight: 1 }}>{block.emoji}</div>
              <h4 style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 700, color: "#FFF", margin: "0 0 10px", letterSpacing: "-0.4px" }}>{block.title}</h4>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.7, color: "rgba(255,255,255,0.5)", margin: 0 }}>{block.body}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

// ── Desktop layout — sticky rail + scroll ─────────────────────────────────
function AboutDesktop({ ta, values, lang }) {
  const containerRef = useRef(null);
  const railRef      = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: () => `${containerRef.current.offsetHeight - window.innerHeight * 1.5}px`,
        scrub: true,
        pin: railRef.current,
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" style={{ background: "var(--surface)", borderTop: "1px solid rgba(255,255,255,0.04)" }}>

      {/* Section header */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 40px 0" }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ marginBottom: 72 }}>
          <span style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 600, color: "var(--accent2)", letterSpacing: "2px", textTransform: "uppercase", display: "block", marginBottom: 12 }}>
            {ta.eyebrow[lang]}
          </span>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px,5vw,56px)", fontWeight: 800, color: "#FFF", margin: "0 0 16px", letterSpacing: "-1.5px", lineHeight: 1.1, maxWidth: 640 }}>
            {ta.headline[lang]}{" "}
            <span style={{ background: "linear-gradient(135deg,#BD34FE 0%,#64FFDA 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              {ta.headlineAccent[lang]}
            </span>
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 17, color: "rgba(255,255,255,0.45)", maxWidth: 560, lineHeight: 1.7, margin: 0 }}>{ta.subtitle[lang]}</p>
        </motion.div>
      </div>

      {/* ── Two-column layout ── */}
      <div
        ref={containerRef}
        style={{ position: "relative", minHeight: "280vh", display: "grid", gridTemplateColumns: "1fr 1fr", maxWidth: 1200, margin: "0 auto", padding: "0 40px", gap: 48 }}
      >
        {/* Sticky left rail */}
        <div ref={railRef} style={{ position: "sticky", top: 0, height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", paddingRight: 48 }}>
          <div style={{ width: 4, height: 64, background: "linear-gradient(180deg,#BD34FE,#64FFDA)", borderRadius: 2, marginBottom: 24 }} />
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px,4vw,44px)", fontWeight: 800, color: "#FFF", margin: "0 0 24px", letterSpacing: "-1px", lineHeight: 1.1 }}>
            {ta.railHeadline[lang]}
          </h3>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.7, color: "rgba(255,255,255,0.45)", margin: "0 0 32px" }}>{ta.railBody[lang]}</p>

          {/* Quick stats */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { label: ta.statLabels.basedIn[lang],      value: ta.statValues.location[lang] },
              { label: ta.statLabels.languages[lang],    value: ta.statValues.langs[lang]    },
              { label: ta.statLabels.availability[lang], value: ta.statValues.avail[lang]    },
            ].map((item) => (
              <div key={item.label} style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,0.3)", minWidth: 90 }}>{item.label}</span>
                <span style={{ fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.7)" }}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Scrolling right column — value blocks */}
        <div style={{ paddingTop: "15vh", paddingBottom: "20vh" }}>
          {values.map((block, i) => (
            <motion.div
              key={block.title}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{ marginBottom: "30vh", paddingLeft: 24, borderLeft: "2px solid rgba(255,255,255,0.07)" }}
            >
              <div style={{ fontSize: 36, marginBottom: 16, lineHeight: 1 }}>{block.emoji}</div>
              <h4 style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 700, color: "#FFF", margin: "0 0 14px", letterSpacing: "-0.5px" }}>{block.title}</h4>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.75, color: "rgba(255,255,255,0.5)", margin: 0, maxWidth: 420 }}>{block.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Root export — chooses layout based on isMobile ────────────────────────
export default function AboutSection({ isMobile }) {
  const { lang } = useLanguage();
  const ta       = T.about;
  const values   = ta.values[lang];

  if (isMobile) return <AboutMobile ta={ta} values={values} lang={lang} />;
  return <AboutDesktop ta={ta} values={values} lang={lang} />;
}
