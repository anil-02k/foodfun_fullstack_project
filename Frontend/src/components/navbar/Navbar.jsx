import React, { useState } from 'react'
import './Navbar.css' 
import { assets } from '../../assets/assets'
import {Link} from 'react-router-dom'

const Navbar = () => {

    const[menu,setMenu]=useState("home");

  return (
    <div className='navbar'>
      <img src={assets.logo} className='logo' />
      <ul className='navbar-menu'>
        <Link to='/' onClick={()=>setMenu("home")} className={menu==='home'?"active":""}>Home</Link>
        <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==='menu'?"active":""}>Menu</a>
        <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==='mobile-app'?"active":""}>Mobile-app</a>
        <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==='contact-us'?"active":""}>Contact-us</a>
      </ul>
      <div className='navbar-right'  style={{alignItems:'center'}}>
        <img src={assets.search_icon} style={{height:'30px'}}/>
        <div className='navbar-search-icon'>
            <img src={assets.basket_icon}/>
            <div className='dot'></div>
        </div>
        <button>
            Sign_in
        </button>
      </div>
    </div>
  )
}

export default Navbar
