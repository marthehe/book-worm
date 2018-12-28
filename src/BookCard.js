import React, { Component } from "react";
import PropTypes from "prop-types";
import BookPage from "./BookPage";
import books from "./books.json";
import ReactModal from "react-modal";

const book = books.items[0];

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
    console.log("BookCard props:", this.props);
    return (
      <div className="book-list__card">
        <img className="book-list__card-image" src={this.props.image} alt="" />
        <div className="book-list__card-info">
          <h2 className="book-list__card-title">{this.props.title}</h2>
          <h3 className="book-list__card-subtitle">
            Author: {this.props.authors}
          </h3>
          <h3 className="book-list__card-subtitle">
            Publisher: {this.props.publisher}
          </h3>
        </div>
        <div>
          <button onClick={this.handleOpenModal}>More Info</button>
          <ReactModal
            isOpen={this.state.showModal}
            contentLabel="Minimal Modal Example"
          >
            <button onClick={this.handleCloseModal}>Close</button>
            <BookPage
              image={this.props.image}
              title={this.props.title}
              authors={this.props.authors}
              publisher={this.props.publisher}
              publishedDate={this.props.publishedDate}
              description={this.props.description}
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
