import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './ProductDetailsStyle.css';

const RelatedProducts = ({ category }) => {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (category) {
      // Fetch products with the same category
      axios.get(`https://dummyjson.com/products/category/${category}?limit=4`)
        .then(response => {
          setRelatedProducts(response.data.products);
        })
        .catch(error => {
          console.error('Error fetching related products:', error);
        });
    }
  }, [category]);

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="related-products-section">
      <div className="related-products-grid">
        {relatedProducts.map((product) => (
          <div
            key={product.id}
            className="related-product"
            onClick={() => handleProductClick(product.id)}
            style={{ cursor: 'pointer' }}
          >
            <img src={product.thumbnail} alt={product.title} />
            <p>{product.title}</p>
            <h5>RS. {product.price}$</h5>
          </div>
        ))}
      </div>
      <button className="back-to-shop-link" onClick={() => navigate('/shop')}>
        View More
      </button>
    </div>
  );
};

export default RelatedProducts;