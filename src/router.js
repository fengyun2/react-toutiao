import React from "react";
import {Router, Route, Switch} from "dva/router";
import IndexPage from "./routes/IndexPage";
import Channels from "./routes/channels";
import ArticleDetail from "./routes/article_detail";

function RouterConfig({history}) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage}/>
        <Route path="/channels" exact component={Channels}/>
        <Route path="/article_detail/:id" exact component={ArticleDetail}/>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
