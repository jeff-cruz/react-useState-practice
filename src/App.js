import React, { useState } from "react";
import NewUserData from "./Components/NewUser/NewUserData";
import UserList from "./Components/Users/UserList";
import Modal from "./UI/Modal/Modal";

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
  const [noUsers, setNoUsers] = useState(true);

  const addUserHandler = (data) => {
    setUsers((prevUsers) => {
      return [data, ...prevUsers];
    });
    setNoUsers(false);
  };

  if (noUsers === true) {
    return (
      <div>
        <Modal />
        <NewUserData onAddUser={addUserHandler} />;
      </div>
    );
  }

  return (
    <div>
      <NewUserData onAddUser={addUserHandler} />
      <UserList users={users} />
    </div>
  );
};

export default App;
