import React, { Component } from "react";

import Header from "../Header/";
import SearchArea from "../SearchArea/";
import LoadingSpinner from "../LoadingSpinner/";
import BookList from "../BookList/";
import BookListEmpty from "../BookListEmpty/";
import BookPagination from "../BookPagination/";

const RESULTS_NUMBER = 12;
const EMPTY_SEARCH_STRING = "''";
class Books extends Component {
  state = {
    books: [],
    searchField: EMPTY_SEARCH_STRING,
    activePage: 1,
    isLoading: false
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

  setInitialState = () => {
    this.setState({
      searchField: "''",
      isLoading: true
    });

    this.fetchBooks();
  };

  updateBooksState = books => {
    this.setState({
      books,
      isLoading: false
    });
  };

  handleSearch = e => {
    this.setState({
      searchField: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      isLoading: true
    });
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
    if (this.state.isLoading === true) {
      return <LoadingSpinner />;
    }

    return (
      <div className="container">
        <Header setInitialState={this.setInitialState} />
        <SearchArea
          handleSearch={this.handleSearch}
          handleSubmit={this.handleSubmit}
        />

        {this.state.books.items && this.state.books.items.length > 0 ? (
          <BookList books={this.state.books.items} />
        ) : (
          <BookListEmpty />
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
