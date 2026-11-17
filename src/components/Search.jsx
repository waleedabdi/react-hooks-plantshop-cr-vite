import React from "react";

function Search({ searchTerm, onSearchChange }) {
  // This input is controlled by PlantPage, keeping filtering and reset behavior in one owner.
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchTerm}
        onChange={(event) => onSearchChange(event.target.value)}
      />
    </div>
  );
}

export default Search;
