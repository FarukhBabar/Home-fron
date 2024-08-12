
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Furniturecards from './Furniturecards';


const Furniture = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://srv577826.hstgr.cloud:8001/api/v1/data/furniturefreedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container  mt-1">
      <div className="row">
        {users.map(user => (
          <Furniturecards key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default Furniture;
 