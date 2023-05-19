import React from 'react'
import OurGallerySection from '../../component/PageSections/OurGallery/OurGallerySection'
import SubscriptionSection from '../../component/PageSections/Subscription/SubscriptionSection'
import About from '../../component/PageSections/About/About'
import Footer from '../../component/Footer/Footer'

const Landing = () => {
  return (
    <div>
      <About />
      
      <OurGallerySection />
      <SubscriptionSection />
      <Footer />
    </div>
  )
}

export default Landing