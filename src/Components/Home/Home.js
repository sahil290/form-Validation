import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="homepage-container text-center mt-5">
        <h2 className="heading-of-homepage pt-3">Welcome to my Homepage.</h2>
        <hr />
        <div className="button-container mt-5">
          <Link
            as={Link}
            to="/Login"
            type="button"
            className="btn btn-info p-3 mt-5"
          >
            Login
          </Link>
          <Link
            as={Link}
            to="/Signup"
            type="button"
            className="btn btn-danger p-3 mt-5 ml-4"
          >
            Signup
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
