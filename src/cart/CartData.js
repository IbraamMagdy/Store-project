// src/Cart/Cart.js
import React from "react";
import "./CartStyle.css";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "./cartListSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems); // قراءة المنتجات من السلة
  const totalPrice = useSelector((state) => state.cart.totalPrice); // قراءة السعر الإجمالي
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleDelete = (id) => {
    dispatch(removeItem(id)); // حذف المنتج من السلة باستخدام الإجراء
  };

  const handleCheckout = () => {
    if (cartItems.length > 0) {
      navigate("/checkout"); // Redirect to checkout page
    }
  };

  return (
      <div className="big-cart">
        <div className="cart">
          <div className='cartCardHeader'>
            <h3>Product Photo</h3>
            <h3>Product Name</h3>
            <h3>Product Price</h3>
            <h3>Product Details</h3>
            <h3>Quantity</h3>
            <h3>Subtotal</h3>
            <h3>Delete</h3>
          </div>
          
          <ul className="cart-list">
            {cartItems.length === 0 ? (
              <p className='NoProduct'>Your cart is empty.</p>
            ) : (
              cartItems.map((item) => (
                <li key={item.id} className="cart-item">
                    <div className="cart-details">
                      <img src={item.thumbnail} alt={item.title} className="cart-product-image"/>
                      <h3 className="cart-product-title">{item.title}</h3>
                      <p className="cart-product-price">Rs. {item.price}</p>
                      <div className="additionalDetails">
                        <p>Size: {item.selectedSize || 'N/A'}</p>
                        <p>Color: {item.selectedColor || 'N/A'}</p>
                      </div>
                      <p className="cart-product-quantity">{item.quantity}</p>
                      <p className="cart-product-Subtotal">Rs. {(item.price * item.quantity).toFixed(2)}</p>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="delete-button"
                      >
                        <img src={require('../image/delete.png')} alt="delete" />
                      </button>
                    </div>
                </li>
              ))
            )}
          </ul>
        </div>
        <div className="cart-footer-carts">
          <h1>Cart Totals</h1>
          <h3>Total Price: Rs. {totalPrice.toFixed(2)}</h3>
          <button
          className="checkout-button-cart"
          onClick={handleCheckout}
          disabled={cartItems.length === 0} // Disable button if no items
          >
          Checkout
          </button>
        </div>
      </div>
  );
};

export default Cart;