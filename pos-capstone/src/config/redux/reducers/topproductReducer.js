const initialState = {
    items: [],
    loading: false,
    error: null
};

const topProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_TOPPRODUCT_REQUEST':
            return {
                ...state,
                loading: true,
                error: null
            };
        case 'FETCH_TOPPRODUCT_SUCCESS':
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

export default topProductReducer;