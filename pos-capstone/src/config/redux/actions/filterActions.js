export const filterDataByName = (data, searchInput) => {
    return (dispatch) => {
        dispatch({
            type: 'SEARCH_BY_NAME',
            payload: data, searchInput
        })
    }
}

export const filterDataByCategory = (data, selected, filterFor) => {
    return (dispatch) => {
        dispatch({
            type: 'SELECT_BY_CATEGORY',
            payload: data, selected, filterFor
        })
    }
}

// Read All Data
export const getFilterData = (result, filterFor) => {
  return (dispatch) => {
    dispatch({ 
        type: 'GET_FILTER_DATA',
        payload: result, filterFor
    });

    
  };
};