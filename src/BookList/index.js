import React from "react";
import BookCard from "../BookCard/";

const BookList = props => {
  return (
    <div className="book-list row">
      {props.books.map(book => {
        return (
          <div className="col-sm col-md-6 col-xl-4">
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
