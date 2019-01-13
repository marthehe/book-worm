import React, { Component } from "react";

import SearchArea from "../SearchArea/";
import BookList from "../BookList/";
import BookPagination from "../BookPagination/";

const RESULTS_NUMBER = 12;

class Books extends Component {
  state = {
    books: [],
    searchField: "''",
    activePage: 1
  };

  componentDidMount() {
    this.fetchBooks();
  }

  fetchBooks = (startIndex = 0) => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${
        this.state.searchField
      }&startIndex=${startIndex}&maxResults=${RESULTS_NUMBER}`,
      {
        method: "GET",
        dataType: "json"
      }
    )
      .then(r => r.json())
      .then(books => this.updateBooksState(books));
  };

  updateBooksState = books => {
    this.setState({ books });
  };

  handleSearch = e => {
    this.setState({
      searchField: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.handlePageChange(1);
  };

  handlePagination = pageNumber => {
    const startIndex = pageNumber * RESULTS_NUMBER - 1;
    this.fetchBooks(startIndex);
  };

  handlePageChange = pageNumber => {
    this.handlePagination(pageNumber);
    this.setState({
      activePage: pageNumber
    });
  };

  render() {
    return (
      <div className="container">
        <SearchArea
          handleSearch={this.handleSearch}
          handleSubmit={this.handleSubmit}
        />

        {this.state.books.items && this.state.books.items.length > 0 && (
          <BookList books={this.state.books.items} />
        )}

        <BookPagination
          activePage={this.state.activePage}
          handlePageChange={this.handlePageChange}
          handlePagination={this.handlePagination}
        />
      </div>
    );
  }
}

export default Books;
