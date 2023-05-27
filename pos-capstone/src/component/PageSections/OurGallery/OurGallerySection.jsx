import React from 'react'
import './OurGallerySection.style.css'

const OurGallerySection = () => {
  return (
    <section id='our-gallery-section' className='our-gallery'>
      <div className='text-title'>
        <div className='d-flex justify-content-between my-3'>
          <h1 className='section-title justify-content-start fw-bold text-white'>Our Gallery</h1>
          <h1 className='section-title justify-content-end fw-bold text-white'>製品写真</h1>
        </div>
      </div>
      <img src='/src/assets/device-gallery.svg' alt='device-images' className='device-images mx-5'/>
    </section>
  )
}

export default OurGallerySection