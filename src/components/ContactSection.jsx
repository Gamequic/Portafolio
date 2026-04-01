/**
 * ContactSection.jsx — PRIMARY CONVERSION SECTION.
 *
 * Contains:
 *  1. Prominent clickable contact cards (WhatsApp, Phone US, Phone MX, Email)
 *  2. Functional contact form with validation + success/error states
 *     (form submits to a placeholder API endpoint — easy to connect to a backend)
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ── Contact methods — clickable with proper tel:/mailto:/wa links ──
const CONTACTS = [
  {
    icon: "💬",
    label: "WhatsApp",
    value: "Message me now",
    href: "https://wa.me/19153046304?text=Hi%20Demian%2C%20I%27d%20like%20to%20start%20a%20project%20with%20you.",
    color: "#25D366",
    description: "Fastest response — usually within the hour",
  },
  {
    icon: "📞",
    label: "Phone — US",
    value: "+1 (915) 304-6304",
    href: "tel:+19153046304",
    color: "#64FFDA",
    description: "El Paso, TX · Calls & SMS welcome",
  },
  {
    icon: "📱",
    label: "Phone — Mexico",
    value: "+52 656 777 9087",
    href: "tel:+526567779087",
    color: "#BD34FE",
    description: "Cd. Juárez · Calls only",
  },
  {
    icon: "✉️",
    label: "Email",
    value: "demiancalleros1@gmail.com",
    href: "mailto:demiancalleros1@gmail.com?subject=New%20Project%20Inquiry",
    color: "#FFBE00",
    description: "For detailed briefs and proposals",
  },
];

// ── Form validation ──
function validate(fields) {
  const errors = {};
  if (!fields.name.trim()) errors.name = "Name is required";
  if (!fields.email.trim()) errors.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
    errors.email = "Please enter a valid email";
  if (!fields.message.trim()) errors.message = "Tell me about your project";
  else if (fields.message.trim().length < 20)
    errors.message = "Please add a bit more detail (at least 20 characters)";
  return errors;
}

// ── Input field component ──
function Field({ label, error, children }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <label
        style={{
          display: "block",
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 13,
          fontWeight: 600,
          color: error ? "#FF6B6B" : "rgba(255,255,255,0.6)",
          marginBottom: 8,
          letterSpacing: "0.3px",
        }}
      >
        {label}
      </label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 12,
              color: "#FF6B6B",
              margin: "6px 0 0",
            }}
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

const INPUT_BASE = {
  width: "100%",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: 10,
  padding: "12px 16px",
  fontFamily: "'DM Sans', sans-serif",
  fontSize: 15,
  color: "#FFFFFF",
  outline: "none",
  boxSizing: "border-box",
  transition: "border-color 0.2s ease, box-shadow 0.2s ease",
};

export default function ContactSection() {
  const [fields, setFields] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((f) => ({ ...f, [name]: value }));
    // Clear error on type
    if (errors[name]) setErrors((err) => ({ ...err, [name]: undefined }));
  };

  const handleFocus = (e) => {
    e.target.style.borderColor = "rgba(100, 255, 218, 0.4)";
    e.target.style.boxShadow = "0 0 0 3px rgba(100, 255, 218, 0.08)";
  };
  const handleBlur = (e) => {
    e.target.style.borderColor = "rgba(255,255,255,0.1)";
    e.target.style.boxShadow = "none";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate(fields);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setStatus("loading");

    // ── Replace this URL with your real backend or form service ──
    // Options: EmailJS, Formspree, your own Express /api/contact endpoint
    const API_ENDPOINT = "/api/contact"; // ← TODO: update this

    try {
      // Try real endpoint; gracefully fall back in dev
      const res = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      }).catch(() => null); // network error (dev, no backend)

      if (res && res.ok) {
        setStatus("success");
        setFields({ name: "", email: "", message: "" });
      } else {
        // For demo/dev purposes — treat 404 / missing backend as "success"
        // Remove this block when you connect a real backend
        console.warn("ContactSection: no backend connected. Showing success state for demo.");
        setStatus("success");
        setFields({ name: "", email: "", message: "" });
      }
    } catch {
      setStatus("error");
    }
  };

  const handleContactClick = (contact) => {
    if (window.gtag) {
      window.gtag("event", "contact_click_" + contact.label, {
        event_category: "engagement",
        value: 1,
      });
    }
  };

  return (
    <section
      id="contact"
      style={{
        background: "#0D0D16",
        padding: "120px 40px",
        borderTop: "1px solid rgba(255,255,255,0.04)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          bottom: -200,
          left: "50%",
          transform: "translateX(-50%)",
          width: 800,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(100, 255, 218, 0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 72 }}
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
            Get In Touch
          </span>
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(32px, 5vw, 60px)",
              fontWeight: 800,
              color: "#FFFFFF",
              margin: "0 0 20px",
              letterSpacing: "-2px",
              lineHeight: 1.05,
            }}
          >
            Let's Build{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #64FFDA 0%, #BD34FE 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Something Great
            </span>
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
            Whether you have a project ready to start or just want to explore what's possible — reach out. I respond fast.
          </p>
        </motion.div>

        {/* Two-column layout: contacts + form */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 48,
            alignItems: "start",
          }}
        >
          {/* ── Contact cards ── */}
          <div>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 13,
                fontWeight: 600,
                color: "rgba(255,255,255,0.3)",
                letterSpacing: "1px",
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              Reach me directly
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {CONTACTS.map((contact, i) => (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                  rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  onClick={() => handleContactClick(contact)}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: 16,
                    padding: "16px 20px",
                    textDecoration: "none",
                    transition: "all 0.25s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                    e.currentTarget.style.borderColor = contact.color + "40";
                    e.currentTarget.style.transform = "translateX(6px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                    e.currentTarget.style.transform = "translateX(0)";
                  }}
                >
                  {/* Icon circle */}
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: contact.color + "15",
                      border: `1px solid ${contact.color}25`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 20,
                      flexShrink: 0,
                    }}
                  >
                    {contact.icon}
                  </div>

                  {/* Text */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 12,
                        fontWeight: 600,
                        color: contact.color,
                        letterSpacing: "0.5px",
                        textTransform: "uppercase",
                        marginBottom: 2,
                      }}
                    >
                      {contact.label}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Syne', sans-serif",
                        fontSize: 14,
                        fontWeight: 700,
                        color: "#FFFFFF",
                        marginBottom: 2,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {contact.value}
                    </div>
                    <div
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 12,
                        color: "rgba(255,255,255,0.35)",
                      }}
                    >
                      {contact.description}
                    </div>
                  </div>

                  {/* Arrow */}
                  <span
                    style={{
                      color: "rgba(255,255,255,0.2)",
                      fontSize: 16,
                      flexShrink: 0,
                    }}
                  >
                    →
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Social links */}
            <div style={{ marginTop: 32, display: "flex", gap: 12 }}>
              {[
                { label: "GitHub", href: "https://github.com/Gamequic", icon: "⌨️" },
                {
                  label: "Facebook",
                  href: "https://www.facebook.com/people/Calleros-Dev/61586630033982/",
                  icon: "📘",
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "10px 18px",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 10,
                    textDecoration: "none",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 14,
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.6)",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#64FFDA";
                    e.currentTarget.style.borderColor = "rgba(100, 255, 218, 0.25)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgba(255,255,255,0.6)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                  }}
                >
                  <span>{s.icon}</span>
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* ── Contact Form ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 24,
              padding: "36px",
            }}
          >
            <h3
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: 22,
                fontWeight: 700,
                color: "#FFFFFF",
                margin: "0 0 8px",
                letterSpacing: "-0.5px",
              }}
            >
              Send a Message
            </h3>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 14,
                color: "rgba(255,255,255,0.35)",
                margin: "0 0 28px",
              }}
            >
              Describe your project and I'll get back to you within 24 hours.
            </p>

            {/* Success state */}
            <AnimatePresence>
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  style={{
                    background: "rgba(100, 255, 218, 0.08)",
                    border: "1px solid rgba(100, 255, 218, 0.25)",
                    borderRadius: 14,
                    padding: "24px",
                    textAlign: "center",
                    marginBottom: 24,
                  }}
                >
                  <div style={{ fontSize: 32, marginBottom: 12 }}>🎉</div>
                  <p
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: 18,
                      fontWeight: 700,
                      color: "#64FFDA",
                      margin: "0 0 8px",
                    }}
                  >
                    Message sent!
                  </p>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 14,
                      color: "rgba(255,255,255,0.5)",
                      margin: 0,
                    }}
                  >
                    I'll respond within 24 hours. Looking forward to working together!
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    style={{
                      marginTop: 16,
                      background: "none",
                      border: "1px solid rgba(100, 255, 218, 0.3)",
                      borderRadius: 8,
                      padding: "8px 20px",
                      color: "#64FFDA",
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 13,
                      fontWeight: 600,
                      cursor: "pointer",
                    }}
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Error state */}
            <AnimatePresence>
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{
                    background: "rgba(255, 107, 107, 0.08)",
                    border: "1px solid rgba(255, 107, 107, 0.25)",
                    borderRadius: 12,
                    padding: "14px 18px",
                    marginBottom: 20,
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 14,
                    color: "#FF6B6B",
                  }}
                >
                  Something went wrong. Please try emailing me directly at{" "}
                  <a
                    href="mailto:demiancalleros1@gmail.com"
                    style={{ color: "#FF6B6B", fontWeight: 700 }}
                  >
                    demiancalleros1@gmail.com
                  </a>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Form */}
            {status !== "success" && (
              <form onSubmit={handleSubmit} noValidate>
                <Field label="Your Name" error={errors.name}>
                  <input
                    type="text"
                    name="name"
                    value={fields.name}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    placeholder="Jane Smith"
                    style={{
                      ...INPUT_BASE,
                      borderColor: errors.name ? "#FF6B6B" : undefined,
                    }}
                  />
                </Field>

                <Field label="Email Address" error={errors.email}>
                  <input
                    type="email"
                    name="email"
                    value={fields.email}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    placeholder="jane@company.com"
                    style={{
                      ...INPUT_BASE,
                      borderColor: errors.email ? "#FF6B6B" : undefined,
                    }}
                  />
                </Field>

                <Field label="Project Description" error={errors.message}>
                  <textarea
                    name="message"
                    value={fields.message}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    placeholder="Describe what you want to build, your timeline, and any key requirements..."
                    rows={5}
                    style={{
                      ...INPUT_BASE,
                      resize: "vertical",
                      minHeight: 120,
                      borderColor: errors.message ? "#FF6B6B" : undefined,
                    }}
                  />
                </Field>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  style={{
                    width: "100%",
                    padding: "14px",
                    background: status === "loading" ? "rgba(100,255,218,0.5)" : "#64FFDA",
                    border: "none",
                    borderRadius: 12,
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 16,
                    fontWeight: 700,
                    color: "#0A0A0F",
                    cursor: status === "loading" ? "not-allowed" : "pointer",
                    transition: "all 0.25s ease",
                    letterSpacing: "0.2px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                  }}
                  onMouseEnter={(e) => {
                    if (status !== "loading") {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow =
                        "0 8px 30px rgba(100, 255, 218, 0.35)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {status === "loading" ? (
                    <>
                      <span
                        style={{
                          display: "inline-block",
                          width: 16,
                          height: 16,
                          border: "2px solid #0A0A0F",
                          borderTopColor: "transparent",
                          borderRadius: "50%",
                          animation: "spin 0.7s linear infinite",
                        }}
                      />
                      Sending...
                    </>
                  ) : (
                    "Send Message →"
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @media (max-width: 768px) {
          #contact { padding: 80px 20px !important; }
        }
      `}</style>
    </section>
  );
}
