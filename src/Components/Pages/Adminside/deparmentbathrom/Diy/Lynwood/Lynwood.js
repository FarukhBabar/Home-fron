
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Lynwoodcard from './Lynwoodcard';

const Lynwood = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://api.homeessentialshive.co.uk/api/v1/data/lynwoodfreedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container  mt-1">
      <div className="row">
        {users.map(user => (
          <Lynwoodcard key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default  Lynwood;

