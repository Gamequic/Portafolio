import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import { FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa'; // Importar los íconos

const fadeInAnimation = {
  hidden: { opacity: 0, y: -15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function SocialNetworksCard({ name, url, isGithub, isInstagram, isWhatsapp }) {
  const navigate = useNavigate();

  const [hovered, setHovered] = useState(false);

  // Función para manejar el clic y redirigir
  const handleClick = () => {
    if (url) {
      window.open(url, "_blank"); // Redirigir al URL en nueva pestaña
    }
  };

  return (
    <motion.div
      className={
        "bg-violet-900 relative bg-white shadow-lg rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 group min-h-32 min-w-48 flex flex-col items-center justify-center text-center transform scale-100 transition duration-300 hover:scale-105"
      }
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      variants={fadeInAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      onClick={handleClick} // Evento para redirigir al hacer clic
    >
      {/* 📌 Nombre centrado */}
      <h3 className="text-center text-xl font-semibold mt-4 text-gray-800">
        {name}
      </h3>

      {/* 📌 Redes sociales */}
      <div className="flex space-x-4 mt-4">
        {/* Mostrar GitHub si es necesario */}
        {isGithub && url && (
          <a href={url} target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} className="text-gray-800 hover:text-gray-600 transition-colors duration-200" />
          </a>
        )}

        {/* Mostrar Instagram si es necesario */}
        {isInstagram && url && (
          <a href={url} target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} className="text-gray-800 hover:text-gray-600 transition-colors duration-200" />
          </a>
        )}

        {/* Mostrar WhatsApp si es necesario */}
        {isWhatsapp && url && (
          <a href={url} target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={30} className="text-gray-800 hover:text-gray-600 transition-colors duration-200" />
          </a>
        )}
      </div>
    </motion.div>
  );
}
