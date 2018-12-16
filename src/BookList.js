import React from "react";
import BookCard from "./BookCard";

const BookList = props => {
  console.log(props);
  return (
    <div className="book__list">
      {props.books.map(book => (
        <div className="book__card" key={book.id}>
          {console.log(book)}
          <h1>{book.volumeInfo.title}</h1>
          <h3>{book.volumeInfo.authors}</h3>
          <h3>{book.volumeInfo.publisher}</h3>
        </div>
      ))}
    </div>
  );
};
export default BookList;
