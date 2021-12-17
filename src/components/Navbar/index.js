import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  return (
    <div className="container">
      <nav>
        <Link to="/">Hostels</Link>
        <Link to="/itineraries">Itineraries</Link>
      </nav>
    </div>
  );
};

export default Navbar;
