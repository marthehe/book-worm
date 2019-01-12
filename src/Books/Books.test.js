import React from "react";
import { shallow, mount } from "enzyme";
import Books from "./index.js";
import SearchArea from "./index.js";

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
  test("should be updated correctly with updateBooksState()", () => {
    const wrapper = shallow(<Books />);
    const instance = wrapper.instance();
    instance.updateBooksState([{ foo: "bar" }]);
    expect(wrapper.state("books")).toEqual([{ foo: "bar" }]);
  });
});

describe("state", () => {
  test("should be updated correctly with handleSearch()", () => {
    const wrapper = shallow(<Books />);
    const instance = wrapper.instance();
    const expectedValue = "bar";
    instance.handleSearch({ target: { value: expectedValue } });
    expect(wrapper.state("searchField")).toEqual(expectedValue);
  });
});

describe("state", () => {
  it("calls `fetchBooks` when mounted", () => {
    const wrapper = shallow(<Books />);
    const instance = wrapper.instance();
    jest.spyOn(instance, "fetchBooks");
    instance.componentDidMount();
    expect(instance.fetchBooks).toHaveBeenCalled();
  });
});
