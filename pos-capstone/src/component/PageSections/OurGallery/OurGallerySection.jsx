import React from 'react'
import './OurGallerySection.style.css'
import deviceImage from '../../../assets/device-gallery.svg'

const OurGallerySection = () => {
  return (
    <section id='ourgallery' className='our-gallery'>
      <div className='text-title'>
        <div className='d-flex justify-content-between my-3'>
          <h1 className='section-title justify-content-start fw-bold text-white'>Our Gallery</h1>
          <h1 className='section-title justify-content-end fw-bold text-white'>製品写真</h1>
        </div>
      </div>
      <img src={deviceImage} alt='device-images' className='device-images text-center'/>
    </section>
  )
}

export default OurGallerySection