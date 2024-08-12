
// import React, { useState, useEffect } from 'react';
// import axios from 'axios'
// import Kidsplascard from './Kidsplascard';

// const Kidsplas = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     axios.get("http://srv577826.hstgr.cloud:8001/api/v1/data/kidsplasfreedelivery")
//       .then(response => setUsers(response.data))
//       .catch(error => console.log(error));
//   }, []);

//   return (
//     <div className="container  mt-1">
//       <div className="row">
//         {users.map(user => (
//           <Kidsplascard key={user._id} user={user} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Kidsplas;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardNew from '../../../../../Cardsnew'; // Make sure the path is correct

const Kidsplas = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://srv577826.hstgr.cloud:8001/api/v1/data/kidsplasfreedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container mt-1">
      <div className="row">
        {users.map(user => (
          <CardNew key={user._id} user={user} baseUrl="/kidsplassinglepage" />
        ))}
      </div>
    </div>
  );
}

export default Kidsplas;
