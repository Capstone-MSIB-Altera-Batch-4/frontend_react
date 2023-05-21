import React from "react";
import "./HeroSection.css"; // Impor file
import heroImage from "../../../assets/img/HeroImage.png"; // Impor gambar dari folder assets/images
import profil from "../../../assets/img/Profil.png";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-image-container">
        <img src={heroImage} alt="Hero" className="hero-image" />
      </div>

      <div className="w-full">
        <div className="hero-content">
          <h1 className="fw-bold">Say goodbye to messy order-taking and billing processes.</h1>
          <p className="mt-5">
            Our user-friendly interface is perfect for both front and back of
            house operations. With just a few taps, you can take orders, track
            inventory, and process payments.
          </p>
          <button className="button px-5 py-3">Download Now</button>
        </div>

        <div className="hero-text">
          <div className="happy-client">
            <h1>100+ </h1>
            <p>Happy Client</p>
          </div>

          <div className="profil">
            <img src={profil} alt="Profil" className="profil-image my-2" />

            <div className="pofile-text d-flex">
              <p className="p1">
                “This POS app really upscaling my business to the next level!”
              </p>
              <p className="p2">Ryan Floyd, Owner of Sushi Restaurant</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
