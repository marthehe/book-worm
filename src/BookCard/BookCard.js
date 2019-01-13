import React, { Component } from "react";
import PropTypes from "prop-types";
import BookModal from "../BookModal/";

import ReactModal from "react-modal";

class BookCard extends Component {
  state = {
    showModal: false
  };

  handleOpenModal = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <div className="book-list__card card">
        <img
          className="book-list__card-image card-img-top"
          src={this.props.image}
          alt=""
        />
        <div className="book-list__card-info card-body">
          <h2 className="book-list__card-title card-title">
            {this.props.title}
          </h2>
          {Array.isArray(this.props.authors) && (
            <p
              className="book-list__card-subtitle card-text"
              data-test="book-subtitle"
            >
              Author: {this.props.authors.join(", ")}
            </p>
          )}
          <button
            data-test="card-button"
            className="book-list__card-button btn btn-primary"
            onClick={this.handleOpenModal}
          >
            More Info
          </button>
          <ReactModal
            isOpen={this.state.showModal}
            contentLabel={this.props.title}
            overlayClassName="book-overlay"
            className="book-overlay__content"
          >
            <BookModal
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
