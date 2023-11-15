// SearchBar.js
import React, { useState } from "react";
import "../assets/css/SearchBar.css"
function SearchBar({ search }) {
  const [selectedSearch, setSelectedSearch] = useState("pokemon");

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      search(selectedSearch);
    }
  };

  const handleButtonClick = () => {
    search(selectedSearch);
  }

  return (
    <>
      <input
        type="text"
        name="search"
        value={selectedSearch}
        onKeyPress={handleKeyPress}
        onChange={(e) => setSelectedSearch(e.target.value)}
      />
      <button onClick={handleButtonClick}>Ara</button>
    </>
  );
}

export default SearchBar;
