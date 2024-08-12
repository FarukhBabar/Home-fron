
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Clockcards from './Clockcards';

const Clock = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://api.homeessentialshive.co.uk/api/v1/data/Clockfreedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container  mt-1">
      <div className="row">
        {users.map(user => (
          <Clockcards key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default  Clock;
