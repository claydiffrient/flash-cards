// require("react-hot-loader/patch");
import React from "react";
import ReactDOM from "react-dom";
// import { AppContainer } from "react-hot-loader";
import "@instructure/ui-themes/lib/canvas";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Spinner from "@instructure/ui-core/lib/components/Spinner";

// import Home from "./Home";
// import SessionPage from "./pages/SessionPage";

// Loadable seems to perhaps have trouble with Parcel :(
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
  <Router basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path="/" component={LoadableHome} />
      <Route
        path="/cards"
        component={() => <LoadableSessionPage text={{}} />}
      />
      <Route path="/edit" component={() => <LoadableSessionPage isEditing />} />
    </Switch>
  </Router>
);

ReactDOM.render(<Container />, document.getElementById("main"));
