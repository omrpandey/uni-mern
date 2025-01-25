import React, { useState, useEffect } from 'react';
import wsbanner from '../../assets/images/wsbanner.jpg'; // Replace with your image path
import logoweds from '../../assets/images/logoweds.jpg'; // Replace with your image path
import logowedss from '../../assets/images/logowedss.jpg'; // Replace with your image path
import logowedsss from '../../assets/images/logowedsss.jpg'; // Replace with your image path
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import Lotus from '../Lotus'; // Import Lotus component
import './weds.css';

const Weds = () => {
  const [animate, setAnimate] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [sortOption, setSortOption] = useState('alphabetically'); // Initialize sortOption state

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
      <div className={`banner-container ${animate ? 'pop-out' : ''}`}>
        <img src={wsbanner} alt="Wedding Banner" className="ws-banner-img" />
      </div>

      {/* Circle Images Section */}
      <div className="circle-images">
        <div className="circle-op">
          <img src={logoweds} alt="Gifting" className="circle-img" />
          <p className="circle-name">Haldi</p>
        </div>
        <div className="circle-op">
          <img src={logowedss} alt="Haldi" className="circle-img" />
          <p className="circle-name">Haldi</p>
        </div>
        <div className="circle-op">
          <img src={logowedsss} alt="Mendhi" className="circle-img" />
          <p className="circle-name">Mendhi</p>
        </div>
      </div>

      {/* Vertical Navbar */}
      <div className="div123">
        <nav className="vertical-nav">
          <ul>
            {['PRODUCT', 'COLOR', 'FINISH', 'PRICE', 'STYLE', 'METAL', 'SUBCATEGORY'].map((item, index) => (
              <li
                key={index}
                className={openSubmenu === index ? 'open' : ''}
                onClick={() => handleSubmenuToggle(index)}
              >
                {item}
                <MdOutlineKeyboardArrowDown className="submenu-icon" />
                {openSubmenu === index && (
                  <ul className={`submenu no-bg`}>
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
            
            

            

            {/* Add more Lotus components as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weds;
