import React from "react";
import { default as ThemeableCard, Card } from "../index";
import { shallow, mount } from "enzyme";

const props = {
  text: {
    front: "Front Side",
    back: "Back Side"
  }
};

it("renders", () => {
  expect(mount(<ThemeableCard {...props} />)).toMatchSnapshot();
});

it("shows the front of the card by default", () => {
  const wrapper = shallow(<Card {...props} />);
  expect(
    wrapper
      .find("Text")
      .children()
      .render()
      .text()
  ).toEqual(props.text.front);
});

it("shows the back after clicking the flip button", () => {
  const wrapper = shallow(<Card {...props} />);
  wrapper.find("Button").simulate("click");
  expect(
    wrapper
      .find("Text")
      .children()
      .render()
      .text()
  ).toEqual(props.text.back);
});
