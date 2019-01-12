import React, { Component } from "react";
import PropTypes from "prop-types";
import BookPage from "../BookPage/";

import ReactModal from "react-modal";

class BookCard extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }
  // I want to open modal with info from each book that I click on
  render() {
    return (
      <div className="book-list__card card">
        <img
          className="book-list__card-image card-img-top"
          src={this.props.image}
          alt=""
        />
        <div className="book-list__card-info card-body d-flex flex-column">
          <h2 className="book-list__card-title card-title">
            {this.props.title}
          </h2>
          {Array.isArray(this.props.authors) && (
            <p
              className="book-list__card-subtitle card-text"
              data-test="book-subtitle"
            >
              Author:
              {this.props.authors.join(", ")}
            </p>
          )}{" "}
          {/* <p className="book-list__card-subtitle card-text">
            Publisher: {this.props.publisher}
          </p> */}
          <button
            data-test="card-button"
            className="book-list__card-button btn btn-primary mt-auto"
            onClick={this.handleOpenModal}
          >
            More Info
          </button>
          <ReactModal
            isOpen={this.state.showModal}
            contentLabel={this.props.title}
            overlayClassName="book-overlay"
          >
            <BookPage
              image={this.props.image}
              title={this.props.title}
              authors={this.props.authors}
              publisher={this.props.publisher}
              publishedDate={this.props.publishedDate}
              description={this.props.description}
              handleCloseModal={this.handleCloseModal}
            />
          </ReactModal>
        </div>
      </div>
    );
  }
}

export default BookCard;

BookCard.propTypes = {
  authors: PropTypes.arrayOf(PropTypes.string),
  image: PropTypes.string,
  title: PropTypes.string,
  publisher: PropTypes.string
};
