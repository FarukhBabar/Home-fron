
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Tableauecard from './Tableauecard';

const Tableaue = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8001/api/v1/data/tableaufreedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container  mt-1">
      <div className="row">
        {users.map(user => (
          <Tableauecard key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default  Tableaue;
