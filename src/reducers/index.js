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
    },
    DECK_DELETED: (state, action) => {
      return state.filter(x => x._id !== action.payload);
    },
    DECK_UPDATED: (state, action) => {
      const index = state.findIndex(x => x._id === action.payload._id);
      const newState = state.slice();
      newState[index] = action.payload;
      return newState;
    }
  },
  []
);

const session = handleActions(
  {
    SESSION_STARTED: (state, action) => {
      return action.payload;
    },
    SESSION_ENDED: (state, action) => {
      return action.payload;
    },
    SESSION_UPDATED: (state, action) => {
      return action.payload;
    }
  },
  {
    correct: [],
    incorrect: []
  }
);

export default combineReducers({
  cards,
  decks,
  session
});
