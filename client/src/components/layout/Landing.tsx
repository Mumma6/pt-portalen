import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const Landing: React.FC = ({ isAuthenticated }: any) => {
  if(isAuthenticated) {
    return <Redirect to="/dashboard"/>;
  }

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

const mapStateToProps = (state: any) => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(Landing);
