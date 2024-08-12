
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Bouquetcard from './Bouquetcard';

const Bouquet = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://api.homeessentialshive.co.uk/api/v1/data/bouquetfreedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container  mt-1">
      <div className="row">
        {users.map(user => (
          <Bouquetcard key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default Bouquet;
