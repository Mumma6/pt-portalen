import React, { useState, Fragment } from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router";
import { Link } from "react-router-dom";
import { createProfile } from "../../actions/profile";

const CreateProfile: React.FC = (props: any) => {
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
          <h1 className="large text-primary">Skapa din profil</h1>
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
                Hemsidan måste anges i formatet www.hemsida.com
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

            <div></div>

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
                    placeholder="Facebook URL"
                    name="facebook"
                    value={facebook}
                    onChange={(e: any) => onChange(e)}
                  />
                </div>

                <div className="form-group social-input">
                  <i className="fab fa-youtube fa-2x" />
                  <input
                    type="text"
                    placeholder="YouTube URL"
                    name="youtube"
                    value={youtube}
                    onChange={(e: any) => onChange(e)}
                  />
                </div>

                <div className="form-group social-input">
                  <i className="fab fa-linkedin fa-2x" />
                  <input
                    type="text"
                    placeholder="Linkedin URL"
                    name="linkedin"
                    value={linkedin}
                    onChange={(e: any) => onChange(e)}
                  />
                </div>

                <div className="form-group social-input">
                  <i className="fab fa-instagram fa-2x" />
                  <input
                    type="text"
                    placeholder="Instagram URL"
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
              />
            </Link>
            <a className="btn btn-light my-1">Avbryt</a>
          </form>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { createProfile }
)(withRouter(CreateProfile));
