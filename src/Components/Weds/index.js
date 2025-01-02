import React, { useState, useEffect } from 'react';
import wsbanner from '../../assets/images/wsbanner.jpg'; // Replace with your image path
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import './weds.css';

const Weds = () => {
  const [animate, setAnimate] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  useEffect(() => {
    setAnimate(true); // Trigger animation when the component mounts
  }, []);

  const handleSubmenuToggle = (index) => {
    // If the clicked submenu is already open, close it, otherwise open it
    setOpenSubmenu(openSubmenu === index ? null : index);
  };
  

  return (
    <div>
      <div className={`banner-container ${animate ? 'pop-out' : ''}`}>
        <img src={wsbanner} alt="Banner" className="banner-img" />
      </div>
      
      {/* Vertical Navbar */}
      <nav className="vertical-nav">
        <ul>
          <li onClick={() => handleSubmenuToggle(1)} className={`menu-item ${openSubmenu === 1 ? 'open' : ''}`}>
            Product
            <MdOutlineKeyboardArrowDown
              className={`submenu-icon ${openSubmenu === 1 ? 'rotate' : ''}`}
            />
            {openSubmenu === 1 && (
              <ul className="submenu open">
                <li>Submenu Item 1</li>
                <li>Submenu Item 2</li>
              </ul>
            )}
          </li>
          <li onClick={() => handleSubmenuToggle(2)} className={`menu-item ${openSubmenu === 2 ? 'open' : ''}`}>
            COLOR
            <MdOutlineKeyboardArrowDown
              className={`submenu-icon ${openSubmenu === 2 ? 'rotate' : ''}`}
            />
            {openSubmenu === 2 && (
              <ul className="submenu open">
                <li>Submenu Item 1</li>
                <li>Submenu Item 2</li>
              </ul>
            )}
          </li>
          <li onClick={() => handleSubmenuToggle(3)} className={`menu-item ${openSubmenu === 3 ? 'open' : ''}`}>
            FINISH
            <MdOutlineKeyboardArrowDown
              className={`submenu-icon ${openSubmenu === 3 ? 'rotate' : ''}`}
            />
            {openSubmenu === 3 && (
              <ul className="submenu open">
                <li>Submenu Item 1</li>
                <li>Submenu Item 2</li>
              </ul>
            )}
          </li>
          <li onClick={() => handleSubmenuToggle(4)} className={`menu-item ${openSubmenu === 4 ? 'open' : ''}`}>
            PRICE
            <MdOutlineKeyboardArrowDown
              className={`submenu-icon ${openSubmenu === 4 ? 'rotate' : ''}`}
            />
            {openSubmenu === 4 && (
              <ul className="submenu open">
                <li>Submenu Item 1</li>
                <li>Submenu Item 2</li>
              </ul>
            )}
          </li>
          <li onClick={() => handleSubmenuToggle(5)} className={`menu-item ${openSubmenu === 5 ? 'open' : ''}`}>
            STYLE
            <MdOutlineKeyboardArrowDown
              className={`submenu-icon ${openSubmenu === 5 ? 'rotate' : ''}`}
            />
            {openSubmenu === 5 && (
              <ul className="submenu open">
                <li>Submenu Item 1</li>
                <li>Submenu Item 2</li>
              </ul>
            )}
          </li>
          <li onClick={() => handleSubmenuToggle(6)} className={`menu-item ${openSubmenu === 6 ? 'open' : ''}`}>
            METAL
            <MdOutlineKeyboardArrowDown
              className={`submenu-icon ${openSubmenu === 6 ? 'rotate' : ''}`}
            />
            {openSubmenu === 6 && (
              <ul className="submenu open">
                <li>Submenu Item 1</li>
                <li>Submenu Item 2</li>
              </ul>
            )}
          </li>
          <li onClick={() => handleSubmenuToggle(7)} className={`menu-item ${openSubmenu === 7 ? 'open' : ''}`}>
            Subcategory
            <MdOutlineKeyboardArrowDown
              className={`submenu-icon ${openSubmenu === 7 ? 'rotate' : ''}`}
            />
            {openSubmenu === 7 && (
              <ul className="submenu open">
                <li>Submenu Item 1</li>
                <li>Submenu Item 2</li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Weds;
