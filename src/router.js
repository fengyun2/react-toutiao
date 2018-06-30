import React from "react";
import { Router, Route, Switch } from "dva/router";
import IndexPage from "./routes/IndexPage";
import Channels from "./routes/channels";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/channels" exact component={Channels} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
