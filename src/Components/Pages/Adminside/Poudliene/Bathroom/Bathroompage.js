
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Bathroomcard from './Bathroomcards';

// const  Bathroompage = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     axios.get("https://api.homeessentialshive.co.uk/api/v1/data/bathfreedelivery")
//       .then(response => setUsers(response.data))
//       .catch(error => console.log(error));
//   }, []);

//   return (
//     <div className="container  mt-1">
//       <div className="row">
//         {users.map(user => (
//           <Bathroomcard key={user._id} user={user} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Bathroompage;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Palletcard from './Palletcards';

// const  FreeDelivery = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     axios.get("https://api.homeessentialshive.co.uk/api/v1/data/paletfreedelivery")
//       .then(response => setUsers(response.data))
//       .catch(error => console.log(error));
//   }, []);

//   return (
//     <div className="container  mt-1">
//       <div className="row">
//         {users.map(user => (
//           <Palletcard key={user._id} user={user} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default  FreeDelivery;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardNew from '../../../../Cardsnew'; // Make sure the path is correct

const Bathroompage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://api.homeessentialshive.co.uk/api/v1/data/bathfreedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container mt-1">
      <div className="row">
        {users.map(user => (
          <CardNew key={user._id} user={user} baseUrl="/product/bathroom" />
        ))}
      </div>
    </div>
  );
}

export default Bathroompage;