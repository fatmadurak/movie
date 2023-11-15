import React from 'react';

function MovieCard({ movie }) {
  const { Poster, Title } = movie;

  return (
    <>
      <img src={Poster} alt="image" />
  
    </>
  );
}

export default MovieCard;
