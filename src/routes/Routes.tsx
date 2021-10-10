import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Layout } from "../components/HOCs/Layout";
import { Home } from "../components/pages/Home/Home";
import { NoMatch } from "../components/pages/NoMatch/NoMatch";
import { Quiz } from "../components/pages/Quiz/Quiz";

export const Routes = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/quiz" component={Quiz} />
          <Route exact path="*" component={NoMatch} />
        </Switch>
      </Layout>
    </Router>
  );
};
