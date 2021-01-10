import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Red from "./Red";
import Green from "./Green";
import Blue from "./Blue";

function App() {
  return (
    <Router>
    <div>
      <h2>Please select a color.</h2>
      <ul>
        <li>
          <Link to="/red">
          red
          </Link>
          </li>
          <li>
          <Link to="/green">
          green
          </Link>
          </li>
          <li>
          <Link to="/blue">
          blue
          </Link>
          </li>
      </ul>
    </div>
    <Route exact path='/red' component={Red} />
    <Route exact path='/green' component={Green} />
    <Route exact path='/blue' component={Blue} />
    </Router>
  );
}

export default App;
