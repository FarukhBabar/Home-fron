
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Haircards from './Haircard';

const Hair = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8001/api/v1/data/hairfreedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container  mt-1">
      <div className="row">
        {users.map(user => (
          <Haircards key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default Hair;
