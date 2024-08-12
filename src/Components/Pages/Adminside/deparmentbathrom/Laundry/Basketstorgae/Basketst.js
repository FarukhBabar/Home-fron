
// import React, { useState, useEffect } from 'react';
// import axios from 'axios'
// // import Bagscard from './Bagscard';
// import Basketstcard from './Basketstcard';

// const Basketst = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     axios.get("http://srv577826.hstgr.cloud:8001/api/v1/data/bascktfreedelivery")
//       .then(response => setUsers(response.data))
//       .catch(error => console.log(error));
//   }, []);

//   return (
//     <div className="container  mt-1">
//       <div className="row">
//         {users.map(user => (
//           <Basketstcard key={user._id} user={user} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default  Basketst;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardNew from '../../../../../Cardsnew'; // Make sure the path is correct

const Basketst = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://srv577826.hstgr.cloud:8001/api/v1/data/bascktfreedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container mt-1">
      <div className="row">
        {users.map(user => (
          <CardNew key={user._id} user={user} baseUrl="/product/bascketst" />
        ))}
      </div>
    </div>
  );
}

export default Basketst;


