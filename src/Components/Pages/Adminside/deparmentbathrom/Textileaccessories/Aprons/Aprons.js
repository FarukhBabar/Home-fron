
// import React, { useState, useEffect } from 'react';
// import axios from 'axios'
// import Apronscards from './Apronscards';

// const  Aprons = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     axios.get("https://homeessential-fdca5e469865.herokuapp.com/api/v1/data/Apronsfreedelivery")
//       .then(response => setUsers(response.data))
//       .catch(error => console.log(error));
//   }, []);

//   return (
//     <div className="container  mt-1">
//       <div className="row">
//         {users.map(user => (
//           <Apronscards key={user._id} user={user} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Aprons;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardNew from '../../../../../Cardsnew'; // Make sure the path is correct

const Aprons = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://homeessential-fdca5e469865.herokuapp.com/api/v1/data/Apronsfreedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container mt-1">
      <div className="row">
        {users.map(user => (
          <CardNew key={user._id} user={user} baseUrl="/product/aprons" />
        ))}
      </div>
    </div>
  );
}

export default Aprons;