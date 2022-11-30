import React from 'react';
import Card from '../../UI/Card/Card';
import AddUserForm from './AddUserForm';

const NewUserData = (props) => {

  const receivedUserData = () => {
    console.log('Added user to NewUserData:', props.onAddUser);
  }

  return (
    <Card>
      <AddUserForm onAddUser={receivedUserData}/>
    </Card>
  )
}

export default NewUserData
