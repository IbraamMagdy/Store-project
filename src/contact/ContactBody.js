import React from 'react'
import { Link } from 'react-router-dom'
import './ContactStyle.css'

const ContactBody = () => {
  return (
    <div className='imagebar'>
    <div className='imagebarData'>
        <div className='logo'>
            <img src={require('../image/logo.png')} alt="logo" />
        </div>
        <h1>Contact</h1>
        <div className='link'>
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            <p>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</p>
            <Link className="nav-link" to="/contact">Contact</Link>
        </div>
    </div>
  </div>
  )
}

export default ContactBody
