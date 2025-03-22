import React from "react";
import { FaWhatsapp } from "react-icons/fa";

// 📌 Función para enviar el evento a GA4
const handleWhatsappClick = () => {
  if (window.gtag) {
    window.gtag("event", "whatsapp_click", {
      event_category: "engagement",
      event_label: "Botón de WhatsApp",
      value: 1,
    });
  }
};

const ContactMe = () => {
  return (
    <a
      href="https://wa.me/526567779087"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg flex items-center gap-2 text-lg hover:bg-green-600 transition z-30"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp size={24} className="text-white" />
      <p className="text-white">Let's create something</p>
    </a>
  );
};

export default ContactMe;