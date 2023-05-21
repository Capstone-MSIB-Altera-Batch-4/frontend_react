import React from 'react';
import '../Navbar/Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <ul className="navbar-list">
        <li><a href="#about">About Us</a></li>
        <li><a href="#gallery">Our Gallery</a></li>
        <li><a href="#download" className="download-button px-5 py-2">Download App</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
