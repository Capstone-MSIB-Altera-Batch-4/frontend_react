import React from "react"
import pc from '/src/assets/image/pc.png'
import hp from '/src/assets/image/hp.png'
import laptop from '/src/assets/image/laptop.png'
import "./About.css"

const About = () => {
    return( 
        <div className="about overflow-hidden">
            <div className="row">
                <div className="kiri col-md-3">
                    <div className="first pt-5">
                        <img
                            style={{width: "80%"}}
                            src={pc}
                            alt="About Us"
                        />
                        <img
                            style={{marginTop:"-30%", marginLeft:"30%"}}
                            src={laptop}
                            alt="About Us"
                        />
                    </div>
                    <div className="second px-4"><p>Our Systems</p></div>
                    <div className="third my-4">
                        <img
                            src={hp}
                            alt="About Us"
                        />
                    </div>
                </div>
                <div className="kanan col-md-7 pt-5 ms-5">
                    <div className="container1 my-auto mt-5">
                        <h3 className="fw-bold text-left">About / 阿防塗</h3>
                        <h2>Our mission is to help you run your restaurant smoothly</h2>
                    </div>
                    <div className="container2">
                        <h5 className="our-app">Our app offers a wide range of features:</h5>
                        <div className="row my-3 mt-5">
                            <div className="col-md-6 rounded-3">
                                <p className="py-5">Take orders in just a few taps</p>
                            </div>
                            <div className="col-md-6 rounded-3">
                                <p className="py-5">Process payments with ease</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 rounded-3">
                                <p className="py-5">Track inventory in real-time</p>
                            </div>
                            <div className="col-md-6 rounded-3">
                                <p className="py-5">Advanced reporting features</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About