'use client';

import styles from './ProjectCard.module.css';
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import config from './../next.config.mjs';

const ProjectCard = ({ image, description, url, width, height }) => {
  const [isClicked, setIsClicked] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 300);
    if (url) {
      // Get base path from config
      const basePath = process.env.NODE_ENV === 'production' ? config.basePath : '';
      
      // Clean both the basePath and url from leading/trailing slashes
      const cleanBasePath = basePath.replace(/^\/|\/$/g, '');
      const cleanUrl = url.replace(/^\/|\/$/g, '');
      
      // Construct the final URL with proper slash handling
      const finalUrl = cleanBasePath ? `/${cleanBasePath}/${cleanUrl}` : `/${cleanUrl}`;
      
      router.push(finalUrl);
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
