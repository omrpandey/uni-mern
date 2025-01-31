import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for page navigation
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import Lotus from '../Lotus'; // Correct import for default export
import './SuiDang.css';

const SuiDang = () => {
  const [selectedFilters, setSelectedFilters] = useState([]); // Initialize selectedFilters state
  const [animate, setAnimate] = useState(false);
  const [sortOption, setSortOption] = useState('alphabetically');
  const navigate = useNavigate(); // Initialize navigate for routing
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentImages2, setCurrentImages2] = useState({
    initial: "",
    hover: "",
  });
  const [openSubmenu, setOpenSubmenu] = useState(1);
  const handleSubmenuToggle = (submenuId) => {
    // Prevent submenu from closing if it's a filter interaction
    setOpenSubmenu((prev) => (prev === submenuId ? prev : submenuId));
  };


  useEffect(() => {
    setAnimate(true); // Trigger animation when the component mounts
  }, []);
  const handleFilterChange = (event) => {
    const { value, checked } = event.target;
    setSelectedFilters((prevFilters) =>
      checked ? [...prevFilters, value] : prevFilters.filter((item) => item !== value)
    );
  };
  // Fetch filtered or all products based on selected filters
  useEffect(() => {
    const fetchFilteredProducts = async () => {
      try {
        setLoading(true); // Set loading state to true while fetching
        const filterQuery = selectedFilters.length > 0 ? `?filters=${selectedFilters.join(',')}` : '';
        const response = await axios.get(`http://localhost:5000/api/product${filterQuery}`);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchFilteredProducts();
  }, [selectedFilters]); // Re-run when selectedFilters changes

  // Navigate to a new page when a product is clicked
  const handleProductClick = (productId) => {
    // Replace 'product-details' with the actual route you want to navigate to
    navigate(`/ProductDetail/${productId}`);
  };


  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const handleMouseEnter2 = (color) => {
    if (color === 'silver') {
      setCurrentImages2({
        initial: "",
        hover: "",
      });
    } else if (color === 'yellow') {
      setCurrentImages2({
        initial: "",
        hover: "",
      });
    }
  };

  // Revert to default images on mouse leave for second box
  const handleMouseLeave2 = () => {
    setCurrentImages2({
      initial: "",
      hover: "",
    });
  };
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
  const [hoverSubmenu, setHoverSubmenu] = useState(null);

  // Mock data for categories
  const menuItems = [
    {
      title: 'PRODUCT TYPE',
      options: ['Anklets',  'Chains', 'Earcuff', 'Earrings', 'Necklaces', 'Rings', 'Toe Rings'],
    },
    {
      title: 'COLOR',
      options: ['Black','Blue','Gold','Green','Oxidised','Pink','Red','Silver'],
    },
    {
      title: 'FINISH',
      options: ['Gold(58)','Oxidised(1)','Silver(79)'],
    },
    {
      title: 'STYLE',
      options: ['Contempory(59)','Traditinal(93)'],
    },
    {
      title: 'METAL',
      options: ['GoldPlatedAnklets(1)','KundanAnklets(1)'],
    },
    {
      title: 'SUBCATEGORY',
      options: ['Bali(2)','Bangle/Braclet(1)','BeadedAnklets(1)'],
    },
    // Add more categories as needed
  ];
  if (loading) return <div>Loading...</div>;
  return (
    <div>
      <ToastContainer />

      {/* Conditional class based on 'animate' state */}
      <div>
        <div className={`banner-container7 ${animate ? 'pop-out7' : ''}`}>
        </div>

        {/* Main Container (Navbar + Product Info Section) */}
        <div className="main-container71">
          {/* Vertical Navbar */}
          <nav className="vertical-nav71">
            <ul>
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className={hoverSubmenu === index ? 'open7' : ''}
                  onMouseEnter={() => setHoverSubmenu(index)}
                  onMouseLeave={() => setHoverSubmenu(null)}
                >
                  <span className="menu-title71">
                    {item.title}
                    <MdOutlineKeyboardArrowDown className="submenu-icon7" />
                  </span>
                  {hoverSubmenu === index && (
                    <ul className="submenu71">
                      {item.options.map((option, i) => (
                        <li key={i}>
                          <label>
                            <input
                              type="checkbox"
                              name={`filter.${item.title.toLowerCase().replace(' ', '_')}`}
                              value={option}
                              onChange={(e) => console.log(e.target.value)} // Handle the filter logic
                            />
                            {option}
                          </label>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
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
            <div className="product-grid7">
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
          </div>
        </div>
      </div>
    </div>
  );
};


export default SuiDang;
