import React from 'react';
import './AddUserForm.css';

const AddUserForm = () => {
  return (
    <form>
      <div className="new-user__controls">
        <div className="new-user__control">
          <label>Username</label>
          <input type="text" />
        </div>
        <div className="new-user__control">
          <label>Age (Years)</label>
          <input type="text" />
        </div>
      </div>
      <button className="new-user__button" type="button">Add User</button>
    </form>
  );
}

export default AddUserForm;
