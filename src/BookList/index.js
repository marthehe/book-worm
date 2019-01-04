import React from "react";
import BookCard from "../BookCard/";

const BookList = props => {
  return (
    <div className="book-list row">
      <div className="card-deck">
        {props.books.map(book => {
          console.log(book.volumeInfo.imageLinks);
          return (
            <div className="col-sm col-md-6 col-xl-4 d-flex align-items-stretch mb-4">
              <BookCard
                key={book.id}
                image={
                  book.volumeInfo.imageLinks &&
                  book.volumeInfo.imageLinks.thumbnail
                }
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
    </div>
  );
};
export default BookList;
