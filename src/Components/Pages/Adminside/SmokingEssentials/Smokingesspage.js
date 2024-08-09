
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Smokingesscrds from './Smokingesscrds';

// const  Smokingesspage = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     axios.get("http://srv577826.hstgr.cloud:8002/api/v1/data/Smokfreedelivery")
//       .then(response => setUsers(response.data))
//       .catch(error => console.log(error));
//   }, []);

//   return (
//     <div className="container  mt-1">
//       <div className="row">
//         {users.map(user => (
//           <Smokingesscrds key={user._id} user={user} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Smokingesspage;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardNew from '../../../Cardsnew'; // Make sure the path is correct

const Smokingesspage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://srv577826.hstgr.cloud:8002/api/v1/data/Smokfreedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container mt-1">
      <div className="row">
        {users.map(user => (
          <CardNew key={user._id} user={user} baseUrl="/product/essentional" />
        ))}
      </div>
    </div>
  );
}

export default Smokingesspage;