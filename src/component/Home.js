import React from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
  const { colors } = props;
  return (
    <div className="Home">
      <nav className="Home__Nav">
        <h4>Welcome to the color factory.</h4>
        <Link to="/colors/Add" className="Nav__link">
          Add a color
        </Link>
      </nav>
      <main className="Home__Main">
        <p>Please select a color.</p>
        <ul className="Main__link">
          {colors.map((c) => (
            <li key={c.color}>
              <Link to={`/colors/${c.color}`}>{c.color}</Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Home;
