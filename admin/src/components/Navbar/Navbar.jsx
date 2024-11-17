import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div>
      <h1 style={{color:'tomato'}}>FoodFun.</h1>
      <p style={{fontSize:'21px',fontWeight:'bold'}}>Admin panel</p>
      </div>
      <img className='profile' src={assets.profile_image}/>
    </div>
  )
}

export default Navbar
