
import React, { useState, useEffect } from 'react';
import axios from 'axios'
// import Barrettinecard from './Barrettinecard';
import Bartolincard from './Bartolincard';

const Bartolin = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://api.homeessentialshive.co.uk/api/v1/data/bartolinfreedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container  mt-1">
      <div className="row">
        {users.map(user => (
          <Bartolincard key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default  Bartolin;
