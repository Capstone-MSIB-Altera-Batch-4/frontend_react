import React from "react";
import logo from '../../assets/image/logo1.png';
import { Instagram, Tiktok, GeoAlt } from 'react-bootstrap-icons';
import "./Footer.css"

const Footer = () => {
    return (
        <footer className="landing-footer text-black pt-5 pb-4 overflow-hidden">
            <div className="my-4">
                <div className="footer-content row">
                    <div className="col-md-5 mt-3 ms-5">
                        <div className="row">
                            <div className="col-md-5">
                                <img
                                    
                                    src={logo}
                                    alt="Logo"
                                />
                            </div>
                            <div className="col-md-5 mt-3">
                                 <p style={{fontSize: "16px"}}>
                                     Jln. Konohagakure No.19, Sebelah kantor hokage, Ruko kos-kosan naruto
                                </p>
                                <div className='row'>
                                    <div className='col-md-3'>
                                        <button className='btn text-light' 
                                        style={{backgroundColor:"#AB464A", border:"none", borderRadius:"50%", width:"45px", height:"45px", paddingBottom: "10px"}}>
                                            <Instagram/>
                                        </button>
                                    </div>
                                    <div className='col-md-3'>
                                        <button className='btn text-light' 
                                        style={{backgroundColor:"#AB464A", border:"none", borderRadius:"50%", width:"45px", height:"45px", paddingBottom: "10px"}}>
                                            <Tiktok/>
                                        </button>
                                    </div>
                                    <div className='col-md-3'>
                                        <button className='btn text-light' 
                                        style={{backgroundColor:"#AB464A", border:"none", borderRadius:"50%", width:"45px", height:"45px", paddingBottom: "10px"}}>
                                            <GeoAlt/>
                                        </button>       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-link col-md-2 mt-3 ms-5" >
                        <h6 className="fw-bold mb-4">Information</h6>
                        <p><a href="#!" className="text-dark">About Us</a></p>
                        <p><a href="#!" className="text-dark">Our Gallery</a></p>
                        <p><a href="#!" className="text-dark">Menu</a></p>
                        <p><a href="#!" className="text-dark">Subscription</a></p>
                    </div>
                    <div className="footer-link col-md-2 mt-3 ms-5" >
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