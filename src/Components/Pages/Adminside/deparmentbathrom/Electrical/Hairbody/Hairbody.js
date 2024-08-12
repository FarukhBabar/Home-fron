

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Hairbodycard from './Hairbodycard';

const Hairbody = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://api.homeessentialshive.co.uk/api/v1/data/hairbodyfreedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container  mt-1">
      <div className="row">
        {users.map(user => (
          <Hairbodycard key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default Hairbody;
