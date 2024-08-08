import React from 'react'
import './Footer.css'
import footer_logo from '../Asset/logo_big.png'
import instagram from '../Asset/instagram_icon.png'
import pintarest from '../Asset/pintester_icon.png'
import whatsapp from '../Asset/whatsapp_icon.png'

export const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-logo'>
                <img src={footer_logo} alt='' />
                <p>SHOPPING</p>
            </div>
            <ul className='footer-link'>
                <li>Company</li>
                <li>Products</li>
                <li>Offives</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className='footer-sociel-icon'>
                <div className='footer-icon-cntainer'>
                    <img src={instagram} alt='' />
                </div>
                <div className='footer-icon-cntainer'>
                    <img src={pintarest} alt='' />
                </div>
                <div className='footer-icon-cntainer'>
                    <img src={whatsapp} alt='' />
                </div>
            </div>
            <div className='footer-copyright'>
                <hr/>
                <p>Copyright @ 2023 - All Right Reseved.</p>
            </div>
        </div>
    )
}
