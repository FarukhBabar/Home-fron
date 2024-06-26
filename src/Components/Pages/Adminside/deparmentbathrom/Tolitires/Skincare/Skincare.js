
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Skincarecards from './Skincarecard';

const Skincare = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8001/api/v1/data/skincarefreedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container  mt-1">
      <div className="row">
        {users.map(user => (
          <Skincarecards key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default Skincare;
