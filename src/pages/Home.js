// Home.js
import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../Store/MoviesAction';

function Home() {
  const [searchText, setSearchText] = useState("");
  const [year, setYear] = useState(null);
  const [type, setType] = useState(null);
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.movies);

  console.log(movies);

  const search = (searchText, selectedType, selectedYear) => {
    selectedType && setType(selectedType);
    selectedYear && setYear(selectedYear);
    searchText && setSearchText(searchText);
  };

  useEffect(() => {
    if (searchText || type || year) {
      dispatch(fetchMovies({ searchText, type, year }));
    }
  }, [searchText, type, year, dispatch]);

  return (
    <>
      <SearchBar text={searchText} search={search} />
    </>
  );
}

export default Home;
