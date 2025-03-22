import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./LoaderScreen.css";

const LoadingScreen = ({ isLoading }) => {
  const [isVisible, setIsVisible] = useState(true);

  // Cuando isLoading pase a false, esperar la animación y ocultar el componente
  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => setIsVisible(false), 1000); // Ajustar tiempo según duración total de animaciones
    }
  }, [isLoading]);

  if (!isVisible) return null; // Remueve el componente del DOM después de la animación

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 overflow-hidden">
      {/* Fondo azul (se desliza primero) */}
      <motion.div
        className="slide-bg fixed inset-0"
        initial={{ x: 0 }}
        animate={isLoading ? { x: 0 } : { x: "-100%" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />

      {/* Fondo negro (se desliza después) */}
      <motion.div
        className="slide-black fixed inset-0"
        initial={{ x: 0 }}
        animate={isLoading ? { x: 0 } : { x: "100%" }}
        transition={{ duration: 0.6, ease: "easeInOut"}}
      />

      {/* Loader (siempre visible hasta el final) */}
      <motion.div
        className="loader-container fixed inset-0 flex items-center justify-center"
        initial={{ opacity: 1 }}
        animate={isLoading ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
        onAnimationComplete={() => !isLoading && setIsVisible(false)} // Oculta al final
        style={{ pointerEvents: isLoading ? "auto" : "none" }}
      >
        <div className="flex flex-col items-center">
          <div className="loader"></div>
          <p className="mt-4 text-lg font-semibold">Loading...</p>
        </div>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
