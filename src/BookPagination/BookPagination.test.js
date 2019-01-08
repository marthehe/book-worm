import React from "react";
import { shallow } from "enzyme";
import BookPagination from "./index.js";

test("renders pagination", () => {
  const wrapper = shallow(<BookPagination />);
  const pagination = wrapper.find("[data-test='pagination']");
  expect(pagination.length).toBe(1);
});

test("active page is 1", () => {
  const wrapper = shallow(<BookPagination />);
  const initialPaginationState = wrapper.state("activePage");
  expect(initialPaginationState).toBe(1);
});
