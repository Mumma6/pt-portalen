import React from "react";

// här ska img in

const ProfileTop = (props: any) => {
  const { status, company, website, social, location, email } = props.profile.profile;
  return (
    <div className="profile-top bg-primary p-2">
      <h1 className="large">{props.profile.profile.user.name}</h1>
      <p className="lead">
        {status} på {company && <span>{company}</span>}
      </p>
      <p>{location && <span>{location}</span>}</p>
      <p>{location && <span>{email}</span>}</p>
      <div className="icons my-1">
        {website && (
          <a
            href={`https://${website}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-globe fa-2x"></i>
          </a>
        )}

        {social && social.facebook && (
          <a href={social.facebook} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook fa-2x"></i>
          </a>
        )}

        {social && social.linkedin && (
          <a href={social.linkedin} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
        )}

        {social && social.youtube && (
          <a href={social.youtube} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube fa-2x"></i>
          </a>
        )}

        {social && social.instagram && (
          <a href={social.instagram} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram fa-2x"></i>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProfileTop;
