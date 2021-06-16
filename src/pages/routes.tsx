import React from "react";
import Home from "pages/home";

import { Route, Switch } from "react-router-dom";
const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about">
      <h1>About page</h1>
    </Route>
  </Switch>
);

export default Routes;
