import React, { useState, useEffect } from "react";
import Select from "react-select"; // Importing react-select for dropdown
import axios from "axios"; // To make API requests
import './CurrencySelector.css'; 

const CurrencySelector = () => {
  const [countries, setCountries] = useState([]); // To store country data
  const [selectedCountry, setSelectedCountry] = useState(null); // To store selected country
  const [currency, setCurrency] = useState(""); // To store selected currency
  const [exchangeRate, setExchangeRate] = useState(1); // To store exchange rate for the selected currency

  // Fetch countries and currencies
  useEffect(() => {
    const fetchCountries = async () => {
      const { data } = await axios.get("https://restcountries.com/v3.1/all"); // Fetch countries data
      const countryList = data.map((country) => ({
        label: country.name.common,
        value: country.currencies
          ? Object.keys(country.currencies)[0]
          : "USD", // Default to USD if no currency is available
      }));
      setCountries(countryList); // Store countries data
    };
    fetchCountries();
  }, []);

  // Handle country selection
  const handleCountryChange = async (selectedOption) => {
    setSelectedCountry(selectedOption); // Set selected country
    setCurrency(selectedOption.value); // Set selected currency

    // Fetch exchange rate from the backend or API
    const { data } = await axios.get(
      `http://localhost:5000/api/convert-currency?currency=${selectedOption.value}`
    );
    setExchangeRate(data.rate); // Set exchange rate from the response
    // alert(
    //   `1 USD = ${data.convertedAmount} ${selectedOption.value}` // Display the conversion
    // );
  };

  return (
    <div className="currency-selector">
      <h2>Select a Country and See Its Currency</h2>
      <button>USD</button> {/* Example button */}
      {/* Country Selector Dropdown */}
      <Select
        options={countries} // Pass the country options
        onChange={handleCountryChange} // Handle country change
        placeholder="Select a country" // Placeholder text
        menuPlacement="top" // Dropdown placement
        isMulti={false} // Single select
      />
      
      
      {/* Display selected currency and exchange rate
      {currency && (
        <p>
          Selected Currency: {currency} <br />
           (Exchange Rate: {exchangeRate}) <br />
           Converted Amount: {(1*exchangeRate).toFixed(2)} {currency} for $1 USD
        </p>
      )} */}
    </div>
  );
};

export default CurrencySelector;
