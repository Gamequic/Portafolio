import React from 'react';
import './Navbar.css'

import CubeButton from './buttons/CubeBT';

const Navbar = ({ children }) => {
  const hide = () => {
    
  }

  return (
    <nav>
      <CubeButton image={process.env.PUBLIC_URL + '/hamburguerMenu.svg'} onClick={() => {console.log('a')}} />
      <ul>
        {children}
      </ul>
    </nav>
  );
};

export default Navbar;
