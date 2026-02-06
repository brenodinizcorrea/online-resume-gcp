import React from "react";
import "./SearchBar.css";

const SearchBar = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Seach posts..."
      value={value}
      onChange={e => onChange(e.target.value)}
      className="search-bar"
    />
  );
};

export default SearchBar;