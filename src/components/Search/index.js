import axios from "axios";
import React from "react";
import "./style.css";

const Search = ({ setHostels, searchInput, setSearchInput }) => {
  //props to called from the prent main
  const getHostelByAddress = async () => {
    const apiUrl = `https://server-cw1.herokuapp.com/hostels/search/${searchInput}`;
    const { data } = await axios.get(apiUrl);
    setHostels(data);
  };

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearchClick = (event) => {
    event.preventDefault();
    if (searchInput) {
      getHostelByAddress();
    }
  };

  const handleClearClick = (event) => {
    event.preventDefault();
    setSearchInput("");
    setHostels([]);
  };

  return (
    <form>
      <input
        name="search"
        value={searchInput}
        placeholder="Search by address"
        onChange={handleInputChange}
      />
      <button onClick={handleClearClick}>Clear</button>
      <button onClick={handleSearchClick}>Search</button>
    </form>
  );
};

export default Search;
