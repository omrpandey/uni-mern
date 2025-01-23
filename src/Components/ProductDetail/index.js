import React, { useState } from 'react';
import './index.css';
import man1 from '../../assets/images/man1.jpg';
import man2 from '../../assets/images/man2.jpg';
import kundan1 from '../../assets/images/kundan1.jpg';
import kundan2 from '../../assets/images/kundan2.jpg';
import man5 from '../../assets/images/man5.jpg';
import man6 from '../../assets/images/man6.jpg';
import man7 from '../../assets/images/man7.jpg';
import easyReturnLogo from '../../assets/images/easyReturnLogo.jpg'; // Import logo
import lifetimePlatingLogo from '../../assets/images/lifetimePlatingLogo.jpg'; // Import logo
import pureSilverLogo from '../../assets/images/pureSilverLogo.jpg'; // Import logo
import codLogo from '../../assets/images/codLogo.jpg'; // Import logo

const ProductDetail = () => {
  const [currentImage, setCurrentImage] = useState(man1);
  const [quantity, setQuantity] = useState(1);
  const [activeDropdown, setActiveDropdown] = useState(null); // State for dropdown toggle

  const images = [man1, man2, kundan1, kundan2, man5, man6, man7];

  const handleImageClick = (image) => {
    setCurrentImage(image);
  };

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

  const goToPrevious = () => {
    const currentIndex = images.indexOf(currentImage);
    const previousIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentImage(images[previousIndex]);
  };

  const goToNext = () => {
    const currentIndex = images.indexOf(currentImage);
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentImage(images[nextIndex]);
  };

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const addToCart = () => {
    alert(`Added ${quantity} item(s) to the cart`);
  };

  const handleOfferClick = (offer) => {
    navigator.clipboard.writeText(offer).then(() => {
      alert(`Offer "${offer}" has been copied to the clipboard!`);
    });
  };
  const [isActiveDescription, setIsActiveDescription] = useState(false);
  const [isActiveReturn, setIsActiveReturn] = useState(false);
  const [isActiveManufacturer, setIsActiveManufacturer] = useState(false);

  return (
    <div className="product-detail-container">
      {/* Left side - Product image */}
      <div className="product-image-container">
        <img src={currentImage} alt="Product" className="banner-img" />
        <div className="image-slider">
          <div className="arrow arrow-left" onClick={goToPrevious}>
            &lt;
          </div>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Product ${index + 1}`}
              className={`slider-image ${currentImage === image ? 'active' : ''}`}
              onClick={() => handleImageClick(image)}
            />
          ))}
          <div className="arrow arrow-right" onClick={goToNext}>
            &gt;
          </div>
        </div>
      </div>

      {/* Right side - Product details */}
      <div className="product-info-container">
        <h2 className="product-title">Rs. 3,990.00</h2>

        <div className="price-info">
          <span className="mrp-price">MRP Rs. 5,720.00</span> {/* MRP with line-through */}
          <span className="regular-price">Rs. 3,990.00 Regular Price (Incl. of all taxes)</span> {/* Regular price in one line */}
          <span className="best-price">
            Best Price <span className="price-red">Rs. 3,392</span> with coupon
          </span>
        </div>

        <p className="product-description">
          925 Sterling Silver Lotus Sui Dhaga Earring
        </p>

        <div className="review-section">
          <div className="stars">
            <span>⭐⭐⭐⭐⭐</span>
          </div>
          <p className="reviews-text">22 reviews</p>
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
          <div className="info-line">
            <div className="info-item">
              <img src={easyReturnLogo} alt="Easy Return" className="info-logo" />
              <p>
                <strong>Easy 7 Day Return</strong>
              </p>
            </div>
            <div className="info-item">
              <img src={lifetimePlatingLogo} alt="Lifetime Plating" className="info-logo" />
              <p>
                <strong>Lifetime Plating</strong>
              </p>
            </div>
          </div>

          <div className="info-line">
            <div className="info-item">
              <img src={pureSilverLogo} alt="92.5 Pure Silver" className="info-logo" />
              <p>
                <strong>92.5 Pure Silver</strong>
              </p>
            </div>
            <div className="info-item">
              <img src={codLogo} alt="Cash on Delivery" className="info-logo" />
              <p>
                <strong>Cash on Delivery</strong>
              </p>
            </div>
          </div>
        </div>

        <div className="quantity">
          <label>Quantity</label>
          <div className="quantity-controls">
            <button className="quantity-btn" onClick={decrementQuantity}>
              -
            </button>
            <input type="number" value={quantity} readOnly className="quantity-input" />
            <button className="quantity-btn" onClick={incrementQuantity}>
              +
            </button>
          </div>
        </div>

        <button className="add-to-cart-btn" onClick={addToCart}>
          Add to Cart
        </button>

        <div className="special-offers">
          <h3>Special Offers</h3>
          <div className="offers-row">
            <div
              className="offer-box"
              onClick={() => handleOfferClick('HAPPY15 - Flat 15% OFF on all orders')}
            >
              <h4>HAPPY15</h4>
              <p>Flat 15% OFF on all orders</p>
            </div>
            <div
              className="offer-box"
              onClick={() => handleOfferClick('Gift Wrap - Free gift wrap on all orders')}
            >
              <h4>Gift Wrap</h4>
              <p>Free gift wrap on all orders</p>
            </div>
            <div
              className="offer-box"
              onClick={() => handleOfferClick('Prepaid Offer - Get 5% off up to INR 100')}
            >
              <h4>Prepaid Offer</h4>
              <p>Get 5% off up to INR 100</p>
            </div>
          </div>
        </div>

        <div className="dropdown-sections">
          {/* Dropdown 1 - Description */}
          <div className="dropdown">
            <div
              className={`dropdown-header ${isActiveDescription ? 'active' : ''}`}
              onClick={() => setIsActiveDescription(!isActiveDescription)}
            >
              Description
            </div>
            <div
              className={`dropdown-content ${isActiveDescription ? 'active' : ''}`}
            >
              <p>
                This product is made with 92.5 pure silver and features a timeless
                heart design. Perfect for gifting and personal use.
              </p>
            </div>
          </div>

          {/* Dropdown 2 - Return and Shipping Information */}
          <div className="dropdown">
            <div
              className={`dropdown-header ${isActiveReturn ? 'active' : ''}`}
              onClick={() => setIsActiveReturn(!isActiveReturn)}
            >
              Return and Shipping Information
            </div>
            <div
              className={`dropdown-content ${isActiveReturn ? 'active' : ''}`}
            >
              <p>
                Enjoy free shipping on all prepaid orders. Returns are accepted within
                7 days of delivery.
              </p>
            </div>
          </div>

          {/* Dropdown 3 - Manufacturer Details */}
          <div className="dropdown">
            <div
              className={`dropdown-header ${isActiveManufacturer ? 'active' : ''}`}
              onClick={() => setIsActiveManufacturer(!isActiveManufacturer)}
            >
              Name and Address of the Manufacturer
            </div>
            <div
              className={`dropdown-content ${isActiveManufacturer ? 'active' : ''}`}
            >
              <p>
                Manufacturer: XYZ Silver Creations Pvt. Ltd.<br />
                Address: No. 12, Silver Lane, Jewelry Market, Delhi, India.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>

  );
};

export default ProductDetail;
