import React from "react";

const ProfileComponent = () => {


  const userProfile = {
    name: "Sania Firdose",
    email: "saniafirdose.cse@gmail.com",
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Profile</h1>
      <p>
        <strong>Name:</strong> {userProfile.name}
      </p>
      <p>
        <strong>Email:</strong> {userProfile.email}
      </p>
    </div>
  );
};

export default ProfileComponent;
