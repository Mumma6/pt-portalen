import React, { useState, useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { getCurrentProfile, deleteAccount } from "../../actions/profile";
import Spinner from "../../utils/Spinner";
import { Link } from "react-router-dom";

import DashboardsActions from "./DashboardsAction";
import Experience from "./Experience";
import Education from "./Education";

const Dashboard = (props: any) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // get current profile is a Props
    console.log("use effffect");
    props.getCurrentProfile();
  }, [props.getCurrentProfile]);


  // ful lösning men funkar
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }, [])

  
  // Redirect if not logged in.

  if (loading) {
    
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
              <DashboardsActions />
              <Experience experience={props.profile.profile.experience} />
              <Education education={props.profile.profile.education} />
              <div className="my-2">
                <button
                  className="btn btn-danger"
                  onClick={() => props.deleteAccount()}
                >
                  <i className="fas fa-user-minus"></i> Ta bort mitt konto
                </button>
              </div>
            </Fragment>
          ) : loading ? null : (
            <Fragment>
              <p>Du har inte någon profil. Vänligen skapa en</p>
              <Link to="/create-profile" className="btn btn-primary my-1">
                Skapa en Profil
              </Link>
            </Fragment>
          )}
          
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getCurrentProfile, deleteAccount }
)(Dashboard);
