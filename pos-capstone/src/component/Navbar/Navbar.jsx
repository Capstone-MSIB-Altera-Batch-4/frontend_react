import React, {useState, useEffect} from 'react';
import '../Navbar/Navbar.css';

const Navbar = () => {
  const [background, setBackground] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 5) {
      setBackground(true);
    } else {
      setBackground(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <nav>
      <ul onScroll={changeBackground} className={`${background ? "bg-white" : "transparent-bg" } navbar-list`}>
        <li><a href="#about">About Us</a></li>
        <li><a href="#gallery">Our Gallery</a></li>
        <li><a href="#download" className="download-button px-5 py-2">Download App</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
