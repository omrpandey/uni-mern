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
                <li>
                  <label>
                    <input
                      type="checkbox"
                      name="filter.p.product_type"
                      value="Anklets"
                      onChange={handleFilterChange}
                    />
                    Anklets (17)
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="checkbox"
                      name="filter.p.product_type"
                      value="Bangles-Bracelets"
                      onChange={handleFilterChange}
                    />
                    Bangles-Bracelets (12)
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="checkbox"
                      name="filter.p.product_type"
                      value="Chains"
                      onChange={handleFilterChange}
                    />
                    Chains (1)
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="checkbox"
                      name="filter.p.product_type"
                      value="Earcuff"
                      onChange={handleFilterChange}
                    />
                    Earcuff (2)
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="checkbox"
                      name="filter.p.product_type"
                      value="Earrings"
                      onChange={handleFilterChange}
                    />
                    Earrings (44)
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="checkbox"
                      name="filter.p.product_type"
                      value="Necklaces"
                      onChange={handleFilterChange}
                    />
                    Necklaces (24)
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="checkbox"
                      name="filter.p.product_type"
                      value="Rings"
                      onChange={handleFilterChange}
                    />
                    Rings (2)
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="checkbox"
                      name="filter.p.product_type"
                      value="Toe Rings"
                      onChange={handleFilterChange}
                    />
                    Toe Rings (29)
                  </label>
                </li>
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
            <div className="product-grid1">
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
            </div><div className="product-grid1">
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
            </div><div className="product-grid1">
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
            </div><div className="product-grid1">
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
            </div><div className="product-grid1">
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
            </div><div className="product-grid1">
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
            </div><div className="product-grid1">
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
            </div><div className="product-grid1">
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

export default Flashsaless;
