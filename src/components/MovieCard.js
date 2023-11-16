import React from 'react';
import "../assets/css/MovieCard.css"

function MovieCard({ movie }) {
  const { Poster, Title,Year,Type,imdbId } = movie;

  return (
    <>
    <div className='Card'>
    <img className='poster' src={Poster} alt="image" />
    <div className='info'>
    <p>Tür:{Type}</p>
    <p>Yıl:{Year}</p>
    </div>
  
    <p className='title'>{Title}</p>
    </div>
     
  
    </>
  );
}

export default MovieCard;
