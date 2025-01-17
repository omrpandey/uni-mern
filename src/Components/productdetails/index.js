import React from 'react';
import './ProductDetail.css'; // Create this CSS file for styling

const ProductDetail = () => {
  return (
    <div className="product-detail-container">
      {/* Left side - Product image */}
      <div className="product-image-container">
        <img 
          src="path-to-your-image.jpg" 
          alt="Product" 
          className="product-image" 
        />
      </div>

      {/* Right side - Product details */}
      <div className="product-info-container">
        <h2 className="product-title">SILVER 92.5 HEART RING</h2>
        
        <div className="price-info">
          <span className="regular-price">Rs. 2,057.00 <span className="label">Regular price</span></span>
          <span className="mrp-price">MRP Rs. 3,520.00</span>
          <span className="sale-price">Sale price (Incl. of all taxes)</span>
        </div>

        <div className="best-price">
          <span>Best Price</span>
          <strong>Rs. 1,748 with coupon</strong>
        </div>

        <div className="product-options">
          <div className="option">
            <label>Color</label>
            <div className="color-options">
              <span className="color">GOLD</span>
              <span className="color">SILVER</span>
            </div>
          </div>

          <div className="option">
            <label>Style</label>
            <div className="style-options">
              <span className="style">Ring</span>
              <span className="style">Ring+Earring</span>
            </div>
          </div>
        </div>

        <div className="additional-info">
          <p><strong>Easy 7 Day Return</strong></p>
          <p><strong>Lifetime Plating</strong></p>
          <p><strong>92.5 Pure Silver</strong></p>
          <p><strong>Cash on Delivery</strong></p>
        </div>

        <div className="quantity">
          <label>Quantity</label>
          <input type="number" value="1" min="1" />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
