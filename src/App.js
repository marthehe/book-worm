import React, { Component } from "react";
import Header from "./Header/";
import Books from "./Books/";
import "./App.scss";

const App = () => (
  <div data-test="component-app" className="App">
    <Header />
    <Books />
  </div>
);

export default App;
