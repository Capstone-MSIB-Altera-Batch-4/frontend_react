import React from "react";
import logo from '../../assets/image/logo1.png';
import { Instagram, Tiktok, GeoAlt } from 'react-bootstrap-icons';
import "./Footer.css"

const Footer = () => {
    return (
        <footer className="landing-footer text-black pt-5 pb-4">
            <div className="text-md-left d-flex justify-items-start my-4">
                <div className="footer-content row text-md-left">
                    <div className="col-md-9 col-lg-5 col-xl-5 mx-auto mt-3 ms-5">
                        <div className="row">
                            <div className="col-md-5 mt-3 ms-4">
                                <img
                                    className=" img img-fluid d-block"
                                    src={logo}
                                    alt="Logo"
                                />
                            </div>
                            <div className="col-md-6 mt-3">
                                 <p style={{marginTop:"10%"}}>
                                     Jln. Konohagakure No.19, Sebelah kantor hokage, Ruko kos-kosan naruto
                                </p>
                                <div className='row'>
                                    <div className='col-md-2'>
                                        <button className='btn text-light' 
                                        style={{backgroundColor:"#AB464A", border:"none", borderRadius:"50%", width:"45px", height:"45px", paddingBottom: "10px"}}>
                                            <Instagram/>
                                        </button>
                                    </div>
                                    <div className='col-md-2 mx-4'>
                                        <button className='btn text-light' 
                                        style={{backgroundColor:"#AB464A", border:"none", borderRadius:"50%", width:"45px", height:"45px", paddingBottom: "10px"}}>
                                            <Tiktok/>
                                        </button>
                                    </div>
                                    <div className='col-md-2'>
                                        <button className='btn text-light' 
                                        style={{backgroundColor:"#AB464A", border:"none", borderRadius:"50%", width:"45px", height:"45px", paddingBottom: "10px"}}>
                                            <GeoAlt/>
                                        </button>       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-link col-md-2 col-lg-3 col-xl-3 mt-3 ms-3" style= {{ textAlign: "left"}}>
                        <h6 className="fw-bold mb-4 fs-4">Information</h6>
                        <p><a href="#!" className="text-dark">About Us</a></p>
                        <p><a href="#!" className="text-dark">Our Gallery</a></p>
                        <p><a href="#!" className="text-dark">Menu</a></p>
                        <p><a href="#!" className="text-dark">Subscription</a></p>
                    </div>
                    <div className="footer-link col-md-2 col-lg-3 col-xl-2 mt-3" style= {{ textAlign: "left"}}>
                        <h6 className="fw-bold mb-4 fs-4">Contact</h6>
                        <p><a href="#!" className="text-dark">RollMe@sushi.com</a></p>
                        <p><a href="#!" className="text-dark">(+62) 80123 125420</a></p>
                    </div>
                </div>
            </div>
        </footer>
    )
} 

export default Footer