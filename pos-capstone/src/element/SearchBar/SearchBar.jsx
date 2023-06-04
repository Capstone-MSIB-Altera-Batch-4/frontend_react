import React, { useState } from 'react'
import { Search } from 'react-bootstrap-icons';
import './SearchBar.css'

const SearchBar = (props) => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const productData = props.value

  if (searchInput.length > 0) {
    productData.filter((data) => {
        return data.name.match(searchInput);
    })
  }

  return (
    <div id="searchbar relative">
      <div
        class={`search-input d-flex gap-2 align-items-center my-4 w-100`}
      >
        <i className={`search-icon mb-2 ${props.onShow === false ? "icon-overriden" : ""}`}>
            <Search/>
        </i>
        <input
          className={`input-search-style bg-opacity-10 form-control ${props.className} ${props.onShow === false ? "px-3" : "px-5"}`}
          type="text"
          placeholder={"Search"}
          value={searchInput}
          onChange={handleChange}
          onBlur={props.onBlur}
        />
        <button onClick={props.onClearInput} type="button" className={`clear px-4 ${props.onShow === false ? "icon-overriden" : ""}`}>
          <span className="times-sign">&times;</span>
        </button>
      </div>
    </div>
  );
}

export default SearchBar