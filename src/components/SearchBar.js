import React, { useState } from 'react'

function SearchBar() {
 
 const[search,setSearch]=useState("");
 const[selectedYear,setSelectedYear]=useState("");
 const[selectedType,setSelectedType]=useState("");
 
 const handleKeyPress=(e)=>{

  e.key="Enter" 

 }

 const types=[	"movie", "series", "episode"]


 
 const years = [];
 const currentYear = parseInt(new Date().getFullYear());
 
 for (let i = 2000; i <= currentYear; i++) {
     years.push(i);
 }




  return (

<>
<select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)} onKeyPress={handleKeyPress}>
  <option value="">Yıllar</option>
  {years.map((year, index) => (
    <option value={year} key={year + index}>
      {year}
    </option>
  ))}
</select>

<select value={selectedType} onChange={(e) => setSelectedType(e.target.value)} onKeyPress={handleKeyPress}>
  <option value="">Tür</option>
  {types.map((type, index) => (
    <option value={type} key={type + index}>
      {type}
    </option>
  ))}
</select>

<input type="text" name="search" value={search} onKeyPress={handleKeyPress}  onChange={(e) => setSearch(e.target.value)}/>


</>


  )
}

export default SearchBar