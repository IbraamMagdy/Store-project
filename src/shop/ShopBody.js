import React from 'react'
import './ShopStyle.css'
import { Link } from 'react-router-dom'

const ShopBody = () => {
  return (
    <div className='imagebar'>
    <div className='imagebarData'>
        <div className='logo'>
            <img src={require('../image/logo.png')} alt="logo" />
        </div>
        <h1>Shop</h1>
        <div className='link'>
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            <p>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</p>
            <Link className="nav-link" to="/shop">Shop</Link>
        </div>
    </div>
  </div>
  )
}

export default ShopBody
