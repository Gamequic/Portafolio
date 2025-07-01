import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProfileCard from "./ProfileCard";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsSection({ sectionRef, isMobile }) {
  const localSectionRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    if (isMobile) return; // 🚫 No aplicar animación en móvil

    const ctx = gsap.context(() => {
      const section = localSectionRef.current;
      const cards = cardsRef.current;

      // Timeline con ScrollTrigger extendido para 3 tarjetas
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=450%",
          scrub: true,
          pin: true,
          anticipatePin: 1,
          markers: false,
        },
      });

      // Espaciamos cada tarjeta en el scroll
      cards.forEach((card, index) => {
        const label = `card${index + 1}Start`;
        tl.addLabel(label, `${index * 150}%`).fromTo(
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
  }, [isMobile]);

  return (
    <section
      ref={(el) => {
        localSectionRef.current = el;
        if (sectionRef) sectionRef.current = el;
      }}
      className="min-h-screen bg-neutral-200 flex flex-col"
    >
      <h1
        className="text-center text-3xl md:text-5xl lg:text-6xl font-bold text-neutral-700 mt-16"
        style={{ fontFamily: "'Libertinus Math', system-ui" }}
      >
        Projects
      </h1>

      <p className="text-neutral-600 text-center max-w-xl mx-auto mt-4">
        Some project documentation is still in progress and will be available soon on GitHub.
      </p>

      <div className={`relative w-full overflow-hidden flex justify-center p-12`}>
        <div
          className={`flex ${
            isMobile ? "flex-col items-center gap-12" : "flex-row gap-6 w-max mx-auto"
          }`}
        >
          {[
            {
              image: "/public/Proyects/IMSS.svg",
              name: "Subrogates",
              url: "https://github.com/Gamequic/LivePreview",
            },
            {
              image: "/public/Proyects/LideresDelCambio.png",
              name: "Líderes del cambio",
              url: "https://LideresDelCambio.org",
            },
            {
              image: "/public/Proyects/ArenasCRM.png",
              name: "ArenasCRM",
              url: "https://github.com/Gamequic/ArenasCRM_Front",
            },
          ].map((card, i) => (
            <div
              key={card.name + i}
              ref={(el) => (cardsRef.current[i] = el)}
              className={isMobile ? "opacity-100" : "opacity-0"}
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
