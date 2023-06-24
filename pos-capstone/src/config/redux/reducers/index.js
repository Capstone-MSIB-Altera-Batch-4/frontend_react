import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import cashierReducer from './cashierReduscer';
import memberReducer from './memberReducer';
import ordersReducer from './ordersReducer';
import productReducer from './productReducer';
import filterReducer from './filterReducer';
import topProductReducer from './topproductReducer';


const rootReducer = combineReducers({
    items: itemReducer,
    members: memberReducer,
    cashiers: cashierReducer,
    orders: ordersReducer,
    products: productReducer,
    topProduct: topProductReducer,
    filterData: filterReducer
});

export default rootReducer;