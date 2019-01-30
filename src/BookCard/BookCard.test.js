import React from "react";
import { shallow } from "enzyme";
import BookCard from "./index.js";

test("renders card button", () => {
  const wrapper = shallow(<BookCard />);

  const cardButton = wrapper.find("[data-test='card-button']");
  expect(cardButton.length).toBe(1);
});

test("renders BookCard component without Author if props are not passed", () => {
  const wrapper = shallow(<BookCard />);
  const bookSubtitle = wrapper.find("[data-test='book-subtitle']");
  expect(bookSubtitle).toHaveLength(0);
});

test("modal is close at the begining", () => {
  const wrapper = shallow(<BookCard />);
  const InitialModalState = wrapper.state("showModal");
  expect(InitialModalState).toBe(false);
});
