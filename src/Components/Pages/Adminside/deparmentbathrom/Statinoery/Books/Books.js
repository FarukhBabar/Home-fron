
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Bookscard from './Bookscard';

// const  Books = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     axios.get("https://homeessential-fdca5e469865.herokuapp.com/api/v1/data/booksfreedelivery")
//       .then(response => setUsers(response.data))
//       .catch(error => console.log(error));
//   }, []);

//   return (
//     <div className="container  mt-1">
//       <div className="row">
//         {users.map(user => (
//           <Bookscard key={user._id} user={user} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Books;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardNew from '../../../../../Cardsnew'; // Make sure the path is correct

const Books = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://homeessential-fdca5e469865.herokuapp.com/api/v1/data/booksfreedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container mt-1">
      <div className="row">
        {users.map(user => (
          <CardNew key={user._id} user={user} baseUrl="/product/books" />
        ))}
      </div>
    </div>
  );
}

export default Books;