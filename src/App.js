import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./component/Home";
import Add from "./component/Add";
import Red from "./component/Colors/Red";
import Green from "./component/Colors/Green";
import Blue from "./component/Colors/Blue";


import "./App.css";

const NotFound = () => <h1>404</h1>;

class App extends React.Component {
  state = {};

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Add" component={Add} />
            <Route exact path="/red" component={Red} />
            <Route exact path="/green" component={Green} />
            <Route exact path="/blue" component={Blue} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
