import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className='footer-content-left'>
            <img src={assets.logo}/>
            <p>Food provides essential nutrients for overall health and well- provides essential nutrients for overall healt provides essential nutrients for.</p>
            <div className='footer-social-icons'>
                <img src={assets.facebook_icon}/>
                <img src={assets.twitter_icon}/>
                <img src={assets.linkedin_icon}/>
            </div>
        </div>
        <div className='footer-content-center'>
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className='footer-content-right'>
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-232-323-3323</li>
                <li>tomato@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr></hr>
      <p className='footer-copyright'>Copyright 2024 © Tomato.com - All Rights Reserved.</p>
    </div>
  )
}

export default Footer
