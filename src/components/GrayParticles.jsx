import { useState, useEffect, useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function GrayParticles() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    import("@tsparticles/react").then(({ initParticlesEngine }) => {
      initParticlesEngine(async engine => {
        await loadSlim(engine);
      }).then(() => setInit(true));
    });
  }, []);

  const particlesLoaded = useCallback(container => {
    console.log("Particles loaded:", container);
  }, []);

  const particlesOptions = {
    background: { color: 'transparent' },
    fpsLimit: 60,
    particles: {
      color: { value: ["#000000", "#555555", "#888888"] },
      links: {
        color: "#888888",
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        outModes: { default: "bounce" },
      },
      number: { value: 50 },
      opacity: { value: 0.6 },
      shape: { type: "circle" },
      size: { value: { min: 2, max: 4 } },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        onClick: { enable: true, mode: "push" },
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
        push: { quantity: 4 },
      },
    },
    detectRetina: true,
  };

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={particlesOptions}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            pointerEvents: "none",
            zIndex: 30,
          }}
        />
      )}
    </>
  );
}
