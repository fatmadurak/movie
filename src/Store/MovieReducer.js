
const initialState = {
  movies: [], 
};

const MovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_MOVIES":
      return {
        ...state,
        movies: action.payload ,
      };
    default:
      return state;
  }
};

export default MovieReducer;
