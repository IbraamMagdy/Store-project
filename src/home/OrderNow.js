import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './HomeStyle.css'

const OrderNow = ({ productId }) => {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch product details using the product ID
    axios
      .get(`https://dummyjson.com/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error('Error fetching product:', error);
        setError('Unable to fetch product details');
      });
  }, [productId]);

  if (error) return <div>{error}</div>;
  if (!product) return <div>Loading...</div>;

  return (
    <div className="order-now-container">
      <div className="order-now-container1">
        <h3 className="product-title">{product.title}</h3>
        <Link to={`/product/${productId}`} className="order-now-button">
            Order Now
        </Link>
      </div>
      <div className="order-now-container2">
      {product.images && product.images[1] ? (
        <img src={product.images[2]} alt={product.title} className="product-image" />
      ) : (
        <img src={product.thumbnail} alt={product.title} className="product-image" />
      )}
      </div>
    </div>
  );
};

export default OrderNow;
