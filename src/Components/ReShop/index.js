import React, { useState, useEffect } from 'react';
import republic from '../../assets/images/republic.jpg'; 
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import Lotus from '../Lotus'; 
import './ReShop.css';

const ReShop = () => {
  const [animate, setAnimate] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [sortOption, setSortOption] = useState('alphabetically'); 

  useEffect(() => {
    setAnimate(true); // Trigger animation when the component mounts
  }, []);

  const handleSubmenuToggle = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  return (
    <div>
      <div className={`banner-container5 ${animate ? 'pop-out5' : ''}`}>
        <img src={republic} alt="Wedding Banner" className="ws-banner-img5" />
      </div>

      {/* Vertical Navbar */}
      <div className="div1235">
        <nav className="vertical-nav5">
          <ul>
            {['PRODUCT', 'COLOR', 'FINISH', 'PRICE', 'STYLE', 'METAL', 'SUBCATEGORY'].map((item, index) => (
              <li
                key={index}
                className={openSubmenu === index ? 'open5' : ''}
                onClick={() => handleSubmenuToggle(index)}
              >
                {item}
                <MdOutlineKeyboardArrowDown className="submenu-icon5" />
                {openSubmenu === index && (
                  <ul className={`submenu no-bg5`}>
                    <li>
                      <input type="checkbox" id={`submenu-${index}-1`} />
                      <label htmlFor={`submenu-${index}-1`}>Submenu Item 1</label>
                    </li>
                    <li>
                      <input type="checkbox" id={`submenu-${index}-2`} />
                      <label htmlFor={`submenu-${index}-2`}>Submenu Item 2</label>
                    </li>
                    <li>
                      <input type="checkbox" id={`submenu-${index}-3`} />
                      <label htmlFor={`submenu-${index}-3`}>Submenu Item 3</label>
                    </li>
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Product Info Section */}
        <div className="product-info-section15">
          <div className="product-info-header15">
            <span className="product-count15">159 Products</span>
            <div className="sorting-options15">
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
          <div className="product-grid15">
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
            <Lotus />
            <Lotus />
            <Lotus />
            <Lotus />
            <Lotus />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReShop;