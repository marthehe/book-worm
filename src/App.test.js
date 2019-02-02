import React from "react";
import { shallow } from "enzyme";
import App from "./App";

import Books from "./Books/";

test("renders without errors", () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find('[data-test="component-app"]');
  expect(appComponent).toHaveLength(1);
});

test("renders renders Books component", () => {
  const wrapper = shallow(<App />);
  const booksComponent = wrapper.find(Books);
  expect(booksComponent).toHaveLength(1);
});
