import React from "react";
import { connect } from "react-redux";
import Moment from "react-moment";

const Experience = (props: any) => {
  const experiences = props.experience.map((exp: any) => (
    <tr key={exp._id}>
      <td>{exp.company}</td>
      <td className="hide-sm">{exp.title}</td>
      <td>
        <Moment format="YYYY/MM/DD">{exp.from}</Moment> -{" "}
        {exp.to === null ? (
          " Nuvarande"
        ) : (
          <Moment format="YYYY/MM/DD">{exp.to}</Moment>
        )}
      </td>
      <td>
        <button className="btn btn-danger">Delete</button>
      </td>
    </tr>
  ));

  return (
    <div>
      <h2 className="my-2">Erfarenheter</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Företag</th>
            <th className="hide-sm">Titel</th>
            <th className="hide-sm">År</th>
            <th className="hide-sm"></th>
          </tr>
        </thead>
        <tbody>{experiences}</tbody>
      </table>
    </div>
  );
};

export default Experience;
