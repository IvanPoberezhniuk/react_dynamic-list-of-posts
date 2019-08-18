import { combineReducers } from 'redux';
import postsReducer from './postReducer';

const rootReducer = combineReducers({
  postsReducer
});

export default rootReducer;
