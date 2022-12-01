import React from 'react';
import Card from '../../UI/Card/Card';
import './UserList.css';
import SingleUserData from './singleUserData';

const UserList = (props) => {

  console.log('UserList props:', props.userData);
  return (
    <div>
      <Card>
        <ul>
          {props.users.map((user) => (
            <SingleUserData
              key={user.id}
              username={user.username}
              age={user.age}
            />
          ))}
        </ul>
      </Card>
    </div>
  );
}

export default UserList;
