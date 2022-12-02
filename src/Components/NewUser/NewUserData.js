import React, { useState } from "react";
import Card from "../../UI/Card/Card";
import AddUserForm from "./AddUserForm";
import Modal from '../../UI/Modal/Modal';

const NewUserData = (props) => {
  const [inputError, setInputError] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const getUserData = (enteredUserData) => {
      if (
        enteredUserData.username.trim().length === 0 ||
        enteredUserData.age.trim().length === 0
      ) {
        setModalMessage("Please enter valid name and age (non-empty values).");
        setInputError(true);
      } else if (
        !Number.isInteger(Number(enteredUserData.age)) ||
        Number(enteredUserData.age) <= 0
      ) {
        setModalMessage("Please enter valid age.");
        setInputError(true);
      } else {
        const userData = {
        ...enteredUserData,
        id: Math.random().toString(),
      }
      props.onAddUser(userData);
    }
  }

  const closeModal = () => {
    setInputError(false);
  }

  return (
    <>
      {inputError && <Modal message={modalMessage} close={closeModal} />}
      <Card>
        <AddUserForm addUser={getUserData} />
      </Card>
    </>
  );
};

export default NewUserData;
