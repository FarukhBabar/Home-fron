
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Loundryircards from './Loundryircards';

// const  Loundryiron = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     axios.get("http://srv577826.hstgr.cloud:8002/api/v1/data/londryironfreedelivery")
//       .then(response => setUsers(response.data))
//       .catch(error => console.log(error));
//   }, []);

//   return (
//     <div className="container  mt-1">
//       <div className="row">
//         {users.map(user => (
//           <Loundryircards key={user._id} user={user} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Loundryiron;
 

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardNew from '../../../../Cardsnew'; // Make sure the path is correct

const Pestcon = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://srv577826.hstgr.cloud:8002/api/v1/data/londryironfreedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container mt-1">
      <div className="row">
        {users.map(user => (
          <CardNew key={user._id} user={user} baseUrl="/product/loundryiron" />
        ))}
      </div>
    </div>
  );
}

export default Pestcon;