
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Glasstablewarecard from './Glasstablewarecard';


const Glasstableware = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://srv577826.hstgr.cloud:8001/api/v1/data/glasstumblerfreedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container  mt-1">
      <div className="row">
        {users.map(user => (
          <Glasstablewarecard key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default Glasstableware;
