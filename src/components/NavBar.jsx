/**
 * NavBar.jsx — Sticky navigation bar.
 * Hides on scroll-down, reappears on scroll-up (smart hide/show).
 * Links scroll smoothly to each section via anchor IDs.
 */

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function NavBar() {
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // Show/hide logic
      if (currentY < 50) {
        setVisible(true);
      } else if (currentY > lastScrollY.current + 5) {
        setVisible(false); // scrolling down — hide
        setMenuOpen(false);
      } else if (currentY < lastScrollY.current - 5) {
        setVisible(true); // scrolling up — show
      }

      setScrolled(currentY > 20);
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollTo = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 100,
            // Glass morphism background when scrolled
            background: scrolled
              ? "rgba(10, 10, 15, 0.85)"
              : "transparent",
            backdropFilter: scrolled ? "blur(20px)" : "none",
            borderBottom: scrolled
              ? "1px solid rgba(100, 255, 218, 0.08)"
              : "none",
            transition: "background 0.4s ease, border 0.4s ease",
          }}
        >
          <div
            style={{
              maxWidth: 1200,
              margin: "0 auto",
              padding: "0 24px",
              height: 64,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* Logo / Name */}
            <a
              href="#hero"
              onClick={(e) => scrollTo(e, "#hero")}
              style={{ textDecoration: "none" }}
            >
              <span
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 800,
                  fontSize: 20,
                  color: "#fff",
                  letterSpacing: "-0.5px",
                }}
              >
                Demian{" "}
                <span style={{ color: "#64FFDA" }}>Calleros</span>
              </span>
            </a>

            {/* Desktop links */}
            <div
              className="nav-desktop-links"
              style={{ display: "flex", gap: 32, alignItems: "center" }}
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 14,
                    fontWeight: 500,
                    color: "rgba(255,255,255,0.65)",
                    textDecoration: "none",
                    letterSpacing: "0.5px",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#64FFDA")}
                  onMouseLeave={(e) =>
                    (e.target.style.color = "rgba(255,255,255,0.65)")
                  }
                >
                  {link.label}
                </a>
              ))}

              {/* CTA button */}
              <a
                href="#contact"
                onClick={(e) => scrollTo(e, "#contact")}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#0A0A0F",
                  background: "#64FFDA",
                  padding: "8px 20px",
                  borderRadius: 8,
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                  letterSpacing: "0.3px",
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "#4DFFCE";
                  e.target.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "#64FFDA";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                Start a Project
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="nav-hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 8,
                display: "none", // shown via CSS media query
              }}
              aria-label="Toggle menu"
            >
              <div style={{ width: 24, display: "flex", flexDirection: "column", gap: 5 }}>
                <span
                  style={{
                    display: "block",
                    height: 2,
                    background: "#fff",
                    borderRadius: 2,
                    transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
                    transition: "transform 0.3s ease",
                  }}
                />
                <span
                  style={{
                    display: "block",
                    height: 2,
                    background: "#fff",
                    borderRadius: 2,
                    opacity: menuOpen ? 0 : 1,
                    transition: "opacity 0.3s ease",
                  }}
                />
                <span
                  style={{
                    display: "block",
                    height: 2,
                    background: "#fff",
                    borderRadius: 2,
                    transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
                    transition: "transform 0.3s ease",
                  }}
                />
              </div>
            </button>
          </div>

          {/* Mobile dropdown */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                style={{
                  background: "rgba(10, 10, 15, 0.97)",
                  borderTop: "1px solid rgba(100, 255, 218, 0.1)",
                  overflow: "hidden",
                }}
              >
                <div style={{ padding: "16px 24px 24px", display: "flex", flexDirection: "column", gap: 16 }}>
                  {NAV_LINKS.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => scrollTo(e, link.href)}
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 16,
                        fontWeight: 500,
                        color: "rgba(255,255,255,0.8)",
                        textDecoration: "none",
                      }}
                    >
                      {link.label}
                    </a>
                  ))}
                  <a
                    href="#contact"
                    onClick={(e) => scrollTo(e, "#contact")}
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 16,
                      fontWeight: 600,
                      color: "#0A0A0F",
                      background: "#64FFDA",
                      padding: "12px 20px",
                      borderRadius: 8,
                      textDecoration: "none",
                      textAlign: "center",
                      marginTop: 8,
                    }}
                  >
                    Start a Project
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
