import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { searchMovies } from "../../../utils/utilities";
import "./style.css"

const Navbar = () => {
    const [searchValue, setSearchValue] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const navigate = useNavigate();
    const handleInput = (event) => {
      setSearchValue(event.target.value);
    };
    const handleSearch = async () => {
      const results = await searchMovies(searchValue);
      setSearchResults(results.results);
      navigate(`/search/${encodeURIComponent(searchValue)}`);
    };
    const handleHomeClick = () => {
      navigate('/');
    };


  return (
    <div className="nav">
        <p className="M">M<span className="oo">oo</span>vie</p> 
      <input className="input"
        type="text"
        placeholder="search"
        value={searchValue}
        onChange={handleInput}
      />
      <button onClick={handleSearch} className="btnsearch">Search</button>
      <a href="#" onClick={handleHomeClick}> <h3 className="Home">Home</h3></a>
    
      <h3 className="mylist">My List</h3>
      <button>Sign In</button>
    </div>
  );
};

export default Navbar;