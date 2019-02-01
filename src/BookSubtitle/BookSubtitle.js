import React from "react";

const joinAuthors = authors => authors.join(", ");

const BookSubtitle = props => {
  console.log(props);
  if (Array.isArray(props.authors)) {
    return (
      <p
        className="book-list__card-subtitle card-text"
        data-test="book-subtitle"
      >
        Author: {joinAuthors(props.authors)}
      </p>
    );
  }

  return null;
};

export default BookSubtitle;
