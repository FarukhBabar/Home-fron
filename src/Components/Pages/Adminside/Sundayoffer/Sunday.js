
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

const  FreeDelivery = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://homeessential-fdca5e469865.herokuapp.com/api/v1/data/freedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    // <div>
    //   <div className='container mb-4'>
    //     <div className='row'>
    //       {users.map(user => <Card key={user.id} user={user} />)}
    //     </div>
    //   </div>
   
    // </div>
    <div className="container  mt-1">
      <div className="row">
        {users.map(user => (
          <Card key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default  FreeDelivery;
