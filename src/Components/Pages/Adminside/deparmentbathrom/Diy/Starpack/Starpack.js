
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Starpackcard from './Starpackcard';

const Starpack = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://api.homeessentialshive.co.uk/api/v1/data/starpackfreedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container  mt-1">
      <div className="row">
        {users.map(user => (
          <Starpackcard key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default  Starpack;
