import React, { useState } from 'react';
import './index.css';
import man1 from '../../assets/images/man1.jpg';
import man2 from '../../assets/images/man2.jpg';
import kundan1 from '../../assets/images/kundan1.jpg';
import kundan2 from '../../assets/images/kundan2.jpg';
import man5 from '../../assets/images/man5.jpg';
import man6 from '../../assets/images/man6.jpg';
import man7 from '../../assets/images/man7.jpg';
import easyReturnLogo from '../../assets/images/easyReturnLogo.jpg';
import lifetimePlatingLogo from '../../assets/images/lifetimePlatingLogo.jpg';
import pureSilverLogo from '../../assets/images/pureSilverLogo.jpg';
import codLogo from '../../assets/images/codLogo.jpg';

const ProductDetail = () => {
  const [currentImage, setCurrentImage] = useState(man1);
  const [quantity, setQuantity] = useState(1);

  const images = [man1, man2, kundan1, kundan2, man5, man6, man7];

  const handleImageClick = (image) => {
    setCurrentImage(image);
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

  return (
    <div className="product-detail-container">
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

      <div className="product-info-container">
        <h2 className="product-title">SILVER 92.5 HEART RING</h2>

        <div className="price-info">
          <span className="regular-price">
            Rs. 2,057.00 <span className="label">Regular price</span>
          </span>
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
      </div>

      <div className="special-offers">
        <h3>Special Offers</h3>
        <div className="offers-row">
          <div className="offer-box">
            <h4>HAPPY15</h4>
            <p>Flat 15% OFF on all orders</p>
          </div>
          <div className="offer-box">
            <h4>Gift Wrap</h4>
            <p>Free gift wrap on all orders (if opted in)</p>
          </div>
          <div className="offer-box">
            <h4>Prepaid Offer</h4>
            <p>Get 5% off up to INR 100 on prepaid orders</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
