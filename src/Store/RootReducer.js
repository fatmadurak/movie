
import { combineReducers } from 'redux';
import MovieReducer from './MovieReducer';

const rootReducer = combineReducers({
  movies: MovieReducer,

});

export default rootReducer;
