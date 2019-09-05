import React from 'react'
import Moment from "react-moment";

const ProfileEdu = (props: any) => {
  return (
    <div>
      <h3 className="text-dark">{props.edu.school}</h3>
      <p>
        <Moment format="YYYY/MM/DD">{props.edu.from}</Moment> - {!props.edu.to ? " Nu" : <Moment format="YYYY/MM/DD">{props.edu.to}</Moment>}
      </p>
      <p>
        <strong>Examen: </strong> {props.edu.degree}
      </p>
      <p>
        <strong>Område: </strong> {props.edu.fieldofstudy}
      </p>
      <p>
        <strong>Beskrivning: </strong> {props.edu.description}
      </p>
    </div>
  )
}

export default ProfileEdu;
