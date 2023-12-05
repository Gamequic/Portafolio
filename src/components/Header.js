import React from 'react';
import './Header.css'

const Header = ({ children }) => {
    return (
      <>
        <header className='Mainheader'>
          <div className='headerContainer'>
            {children}
          </div>
        </header>
      </>
    );
};

export default Header;
