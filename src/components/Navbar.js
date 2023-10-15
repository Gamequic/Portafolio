import React, { useState } from 'react';
import './Navbar.css'

import CubeButton from './buttons/CubeBT';

const Navbar = ({ children }) => {
  const [isHidden, setIsHidden] = useState(false);

  const hide = () => {
    setIsHidden(!isHidden)
    console.log('cambio')
  }

  return (
    <>
      <CubeButton id='backbutton' image={process.env.PUBLIC_URL + '/hamburguerMenu.svg'} onClick={() => {hide()}} />
      <nav id='Nav' className={isHidden ? 'hideNav' : 'showNav'}>
        <CubeButton image={process.env.PUBLIC_URL + '/hamburguerMenu.svg'} onClick={() => {hide()}} />
        <ul className='navUl'>
          {children}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
