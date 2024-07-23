
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// // import Shoecard from './Shoecard';
// import Stationerycard from './Stationerycard';

// const  Stationerypo = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     axios.get("https://homeessential-fdca5e469865.herokuapp.com/api/v1/data/stationfreedelivery")
//       .then(response => setUsers(response.data))
//       .catch(error => console.log(error));
//   }, []);

//   return (
//     <div className="container  mt-1">
//       <div className="row">
//         {users.map(user => (
//           <Stationerycard key={user._id} user={user} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Stationerypo;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardNew from '../../../../Cardsnew'; // Make sure the path is correct

const Diytoolspo = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://homeessential-fdca5e469865.herokuapp.com/api/v1/data/stationfreedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container mt-1">
      <div className="row">
        {users.map(user => (
          <CardNew key={user._id} user={user} baseUrl="/product/stationery" />
        ))}
      </div>
    </div>
  );
}

export default Diytoolspo;