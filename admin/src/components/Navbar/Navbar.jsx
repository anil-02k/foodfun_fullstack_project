import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div>
      <img src={assets.logo} className='logo' />
      <p style={{fontSize:'21px',fontWeight:'bold'}}>Admin panel</p>
      </div>
      <img className='profile' src={assets.profile_image}/>
    </div>
  )
}

export default Navbar
