
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Househldprcard from './Househldprcard';

const  Househldpr = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8001/api/v1/data/householdprfreedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container  mt-1">
      <div className="row">
        {users.map(user => (
          <Househldprcard key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default Househldpr;
 