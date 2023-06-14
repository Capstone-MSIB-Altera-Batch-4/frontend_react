import api from '../api/api';

// Create
export const createCashier = (cashier, page) => {
  return (dispatch) => {
    dispatch({ type: 'CREATE_CASHIER_REQUEST' });

    api.post('/cashier', cashier)
      .then(response => {
        dispatch({
          type: 'CREATE_CASHIER_SUCCESS',
          payload: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: 'CREATE_CASHIER_FAILURE',
          payload: error.message
        });
      });
  };
};

// Read
export const fetchCashiers = (page) => {
  return (dispatch) => {
    dispatch({ type: 'FETCH_CASHIERS_REQUEST' });

    api.get(`/cashier?page=${page}`, {
      headers: {
        'Authorization': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZXhwIjoxNjg2NzMwOTE5fQ.H7x-j5nVR4UF8enecUAntsa_--3D1G9wcO0GV7l9IhQ"
      }
    })
      .then(response => {
        dispatch({
          type: 'FETCH_CASHIERS_SUCCESS',
          payload: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: 'FETCH_CASHIERS_FAILURE',
          payload: error.message
        });
      });
  };
};

// Update
export const updateCashier = (cashierId, updatedCashier) => {
  return (dispatch) => {
    dispatch({ type: 'UPDATE_CASHIER_REQUEST' });

    api.put(`/cashier/${cashierId}`, updatedCashier)
      .then(response => {
        dispatch({
          type: 'UPDATE_CASHIER_SUCCESS',
          payload: { cashierId, updatedCashier: response.data }
        });
      })
      .catch(error => {
        dispatch({
          type: 'UPDATE_CASHIER_FAILURE',
          payload: error.message
        });
      });
  };
};

// Delete
export const deleteCashier = (cashierId) => {
  return (dispatch) => {
    dispatch({ type: 'DELETE_CASHIER_REQUEST' });

    api.delete(`/cashier/${cashierId}`, {
      headers: {
        'Authorization': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZXhwIjoxNjg2NzMwOTE5fQ.H7x-j5nVR4UF8enecUAntsa_--3D1G9wcO0GV7l9IhQ"
      }
    })
      .then(() => {
        dispatch({
          type: 'DELETE_CASHIER_SUCCESS',
          payload: cashierId
        });
      })
      .catch(error => {
        dispatch({
          type: 'DELETE_CASHIER_FAILURE',
          payload: error.message
        });
      });
  };
};