import React from "react";

const ProfileAbout = (props: any) => {
  return (
    <div className="profile-about bg-light p-2">
      {props.profile.profile.bio && (
        <div>
          <h2 className="text-primary">Om {props.profile.profile.user.name.trim().split(" ")[0]}</h2>
      <p>
        {props.profile.profile.bio}
      </p>
      <div className="line"></div>
        </div>
        
      )}


     
      <h2 className="text-primary">Kompetenser</h2>
      <div className="skills">
        {props.profile.profile.skills.map((skill: any, index: any) => (
          <div key={index} className="p-1">
            {skill.length === 0 ? null :  <i className="fas fa-check"></i>} {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileAbout;
