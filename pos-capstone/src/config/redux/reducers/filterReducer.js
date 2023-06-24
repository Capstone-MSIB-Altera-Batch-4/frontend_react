const initialState = {
    products: [],
    cashier: [],
    member: [],
    filterData: [],
    selectedItems: []
  };

  console.log("Data semua", initialState.selectedItems)
  
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
        // const selectedItems = action.payload.map((items) => {
        //   console.log(items)
          const data = action.payload
          const selected = action.selected
          const variant = action.filterFor
          let selectedItems = []
          console.log("select", selected)
          console.log("variant", variant)
        //   console.log("data-category", items)
          if (selected) {
            switch (variant) {
              case "product":
                console.log("ini product", data)
                console.log(selectedItems)
                selectedItems = data.filter((data) => {
                   return data.category === selected;
                });
                // return selectedItems;
              case "cashier":
                console.log("ini product")
                selectedItems = data.filter((data) => {
                  return data.role === selected;
                });
                // return selectedItems;
              case "member":
                selectedItems = data.filter((data) => {
                  return data.level === selected;
                });
            }
            // return selectedItems;
          }
        // console.log("Dataselet", state.selectedItems)
        // });
        console.log("filtered by category:", selectedItems)
        console.log("data akhir", state.filterData)
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
   
  console.log("Dataselet", initialState.selectedItems)
  export default filterReducer;

 
 