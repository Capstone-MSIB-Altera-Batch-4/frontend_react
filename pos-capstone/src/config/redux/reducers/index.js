import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import memberReducer from './memberReducer';


const rootReducer = combineReducers({
  items: itemReducer,
  members: memberReducer
});

export default rootReducer;