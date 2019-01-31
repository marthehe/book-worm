import React from "react";

import Books from "./Books/";
import "./App.scss";

const App = () => (
  <div data-test="component-app" className="App">
    <Books />
  </div>
);

export default App;
