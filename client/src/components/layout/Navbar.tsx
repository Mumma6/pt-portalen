import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fas fa-dumbbell" /> PT-Portalen
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="profiles.html">Personliga tränare</Link>
        </li>
        <li>
          <Link to="/register">Skapa konto</Link>
        </li>
        <li>
          <Link to="/login">Logga in</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
