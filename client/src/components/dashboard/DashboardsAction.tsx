import React from "react";
import { Link } from "react-router-dom";


const DashboardsAction = () => {
  return (
    <div>
      <Link to="/edit-profile" className="btn btn-light">
        <i className="fas fa-user-circle text-primary"></i>{" "}
        Redigera profil
      </Link>

      <Link to="/add-education" className="btn btn-light">
        <i className="fas fa-graduation-cap text-primary"></i>{" "}
        Lägg till utbildning
      </Link>

      <Link to="/add-experience" className="btn btn-light">
        <i className="fab fa-black-tie text-primary"></i>{" "}
        Lägg till arbetserfarenhet
      </Link>
    </div>
  );
};

export default DashboardsAction;
