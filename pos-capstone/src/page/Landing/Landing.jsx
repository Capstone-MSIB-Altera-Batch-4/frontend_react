import React from 'react'
import "./Landing.style.css"
import Navbar from '../../component/Navbar/Navbar'
import HeroSection from '../../component/PageSections/HeroSection/HeroSection';
import About from '../../component/PageSections/About/About';
import OurGallerySection from '../../component/PageSections/OurGallery/OurGallerySection';
import SubscriptionSection from '../../component/PageSections/Subscription/SubscriptionSection';
import Footer from '../../component/Footer/Footer';

const Landing = () => {
  return (
    <div className='landing overflow-hidden'>
      <Navbar />
      <HeroSection />
      <About />
      <OurGallerySection />
      <SubscriptionSection />
      <Footer/>
    </div>
  )
}

export default Landing