import React, { Component } from "react";
import books from "../books.json";
import SearchArea from "../SearchArea/";
import BookList from "../BookList/";
import BookPagination from "../BookPagination/";

class Books extends Component {
  constructor(props) {
    super(props);
    // TODO: figure out what books will be loaded to initial state
    this.state = {
      books,
      searchField: ""
    };
  }

  //   searchBook = () => {
  //     request;
  //   };

  handleSearch = e => {
    console.log(e.target.value);
    this.setState({
      searchField: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({
      books: books
    });
  };

  render() {
    console.log("ciupaki");
    return (
      <div className="container">
        <SearchArea
          handleSearch={this.handleSearch}
          handleSubmit={this.handleSubmit}
        />

        <BookList books={this.state.books.items} />

        <BookPagination />
      </div>
    );
  }
}

export default Books;
