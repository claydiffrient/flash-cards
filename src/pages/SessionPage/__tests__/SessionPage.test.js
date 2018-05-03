import React from "react";
import { shallow, mount } from "enzyme";
import { SessionPage } from "../index";
import { MemoryRouter } from "react-router";

let testProps;
beforeEach(() => {
  testProps = {
    decks: [
      {
        cards: [
          {
            id: "1",
            text: {
              front: "What is the square root of 9?",
              back: "3"
            },
            flipped: false
          },
          {
            id: "2",
            text: {
              front: "What is the square root of 144?",
              back: "12"
            },
            flipped: false
          }
        ]
      }
    ]
  };
});

it("renders an edit button when isEditing prop is passed in", () => {
  const wrapper = mount(
    <MemoryRouter>
      <SessionPage isEditing {...testProps} fetchDecks={jest.fn()} />
    </MemoryRouter>
  );
  expect(wrapper.find('Button[children="Toggle Edit"]').exists()).toBe(true);
});

it("renders an end session button when isEditing is false", () => {
  const wrapper = mount(
    <MemoryRouter>
      <SessionPage {...testProps} fetchDecks={jest.fn()} />
    </MemoryRouter>
  );
  expect(wrapper.find('Button[children="End Session"]').exists()).toBe(true);
});

describe("Navigation", () => {
  let sampleState;

  beforeEach(() => {
    testProps = {
      decks: [
        {
          cards: [
            {
              id: "1",
              text: {
                front: "What is the square root of 9?",
                back: "3"
              },
              flipped: false
            },
            {
              id: "2",
              text: {
                front: "What is the square root of 144?",
                back: "12"
              },
              flipped: false
            },
            {
              id: "3",
              text: {
                front: "What is the capital of Mississippi?",
                back: "Jackson"
              },
              flipped: false
            }
          ]
        }
      ]
    };
  });

  it("goes to the next card when pressing next", () => {
    const wrapper = mount(
      <MemoryRouter>
        <SessionPage {...testProps} fetchDecks={jest.fn()} />
      </MemoryRouter>
    );
    wrapper.setState(sampleState);
    wrapper.find("Button[children='Next']").simulate("click");
    expect(wrapper.find("Card").props().id).toBe("2");
  });

  it("goes to the first card when pressing next on the last card", () => {
    const wrapper = shallow(
      <SessionPage {...testProps} fetchDecks={jest.fn()} />
    );
    wrapper.setState({ currentlyDisplayedIndex: 2 });
    wrapper.find("Button[children='Next']").simulate("click");
    expect(wrapper.find("Card").props().id).toBe("1");
  });

  it("goes to the previous card when pressing previous", () => {
    const wrapper = shallow(
      <SessionPage {...testProps} fetchDecks={jest.fn()} />
    );
    wrapper.setState({ currentlyDisplayedIndex: 2 });
    wrapper.find("Button[children='Previous']").simulate("click");
    expect(wrapper.find("Card").props().id).toBe("2");
  });

  it("goes to the last card when pressing previous on the first card", () => {
    const wrapper = shallow(
      <SessionPage {...testProps} fetchDecks={jest.fn()} />
    );
    wrapper.setState({ currentlyDisplayedIndex: 0 });
    wrapper.find("Button[children='Previous']").simulate("click");
    expect(wrapper.find("Card").props().id).toBe("3");
  });
});

describe("hasResponded", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SessionPage {...testProps} fetchDecks={jest.fn()} />);
    wrapper.setState({
      sessionStats: {
        correct: ["123"],
        incorrect: ["456"]
      }
    });
  });
  it("returns true when an id is in the correct group", () => {
    expect(wrapper.instance().hasResponded("123")).toBeTruthy();
  });
  it("returns true when an id is in the incorrect group", () => {
    expect(wrapper.instance().hasResponded("456")).toBeTruthy();
  });
  it("returns false when something is not in either group", () => {
    expect(wrapper.instance().hasResponded("789")).toBeFalsy;
  });
});
