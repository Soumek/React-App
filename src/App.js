import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RouteWithSubRoutes from "./componentes/RouteWithSubRoutes";
import routes from "./routes/routes";
import Login from './componentes/Login'
import "./assets/css/transitions.css";
export default class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          
          <Switch>
            <Route exact path="/" component={Login} />
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}      
          </Switch>
         
        </Fragment>
      </Router>
    );
  }
}
