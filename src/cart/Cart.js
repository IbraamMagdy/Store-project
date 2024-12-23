import React from 'react'
import Navbar from '../navbar/Navbar'
import CartBody from './CartBody'
import CartData from './CartData'
import Feature from '../shop/Feature'
import Footer from '../home/Footer'

const Cart = () => {
  return (
    <div>
      <Navbar/>
      <CartBody/>
      <CartData/>
      <Feature/>
      <Footer/>
    </div>
  )
}

export default Cart
