const initialState = {
    items: [],
    loading: false,
    error: null
};

const ordersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_ORDERS_REQUEST':
            return {
                ...state,
                loading: true,
                error: null
            };
        case 'FETCH_ORDERS_SUCCESS':
            return {
                ...state,
                items: action.payload,
                loading: false,
                error: null
            };
        default:
            return state;
    }
};

export default ordersReducer;