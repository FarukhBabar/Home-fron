
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// import Kitchenwarepocards from './Kitchenwarepocards';

// const  Kitchenwarepo = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     axios.get("http://srv577826.hstgr.cloud:8002/api/v1/data/kitchenpoundfreedelivery")
//       .then(response => setUsers(response.data))
//       .catch(error => console.log(error));
//   }, []);

//   return (
//     <div className="container  mt-1">
//       <div className="row">
//         {users.map(user => (
//           <Kitchenwarepocards key={user._id} user={user} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Kitchenwarepo;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardNew from '../../../../Cardsnew'; // Make sure the path is correct

const Pestcon = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://srv577826.hstgr.cloud:8002/api/v1/data/kitchenpoundfreedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container mt-1">
      <div className="row">
        {users.map(user => (
          <CardNew key={user._id} user={user} baseUrl="/product/kitchenwearpound" />
        ))}
      </div>
    </div>
  );
}

export default Pestcon;