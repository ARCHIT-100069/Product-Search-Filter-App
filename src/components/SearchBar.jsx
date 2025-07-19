import React from "react";

const SearchBar = ({ value, onChange }) => (
  <input
    type="text"
    placeholder="Search products..."
    value={value}
    onChange={onChange}
    className="search-bar-input"
  />
);

export default SearchBar; 