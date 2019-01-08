import React from "react";
import { shallow } from "enzyme";
import BookPage from "./index.js";

test("renders close button", () => {
  const wrapper = shallow(<BookPage />);
  const closeButton = wrapper.find("[data-test='close-button']");
  expect(closeButton.length).toBe(1);
});
