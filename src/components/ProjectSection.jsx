import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProfileCard from "./ProfileCard";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsSection({ sectionRef }) {
  const localSectionRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const section = localSectionRef.current;
      const cards = cardsRef.current;

      // Timeline con ScrollTrigger extendido para 3 tarjetas
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=450%", // Más scroll para repartir las animaciones
          scrub: true,
          pin: true,
          anticipatePin: 1,
          markers: false, // Desactiva en producción
        },
      });

      // Espaciamos cada tarjeta en el scroll
      cards.forEach((card, index) => {
        const label = `card${index + 1}Start`;
        tl.addLabel(label, `${index * 150}%`) // Espaciado entre tarjetas
          .fromTo(
            card,
            { x: window.innerWidth, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              ease: "power2.out",
            },
            label
          );
      });
    }, localSectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={(el) => {
        localSectionRef.current = el;
        if (sectionRef) sectionRef.current = el;
      }}
      className="h-screen bg-neutral-200 flex flex-col"
    >
      <h1
        className="text-center text-3xl md:text-5xl lg:text-6xl font-bold text-neutral-700 mt-16"
        style={{ fontFamily: "'Libertinus Math', system-ui" }}
      >
        Projects
      </h1>

      <div className="relative w-full overflow-hidden flex justify-center p-12">
        <div className="flex w-max mx-auto gap-6">
            {[
            {
                image: "/public/Proyects/IMSS.svg",
                name: "Subrogates",
                url: "https://frontend.subrogados.com/",
            },
            {
                image: "/public/Proyects/LideresDelCambio.png",
                name: "Líderes del cambio",
                url: "https://LideresDelCambio.org",
            },
            {
                image: "/public/Proyects/LideresDelCambio.png",
                name: "Tercer proyecto",
                url: "https://LideresDelCambio.org/other",
            },
            ].map((card, i) => (
            <div
                key={card.name + i}
                ref={(el) => (cardsRef.current[i] = el)}
                className="opacity-0"
            >
                <ProfileCard
                image={card.image}
                name={card.name}
                classimage="w-48 h-48"
                external
                url={card.url}
                />
            </div>
            ))}
        </div>
      </div>
    </section>
  );
}
