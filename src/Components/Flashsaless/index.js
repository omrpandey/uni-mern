import React, { useState, useEffect } from 'react';
import valentine from '../../assets/images/valentine.jpg'; // Correct image path
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
            <div className="product-grid7">
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
    </div>
  );
};

export default Flashsaless;
