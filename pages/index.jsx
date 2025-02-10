import dynamic from 'next/dynamic';
import Image from 'next/image';

import Ilustration from './../components/Ilustration';
import Title from './../components/Title';
import ProjectCard from './../components/ProjectCard';
const SubtitleClient = dynamic(() => import('./../components/subtitle'), { ssr: false });

import styles from './styles.module.css'; // Para estilos generales de la página
import aboutMeStyles from './aboutme.module.css'; // Estilos locales de About Me
import projectStyles from './project.module.css'; // Estilos para los proyectos

export default function HomePage() {
  return (
    <>
      <header className={`${styles.header} ${styles.responsiveHeader}`}>
        <div className={styles.titleContainer}>
          <Title>Demian<br />Calleros</Title>
          <SubtitleClient />
        </div>
        <div className={styles.ilustration}>
          <Ilustration />
        </div>
      </header>
      <main className={styles.main}>
        <h2 className={styles.h2}>About me</h2>
        <div className={`${aboutMeStyles.aboutMe} ${aboutMeStyles.responsiveAboutMe}`}>
          <Image src="/Me.jpg" alt="Me" height={250} width={250} />
          <p>
            I’ve been coding since 12, drawn in by the thrill of building things from scratch. As a
            full-stack developer, I’ve explored the entire web stack, but the backend is where I
            find my spark. Now, I’m focused on mastering it, optimizing systems, and solving
            real-world problems. Ready to dive deep and create what powers the future.
          </p>
        </div>
        <h2 className={styles.h2}>Projects</h2>
        <div className={projectStyles.projectGrid}>
          <ProjectCard
            image="/Proyects/IMSS.svg"
            url="subrogates"
            description="Subrogates System for IMSS"
          />
        </div>
      </main>
    </>
  );
}
