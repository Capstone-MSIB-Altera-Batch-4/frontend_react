const initialState = {
    products: [],
    cashier: [],
    member: [],
    filterData: []
  };

//   console.log("Data semua", initialState.filterData)
  
  const filterReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SEARCH_BY_NAME':
        console.log("Data", action)
        const filteredItems = action.payload.filter((data) => 
        data.name.toLowerCase().includes(`${action.searchInput}`.toLowerCase()))
        console.log("filtered by name:", filteredItems)
        return {
          ...state,
          filterData: filteredItems,
        };

      case 'SELECT_BY_CATEGORY':
        const selectedItems = action.payload.map((items) => {
          console.log(action)
          const selected = action.selected
          const variant = action.filterFor
          console.log("data-category", items)
          if (selected) {
            switch (variant) {
              case "product":
                return items.filter((data) => {
                  return data.category === selected;
                });
              case "cashier":
                return items.filter((data) => {
                  return data.role === selected;
                });
              case "member":
                return items.filter((data) => {
                  return data.level === selected;
                });
            }
          }
        });
        console.log("filtered by category:", selectedItems)
        return {
          ...state,
          filterData: selectedItems
        };

      case 'GET_FILTER_DATA':

        const filterCategory = () => {
            const role = action.payload.filterFor
            const filterResult = action.payload.result
            switch (role) {
                case "product":
                  return {
                    ...state,
                    products: filterResult,
                  };
                case "cashier":
                  return {
                    ...state,
                    cashier: filterResult,
                  };
                case "member":
                  return {
                    ...state,
                   member: filterResult,
                  };
              }
        }

      default:
        return state;
    }
  };
   
  export default filterReducer;

 
 