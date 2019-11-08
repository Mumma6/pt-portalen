import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const Landing: React.FC = ({ isAuthenticated }: any) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <div className="landing-text">
            <h1 className="x-large">Hitta din personliga tränare här</h1>

            <Link
              style={{ fontSize: "30px" }}
              className="btn btn-primary"
              to="/profiles"
            >
              <i className="fas fa-user-friends" />{" "}
              <span className="hide-sm">Personliga tränare</span>
            </Link>

            <p className="lead">
              Är du en personlig tränare, register dig här eller logga in
            </p>

            <div>
              <Link
                to="/register"
                className="btn btn-success"
                style={{ fontSize: "30px", marginRight: "20px" }}
              >
                Register
              </Link>

              <Link
                to="/login"
                className="btn btn-light"
                style={{ fontSize: "30px", marginLeft: "20px" }}
              >
                Logga in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state: any) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
