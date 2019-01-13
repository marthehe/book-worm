import React, { Component } from "react";
import Pagination from "react-js-pagination";

class BookPagination extends Component {
  state = {
    activePage: 1
  };

  handlePageChange = pageNumber => {
    this.props.handlePagination(pageNumber);
    this.setState({
      activePage: pageNumber
    });
  };

  render() {
    return (
      <div>
        <Pagination
          data-test="pagination"
          activePage={this.state.activePage}
          itemsCountPerPage={18}
          totalItemsCount={450}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange}
          itemClass="page-item"
          linkClass="page-link"
        />
      </div>
    );
  }
}

export default BookPagination;
