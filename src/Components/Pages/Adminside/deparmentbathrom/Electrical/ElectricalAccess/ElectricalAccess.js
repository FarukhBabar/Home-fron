

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ElectricalAccesscard from './ElectricalAccesscard';

const ElectricalAccess = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://api.homeessentialshive.co.uk/api/v1/data/eleaccessoriesfreedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container  mt-1">
      <div className="row">
        {users.map(user => (
          <ElectricalAccesscard key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default ElectricalAccess;
