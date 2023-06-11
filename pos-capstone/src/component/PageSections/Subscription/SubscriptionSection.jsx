import React from 'react'
import './Subcription.style.css'

const SubscriptionSection = () => {
  return (
    <section className='subscribe-section'>
      <div className='text-center text-white mx-auto'>
        <h1 className='subscribe-title fw-bold'>Get offers straight to your inbox</h1>
        <p>Sign up for our latest newsletter</p>
      </div>
      <form className='subscribe-form'>
        <input
          type='email'
          className='email-form text-white bg-transparent px-4 py-3'
          id="email"
          name="email"
          placeholder='Enter Email Address'
          onChange={""}
        // value={""}
        />
        <button className='button-submit'>
          <img src='/src/assets/checked-icon.svg' />
        </button>
      </form>
    </section>
  )
}

export default SubscriptionSection