import React from "react";
import Home from "pages/home";

import { Link, Route, Switch } from "react-router-dom";
const Routes = () => (
  <>
    {/* <header>
      <li>
        <Link to="/">
          <a href="/">Home</a>
        </Link>
      </li>
      <li>
        <Link to="/about">
          <a href="/about">About</a>
        </Link>
      </li>
    </header> */}
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about">
        <h1>About page</h1>
      </Route>
    </Switch>
  </>
);

export default Routes;
