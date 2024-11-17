import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import {Routes, Route} from 'react-router-dom'

import Cart from './pages/cart/cart'
import PlaceOrder from './pages/placeorder/placeorder'
import Home from './pages/home/home'
import Footer from './components/Footer/Footer'
import LoginPopUp from './components/LoginPopUp/LoginPopUp'
import Verify from './pages/Verify/Verify'
import Myorders from './pages/Myorders/Myorders'
const App = () => {

const [showLogin,setShowLogin]=useState(false);

  return (
    <> 
    {showLogin?<LoginPopUp setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>
        <Route path='/verify' element={<Verify/>}/>
        <Route path='/myorders' element={<Myorders/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
