
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DrinkingGlasscards from './DrinkingGlasscard';

const DrinkingGlass = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://homeessential-fdca5e469865.herokuapp.com/api/v1/data/drinkingglassfreedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container  mt-1">
      <div className="row">
        {users.map(user => (
          <DrinkingGlasscards key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default DrinkingGlass;
