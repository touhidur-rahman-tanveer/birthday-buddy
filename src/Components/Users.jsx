import React, { useEffect, useState } from "react";
import Data from "../data";
import User from "./User";
import "./User.css";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [showUser, setShowUser] = useState(true);
  useEffect(() => {
    setUsers(Data);
  }, []);
  const handleClearBtn = () => {
    setShowUser(!showUser);
  };
  return (
    <div>
      <div>
        <h1>
          {showUser
            ? "You Can See The Birthday Guys From Here !"
            : "The Birthday Guys Are Here!"}
        </h1>
      </div>
      <div className={showUser ? "test" : "container"}>
        {users.map((user) => (
          <User key={user.id} user={user}></User>
        ))}
      </div>

      <button onClick={handleClearBtn}>
        {showUser ? "Watch List" : "Hide List"}
      </button>
    </div>
  );
};

export default Users;
