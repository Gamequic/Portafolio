/*
 * HeroSection.jsx — Full-viewport hero.
 *
 * Features:
 *  - Staggered word reveal headline (Framer Motion)
 *  - Typewriter subtitle cycling through value propositions
 *  - Primary + secondary CTA buttons
 *  - Animated grid background + parallax orbs (GSAP)
 *  - Lenis smooth scroll initialization
 *  - Full EN / ES translation support
 */

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import { useLanguage } from "../context/LanguageContext";
import { T } from "../i18n/translations";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection({ isMobile }) {
  const { lang } = useLanguage();
  const [valueIndex, setValueIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const heroRef = useRef(null);
  const lenisRef = useRef(null);

  const valueProps = T.hero.valueProps[lang];

  // ── Typewriter effect ──
  useEffect(() => {
    // Reset when language changes
    setValueIndex(0);
    setDisplayText("");
    setIsDeleting(false);
  }, [lang]);

  useEffect(() => {
    const current = valueProps[valueIndex];
    let timeout;
    if (!isDeleting && displayText.length < current.length) {
      timeout = setTimeout(() => setDisplayText(current.slice(0, displayText.length + 1)), 60);
    } else if (!isDeleting && displayText.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => setDisplayText(current.slice(0, displayText.length - 1)), 35);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setValueIndex((prev) => (prev + 1) % valueProps.length);
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, valueIndex, valueProps]);

  // ── Lenis smooth scroll + GSAP ──
  useEffect(() => {
    const lenis = new Lenis({ smoothWheel: true });
    lenisRef.current = lenis;
    window.__lenis = lenis;

    // Sync Lenis with GSAP's ticker so both run on the same RAF cycle.
    // This prevents scrub animations from reading a stale scroll position.
    lenis.on("scroll", ScrollTrigger.update);
    const ticker = (time) => { lenis.raf(time * 1000); };
    gsap.ticker.add(ticker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.off("scroll", ScrollTrigger.update);
      gsap.ticker.remove(ticker);
      lenis.destroy();
      lenisRef.current = null;
      window.__lenis = null;
    };
  }, []);

  // ── Parallax orbs ──
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".hero-orb-1", { y: -120, scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: 1.5 } });
      gsap.to(".hero-orb-2", { y: -60,  scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: 2 } });
    });
    return () => ctx.revert();
  }, []);

  const scrollToSection = (id, label) => {
    if (window.gtag) window.gtag("event", "hero_cta_" + label, { event_category: "engagement", value: 1 });
    const el = document.getElementById(id);
    if (!el) return;
    if (lenisRef.current) {
      lenisRef.current.scrollTo(el);
    } else {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Stagger variants for headline words
  const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } } };
  const wordVariants = {
    hidden:  { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  const headlineLines  = T.hero.headlineLines[lang];
  const headlineAccent = T.hero.headlineAccent[lang];

  return (
    <section
      id="hero"
      ref={heroRef}
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        padding: isMobile ? "144px 24px 60px" : "164px 24px 60px",
      }}
    >
      {/* Animated grid background */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(rgba(100,255,218,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(100,255,218,0.04) 1px,transparent 1px)`, backgroundSize: "60px 60px", pointerEvents: "none" }} />

      {/* Gradient vignette */}
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 50% 40%,rgba(100,255,218,0.06) 0%,transparent 70%)", pointerEvents: "none" }} />

      {/* Orb 1 — teal */}
      <div className="hero-orb-1" style={{ position: "absolute", width: isMobile ? 300 : 500, height: isMobile ? 300 : 500, borderRadius: "50%", background: "radial-gradient(circle,rgba(100,255,218,0.12) 0%,transparent 70%)", top: "10%", left: "10%", pointerEvents: "none" }} />

      {/* Orb 2 — purple */}
      <div className="hero-orb-2" style={{ position: "absolute", width: isMobile ? 250 : 400, height: isMobile ? 250 : 400, borderRadius: "50%", background: "radial-gradient(circle,rgba(189,52,254,0.10) 0%,transparent 70%)", bottom: "15%", right: "5%", pointerEvents: "none" }} />

      {/* ── Main content ── */}
      <div style={{ position: "relative", zIndex: 10, textAlign: "center", maxWidth: "min(1300px, 92vw)", width: "100%" }}>

        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(100,255,218,0.08)", border: "1px solid rgba(100,255,218,0.2)", borderRadius: 100, padding: "6px 16px", marginBottom: 28 }}
        >
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--accent)", display: "inline-block", animation: "pulse 2s infinite" }} />
          <span style={{ fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 500, color: "var(--accent)", letterSpacing: "0.8px", textTransform: "uppercase" }}>
            {T.hero.available[lang]}
          </span>
        </motion.div>

        {/* Staggered headline */}
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ fontFamily: "var(--font-display)", fontSize: isMobile ? "clamp(32px,9.5vw,52px)" : "clamp(44px,6.8vw,100px)", fontWeight: 800, lineHeight: 1.05, color: "#FFFFFF", margin: "0 0 24px", letterSpacing: isMobile ? "-1px" : "-3px" }}
        >
          {headlineLines.map((line, i) => (
            <motion.span key={i} variants={wordVariants} style={{ display: "block" }}>
              {i === headlineLines.length - 1 ? (
                <>
                  {line}{" "}
                  <span style={{ background: "linear-gradient(135deg,#64FFDA 0%,#BD34FE 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                    {headlineAccent}
                  </span>
                </>
              ) : line}
            </motion.span>
          ))}
        </motion.h1>

        {/* Typewriter subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          style={{ fontFamily: "var(--font-body)", fontSize: isMobile ? 16 : 20, fontWeight: 400, color: "rgba(255,255,255,0.55)", marginBottom: 44, minHeight: 32, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, flexWrap: "wrap", textAlign: "center" }}
        >
          <span>{T.hero.specializing[lang]}</span>
          <span style={{ color: "var(--accent)", fontWeight: 600 }}>
            {displayText}
            <span style={{ display: "inline-block", width: 2, height: "1em", background: "var(--accent)", marginLeft: 2, verticalAlign: "text-bottom", animation: "blink 1s step-end infinite" }} />
          </span>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", width: "100%" }}
        >
          <button
            onClick={() => scrollToSection("contact", "primary")}
            style={{ fontFamily: "var(--font-body)", fontSize: 16, fontWeight: 700, color: "#0A0A0F", background: "var(--accent)", border: "none", padding: isMobile ? "14px 28px" : "14px 32px", borderRadius: 12, cursor: "pointer", transition: "all 0.25s ease", flex: isMobile ? "1 1 140px" : "0 0 auto" }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(100,255,218,0.35)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
          >
            {T.hero.ctaPrimary[lang]}
          </button>
          <button
            onClick={() => scrollToSection("projects", "secondary")}
            style={{ fontFamily: "var(--font-body)", fontSize: 16, fontWeight: 600, color: "rgba(255,255,255,0.8)", background: "transparent", border: "1px solid rgba(255,255,255,0.18)", padding: isMobile ? "14px 28px" : "14px 32px", borderRadius: 12, cursor: "pointer", transition: "all 0.25s ease", flex: isMobile ? "1 1 140px" : "0 0 auto" }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(100,255,218,0.4)"; e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)"; e.currentTarget.style.color = "rgba(255,255,255,0.8)"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            {T.hero.ctaSecondary[lang]}
          </button>
        </motion.div>

        {/* Social proof stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          style={{ display: "flex", justifyContent: "center", gap: isMobile ? 24 : 48, marginTop: 64, paddingTop: 40, borderTop: "1px solid rgba(255,255,255,0.06)", flexWrap: "wrap" }}
        >
          {[
            { value: "4+",   label: T.hero.stats.projects[lang]     },
            { value: "100%", label: T.hero.stats.satisfaction[lang]  },
            { value: "2+",   label: T.hero.stats.experience[lang]    },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: isMobile ? 28 : 36, fontWeight: 800, color: "var(--accent)", lineHeight: 1, marginBottom: 6 }}>{stat.value}</div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,0.4)", letterSpacing: "0.5px" }}>{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, cursor: "pointer" }}
        onClick={() => scrollToSection("projects", "scroll_indicator")}
      >
        <span style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "rgba(255,255,255,0.3)", letterSpacing: "1.5px", textTransform: "uppercase" }}>
          {T.hero.scroll[lang]}
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          style={{ width: 24, height: 40, border: "1.5px solid rgba(255,255,255,0.15)", borderRadius: 12, display: "flex", justifyContent: "center", paddingTop: 6 }}
        >
          <div style={{ width: 4, height: 8, background: "var(--accent)", borderRadius: 2 }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
