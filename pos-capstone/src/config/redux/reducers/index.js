import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import cashierReducer from './cashierReduscer';
import memberReducer from './memberReducer';
import ordersReducer from './ordersReducer';


const rootReducer = combineReducers({
  items: itemReducer,
  members: memberReducer,
  cashiers: cashierReducer,
  orders: ordersReducer
});

export default rootReducer;