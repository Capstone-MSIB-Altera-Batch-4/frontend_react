import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import productReducer from './productReducer';
import filterReducer from './filterReducer';

const rootReducer = combineReducers({
  items: itemReducer,
  products: productReducer,
  filterData: filterReducer
});

export default rootReducer;