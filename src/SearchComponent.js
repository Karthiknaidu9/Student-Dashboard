import React, { useState } from "react";
import "./SearchComponent.css";

const SearchComponent = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <button
        onClick={() => {
          setSearchTerm("");
        }}
        className="search-button"
      >
        Search
      </button>
    </div>
  );
};

export default SearchComponent;
