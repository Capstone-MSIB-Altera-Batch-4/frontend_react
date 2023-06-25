const initialState = {
    products: [],
    category: [],
    selectedCategory: {},
    image: {},
    loading: false,
    error: null
};

console.log("Category", initialState.category)

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_PRODUCTS_REQUEST":
        case "FETCH_PRODUCTS_REQUEST":
        case "FETCH_PRODUCTSBYID_REQUEST":
        case "UPDATE_PRODUCTS_REQUEST":
        case "DELETE_PRODUCTS_REQUEST":
        case "DELETE_CATEGORY_REQUEST":
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
        case "CREATE_PRODUCTS_FAILURE":
            console.log("ini PESANNYA", action)
            return {
                ...state,
                error: "ERROR",
            }
        case "FETCH_PRODUCTS_SUCCESS":
            return {
                ...state,
                products: action.payload,
                loading: false,
                error: null,
            };
        case "FETCH_PRODUCTSBYID_SUCCESS":
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
        case "DELETE_CATEGORY_SUCCESS":
            const filteredCategory = state.category.filter(
                (item) => item.id !== action.payload
            );
            return {
                ...state,
                products: filteredCategory,
                loading: false,
                error: null,
            };
        case "CREATE_CATEGORY_SUCCESS":
            return {
                ...state,
                category: [...state.category[0].name, action.payload],
                loading: false,
                error: null,
            };
        case "FETCH_CATEGORY_SUCCESS":
            return {
                ...state,
                category: action.payload,
                loading: false,
                error: null,
            };
        case "SET_SELECTED_CATEGORY":
            console.log("INI CATEGORY", action)
            return {
                ...state,
                selectedCategory: action.payload,
                loading: false,
                error: null,
            }
        case "SET_SELECTED_IMAGE":
            console.log("INI Gambar", action)
            return {
                ...state,
                image: action.payload,
                loading: false,
                error: null,
            }
        default:
            return state;
    }
};

export default productReducer;