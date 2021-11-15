import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
};
export default App;
