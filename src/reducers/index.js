import { combineReducers } from "redux";
import { handleActions } from "redux-actions";

const cards = handleActions(
  {
    ADD_CARD: (state, action) => {
      return state.concat(action.payload);
    },
    FETCHED_CARDS: (state, action) => {
      return state.concat(action.payload);
    },
    NEW_CARD_ADDED: (state, action) => {
      return state.concat(action.payload);
    },
    SAVED_CARD: (state, action) => {
      const index = state.findIndex(x => x._id === action.payload._id);
      const newState = state.slice();
      newState[index] = action.payload;
      return newState;
    }
  },
  []
);

const decks = handleActions(
  {
    NEW_DECK_ADDED: (state, action) => {
      return state.concat(action.payload);
    },
    FETCHED_DECKS: (state, action) => {
      return action.payload;
    }
  },
  []
);

export default combineReducers({
  cards,
  decks
});
