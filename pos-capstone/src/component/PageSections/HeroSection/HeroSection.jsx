import React from "react";
import "./HeroSection.css"; // Impor file
import heroImage from "../../../assets/img/HeroImage.png"; // Impor gambar dari folder assets/images
import profil from "../../../assets/img/Profil.png";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="about overflow-hidden" id="about">
        <div className="row">
          <div className="left col-md-3">
            <div className="gambar">
              <img src={heroImage} alt="About Us" />
            </div>
          </div>
          <div className="right col-md-9 px-0">
            <div className="content1">
              <h2>Say goodbye to messy order-taking and billing processes.</h2>
              <p>
                Our user-friendly interface is perfect for both front and back
                of house operations. With just a few taps, you can take orders,
                track inventory, and process payments.
              </p>
              <button className="py-2">Download Now</button>
            </div>
            <div className="content2">
              <div className="row">
                <div className="col-md-6 mt-2">
                  <div className="row ms-5">
                    <div className="col-md-7">
                      <h1>100+</h1>
                    </div>
                    <div className="col-md-4 mt-4">
                      <h3 style={{ color: "black" }}>Happy Clients</h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mt-3">
                  <div className="row ms-5">
                    <div className="col-md-2 mt-3">
                      <img src={profil} alt="profil" />
                    </div>
                    <div className="col-md-10">
                      <p style={{ marginRight: "40%" }}>
                        “This POS app really upscalling my bussiness in to the
                        next level!”
                      </p>
                      <p style={{ fontWeight: "bold" }}>
                        Ryan Floyd - Owner of Sushi Restaurant
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;