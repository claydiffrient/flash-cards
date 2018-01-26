// require("react-hot-loader/patch");
import React from "react";
import ReactDOM from "react-dom";
// import { AppContainer } from "react-hot-loader";
import "@instructure/ui-themes/lib/canvas";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Spinner from "@instructure/ui-core/lib/components/Spinner";

import Loadable from "react-loadable";

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

const Container = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={LoadableHome} />
      <Route
        path="/cards"
        component={() => <LoadableSessionPage text={{}} />}
      />
    </Switch>
  </Router>
);

ReactDOM.render(<Container />, document.getElementById("main"));
