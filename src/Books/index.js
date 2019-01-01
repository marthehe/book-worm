import React, { Component } from "react";
import booksAlternative from "../books-alternative.json";
import SearchArea from "../SearchArea/";
import BookList from "../BookList/";
import BookPagination from "../BookPagination/";

class Books extends Component {
  state = {
    books: [],
    searchField: "''"
  };

  componentDidMount() {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchField}`,
      {
        method: "GET",
        dataType: "json"
      }
    )
      .then(r => r.json())
      .then(books => this.setState({ books }));
  }

  handleSearch = e => {
    this.setState({
      searchField: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchField}`,
      {
        method: "GET",
        dataType: "json"
      }
    )
      .then(r => r.json())
      .then(books => this.setState({ books }));
  };

  handlePagination = pageNumber => {
    const RESULTS_NUMBER = 10;
    const startIndex = pageNumber * RESULTS_NUMBER - 1;

    console.log(startIndex);
    fetch(
      `https://www.googleapis.com/books/v1/volumes?startIndex=${startIndex}&q=
        ${this.state.searchField}`,
      {
        method: "GET",
        dataType: "json"
      }
    )
      .then(r => r.json())
      .then(books => this.setState({ books }));
  };

  render() {
    return (
      <div className="container">
        <BookPagination handlePagination={this.handlePagination} />

        <SearchArea
          handleSearch={this.handleSearch}
          handleSubmit={this.handleSubmit}
        />

        {this.state.books.items && this.state.books.items.length > 0 && (
          <BookList books={this.state.books.items} />
        )}
      </div>
    );
  }
}

export default Books;
