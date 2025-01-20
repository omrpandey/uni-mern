import React, { useState, useEffect } from 'react';
import fsbanner from '../../assets/images/fsbanner.jpg'; // Replace with your image path
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import './flashsaless.css'; // Ensure you have this CSS file for styling
import axios from 'axios'; // Add Axios for API calls

const Flashsaless = () => {
  const [animate, setAnimate] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [sortOption, setSortOption] = useState('alphabetically');
  const [products, setProducts] = useState([]); // State for products
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    setAnimate(true); // Trigger animation when the component mounts

    // Fetch products from backend
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/product'); // Fetch from backend API
        setProducts(response.data); // Set fetched products in state
      } catch (err) {
        setError('Failed to fetch products. Please try again later.'); // Handle errors
        console.error(err);
      }
    };

    fetchProducts();
  }, []);

  

  const handleSubmenuToggle = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index); // Toggle submenu visibility
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
    // Sorting logic (if required)
  };

  return (
    <div>
      <div className={`banner-container ${animate ? 'pop-out' : ''}`}>
        <img src={fsbanner} alt="Banner" className="banner-img" />
      </div>

      <div className="main-container">
        {/* Vertical Navbar */}
        <nav className="vertical-nav">
          <ul>
            <li
              className={openSubmenu === 1 ? 'open' : ''}
              onClick={() => handleSubmenuToggle(1)}
            >
              Product
              <MdOutlineKeyboardArrowDown className="submenu-icon" />
              {openSubmenu === 1 && (
                <ul className="submenu">
                  <li>Submenu Item 1</li>
                  <li>Submenu Item 2</li>
                </ul>
              )}
            </li>
            {/* Add other submenu items */}
          </ul>
        </nav>

        {/* Product Info Section */}
        <div className="product-info-section">
          <div className="product-info-header">
            <span className="product-count">{products.length} Products</span>
            <div className="sorting-options">
              <select id="sort-option" value={sortOption} onChange={handleSortChange}>
                <option value="alphabetically">Alphabetically (A-Z)</option>
                <option value="price-low-high">Price (Low to High)</option>
                <option value="price-high-low">Price (High to Low)</option>
                <option value="rating">Rating</option>
              </select>
            </div>
          </div>
          <div className="product-grid">
            {error ? (
              <p className="error">{error}</p>
            ) : (
              products.map((product) => (
                <div key={product.productId} className="product-card">
                  <img src={product.Image} alt={product.Name} className="product-image" />
                  <h3>{product.Name}</h3>
                  <p>Price: ₹{product.price}</p>
                  <p>Discount: {product.discount}%</p>
                  <p>Category: {product.category}</p>
                  <p>Quantity: {product.quantity}</p>
                  <p>{product.discription}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flashsaless;
