
// import React, { useState, useEffect } from 'react';
// import axios from 'axios'
// import Kitechenbincard from './Kitechenbincard';

// const Kitechenbin = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     axios.get("https://api.homeessentialshive.co.uk/api/v1/data/kitechenbinfreedelivery")
//       .then(response => setUsers(response.data))
//       .catch(error => console.log(error));
//   }, []);

//   return (
//     <div className="container  mt-1">
//       <div className="row">
//         {users.map(user => (
//           <Kitechenbincard key={user._id} user={user} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Kitechenbin;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardNew from '../../../../../Cardsnew'; // Make sure the path is correct

const Kitechenbin = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://api.homeessentialshive.co.uk/api/v1/data/kitechenbinfreedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container mt-1">
      <div className="row">
        {users.map(user => (
          <CardNew key={user._id} user={user} baseUrl="/product/kitechenbin" />
        ))}
      </div>
    </div>
  );
}

export default Kitechenbin;

