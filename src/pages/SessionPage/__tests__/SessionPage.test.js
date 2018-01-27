import React from "react";
import { shallow, mount } from "enzyme";
import { default as ThemeableSessionPage, SessionPage } from "../index";

it("renders", () => {
  const wrapper = mount(<ThemeableSessionPage />);
  expect(wrapper).toMatchSnapshot();
});

it("renders an edit button when isEditing prop is passed in", () => {
  const wrapper = shallow(<SessionPage isEditing />);
  expect(wrapper.find('Button[children="Edit"]').exists()).toBe(true);
});

describe("Navigation", () => {
  let sampleState;

  beforeEach(() => {
    sampleState = {
      cards: [
        {
          id: 1,
          text: {
            front: "What is the square root of 9?",
            back: "3"
          },
          flipped: false
        },
        {
          id: 2,
          text: {
            front: "What is the square root of 144?",
            back: "12"
          },
          flipped: false
        },
        {
          id: 3,
          text: {
            front: "What is the capital of Mississippi?",
            back: "Jackson"
          },
          flipped: false
        }
      ],
      currentlyDisplayedIndex: 0
    };
  });

  it("goes to the next card when pressing next", () => {
    const wrapper = shallow(<SessionPage />);
    wrapper.setState(sampleState);
    wrapper.find("Button[children='Next']").simulate("click");
    expect(wrapper.find("Card").props().id).toBe(2);
  });

  it("goes to the first card when pressing next on the last card", () => {
    const wrapper = shallow(<SessionPage />);
    sampleState.currentlyDisplayedIndex = 2;
    wrapper.setState(sampleState);
    wrapper.find("Button[children='Next']").simulate("click");
    expect(wrapper.find("Card").props().id).toBe(1);
  });

  it("goes to the previous card when pressing previous", () => {
    const wrapper = shallow(<SessionPage />);
    sampleState.currentlyDisplayedIndex = 2;
    wrapper.setState(sampleState);
    wrapper.find("Button[children='Previous']").simulate("click");
    expect(wrapper.find("Card").props().id).toBe(2);
  });

  it("goes to the last card when pressing previous on the first card", () => {
    const wrapper = shallow(<SessionPage />);
    sampleState.currentlyDisplayedIndex = 0;
    wrapper.setState(sampleState);
    wrapper.find("Button[children='Previous']").simulate("click");
    expect(wrapper.find("Card").props().id).toBe(3);
  });
});
