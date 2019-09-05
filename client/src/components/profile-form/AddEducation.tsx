import React, { useState } from "react";
import { connect } from "react-redux";
import { addEducation, getCurrentProfile } from "../../actions/profile";
import { Link, withRouter } from "react-router-dom";

interface IEducation {
  school: string;
  degree: string;
  fieldofstudy: string;
  from: string;
  to: string;
  current: boolean;
  description: string;
}

const AddEducation = (props: any) => {
  const [formData, setFormData] = useState<IEducation >({
    school: "",
    degree: "",
    fieldofstudy: "",
    from: "",
    to: "",
    current: false,
    description: ""
  });

  const [toDateDisable, toggleDisable] = useState(false);

  const { school, degree, fieldofstudy, from, to, current, description } = formData;

  const onChange = (e: any) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  return (
    <div>
      <h1 className="large text-primary">Lägg till utbildning</h1>
      <p className="lead">
        <i className="fas fa-code-branch"></i> Lägg till dina utbildningar här. Skola eller kurser osv
      </p>
      <small>* = required field</small>
      <form className="form" onSubmit={(e: any) => {
        e.preventDefault()
        props.addEducation(formData);
        props.getCurrentProfile();
        props.history.push("/dashboard");
      }}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Skola"
            name="school"
            value={school}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="examen eller certificat"
            name="degree"
            value={degree}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Studieinriktning"
            name="fieldofstudy"
            value={fieldofstudy}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <h4>Från</h4>
          <input
            type="date"
            name="from"
            value={from}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <p>
            <input
              type="checkbox"
              name="current"
              checked={current}
              onChange={e => {
                setFormData({ ...formData, current: !current });
                toggleDisable(!toDateDisable);
              }}
            />{" "}
            Nyvarande utbildning
          </p>
        </div>
        <div className="form-group">
          <h4>To Date</h4>
          <input type="date" name="to" value={to} onChange={e => onChange(e)} />
        </div>
        <div className="form-group">
          <textarea
            name="description"
            cols={30}
            rows={5}
            placeholder="Utbildnings beskrivning"
            value={description}
            onChange={e => onChange(e)}
          ></textarea>
        </div>
        <input type="submit" className="btn btn-primary my-1" />
        <a className="btn btn-light my-1" href="dashboard.html">
          Backa
        </a>
      </form>
    </div>
  );
};

export default connect(
  null,
  { addEducation,
  getCurrentProfile }
)(withRouter(AddEducation));
