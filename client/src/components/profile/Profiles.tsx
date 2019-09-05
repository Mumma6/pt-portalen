import React, { Fragment, useEffect } from 'react'
import { connect } from "react-redux";
import Spinner from "../../utils/Spinner";
import { getProfiles } from "../../actions/profile";
import ProfileItem from "./ProfileItem";


const Profiles = (props: any) => {
  useEffect(() => {
    props.getProfiles()
  }, []);

  return (
    <Fragment>
      { props.profile.loading ? <Spinner /> : <Fragment>
        <h1 className="large text-primary">Tränare</h1>
        <p className="lead">
          <i className="fab fa-connectdevelop">Hitta din personliga tränare här</i>
        </p>
        <div className="profiles">
          {props.profile.profiles.length > 0 ? (
            props.profile.profiles.map((profile: any) => (
              <ProfileItem 
                key={profile._id} 
                profile={profile}
              /> 
            ))
          ) : <h3>Hittade inga profiler</h3> }
        </div>
      </Fragment> }
    </Fragment>
  )
}

const mapStateToProps = (state: any) => ({
  profile: state.profile
});

export default connect(mapStateToProps, { getProfiles })(Profiles)
