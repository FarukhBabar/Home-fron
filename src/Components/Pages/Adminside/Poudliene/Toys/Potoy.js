
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Potoyscard from './Potoyscard';

// const  Potoy = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     axios.get("https://homeessential-fdca5e469865.herokuapp.com/api/v1/data/potoyfreedelivery")
//       .then(response => setUsers(response.data))
//       .catch(error => console.log(error));
//   }, []);

//   return (
//     <div className="container  mt-1">
//       <div className="row">
//         {users.map(user => (
//           <Potoyscard key={user._id} user={user} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Potoy;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardNew from '../../../../Cardsnew'; // Make sure the path is correct

const Potoy = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://homeessential-fdca5e469865.herokuapp.com/api/v1/data/potoyfreedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container mt-1">
      <div className="row">
        {users.map(user => (
          <CardNew key={user._id} user={user} baseUrl="/product/potoy" />
        ))}
      </div>
    </div>
  );
}

export default Potoy;
