import React from "react";

const BookModal = props => {
  return (
    <div className="book-modal container">
      <button
        data-test="close-button"
        className="book-modal__close-button btn btn-primary"
        data-dismiss="modal"
        onClick={props.handleCloseModal}
      >
        Close
      </button>

      <h2 className="book-modal__title modal-title border-bottom">
        {props.title}
      </h2>

      <div className="row">
        <div className="col-sm-12 col-xl-6">
          <img className="book-modal__image" src={props.image} alt="" />
        </div>
        <div className="col-sm-12 col-xl-6">
          <div className="book-modal__info-container">
            <div className="book-modal__info">
              <p className="book-modal__subtitle small">
                {Array.isArray(props.authors) &&
                  `Author: ${props.authors.join(", ")}`}
                <br />
                Publisher: {props.publisher}
                <br />
                Published Date: {props.publishedDate}
              </p>
            </div>
            <p className="book-modal__description">{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookModal;
