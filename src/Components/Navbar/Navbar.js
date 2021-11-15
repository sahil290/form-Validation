import React from "react";
import "./Navbar.css";
import { AiFillHome } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";
import { FiUserPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm p-4">
        <div className="container-fluid">
          <p className="navbar-brand">Validation Form Page</p>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link as={Link} to="/" className="link">
                <AiFillHome /> Home
              </Link>
            </li>

            <li className="nav-item">
              <Link as={Link} to="/Login" className="link">
                <BiLogIn /> LogIn
              </Link>
            </li>

            <li className="nav-item">
              <Link as={Link} to="/Signup" className="link">
                <FiUserPlus /> Signup
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
