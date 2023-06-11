import React from "react";
import logo from '../../assets/image/logo1.png';
import { Instagram, Tiktok, GeoAlt } from 'react-bootstrap-icons';
import "./Footer.css"

const Footer = () => {
    return (
        <footer className="landing-footer text-black pt-5 pb-4 overflow-hidden">
        <div className="my-4">
          <div className="footer-content">
            <div className="footer-main mt-3">
              <div className="footerprofile">
                <div className="profileimg mt-3">
                  <img

                    src={logo}
                    alt="Logo"
                  />
                </div>
                <div className="profiletext mt-3">
                  <p className='address'>
                    Jln. Konohagakure No.19, <br/>
                    Sebelah kantor hokage, <br/>
                    Ruko kos-kosan naruto
                  </p>
                  <div className='icon-sosmed'>
                    <div className='sosmed'>
                      <button className='btn text-light'
                        style={{ backgroundColor: "#AB464A", border: "none", borderRadius: "50%", width: "45px", height: "45px", paddingBottom: "10px" }}>
                        <Instagram />
                      </button>
                    </div>
                    <div className='sosmed'>
                      <button className='btn text-light'
                        style={{ backgroundColor: "#AB464A", border: "none", borderRadius: "50%", width: "45px", height: "45px", paddingBottom: "10px" }}>
                        <Tiktok />
                      </button>
                    </div>
                    <div className='sosmed'>
                      <button className='btn text-light'
                        style={{ backgroundColor: "#AB464A", border: "none", borderRadius: "50%", width: "45px", height: "45px", paddingBottom: "10px" }}>
                        <GeoAlt />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-link mt-3 information" >
              <h6 className="fw-bold mb-4">Information</h6>
              <p><a href="#!" className="text-dark">About Us</a></p>
              <p><a href="#!" className="text-dark">Our Gallery</a></p>
              <p><a href="#!" className="text-dark">Menu</a></p>
              <p><a href="#!" className="text-dark">Subscription</a></p>
            </div>
            <div className="footer-link mt-3 mx-3 contact" >
              <h6 className="fw-bold mb-4">Contact</h6>
              <p><a href="#!" className="text-dark">RollMe@sushi.com</a></p>
              <p><a href="#!" className="text-dark">(+62) 80123 125420</a></p>
            </div>
          </div>
        </div>
      </footer>
    )
} 

export default Footer