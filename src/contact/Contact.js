import React from 'react'
import Navbar from '../navbar/Navbar'
import ContactBody from './ContactBody'
import ContactBody2 from './ContactBody2'
import Feature from '../shop/Feature'
import Footer from '../home/Footer'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <ContactBody/>
      <ContactBody2/>
      <Feature/>
      <Footer/>
    </div>
  )
}

export default Contact
