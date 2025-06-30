import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// proyect imports
import Sidebar from "./../components/Sidebar";
import LoadingScreen from "./../components/LoadingScreen";
import Subtitle from "./../components/Subtitle";
import Ilustration from "./../components/Ilustration";
import ProfileCard from "./../components/ProfileCard";
import SocialNetworksCard from './../components/SocialNetworkCard'
import CenteredZoomingTitle from "../components/CenteredZoomingTitle";
import AboutScrollSection from "../components/AboutScrollSection";

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

  const sections = {
    video: useRef(null),
    section1: useRef(null),
    section2: useRef(null),
    aboutUs: useRef(null),
  };

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app-container" style={{minHeight: '600vh'}}>

    <Sidebar
      scrollToSection={scrollToSection}
      sections={sections}
    />

    <LoadingScreen isLoading={loading} />

    <section
      ref={h1SectionRef}
      className="content-section flex h-screen relative"
    >
      <div className="absolute inset-0 z-0">
        <Ilustration />
      </div>

      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center bg-black/85">
        <CenteredZoomingTitle h1SectionRef={h1SectionRef} />

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
      ref={sections.section1}
      className="content-section flex flex-col lg:flex-row items-center justify-center h-screen"
    ></section>

    <section
      ref={sections.section1}
      className="content-section z-20 flex flex-col lg:flex-row items-center justify-center h-[125vh] bg-neutral-200"
    >
      <AboutScrollSection />
    </section>

    <section
      ref={sections.aboutUs}
      className="content-section items-center justify-center flex flex-col h-screen bg-slate-800"
    >

      <motion.h1
        className="text-center text-3xl md:text-5xl lg:text-6xl font-bold text-slate-200"
        style={{ fontFamily: "'Montserrat Alternates', sans-serif" }}
        variants={fadeInAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 1 }}
      >
        Projects
      </motion.h1>

      <div className="relative w-full flex sm:justify-start lg:justify-center">
          <div 
            className="overflow-x-auto p-4 scrollbar-hide w-full flex sm:justify-start lg:justify-center"
            ref={(el) => {
              if (el) el.scrollLeft = 0; // 📌 Asegura que el scroll empiece desde la izquierda
            }}
          >
            <div className="flex space-x-6 w-max sm:mx-0 lg:mx-auto">
              <ProfileCard
                image="/public/Proyects/IMSS.svg"
                name="Subrogates"
                classimage="w-48 h-48"
                // url='/subrogates'
                external
                url="https://frontend.subrogados.com/" // CHANGE LATER - TODO - !IMPORTANT
              />
              {/* <ProfileCard
                image="/public/Proyects/IMSS.svg"
                name="LivePreview"
                classimage="w-48 h-48"
              /> */}
              <ProfileCard
                image="/public/Proyects/LideresDelCambio.png"
                name="Líderes del cambio"
                classimage="w-48 h-48"
                external
                url='https://LideresDelCambio.org'
              />
              {/* <ProfileCard
                image="/public/Proyects/IMSS.svg"
                name="StoreGest App"
                classimage="w-48 h-48"
              /> */}
            </div>
          </div>
        </div>
    </section>

    <section
      ref={sections.section1}
      className="content-section flex flex-col lg:flex-row items-center justify-center h-screen bg-slate-900"
    >
      <div className="w-full lg:w-1/2 text-slate-200 flex flex-col items-center justify-center p-6 space-y-4">
        <motion.h1
          className="text-center text-3xl md:text-5xl lg:text-6xl font-bold"
          style={{ fontFamily: "'Montserrat Alternates', sans-serif" }}
          variants={fadeInAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
        >
          My Vision for the Future
        </motion.h1>
        <motion.img
          src="/public/assets/Future.jpg"
          className="rounded-lg aspect-[16/9] object-cover"
          variants={fadeInAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
        />
      </div>

      <div className="w-full lg:w-1/2 text-slate-200 flex items-center justify-center p-6 space-y-4">
        <motion.p 
          className="text-center text-[18px] font-bold"
          variants={fadeInAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
        >
          <ul>
            <li>  🔹 Keep growing as a Fullstack Developer.</li>
            <li>  🔹 Build impactful and meaningful projects.</li>
            <li>  🔹 Learn and adapt to new technologies.</li>
          </ul>
        Shaping the future, one line of code at a time.
        </motion.p>
      </div>
    </section>

    <section
      ref={sections.aboutUs}
      className="content-section items-center justify-center flex flex-col h-screen bg-slate-800"
    >

      <motion.h1
        className="text-center text-3xl md:text-5xl lg:text-6xl font-bold text-slate-200"
        style={{ fontFamily: "'Montserrat Alternates', sans-serif" }}
        variants={fadeInAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 1 }}
      >
        Let's stay in touch
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