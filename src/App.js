import React from "react";
import NewUserData from "./Components/NewUser/NewUserData";

// const DUMMY_DATA = [
//   {
//     username: "Jeffrey",
//     age: 28,
//     id: 1,
//   },
// ];

const App = () => {
  // const [users, setUsers] = useState(DUMMY_DATA);

  // const addUserHandler = (user) => {
  //   setUsers((prevUsers) => {
  //     return [users, ...prevUsers];
  //   });
  // };

  return (
    <div>
      <NewUserData />
    </div>
  );
};

export default App;
