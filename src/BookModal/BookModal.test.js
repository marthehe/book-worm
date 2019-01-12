import React from "react";
import { shallow } from "enzyme";
import BookModal from "./index.js";

test("renders close button", () => {
  const wrapper = shallow(<BookModal />);
  const closeButton = wrapper.find("[data-test='close-button']");
  expect(closeButton.length).toBe(1);
});
