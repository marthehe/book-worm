import React, { Component } from "react";
import SearchArea from "./SearchArea";
import books from "./books.json";
import BookList from "./BookList";

class Books extends Component {
  constructor(props) {
    super(props);
    console.log(books);
    this.state = {
      books: { items: [] },
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
    console.log(e);
    e.preventDefault();
    console.log(this);
    this.setState({
      books: books
    });
  };

  render() {
    return (
      <div>
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
