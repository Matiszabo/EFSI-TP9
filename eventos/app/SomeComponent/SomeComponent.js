import React, { useContext } from 'react';
import { UserContext } from '../Components/UserContext/UserContext';

const SomeComponent = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      {user ? (
        <h1>Bienvenido, {user.first_name} {user.last_name}!</h1>
      ) : null}
    </div>
  );
};

export default SomeComponent;

