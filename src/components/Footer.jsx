/*
 * Footer.jsx — Simple footer with quick links and copyright.
 */

import { useLanguage } from "../context/LanguageContext";
import { T } from "../i18n/translations";

export default function Footer({ isMobile }) {
  const { lang } = useLanguage();
  const tf       = T.footer;
  const year     = new Date().getFullYear();

  const links = [
    { label: tf.projects[lang], href: "#projects" },
    { label: tf.about[lang],    href: "#about"    },
    { label: tf.contact[lang],  href: "#contact"  },
  ];

  const socials = [
    { label: "GitHub",    href: "https://github.com/Gamequic",        icon: "⌨️" },
    { label: "Instagram", href: "https://instagram.com/calleros.dev", icon: "📷" },
  ];

  return (
    <footer style={{ background: "#080810", borderTop: "1px solid rgba(255,255,255,0.04)", padding: isMobile ? "40px 20px" : "48px 40px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: isMobile ? 20 : 24, alignItems: isMobile ? "flex-start" : "center", justifyContent: "space-between" }}>

        {/* Name + tagline */}
        <div>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 18, color: "#FFF", letterSpacing: "-0.5px" }}>
            Demian <span style={{ color: "var(--accent)" }}>Calleros</span>
          </span>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,0.3)", margin: "4px 0 0" }}>{tf.tagline[lang]}</p>
        </div>

        {/* Quick links */}
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" }); }}
              style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "rgba(255,255,255,0.4)", transition: "color 0.2s ease" }}
              onMouseEnter={(e) => (e.target.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.target.style.color = "rgba(255,255,255,0.4)")}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Social links */}
        <div style={{ display: "flex", gap: 12 }}>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", gap: 6, fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,0.35)", textDecoration: "none", transition: "color 0.2s ease" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}
            >
              <span>{s.icon}</span>{s.label}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,0.25)", margin: 0 }}>
          © {year} Demian Calleros. {tf.rights[lang]}
        </p>
      </div>
    </footer>
  );
}
