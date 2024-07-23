
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Carpocard from './Carpocard';

// const   Carpo = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     axios.get("https://homeessential-fdca5e469865.herokuapp.com/api/v1/data/carpofreedelivery")
//       .then(response => setUsers(response.data))
//       .catch(error => console.log(error));
//   }, []);

//   return (
//     <div className="container  mt-1">
//       <div className="row">
//         {users.map(user => (
//           <Carpocard key={user._id} user={user} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Carpo;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardNew from '../../../../Cardsnew'; // Make sure the path is correct

const Carpo = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://homeessential-fdca5e469865.herokuapp.com/api/v1/data/carpofreedelivery")
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

export default Carpo;