import React from 'react';

function MovieCard({ movie }) {
  const { Poster, Title,Year,Type } = movie;

  return (
    <>
    <div>
    <img src={Poster} alt="image" />
    <p>type:{Type}</p>
    <p>year:{Year}</p>
    <p>title:{Title}</p>
    </div>
     
  
    </>
  );
}

export default MovieCard;
