import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import defaultImage from '../assets/images/notfound.png';
import { fetchMovie } from '../Store/MovieAction';
import { useDispatch, useSelector } from 'react-redux';

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
      <div className='CardDetail'>
        {movie && movie.Poster !== 'N/A' ? (
          <>
            <img className='detailposter' src={movie.Poster} alt='image' />
            <p className='detailTitle'>{movie.Title}</p>
          </>
        ) : (
          <img className='detailposter' src={defaultImage} alt='Not Found' />
        )}
      </div>
    </>
  );
}

export default MovieDetail;
