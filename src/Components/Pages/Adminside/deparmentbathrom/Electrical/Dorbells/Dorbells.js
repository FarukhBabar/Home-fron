
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Dorbellscard from './Dorbellscard';

const Dorbells = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://srv577826.hstgr.cloud:8002/api/v1/data/doorbeelsfreedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container  mt-1">
      <div className="row">
        {users.map(user => (
          <Dorbellscard key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default Dorbells;
