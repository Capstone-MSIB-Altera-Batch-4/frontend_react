import React, { useState, useEffect } from 'react'
import TextField from '../../element/Textfield/Textfield.jsx'
import SearchBar from '../../element/SearchBar/SearchBar.jsx';
import Dropdown from '../../element/Dropdown/Dropdown.jsx';
import './FilterForm.css'
import { useDispatch, useSelector } from "react-redux";
import { filterDataByName, filterDataByCategory, getFilterData } from '../../config/redux/actions/filterActions.js';

const FilterForm = ({onShow, data, filterFor, options, dropdownLabel}) => {
    const [searchInput, setSearchInput] = useState("");
    const [selected, setSelected] = useState('')
    const initData = data;
    const [filterData, setFilterData] = useState(data);

    const dispatch = useDispatch();
    const filteredData = useSelector(state => state.filterData.filterData);
    
    const getDropdownPlaceholder = () => {
      switch (filterFor) {
        case "product":
          return "Select a product";
        case "cashier" || "employee":
          return "Select position";
        case "member":
          return "Select member";
      }
    }

    // const filterbyName = (arrData) => {
    //   return arrData.filter((data) => 
    //     data.name.toLowerCase().includes(`${searchInput}`.toLowerCase())
    //   )
    // }

    // const filterDropdown = (arrData) => {
    //   if (selected) {
    //     switch(filterFor) {
    //       case "product":
    //         return arrData.filter((data) => {
    //           return data.category === selected;
    //         });
    //       case "cashier":
    //         return arrData.filter((data) => {
    //           return data.position === selected;
    //         });
    //       case "member":
    //         return arrData.filter((data) => {
    //           return data.level === selected
    //         });
    //     }
    //   }
    // }

    useEffect(() => {
      let result = initData
  
      if(searchInput.length!=0){
        dispatch(filterDataByName(result, searchInput))
        result = filteredData;
      }

      if(selected){
        dispatch(filterDataByCategory(result, selected, filterFor))
        result = filteredData;
      }
      
      dispatch(getFilterData(result, filterFor))
      // setFilterData(result);
      // console.log(result)

    },[searchInput, selected])

    // localStorage.setItem(`${filterFor}`, JSON.stringify(filterData));

  return (
    <div className=''>
      <div className="filter-form row justify-content-between">
        <div className="col-md-4 mt-2">
          <SearchBar 
            onShow={onShow} 
            value={searchInput}
            handleChange={(e) => setSearchInput(e.target.value)} 
            onClearInput={() => setSearchInput("")}
            placeholder="Search by ID or Name"
            />
        </div>
        <div className="col-md-4">
          <Dropdown
            label={dropdownLabel}
            id="dropdown"
            name="dropdown"
            className="dropdown"
            placeholder={selected ? selected : `${getDropdownPlaceholder()}`}
            handleChange={(e) => setSelected(e.target.options)} 
            options={options.map((item, idx) => (
              <li key={idx}>
                <a
                  className={
                    selected && options[idx] == selected
                      ? "dropdown-item active"
                      : "dropdown-item"
                  }
                  onClick={() => setSelected(options[idx])}
                >
                  {item}
                </a>
              </li>
            ))}
          />
        </div>
      </div>
    </div>
  );
}

export default FilterForm