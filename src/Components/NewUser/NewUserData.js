import React from "react";
import Card from "../../UI/Card/Card";
import AddUserForm from "./AddUserForm";

const NewUserData = (props) => {
  // const [inputError, setInputError] = useState(false);

  const getUserData = (enteredUserData) => {
    if (
      enteredUserData.username.trim().length === 0 ||
      enteredUserData.age.trim().length === 0 ||
      !Number.isInteger(Number(enteredUserData.age)) ||
      enteredUserData.age <= 0
    ) {
      console.log('Input Error');
    } else {
      const userData = {
        ...enteredUserData,
        id: Math.random().toString(),
      };
      props.onAddUser(userData);
    }
  };

  return (
    <>
      <Card>
        <AddUserForm addUser={getUserData} />
      </Card>
    </>
  );
};

export default NewUserData;
