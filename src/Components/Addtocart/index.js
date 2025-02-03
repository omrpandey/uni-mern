import React, { useState } from "react";
import "./index.css";
import easyReturnLogo from "../../assets/images/easyReturnLogo.jpg";
import lifetimePlatingLogo from "../../assets/images/lifetimePlatingLogo.jpg";
import pureSilverLogo from "../../assets/images/pureSilverLogo.jpg";
import codLogo from "../../assets/images/codLogo.jpg";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

// Importing images
import man1 from "../../assets/images/man1.jpg";
import man2 from "../../assets/images/man2.jpg";
import man6 from "../../assets/images/man6.jpg";
import man5 from "../../assets/images/man5.jpg";

const ProductDetail = () => {
  const navigate = useNavigate();

  // Dummy product data
  const product = {
    id: "1",
    name: "Silver Pendant",
    price: 1999,
    images: [man1, man2, man6, man5], // Using imported images
  };

  const [currentImage, setCurrentImage] = useState(product.images[0]);
  const [quantity, setQuantity] = useState(1);
  const [showCartModal, setShowCartModal] = useState(false);

  const handleImageClick = (image) => {
    setCurrentImage(image);
  };

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));

  const addToCart = () => {
    toast.success("Product added to cart!");
    setShowCartModal(true);
  };

  const handleOfferClick = (offer) => {
    navigator.clipboard.writeText(offer);
    toast.success(`Copied: ${offer}`);
  };

  const handleContinueShopping = () => navigate("/Flashsaless");
  const handleContinuePayment = () => navigate("/Payment");

  return (
    <div className="product-detail-container">
      <div className="product-image-container">
        <img src={currentImage} alt={product.name} className="banner-img" />
        <div className="small-image-slider">
          {product.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`product-${index}`}
              className="small-image"
              onClick={() => handleImageClick(image)}
            />
          ))}
        </div>
      </div>

      <div className="product-info-container">
        <h2 className="product-title">Rs. {product.price}</h2>
        <p className="product-description">{product.name}</p>
        <div className="review-section">
          <span>⭐⭐⭐⭐⭐</span>
          <p>22 reviews</p>
        </div>

        <div className="quantity">
          <label>Quantity</label>
          <div className="quantity-controls">
            <button onClick={decrementQuantity}>-</button>
            <input type="number" value={quantity} readOnly />
            <button onClick={incrementQuantity}>+</button>
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
              onClick={() => handleOfferClick("HAPPY15 - 15% OFF")}
            >
              <h4>HAPPY15</h4>
              <p>Flat 15% OFF on all orders</p>
            </div>
            <div
              className="offer-box"
              onClick={() =>
                handleOfferClick("Gift Wrap - Free gift wrap")
              }
            >
              <h4>Gift Wrap</h4>
              <p>Free gift wrap on all orders</p>
            </div>
            <div
              className="offer-box"
              onClick={() => handleOfferClick("Prepaid - 5% OFF")}
            >
              <h4>Prepaid Offer</h4>
              <p>Get 5% off up to INR 100</p>
            </div>
          </div>
        </div>

        {/* Cart Modal */}
        {showCartModal && (
          <div className="cart-modal">
            <div className="modal-content">
              <h2>Product added to cart!</h2>
              <button
                className="continu-shopping"
                onClick={handleContinueShopping}
              >
                Continue Shopping
              </button>
              <button
                className="payment-button"
                onClick={handleContinuePayment}
              >
                Go to Payment
              </button>
            </div>
          </div>
        )}
      </div>

      <ToastContainer />
    </div>
  );
};

export default ProductDetail;
