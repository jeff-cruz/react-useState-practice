import React from 'react';
import Card from '../../UI/Card/Card';
import AddUserForm from './AddUserForm';

const NewUserData = (props) => {

  const getUserData = (enteredUserData) => {
    const userData = {
      ...enteredUserData,
      id: Math.random().toString()
    };
    props.onAddUser(userData);
  }


  return (
    <Card>
      <AddUserForm addUser={getUserData} />
    </Card>
  );
}

export default NewUserData
