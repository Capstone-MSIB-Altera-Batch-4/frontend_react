import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import productReducer from './productReducer';

const rootReducer = combineReducers({
  items: itemReducer,
  products: productReducer
});

export default rootReducer;