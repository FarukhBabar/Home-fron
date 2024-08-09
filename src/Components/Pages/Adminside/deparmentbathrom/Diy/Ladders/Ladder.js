
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Laddercard from './Laddercard';

const Ladder = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://srv577826.hstgr.cloud:8002/api/v1/data/ladderfreedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container  mt-1">
      <div className="row">
        {users.map(user => (
          <Laddercard key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default  Ladder;


