
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Officecard from './Officecard';

// const  Office = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     axios.get("https://homeessential-fdca5e469865.herokuapp.com/api/v1/data/officefreedelivery")
//       .then(response => setUsers(response.data))
//       .catch(error => console.log(error));
//   }, []);

//   return (
//     <div className="container  mt-1">
//       <div className="row">
//         {users.map(user => (
//           <Officecard key={user._id} user={user} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Office;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardNew from '../../../../../../Cardsnew'; // Make sure the path is correct

const Office = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://homeessential-fdca5e469865.herokuapp.com/api/v1/data/officefreedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container mt-1">
      <div className="row">
        {users.map(user => (
          <CardNew key={user._id} user={user} baseUrl="/office/homesinglepage" />
        ))}
      </div>
    </div>
  );
}

export default Office;