import React from "react";
import { shallow } from "enzyme";
import SearchArea from "./index.js";

test("renders search input", () => {
  const wrapper = shallow(<SearchArea />);
  const searchInput = wrapper.find("[data-test='search-area-input']");
  expect(searchInput.length).toBe(1);
});

test("renders submit button", () => {
  const wrapper = shallow(<SearchArea />);
  const submitButton = wrapper.find("[data-test='search-area-button']");
  expect(submitButton.length).toBe(1);
});
