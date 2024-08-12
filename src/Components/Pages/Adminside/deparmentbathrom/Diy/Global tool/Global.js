
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Globalcard from './Globalcard';

const Global = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://api.homeessentialshive.co.uk/api/v1/data/globalfreedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container  mt-1">
      <div className="row">
        {users.map(user => (
          <Globalcard key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default  Global;
