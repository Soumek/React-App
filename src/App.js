import React, { Component, Fragment } from "react";
import Session from './componentes/Session';
import { BrowserRouter as Router, Switch,Redirect } from "react-router-dom";
import RouteWithSubRoutes from "./componentes/RouteWithSubRoutes";
import routes from "./routes/routes";
import "./assets/css/transitions.css";

// import Login from './componentes/Login'


// import "./assets/css/bootstrap.min.css";
 const App=({refetch,session})=>{
    return (
      
      <Router>
        <Fragment>
          <Switch>
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} refetch={refetch} session={session} />
            ))}  
             
          </Switch>
        </Fragment>
      </Router>
    );
  
}

 const RootSession=Session(App);
 export {RootSession};