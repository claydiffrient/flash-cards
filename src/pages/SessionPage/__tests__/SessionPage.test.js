import React from "react";
import { shallow, mount } from "enzyme";
import SessionPage from "../index";

it("renders", () => {
  const wrapper = mount(<SessionPage />);
  expect(wrapper).toMatchSnapshot();
});
