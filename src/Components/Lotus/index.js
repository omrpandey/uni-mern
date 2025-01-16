import React, { useState } from 'react';
import kundan1 from '../../assets/images/kundan1.jpg'; // Default initial image
import kundan2 from '../../assets/images/kundan2.jpg'; // Default hover image
import silverkundan from '../../assets/images/silverkundan.jpg'; // Silver image
import './index.css';

const Lotus = ({ addToCart }) => {
  const [currentImages, setCurrentImages] = useState({
    initial: kundan1,
    hover: kundan2,
  });

  // Handle mouse enter for color selection
  const handleMouseEnter = (color) => {
    if (color === 'silver') {
      setCurrentImages({
        initial: silverkundan, // Silver image on initial
        hover: silverkundan, // Same image for hover
      });
    } else if (color === 'yellow') {
      setCurrentImages({
        initial: kundan1, // Yellow initial image
        hover: kundan2, // Yellow hover image
      });
    }
  };

  // Revert to default images on mouse leave
  const handleMouseLeave = () => {
    setCurrentImages({
      initial: kundan1, // Default initial image
      hover: kundan2, // Default hover image
    });
  };

  // Product details to be added to the cart
  const item = {
    name: 'Silver Kundan Lotus Anklet',
    style: 'ANKLETS',
    price: 3425,
    count: 1,
    img: currentImages.initial, // Current image being displayed
  };

  return (
    <div className="product-box">
      <div className="product-img-container">
        <img
          src={currentImages.initial}
          alt="Product Initial"
          className="product-img"
        />
        <img
          src={currentImages.hover}
          alt="Product Hover"
          className="product-img hover-img"
        />
        <div className="product-header">
          <button className="best-seller">Best Seller</button>
        </div>
      </div>
      <div className="product-details">
        <p className="product-description">
          <span className="current-price">Rs. 3,425.00</span>
          <span className="regular-price">Rs. 4,950.00</span>
          <span className="discount">Save 31%</span>
        </p>
        <p className="best-price">
          Best Price: <span>Rs. 2,740.00</span>
          <small className="coupon-text"> with coupon</small>
        </p>
        <h3 className="product-name">Silver Kundan Lotus Anklet</h3>
        <div className="color-selection">
          <div className="color-circle">
            <span
              className="circle yellow"
              onMouseEnter={() => handleMouseEnter('yellow')}
              onMouseLeave={handleMouseLeave}
            ></span>
            <span
              className="circle grey"
              onMouseEnter={() => handleMouseEnter('silver')}
              onMouseLeave={handleMouseLeave}
            ></span>
          </div>
        </div>
        <button
          className="add-to-cart"
          onClick={() => addToCart(item)} // Add item to cart
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Lotus;
