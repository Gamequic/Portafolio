/*
 * ContactSection.jsx — Primary conversion section.
 *
 * Contains:
 *  1. Clickable contact cards (WhatsApp, Phone US, Phone MX, Email)
 *  2. Contact form with validation + success/error states (EmailJS)
 *
 * Full EN / ES translation support.
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { T } from "../i18n/translations";

// ── Web3Forms config ────────────────────────────────────────────────────────
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

// Fixed data — hrefs, icons, colors, phone numbers never change
const CONTACT_CARDS = [
  { key: "whatsapp", icon: "💬", value: "Message me now", href: "https://wa.me/19153046304?text=Hi%20Demian%2C%20I%27d%20like%20to%20start%20a%20project%20with%20you.", color: "#25D366" },
  { key: "phoneUS",  icon: "📞", value: "+1 (915) 304-6304", href: "tel:+19153046304",     color: "#64FFDA" },
  { key: "phoneMX",  icon: "📱", value: "+52 656 777 9087",  href: "tel:+526567779087",     color: "#BD34FE" },
  { key: "email",    icon: "✉️", value: "demiancalleros1@gmail.com", href: "mailto:demiancalleros1@gmail.com?subject=New%20Project%20Inquiry", color: "#FFBE00" },
];

// Inline Field wrapper
function Field({ label, error, children }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <label style={{ display: "block", fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600, color: error ? "#FF6B6B" : "rgba(255,255,255,0.6)", marginBottom: 8, letterSpacing: "0.3px" }}>
        {label}
      </label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }}
            style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "#FF6B6B", margin: "6px 0 0" }}>
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

const INPUT_BASE = {
  width: "100%", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: 10, padding: "12px 16px", fontFamily: "var(--font-body)", fontSize: 15,
  color: "#FFF", outline: "none", boxSizing: "border-box", transition: "border-color 0.2s ease, box-shadow 0.2s ease",
};

export default function ContactSection({ isMobile }) {
  const { lang }  = useLanguage();
  const tc        = T.contact;
  const tf        = tc.form;

  const [fields, setFields] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  function validate(f) {
    const e = {};
    if (!f.name.trim())                                    e.name    = tf.nameRequired[lang];
    if (!f.email.trim())                                   e.email   = tf.emailRequired[lang];
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email   = tf.emailInvalid[lang];
    if (!f.message.trim())                                 e.message = tf.msgRequired[lang];
    else if (f.message.trim().length < 20)                 e.message = tf.msgTooShort[lang];
    return e;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((err) => ({ ...err, [name]: undefined }));
  };

  const onFocus = (e) => { e.target.style.borderColor = "rgba(100,255,218,0.4)"; e.target.style.boxShadow = "0 0 0 3px rgba(100,255,218,0.08)"; };
  const onBlur  = (e) => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; e.target.style.boxShadow = "none"; };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate(fields);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setStatus("loading");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: fields.name,
          email: fields.email,
          message: fields.message,
        }),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message);
      setStatus("success");
      setFields({ name: "", email: "", message: "" });
      if (window.gtag) window.gtag("event", "contact_form_sent", { event_category: "engagement" });
    } catch {
      setStatus("error");
    }
  };

  const trackClick = (key) => {
    if (window.gtag) window.gtag("event", "contact_click_" + key, { event_category: "engagement", value: 1 });
  };

  return (
    <section id="contact" style={{ background: "var(--surface)", padding: isMobile ? "72px 20px" : "120px 40px", borderTop: "1px solid rgba(255,255,255,0.04)", position: "relative", overflow: "hidden" }}>

      {/* Background glow */}
      <div style={{ position: "absolute", bottom: -200, left: "50%", transform: "translateX(-50%)", width: 800, height: 500, borderRadius: "50%", background: "radial-gradient(circle,rgba(100,255,218,0.05) 0%,transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>

        {/* Section header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: "center", marginBottom: isMobile ? 40 : 72 }}>
          <span style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 600, color: "var(--accent)", letterSpacing: "2px", textTransform: "uppercase", display: "block", marginBottom: 12 }}>{tc.eyebrow[lang]}</span>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: isMobile ? "clamp(28px,8vw,44px)" : "clamp(32px,5vw,60px)", fontWeight: 800, color: "#FFF", margin: "0 0 20px", letterSpacing: isMobile ? "-1px" : "-2px", lineHeight: 1.05 }}>
            {tc.headline[lang]}{" "}
            <span style={{ background: "linear-gradient(135deg,#64FFDA 0%,#BD34FE 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              {tc.headlineAccent[lang]}
            </span>
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: isMobile ? 15 : 17, color: "rgba(255,255,255,0.4)", maxWidth: 480, lineHeight: 1.7, margin: "0 auto" }}>{tc.subtitle[lang]}</p>
        </motion.div>

        {/* Two-column: cards + form */}
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit,minmax(300px,1fr))", gap: isMobile ? 32 : 48, alignItems: "start" }}>

          {/* ── Contact cards ── */}
          <div>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.3)", letterSpacing: "1px", textTransform: "uppercase", marginBottom: 20 }}>
              {tc.reachDirectly[lang]}
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {CONTACT_CARDS.map((card, i) => {
                const tCard = tc.cards[card.key];
                const displayValue = card.key === "whatsapp" ? tCard.value[lang] : card.value;
                return (
                  <motion.a
                    key={card.key}
                    href={card.href}
                    target={card.href.startsWith("http") ? "_blank" : undefined}
                    rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    onClick={() => trackClick(card.key)}
                    initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                    style={{ display: "flex", alignItems: "center", gap: 16, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16, padding: "16px 20px", textDecoration: "none", transition: "all 0.25s ease", cursor: "pointer" }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.borderColor = card.color + "40"; e.currentTarget.style.transform = "translateX(6px)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.03)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; e.currentTarget.style.transform = "translateX(0)"; }}
                  >
                    <div style={{ width: 44, height: 44, borderRadius: 12, background: card.color + "15", border: `1px solid ${card.color}25`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>
                      {card.icon}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 600, color: card.color, letterSpacing: "0.5px", textTransform: "uppercase", marginBottom: 2 }}>{tCard.label[lang]}</div>
                      <div style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, color: "#FFF", marginBottom: 2, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{displayValue}</div>
                      <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.35)" }}>{tCard.desc[lang]}</div>
                    </div>
                    <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 16, flexShrink: 0 }}>→</span>
                  </motion.a>
                );
              })}
            </div>

            {/* Social links */}
            <div style={{ marginTop: 32, display: "flex", gap: 12 }}>
              {[
                { key: "github",   label: tc.github[lang],   href: "https://github.com/Gamequic", icon: "⌨️" },
              ].map((s) => (
                <a
                  key={s.key}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 18px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 10, fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.6)", transition: "all 0.2s ease" }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.borderColor = "rgba(100,255,218,0.25)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.6)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
                >
                  <span>{s.icon}</span>{s.label}
                </a>
              ))}
            </div>
          </div>

          {/* ── Contact Form ── */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
            style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 24, padding: isMobile ? 24 : 36 }}>

            <h3 style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700, color: "#FFF", margin: "0 0 8px", letterSpacing: "-0.5px" }}>{tf.title[lang]}</h3>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "rgba(255,255,255,0.35)", margin: "0 0 28px" }}>{tf.subtitle[lang]}</p>

            {/* Success */}
            <AnimatePresence>
              {status === "success" && (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
                  style={{ background: "rgba(100,255,218,0.08)", border: "1px solid rgba(100,255,218,0.25)", borderRadius: 14, padding: 24, textAlign: "center", marginBottom: 24 }}>
                  <div style={{ fontSize: 32, marginBottom: 12 }}>🎉</div>
                  <p style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 700, color: "var(--accent)", margin: "0 0 8px" }}>{tf.successTitle[lang]}</p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "rgba(255,255,255,0.5)", margin: 0 }}>{tf.successBody[lang]}</p>
                  <button onClick={() => setStatus("idle")} style={{ marginTop: 16, background: "none", border: "1px solid rgba(100,255,218,0.3)", borderRadius: 8, padding: "8px 20px", color: "var(--accent)", fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
                    {tf.sendAnother[lang]}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Error */}
            <AnimatePresence>
              {status === "error" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  style={{ background: "rgba(255,107,107,0.08)", border: "1px solid rgba(255,107,107,0.25)", borderRadius: 12, padding: "14px 18px", marginBottom: 20, fontFamily: "var(--font-body)", fontSize: 14, color: "#FF6B6B" }}>
                  {tf.errorMsg[lang]}{" "}
                  <a href="mailto:demiancalleros1@gmail.com" style={{ color: "#FF6B6B", fontWeight: 700 }}>demiancalleros1@gmail.com</a>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Form */}
            {status !== "success" && (
              <form onSubmit={handleSubmit} noValidate>
                <Field label={tf.nameLbl[lang]} error={errors.name}>
                  <input type="text" name="name" value={fields.name} onChange={handleChange} onFocus={onFocus} onBlur={onBlur} placeholder={tf.namePh[lang]} style={{ ...INPUT_BASE, borderColor: errors.name ? "#FF6B6B" : undefined }} />
                </Field>
                <Field label={tf.emailLbl[lang]} error={errors.email}>
                  <input type="email" name="email" value={fields.email} onChange={handleChange} onFocus={onFocus} onBlur={onBlur} placeholder={tf.emailPh[lang]} style={{ ...INPUT_BASE, borderColor: errors.email ? "#FF6B6B" : undefined }} />
                </Field>
                <Field label={tf.msgLbl[lang]} error={errors.message}>
                  <textarea name="message" value={fields.message} onChange={handleChange} onFocus={onFocus} onBlur={onBlur} placeholder={tf.msgPh[lang]} rows={5} style={{ ...INPUT_BASE, resize: "vertical", minHeight: 120, borderColor: errors.message ? "#FF6B6B" : undefined }} />
                </Field>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  style={{ width: "100%", padding: 14, background: status === "loading" ? "rgba(100,255,218,0.5)" : "var(--accent)", border: "none", borderRadius: 12, fontFamily: "var(--font-body)", fontSize: 16, fontWeight: 700, color: "#0A0A0F", cursor: status === "loading" ? "not-allowed" : "pointer", transition: "all 0.25s ease", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}
                  onMouseEnter={(e) => { if (status !== "loading") { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 30px rgba(100,255,218,0.35)"; } }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
                >
                  {status === "loading"
                    ? <><span style={{ display: "inline-block", width: 16, height: 16, border: "2px solid #0A0A0F", borderTopColor: "transparent", borderRadius: "50%", animation: "spin 0.7s linear infinite" }} />{tf.sending[lang]}</>
                    : tf.submit[lang]
                  }
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
