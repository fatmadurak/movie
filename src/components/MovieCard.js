import React from 'react';
import "../assets/css/MovieCard.css";
import defaultImage from "../assets/images/notfound.png";

function MovieCard({ movie }) {
  const { Poster, Title, Year, Type, imdbId } = movie;

  return (
    <>
      <div className='Card'>
        {Poster !== "N/A" ? (
          <>
            <img className='poster' src={Poster} alt="image" />
            <div className='info'>
              <p>Tür:{Type}</p>
              <p>Yıl:{Year}</p>
            </div>
            <p className='title'>{Title}</p>
          </>
        ) : (
          <img className='poster' src={defaultImage} alt="Not Found" />
        )}
      </div>
    </>
  );
}

export default MovieCard;
