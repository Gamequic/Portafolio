/**
 * HeroSection.jsx — The first section users see.
 *
 * Features:
 *  - Animated headline using Framer Motion staggered children
 *  - Typewriter-style subtitle cycling through value propositions
 *  - Two CTAs: "Start a Project" (primary) and "View My Work" (ghost)
 *  - Animated grid background + floating orbs for depth
 *  - Scroll indicator arrow at the bottom
 *  - Preserves the Lenis smooth scroll from the original
 */

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

// Value propositions that cycle in the subtitle
const VALUE_PROPS = [
  "Full-Stack Web Applications",
  "Scalable Backend Systems",
  "Modern CRM & ERP Platforms",
  "High-Converting Landing Pages",
];

export default function HeroSection({ isMobile }) {
  const [activeValue, setActiveValue] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const heroRef = useRef(null);

  // ── Typewriter effect for cycling value propositions ──
  useEffect(() => {
    const current = VALUE_PROPS[activeValue];
    let timeout;

    if (!isDeleting && displayText.length < current.length) {
      // Typing forward
      timeout = setTimeout(() => {
        setDisplayText(current.slice(0, displayText.length + 1));
      }, 60);
    } else if (!isDeleting && displayText.length === current.length) {
      // Pause at full word then start deleting
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayText.length > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setDisplayText(current.slice(0, displayText.length - 1));
      }, 35);
    } else if (isDeleting && displayText.length === 0) {
      // Move to next value prop
      setIsDeleting(false);
      setActiveValue((prev) => (prev + 1) % VALUE_PROPS.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, activeValue]);

  // ── Lenis smooth scroll + GSAP integration (preserved from original) ──
  useEffect(() => {
    const lenis = new Lenis({ smooth: true });

    function raf(time) {
      lenis.raf(time);
      ScrollTrigger.update();
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // ── Parallax on the hero orbs ──
  useEffect(() => {
    gsap.to(".hero-orb-1", {
      y: -120,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1.5,
      },
    });
    gsap.to(".hero-orb-2", {
      y: -60,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 2,
      },
    });
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  // Stagger animation variants for headline words
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
  };
  const wordVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

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
        padding: isMobile ? "100px 24px 60px" : "120px 24px 60px",
      }}
    >
      {/* ── Animated grid background ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(100, 255, 218, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(100, 255, 218, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      {/* ── Gradient vignette over grid ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(100, 255, 218, 0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* ── Floating orb 1 (teal) ── */}
      <div
        className="hero-orb-1"
        style={{
          position: "absolute",
          width: isMobile ? 300 : 500,
          height: isMobile ? 300 : 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(100, 255, 218, 0.12) 0%, transparent 70%)",
          top: "10%",
          left: "10%",
          pointerEvents: "none",
        }}
      />

      {/* ── Floating orb 2 (purple accent) ── */}
      <div
        className="hero-orb-2"
        style={{
          position: "absolute",
          width: isMobile ? 250 : 400,
          height: isMobile ? 250 : 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(189, 52, 254, 0.10) 0%, transparent 70%)",
          bottom: "15%",
          right: "5%",
          pointerEvents: "none",
        }}
      />

      {/* ── Main content ── */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          maxWidth: 900,
          width: "100%",
        }}
      >
        {/* Eyebrow label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(100, 255, 218, 0.08)",
            border: "1px solid rgba(100, 255, 218, 0.2)",
            borderRadius: 100,
            padding: "6px 16px",
            marginBottom: 28,
          }}
        >
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "#64FFDA",
              display: "inline-block",
              animation: "pulse 2s infinite",
            }}
          />
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13,
              fontWeight: 500,
              color: "#64FFDA",
              letterSpacing: "0.8px",
              textTransform: "uppercase",
            }}
          >
            Available for new projects
          </span>
        </motion.div>

        {/* Main headline — staggered word reveal */}
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: isMobile ? "clamp(36px, 10vw, 52px)" : "clamp(52px, 7vw, 88px)",
            fontWeight: 800,
            lineHeight: 1.05,
            color: "#FFFFFF",
            margin: "0 0 24px",
            letterSpacing: "-2px",
          }}
        >
          {["I build software", "that", "drives real"].map((word, i) => (
            <motion.span
              key={i}
              variants={wordVariants}
              style={{ display: "block" }}
            >
              {i === 2 ? (
                <>
                  {word}{" "}
                  <span
                    style={{
                      background: "linear-gradient(135deg, #64FFDA 0%, #BD34FE 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    business growth.
                  </span>
                </>
              ) : (
                word
              )}
            </motion.span>
          ))}
        </motion.h1>

        {/* Typewriter sub-headline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: isMobile ? 17 : 20,
            fontWeight: 400,
            color: "rgba(255,255,255,0.55)",
            marginBottom: 44,
            minHeight: 32,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
          }}
        >
          <span>Specializing in</span>
          <span style={{ color: "#64FFDA", fontWeight: 600 }}>
            {displayText}
            <span
              style={{
                display: "inline-block",
                width: 2,
                height: "1em",
                background: "#64FFDA",
                marginLeft: 2,
                verticalAlign: "text-bottom",
                animation: "blink 1s step-end infinite",
              }}
            />
          </span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {/* Primary CTA */}
          <button
            onClick={scrollToContact}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 16,
              fontWeight: 700,
              color: "#0A0A0F",
              background: "#64FFDA",
              border: "none",
              padding: "14px 32px",
              borderRadius: 12,
              cursor: "pointer",
              transition: "all 0.25s ease",
              letterSpacing: "0.2px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 12px 40px rgba(100, 255, 218, 0.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Start a Project →
          </button>

          {/* Secondary / Ghost CTA */}
          <button
            onClick={scrollToProjects}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 16,
              fontWeight: 600,
              color: "rgba(255,255,255,0.8)",
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.18)",
              padding: "14px 32px",
              borderRadius: 12,
              cursor: "pointer",
              transition: "all 0.25s ease",
              letterSpacing: "0.2px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(100, 255, 218, 0.4)";
              e.currentTarget.style.color = "#64FFDA";
              e.currentTarget.style.transform = "translateY(-3px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)";
              e.currentTarget.style.color = "rgba(255,255,255,0.8)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            View My Work
          </button>
        </motion.div>

        {/* Social proof stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: isMobile ? 24 : 48,
            marginTop: 64,
            paddingTop: 40,
            borderTop: "1px solid rgba(255,255,255,0.06)",
            flexWrap: "wrap",
          }}
        >
          {[
            { value: "4+", label: "Projects Delivered" },
            { value: "100%", label: "Client Satisfaction" },
            { value: "2+", label: "Years Experience" },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: isMobile ? 28 : 36,
                  fontWeight: 800,
                  color: "#64FFDA",
                  lineHeight: 1,
                  marginBottom: 6,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 13,
                  color: "rgba(255,255,255,0.4)",
                  letterSpacing: "0.5px",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          cursor: "pointer",
        }}
        onClick={scrollToProjects}
      >
        <span
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 11,
            color: "rgba(255,255,255,0.3)",
            letterSpacing: "1.5px",
            textTransform: "uppercase",
          }}
        >
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          style={{
            width: 24,
            height: 40,
            border: "1.5px solid rgba(255,255,255,0.15)",
            borderRadius: 12,
            display: "flex",
            justifyContent: "center",
            paddingTop: 6,
          }}
        >
          <div
            style={{
              width: 4,
              height: 8,
              background: "#64FFDA",
              borderRadius: 2,
            }}
          />
        </motion.div>
      </motion.div>

      {/* ── Keyframe styles injected once ── */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.85); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @media (max-width: 768px) {
          .nav-desktop-links { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
        @media (min-width: 769px) {
          .nav-hamburger { display: none !important; }
        }
      `}</style>
    </section>
  );
}
