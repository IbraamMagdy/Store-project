import React from 'react';
import { Link } from 'react-router-dom';
import './ShopStyle.css'

const ProductCard = ({ products, viewMode }) => {
  return (
    <div className={`product-list ${viewMode}`}>
      {products.map((product) => (
        <Link to={`/product/${product.id}`} key={product.id} className={`product-card ${viewMode}`}>
          <img src={product.thumbnail} alt={product.title} className="product-image" />
          <div className="product-info">
            <p>{product.title}</p>
            <h5>RS. {product.price}$</h5>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductCard;