// require("react-hot-loader/patch");
import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
// import { AppContainer } from "react-hot-loader";
import "@instructure/ui-themes/lib/canvas";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Spinner from "@instructure/ui-elements/lib/components/Spinner";
import { Provider } from "react-redux";
import Raven from "raven-js";
import consolePlugin from "raven-js/plugins/console";

import Loadable from "react-loadable";
import createConfiguredStore from "./createConfiguredStore";

const LoadableHome = Loadable({
  loader: () => import("./Home"),
  loading() {
    return <Spinner title="Loading" />;
  }
});

const LoadableSessionPage = Loadable({
  loader: () => import("./pages/SessionPage"),
  loading() {
    return <Spinner title="Loading" />;
  }
});

const LoadableDeckPicker = Loadable({
  loader: () => import("./DeckPicker"),
  loading() {
    return <Spinner title="Loading" />;
  }
});

const initialState = {
  cards: [],
  decks: []
};

Raven.config("https://ebc630d172414f37955311fbace952e3@sentry.io/885879", {
  release:
    process.env.RELEASE_TAG ||
    `development-${new Date().toISOString().split("T")[0]}`
}).install();

consolePlugin(Raven, console, {
  levels: ["warn", "error"]
});

const store = createConfiguredStore(initialState);

const Container = () => (
  <Provider store={store}>
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={LoadableHome} />
        <Route
          exact
          path="/decks/:deckId"
          component={({ match }) => (
            <LoadableSessionPage deckId={match.params.deckId} />
          )}
        />
        <Route
          exact
          path="/decks/:deckId/edit"
          component={({ match }) => (
            <LoadableSessionPage deckId={match.params.deckId} isEditing />
          )}
        />
        <Route path="/decks" component={() => <LoadableDeckPicker />} />
        <Route
          exact
          path="/session_summary"
          component={() => <LoadableSessionPage summary />}
        />
      </Switch>
    </Router>
  </Provider>
);

ReactDOM.render(<Container />, document.getElementById("main"));
