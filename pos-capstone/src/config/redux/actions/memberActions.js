import api from '../api/api';

// Create
export const createMember = (member, page) => {
  return (dispatch) => {
    dispatch({ type: 'CREATE_MEMBER_REQUEST' });

    api.post('/membership', member)
      .then(response => {
        dispatch({
          type: 'CREATE_MEMBER_SUCCESS',
          payload: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: 'CREATE_MEMBER_FAILURE',
          payload: error.message
        });
      });
  };
};

// Read
export const fetchMembers = (page, limit) => {

  if(page === undefined) {
    page = 1
  }

  return (dispatch) => {
    dispatch({ type: 'FETCH_MEMBERS_REQUEST' });

    api.get(`/product?page=${page}&limit=${limit}`)
      .then(response => {
        dispatch({
          type: 'FETCH_MEMBERS_SUCCESS',
          payload: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: 'FETCH_MEMBERS_FAILURE',
          payload: error.message
        });
      });
  };
};

// Update
export const updateMember = (memberId, updatedMember) => {
  return (dispatch) => {
    dispatch({ type: 'UPDATE_MEMBER_REQUEST' });

    api.put(`/membership/${memberId}`, updatedMember)
      .then(response => {
        dispatch({
          type: 'UPDATE_MEMBER_SUCCESS',
          payload: { memberId, updatedMember: response.data }
        });
      })
      .catch(error => {
        dispatch({
          type: 'UPDATE_MEMBER_FAILURE',
          payload: error.message
        });
      });
  };
};

// Delete
export const deleteMember = (memberId) => {
  return (dispatch) => {
    dispatch({ type: 'DELETE_MEMBER_REQUEST' });

    api.delete(`/membership/${memberId}`)
      .then(() => {
        dispatch({
          type: 'DELETE_MEMBER_SUCCESS',
          payload: memberId
        });
      })
      .catch(error => {
        dispatch({
          type: 'DELETE_MEMBER_FAILURE',
          payload: error.message
        });
      });
  };
};