
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Cottoncard from './Cottoncard'

// const Cotton = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     axios.get("https://api.homeessentialshive.co.uk/api/v1/data/cottonfreedelivery")
//       .then(response => setUsers(response.data))
//       .catch(error => console.log(error));
//   }, []);

//   return (
//     <div className="container  mt-1">
//       <div className="row">
//         {users.map(user => (
//           <Cottoncard key={user._id} user={user} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Cotton;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardNew from '../../../../../Cardsnew'; // Make sure the path is correct

const Cotton = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://api.homeessentialshive.co.uk/api/v1/data/cottonfreedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container mt-1">
      <div className="row">
        {users.map(user => (
          <CardNew key={user._id} user={user} baseUrl="/cottonsinglepage" />
        ))}
      </div>
    </div>
  );
}

export default Cotton;