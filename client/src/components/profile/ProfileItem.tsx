import React from "react";
import { Link } from "react-router-dom";

const ProfileItem = (props: any) => {
  const { user, status, company, location, skills } = props.profile;


  


  return (
    <div className="profile bg-light">
      <div>
        <h2>{user.name}</h2>
        <p>
          {status} {company && <span> på {company}</span>}
        </p>
        <p className="my-1">{location && <span>{location}</span>}</p>
        <Link to={`/profile/${user._id}`} className="btn btn-primary">
          Visa profil
        </Link>
      </div>
      
      <ul>
        
        {skills.slice(0, 5).map((skills: any, index: any) => (
          <li key={index} className="text-primary">
        {skills.length === 0 ? null : <i className="fas fa-check"></i>}{skills}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileItem;
