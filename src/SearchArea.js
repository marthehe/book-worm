import React from "react";

const SearchArea = props => {
  return (
    <div className="search-area">
      <form className="search-area__form" onSubmit={props.handleSubmit}>
        <input
          className="search-area__form-input"
          onChange={props.handleSearch}
          type="text"
        />
        <button className="search-area__form-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchArea;
