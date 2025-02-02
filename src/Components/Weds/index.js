import React, { useState, useEffect } from 'react';
import wsbanner from '../../assets/images/wsbanner.jpg';
import logoweds from '../../assets/images/logoweds.jpg';
import logowedss from '../../assets/images/logowedss.jpg';
import logowedsss from '../../assets/images/logowedsss.jpg';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import './weds.css';

const Weds = () => {
  const [animate, setAnimate] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [sortOption, setSortOption] = useState('alphabetically');
  const [selectedFilters, setSelectedFilters] = useState([]); // For filter selection
  const [hoverSubmenu, setHoverSubmenu] = useState(null); // For handling hover

  useEffect(() => {
    setAnimate(true); // Trigger animation when component mounts
  }, []);

  const handleSubmenuToggle = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  // Simulate handling product click
  const handleProductClick = (productId) => {
    console.log("Product clicked: ", productId);
  };

  // Simulate adding product to the cart
  const handleAddToCart = (productId) => {
    console.log("Added to cart: ", productId);
  };

  // Function to handle filter change
  const handleFilterChange = (event) => {
    const value = event.target.value;

    setSelectedFilters((prevFilters) => {
      if (prevFilters.includes(value)) {
        // Remove filter if it's already selected
        return prevFilters.filter((filter) => filter !== value);
      } else {
        // Add filter if it's not selected
        return [...prevFilters, value];
      }
    });
  };

  // Mock data for categories
  const menuItems = [
    {
      title: 'PRODUCT TYPE',
      options: ['Anklets', 'Chains', 'Earcuff', 'Earrings', 'Necklaces', 'Rings', 'Toe Rings'],
    },
    {
      title: 'COLOR',
      options: ['Black', 'Blue', 'Gold', 'Green', 'Oxidised', 'Pink', 'Red', 'Silver'],
    },
    {
      title: 'FINISH',
      options: ['Gold(58)', 'Oxidised(1)', 'Silver(79)'],
    },
    {
      title: 'STYLE',
      options: ['Contempory(59)', 'Traditinal(93)'],
    },
    {
      title: 'METAL',
      options: ['GoldPlatedAnklets(1)', 'KundanAnklets(1)'],
    },
    {
      title: 'SUBCATEGORY',
      options: ['Bali(2)', 'Bangle/Braclet(1)', 'BeadedAnklets(1)'],
    },
    // Add more categories as needed
  ];

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
                            checked={selectedFilters.includes(option)}
                            name={`filter.${item.title.toLowerCase().replace(' ', '_')}`}
                            value={option}
                            onChange={handleFilterChange}
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
      </div>
    </div>
  );
};

export default Weds;
