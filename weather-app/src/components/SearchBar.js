import React from "react";

function SearchBar({ city, setCity, handleSearch }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
      <button onClick={handleSearch} style={{ marginLeft: "10px" }}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;