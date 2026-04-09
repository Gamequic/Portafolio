/**
 * MainPage.jsx — Root layout for the redesigned portfolio landing page.
 * Orchestrates all sections in order and manages the loading state.
 *
 * Section order:
 *   1. LoadingScreen  (existing, enhanced)
 *   2. NavBar         (NEW — sticky navigation)
 *   3. HeroSection    (NEW — headline + CTA)
 *   4. ProjectsSection (REDESIGNED — all 4 projects, Anson General featured)
 *   5. AboutSection   (REDESIGNED — value-first messaging)
 *   6. SkillsSection  (NEW — tech stack grid)
 *   7. ContactSection (NEW — clickable contacts + form)
 *   8. Footer         (NEW)
 */

import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

// Sections
import LoadingScreen from "../components/LoadingScreen";
import AnnouncementBar from "../components/AnnouncementBar";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import ProjectsSection from "../components/ProjectsSection";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import FloatingCTA from "../components/FloatingCTA";

export default function MainPage() {
  const [loading, setLoading] = useState(true);
  const isMobile = useMediaQuery({ maxWidth: 1020 });

  // Simulate asset load then reveal the page
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="portfolio-root" style={{ background: "#0A0A0F", minHeight: "100vh" }}>
      {/* ── Loading screen (preserved from original) ── */}
      <LoadingScreen isLoading={loading} />

      {/* ── Announcement bar (above navbar) ── */}
      <AnnouncementBar />

      {/* ── Sticky navigation ── */}
      <NavBar />

      {/* ── 1. Hero ── */}
      <HeroSection isMobile={isMobile} />

      {/* ── 2. Projects ── */}
      <ProjectsSection isMobile={isMobile} />

      {/* ── 3. About / Value prop ── */}
      <AboutSection isMobile={isMobile} />

      {/* ── 4. Skills / Tech stack ── */}
      <SkillsSection isMobile={isMobile} />

      {/* ── 5. Contact (main conversion point) ── */}
      <ContactSection isMobile={isMobile} />

      {/* ── Footer ── */}
      <Footer isMobile={isMobile} />

      {/* ── Persistent floating CTA (WhatsApp / Contact) ── */}
      <FloatingCTA />
    </div>
  );
}
