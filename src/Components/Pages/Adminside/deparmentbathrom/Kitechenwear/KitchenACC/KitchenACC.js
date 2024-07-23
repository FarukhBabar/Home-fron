
// import React, { useState, useEffect } from 'react';
// import axios from 'axios'
// import KitchenACCcard from './KitchenACCcard';

// const  = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     axios.get("https://homeessential-fdca5e469865.herokuapp.com/api/v1/data/kitechenaccfreedelivery")
//       .then(response => setUsers(response.data))
//       .catch(error => console.log(error));
//   }, []);

//   return (
//     <div className="container  mt-1">
//       <div className="row">
//         {users.map(user => (
//           <KitchenACCcard key={user._id} user={user} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardNew from '../../../../../Cardsnew'; // Make sure the path is correct

const KitchenACC = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://homeessential-fdca5e469865.herokuapp.com/api/v1/data/kitechenaccfreedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container mt-1">
      <div className="row">
        {users.map(user => (
          <CardNew key={user._id} user={user} baseUrl="/kitechenaccsinglepage" />
        ))}
      </div>
    </div>
  );
}

export default KitchenACC;
