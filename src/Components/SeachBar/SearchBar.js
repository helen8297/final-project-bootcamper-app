import React, { useState } from "react";
import searchIcon from "../../images/searchIcon.png";

function SearchBar() {
  const [searchOption, setSearchOption] = useState("");

  function optionChange(e) {
    setSearchOption(e.target.value);
  }
  return (
    <div>
      <div>
        <select className="searchOptions" onChange={optionChange}>
          <option>Bootcamper</option>
          <option>Company</option>
          <option>Region</option>
          <option>Role</option>
          <option>Events</option>
        </select>
        <input placeholder="search" className="searchBar" />
        <img src={searchIcon} className="icon" alt="search icon" />
      </div>
      <p>{searchOption}</p>
    </div>
  );
}

export default SearchBar;
