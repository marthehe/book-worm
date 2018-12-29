import React from "react";
import BookCard from "../BookCard/";

const BookList = props => {
  console.log("BookList props:", props);
  return (
    <div className="book-list row">
      {props.books.map(book => {
        console.log("BookList book:", book);
        return (
          <div className="col col-md-6 col-xl-4">
            <BookCard
              key={book.id}
              image={book.volumeInfo.imageLinks.thumbnail}
              title={book.volumeInfo.title}
              authors={book.volumeInfo.authors}
              publisher={book.volumeInfo.publisher}
              publishedDate={book.volumeInfo.publishedDate}
              description={book.volumeInfo.description}
            />
          </div>
        );
      })}
    </div>
  );
};
export default BookList;
