import React from 'react'
import { Link } from 'react-router-dom'
import './CheckOutStyle.css'


const AccountBody = () => {
  return (
    <div className='imagebar'>
        <div className='imagebarData'>
            <div className='logo'>
                <img src={require('../image/logo.png')} alt="logo" />
            </div>
            <h1>My Account</h1>
            <div className='link'>
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                <p>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</p>
                <Link className="nav-link" to="/shop">Shop</Link>
                <p>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</p>
                <Link className="nav-link" to="/cart">Cart</Link>
                <p>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</p>
                <Link className="nav-link" to="/checkout">Checkout</Link>
            </div>
        </div>
    </div>
  )
}

export default AccountBody
