import React from 'react';
// import './Header.css'

const Header = () => {
    return (
      <header>
        <h1>Demian Calleros</h1>
        <img src={process.env.PUBLIC_URL + '/Me.jpg'} />
      </header>
    );
};

export default Header;
