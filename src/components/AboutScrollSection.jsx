import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function StickyRail() {
  const railRef = useRef(null);
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        // Termina 100vh antes del final del componente
        end: () =>
          `${containerRef.current.offsetHeight - window.innerHeight * 2}px`,
        scrub: true,
        pin: railRef.current,
        pinSpacing: false,
        markers: false,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-[300vh] grid grid-cols-2">
      {/* Sticky rail */}
      <div ref={railRef} className="sticky top-0 h-screen flex flex-col justify-center items-center">
        <div className="flex flex-row items-center justify-center p-6">
          <div className="bg-neutral-700 h-full w-[5px] mx-4" />
          <h1
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-neutral-700"
            style={{ fontFamily: "'Libertinus Math', system-ui" }}
          >
            Why Demian?
          </h1>
        </div>
      </div>

      {/* Text content */}
      <div className="p-8 text-neutral-700">
        <div>
          <h2 className="text-4xl" style={{ fontFamily: "'Libertinus Math', system-ui" }}>
            About me
          </h2>
          <p className="text-2xl">
            As a computer science student, I developed a strong appreciation for the elegance and logic behind technology.
            What began as curiosity has grown into a focused and thoughtful approach to software development.
            I enjoy creating clean, efficient solutions, and I strive to keep learning while maintaining a balanced mindset—
            both professionally and personally.
          </p>
        </div>

        <div className="mt-[80vh]">
          <h2 className="text-4xl" style={{ fontFamily: "'Libertinus Math', system-ui" }}>
            My vision for my future
          </h2>
          <p className="text-2xl">
            I'm deeply committed to a long-term career in technology.
            I see this field not just as a job, but as a space to grow, contribute, and continuously challenge myself.
            I'm prepared to invest the necessary effort and discipline to evolve alongside it.
          </p>
        </div>
      </div>
    </div>
  );
}
