import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home">
      <nav className="Home__Nav">
        <h4>Welcome to the color factory.</h4>
        <Link to="/Add" className="Nav__link">Add a color</Link>
      </nav>
      <main className="Home__Main">
        <p>Please select a color.</p>
        <ul className="Main__link">
          <li>
            <Link to="/red" >red</Link>
          </li>
          <li>
            <Link to="/green">green</Link>
          </li>
          <li>
            <Link to="/blue">blue</Link>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default Home;
