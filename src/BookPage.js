import React from "react";

const BookPage = props => {
  console.log(props);
  return (
    <div className="book-page">
      <img className="book-page__image" src={props.image} alt="" />
      <div className="book-page__info-container">
        <div className="book-page__info">
          <h2 className="book-page__title">{props.title}</h2>
          <h3 className="book-page__subtitle">Author: {props.authors}</h3>
          <h3 className="book-page__subtitle">Publisher: {props.publisher}</h3>
          <h3 className="book-page__subtitle">
            Published Date: {props.publishedDate}
          </h3>
        </div>
        <p className="book-page__description">{props.description}</p>
      </div>
    </div>
  );
};

export default BookPage;

// image
// title
// authors
// publisher
// publishedDate
// description
