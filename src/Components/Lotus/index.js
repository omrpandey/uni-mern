import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for page navigation
import kundan1 from '../../assets/images/kundan1.jpg'; // Default initial image
import kundan2 from '../../assets/images/kundan2.jpg'; // Default hover image
import silverkundan from '../../assets/images/silverkundan.jpg'; // Silver image
import man1 from '../../assets/images/man1.jpg'; // New initial image for second product
import man2 from '../../assets/images/man2.jpg'; // New hover image for second product
import './index.css';

const Lotus = ({ addToCart }) => {
  const navigate = useNavigate(); // Initialize navigate for routing
  
  const [currentImages, setCurrentImages] = useState({
    initial: kundan1,
    hover: kundan2,
  });

  const [currentImages2, setCurrentImages2] = useState({
    initial: man1,
    hover: man2,
  });

  // Handle mouse enter for color selection
  const handleMouseEnter = (color) => {
    if (color === 'silver') {
      setCurrentImages({
        initial: silverkundan,
        hover: silverkundan,
      });
    } else if (color === 'yellow') {
      setCurrentImages({
        initial: kundan1,
        hover: kundan2,
      });
    }
  };

  // Revert to default images on mouse leave
  const handleMouseLeave = () => {
    setCurrentImages({
      initial: kundan1,
      hover: kundan2,
    });
  };

  const handleMouseEnter2 = (color) => {
    if (color === 'silver') {
      setCurrentImages2({
        initial: silverkundan,
        hover: silverkundan,
      });
    } else if (color === 'yellow') {
      setCurrentImages2({
        initial: man1,
        hover: man2,
      });
    }
  };

  // Revert to default images on mouse leave for second box
  const handleMouseLeave2 = () => {
    setCurrentImages2({
      initial: man1,
      hover: man2,
    });
  };

  // Product details to be added to the cart for the first product
  const item = {
    name: 'Silver Kundan Lotus Anklet',
    style: 'ANKLETS',
    price: 3425,
    count: 1,
    img: currentImages.initial,
  };

  // Product details to be added to the cart for the second product
  const item2 = {
    name: 'Gold Kundan Lotus Necklace',
    style: 'NECKLACE',
    price: 3999,
    count: 1,
    img: currentImages2.initial,
  };

  // Navigate to a new page when a product is clicked
  const handleProductClick = (productId) => {
    // Replace 'product-details' with the actual route you want to navigate to
    navigate(`/ProductDetail/${productId}`);
  };

  return (
    <div className="product-box-container">
      {/* First product box */}
      <div className="product-box" onClick={() => handleProductClick('1')}>
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

      {/* Second product box */}
      <div className="product-box" onClick={() => handleProductClick('2')}>
        <div className="product-img-container">
          <img
            src={currentImages2.initial}
            alt="Product Initial"
            className="product-img"
          />
          <img
            src={currentImages2.hover}
            alt="Product Hover"
            className="product-img hover-img"
          />
          <div className="product-header">
            <button className="best-seller">Best Seller</button>
          </div>
        </div>
        <div className="product-details">
          <p className="product-description">
            <span className="current-price">Rs. 3,999.00</span>
            <span className="regular-price">Rs. 5,500.00</span>
            <span className="discount">Save 27%</span>
          </p>
          <p className="best-price">
            Best Price: <span>Rs. 3,499.00</span>
            <small className="coupon-text"> with coupon</small>
          </p>
          <h3 className="product-name">Gold Kundan Lotus Necklace</h3>
          <div className="color-selection">
            <div className="color-circle">
              <span
                className="circle yellow"
                onMouseEnter={() => handleMouseEnter2('yellow')}
                onMouseLeave={handleMouseLeave2}
              ></span>
              <span
                className="circle grey"
                onMouseEnter={() => handleMouseEnter2('silver')}
                onMouseLeave={handleMouseLeave2}
              ></span>
            </div>
          </div>
          <button
            className="add-to-cart"
            onClick={() => addToCart(item2)} // Add item to cart for second product
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Lotus;
