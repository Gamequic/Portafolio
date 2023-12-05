import React from 'react';
import './Navbar.css'

import CubeButton from './buttons/CubeBT';

const Navbar = ({ children, deviceScreen, isHidden, setIsHidden }) => {
  const hide = () => {
    setIsHidden(!isHidden)
  }

  return (
    <>
      <CubeButton id='backbutton' image={process.env.PUBLIC_URL + '/hamburguerMenu.svg'} onClick={() => {hide()}} />
      <nav
        id='Nav' 
        className={isHidden ? 
          (deviceScreen==='phone'? 'hideNavPhone':'hideNav') : 
          (deviceScreen==='phone'? 'showNavPhone':'showNav')
        }
      >
        <CubeButton image={process.env.PUBLIC_URL + '/hamburguerMenu.svg'} onClick={() => {hide()}} />
        <ul className='navUl'>
          { isHidden ? null : children }
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
