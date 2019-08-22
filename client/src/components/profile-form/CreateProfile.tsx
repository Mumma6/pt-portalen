import React, { useState, Fragment } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";

const CreateProfile: React.FC = (props: any) => {
  interface IInitialState {
    company: string;
    website: string;
    location: string;
    status: string;
    skills: string;
    bio: string;
    facebook: string;
    instagram: string;
    linkedin: string;
  }
  // set initstate here...
  const initialState = {
    company: "",
    website: "",
    location: "",
    status: "",
    skills: "",
    bio: "",
    facebook: "",
    instagram: "",
    linkedin: ""
  };

  // formdata stae
  const [formData, setFormData] = useState<IInitialState>(initialState);

  // display social state
  const [showSocialInputs, toggleSocialnputs] = useState(false);

  // Destructor formData
  const {
    company,
    website,
    location,
    status,
    skills,
    bio,
    facebook,
    instagram,
    linkedin
  } = formData;

  return (
    <div>
      {props.auth.isAuthenticated === false ? (
        <Redirect to="/login" />
      ) : (
        <div>
          <h1 className="large text-primary">Skapa din profil</h1>
          <p className="lead">
            <i className="fas fa-user" /> Få din profil att stå ut genom att fylla i alla fälten
          </p>
          <form className="form">
            <div className="form-group">
              <select name="status">
                <option value="0">Välj Professionell status</option>
                <option value="Developer">Personlig Tränare</option>
                <option value="Junior Developer">Kost Rådgivare</option>
                <option value="Senior Developer">Hälso Coach</option>
                <option value="Manager">Platschef</option>
                <option value="Student or Learning">Gruppträningsinstruktör</option>
                <option value="Instructor">Student</option>
                <option value="Intern">Löpcoach</option>
                <option value="Other">Annat</option>
              </select>
              <small className="form-text">
                Vad har du för yrkestitel
              </small>
            </div>
            <div className="form-group">
              <input type="text" placeholder="Företag" name="company" />
              <small className="form-text">
                Driver du ett eget företag eller är anställd någonstans
              </small>
            </div>
            <div className="form-group">
              <input type="text" placeholder="Hemsida" name="website" />
              <small className="form-text">
                Har du en egen hemsida? alternativ hemsidan på ditt företag som du är anställd på
              </small>
            </div>
            <div className="form-group">
              <input type="text" placeholder="Stad" name="location" />
              <small className="form-text">
                Vilken stad bor du i
              </small>
            </div>
            <div className="form-group">
              <input type="text" placeholder="Kunskaper" name="skills" />
              <small className="form-text">
                Använd ett komma mellan varje (eg. Styrka,Löpning,Kost,Ironman)
              </small>
            </div>
            
            <div className="form-group">
              <textarea placeholder="Beskrivning" name="bio" />
              <small className="form-text">
                Berätta lite om dig själv
              </small>
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
                    placeholder="Facebook URL"
                    name="facebook"
                  />
                </div>

                <div className="form-group social-input">
                  <i className="fab fa-youtube fa-2x" />
                  <input type="text" placeholder="YouTube URL" name="youtube" />
                </div>

                <div className="form-group social-input">
                  <i className="fab fa-linkedin fa-2x" />
                  <input
                    type="text"
                    placeholder="Linkedin URL"
                    name="linkedin"
                  />
                </div>

                <div className="form-group social-input">
                  <i className="fab fa-instagram fa-2x" />
                  <input
                    type="text"
                    placeholder="Instagram URL"
                    name="instagram"
                  />
                </div>
              </Fragment>
            )}

            <input type="submit" className="btn btn-primary my-1" />
            <a className="btn btn-light my-1" href="dashboard.html">
              Avbryt
            </a>
          </form>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  auth: state.auth
});

export default connect(mapStateToProps)(CreateProfile);
