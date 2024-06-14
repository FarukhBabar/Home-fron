
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Hilkacard from './Hilkacard';

const Hilka = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8001/api/v1/data/hilkafreedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container  mt-1">
      <div className="row">
        {users.map(user => (
          <Hilkacard key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default  Hilka;
