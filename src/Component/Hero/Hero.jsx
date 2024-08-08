import React from 'react'
import './Hero.css'
import hand from '../Asset/hand_icon.png';
import Arrow from '../Asset/arrow.png';
import hero_image from '../Asset/hero_image.png'

export const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className='hero-hand-icon'>
                    <p>new</p>
                    <img src={hand} alt=''/>
                </div>
                <p>Collection</p>
                <p>For everyone</p>
            </div>
            <div className='btn'>
                <div>Latest Collection</div>
                <img src={Arrow} alt=''/>
            </div>
        </div>

        <div className='hero-right'>
            <img src={hero_image} alt='' style={{width:"100%"}}/>
        </div>
    </div>
  )
}
