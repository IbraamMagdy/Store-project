import React from 'react'
import Navbar from '../navbar/Navbar'
import AccountBody from './AccountBody'
import Feature from '../shop/Feature'
import Footer from '../home/Footer'
import LogIn from './LogIn'

const AccountLogIn = () => {
  return (
    <div>
      <Navbar/>
      <AccountBody/>
      <LogIn/>
      <Feature/> 
      <Footer/>
    </div>
  )
}

export default AccountLogIn;
