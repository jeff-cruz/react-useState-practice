import React from 'react';
import Card from './UI/Card/Card';
import AddUserForm from './Components/NewUser/AddUserForm';


const App = () => {
  return (
    <div>
      <Card>
        <AddUserForm />
      </Card>
    </div>
  );
}

export default App;
