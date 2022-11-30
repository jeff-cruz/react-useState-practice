import React from 'react';
import './AddUserForm.css';

const AddUserForm = () => {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Username</label>
          <input type="text" />
        </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Age (Years)</label>
          <input type="text" />
        </div>
      </div>
      <button type="button">Add User</button>
    </form>
  );
}

export default AddUserForm;
