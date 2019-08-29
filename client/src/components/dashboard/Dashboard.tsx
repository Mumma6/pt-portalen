import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { getCurrentProfile } from "../../actions/profile";
import Spinner from "../../utils/Spinner";
import { Link } from "react-router-dom";

import DashboardsActions from "./DashboardsAction";
import Experience from "./Experience";
import Education from "./Education";
import profile from "../../reducers/profile";


const Dashboard = (props: any) => {
  useEffect(() => {
    // get current profile is a Props
    console.log("use effffect");
    props.getCurrentProfile();
  }, []);

  // Redirect if not logged in.
  if (props.auth.isAuthenticated === false) {
    return <Redirect to="/login" />;
  }

  if (props.profile.loading === true) {
    return <Spinner />;
  }
  return (
    <div>
      <div>
        <div>
          {props.profile.profile !== null ? (
            <Fragment>
              <p className="lead">
                <i className="fas fa-user" /> Välkommen{" "}
                {props.profile.profile.user.name}
              </p>
            </Fragment>
          ) : (
            <Fragment>
              <p>Du har inte någon profil. Vänligen skapa en</p>
              <Link to="/create-profile" className="btn btn-primary my-1">
                Skapa en Profil
              </Link>
            </Fragment>
          )}
        </div>
      </div>
      <DashboardsActions />
      <Experience experience={props.profile.profile.experience} />
      <Education education={props.profile.profile.education} />
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(Dashboard);
