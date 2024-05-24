// src/components/common/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <ul className="container mx-auto flex space-x-4">
        <li>
          <Link to="/" className="text-white">
            Dashboard
          </Link>
        </li>

        <li>
          <Link to="/project-details" className="text-white">
            Project Details
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
