import React from 'react';
import './Card.css'

const Card = ({ children, title }) => {
    return (
      <section className='sectionCard'>
        <h1 style={{color: 'var(--white)'}} >{title}</h1>
        <p style={{color: 'var(--white)'}} >{children}</p>
      </section>
    );
};

export default Card;
