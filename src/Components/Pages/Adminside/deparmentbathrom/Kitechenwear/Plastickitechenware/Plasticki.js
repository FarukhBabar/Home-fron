
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Plastickicard from './Plastickicard';

const Plasticki = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8001/api/v1/data/plastickitechenfreedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container  mt-1">
      <div className="row">
        {users.map(user => (
          <Plastickicard key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default Plasticki;
 