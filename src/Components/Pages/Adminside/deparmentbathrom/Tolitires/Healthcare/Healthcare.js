
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Healthcarecards from './Healthcarecard';

const Healthcare = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://homeessential-fdca5e469865.herokuapp.com/api/v1/data/healthfreedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container  mt-1">
      <div className="row">
        {users.map(user => (
          <Healthcarecards key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default Healthcare;
