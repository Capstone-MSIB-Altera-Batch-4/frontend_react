import api from '../api/api';

// Create
export const createProduct = (product) => {
  return (dispatch) => {
    dispatch({ type: 'CREATE_PRODUCTS_REQUEST' });

    api.post('/product',  product, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data'
      },
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
export const getProducts = (page, limit) => {
  return (dispatch) => {
    dispatch({ type: 'FETCH_PRODUCTS_REQUEST' });

    api.get(`/product?page=${page}&limit=${limit}`)
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

    api.put(`/product/${productId}`, updatedProduct, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data'
      },
    })
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

    api.delete(`/product/${productId}`, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
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

    api.post('/category', category)
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

//send selected category to form
export const selectedCategory = (category) => {
  return (dispatch) => {
    dispatch({ 
      type: 'SET_SELECTED_CATEGORY',
      payload: category
    });
  };
};

//send image value
export const selectedImage = (image) => {
  return (dispatch) => {
    dispatch({ 
      type: 'SET_SELECTED_IMAGE',
      payload: image
    });
  };
};