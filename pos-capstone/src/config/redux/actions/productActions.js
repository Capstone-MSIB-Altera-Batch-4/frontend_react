import api from '../api/api';

// Create
export const createProduct = (product) => {
  return (dispatch) => {
    dispatch({ type: 'CREATE_PRODUCTS_REQUEST' });

    api.post('/product', {
      headers: {
        'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>'
      },
      product
    })
      .then(response => {
        dispatch({
          type: 'CREATE_PRODUCTS_SUCCESS',
          payload: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: 'CREATE_PRODUCTS_FAILURE',
          payload: error.message
        });
      });
  };
};

// Read
export const getProducts = () => {
  return (dispatch) => {
    dispatch({ type: 'FETCH_PRODUCTS_REQUEST' });

    api.get('/product')
      .then(response => {
        dispatch({
          type: 'FETCH_PRODUCTS_SUCCESS',
          payload: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: 'FETCH_PRODUCTS_FAILURE',
          payload: error.message
        });
      });
  };
};

// Update
export const updateProduct = (productId, updatedProduct) => {
  return (dispatch) => {
    dispatch({ type: 'UPDATE_PRODUCTS_REQUEST' });

    api.put(`/product/${productId}`, updatedProduct)
      .then(response => {
        dispatch({
          type: 'UPDATE_PRODUCTS_SUCCESS',
          payload: { productId, updatedProduct: response.data }
        });
      })
      .catch(error => {
        dispatch({
          type: 'UPDATE_PRODUCTS_FAILURE',
          payload: error.message
        });
      });
  };
};

// Delete
export const deleteItem = (productId) => {
  return (dispatch) => {
    dispatch({ type: 'DELETE_PRODUCTS_REQUEST' });

    api.delete(`/product/${productId}`)
      .then(() => {
        dispatch({
          type: 'DELETE_PRODUCTS_SUCCESS',
          payload: productId
        });
      })
      .catch(error => {
        dispatch({
          type: 'DELETE_PRODUCTS_FAILURE',
          payload: error.message
        });
      });
  };
};

//get category
export const getCategory = () => {
  return (dispatch) => {
    dispatch({ type: 'FETCH_CATEGORY_REQUEST' });

    api.get('/category')
      .then(response => {
        dispatch({
          type: 'FETCH_CATEGORY_SUCCESS',
          payload: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: 'FETCH_CATEGORY_FAILURE',
          payload: error.message
        });
      });
  };
};

//create atau input category
export const createCategory = (category) => {
  return (dispatch) => {
    dispatch({ type: 'CREATE_CATEGORY_REQUEST' });

    api.post('/category/create', category)
      .then(response => {
        dispatch({
          type: 'CREATE_CATEGORY_SUCCESS',
          payload: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: 'CREATE_CATEGORY_FAILURE',
          payload: error.message
        });
      });
  };
};