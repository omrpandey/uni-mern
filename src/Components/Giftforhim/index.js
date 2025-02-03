import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@mui/material';
import { IoSearchOutline } from 'react-icons/io5';

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const history = useHistory();

    // Sample suggestions and products
    const trendingSearches = ['Shoes', 'Laptops', 'Smartphones', 'Headphones'];
    const productImages = [
        { name: 'Product 1', image: 'image1.jpg' },
        { name: 'Product 2', image: 'image2.jpg' },
        { name: 'Product 3', image: 'image3.jpg' },
        { name: 'Product 4', image: 'image4.jpg' },
    ];

    // Handle the change in the search input field
    const handleChange = (e) => {
        setQuery(e.target.value);

        // You can make an API call to fetch suggestions based on query
        // For now, we are using static data
        if (e.target.value) {
            setSuggestions(trendingSearches);
        } else {
            setSuggestions([]);
        }
    };

    // Handle search click
    const handleSearch = () => {
        if (query) {
            // Navigate to a new page with query as a parameter
            history.push(`/search-results?query=${query}`);
        }
    };

    return (
        <div className="headerSearch">
            <input
                type="text"
                placeholder="Search our store"
                aria-label="Search our store"
                value={query}
                onChange={handleChange}
                style={{
                    border: '2px solid #000',
                    fontSize: '16px',
                    borderRadius: '4px',
                }}
            />
            <Button aria-label="Search" onClick={handleSearch}>
                <IoSearchOutline />
            </Button>

            {suggestions.length > 0 && (
                <div className="suggestions-box">
                    <div className="trending-searches">
                        <h3>Trending Searches</h3>
                        <ul>
                            {suggestions.map((search, index) => (
                                <li key={index}>{search}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="product-suggestions">
                        <h3>Products</h3>
                        <div className="product-images">
                            {productImages.map((product, index) => (
                                <div key={index} className="product">
                                    <img src={product.image} alt={product.name} />
                                    <p>{product.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchBar;
