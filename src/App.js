import React, { Fragment, lazy, Suspense } from "react";
import Session from './componentes/Session';
import { BrowserRouter as Router, Switch} from "react-router-dom";
import RouteWithSubRoutesJson from "./componentes/RouteWithSubRoutesJson";
import routes from "./routes/routes";
import routesjson from './routes/routesjson';
import "./assets/css/transitions.css";


console.log(JSON.parse(routesjson));
 const App=({refetch,session})=>{
    return (
      
      <Router>
        <Fragment>
          
          <Switch>
            
            {routes.map((routesjson, i) => (
              <RouteWithSubRoutesJson key={i} {...routesjson} refetch={refetch} session={session} />
            ))}  
    
          </Switch>
        </Fragment>
      </Router>
    );
  
}

 const RootSession=Session(App);
 export {RootSession};