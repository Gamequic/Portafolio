/**
 * Footer.jsx — Simple but premium footer.
 * Includes social links and a final CTA.
 */

import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "#080810",
        borderTop: "1px solid rgba(255,255,255,0.04)",
        padding: "48px 40px",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          gap: 24,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Left — name + tagline */}
        <div>
          <span
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: 18,
              color: "#FFFFFF",
              letterSpacing: "-0.5px",
            }}
          >
            Demian <span style={{ color: "#64FFDA" }}>Calleros</span>
          </span>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13,
              color: "rgba(255,255,255,0.3)",
              margin: "4px 0 0",
            }}
          >
            Full-Stack Developer · El Paso, TX
          </p>
        </div>

        {/* Center — quick links */}
        <div style={{ display: "flex", gap: 24 }}>
          {[
            { label: "Projects", href: "#projects" },
            { label: "About", href: "#about" },
            { label: "Contact", href: "#contact" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
              }}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 14,
                color: "rgba(255,255,255,0.4)",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#64FFDA")}
              onMouseLeave={(e) => (e.target.style.color = "rgba(255,255,255,0.4)")}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right — copyright */}
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 13,
            color: "rgba(255,255,255,0.25)",
            margin: 0,
          }}
        >
          © {year} Demian Calleros. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
