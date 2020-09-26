import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <Link to="/calculator">
        <button>Calculator</button>
      </Link>
      <Link to="/todo">
        <button>TODO</button>
      </Link>
      <Link to="/randomdata">
        <button>Random Data</button>
      </Link>
    </div>
  );
};

export default Home;
