import { useState, useEffect } from "react";

export default function Sidebar({ scrollToSection, sections }) {
  const [isOpen, setIsOpen] = useState(false);

  // Cerrar el menú al hacer clic fuera de él
  useEffect(() => {
    function handleClickOutside(event) {
      if (isOpen && !event.target.closest("#sidebar") && !event.target.closest("#menuButton")) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <>
      {/* Botón de menú hamburguesa (visible en todas las pantallas) */}
      <button 
        id="menuButton"
        className="menuButton fixed top-4 left-4 z-50 p-2 bg-gray-900 text-white rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Sidebar con z-20, fondo translúcido y desplazamiento del contenido */}
      <div
        id="sidebar"
        className={`fixed top-0 left-0 h-screen w-64 bg-opacity-80 backdrop-blur-md text-white z-50 
                    transform ${isOpen ? "translate-x-0" : "-translate-x-full"} 
                    transition-transform duration-300 ease-in-out`}
      >
        {/* Botón para cerrar el menú */}
        <button
          className="absolute top-4 right-4 text-white text-2xl"
          onClick={() => setIsOpen(false)}
        >
          ✕
        </button>

        {/* Contenido del menú */}
        <nav className="flex flex-col space-y-4 p-6">
          <button className="menuButton" onClick={() => { scrollToSection(sections.video); setIsOpen(false); }}>Inicio</button>
          <button className="menuButton" onClick={() => { scrollToSection(sections.section1); setIsOpen(false); }}>Organización</button>
          <button className="menuButton" onClick={() => { scrollToSection(sections.aboutUs); setIsOpen(false); }}>Sobre nosotros</button>
          <button className="menuButton" onClick={() => { scrollToSection(sections.section2); setIsOpen(false); }}>Redes Sociales</button>
        </nav>
      </div>

      {/* Overlay oscuro al abrir el menú (desaparece al cerrar) */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-opacity-40 z-10"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}
