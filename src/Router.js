import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PrivateRoute } from './components/PrivateRoute';

//layout
import Main from "./layouts/Main";
import Blank from "./layouts/Blank";

// views
import HomeView from "./views/Home";
import LoginView from "./views/Login";
import RegisterView from "./views/Register";
import AdminView from "./views/Admin";
import PostView from "./views/Post";
import CategoryView from "./views/Category";
import PostDetailsView from "./views/PostDetails";

export default () => {
  return (
    <Router>
      <Switch>
        <Route path="/login/:path?" exact>
            <Blank>
                <PrivateRoute path="/login" component={LoginView} role=""/>
            </Blank>
        </Route>
        <Route path="/register/:path?" exact>
            <Blank>
                <PrivateRoute path="/register" component={RegisterView} role=""/>
            </Blank>
        </Route>
        <Route>
          <Main>
            <Switch>
              <Route path="/" exact component={HomeView} />
              <PrivateRoute exact path="/admin" component={AdminView} role="admin" />
              <PrivateRoute exact path="/post" component={PostView} role={() => ["admin", "poster"]} />
              <PrivateRoute exact path="/category" component={CategoryView} role={() => ["admin"]} />
              <Route exact path="/postdetails" component={PostDetailsView} />
            </Switch>
          </Main>
        </Route>
      </Switch>
    </Router>
  );
};
