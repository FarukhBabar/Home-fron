
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Hotwatercards from './Hotwatercard';

// const Hotwaterr = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     axios.get("http://srv577826.hstgr.cloud:8001/api/v1/data/hotwaterfreedelivery")
//       .then(response => setUsers(response.data))
//       .catch(error => console.log(error));
//   }, []);

//   return (
//     <div className="container  mt-1">
//       <div className="row">
//         {users.map(user => (
//           <Hotwatercards key={user._id} user={user} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Hotwaterr;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardNew from '../../../../../Cardsnew'; // Make sure the path is correct

const Hotwaterr = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://srv577826.hstgr.cloud:8001/api/v1/data/hotwaterfreedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container mt-1">
      <div className="row">
        {users.map(user => (
          <CardNew key={user._id} user={user} baseUrl="/product/hotwaterr" />
        ))}
      </div>
    </div>
  );
}

export default Hotwaterr;