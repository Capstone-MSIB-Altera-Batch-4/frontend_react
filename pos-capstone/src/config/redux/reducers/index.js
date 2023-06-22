import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import cashierReducer from './cashierReduscer';
import memberReducer from './memberReducer';
import ordersReducer from './ordersReducer';
import topProductReducer from './topproductReducer';


const rootReducer = combineReducers({
    items: itemReducer,
    members: memberReducer,
    cashiers: cashierReducer,
    orders: ordersReducer,
    topProduct: topProductReducer
});

export default rootReducer;