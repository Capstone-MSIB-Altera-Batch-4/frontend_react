const initialState = {
    cashiers: [],
    loading: false,
    error: null
  };
  
  const cashierReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'CREATE_CASHIER_REQUEST':
      case 'FETCH_CASHIERS_REQUEST':
      case 'UPDATE_CASHIER_REQUEST':
      case 'DELETE_CASHIER_REQUEST':
        return {
          ...state,
          loading: true,
          error: null
        };
      case 'CREATE_CASHIER_SUCCESS':
        return {
          ...state,
          cashiers: [...state.cashiers, action.payload],
          loading: false,
          error: null
        };
      case 'FETCH_CASHIERS_SUCCESS':
        return {
          ...state,
          cashiers: action.payload,
          loading: false,
          error: null
        };
      case 'UPDATE_CASHIER_SUCCESS':
        const updatedcashiers = state.cashiers.map(cashier => {
          if (cashier.id === action.payload.cashierId) {
            return action.payload.updatedcashier;
          }
          return cashier;
        });
        return {
          ...state,
          cashiers: updatedcashiers,
          loading: false,
          error: null
        };
      case 'DELETE_CASHIER_SUCCESS':
        const filteredcashiers = state.cashiers.filter(cashier => cashier.id !== action.payload);
        return {
          ...state,
          cashiers: filteredcashiers,
          loading: false,
          error: null
        };
      default:
        return state;
    }
  };
   
  export default cashierReducer;

 
 