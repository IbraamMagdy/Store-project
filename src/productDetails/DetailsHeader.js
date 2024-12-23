import React from 'react';
import { Link } from 'react-router-dom';
import './ProductDetailsStyle.css'

const DetailsHeader = ({ productTitle }) => {
  return (
    <div className="linkShop">
      <Link className="nav-link active" aria-current="page" to="/">Home</Link>
      <p>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</p>
      <Link className="nav-link" to="/shop">Shop</Link>
      <p>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</p>
      <Link className='linkTitle'>{productTitle}</Link>
    </div>
  );
};

export default DetailsHeader;