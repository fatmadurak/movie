// MoviesAction.js
import axios from 'axios';

const API_URL = process.env.REACT_APP_BASE_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchMovies = (elements) => async (dispatch) => {
  const { searchText,year,type } = elements;

  try {
    const params = {
      apikey: API_KEY,
      s: searchText,
      y:year,
      type:type,
    };

    const response = await axios.get(`${API_URL}`, {
      params: params
    } );

    if (!response.data || response.data.Response === 'False') {
      console.log('Film bulunamadı.');
      dispatch({ type: 'SET_MOVIES', payload: [] });
    } else {
      const movies = response.data.Search || [];
      dispatch({ type: 'SET_MOVIES', payload: movies });
    }
  } catch (error) {
    console.error('Error fetching movies:', error);
  }
};




