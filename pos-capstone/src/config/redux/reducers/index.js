import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import cashierReducer from './cashierReduscer';
import memberReducer from './memberReducer';


const rootReducer = combineReducers({
  items: itemReducer,
  members: memberReducer,
  cashiers: cashierReducer

});

export default rootReducer;