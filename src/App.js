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

  // function addUserHandler(data) {
  //   console.log('App.js data:', data);
  // }

  const addUserHandler = (data) => {
    console.log('App.js data:', data);
  }

  if(DUMMY_DATA.length === 0) {
    return <NewUserData />
  }

  return (
    <div>
      <NewUserData onAddUser={addUserHandler}/>
      <UserList users={DUMMY_DATA}/>
    </div>
  );
};

export default App;
