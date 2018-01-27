import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import reduxLogger from "redux-logger";

import rootReducer from "./reducers";

export default function createConfiguredStore(defaultState) {
  let middlewares = [reduxThunk];

  if (process.env.NODE_ENV === "development") {
    middlewares.push(reduxLogger);
  }

  return createStore(
    rootReducer,
    defaultState,
    applyMiddleware(...middlewares)
  );
}
