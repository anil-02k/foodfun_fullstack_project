import React from 'react'
import Navbar from './components/navbar/Navbar'
import {Routes, Route} from 'react-router-dom'

import Cart from './pages/cart/cart'
import PlaceOrder from './pages/placeorder/placeorder'
import Home from './pages/home/home'
const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>
      </Routes>
    </div>
  )
}

export default App
