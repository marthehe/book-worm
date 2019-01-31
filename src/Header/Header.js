import React from "react";

const Header = props => (
  <header className="header">
    <div className="container">
      <i className="header__icon fas fa-book fa-2x" />
      <h1 className="header__home-button" onClick={props.setInitialState}>
        Book Worm
      </h1>
    </div>
  </header>
);

export default Header;
