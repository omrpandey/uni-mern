import React, { useState, useEffect } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import Lotus from '../Lotus'; // Correct import for default export
import './SuiDang.css';

const SuiDang = () => {
  const [animate, setAnimate] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [sortOption, setSortOption] = useState('alphabetically'); // Initialize sortOption state

  useEffect(() => {
    setAnimate(true); // Trigger animation when the component mounts
  }, []);

  const handleSubmenuToggle = (index) => {
    // If the clicked submenu is already open, close it, otherwise open it
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value); // Update sort option based on user selection
  };

  return (
    <div>
      {/* Vertical Navbar */}
      <div className="div123">
        <nav className="vertical-nav">
          <ul>
            {['PRODUCT', 'COLOR', 'FINISH', 'PRICE', 'STYLE', 'METAL', 'SUBCATEGORY'].map((item, index) => (
              <li
                key={index}
                className={openSubmenu === index + 1 ? 'open' : ''}
                onClick={() => handleSubmenuToggle(index + 1)}
              >
                {item}
                <MdOutlineKeyboardArrowDown className="submenu-icon" />
                {openSubmenu === index + 1 && (
                  <ul className="submenu">
                    <li>Submenu Item 1</li>
                    <li>Submenu Item 2</li>
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Product Info Section (Right of Navbar) */}
        <div className="product-info-section1">
          <div className="product-info-header1">
            <span className="product-count1">159 Products</span>
            <div className="sorting-options1">
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
            <Lotus />
            <Lotus />
            <Lotus />
            <Lotus />
            <Lotus />
            <Lotus />
            <Lotus />
            <Lotus />
            <Lotus />
            <Lotus />
            <Lotus />
            <Lotus />
            {/* Add more Lotus components as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuiDang;
