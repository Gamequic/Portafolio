'use client';

import styles from './ProjectCard.module.css';
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import nextConfig from '../next.config.mjs';

const ProjectCard = ({ image, description, url, width, height }) => {
  const [isClicked, setIsClicked] = useState(false);
  const router = useRouter();
  const { basePath } = nextConfig;

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 300);
    if (url) {
      const fullPath = `${basePath}/subrogates`;
      router.replace(fullPath);
    }
  };

  return (
    <div
      className={`${styles.card} transform transition duration-300 hover:scale-105 hover:shadow-lg p-4 rounded-lg ${
        isClicked ? styles.clicked : ''
      }`}
      onClick={handleClick}
    >
      <Image src={image} alt="Project Image" className={styles.image} width={width} height={height} />
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default ProjectCard;
