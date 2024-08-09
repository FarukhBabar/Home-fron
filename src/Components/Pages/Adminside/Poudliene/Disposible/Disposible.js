
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Disposiblecards from './Disposiblecards';

// const  Disposible = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     axios.get("http://srv577826.hstgr.cloud:8002/api/v1/data/disposiblfreedelivery")
//       .then(response => setUsers(response.data))
//       .catch(error => console.log(error));
//   }, []);

//   return (
//     <div className="container  mt-1">
//       <div className="row">
//         {users.map(user => (
//           <Disposiblecards key={user._id} user={user} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Disposible;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardNew from '../../../../Cardsnew'; // Make sure the path is correct

const Disposible = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://srv577826.hstgr.cloud:8002/api/v1/data/disposiblfreedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container mt-1">
      <div className="row">
        {users.map(user => (
          <CardNew key={user._id} user={user} baseUrl="/product/disposiblepo" />
        ))}
      </div>
    </div>
  );
}

export default Disposible;