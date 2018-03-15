import React from "react";
import { shallow, mount } from "enzyme";
import { default as ThemeableSessionPage, SessionPage } from "../index";
import createConfiguredStore from "../../../createConfiguredStore";
import { MemoryRouter } from "react-router";
import { Provider } from "react-redux";

let store;
let testProps;
beforeEach(() => {
  testProps = {
    decks: [
      {
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
          }
        ]
      }
    ]
  };
  store = createConfiguredStore({
    ...testProps
  });
});

it("renders", () => {
  const wrapper = mount(
    <MemoryRouter>
      <Provider store={store}>
        <ThemeableSessionPage />
      </Provider>
    </MemoryRouter>
  );
  expect(wrapper.find(SessionPage)).toMatchSnapshot();
});

it("renders an edit button when isEditing prop is passed in", () => {
  const wrapper = mount(
    <MemoryRouter>
      <SessionPage isEditing {...testProps} fetchDecks={jest.fn()} />
    </MemoryRouter>
  );
  expect(wrapper.find('Button[children="Toggle Edit"]').exists()).toBe(true);
});

describe("Navigation", () => {
  let sampleState;

  beforeEach(() => {
    testProps = {
      decks: [
        {
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
    expect(wrapper.find("Card").props().id).toBe(2);
  });

  it("goes to the first card when pressing next on the last card", () => {
    const wrapper = shallow(
      <SessionPage {...testProps} fetchDecks={jest.fn()} />
    );
    wrapper.setState({ currentlyDisplayedIndex: 2 });
    wrapper.find("Button[children='Next']").simulate("click");
    expect(wrapper.find("Card").props().id).toBe(1);
  });

  it("goes to the previous card when pressing previous", () => {
    const wrapper = shallow(
      <SessionPage {...testProps} fetchDecks={jest.fn()} />
    );
    wrapper.setState({ currentlyDisplayedIndex: 2 });
    wrapper.find("Button[children='Previous']").simulate("click");
    expect(wrapper.find("Card").props().id).toBe(2);
  });

  it("goes to the last card when pressing previous on the first card", () => {
    const wrapper = shallow(
      <SessionPage {...testProps} fetchDecks={jest.fn()} />
    );
    wrapper.setState({ currentlyDisplayedIndex: 0 });
    wrapper.find("Button[children='Previous']").simulate("click");
    expect(wrapper.find("Card").props().id).toBe(3);
  });
});
