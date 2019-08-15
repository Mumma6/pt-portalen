import React from "react";
import { Link } from "react-router-dom";

const Landing: React.FC = () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Personliga tränar portalen</h1>
          <p className="lead">
            Hitta rätt personliga tränare för dig
          </p>
          <div className="buttons">
            <Link to="/register" className="btn btn-primary">
              Skapa konto
            </Link>
            <Link to="/login" className="btn btn-light">
              Logga in
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
