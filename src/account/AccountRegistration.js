import React from 'react'
import Navbar from '../navbar/Navbar'
import AccountBody from './AccountBody'
import Feature from '../shop/Feature'
import Footer from '../home/Footer'
import Registration from './Registration'

const AccountRegistration = () => {
  return (
    <div>
      <Navbar/>
      <AccountBody/>
      <Registration/>
      <Feature/> 
      <Footer/>
    </div>
  )
}

export default AccountRegistration;
