import React, { Component } from "react";
import Header from "./Header";
import Books from "./Books";
import BookPage from "./BookPage";
import books from "./books.json";
import ReactModal from "react-modal";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Books />
      </div>
    );
  }
}

export default App;
