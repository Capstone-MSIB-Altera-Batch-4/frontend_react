import React from 'react'
import OurGallerySection from '../../component/PageSections/OurGallery/OurGallerySection'
import SubscriptionSection from '../../component/PageSections/Subscription/SubscriptionSection'
import About from '../../component/PageSections/About/About'
import Footer from '../../component/Footer/Footer'
import HeroSection from '../../component/PageSections/HeroSection/HeroSection'
import Navbar from '../../component/Navbar/Navbar'

const Landing = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <OurGallerySection />
      <SubscriptionSection />
      <Footer />
    </div>
  )
}

export default Landing