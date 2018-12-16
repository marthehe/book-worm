import React from "react";
import PropTypes from "prop-types";

const BookCard = ({ book }) => <div />;

export default BookCard;

BookCard.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired
  }).isRequired
};
