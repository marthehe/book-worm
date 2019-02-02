import React from "react";

const Header = props => (
  <header className="header">
    <i className="header__icon fas fa-book fa-2x" />
    <h1 className="header__main-heading" onClick={props.setDefaultState}>
      Book Worm
    </h1>
  </header>
);

export default Header;
