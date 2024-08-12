
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Metalbuckcards from './Metalbuckcard';

// const Metalbuck = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     axios.get("https://api.homeessentialshive.co.uk/api/v1/data/metalbuckfreedelivery")
//       .then(response => setUsers(response.data))
//       .catch(error => console.log(error));
//   }, []);

//   return (
//     <div className="container  mt-1">
//       <div className="row">
//         {users.map(user => (
//           <Metalbuckcards key={user._id} user={user} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Metalbuck;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardNew from '../../../../Cardsnew'; // Make sure the path is correct

const Metalbuck = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://api.homeessentialshive.co.uk/api/v1/data/metalbuckfreedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container mt-1">
      <div className="row">
        {users.map(user => (
          <CardNew key={user._id} user={user} baseUrl="/product/metalbuck" />
        ))}
      </div>
    </div>
  );
}

export default Metalbuck;


