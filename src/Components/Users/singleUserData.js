import React from 'react';
import './singleUserData.css';

const SingleUserData = (props) => {
  return (
    <li>
      <span>{props.username} ({props.age} years old)</span>
    </li>
  );
}

export default SingleUserData;
