import React, { useState } from "react";
import { connect } from "react-redux";
import { addExperience, getCurrentProfile } from "../../actions/profile";
import { Link, withRouter } from "react-router-dom";

interface IExperience {
  company: string;
  title: string;
  location: string;
  from: string;
  to: string;
  current: boolean;
  description: string;
}

const AddExperience = (props: any) => {
  const [formData, setFormData] = useState<IExperience>({
    company: "",
    title: "",
    location: "",
    from: "",
    to: "",
    current: false,
    description: ""
  });

  const [toDateDisable, toggleDisable] = useState(false);

  const { company, title, location, from, to, current, description } = formData;

  const onChange = (e: any) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  return (
    <div>
      <h1 className="large text-primary">Add An Experience</h1>
      <p className="lead">
        <i className="fas fa-code-branch"></i> Add any developer/programming
        positions that you have had in the past
      </p>
      <small>* = required field</small>
      <form className="form" onSubmit={(e: any) => {
        e.preventDefault()
        props.addExperience(formData);
        props.getCurrentProfile()
        props.history.push("/dashboard");
      }}>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Job Title"
            name="title"
            value={title}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Company"
            name="company"
            value={company}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Location"
            name="location"
            value={location}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <h4>From Date</h4>
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
            Current Job
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
            placeholder="Job Description"
            value={description}
            onChange={e => onChange(e)}
          ></textarea>
        </div>
        <input type="submit" className="btn btn-primary my-1" />
        <a className="btn btn-light my-1" href="dashboard.html">
          Go Back
        </a>
      </form>
    </div>
  );
};

export default connect(
  null,
  { addExperience,
  getCurrentProfile }
)(withRouter(AddExperience));
