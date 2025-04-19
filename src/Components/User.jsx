import React from "react";
import "./User.css";

const User = ({ user }) => {
  const { name, age, image } = user;

  return (
    <div className="user-card">
      <img src={image} alt="" />
      <h3>{name}</h3>
      <h6>Age: {age} years</h6>
    </div>
  );
};

export default User;
