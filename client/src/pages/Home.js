import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      {/* Link to List.js */}
      <Link to={"./list"}>
        <button variant="raised">My List</button>
      </Link>
    </>
  );
};

export default Home;
