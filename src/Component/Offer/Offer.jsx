import React from 'react'
import './Offer.css'
import exclusive from '../Asset/exclusive_image.png'

export const Offer = () => {
    return (
        <div className='offers'>
            <div className='offer-left'>
            <h1>Exclusive</h1>
            <h2>Offer For You</h2>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button>Check Now</button>
            </div>
            <div className='offer-right'>
                <img src={exclusive} alt='sdjd' style={{width:"70%"}}/>
            </div>
        </div>
    )
}
