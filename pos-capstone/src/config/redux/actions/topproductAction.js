import axioss from "../api/axios";


export const readTopProduct = () => {
    return (dispatch) => {
        dispatch({ type: 'FETCH_TOPPRODUCT_REQUEST' });

        axioss.get(`/product`)
            .then(response => {
                dispatch({
                    type: 'FETCH_TOPPRODUCT_SUCCESS',
                    payload: response.data
                });
            })
            .catch(error => {
                dispatch({
                    type: 'FETCH_TOPPRODUCT_FAILURE',
                    payload: error.message
                });
            });
    };
};