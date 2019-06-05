import React, { Fragment, lazy, Suspense } from "react";
import Session from './componentes/Session';
import { BrowserRouter as Router, Switch} from "react-router-dom";
import RouteWithSubRoutes from "./componentes/RouteWithSubRoutes";
import routes from "./routes/routes";
import "./assets/css/transitions.css";

// const RouteWithSubRoutes= lazy(()=>import('./componentes/RouteWithSubRoutes'));




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