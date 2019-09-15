import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import Spinner from "../../utils/Spinner";
import { getProfileID } from "../../actions/profile";
import { Link } from "react-router-dom";
import ProfileTop from "./ProfileTop";
import ProfileAbout from "./ProfileAbout";
import ProfileExp from "./ProfileExp";
import ProfileEdu from "./ProfileEdu";

const Profile = (props: any) => {
  useEffect(() => {
    props.getProfileID(props.match.params.id);
  }, []);

  if (props.profile.profile === null || props.profile.loading) {
    return <Spinner />;
  }

  return (
    <Fragment>
      <Fragment>
        <Link to="/profiles" className="btn btn-light">
          Tillbaka till profilerna
        </Link>
        {props.auth.isAuthenticated &&
          props.auth.loading === false &&
          props.auth.user._id === props.profile.profile.user._id && (
            <Link to="/edit-profile" className="btn btn-dark">
              Redigera din profil
            </Link>
          )}
        <div className="profile-grid my-1">
          <ProfileTop profile={props.profile} />
          <ProfileAbout profile={props.profile} />
          <div className="profile-exp bg-white p-2">
            <h2 className="text-primary">Erfarenheter</h2>
            {props.profile.profile.experience.length > 0 ? (
              <Fragment>
                {props.profile.profile.experience.map((exp: any) => (
                  <ProfileExp key={exp._id} exp={exp} />
                ))}
              </Fragment>
            ) : (
              <h4>Inga erfarenheter tillagda</h4>
            )}
          </div>

          <div className="profile-edu bg-white p-2">
            <h2 className="text-primary">Utbildning</h2>
            {props.profile.profile.education.length > 0 ? (
              <Fragment>
                {props.profile.profile.education.map((edu: any) => (
                  <ProfileEdu key={edu._id} edu={edu} />
                ))}
              </Fragment>
            ) : (
              <h4>Ingen utbildning tillagd</h4>
            )}
          </div>
        </div>
      </Fragment>
    </Fragment>
  );
};

const mapStateToProps = (state: any) => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getProfileID }
)(Profile);
