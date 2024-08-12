
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Shortagecard from './Shortagecard';

const Shortage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://srv577826.hstgr.cloud:8001/api/v1/data/shortagefreedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container  mt-1">
      <div className="row">
        {users.map(user => (
          <Shortagecard key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default  Shortage;
