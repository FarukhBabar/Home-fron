
import React, { useState, useEffect } from 'react';
import axios from 'axios'

import Dektoncard from './Dektoncard';

const Dekton = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://srv577826.hstgr.cloud:8001/api/v1/data/dektonfreedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container  mt-1">
      <div className="row">
        {users.map(user => (
          <Dektoncard key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default  Dekton;
