import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

const SubtitleTypewriter = ({ className = "" }) => {
  const [startTyping, setStartTyping] = useState(false);

  return (
    <motion.div
      className={`opacity-0 ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      onViewportEnter={() => setStartTyping(true)}
      viewport={{ once: true, amount: 0.5 }}
    >
      <h2 className="text-2xl font-semibold text-center">
        Liderando el cambio desde{" "}
        <span className="inline-block">
          {startTyping && (
            <Typewriter
              options={{
                strings: ["la Tecnología.", "la Justicia.", "la Equidad.", "el Liderazgo."],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 40,
                cursor: "|",
              }}
            />
          )}
        </span>
      </h2>
    </motion.div>
  );
};

export default SubtitleTypewriter;
