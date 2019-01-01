import React from "react";

const BookPage = props => {
  return (
    <div className="book-page container">
      <button
        className="book-list__card-close-button btn btn-primary"
        data-dismiss="modal"
        onClick={props.handleCloseModal}
      >
        Close
      </button>
      <div className="modal-header">
        <h2 className="book-page__title modal-title">{props.title}</h2>
      </div>
      <div className="modal-body">
        <div className="row">
          <div className="col-sm-12 col-xl-6">
            <img className="book-page__image" src={props.image} alt="" />
          </div>
          <div className="col-sm-12 col-xl-6">
            <div className="book-page__info-container">
              <div className="book-page__info">
                <p className="book-page__subtitle">Author: {props.authors}</p>
                <p className="book-page__subtitle">
                  Publisher: {props.publisher}
                </p>
                <p className="book-page__subtitle">
                  Published Date: {props.publishedDate}
                </p>
              </div>
              <p className="book-page__description">{props.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookPage;
