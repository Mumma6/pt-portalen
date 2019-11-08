import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404 - Page not found</h1>
      <Link to="/">
        <span className="hide-sm">Tillbaka</span>
      </Link>
    </div>
  );
};

export default NotFound;
