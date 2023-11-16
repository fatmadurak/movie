
const initialState = {
  movies: [], 
  movie:{},
};

const MovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_MOVIES":
      return {
        ...state,
        movies: action.payload ,
      };
      case "SET_MOVIE":
        return {
          ...state,
          movie: action.payload ,
        };
    default:
      return state;
  }
};

export default MovieReducer;
