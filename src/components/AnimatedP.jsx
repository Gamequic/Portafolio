import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

const AnimatedP = ({ text, className = "" }) => {
  const [startTyping, setStartTyping] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [isTypingDone, setIsTypingDone] = useState(false); // Evita que se reinicie

  return (
    <motion.div
      className={`opacity-0 ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      onViewportEnter={() => {
        if (!startTyping && !isTypingDone) {
          setStartTyping(true);
        }
      }}
      viewport={{ once: true, amount: 0.5 }} // Asegura que solo se ejecute una vez
    >
      <p className={`${className}`}>
        {startTyping && !isTypingDone && (
          <Typewriter
            options={{
              strings: [text],
              autoStart: true,
              delay: 0.01,
              cursor: showCursor ? "|" : "",
              deleteSpeed: Infinity, // Evita el borrado
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString(text)
                .callFunction(() => {
                  setShowCursor(false); // Oculta el cursor al finalizar
                  setIsTypingDone(true); // Evita futuras ejecuciones
                })
                .start();
            }}
          />
        )}
      </p>
    </motion.div>
  );
};

export default AnimatedP;
