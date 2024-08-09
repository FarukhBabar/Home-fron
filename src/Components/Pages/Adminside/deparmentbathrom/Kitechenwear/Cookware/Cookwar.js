
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Cookwecard from './Cookwecard';

const Cookwar = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://srv577826.hstgr.cloud:8002/api/v1/data/cookwarfreedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container  mt-1">
      <div className="row">
        {users.map(user => (
          <Cookwecard key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default Cookwar;
