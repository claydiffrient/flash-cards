import React from "react";
import Card from "../index";
import { shallow } from "enzyme";

it("shows the front of the card by default", () => {
  const text = {
    front: "Front Side",
    back: "Back Side"
  };
  const wrapper = shallow(<Card text={text} />);
  expect(wrapper).toMatchSnapshot();
});

it("shows the back after clicking the flip button", () => {
  const text = {
    front: "Front Side",
    back: "Back Side"
  };
  const wrapper = shallow(<Card text={text} />);
  wrapper.find("Button").simulate("click");
  expect(wrapper).toMatchSnapshot();
});
