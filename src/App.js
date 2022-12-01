import React, { useState } from "react";
import NewUserData from "./Components/NewUser/NewUserData";
import UserList from "./Components/Users/UserList";

const DUMMY_DATA = [
  // {
  //   username: "Jeffrey",
  //   age: 28,
  //   id: 1,
  // },
  // {
  //   username: "Sway",
  //   age: 40,
  //   id: 2,
  // },
  // {
  //   username: "Jimmy",
  //   age: 54,
  //   id: 3,
  // },
];

const App = () => {
  const [users, setUsers] = useState(DUMMY_DATA);
  const [zeroUsers, setZeroUsers] = useState(true);

  const addUserHandler = (data) => {
    setUsers((prevUsers) => {
      return [data, ...prevUsers];
    })
    setZeroUsers(false);
  }

  if(zeroUsers === true) {
    return <NewUserData onAddUser={addUserHandler}/>;
  }

  return (
    <div>
      <NewUserData onAddUser={addUserHandler}/>
      <UserList users={users}/>
    </div>
  );
};

export default App;
