import React, { useState } from 'react'
import TextField from '../../element/Textfield/Textfield.jsx'
import SearchBar from '../../element/SearchBar/SearchBar.jsx';
import InputCategory from '../../element/InputCategory/InputCategory.jsx';
import './FilterForm.css'

const FilterForm = ({onShow, handleChange}) => {
    const [inputId, setInputId] = useState("")

    // const handleChange = (e) => {
    //   e.preventDefault();
    //   setInputId(e.target.value);
    // };

  return (
    <div>
      <div className="filter-form row">
        <div className="col-md-4 mt-2">
          <SearchBar onShow={onShow} handleChange={handleChange}/>
        </div>
        <div className="col-md-4 mb-3">
          <TextField
            htmlFor="id"
            label="Id"
            placeholder="Search id product"
            name="id"
            type="text"
            id="id"
            value={inputId}
            onChange={handleChange}
            onBlur={""}
            className={"w-100 form-control bg-opacity-10"}
          />
        </div>
        <div className="col-md-4">
          <InputCategory />
        </div>
      </div>
    </div>
  );
}

export default FilterForm