import React from "react";

const SearchArea = props => (
  <div className="search-area text-center">
    <form
      className="search-area__form form-inline mt-2 mt-md-0"
      onSubmit={props.handleSubmit}
    >
      <input
        data-test="search-area-input"
        className="search-area__form-input form-control mr-sm-2"
        onChange={props.handleSearch}
        type="text"
        placeholder="Search"
      />
      <button
        data-test="search-area-button"
        className="search-area__form-button btn btn-primary my-2 my-sm-0"
        type="submit"
      >
        Search
      </button>
    </form>
  </div>
);

export default SearchArea;
