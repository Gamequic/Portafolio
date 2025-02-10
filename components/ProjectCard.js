'use client';

import styles from './ProjectCard.module.css';
import { useState } from 'react';

const ProjectCard = ({ image, description, url }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true); // Activa la animación
    setTimeout(() => setIsClicked(false), 300); // Restaura el estado después de la animación
    if (url) {
      window.location.href = url;
    }
  };

  return (
    <div
      className={`${styles.card} transform transition duration-300 hover:scale-105 hover:shadow-lg p-4 rounded-lg ${
        isClicked ? styles.clicked : ''
      }`}
      onClick={handleClick}
    >
      <img src={image} alt="Project Image" className={styles.image} />
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default ProjectCard;
