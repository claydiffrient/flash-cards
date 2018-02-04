// require("react-hot-loader/patch");
import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
// import { AppContainer } from "react-hot-loader";
import "@instructure/ui-themes/lib/canvas";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Spinner from "@instructure/ui-core/lib/components/Spinner";
import { Provider } from "react-redux";

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

const iniialState = {
  cards: []
};

const store = createConfiguredStore(iniialState);

const Container = () => (
  <Provider store={store}>
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={LoadableHome} />
        <Route
          path="/cards"
          component={() => <LoadableSessionPage text={{}} />}
        />
        <Route
          path="/edit"
          component={() => <LoadableSessionPage isEditing />}
        />
      </Switch>
    </Router>
  </Provider>
);

ReactDOM.render(<Container />, document.getElementById("main"));
