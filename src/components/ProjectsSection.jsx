/**
 * ProjectsSection.jsx — Redesigned projects showcase.
 *
 * Changes from original:
 *  - Added "Anson General" as the FEATURED project (hero card at top)
 *  - Kept all 3 original projects (Subrogates, Líderes del Cambio, ArenasCRM)
 *  - Preserved GSAP scroll-based card entry animations (desktop)
 *  - Added tech stack badges per project
 *  - Added hover overlay with description + link
 *  - Dark theme consistent with redesign
 */

import { useRef, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ── Project data — all projects including Anson General ──
const FEATURED_PROJECT = {
  name: "Anson General",
  tagline: "Full-stack business management platform for a US general contractor",
  description:
    "Designed and built a comprehensive internal operations platform for Anson General, a US-based construction and contracting company. The system handles project tracking, subcontractor management, job costing, and real-time reporting — replacing manual spreadsheets with a unified digital workflow.",
  tech: ["React", "Node.js", "Express", "PostgreSQL", "Tailwind CSS", "REST API"],
  highlights: [
    "Real-time project & cost tracking dashboard",
    "Subcontractor onboarding & document management",
    "Custom reporting engine with PDF export",
    "Role-based access control (Admin / Manager / Field)",
  ],
  image: "/assets/preview.png", // Replace with Anson General screenshot
  url: null, // Private client project — NDA
  isPrivate: true,
  color: "#64FFDA",
};

const PROJECTS = [
  {
    name: "Subrogates — IMSS",
    tagline: "Healthcare subrogation management system",
    description:
      "Internal platform for IMSS (Mexico's Social Security Institute) to manage medical service subrogation workflows, including secure authentication, notifications, and performance dashboards.",
    tech: ["React", "Node.js", "MongoDB", "Docker", "GSAP"],
    image: "/Proyects/IMSS.svg",
    url: "https://github.com/Gamequic/LivePreview",
    isPrivate: false,
    color: "#BD34FE",
  },
  {
    name: "Líderes del Cambio",
    tagline: "NGO digital platform — community leadership programs",
    description:
      "Full website and digital presence for a nonprofit organization running leadership programs across Mexico. Focused on accessibility, bilingual content, and donation conversion.",
    tech: ["React", "Tailwind CSS", "Vite", "Framer Motion"],
    image: "/Proyects/LideresDelCambio.png",
    url: "https://LideresDelCambio.org",
    isPrivate: false,
    color: "#FFBE00",
  },
  {
    name: "ArenasCRM",
    tagline: "Custom CRM system for service businesses",
    description:
      "A tailored CRM solution built for a service-based business, featuring client management, appointment scheduling, task tracking, and revenue reporting.",
    tech: ["React", "Node.js", "MySQL", "Express", "JWT Auth"],
    image: "/Proyects/ArenasCRM.png",
    url: "https://github.com/Gamequic/ArenasCRM_Front",
    isPrivate: false,
    color: "#FF6B6B",
  },
];

// ── Single project card (grid cards) ──
function ProjectCard({ project, index, cardRef }) {
  const handleClick = () => {
    if (project.url) {
      if (window.gtag) {
        window.gtag("event", "project_click_" + project.name, {
          event_category: "engagement",
          value: 1,
        });
      }
      setTimeout(() => window.open(project.url, "_blank", "noopener,noreferrer"), 150);
    }
  };

  return (
    <div
      ref={cardRef}
      onClick={project.url ? handleClick : undefined}
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: 20,
        overflow: "hidden",
        cursor: project.url ? "pointer" : "default",
        transition: "all 0.35s ease",
        position: "relative",
        minWidth: 300,
        flex: 1,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-8px)";
        e.currentTarget.style.borderColor = project.color + "40";
        e.currentTarget.style.boxShadow = `0 24px 48px rgba(0,0,0,0.4), 0 0 0 1px ${project.color}20`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Project image */}
      <div
        style={{
          width: "100%",
          height: 200,
          overflow: "hidden",
          background: "#0D0D14",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <img
          src={project.image}
          alt={project.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.85,
          }}
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
        {/* Color tint overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(135deg, ${project.color}15 0%, transparent 60%)`,
          }}
        />
      </div>

      {/* Card body */}
      <div style={{ padding: "24px" }}>
        {/* Accent line */}
        <div
          style={{
            width: 32,
            height: 3,
            background: project.color,
            borderRadius: 2,
            marginBottom: 14,
          }}
        />

        <h3
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: 20,
            fontWeight: 700,
            color: "#FFFFFF",
            margin: "0 0 8px",
            letterSpacing: "-0.3px",
          }}
        >
          {project.name}
        </h3>

        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 13,
            fontWeight: 500,
            color: project.color,
            margin: "0 0 12px",
            letterSpacing: "0.3px",
          }}
        >
          {project.tagline}
        </p>

        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 14,
            lineHeight: 1.65,
            color: "rgba(255,255,255,0.5)",
            margin: "0 0 20px",
          }}
        >
          {project.description}
        </p>

        {/* Tech badges */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
          {project.tech.map((t) => (
            <span
              key={t}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 11,
                fontWeight: 600,
                color: project.color,
                background: project.color + "12",
                border: `1px solid ${project.color}25`,
                padding: "4px 10px",
                borderRadius: 6,
                letterSpacing: "0.3px",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Link */}
        {project.url ? (
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13,
              fontWeight: 600,
              color: project.color,
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            View Project →
          </span>
        ) : (
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 12,
              color: "rgba(255,255,255,0.3)",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            🔒 Private — NDA
          </span>
        )}
      </div>
    </div>
  );
}

export default function ProjectsSection({ isMobile }) {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  // ── Preserved GSAP scroll animation: cards fly in from the right (desktop only) ──
  useLayoutEffect(() => {
    if (isMobile) return;

    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter(Boolean);

      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { x: 80, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              end: "top 60%",
              scrub: false,
              toggleActions: "play none none reverse",
            },
            delay: index * 0.1,
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      style={{
        background: "#0A0A0F",
        padding: isMobile ? "80px 20px" : "120px 40px",
        maxWidth: "100vw",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: isMobile ? 48 : 72 }}
        >
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 12,
              fontWeight: 600,
              color: "#64FFDA",
              letterSpacing: "2px",
              textTransform: "uppercase",
              display: "block",
              marginBottom: 12,
            }}
          >
            Selected Work
          </span>
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: isMobile ? 36 : 56,
              fontWeight: 800,
              color: "#FFFFFF",
              margin: "0 0 16px",
              letterSpacing: "-1.5px",
              lineHeight: 1.1,
            }}
          >
            Projects That{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #64FFDA 0%, #BD34FE 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Ship
            </span>
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 17,
              color: "rgba(255,255,255,0.45)",
              maxWidth: 520,
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            Real solutions for real businesses — from healthcare systems to CRM platforms.
            Some documentation is still in progress and will be available soon on GitHub.
          </p>
        </motion.div>

        {/* ── FEATURED PROJECT: Anson General ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: 32 }}
        >
          <div
            style={{
              position: "relative",
              background: "linear-gradient(135deg, rgba(100,255,218,0.06) 0%, rgba(189,52,254,0.06) 100%)",
              border: "1px solid rgba(100, 255, 218, 0.2)",
              borderRadius: 24,
              overflow: "hidden",
              padding: isMobile ? "32px 24px" : "48px 56px",
            }}
          >
            {/* "Featured" badge */}
            <div
              style={{
                position: "absolute",
                top: 24,
                right: 24,
                background: "rgba(100, 255, 218, 0.12)",
                border: "1px solid rgba(100, 255, 218, 0.3)",
                borderRadius: 100,
                padding: "6px 16px",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 12,
                fontWeight: 700,
                color: "#64FFDA",
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              ★ Featured
            </div>

            {/* Decorative gradient blob */}
            <div
              style={{
                position: "absolute",
                top: -80,
                right: -80,
                width: 300,
                height: 300,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(100, 255, 218, 0.08) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />

            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                gap: 48,
                alignItems: "center",
              }}
            >
              {/* Left: content */}
              <div>
                <div
                  style={{
                    width: 40,
                    height: 4,
                    background: "linear-gradient(90deg, #64FFDA, #BD34FE)",
                    borderRadius: 2,
                    marginBottom: 20,
                  }}
                />
                <h3
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: isMobile ? 28 : 40,
                    fontWeight: 800,
                    color: "#FFFFFF",
                    margin: "0 0 8px",
                    letterSpacing: "-1px",
                    lineHeight: 1.1,
                  }}
                >
                  Anson General
                </h3>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 15,
                    fontWeight: 600,
                    color: "#64FFDA",
                    margin: "0 0 20px",
                  }}
                >
                  {FEATURED_PROJECT.tagline}
                </p>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 15,
                    lineHeight: 1.7,
                    color: "rgba(255,255,255,0.6)",
                    margin: "0 0 28px",
                  }}
                >
                  {FEATURED_PROJECT.description}
                </p>

                {/* Feature highlights */}
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px" }}>
                  {FEATURED_PROJECT.highlights.map((h) => (
                    <li
                      key={h}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 10,
                        marginBottom: 10,
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 14,
                        color: "rgba(255,255,255,0.65)",
                      }}
                    >
                      <span style={{ color: "#64FFDA", flexShrink: 0, marginTop: 1 }}>✓</span>
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Tech badges */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {FEATURED_PROJECT.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 12,
                        fontWeight: 600,
                        color: "#64FFDA",
                        background: "rgba(100, 255, 218, 0.08)",
                        border: "1px solid rgba(100, 255, 218, 0.2)",
                        padding: "5px 12px",
                        borderRadius: 6,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: preview image */}
              <div
                style={{
                  background: "#0D0D14",
                  borderRadius: 16,
                  overflow: "hidden",
                  border: "1px solid rgba(100, 255, 218, 0.1)",
                  minHeight: 280,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                <img
                  src={FEATURED_PROJECT.image}
                  alt="Anson General Platform"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    opacity: 0.9,
                  }}
                  onError={(e) => {
                    // Fallback if image not found
                    e.target.parentNode.innerHTML = `
                      <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:280px;gap:16px;padding:24px;text-align:center;">
                        <div style="font-size:48px">🏗️</div>
                        <p style="font-family:'DM Sans',sans-serif;font-size:14px;color:rgba(255,255,255,0.4);line-height:1.5;margin:0">
                          Add your Anson General screenshot to<br/>/public/assets/anson-general.png
                        </p>
                      </div>
                    `;
                  }}
                />
                {/* Private badge overlay */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 16,
                    right: 16,
                    background: "rgba(0,0,0,0.7)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 8,
                    padding: "6px 12px",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 12,
                    color: "rgba(255,255,255,0.5)",
                  }}
                >
                  🔒 Private Client Project
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Standard project cards grid ── */}
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: 24,
            flexWrap: isMobile ? "wrap" : "nowrap",
          }}
        >
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.name}
              project={project}
              index={i}
              cardRef={(el) => (cardsRef.current[i] = el)}
            />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginTop: 56 }}
        >
          <a
            href="https://github.com/Gamequic"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 15,
              fontWeight: 600,
              color: "rgba(255,255,255,0.5)",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              border: "1px solid rgba(255,255,255,0.1)",
              padding: "12px 28px",
              borderRadius: 100,
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(100, 255, 218, 0.3)";
              e.currentTarget.style.color = "#64FFDA";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
              e.currentTarget.style.color = "rgba(255,255,255,0.5)";
            }}
          >
            View all projects on GitHub →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
