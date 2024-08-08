import React from 'react'
import './NewsLetter.css'

export const NewsLetter = () => {
  return (
    <div className='newletter'>
      <h1>Get Exclusive Offer On Your Email</h1>
      <p>Subscribe to our newletter and stay updated</p>
      <div>
        <input type='email' placeholder='Your Email id'/>
        <button className="newbtn">Subscribe</button>
      </div>
    </div>
  )
}

