
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Towelaccesscards from '../../Textileaccessories/Towel&accessories/Towelaccesscard';

// const Towelssport = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     axios.get("http://srv577826.hstgr.cloud:8001/api/v1/data/umbrellafreedelivery")
//       .then(response => setUsers(response.data))
//       .catch(error => console.log(error));
//   }, []);

//   return (
//     <div className="container  mt-1">
//       <div className="row">
//         {users.map(user => (
//           <Towelaccesscards key={user._id} user={user} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Towelssport;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardNew from '../../../../../Cardsnew'; // Make sure the path is correct

const Towelssport = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://srv577826.hstgr.cloud:8001/api/v1/data/umbrellafreedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container mt-1">
      <div className="row">
        {users.map(user => (
          <CardNew key={user._id} user={user} baseUrl="/product/umbrella" />
        ))}
      </div>
    </div>
  );
}

export default Towelssport;