import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import defaultImage from "../assets/images/notfound.png";
import { fetchMovie } from "../Store/MovieAction";
import { useDispatch, useSelector } from "react-redux";
import "../assets/css/MovieDetail.css";
function MovieDetail() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const { movie } = useSelector((state) => state.movie);

  useEffect(() => {
    if (id) {
      dispatch(fetchMovie(id));
    }
  }, [id, dispatch]);

  return (
    <>
      <div className="CardDetail">
        {movie && movie.Poster !== "N/A" ? (
          <>
            <div className="detailWrapper">
              <img className="detailposter" src={movie.Poster} alt="image" />
              <div>
                <p className="detailTitle">{movie.Title}</p>
                <p className="detailTitle">{movie.Year}</p>
                <p className="detailTitle">{movie.imdbID}</p>
                <p className="detailTitle">{movie.Type}</p>
                <p className="detailTitle">{movie.Director}</p>
                <p className="detailTitle">{movie.Writer}</p>
                <p className="detailTitle">{movie.Actors}</p>
                <p className="detailTitle">{movie.Language}</p>
              </div>

           
           
            </div>
          </>
        ) : (
          <img className="detailposter" src={defaultImage} alt="Not Found" />
        )}
      </div>
    </>
  );
}

export default MovieDetail;
