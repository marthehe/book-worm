import React from "react";

const SearchArea = props => {
  return (
    <div className="search-area">
      <form onSubmit={props.handleSubmit}>
        <input onChange={props.handleSearch} type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchArea;
