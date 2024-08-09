
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Crystalcard from './Crystalcard';


const Crystal = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://srv577826.hstgr.cloud:8002/api/v1/data/crystalfreedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container  mt-1">
      <div className="row">
        {users.map(user => (
          <Crystalcard key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default Crystal;
