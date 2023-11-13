import axios from 'axios';

const API_URL = process.env.REACT_APP_BASE_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchMovies = (elements) => async (dispatch) => {
  const { search, type, year } = elements;

  try {
    const params = new URLSearchParams({
      apikey: API_KEY,
      s: search,
      y: year,
      type: type,
    });

    const response = await axios.get(`${API_URL}?${params}`);

    // Eğer API yanıtı başarılı olduysa ve film bulunamadıysa
    if (response.data.Response === 'False') {
      console.log('Film bulunamadı.');
      dispatch({ type: 'SET_MOVIES', payload: [] });
    } else {
      // Film bulunduysa
      dispatch({ type: 'SET_MOVIES', payload: response.data.Search });
    }
  } catch (error) {
    console.error('Error fetching movies:', error);
  }
};
