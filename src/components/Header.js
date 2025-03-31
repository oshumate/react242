import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <>
      <div className="header">
        Charliovski's
      </div>

      <div className="navbar">
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul className={menuActive ? 'active' : ''}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/menus">Menus</Link></li>
          <li><Link to="/reservations">Reservations</Link></li>
          <li><Link to="/order">Order Online</Link></li>
        </ul>
      </div>
    </>
  );
};

export default Header;
