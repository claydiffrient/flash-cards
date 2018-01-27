import rootReducer from "../index";

it("handles ADD_CARD action", () => {
  const action = {
    type: "ADD_CARD",
    payload: [{ id: 123, text: { front: "a", back: "b" } }]
  };

  const initialState = {
    cards: []
  };

  const newState = rootReducer(initialState, action);
  expect(newState.cards).toHaveLength(1);
});
