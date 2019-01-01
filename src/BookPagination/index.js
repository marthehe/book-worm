import React, { Component } from "react";
import Pagination from "react-js-pagination";

class BookPagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1
    };

    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(pageNumber) {
    this.setState({
      activePage: pageNumber
    });

    this.props.handleUpdate(pageNumber);
  }
  render() {
    return (
      <div>
        <Pagination
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

// page-item -> <li>
// page-link -> <a>
{
  /* <li class="page-item"><a class="page-link" href="#">3</a></li> */
}
