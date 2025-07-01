import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// proyect imports
import LoadingScreen from "./../components/LoadingScreen";
import Subtitle from "./../components/Subtitle";
import Ilustration from "./../components/Ilustration";
import SocialNetworksCard from './../components/SocialNetworkCard'
import CenteredZoomingTitle from "../components/CenteredZoomingTitle";
import AboutScrollSection from "../components/AboutScrollSection";
import ProjectsSection from "../components/ProjectSection";

gsap.registerPlugin(ScrollTrigger);

const fadeInAnimation = {
  hidden: { opacity: 0, y: -25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function MainPage() {
  const [loading, setLoading] = useState(true);

  const isMobile = useMediaQuery({ maxWidth: 1020 });

  const h1SectionRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500); // Simula carga
  }, []);

  return (
    <div className="app-container" style={{minHeight: '885vh', maxWidth:'100vw'}}>

    <LoadingScreen isLoading={loading} />

    <section
      ref={h1SectionRef}
      className="content-section flex h-screen relative"
    >
      <div className="absolute inset-0 z-0">
        <Ilustration />
      </div>

      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center bg-black/85">
        <CenteredZoomingTitle h1SectionRef={h1SectionRef} isMobile={isMobile} />

        <motion.div
          className="text-[18px] font-bold lg:text-lg mt-4"
          variants={fadeInAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
        >
          <Subtitle />
        </motion.div>
      </div>
    </section>

    <section
      className="content-section flex flex-col lg:flex-row items-center justify-center h-screen"
    ></section>

    <section
      className="content-section z-20 flex flex-col lg:flex-row items-center justify-center h-[125vh] bg-neutral-200"
    >
      <AboutScrollSection />
    </section>

    <ProjectsSection
      isMobile={isMobile}
    />

    <section
      className="items-center justify-center flex flex-col w-screen bg-slate-800"
      style={{ height: '33vh' }}
    >

      <motion.h1
        className="text-center text-3xl md:text-5xl lg:text-6xl font-bold text-slate-200"
        style={{ fontFamily: "'Libertinus Math', system-ui" }}
        variants={fadeInAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 1 }}
      >
        Optimize your business
      </motion.h1>

      <div className="relative w-full flex sm:justify-start lg:justify-center">
          <div 
            className="overflow-x-auto p-4 scrollbar-hide flex sm:justify-start lg:justify-center"
            ref={(el) => {
              if (el) el.scrollLeft = 0; // 📌 Asegura que el scroll empiece desde la izquierda
            }}
          >
            <div className="flex items-center justify-center space-x-6 w-max sm:mx-0 lg:mx-auto">
              <SocialNetworksCard
                name="Gamequic"
                url="https://github.com/Gamequic"
                isGithub={true}
                isInstagram={false}
                isWhatsapp={false}
              />

              <SocialNetworksCard
                name="demian.calleros0"
                url="https://www.instagram.com/demian.calleros0/"
                isGithub={false}
                isInstagram={true}
                isWhatsapp={false}
              />

              <SocialNetworksCard
                name="Demian Calleros"
                url="https://wa.me/526567779087"
                isGithub={false}
                isInstagram={false}
                isWhatsapp={true}
              />
            </div>
          </div>
        </div>
    </section>
    </div>
  );
}