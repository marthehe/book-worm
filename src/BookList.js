import React from "react";
import BookCard from "./BookCard";

const BookList = props => {
  console.log(props);
  return (
    <div className="book__list">
      {props.books.map(book => {
        return (
          <BookCard
            key={book.id}
            image={book.volumeInfo.imageLinks.thumbnail}
            title={book.volumeInfo.title}
            authors={book.volumeInfo.authors}
            publisher={book.volumeInfo.publisher}
          />
        );
      })}
    </div>
  );
};
export default BookList;
