import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../Store/MoviesAction";
import MovieCard from "../components/MovieCard";
import "../assets/css/Home.css"
function Home() {
  const [searchText, setSearchText] = useState("pokemon");
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.movies);

  const search = (selectedSearch) => {
    setSearchText(selectedSearch);
  };

  useEffect(() => {
    if (searchText) {
      dispatch(fetchMovies({ searchText }));
    }
  }, [searchText, dispatch]);

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
