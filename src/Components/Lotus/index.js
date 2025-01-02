import React, { useState } from 'react';
import kundan1 from '../../assets/images/kundan1.jpg'; // Default initial image
import kundan2 from '../../assets/images/kundan2.jpg'; // Default hover image
import silverkundan from '../../assets/images/silverkundan.jpg'; // Silver image

import './index.css';

const Lotus = () => {
  const [currentImages, setCurrentImages] = useState({
    initial: kundan1,
    hover: kundan2,
  });

  const handleMouseEnter = (color) => {
    if (color === 'silver') {
      setCurrentImages({
        initial: silverkundan,
        hover: silverkundan, // Use the same image for hover
      });
    } else if (color === 'yellow') {
      setCurrentImages({
        initial: kundan1,
        hover: kundan2,
      });
    }
  };

  const handleMouseLeave = () => {
    // Revert to default images when no color is hovered
    setCurrentImages({
      initial: kundan1,
      hover: kundan2,
    });
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
        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
};

export default Lotus;
