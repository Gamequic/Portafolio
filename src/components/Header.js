import React from 'react';
import './Header.css'

const Header = ({ children }) => {
    return (
      <>
        <header className='Mainheader'>
          {children}
          <img className='imgme' src={process.env.PUBLIC_URL + '/Me.jpg'} alt='Me' />
        </header>
      </>
    );
};

export default Header;
