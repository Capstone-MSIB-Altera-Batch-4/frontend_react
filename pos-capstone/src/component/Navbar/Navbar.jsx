import React, { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [navbarBg, setNavbarBg] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setNavbarBg("navbar-white");
    } else {
      setNavbarBg("navbar-transparance");
    }
  };

  return (
    <div className="navbar-landing">
      <nav className={`navbar navbar-expand-lg fixed-top py-3 ${navbarBg}`}>
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item mx-5">
                <a href="#about">About Us</a>
              </li>
              <li className="nav-item mx-5">
                <a href="#ourgallery">Our Gallery</a>
              </li>
              <li className="download nav-item mx-5 px-4 py-1">
                <a href="#download">Download App</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;