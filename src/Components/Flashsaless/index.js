import React, { useState, useEffect } from 'react';
import fsbanner from '../../assets/images/fsbanner.jpg'; // Replace with your image path
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import Lotus from '../Lotus'; // Import Lotus component
import './flashsaless.css'; // Ensure you have this CSS file for styling

const Flashsaless = () => {
  const [animate, setAnimate] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [sortOption, setSortOption] = useState('alphabetically');

  useEffect(() => {
    setAnimate(true); // Trigger animation when the component mounts
  }, []);

  const handleSubmenuToggle = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index); // Toggle submenu visibility
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  return (
    <div>
      <div className={`banner-container ${animate ? 'pop-out' : ''}`}>
        <img src={fsbanner} alt="Banner" className="banner-img" />
      </div>

      {/* Main Container (Navbar + Product Info Section) */}
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
            <li
              className={openSubmenu === 2 ? 'open' : ''}
              onClick={() => handleSubmenuToggle(2)}
            >
              COLOR
              <MdOutlineKeyboardArrowDown className="submenu-icon" />
              {openSubmenu === 2 && (
                <ul className="submenu">
                  <li>Submenu Item 1</li>
                  <li>Submenu Item 2</li>
                </ul>
              )}
            </li>
            <li
              className={openSubmenu === 3 ? 'open' : ''}
              onClick={() => handleSubmenuToggle(3)}
            >
              FINISH
              <MdOutlineKeyboardArrowDown className="submenu-icon" />
              {openSubmenu === 3 && (
                <ul className="submenu">
                  <li>Submenu Item 1</li>
                  <li>Submenu Item 2</li>
                </ul>
              )}
            </li>
            <li
              className={openSubmenu === 4 ? 'open' : ''}
              onClick={() => handleSubmenuToggle(4)}
            >
              PRICE
              <MdOutlineKeyboardArrowDown className="submenu-icon" />
              {openSubmenu === 4 && (
                <ul className="submenu">
                  <li>Submenu Item 1</li>
                  <li>Submenu Item 2</li>
                </ul>
              )}
            </li>
            <li
              className={openSubmenu === 5 ? 'open' : ''}
              onClick={() => handleSubmenuToggle(5)}
            >
              STYLE
              <MdOutlineKeyboardArrowDown className="submenu-icon" />
              {openSubmenu === 5 && (
                <ul className="submenu">
                  <li>Submenu Item 1</li>
                  <li>Submenu Item 2</li>
                </ul>
              )}
            </li>
            <li
              className={openSubmenu === 6 ? 'open' : ''}
              onClick={() => handleSubmenuToggle(6)}
            >
              METAL
              <MdOutlineKeyboardArrowDown className="submenu-icon" />
              {openSubmenu === 6 && (
                <ul className="submenu">
                  <li>Submenu Item 1</li>
                  <li>Submenu Item 2</li>
                </ul>
              )}
            </li>
            <li
              className={openSubmenu === 7 ? 'open' : ''}
              onClick={() => handleSubmenuToggle(7)}
            >
              Subcategory
              <MdOutlineKeyboardArrowDown className="submenu-icon" />
              {openSubmenu === 7 && (
                <ul className="submenu">
                  <li>Submenu Item 1</li>
                  <li>Submenu Item 2</li>
                </ul>
              )}
            </li>
          </ul>
        </nav>

        {/* Product Info Section (Right of Navbar) */}
        <div className="product-info-section">
          <span className="product-count">159 Products</span>
          <div className="sorting-options">
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
          <Lotus/>
          {/* Add the Lotus Component */}
        </div>
      </div>
    </div>
    
  );
};

export default Flashsaless;
