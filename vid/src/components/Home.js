import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link to="/ListA">
        <h1>List 1</h1>
      </Link>
      <Link to="/ListB">
        <h1>List 2</h1>
      </Link>
    </div>
  );
}

export default Home;
