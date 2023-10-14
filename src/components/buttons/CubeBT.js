import React from 'react';
import './button.css'

const CubeButton = ({ image, onClick }) => {
    return (
      <button className='cubeButton' onClick={onClick}>
        <img src={image} />
      </button>
    );
};

export default CubeButton;
