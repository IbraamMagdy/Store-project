import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ProductDetailsStyle.css';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../favorites/favoritesSlice';
import { addItem } from '../cart/cartListSlice';
import { useNavigate } from "react-router-dom";
import { removeItem } from "../cart/cartListSlice";


const Details = ({ onTitleChange, setCategory}) => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);
  const isFavorite = favorites.includes(productId);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const navigate = useNavigate();
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${productId}`)
      .then(response => {
        const productData = response.data;
        setProduct(productData);
        setSelectedImage(productData.thumbnail);
        onTitleChange(productData.title);
        setCategory(productData.category);
      })
      .catch(error => {
        setError('Product not found');
        console.error('Error fetching product:', error);
      });
  }, [productId, onTitleChange, setCategory]);

  const handleAddToCart = () => {
    dispatch(addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      thumbnail: product.thumbnail,
      quantity,
      selectedSize,
      selectedColor,
    }));
    setIsAddedToCart(true);
    setTimeout(() => setIsAddedToCart(false), 500);
    setQuantity(1);
    setSelectedSize(null);
    setSelectedColor(null);
    setIsPopupVisible(true);
  };

  const handleFavoriteToggle = () => {
    dispatch(toggleFavorite(productId)); // Dispatch the toggle favorite action
  };

  if (error) return <div>{error}</div>;
  if (!product) return <div>Loading...</div>;

  const handleQuantityChange = (change) => {
    setQuantity(prevQuantity => Math.max(1, prevQuantity + change));
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  const handleGoToCart = () => {
    navigate("/cart");
    setIsPopupVisible(false);
  };

  const handleGoToCheckout = () => {
    navigate("/checkout");
    setIsPopupVisible(false);
  };

  const handleDelete = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div>
      <div className="product-details-container">
        {/* Left Section: Product Images */}
        <div className="product-images-section">
          <div className="additional-images">
            {product.images && product.images.slice(0, 4).map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${product.title} ${index}`}
                className="additional-image"
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
          <div>
            <img src={selectedImage} alt={product.title} className="main-image" />
          </div>
        </div>

        {/* Right Section: Product Information */}
        <div className="product-info-section">
          <h1 className="product-title">{product.title}</h1>
          <p className="product-price">RS. {product.price}$</p>
          <p className="product-description">{product.description}</p>

          {/* Size Options */}
          <div className="size-options">
            <h4>Select Size</h4>
            {['S', 'M', 'L', 'XL'].map((size) => (
              <button
                key={size}
                className={`size-button ${selectedSize === size ? 'active' : ''}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>

          {/* Color Options */}
          <div className="color-options">
            <h4>Select Color</h4>
            {["White", "Black", "Silver", "Red", "Purple", "Blue", "Green"].map((colorClass) => (
              <button
                key={colorClass}
                className={`color-box ${colorClass} ${selectedColor === colorClass ? 'active' : ''}`}
                onClick={() => setSelectedColor(colorClass)}
              />
            ))}
          </div>

          <div className='cartPart'>
            {/* Quantity Selector */}
            <div className="quantity-selector">
              <button onClick={() => handleQuantityChange(-1)}>-</button>
              <span>{quantity}</span>
              <button onClick={() => handleQuantityChange(1)}>+</button>
            </div>

            {/* Add to Cart Button */}
            <button
              className={`add-to-cart-button ${isAddedToCart ? 'active' : ''}`}
              onClick={handleAddToCart}
              disabled={!selectedSize || !selectedColor}
            > 
            Add To Cart
            </button>
            {/* Popup Modal */}
            {isPopupVisible && (
              <div className="cart-popup">
                <div className="popup-content">
                  <h2>shopping cart</h2>
                  <div className='popcartLine'></div>
                  <ul className="cart-d">
                    {cartItems.map((item) => (
                      <li key={item.id}>
                        <img src={item.thumbnail} alt={item.title} />
                        <div className="cart-de">
                          <p>{item.title}</p>
                          <p className="cart-det">
                            <span>{item.quantity}&nbsp;&nbsp;&nbsp;x&nbsp;&nbsp;&nbsp;</span>
                            <span style={{color:"#B88E2F"}}>RS. {item.price}</span></p>
                        </div>
                        <button className="popRemoveItem" onClick={() => handleDelete(item.id)}>
                          <img src={require('../image/Vector (4).png')} alt="delete" />
                        </button>
                      </li>
                    ))}
                  </ul>
                  <div className='popSubtotal'>
                    <p>Subtotal</p>
                    <p>RS. {totalPrice.toFixed(2)}</p>
                  </div>
                  <div className='popcartLine2'></div>
                  <div className="popup-buttons">
                    <button onClick={handleGoToCart}>View Cart</button>
                    <button onClick={handleGoToCheckout}>Checkout</button>
                  </div>
                  <button className="close-popup" onClick={handleClosePopup}>X</button>
                </div>
              </div>
            )}
          </div>
          <div className='DetalisRowLine'></div>
          <div className='lowerData'>
            <div>
              <p>SKU</p>
              <p>Category</p>
              <p>Tags</p>
              <p>Share</p>
            </div>
            <div>
              <p>:</p>
              <p>:</p>
              <p>:</p>
              <p>:</p>
            </div>
            <div>
              <p>{product.sku}</p>
              <p>{product.category}</p>
              <p>{product.tags?.join(', ') || 'No tags available'}</p>
              <div className='socialMediaIcons'>
                <button><img src={require('../image/Vector (0).png')} alt='' /></button>
                <button><img src={require('../image/Vector (1).png')} alt='' /></button>
                <button><img src={require('../image/Vector (2).png')} alt='' /></button>
                {/* Favorite Button */}
                <button
                  className={`favorite-button ${isFavorite ? 'active' : ''}`}
                  onClick={handleFavoriteToggle}
                >
                  {isFavorite ? '❤️' : <img src={require('../image/Vector (3).png')} alt="Unfavorite" />}
                </button>              
              </div>
            </div>
          </div>     
        </div>
      </div>
      <div className='DetalisRowLine2'></div>
    </div>
  );
};

export default Details;