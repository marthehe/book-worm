import React from "react";
import { shallow } from "enzyme";
import Books from "./index.js";
import SearchArea from "./index.js";
import { wrap } from "module";

describe("initialState", () => {
  test("books list is empty", () => {
    const wrapper = shallow(<Books />);
    const InitialBooksState = wrapper.state("books");
    expect(InitialBooksState).toEqual([]);
  });

  test("search input is empty ", () => {
    const wrapper = shallow(<Books />);
    const InitialSearchFieldState = wrapper.state("searchField");
    expect(InitialSearchFieldState).toEqual("''");
  });
});

describe("state", () => {
  test.only("should be updated correctly with updateBooksState()", () => {
    const wrapper = shallow(<Books />);
    const instance = wrapper.instance();
    instance.updateBooksState([{ foo: "bar" }]);
    expect(wrapper.state("books")).toEqual([{ foo: "bar" }]);
  });
});

describe("state", () => {
  test.only("should be updated correctly with handleSearch()", () => {
    const wrapper = shallow(<Books />);
    const instance = wrapper.instance();
    const expectedValue = "bar";
    instance.handleSearch({ target: { value: expectedValue } });
    expect(wrapper.state("searchField")).toEqual(expectedValue);
  });
});
