import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Fertilizercard from './Fertilizercard';


const Fertilizer = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://srv577826.hstgr.cloud:8002/api/v1/data/fertilizerfreedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container  mt-1">
      <div className="row">
        {users.map(user => (
          <Fertilizercard key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default Fertilizer;
