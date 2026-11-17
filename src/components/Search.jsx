import React from "react";

function Search({ searchTerm, onSearchChange }) {
  // Update the parent search term on every input change.
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
