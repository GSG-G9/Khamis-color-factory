import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Home from "./component/Home";
import Add from "./component/Add";
import Colors from "./component/Colors";

import "./App.css";

class App extends React.Component {
  state = {
    colors: [
      {
        color: "red",
        hex: "#fc0f03",
      },
      {
        color: "green",
        hex: "#03fc1c",
      },
      {
        color: "blue",
        hex: "#03a9fc",
      },
    ],
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route
              exact
              path="/colors"
              component={() => <Home colors={this.state.colors} />}
            />
            <Route exact path="/colors/Add" component={Add} />
            <Route
              exact
              path="/colors/:color"
              component={(props) => <Colors colors={this.state.colors} {...props}/>}
            />
            <Redirect to="/colors" />
          </Switch> 
        </div>
      </Router>
    );
  }
}

export default App;
