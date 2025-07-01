import React, { useEffect, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

export default function CenteredZoomingTitle ({ h1SectionRef, isMobile }) {

    const cRef = useRef(null);
    const h1Ref = useRef(null);

    useLayoutEffect(() => {
        const c = cRef.current;
        const h1 = h1Ref.current;

        if (c && h1) {
            const cRect = c.getBoundingClientRect();
            const h1Rect = h1.getBoundingClientRect();
            const cCenter = cRect.left + cRect.width / 2;
            const screenCenter = window.innerWidth / 2;
            const deltaX = screenCenter - cCenter;

            // ⬅️ Desplazar el h1 para centrar la "C"
            gsap.set(h1, { x: deltaX });
        }
    }, []);


    useEffect(() => {
        const lenis = new Lenis({ smooth: true });

        function raf(time) {
        lenis.raf(time);
        ScrollTrigger.update();
        requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        gsap.registerPlugin(ScrollTrigger);

        // 🔥 Animación del h1 que escala y pinnea
        gsap.fromTo(
        h1Ref.current,
        { scale: 1, x: 0, y: 0, opacity: 1 },
        {
            x: 0,
            scale: isMobile ? 150 : 100,
            opacity: 1,
            scrollTrigger: {
                trigger: h1SectionRef.current,
                start: "top top",
                end: "bottom top",
                scrub: -2,
                pin: true,
                pinSpacing: false,
                markers: false,
            },
        }
        );

        gsap.to(h1Ref.current, {
            opacity: 0,
            scrollTrigger: {
                trigger: h1SectionRef.current,
                start: isMobile ? "+=900vh" : "+=1100vh",
                end: "+=10vh",
                scrub: true,
                markers: false,
            },
        });

        // 🔄 Refresca para que se sincronice desde el principio
        ScrollTrigger.refresh();

        // 🧼 Limpieza al desmontar
        return () => {
        ScrollTrigger.killAll();
        lenis.destroy();
        };
    }, []);

    return (
    <h1
        ref={h1Ref}
        className="text-4xl font-bold lg:text-8xl text-black bg-neutral-200 relative w-full text-center"
        style={{ fontFamily: "'Doto'", fontWeight: 700 }}
        >
        Demian <span className="inline-block relative">
            <span className="text-center inline-block" ref={cRef}>C</span>
        </span>alleros
    </h1>
    )
}