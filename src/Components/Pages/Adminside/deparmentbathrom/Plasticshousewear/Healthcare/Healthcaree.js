
// import React, { useState, useEffect } from 'react';
// import axios from 'axios'
// import Healthcareecard from './Healthcareecard';

// const Healthcaree = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     axios.get("http://srv577826.hstgr.cloud:8002/api/v1/data/healthcareefreedelivery")
//       .then(response => setUsers(response.data))
//       .catch(error => console.log(error));
//   }, []);

//   return (
//     <div className="container  mt-1">
//       <div className="row">
//         {users.map(user => (
//           <Healthcareecard key={user._id} user={user} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Healthcaree;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardNew from '../../../../../Cardsnew'; // Make sure the path is correct

const Healthcaree = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://srv577826.hstgr.cloud:8002/api/v1/data/healthcareefreedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container mt-1">
      <div className="row">
        {users.map(user => (
          <CardNew key={user._id} user={user} baseUrl="/healthcareesinglepage" />
        ))}
      </div>
    </div>
  );
}

export default Healthcaree;