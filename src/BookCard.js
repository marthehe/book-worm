import React from "react";
import PropTypes from "prop-types";

const BookCard = props => {
  return (
    <div className="book__card-container">
      <img src={props.image} alt="" />
      <div className="book__card-info">
        <h2>{props.title}</h2>
        <h3>Author: {props.authors}</h3>
        <h3>Publisher: {props.publisher}</h3>
      </div>
    </div>
  );
};

export default BookCard;

BookCard.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired
  }).isRequired
};
