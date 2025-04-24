import React from 'react'
import './searchBar.css';

function SearchBar() {
    return (
      <div className="search-bar">
        <form
          className="search-form d-flex align-items-center justify-content-between"
          method="POST"
          action="#"
        >
          <input
            type="text"
            name="query"
            placeholder="Search"
            title="Enter search keyword"
            className="search-input"
          />
          <button type="submit" title="Search" className="search-button">
            <i className="bi bi-search"></i>
          </button>
        </form>
      </div>
    );
  }
  
  export default SearchBar;
  