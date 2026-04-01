/**
 * AboutSection.jsx — Value-first "About" section.
 *
 * Messaging focuses on CLIENT VALUE, not biography.
 * Preserves the sticky two-column GSAP scroll mechanic from the original.
 * Adapted to dark theme.
 */

import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VALUE_BLOCKS = [
  {
    emoji: "🎯",
    title: "Business-First Thinking",
    body: "I don't just write code — I understand the business problem first. Every technical decision I make is driven by the question: will this help your business grow, operate faster, or convert more clients?",
  },
  {
    emoji: "⚡",
    title: "Full-Stack, End-to-End",
    body: "From database architecture to pixel-perfect UI, I handle the entire stack. No hand-offs, no gaps — you get one developer who owns the full product and communicates clearly at every step.",
  },
  {
    emoji: "🚀",
    title: "Shipping is a Feature",
    body: "Ideas are worthless without execution. I move fast, communicate proactively, and ship working software — not endless WIP tickets. Your MVP will be in production before competitors finish planning.",
  },
  {
    emoji: "🔒",
    title: "Quality You Can Trust",
    body: "Clean code, proper authentication, responsive design, and real error handling — not a \"works on my machine\" prototype. I build things that work in production, on every device, for real users.",
  },
];

export default function AboutSection() {
  const containerRef = useRef(null);
  const railRef = useRef(null);

  // ── Preserved sticky-rail GSAP animation from original AboutScrollSection ──
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: () =>
          `${containerRef.current.offsetHeight - window.innerHeight * 1.5}px`,
        scrub: true,
        pin: railRef.current,
        pinSpacing: false,
        markers: false,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      style={{
        background: "#0D0D16",
        borderTop: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      {/* Section intro — full width */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 40px 0" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 72 }}
        >
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 12,
              fontWeight: 600,
              color: "#BD34FE",
              letterSpacing: "2px",
              textTransform: "uppercase",
              display: "block",
              marginBottom: 12,
            }}
          >
            Why Demian?
          </span>
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(32px, 5vw, 56px)",
              fontWeight: 800,
              color: "#FFFFFF",
              margin: "0 0 16px",
              letterSpacing: "-1.5px",
              lineHeight: 1.1,
              maxWidth: 640,
            }}
          >
            I solve problems,{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #BD34FE 0%, #64FFDA 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              not just tasks.
            </span>
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 17,
              color: "rgba(255,255,255,0.45)",
              maxWidth: 560,
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            As a computer science-trained full-stack developer based on the US–Mexico border, I bridge the gap between technical execution and business outcomes.
          </p>
        </motion.div>
      </div>

      {/* ── Sticky two-column layout (preserved from original) ── */}
      <div
        ref={containerRef}
        style={{
          position: "relative",
          minHeight: "280vh",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 40px",
          gap: 48,
        }}
        className="about-grid"
      >
        {/* ── Sticky left rail ── */}
        <div
          ref={railRef}
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingRight: 48,
          }}
        >
          <div
            style={{
              width: 4,
              height: 64,
              background: "linear-gradient(180deg, #BD34FE, #64FFDA)",
              borderRadius: 2,
              marginBottom: 24,
            }}
          />
          <h3
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 800,
              color: "#FFFFFF",
              margin: "0 0 24px",
              letterSpacing: "-1px",
              lineHeight: 1.1,
            }}
          >
            Built to grow your business
          </h3>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 16,
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.45)",
              margin: "0 0 32px",
            }}
          >
            Computer science background + client obsession = software that actually moves the needle. I bring both technical depth and real-world business intuition to every project.
          </p>

          {/* Quick stats */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { label: "Based in", value: "El Paso, TX / Ciudad Juárez" },
              { label: "Languages", value: "English & Spanish" },
              { label: "Availability", value: "Open to new projects" },
            ].map((item) => (
              <div key={item.label} style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 13,
                    color: "rgba(255,255,255,0.3)",
                    minWidth: 90,
                  }}
                >
                  {item.label}
                </span>
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 13,
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.7)",
                  }}
                >
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Scrolling right column: value blocks ── */}
        <div style={{ paddingTop: "15vh", paddingBottom: "20vh" }}>
          {VALUE_BLOCKS.map((block, i) => (
            <motion.div
              key={block.title}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{
                marginBottom: "30vh",
                paddingLeft: 24,
                borderLeft: "2px solid rgba(255,255,255,0.07)",
              }}
            >
              <div
                style={{
                  fontSize: 36,
                  marginBottom: 16,
                  lineHeight: 1,
                }}
              >
                {block.emoji}
              </div>
              <h4
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: 24,
                  fontWeight: 700,
                  color: "#FFFFFF",
                  margin: "0 0 14px",
                  letterSpacing: "-0.5px",
                }}
              >
                {block.title}
              </h4>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 16,
                  lineHeight: 1.75,
                  color: "rgba(255,255,255,0.5)",
                  margin: 0,
                  maxWidth: 420,
                }}
              >
                {block.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Responsive override for mobile */}
      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            min-height: unset !important;
            padding: 0 20px !important;
          }
          .about-grid > div:first-child {
            position: static !important;
            height: auto !important;
            padding-right: 0 !important;
            padding-bottom: 48px;
          }
          .about-grid > div:last-child {
            padding-top: 0 !important;
            padding-bottom: 80px !important;
          }
          .about-grid > div:last-child > div {
            margin-bottom: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
