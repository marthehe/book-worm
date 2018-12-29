import React, { Component } from "react";
import Pagination from "react-js-pagination";

class BookPagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 2
    };

    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(pageNumber) {
    console.log(this);
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber });
  }
  render() {
    console.log("paginacja");
    return (
      <div>
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={18}
          totalItemsCount={450}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default BookPagination;
