// hela staten uppdateras även ifall jag bara ändrar en grej...... vilket gör att vissa saker försvinner


import React, { useState, Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router";
import { Link } from "react-router-dom";
import { createProfile, getCurrentProfile } from "../../actions/profile";

const EditProfile: React.FC = (props: any) => {
  interface IInitialState {
    company: string;
    email: string;
    website: string;
    location: string;
    status: string;
    skills: string;
    bio: string;
    facebook: string;
    instagram: string;
    linkedin: string;
    youtube: string;
    job: string;
  }
  // set initstate here...
  const initialState = {
    company: "",
    email: "",
    website: "",
    location: "",
    status: "",
    skills: "",
    bio: "",
    facebook: "",
    instagram: "",
    linkedin: "",
    youtube: "",
    job: ""
  };

  // formdata stae
  const [formData, setFormData] = useState<IInitialState>(initialState);

  // display social state
  const [showSocialInputs, toggleSocialnputs] = useState(false);

  const { loading, profile } = props.profile;
  useEffect(() => {
    props.getCurrentProfile();

    setFormData({
      company: loading || !profile.company ? "" : profile.company,
      email: loading || !profile.email ? "" : profile.email,
      website: loading || !profile.website ? "" : profile.website,
      location: loading || !profile.location ? "" : profile.location,
      status: loading || !profile.status ? "" : profile.status,
      skills: loading || !profile.skills ? "" : profile.skills.join(" "),
      bio: loading || !profile.bio ? "" : profile.bio,
      facebook: loading || !profile.facebook ? "" : profile.facebook,
      instagram: loading || !profile.instagram ? "" : profile.instagram,
      linkedin: loading || !profile.linkedin ? "" : profile.linkedin,
      youtube: loading || !profile.youtube ? "" : profile.youtube,
      job: loading || !profile.job ? "" : profile.job
    });
  }, [loading]);

  // Destructor formData
  const {
    company,
    email,
    website,
    location,
    status,
    skills,
    bio,
    facebook,
    instagram,
    linkedin,
    youtube,
    job
  } = formData;

  const onChange = (e: any) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e: any) => {
    e.preventDefault();

    props.createProfile(formData);

    props.history.push("/dashboard");
  };

  return (
    <div>
      {props.auth.isAuthenticated === false ? (
        <Redirect to="/login" />
      ) : (
        <div>
          <h1 className="large text-primary">Redigera din profil</h1>
          <p className="lead">
            <i className="fas fa-user" /> Få din profil att stå ut genom att
            fylla i alla fälten
          </p>
          <form className="form">
            <div className="form-group">
              <select
                name="status"
                value={status}
                onChange={(e: any) => onChange(e)}
              >
                <option value="0">Välj ur listan</option>
                <option value="Personlig Tränare">Personlig Tränare</option>
                <option value="Kostrådgivare">Kostrådgivare</option>
                <option value="Hälsocoach">Hälsocoach</option>
                <option value="Platschef">Platschef</option>
                <option value="Gruppträningsinstruktör">
                  Gruppträningsinstruktör
                </option>
                <option value="Student">Student</option>
                <option value="Annat">Annat</option>
              </select>
              <small className="form-text">Vad har du för yrkestitel</small>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Email"
                name="email"
                value={email}
                onChange={(e: any) => onChange(e)}
              />
              <small className="form-text">Vad är din email adress</small>
            </div>  
            <div className="form-group">
              <input
                type="text"
                placeholder="Företag"
                name="company"
                value={company}
                onChange={(e: any) => onChange(e)}
              />
              <small className="form-text">
                Driver du ett eget företag eller är anställd någonstans
              </small>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Hemsida"
                name="website"
                value={website}
                onChange={(e: any) => onChange(e)}
              />
              <small className="form-text">
                Har du en egen hemsida? alternativ hemsidan på ditt företag som
                du är anställd på
              </small>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Stad"
                name="location"
                value={location}
                onChange={(e: any) => onChange(e)}
              />
              <small className="form-text">Vilken stad bor du i</small>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Kunskaper"
                name="skills"
                value={skills}
                onChange={(e: any) => onChange(e)}
              />
              <small className="form-text">
              Ange upp till 5 spets kompetenser
              </small>
            </div>

            <div className="form-group">
              <textarea
                placeholder="Beskrivning"
                name="bio"
                value={bio}
                onChange={(e: any) => onChange(e)}
              />
              <small className="form-text">Berätta lite om dig själv</small>
            </div>


            <div className="my-2">
              <button
                onClick={() => toggleSocialnputs(!showSocialInputs)}
                type="button"
                className="btn btn-light"
              >
                Lägg till sociala plattformar
              </button>
              <span>valfritt</span>
            </div>

            {showSocialInputs && (
              <Fragment>
                <div className="form-group social-input">
                  <i className="fab fa-facebook fa-2x" />
                  <input
                    type="text"
                    placeholder={
                      facebook
                        ? `${facebook}`
                        : "Facebook URL"
                    }
                    name="facebook"
                    value={facebook}
                    onChange={(e: any) => onChange(e)}
                  />
                </div>

                <div className="form-group social-input">
                  <i className="fab fa-youtube fa-2x" />
                  <input
                    type="text"
                    placeholder={
                      youtube
                        ? `${youtube}`
                        : "Youtube URL"
                    }
                    name="youtube"
                    value={youtube}
                    onChange={(e: any) => onChange(e)}
                  />
                </div>

                <div className="form-group social-input">
                  <i className="fab fa-linkedin fa-2x" />
                  <input
                    type="text"
                    placeholder={
                      linkedin
                        ? `${linkedin}`
                        : "Linkedin URL"
                    }
                    name="linkedin"
                    value={linkedin}
                    onChange={(e: any) => onChange(e)}
                  />
                </div>

                <div className="form-group social-input">
                  <i className="fab fa-instagram fa-2x" />
                  <input
                    type="text"
                    placeholder={
                      instagram
                        ? `${instagram}`
                        : "Instagram URL"
                    }
                    name="instagram"
                    value={instagram}
                    onChange={(e: any) => onChange(e)}
                  />
                </div>
              </Fragment>
            )}

            <Link to="/dashboard">
              <input
                type="submit"
                onClick={e => onSubmit(e)}
                className="btn btn-primary my-1"
              ></input>
            </Link>
            <Link to="/dashboard" className="btn btn-light my-1">
              Avbryt
            </Link>
          </form>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { createProfile, getCurrentProfile }
)(withRouter(EditProfile));
