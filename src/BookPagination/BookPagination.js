import React from "react";
import Pagination from "react-js-pagination";

const BookPagination = props => (
  <div>
    <Pagination
      data-test="pagination"
      activePage={props.activePage}
      itemsCountPerPage={12}
      totalItemsCount={450}
      pageRangeDisplayed={5}
      onChange={props.handlePageChange}
      itemClass="page-item"
      linkClass="page-link"
    />
  </div>
);

export default BookPagination;
