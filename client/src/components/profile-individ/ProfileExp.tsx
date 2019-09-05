import React from 'react'
import Moment from "react-moment";

const ProfileExp = (props: any) => {
  return (
    <div>
      <h3 className="text-dark">{props.exp.company}</h3>
      <p>
        <Moment format="YYYY/MM/DD">{props.exp.from}</Moment> - {!props.exp.to ? " Nu" : <Moment format="YYYY/MM/DD">{props.exp.to}</Moment>}
      </p>
      <p>
        <strong>Titel: </strong> {props.exp.title}
      </p>
      <p>
        <strong>Beskrivning: </strong> {props.exp.description}
      </p>
    </div>
  )
}

export default ProfileExp
