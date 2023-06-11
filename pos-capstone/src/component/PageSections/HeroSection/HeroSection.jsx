import React from "react";
import "./HeroSection.css"; // Impor file
import heroImage from "../../../assets/img/HeroImage.png"; // Impor gambar dari folder assets/images
import profil from "../../../assets/img/Profil.png";

const HeroSection = () => {
  return (
    <div className="hero row min-vh-75">
        <div className="hero-left col-lg-3 pe-0">
          <div className="heroimg text-center">
            <img src={heroImage} />
          </div>
        </div>
        <div className="hero-right col-lg-9 px-0">
          <div className="herobody">
            <h1>
              Say goodbye to messy <br />
              order-taking and billing <br />
              processes.</h1>
            <p>
              Our user-friendly interface is perfect for both front and back
              of house operations. With just a few taps, you can take orders, <br />
              track inventory, and process payments.
            </p>
            <button>Download Now</button>
          </div>
          <div className="herofooter row justify-content-between mx-0">
            <div className="happyclient col-lg-6 justify-content-center mb-2">
              <h1>100+</h1>
              <p className='ms-3'>Happy <br />Clients</p>
            </div>
            <div className="mt-2 profile col-lg-6 justify-content-center">
              <img src={profil} alt="profil" width={100} height={100} />
              <div className="profiletext ms-3">
                <p className='mb-0'>
                  “This POS app really upscalling<br />
                  my bussiness in to the next  <br />
                  level!”
                </p>
                <p className='mb-0'>
                  Ryan Floyd - Owner of Sushi Restaurant
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default HeroSection;