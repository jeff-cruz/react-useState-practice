import React, { useState } from "react";
import "./AddUserForm.css";

const AddUserForm = () => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const userData = {
      username: enteredUsername,
      age: enteredAge
    }

    console.log('Entered userData:', userData);
    setEnteredUsername('');
    setEnteredAge('');
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-user__controls">
        <div className="new-user__control">
          <label>Username</label>
          <input
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
        </div>
        <div className="new-user__control">
          <label>Age (Years)</label>
          <input type="text" value={enteredAge} onChange={ageChangeHandler} />
        </div>
      </div>
      <button className="new-user__button" type="submit" >
        Add User
      </button>
    </form>
  );
};

export default AddUserForm;
