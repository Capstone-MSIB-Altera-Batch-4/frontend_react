const initialState = {
    products: [],
    category: [],
    loading: false,
    error: null
  };
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case "CREATE_PRODUCTS_REQUEST":
      case "FETCH_PRODUCTS_REQUEST":
      case "UPDATE_PRODUCTS_REQUEST":
      case "DELETE_PRODUCTS_REQUEST":
      case "CREATE_CATEGORY_REQUEST":
      case "FETCH_CATEGORY_REQUEST":
        return {
          ...state,
          loading: true,
          error: null,
        };
      case "CREATE_PRODUCTS_SUCCESS":
        return {
          ...state,
          products: [...state.products, action.payload],
          loading: false,
          error: null,
        };
      case "FETCH_PRODUCTS_SUCCESS":
        return {
          ...state,
          products: action.payload,
          loading: false,
          error: null,
        };
      case "UPDATE_PRODUCTS_SUCCESS":
        const updatedItems = state.products.map((item) => {
          if (item.id === action.payload.itemId) {
            return action.payload.updatedItem;
          }
          return item;
        });
        return {
          ...state,
          products: updatedItems,
          loading: false,
          error: null,
        };
      case "DELETE_PRODUCTS_SUCCESS":
        const filteredItems = state.products.filter(
          (item) => item.id !== action.payload
        );
        return {
          ...state,
          products: filteredItems,
          loading: false,
          error: null,
        };
      case "CREATE_CATEGORY_SUCCESS":
        return {
          ...state,
          category: [...state.category, action.payload],
          loading: false,
          error: null,
        };
      case "FETCH_PRODUCTS_SUCCESS":
        return {
          ...state,
          category: action.payload,
          loading: false,
          error: null,
        };
      default:
        return state;
    }
  };
   
  export default productReducer;

 
 