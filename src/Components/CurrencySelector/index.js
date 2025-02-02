import React, { useState } from 'react';
import Select from 'react-select';
import Flag from 'react-world-flags';
import './CurrencySelector.css'; // Import the CSS for styling

const countries = [
  { code: 'US', name: 'United States', currency: 'USD', flag: 'US' },
  { code: 'IN', name: 'India', currency: 'INR', flag: 'IN' },
  { code: 'GB', name: 'United Kingdom', currency: 'GBP', flag: 'GB' },
  { code: 'JP', name: 'Japan', currency: 'JPY', flag: 'JP' },
  // Add more countries as needed
];

const CurrencySelector = () => {
  const [selectedCurrency, setSelectedCurrency] = useState(null);
  const [conversionRate, setConversionRate] = useState(null);

  const handleChange = async(selectedOption) => {
    setSelectedCurrency(selectedOption);
    await fetchConversionRate(selectedOption.value);
  };

  const fetchConversionRate = async (currencyCode) => {
    try {
      const response = await fetch(`/api/exchange-rate?currency=${currencyCode}`);
      const data = await response.json();
      setConversionRate(data.rate);
    } catch (error) {
      console.error("Error fetching exchange rate:", error);
    }
  };

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

  return (
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
            position: 'relative',
            zIndex: 9999, // Ensure it stays on top of other elements
          }),
          menu: (provided) => ({
            ...provided,
            zIndex: 9999, // Ensure the menu stays on top
          }),
        }}
      />
     
    </div>
  );
};

export default CurrencySelector;
