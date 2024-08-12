
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Mouthwashcards from './Mouthwashcard';

// const Mouthwash = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     axios.get("https://api.homeessentialshive.co.uk/api/v1/data/mouthfreedelivery")
//       .then(response => setUsers(response.data))
//       .catch(error => console.log(error));
//   }, []);

//   return (
//     <div className="container  mt-1">
//       <div className="row">
//         {users.map(user => (
//           <Mouthwashcards key={user._id} user={user} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Mouthwash;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardNew from '../../../../../Cardsnew'; // Make sure the path is correct

const Mouthwash = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://api.homeessentialshive.co.uk/api/v1/data/mouthfreedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container mt-1">
      <div className="row">
        {users.map(user => (
          <CardNew key={user._id} user={user} baseUrl="/mouthwashsinglepage" />
        ))}
      </div>
    </div>
  );
}

export default Mouthwash;