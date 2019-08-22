import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { getCurrentProfile } from "../../actions/profile";
import Spinner from "../../utils/Spinner";
import { Link } from "react-router-dom";



// Denna komponent måste förfinas... fixa buggen som visar login när man refreshar. Kanske ha if / if else statements istället

const Dashboard = (props: any) => {
  useEffect(() => {
    // get current profile is a Props
    console.log("use effffect");
    props.getCurrentProfile();
  }, []);

  // Glöm inte att ändra rad 27 till !== null!!! viktigt
  const auth = (
    <div>
      {props.profile.loading === true ? (
        <Spinner />
      ) : (
        <div>
        
          {props.profile.profile === null ? (
            <Fragment>
              <p className="lead">
                <i className="fas fa-user" /> Välkommen {props.auth.user.name}
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
      )}
    </div>
  );

  // if user is logged in load auth else redircet to login
  return (
    <div>
      <div>
        {props.auth.isAuthenticated === false ? (
          <Redirect to="/login" />
        ) : (
          <div>{auth}</div>
        )}
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
  { getCurrentProfile }
)(Dashboard);
