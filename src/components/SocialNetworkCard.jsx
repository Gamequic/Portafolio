import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaInstagram,
  FaWhatsapp,
  FaFacebook,
} from "react-icons/fa";

/**
 * Fade-in animation configuration
 * Used when the card enters the viewport
 */
const fadeInAnimation = {
  hidden: { opacity: 0, y: -15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function SocialNetworksCard({
  name,
  url,
  isGithub,
  isInstagram,
  isWhatsapp,
  isFacebook, // Facebook flag
}) {
  const [hovered, setHovered] = useState(false);

  /**
   * Step 1:
   * Detect which platform is active
   * This is used for analytics and accessibility
   */
  const getPlatform = () => {
    if (isGithub) return "GitHub";
    if (isInstagram) return "Instagram";
    if (isWhatsapp) return "WhatsApp";
    if (isFacebook) return "Facebook";
    return null;
  };

  /**
   * Step 2:
   * Handle click event
   * - Send Google Analytics event
   * - Open external link securely
   */
  const handleClick = () => {
    const platform = getPlatform();
    if (!platform || !url) return;

    console.log("Clicked:", platform);

    // Send analytics event if gtag is available
    if (window.gtag) {
      window.gtag("event", `social_click_${platform}`, {
        event_category: "engagement",
        event_label: platform,
        value: 1,
      });
    }

    // Delay navigation slightly to ensure analytics event is sent
    setTimeout(() => {
      window.open(url, "_blank", "noopener,noreferrer");
    }, 200);
  };

  /**
   * Step 3:
   * Decide which icon to render
   * Priority order is preserved
   */
  const renderIcon = () => {
    if (isGithub)
      return (
        <FaGithub
          size={36}
          className="text-gray-800 group-hover:text-gray-600 transition-colors duration-200"
        />
      );

    if (isInstagram)
      return (
        <FaInstagram
          size={36}
          className="text-pink-600 group-hover:text-pink-500 transition-colors duration-200"
        />
      );

    if (isWhatsapp)
      return (
        <FaWhatsapp
          size={36}
          className="text-green-600 group-hover:text-green-500 transition-colors duration-200"
        />
      );

    if (isFacebook)
      return (
        <FaFacebook
          size={36}
          className="text-blue-600 group-hover:text-blue-500 transition-colors duration-200"
        />
      );

    return null;
  };

  return (
    <motion.div
      role="button"
      tabIndex={0}
      aria-label={`Open ${getPlatform()} profile`}
      className="group bg-white shadow-lg rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 min-h-32 min-w-48 flex flex-col items-center justify-center text-center transform scale-100 hover:scale-105 focus:outline-none"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") handleClick();
      }}
      variants={fadeInAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <h3 className="text-xl font-semibold mt-4 text-gray-800">
        {name}
      </h3>

      <div className="mt-4">
        {renderIcon()}
      </div>
    </motion.div>
  );
}
