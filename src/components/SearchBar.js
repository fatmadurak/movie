// SearchBar.js
import React, { useState } from 'react';

function SearchBar({ search }) {
  const [searchText, setSearchText] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      search(searchText, selectedType, selectedYear);
    }
  };
  const handleButtonClick = () => {
    search(searchText, selectedType, selectedYear);
  };

  const types = ["movie", "series", "episode"];

  const years = [];
  const currentYear = parseInt(new Date().getFullYear());
  for (let i = 2000; i <= currentYear; i++) {
    years.push(i);
  }

  return (
    <>
      <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
        <option value="">Yıllar</option>
        {years.map((year, index) => (
          <option value={year} key={year + index}>
            {year}
          </option>
        ))}
      </select>

      <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
        <option value="">Tür</option>
        {types.map((type, index) => (
          <option value={type} key={type + index}>
            {type}
          </option>
        ))}
      </select>

      <input type="text" name="search" value={searchText} onKeyPress={handleKeyPress} onChange={(e) => setSearchText(e.target.value)} />

      <button onClick={handleButtonClick}>
        Ara
      </button>
    </>
  );
}

export default SearchBar;
