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
  
  // Mock product data (to simulate fetched data)
  const [products, setProducts] = useState([
    {
      productId: 1,
      Image: "https://unniyarcha.com/cdn/shop/files/Silver-Chand-Bali-Earring-theUnniyarcha-173339532.jpg?v=1725461073&width=720",
      price: 6499.00,
      priceWithCoupon: 4809.00,
      discount: 25,
      category: "silver bali",
      discription: "Beautiful bali",
      Name: "Silver Chand Bali Earring"
    },
    {
      productId: 2,
      Image: "https://unniyarcha.com/cdn/shop/files/Kundan-Jadau-Silver-Choker-Unniyarcha-Jewellery-176109161.jpg?v=1725464400&width=720",
      price: 19668.00,
      priceWithCoupon: 14554,
      discount: 40,
      category: "Kundan silver",
      discription: "Elegant Kundan",
      Name: "Kundan Jadau Silver Choker"
    },
    {
      productId: 3,
      Image: "https://unniyarcha.com/cdn/shop/files/92.5-Silver-Jadau-Earrings-theUnniyarcha-177092754.jpg?v=1725463287&width=720",
      price: 9995.00,
      priceWithCoupon: 7396,
      discount: 34,
      category: "silver Earring",
      discription: "Elegant Earring",
      Name: "Silver Jadau Earrings"
    },
    {
      productId: 4,
      Image: "https://unniyarcha.com/cdn/shop/files/Gold-Plated-Zircon-Lotus-Earcuff-Unniyarcha-Jewellery-173183356.jpg?v=1725467788&width=720",
      price: 1500,
      priceWithCoupon: 2000,
      discount: 25,
      category: "Mendhi",
      discription: "Elegant bracelet",
      Name: "Bracelet 2"
    },
    {
      productId: 5,
      Image: "https://unniyarcha.com/cdn/shop/files/Secret-Garden-Blush-Studs-theUnniyarcha-176203285.jpg?v=1725460907&width=720",
      price: 1500,
      priceWithCoupon: 2000,
      discount: 25,
      category: "Mendhi",
      discription: "Elegant bracelet",
      Name: "Bracelet 2"
    },
    {
      productId: 6,
      Image: "https://unniyarcha.com/cdn/shop/files/Silver-Kundan-Jhumka-Unniyarcha-176211464.jpg?v=1725520661&width=720",
      price: 1500,
      priceWithCoupon: 2000,
      discount: 25,
      category: "Mendhi",
      discription: "Elegant bracelet",
      Name: "Bracelet 2"
    },
    {
      productId: 7,
      Image: "https://unniyarcha.com/cdn/shop/files/Pink-And-Green-Kundan-Chandbali-Unniyarcha-Jewellery-176086454.jpg?v=1709199918&width=720",
      price: 1500,
      priceWithCoupon: 2000,
      discount: 25,
      category: "Mendhi",
      discription: "Elegant bracelet",
      Name: "Bracelet 2"
    },
    {
      productId: 8,
      Image: "https://unniyarcha.com/cdn/shop/files/Royal-Kundan-Silver-Studs-Unniyarcha-Jewellery-177119082.jpg?v=1725464173&width=720",
      price: 1500,
      priceWithCoupon: 2000,
      discount: 25,
      category: "Mendhi",
      discription: "Elegant bracelet",
      Name: "Bracelet 2"
    },
    {
      productId: 9,
      Image: "https://unniyarcha.com/cdn/shop/files/White-_-Green-Kundan-Jadau-Choker-Unniyarcha-Jewellery-176005698.jpg?v=1725467673&width=720",
      price: 1500,
      priceWithCoupon: 2000,
      discount: 25,
      category: "Mendhi",
      discription: "Elegant bracelet",
      Name: "Bracelet 2"
    },
    // Add more product objects as needed
  ]);

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
                  <ul className="submenu no-bg">
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
            <span className="product-count1">{products.length} Products</span>
            <div className="sorting-options1">
              <select id="sort-option" value={sortOption} onChange={handleSortChange}>
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
                <div key={product.productId} className="product-box" onClick={() => handleProductClick(product.productId)}>
                  <div className="product-img-container">
                    <img
                      src={product.Image || "https://unniyarcha.com/cdn/shop/files/Silver-Chand-Bali-Earring-theUnniyarcha-173339532.jpg?v=1725461073&width=720"} // Use default if image not available
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
                        <span className={`circle ${product.category}`}></span>
                      </div>
                    </div>
                    <button className="add-to-cart" onClick={() => handleAddToCart(product.productId)}>
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
  );
};

export default Weds;
