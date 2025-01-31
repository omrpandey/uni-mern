import React, { useState, useEffect } from 'react';
import './index.css';
import easyReturnLogo from '../../assets/images/easyReturnLogo.jpg'; // Import logo
import lifetimePlatingLogo from '../../assets/images/lifetimePlatingLogo.jpg'; // Import logo
import pureSilverLogo from '../../assets/images/pureSilverLogo.jpg'; // Import logo
import codLogo from '../../assets/images/codLogo.jpg'; // Import logo
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';

import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const [product, setProduct] = useState(null); // State to store product details
  const [currentImage, setCurrentImage] = useState(''); // State for selected image
  const [activeDropdown, setActiveDropdown] = useState(null); // State for dropdown toggle
  const [images, setImages] = useState([]);

  const handleImageClick = (image) => {
    setCurrentImage(image);
  };

  const [quantity, setQuantity] = useState(1); // State for quantity selection

  const { productId } = useParams(); // This should extract productId from URL

  console.log('Product ID:', productId); // Check if the productId is being extracted correctly

  // Fetch product using the productId
  useEffect(() => {
    if (productId) {
      axios
        .get(`http://localhost:5000/api/product/${productId}`)
        .then((response) => {
          setProduct(response.data);
          const ProductId = response.data;
          setProduct(ProductId); // Set product data
          setCurrentImage(ProductId.Image); // Assuming the image URL is under `image`
        })
        .catch((error) => {
          console.error('Error fetching product:', error);
        });
    }
  }, [productId]);

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

  const goToPrevious = () => {
    const currentIndex = Image.indexOf(currentImage);
    const previousIndex = (currentIndex - 1 + Image.length) % Image.length;
    setCurrentImage(Image[previousIndex]);
  };

  const goToNext = () => {
    const currentIndex = Image.indexOf(currentImage);
    const nextIndex = (currentIndex + 1) % Image.length;
    setCurrentImage(Image[nextIndex]);
  };

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

 // const addToCart = () => {
   // alert(`Added ${quantity} x ${product?.Name} to the cart at Rs. ${product?.priceWithCoupon * quantity}`);
  //};
  const addToCart = async (productId) => {
    try {
      const response = await fetch("http://localhost:5000/api/cart/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId }),
      });

      if (!response.ok) {
        throw new Error("Failed to add product to cart");
      }

      const data = await response.json();
      toast.success(data.message || "Product added to cart!", {
        position: "top-right",
        autoClose: 3000,
      });
    } catch (error) {
      console.error("Error adding product to cart:", error.message);
      toast.error("Error adding product to cart. Please try again.", {
        position: "top",
        autoClose: 3000,
      });
    }
  };
  const handleOfferClick = (offer) => {
    navigator.clipboard.writeText(offer).then(() => {
      alert(`Offer "${offer}" has been copied to the clipboard!`);
    });
  };
  const [isActiveDescription, setIsActiveDescription] = useState(false);
  const [isActiveReturn, setIsActiveReturn] = useState(false);
  const [isActiveManufacturer, setIsActiveManufacturer] = useState(false);

  if (!productId) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-detail-container">
      {/* Left side - Product image */}
      <div className="product-image-container">
        <img src={currentImage} alt={productId.Name} className="banner-img" />
      </div>

          <div className="arrow arrow-right" onClick={goToNext}>
            &gt;
          </div>


      {/* Right side - Product details */}
      <div className="product-info-container">
        <h2 className="product-title">Rs. 3,990.00</h2>

        <div className="price-info">
          <span className="mrp-price">MRP {product?.price} </span> {/* MRP with line-through */}
          <span className="regular-price">Rs. {product?.priceWithCoupon} Regular Price (Incl. of all taxes)</span> {/* Regular price in one line */}
          <span className="best-price">
            Best Price <span className="price-red">Rs.{product?.priceWithCoupon}</span> with coupon
          </span>
        </div>

        <p className="product-description">
        {productId.Name}
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

        <button className="add-to-cart-btn" onClick={addToCart(product?.productId)}>
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
              {product?.discription}
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
