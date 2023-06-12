import React from "react"
import aboutImage from "../../../assets/img/AboutImage.png"
import "./About.css"

const About = () => {
    return (
        <section id="about">
            <div className="about row min-vh-75">
                <div className="about-left col-lg-3 pe-0">
                    <div className="aboutimg text-center">
                        <img src={aboutImage} alt="About Us" />
                    </div>
                </div>
                <div className="about-right col-lg-9 px-0">
                    <div className="aboutbody">
                        <h2 className="fw-bold text-left">About / 阿防塗</h2>
                        <h1>
                            Our mission is to help <br />
                            you run your restaurant <br />
                            smoothly</h1>
                    </div>
                    <div className="aboutfooter text-center">
                        <h5 className="our-app text-start">Our app offers a wide range of features:</h5>
                        <div className="row">
                            <div className="col-md-6">
                                <p className="py-5">Take orders in just a few taps</p>
                            </div>
                            <div className="col-md-6">
                                <p className="py-5">Process payments with ease</p>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col-md-6">
                                <p className="py-5">Track inventory in real-time</p>
                            </div>
                            <div className="col-md-6">
                                <p className="py-5">Advanced reporting features</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ourgallery">
                <div className="col-lg-2"></div>
                <div className="col-lg-10"></div>
            </div>
        </section>
    )
}

export default About