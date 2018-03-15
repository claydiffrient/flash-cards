import React from "react";
import { MemoryRouter } from "react-router";
import { mount } from "enzyme";
import Home from "../index";

it("renders", () => {
  const wrapper = mount(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );
  expect(wrapper.find("Home")).toMatchSnapshot();
});
