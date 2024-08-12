
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Sanitarycards from './Sanitarycard';

// const Sanitary = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     axios.get("https://api.homeessentialshive.co.uk/api/v1/data/sanitaryfreedelivery")
//       .then(response => setUsers(response.data))
//       .catch(error => console.log(error));
//   }, []);

//   return (
//     <div className="container  mt-1">
//       <div className="row">
//         {users.map(user => (
//           <Sanitarycards key={user._id} user={user} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Sanitary;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardNew from '../../../../../Cardsnew'; // Make sure the path is correct

const Sanitary = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://api.homeessentialshive.co.uk/api/v1/data/sanitaryfreedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container mt-1">
      <div className="row">
        {users.map(user => (
          <CardNew key={user._id} user={user} baseUrl="/sanitarysinglepage" />
        ))}
      </div>
    </div>
  );
}

export default Sanitary;