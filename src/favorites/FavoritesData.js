import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './FavoritesStyle.css';

const FavoritesData = ({ favorites, onDeleteFavorite }) => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Updated favorites in FavoritesData:", favorites); // Log favorites
    const fetchProducts = async () => {
      const productDetails = await Promise.all(
        favorites.map(async (productId) => {
          try {
            const response = await axios.get(`https://dummyjson.com/products/${productId}`);
            return response.data;
          } catch (error) {
            console.error('Error fetching product:', error);
            return null;
          }
        })
      );
      setProducts(productDetails.filter(product => product !== null));
    };
  
    if (favorites.length > 0) {
      fetchProducts();
    } else {
      setProducts([]); // Clear products if no favorites
    }
  }, [favorites]);

  const handleDelete = (productId) => {
    console.log(`handleDelete called for product ID: ${productId}`);
    if (typeof onDeleteFavorite === 'function') {
      onDeleteFavorite(productId);
    } else {
      console.error('onDeleteFavorite is not a function');
    }
  };

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div>
      <div className='favoritesHeader'>
        <h3>Product Photo</h3>
        <h3>Product Name</h3>
        <h3>Product Price</h3>
        <h3>Delete</h3>
      </div>
      
      <ul className="favorites-list">
        {favorites.length === 0 ? (
          <p className='NoFavorite'>No favorites added yet.</p>
        ) : (
          products.map((product) => (
            <li key={product.id} className="favorite-item">
              <div
                className="favorite-product-details"
                onClick={() => handleProductClick(product.id)}
              >
                <img src={product.thumbnail} alt={product.title} className="favorite-product-image" />
                <h3 className="favorite-product-title">{product.title}</h3>
                <p className="favorite-product-price">RS. {product.price}$</p>
                <button
                  className="delete-favorite-button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation(); // Stop event bubbling
                    handleDelete(product.id); // Call delete function
                  }}
                >
                  <img src={require('../image/delete.png')} alt="delete" />
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default FavoritesData;