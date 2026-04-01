/**
 * SkillsSection.jsx — Tech stack & skills showcase.
 *
 * Displays skill categories in an animated grid.
 * Each skill badge animates in when scrolled into view.
 */

import { motion } from "framer-motion";

const SKILL_CATEGORIES = [
  {
    category: "Frontend",
    color: "#64FFDA",
    skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "GSAP", "TypeScript"],
  },
  {
    category: "Backend",
    color: "#BD34FE",
    skills: ["Node.js", "Express", "REST APIs", "JWT Auth", "WebSockets", "GraphQL"],
  },
  {
    category: "Databases",
    color: "#FFBE00",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Supabase", "Firebase"],
  },
  {
    category: "DevOps & Tools",
    color: "#FF6B6B",
    skills: ["Docker", "GitHub Actions", "Linux / VPS", "Nginx", "Git", "Vite"],
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      style={{
        background: "#0A0A0F",
        padding: "120px 40px",
        borderTop: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 64, textAlign: "center" }}
        >
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 12,
              fontWeight: 600,
              color: "#FFBE00",
              letterSpacing: "2px",
              textTransform: "uppercase",
              display: "block",
              marginBottom: 12,
            }}
          >
            Tech Stack
          </span>
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 800,
              color: "#FFFFFF",
              margin: "0 0 16px",
              letterSpacing: "-1.5px",
            }}
          >
            Tools I Build With
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 17,
              color: "rgba(255,255,255,0.4)",
              maxWidth: 480,
              lineHeight: 1.7,
              margin: "0 auto",
            }}
          >
            A modern, battle-tested stack for building fast, scalable, and maintainable products.
          </p>
        </motion.div>

        {/* Skill categories grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 24,
          }}
        >
          {SKILL_CATEGORIES.map((cat, catIdx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 20,
                padding: "28px",
                transition: "border-color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = cat.color + "30";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
              }}
            >
              {/* Category header */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: cat.color,
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: 16,
                    fontWeight: 700,
                    color: "#FFFFFF",
                    letterSpacing: "-0.3px",
                  }}
                >
                  {cat.category}
                </span>
              </div>

              {/* Skill badges */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {cat.skills.map((skill, sIdx) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: catIdx * 0.1 + sIdx * 0.05 }}
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 13,
                      fontWeight: 500,
                      color: cat.color,
                      background: cat.color + "10",
                      border: `1px solid ${cat.color}20`,
                      padding: "6px 14px",
                      borderRadius: 8,
                      cursor: "default",
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = cat.color + "20";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = cat.color + "10";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #skills { padding: 80px 20px !important; }
        }
      `}</style>
    </section>
  );
}
