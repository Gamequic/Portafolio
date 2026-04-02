/*
 * LoadingScreen.jsx
 *
 * Full-screen loading overlay shown while the page loads (1.8 s).
 * On exit: blue layer slides left, dark layer slides right, spinner fades out.
 *
 * Z-INDEX NOTE:
 *   This component uses zIndex: 1000 so it always sits above the NavBar (100)
 *   and every other fixed element. Children use position: "absolute" (not fixed)
 *   so they remain inside this stacking context and share its z-index correctly.
 */

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function LoadingScreen({ isLoading }) {
  const [visible, setVisible] = useState(true);

  // Remove from DOM ~800 ms after the exit animation finishes
  useEffect(() => {
    if (!isLoading) {
      const t = setTimeout(() => setVisible(false), 800);
      return () => clearTimeout(t);
    }
  }, [isLoading]);

  if (!visible) return null;

  return (
    // Wrapper: covers full viewport, z-index 1000 beats NavBar (100) and everything else
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
      }}
    >
      {/* Blue layer — slides off to the LEFT on exit */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          background: "oklch(0.398 0.195 277.366)",
          zIndex: 2,
        }}
        initial={{ x: 0 }}
        animate={isLoading ? { x: 0 } : { x: "-100%" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />

      {/* Dark layer — slides off to the RIGHT on exit */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          background: "#1a202c",
          zIndex: 1,
        }}
        initial={{ x: 0 }}
        animate={isLoading ? { x: 0 } : { x: "100%" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />

      {/* Spinner — centered, fades out on exit */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
        }}
        animate={isLoading ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* .loader is defined in index.css — spinning ring animation */}
        <div className="loader" />
        <p
          style={{
            marginTop: 20,
            fontFamily: "var(--font-body)",
            fontSize: 14,
            fontWeight: 600,
            color: "rgba(255,255,255,0.7)",
            letterSpacing: "1px",
          }}
        >
          Loading...
        </p>
      </motion.div>
    </div>
  );
}
