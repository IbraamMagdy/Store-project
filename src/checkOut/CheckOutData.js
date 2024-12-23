import React from 'react';
import { useSelector } from 'react-redux';
import './CheckOutStyle.css';

const CheckOutData = () => {
  const cartItems = useSelector((state) => state.cart.cartItems); // Fetch cart items from Redux
  const totalPrice = useSelector((state) => state.cart.totalPrice); // Fetch total price from Redux

  return (
    <div className="checkoutContainer">
        {/* Billing Section */}
        <div className="checkoutLeftSection">
          <h2>Billing details</h2>
          <form>
            <div className='checkformlabel'>
              <div className='checkformlabel1'>
                <label>First Name</label>
              </div>
              <div className='checkformlabel2'>
                <label>Last Name</label>
              </div>
            </div><br/>
            <div className='checkforminput'>
              <div className='checkforminput1'>
                <input type="text" required />
              </div>
              <div className='checkforminput2'>
                <input type="text" required />
              </div>
            </div><br/>
            <label className='checkoutLeftSectionformlabel'>Company Name (Optional)</label><br/>
            <input className='checkoutLeftSectionforminput' type="text" required/><br/>
            <label className='checkoutLeftSectionformlabel'>Country / Region</label><br/>
            <select className='checkoutLeftSectionforminput' required>
              <option value="Sri Lanka">Sri Lanka</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="Australia">Australia</option>
            </select><br/>
            <label className='checkoutLeftSectionformlabel'>Street address</label><br/>
            <input className='checkoutLeftSectionforminput' type="text" required/><br/>
            <label className='checkoutLeftSectionformlabel'>Town / City</label><br/>
            <input className='checkoutLeftSectionforminput' type="text" required/><br/>
            <label className='checkoutLeftSectionformlabel'>Province</label><br/>
            <select className='checkoutLeftSectionforminput' required>
              <option value="Western Province">Western Province</option>
              <option value="Central Province">Central Province</option>
              <option value="Southern Province">Southern Province</option>
              <option value="Eastern Province">Eastern Province</option>
              <option value="Northern Province">Northern Province</option>
            </select><br/>
            <label className='checkoutLeftSectionformlabel'>ZIP code</label><br/>
            <input className='checkoutLeftSectionforminput' type="text"required /><br/>
            <label className='checkoutLeftSectionformlabel'>Phone</label><br/>
            <input className='checkoutLeftSectionforminput' type='phone' required/><br/>
            <label className='checkoutLeftSectionformlabel'>Email address</label><br/>          
            <input className='checkoutLeftSectionforminput' type="email" required /><br/>
            <label className='checkoutLeftSectionformlabel'>Additional information (Optional)</label><br/>
            <input className='checkoutLeftSectionforminput' type="text" placeholder="Additional information" /><br/>
          </form>
        </div>

        {/* Payment Section */}
      <div className="checkoutRightsections">
        {/* Dynamic Summary Section */}
        <div className="checkout-summary">
          <div className='checkout-summary1'>
            <h1>Product</h1>
            {cartItems.map((item) => (
              <div key={item.id} className="order-item">
                <p className='checkitemtitlep'>
                  <span className='checkitemtitle'>
                    {item.title}&nbsp;
                  </span>
                  <span>
                    x&nbsp;{item.quantity}
                  </span>
                </p>
              </div>
            ))}
            <p className='checktotalPricep'>Total</p>
          </div>
          <div className='checkout-summary2'>
          <h1>Subtotal</h1>
            {cartItems.map((item) => (
              <div key={item.id} className="order-item">
                <p className='checkitemtitlep2'>
                  Rs. {(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
            <p className='checktotalPrice'>Rs. {totalPrice.toFixed(2)}</p>
          </div>
        </div>
        <div className='checkLine'></div>
        <div className="checkout-section">
          <form>
            <label>
              <input type="radio" name="payment" value="credit-card" required />
              Direct Bank Transfer
            </label>
            <p>
              Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
            </p>
            <label>
              <input type="radio" name="payment" value="paypal" />
              Direct Bank Transfer
            </label><br/>
            <label>
              <input type="radio" name="payment" value="paypal" />
              Cash On Delivery
            </label>
            <p>
                <span>
                  Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our 
                </span>
                <span className='privacyPolicy'>
                  &nbsp;privacy policy.
                </span>
            </p>
          </form>
        </div>
        <div className="checkout-button-div">
          <button className="checkout-button">Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default CheckOutData;