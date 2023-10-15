import React from 'react';
import './button.css'

const CubeButton = ({ image, onClick, id }) => {
    return (
      <button className='cubeButton' onClick={onClick} id={id}>
        <img src={image} alt='Burger' />
      </button>
    );
};

export default CubeButton;
