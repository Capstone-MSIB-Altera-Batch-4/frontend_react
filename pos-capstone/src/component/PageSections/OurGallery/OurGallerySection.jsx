import React from 'react'
import './OurGallery.style.css'

const OurGallerySection = () => {
  return (
    <section id='our-gallery-section' className='our-gallery mx-auto mt-5'>
      <div className='text-title mx-auto'>
        <div className='d-flex justify-content-between my-3'>
          <h1 className='section-title fw-bold text-white'>Our Gallery</h1>
          <h1 className='section-title fw-bold text-white'>製品写真</h1>
        </div>
      </div>
      <img src='/src/assets/device-gallery.svg' alt='device-images' className='device-images'/>
    </section>
  )
}

export default OurGallerySection