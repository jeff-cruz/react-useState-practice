import React from 'react';
import Card from '../../UI/Card/Card';
import AddUserForm from './AddUserForm';

const NewUserData = () => {
  const getUserData = (data) => {
    console.log('Data coming from AddUserForm.js: ', data);
  }

  return (
    <Card>
      <AddUserForm onSubmit={getUserData} />
    </Card>
  );
}

export default NewUserData
