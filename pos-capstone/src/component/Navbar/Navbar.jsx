import React from 'react';
import '../Navbar/Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <ul className="navbar-list">
        <li><a href="#about">About Us</a></li>
        <li><a href="#gallery">Our Gallery</a></li>
        <li><a href="#download" className="download-button">Download Now</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
