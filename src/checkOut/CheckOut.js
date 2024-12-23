import React from 'react'
import Navbar from '../navbar/Navbar'
import CheckOutBody from './CheckOutBody'
import Feature from '../shop/Feature'
import Footer from '../home/Footer'
import CheckOutData from './CheckOutData'

const Account = () => {
  return (
    <div>
      <Navbar/>
      <CheckOutBody/>
      <CheckOutData/>
      <Feature/> 
      <Footer/>
    </div>
  )
}

export default Account
