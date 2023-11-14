import axios from 'axios';

const API_URL = process.env.REACT_APP_BASE_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchMovies = (elements) => async (dispatch) => {
  const { search, type, year } = elements;

  try {
    const params = {
      apikey: API_KEY,
      s: search,
    };

    // Tür ve Yıl parametrelerini kontrol et ve ekle
    if (type && type !== "Tür") {
      params.type = type;
    }

    if (year && year !== "Yıllar") {
      params.y = year;
    }

    const response = await axios.get(`${API_URL}/`, {
      params: params,
    });

  

    // Eğer API yanıtı başarılı olduysa ve film bulunamadıysa
    if (response.data.Response === 'False') {
      console.log('Film bulunamadı.');
      dispatch({ type: 'SET_MOVIES', payload: [] });
    } else {
      // Doğru anahtarı kullanarak film verilerini al
      const movies = response.data.Search || [];
      dispatch({ type: 'SET_MOVIES', payload: movies });
    }
  } catch (error) {
    console.error('Error fetching movies:', error);
  }
};
