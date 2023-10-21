import React from 'react';
import './Card.css'

const Card = ({ children, title }) => {
    return (
      <section className='sectionCard'>
        <h1>{title}</h1>
        <p>{children}</p>
      </section>
    );
};

export default Card;
