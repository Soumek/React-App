import React from "react";
import { BrowserRouter as Router, Route, Switch, withRouter, Redirect } from "react-router-dom";




const NotFound = () => <div className="not_found"><h1>Not Found</h1></div>;

const RouteNotFound = () => <Redirect to={{ state: { notFoundError: true } }} />;

const CaptureRouteNotFound = withRouter(({children, location}) => {
  return location && location.state && location.state.notFoundError ? <NotFound /> : children;
});

const Settings = () => {
  return (
    <Switch>
      <Route path="/settings/account" render={() => <h1>Account Settings</h1>} />
      <Route path="/settings/profile" render={() => <h1>Profile Settings</h1>} />

      <RouteNotFound />
    </Switch>
  );
};

const AppShell = ({children}) => {
  return (
    <div className="application">
      <header>Application</header>
      {children}
    </div>
  );
};

const Application = () => {
  return (
    <Router>
      <CaptureRouteNotFound>
        <AppShell>
          <Switch>
            <Route exact path="/" render={() => <h1>Login!</h1>} />
            <Route path="/settings" render={() => <Settings />} />
            <Route path="/profile" render={() => <h1>User Profile</h1>} />
            <Route render={()=><RouteNotFound />}/>
            
          </Switch>
        </AppShell>
      </CaptureRouteNotFound>
    </Router>
  );
};

export default Application;