import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import RouteWithSubRoutes from "./componentes/RouteWithSubRoutes";
import routes from "./routes/routes";
// import Login from './componentes/Login'

import "./assets/css/transitions.css";
// import "./assets/css/bootstrap.min.css";
export default class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Switch>
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}  
             
          </Switch>
        </Fragment>
      </Router>
    );
  }
}
