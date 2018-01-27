import { combineReducers } from "redux";
import { handleActions } from "redux-actions";

const cards = handleActions(
  {
    ADD_CARD: (state, action) => {
      return state.concat(action.payload);
    }
  },
  []
);

export default combineReducers({
  cards
});
