
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// // import Foodpocard from './Foodpocard';
// import Lightergascard from './Lightergascard';

// const  Lightergas = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     axios.get("http://srv577826.hstgr.cloud:8002/api/v1/data/lightergasfreedelivery")
//       .then(response => setUsers(response.data))
//       .catch(error => console.log(error));
//   }, []);

//   return (
//     <div className="container  mt-1">
//       <div className="row">
//         {users.map(user => (
//           <Lightergascard key={user._id} user={user} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Lightergas;
 

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardNew from '../../../../Cardsnew'; // Make sure the path is correct

const Pestcon = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://srv577826.hstgr.cloud:8002/api/v1/data/lightergasfreedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container mt-1">
      <div className="row">
        {users.map(user => (
          <CardNew key={user._id} user={user} baseUrl="/product/lightergas" />
        ))}
      </div>
    </div>
  );
}

export default Pestcon;