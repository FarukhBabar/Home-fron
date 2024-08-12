
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Diytoolscard from './Diytoolscard';

// const  Diytoolspo = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     axios.get("https://api.homeessentialshive.co.uk/api/v1/data/diytoolsfreedelivery")
//       .then(response => setUsers(response.data))
//       .catch(error => console.log(error));
//   }, []);

//   return (
//     <div className="container  mt-1">
//       <div className="row">
//         {users.map(user => (
//           <Diytoolscard key={user._id} user={user} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Diytoolspo;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardNew from '../../../../Cardsnew'; // Make sure the path is correct

const Diytoolspo = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://api.homeessentialshive.co.uk/api/v1/data/diytoolsfreedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container mt-1">
      <div className="row">
        {users.map(user => (
          <CardNew key={user._id} user={user} baseUrl="/product/diytools" />
        ))}
      </div>
    </div>
  );
}

export default Diytoolspo;