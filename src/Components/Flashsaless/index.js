import Select from 'react-select';
import Flag from 'react-world-flags';
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for page navigation
import lovestories from "../../assets/images/lovestories.jpg"; // Correct image path
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import silverkundan from "../../assets/images/silverkundan.jpg"; // Silver image
import man1 from "../../assets/images/man1.jpg"; // New initial image for second product
import man2 from "../../assets/images/man2.jpg"; // New hover image for second product
import "./flashsaless.css"; // Ensure you have this CSS file for styling
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

// import CurrencySelector from "../CurrencySelector";

const Flashsaless = () => {
  const [selectedFilters, setSelectedFilters] = useState([]); // Initialize selectedFilters state
  const [animate, setAnimate] = useState(false);
  const [sortOption, setSortOption] = useState("alphabetically");
  const navigate = useNavigate(); // Initialize navigate for routing
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({});
    const [selectedCurrency, setSelectedCurrency] = useState(null);
    const [conversionRate, setConversionRate] = useState(null);
    const handleChange = async (selectedOption) => {
      setSelectedCurrency(selectedOption); // Update the selected currency state
      await fetchFilteredAndSortedProducts(); // Call the function without passing the currency, as it's handled internally
    };
  
  const [currentImages2, setCurrentImages2] = useState({
    initial: "",
    hover: "",
  });
  const [openSubmenu, setOpenSubmenu] = useState(1);
  const handleSubmenuToggle = (submenuId) => {
    // Prevent submenu from closing if it's a filter interaction
    setOpenSubmenu((prev) => (prev === submenuId ? prev : submenuId));
  };

  
const countries = [
  { code: "US", name: "United States", currency: "USD", flag: "US" },
  { code: "IN", name: "India", currency: "INR", flag: "IN" },
  { code: "GB", name: "United Kingdom", currency: "GBP", flag: "GB" },
  { code: "JP", name: "Japan", currency: "JPY", flag: "JP" },
  // Add more countries as needed
];
const countryOptions = countries.map((country) => ({
  value: country.currency,
  label: (
    <div className="currency-option">
      <Flag code={country.flag} style={{ width: '20px', height: '15px', marginRight: '8px' }} />
      {country.name} ({country.currency})
    </div>
  ),
  country: country,
}));

useEffect(() => {
  // Call fetchFilteredAndSortedProducts directly when selectedCurrency changes
  if (selectedCurrency) {
    fetchFilteredAndSortedProducts();  // No need to call fetchConversionRate separately
  }
}, [selectedCurrency]);

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

  // Handle sorting change
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };
  const fetchFilteredAndSortedProducts = async () => {
    try {
      setLoading(true); // Show loading state
  
      // Construct the filter query string based on selected filters
      const filterQuery =
        selectedFilters.length > 0
          ? `filters=${selectedFilters.join(",")}`
          : "";
      const sortQuery = sortOption ? `sort=${sortOption}` : "";
      const currencyQuery = selectedCurrency ? `currency=${selectedCurrency.value}` : "";
  
      // Construct the API URL with filters, sort, and currency queries
      let apiUrl = `http://localhost:5000/api/product/flashsaless?`;
  
      if (filterQuery) {
        apiUrl += filterQuery;
      }
  
      if (sortQuery) {
        if (filterQuery) {
          apiUrl += `&${sortQuery}`;
        } else {
          apiUrl += sortQuery;
        }
      }
  
      if (currencyQuery) {
        if (filterQuery || sortQuery) {
          apiUrl += `&${currencyQuery}`;
        } else {
          apiUrl += currencyQuery;
        }
      }
  
      console.log("Fetching Data From:", apiUrl); // Debugging
  
      // Fetch products from the API
      const response = await axios.get(apiUrl);
      console.log("Response Data:", response.data); // Debugging
  
      // If no products are found, show a message or show all products
      if (Array.isArray(response.data) && response.data.length === 0) {
        setProducts([]); // Show no products message
      } else {
        setProducts(response.data); // Show filtered products
      }
    } catch (error) {
      console.error("Error fetching products:", error);
  
      // Handle error responses
      if (error.response && error.response.status === 404) {
        setProducts([]); // Handle 404 error case
      } else {
        alert("An error occurred while fetching products."); // Generic error message
      }
    } finally {
      setLoading(false); // Ensure loading stops in all cases
    }
  };
  

  // Call the function in useEffect
  useEffect(() => {
    fetchFilteredAndSortedProducts();
  }, [selectedFilters, sortOption]);

  // Apply sorting and filtering logic
  useEffect(() => {
    let filtered = [...products]; // Start with all products

    // Apply sorting
    if (sortOption === "alphabetically") {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === "price-low-high") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-high-low") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortOption === "rating") {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    setFilteredProducts(filtered); // Set sorted and filtered products
  }, [sortOption, products]);

  // Navigate to a new page when a product is clicked
  const handleProductClick = (productId) => {
    // Replace 'product-details' with the actual route you want to navigate to
    navigate(`/ProductDetail/${productId}`);
  };

  const handleMouseEnter2 = (color) => {
    if (color === "silver") {
      setCurrentImages2({
        initial: silverkundan,
        hover: silverkundan,
      });
    } else if (color === "yellow") {
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
  const [hoverSubmenu, setHoverSubmenu] = useState(null);

  // Mock data for categories
  const menuItems = [
    {
      title: "PRODUCT TYPE",
      options: [
        "Anklets",
        "Chains",
        "Earcuff",
        "Earrings",
        "Necklaces",
        "Rings",
        "Toe Rings",
      ],
    },
    {
      title: "COLOR",
      options: [
        "Black",
        "Blue",
        "Gold",
        "Green",
        "Oxidised",
        "Pink",
        "Red",
        "Silver",
      ],
    },
    {
      title: "FINISH",
      options: ["Gold(58)", "Oxidised(1)", "Silver(79)"],
    },
    {
      title: "STYLE",
      options: ["Contempory(59)", "Traditinal(93)"],
    },
    {
      title: "METAL",
      options: ["GoldPlatedAnklets(1)", "KundanAnklets(1)"],
    },
    {
      title: "SUBCATEGORY",
      options: ["Bali(2)", "Bangle/Braclet(1)", "BeadedAnklets(1)"],
    },
    // Add more categories as needed
  ];
  if (loading) return <div>Loading...</div>;
  return (
    <div>
      <ToastContainer />

      {/* Conditional class based on 'animate' state */}
      <div>
        <div className={`banner-container7 ${animate ? "pop-out7" : ""}`}>
          <img
            src={lovestories}
            alt="Wedding Banner"
            className="ws-banner-img7"
          />
        </div>

        {/* Main Container (Navbar + Product Info Section) */}
        <div className="main-container71">
          {/* Vertical Navbar */}
          <nav className="vertical-nav71">
            <ul>
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className={hoverSubmenu === index ? "open7" : ""}
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
                              name={`filter.${item.title
                                .toLowerCase()
                                .replace(" ", "_")}`}
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
          <div className="currency-selector">
              <Select
                options={countryOptions}
                onChange={handleChange}
                value={selectedCurrency}
                getOptionLabel={(e) => e.label}
                className="currency-dropdown"
                placeholder="Select Currency"
                menuPlacement="top" // Dropdown opens upwards
                styles={{
                  control: (provided) => ({
                    ...provided,
                    position: "relative",
                    zIndex: 9999, // Ensure it stays on top of other elements
                  }),
                  menu: (provided) => ({
                    ...provided,
                    zIndex: 9999, // Ensure the menu stays on top
                  }),
                }}
              />
            </div>
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
              {Array.isArray(products) && products.length > 0 ? (
                products.map((product) => (
                  <div
                    key={product.productId}
                    className="product-box"
                    onClick={() => handleProductClick(product.productId)} // Correct property name
                  >
                    <div className="product-img-container">
                      <img
                        src={
                          product.images && product.images.length > 0
                            ? product.images[0]
                            : "default_initial_image.jpg"
                        } // Fetch first image from API
                        alt={product.name || "Product Image"} // Ensure the correct property is used
                        className="product-img default-img"
                      />
                      <img
                        src={
                          product.images && product.images.length > 1
                            ? product.images[1]
                            : "default_hover_image.jpg"
                        } // Fetch second image for hover effect
                        alt={product.name || "Product Image"}
                        className="product-img hover-img"
                      />

                      <div className="product-header">
                        {product.discount > 0 && (
                          <button className="best-seller">Best Seller</button>
                        )}
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
                      <p className="product-category">
                        Category: {product.category}
                      </p>
                      <p className="product-description">
                        {product.description}
                      </p>{" "}
                      {/* Correct field name */}
                      <h3 className="product-name">{product.name}</h3>{" "}
                      {/* Correct field name */}
                      <div className="color-selection">
                        <div className="color-circle">
                          <span
                            className={`circle ${product.category}`}
                            onMouseEnter={() =>
                              handleMouseEnter2(product.category)
                            }
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
