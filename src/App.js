import React, { Component } from "react";
import Header from "./Header/";
import Books from "./Books/";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div data-test="component-app" className="App">
        <Header />
        <Books />
      </div>
    );
  }
}

export default App;
