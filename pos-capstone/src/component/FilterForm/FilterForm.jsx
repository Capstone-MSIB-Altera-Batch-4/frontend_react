import React, { useState, useEffect } from 'react'
import TextField from '../../element/Textfield/Textfield.jsx'
import SearchBar from '../../element/SearchBar/SearchBar.jsx';
import Dropdown from '../../element/Dropdown/Dropdown.jsx';
import './FilterForm.css'

const FilterForm = ({onShow, data, filterFor, options, dropdownLabel}) => {
    const [inputId, setInputId] = useState("")
    const [searchInput, setSearchInput] = useState("");
    const [selected, setSelected] = useState('')
    const initData = data;
    const [filterData, setFilterData] = useState(data);
    
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

    const filterbyId = (arrData) => {
      return arrData.filter((data) => 
        data.id.toLowerCase().includes(`${inputId}`)
      )
    }

    const filterbyName = (arrData) => {
      return arrData.filter((data) => 
        data.name.toLowerCase().includes(`${searchInput}`)
      )
    }

    const filterDropdown = (arrData) => {
      if (filterFor === "product" && selected) {
        return arrData.filter((data) => {
          return data.category === selected
        })
      }else if (filterFor === "cashier" || "employee" && selected) {
        return arrData.filter((data) => {
          data.position === selected
        })
      } else {
        return arrData.filter((data) => {
          data.level === selected
        })
      }
    }

    useEffect(() => {
      let result = initData
  
      if(inputId.length!=0){
      result = filterbyId(result)}
  
      if(searchInput.length!=0){
      result = filterbyName(result)}

      if(selected){
        result = filterDropdown(result)}
      
      setFilterData(result);
      // console.log(result)

    },[inputId, searchInput, selected])

    localStorage.setItem(`${filterFor}`, JSON.stringify(filterData));

  return (
    <div className=''>
      <div className="filter-form row">
        <div className="col-md-4 mt-2">
          <SearchBar 
            onShow={onShow} 
            value={searchInput}
            handleChange={(e) => setSearchInput(e.target.value)} 
            onClearInput={() => setSearchInput("")}
            />
        </div>
        <div className="col-md-4 mb-3">
          {/* <TextField
            htmlFor="id"
            label="Id"
            placeholder={`Search id ${filterFor}`}
            name="id"
            type="text"
            id="id"
            value={inputId}
            onChange={(e) => setInputId(e.target.value)}
            className={"w-100 form-control bg-opacity-10"}
            onClearInput={() => setInputId("")}
          /> */}
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