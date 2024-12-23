import React from 'react'
import './ShopStyle.css'

const Product = () => {
  return (
    <div class="container mt-4">
        <h1 class="text-center">Product Details</h1>

        <div id="productDetails" class="row"></div>

        {/* Cart form */}
        <div class="mt-4">
            <label for="quantity" class="form-label">Quantity</label>
            <input type="number" id="quantity" class="form-control" value="1" min="1"/>
            <button class="btn btn-success mt-3" onclick="addToCart()">Add to Cart</button>
            <button class="btn btn-secondary mt-3" onclick="returnToProducts()">Return to Products</button>
        </div>
    </div>
  )
}

export default Product
