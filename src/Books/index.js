import React, { Component } from "react";
import books from "../books.json";
import booksAlternative from "../books-alternative.json";
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

  handleUpdate = pageNumber => {
    if (pageNumber % 2 == 0) {
      this.setState({
        books: booksAlternative
      });
    } else {
      this.setState({
        books: books
      });
    }
  };

  render() {
    return (
      <div className="container">
        <BookPagination handleUpdate={this.handleUpdate} />

        <SearchArea
          handleSearch={this.handleSearch}
          handleSubmit={this.handleSubmit}
        />

        <BookList books={this.state.books.items} />
      </div>
    );
  }
}

export default Books;
