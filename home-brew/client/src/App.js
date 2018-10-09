import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Nav, NavItem, NavLink } from 'reactstrap';
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import addBeer from "./pages/addBeer/addBeer";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/addBeer" component={addBeer} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
