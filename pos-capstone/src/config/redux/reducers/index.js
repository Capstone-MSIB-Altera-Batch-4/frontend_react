import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import cashierReducer from './cashierReduscer';

const rootReducer = combineReducers({
  items: itemReducer,
  cashiers: cashierReducer
});

export default rootReducer;