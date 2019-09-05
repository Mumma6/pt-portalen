import React from "react";
import { connect } from "react-redux";
import Moment from "react-moment";
import { deleteEducation } from "../../actions/profile";

const Education = (props: any) => {
  const educations = props.education.map((edu: any) => (
    <tr key={edu._id}>
      <td>{edu.school}</td>
      <td className="hide-sm">{edu.degree}</td>
      <td>
        <Moment format="YYYY/MM/DD">{edu.from}</Moment> -{" "}
        {edu.to === null ? (
          " Nuvarande"
        ) : (
          <Moment format="YYYY/MM/DD">{edu.to}</Moment>
        )}
      </td>
      <td>
        <button onClick={() => props.deleteEducation(props.edu_id)} className="btn btn-danger">Delete</button>
      </td>
    </tr>
  ));

  return (
    <div>
      <h2 className="my-2">Utbildningar</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Skola</th>
            <th className="hide-sm">Betyg</th>
            <th className="hide-sm">År</th>
            <th className="hide-sm"></th>
          </tr>
        </thead>
        <tbody>{educations}</tbody>
      </table>
    </div>
  );
};

export default connect(null, { deleteEducation })(Education) ;
