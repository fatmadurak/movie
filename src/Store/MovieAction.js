import axios from 'axios';

const API_URL = process.env.REACT_APP_BASE_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchMovie = (imdbID) => async (dispatch) => {
  try {
    const params = {
      apikey: API_KEY,
      i: imdbID,
    };

    const response = await axios.get(`${API_URL}`, { params: params });

    if (!response.data || response.data.Response === 'False') {
      console.log('Film bulunamadı.');
      dispatch({ type: 'SET_MOVIE', payload: {} });
    } else {
      const movie = response.data || {};
      dispatch({ type: 'SET_MOVIE', payload: movie });
    }
  } catch (error) {
    console.error('Error fetching movie:', error);
 
    console.error('Error response:', error.response);
  }
};
