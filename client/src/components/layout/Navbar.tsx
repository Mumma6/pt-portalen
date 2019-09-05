import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";


const Navbar: React.FC = (props: any) => {

  // Logged in
  const authLinks = (
    <ul>
      <li>
        <Link to="/profiles">Personliga tränare</Link>
      </li>
      <li>
        <Link to="/dashboard">
        <i className="fas fa-user" />{" "}
        <span className="hide-sm">Dashboard</span></Link>
      </li>
      <li>
        <Link to="/" onClick={props.logout}>
          <i className="fas fa-sign-out-alt" />{" "}
          <span className="hide-sm">Logga ut</span>
        </Link>
      </li>
    </ul>
  );

  // Loged out
  const questLinks = (
    <ul>
      <li>
        <Link to="/profiles">Personliga tränare</Link>
      </li>
      <li>
        <Link to="/register">Skapa konto</Link>
      </li>
      <li>
        <Link to="/login">Logga in</Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fas fa-dumbbell" /> PT-Portalen
        </Link>
      </h1>
      { !props.loading && (<Fragment>{ props.auth.isAuthenticated ? authLinks : questLinks }</Fragment>)}
    </nav>
  );
};

const mapStateToProps = (state: any) => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);
