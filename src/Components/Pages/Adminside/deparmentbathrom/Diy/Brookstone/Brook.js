
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Brookcard from './Brookcard';

const Brook = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8001/api/v1/data/brookfreedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container  mt-1">
      <div className="row">
        {users.map(user => (
          <Brookcard key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default  Brook;
