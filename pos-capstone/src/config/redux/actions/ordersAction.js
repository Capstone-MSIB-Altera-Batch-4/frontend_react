import api from '../api/api';
import axios from 'axios';


export const readOrders = (Limit, Pagination) => {
    return (dispatch) => {
        dispatch({ type: 'FETCH_ORDERS_REQUEST' });

        api.get(`/orders?limit=${Limit}&total_pages=${Pagination}`)
            .then(response => {
                dispatch({
                    type: 'FETCH_ORDERS_SUCCESS',
                    payload: response.data
                });
            })
            .catch(error => {
                dispatch({
                    type: 'FETCH_ORDERS_FAILURE',
                    payload: error.message
                });
            });
    };
};
export const readOrdersbyid = (id) => {
    return (dispatch) => {
        dispatch({ type: 'FETCH_ORDERSBYID_REQUEST' });

        api.get(`/orders/${id}`)
            .then(response => {
                dispatch({
                    type: 'FETCH_ORDERSBYID_SUCCESS',
                    payload: response.data
                });
            })
            .catch(error => {
                dispatch({
                    type: 'FETCH_ORDERSBYID_FAILURE',
                    payload: error.message
                });
            });
    };
};