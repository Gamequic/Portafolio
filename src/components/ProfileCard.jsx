import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const fadeInAnimation = {
  hidden: { opacity: 0, y: -15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function ProfileCard({ image, classimage, name, url, external }) {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    console.log("Clicked profile:", name);

    // Enviar evento GA4 si disponible
    if (window.gtag) {
      window.gtag("event", "profile_click_"+name, {
        event_category: "engagement",
        event_label: name,
        value: 1,
      });
    }

    // Dar tiempo a GA4 antes de redirigir
    setTimeout(() => {
      if (external) {
        window.open(url, "_blank", "noopener,noreferrer");
      } else {
        navigate(url);
      }
    }, 200);
  };

  return (
    <motion.div
      className={
        "border-2 border-zinc-600 rounded-sm relative shadow-lg overflow-hidden cursor-pointer transition-all duration-300 group min-h-84 min-w-72 flex flex-col items-center justify-center text-center transform scale-100 hover:scale-105"
      }
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
      variants={fadeInAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleClick();
        }
      }}
      aria-label={`Open profile ${name}`}
    >
      {/* 📌 Imagen completamente centrada */}
      <div className="flex justify-center mt-6 w-full">
        <img
          src={image}
          alt={name}
          className={classimage + "rounded-lg object-cover transition-all duration-300"}
        />
      </div>

      {/* 📌 Nombre centrado */}
      <h3 className="text-center text-xl font-semibold mt-4 text-gray-800">
        {name}
      </h3>
    </motion.div>
  );
}
