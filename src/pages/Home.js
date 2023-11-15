import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../Store/MoviesAction";
import MovieCard from "../components/MovieCard";
import "../assets/css/Home.css"
function Home() {
  const [searchText, setSearchText] = useState("game");
  const[year,setYear]=useState(null);
  const[type,setType]=useState(null);
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.movies);

  const search = (selectedSearch,selectedYear,selectedType) => {
    setSearchText(selectedSearch);
    setType(selectedType);
    setYear(selectedYear);
  }; 

  useEffect(() => {
    if (searchText && year && type) {
      dispatch(fetchMovies({ searchText,year,type }));
    }
else if(searchText){

  dispatch(fetchMovies({ searchText,year,type }));

}

  }, [searchText, dispatch,year,type]);

  return (
    <>

<div className="search">
<SearchBar search={search} />
</div>
   
      <div className="container">
      

        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </>
  );
}

export default Home;
