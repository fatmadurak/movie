import React, { useState } from "react";
import "../assets/css/SearchBar.css";

function SearchBar({ search }) {
  const [selectedSearch, setSelectedSearch] = useState("");
  const [selectedYear, setSelectedYear] = useState(undefined); // Change from null to undefined
  const [selectedType, setSelectedType] = useState(undefined); // Change from null to undefined

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      search(selectedSearch, selectedYear, selectedType);
    }
  };

  const handleButtonClick = () => {
    search(selectedSearch, selectedYear, selectedType);
  };

  const years = [];
  const currentYear = new Date().getFullYear();
  for (let i = 2000; i <= currentYear; i++) {
    years.push(i);
  }

  const types = [ "movie", "series", "episode"]; // Add an empty string as the default value

  return (
    <>
      <select
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
        onKeyPress={handleKeyPress}
      >
        <option value="">Kategoriler</option>
        {types.map((type, index) => (
          <option value={type} key={type + index}>
            {type || "Seçiniz"} {/* Display a default text if the value is an empty string */}
          </option>
        ))}
      </select>

      <select
        value={selectedYear}
        onChange={(e) => setSelectedYear(e.target.value)}
        onKeyPress={handleKeyPress}
      >
        <option value="">Yıllar</option>
        {years.map((year, index) => (
          <option value={year} key={year + index}>
            {year}
          </option>
        ))}
      </select>

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
