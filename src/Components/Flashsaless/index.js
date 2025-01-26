import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for page navigation
import valentine from '../../assets/images/valentine.jpg'; // Correct image path
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import silverkundan from '../../assets/images/silverkundan.jpg'; // Silver image
import man1 from '../../assets/images/man1.jpg'; // New initial image for second product
import man2 from '../../assets/images/man2.jpg'; // New hover image for second product
import './flashsaless.css'; // Ensure you have this CSS file for styling
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';


const Flashsaless = () => {
  const [animate, setAnimate] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [sortOption, setSortOption] = useState('alphabetically');
  const navigate = useNavigate(); // Initialize navigate for routing
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentImages2, setCurrentImages2] = useState({
    initial: "",
    hover: "",
  });

  useEffect(() => {
    setAnimate(true); // Trigger animation when the component mounts
  }, []);

  const handleSubmenuToggle = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index); // Toggle submenu visibility
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/product/"); // Include http://
        setProducts(response.data);
        if (response.data.length > 0) {
          setCurrentImages2({
            initial: response.data[0].Image, // Adjust the key name based on your backend response
            hover: response.data[0].hoverImagePath, // Adjust the key name
          });
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);


  // Navigate to a new page when a product is clicked
  const handleProductClick = (productId) => {
    // Replace 'product-details' with the actual route you want to navigate to
    navigate(`/ProductDetail/${productId}`);
  };



  // const [currentImages, setCurrentImages] = useState({
  //   initial: kundan1,
  //   hover: kundan2,
  // });


  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };
  // const handleMouseEnter = (color) => {
  //   if (color === 'silver') {
  //     setCurrentImages({
  //       initial: silverkundan,
  //       hover: silverkundan,
  //     });
  //   } else if (color === 'yellow') {
  //     setCurrentImages({
  //       initial: kundan1,
  //       hover: kundan2,
  //     });
  //   }
  // };

  // Revert to default images on mouse leave
  // const handleMouseLeave = () => {
  //   setCurrentImages({
  //     initial: kundan1,
  //     hover: kundan2,
  //   });
  // };

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
  // const item = {
  //   name: 'Silver Kundan Lotus Anklet',
  //   style: 'ANKLETS',
  //   price: 3425,
  //   count: 1,
  //   img: currentImages.initial,
  // };

  // // Product details to be added to the cart for the second product
  // const item2 = {
  //   name: 'Gold Kundan Lotus Necklace',
  //   style: 'NECKLACE',
  //   price: 3999,
  //   count: 1,
  //   img: currentImages2.initial,
  // };

  const handleAddToCart = async (productId) => {
    try {
      const response = await fetch("http://localhost:2000/api/cart/add", {
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

  if (loading) return <div>Loading...</div>;
  return (
    <div>
      <ToastContainer />

      {/* Conditional class based on 'animate' state */}
      <div>
        <div className={`banner-container7 ${animate ? 'pop-out7' : ''}`}>
          <img src={valentine} alt="Wedding Banner" className="ws-banner-img7" />
        </div>

        {/* Main Container (Navbar + Product Info Section) */}
        <div className="main-container7">
          {/* Vertical Navbar */}
          <nav className="vertical-nav7">
            <ul>
              <li
                className={openSubmenu === 1 ? 'open7' : ''}
                onClick={() => handleSubmenuToggle(1)}
              >
                Product
                <MdOutlineKeyboardArrowDown className="submenu-icon7" />
                {openSubmenu === 1 && (
                  <ul className="submenu7">
                    <li>Submenu Item 1</li>
                    <li>Submenu Item 2</li>
                  </ul>
                )}
              </li>
              <li
                className={openSubmenu === 2 ? 'open7' : ''}
                onClick={() => handleSubmenuToggle(2)}
              >
                COLOR
                <MdOutlineKeyboardArrowDown className="submenu-icon7" />
                {openSubmenu === 2 && (
                  <ul className="submenu7">
                    <li>Submenu Item 1</li>
                    <li>Submenu Item 2</li>
                  </ul>
                )}
              </li>
              <li
                className={openSubmenu === 3 ? 'open7' : ''}
                onClick={() => handleSubmenuToggle(3)}
              >
                FINISH
                <MdOutlineKeyboardArrowDown className="submenu-icon7" />
                {openSubmenu === 3 && (
                  <ul className="submenu7">
                    <li>Submenu Item 1</li>
                    <li>Submenu Item 2</li>
                  </ul>
                )}
              </li>
              <li
                className={openSubmenu === 4 ? 'open7' : ''}
                onClick={() => handleSubmenuToggle(4)}
              >
                PRICE
                <MdOutlineKeyboardArrowDown className="submenu-icon7" />
                {openSubmenu === 4 && (
                  <ul className="submenu7">
                    <li>Submenu Item 1</li>
                    <li>Submenu Item 2</li>
                  </ul>
                )}
              </li>
              <li
                className={openSubmenu === 5 ? 'open7' : ''}
                onClick={() => handleSubmenuToggle(5)}
              >
                STYLE
                <MdOutlineKeyboardArrowDown className="submenu-icon7" />
                {openSubmenu === 5 && (
                  <ul className="submenu7">
                    <li>Submenu Item 1</li>
                    <li>Submenu Item 2</li>
                  </ul>
                )}
              </li>
              <li
                className={openSubmenu === 6 ? 'open7' : ''}
                onClick={() => handleSubmenuToggle(6)}
              >
                METAL
                <MdOutlineKeyboardArrowDown className="submenu-icon7" />
                {openSubmenu === 6 && (
                  <ul className="submenu7">
                    <li>Submenu Item 1</li>
                    <li>Submenu Item 2</li>
                  </ul>
                )}
              </li>
              <li
                className={openSubmenu === 7 ? 'open7' : ''}
                onClick={() => handleSubmenuToggle(7)}
              >
                Subcategory
                <MdOutlineKeyboardArrowDown className="submenu-icon7" />
                {openSubmenu === 7 && (
                  <ul className="submenu7">
                    <li>Submenu Item 1</li>
                    <li>Submenu Item 2</li>
                  </ul>
                )}
              </li>
            </ul>
          </nav>

          {/* Product Info Section (Right of Navbar) */}
          <div className="product-info-section7">
            <div className="product-info-header7">
              <span className="product-count7">159 Products</span>
              <div className="sorting-options7">
                <select
                  id="sort-option"
                  value={sortOption}
                  onChange={handleSortChange}
                >
                  <option value="alphabetically">Alphabetically (A-Z)</option>
                  <option value="price-low-high">Price (Low to High)</option>
                  <option value="price-high-low">Price (High to Low)</option>
                  <option value="rating">Rating</option>
                </select>
              </div>
            </div>
            <div className="product-grid1">
              {/* <div className="product-box-container"> */}
              {/* First product box */}
              {/* <div className="product-box" onClick={() => handleProductClick('1')}>
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
                      onClick={() => handleAddToCart(product._id)} // Add item to cart
                    >
                      Add to Cart
                    </button>
                  </div>
                </div> */}

              {/* Second product box */}
              {/* <div className="product-container"> */}
              {Array.isArray(products) && products.length > 0 ? (
                products.map((product) => (
                  <div
                    key={product.productId}
                    className="product-box"
                    onClick={() => handleProductClick(product.productId)} // Correct property name
                  >
                    <div className="product-img-container">
                      <img
                        src={product.Image || "default_initial_image.jpg"} // Fetch image from API
                        alt={product.Name}
                        className="product-img"
                      />
                      <div className="product-header">
                        {product.discount > 0 && <button className="best-seller">Best Seller</button>}
                      </div>
                    </div>
                    <div className="product-details">
                      <p className="product-description">
                        <span className="current-price">{`Rs. ${product.price}`}</span>
                        {product.priceWithCoupon && (
                          <>
                            <span className="regular-price">{`Rs. ${product.priceWithCoupon}`}</span>
                            <span className="discount">{`Save ${product.discount}%`}</span>
                          </>
                        )}
                      </p>
                      <p className="product-category">Category: {product.category}</p>
                      <p className="product-description">{product.discription}</p>
                      <h3 className="product-name">{product.Name}</h3>
                      <div className="color-selection">
                        <div className="color-circle">
                          {/* Example: Displaying a color based on the category */}
                          <span
                            className={`circle ${product.category}`}
                            onMouseEnter={() => handleMouseEnter2(product.category)}
                            onMouseLeave={handleMouseLeave2}
                          ></span>
                        </div>
                      </div>
                      <button
                        className="add-to-cart"
                        onClick={() => handleAddToCart(product.productId)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div>No products available</div>
              )}

            </div>

          </div>    {/* Add more Lotus components as needed */}
        </div>
      </div>
    </div>
    // </div>
    // </div>
  );
};

export default Flashsaless;
