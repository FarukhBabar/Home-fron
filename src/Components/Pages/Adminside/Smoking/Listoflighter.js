// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Modal, Button, Table, Container } from 'react-bootstrap';
// import '../admin.css';

// const Listoflighter = () => {
//   const [user, setUsers] = useState([]);
//   const [show, setShow] = useState(false);
//   const [selectedUserId, setSelectedUserId] = useState(null);

//   const setUsersData = async () => {
//     let result = await fetch('https://homeessential-fdca5e469865.herokuapp.com/api/v1/data/liguser');
//     result = await result.json();
//     setUsers(result);
//     console.log(result);
//   };

//   useEffect(() => {
//     setUsersData();
//   }, []);

//   const handleDelete = async () => {
//     try {
//       let result = await fetch(`https://homeessential-fdca5e469865.herokuapp.com/api/v1/data/lighuserid/${selectedUserId}`, {
//         method: 'DELETE',
//       });
//       result = await result.json();
//       if (result) {
//         setUsersData();
//         setShow(false);
//       }
//     } catch (error) {
//       alert('Error in deleting data');
//     }
//   };

//   const handleShow = (id) => {
//     setSelectedUserId(id);
//     setShow(true);
//   };

//   const handleClose = () => setShow(false);

//   return (
//     <Container className='my-4'>
//       <h4 className='text-center text-warning display-4 fw-bold'>List of Lighter Products</h4>
//       <Link to='/lighterform'>
//         <Button variant='success' className='mb-2'>+ Add New Product</Button>
//       </Link>
//       <Table striped bordered hover responsive className='text-center'>
//         <thead className='table-dark'>
//           <tr>
//             <th>#</th>
//             <th>Name</th>
//             <th>Title</th>
//             <th>Price</th>
//             <th>Image</th>
//             <th>Operations</th>
//           </tr>
//         </thead>
//         <tbody>
//           {user.map((ele, ind) => (
//             <tr key={ele._id}>
//               <td>{ind + 1}</td>
//               <td>{ele.name}</td>
//               <td>{ele.title}</td>
//               <td>{ele.price}</td>
//               <td>
//                 {ele.image && (
//                   <img
//                     src={`https://homeessential-fdca5e469865.herokuapp.com/${ele.image}`}
//                     alt={ele.name}
//                     className='img-fluid'
//                     style={{ height: '70px', width: '100px' }}
//                   />
//                 )}
//               </td>
//               <td>
//                 <Link to={`/listlighter/${ele._id}`} className='btn btn-success me-2'>
//                   <i className='fas fa-edit'></i> Edit
//                 </Link>
//                 <Button variant='danger' onClick={() => handleShow(ele._id)}>
//                   <i className='fas fa-trash-alt'></i> Delete
//                 </Button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Confirm Deletion</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>Are you sure you want to delete this product?</Modal.Body>
//         <Modal.Footer>
//           <Button variant='secondary' onClick={handleClose}>
//             Cancel
//           </Button>
//           <Button variant='danger' onClick={handleDelete}>
//             Delete
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </Container>
//   );
// };

// export default Listoflighter;

import React, { useState, useEffect } from 'react';
import StaticListComponent from '../../../Staticlist'; // Adjust the path as needed
import { useNavigate } from 'react-router-dom';

const Listoflighter = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data here
    const fetchData = async () => {
      try {
        const response = await fetch('https://homeessential-fdca5e469865.herokuapp.com/api/v1/data/liguser');
        if (!response.ok) throw new Error('Network response was not ok');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await fetch(`https://homeessential-fdca5e469865.herokuapp.com/api/v1/data/lighuserid/${id}`, {
        method: 'DELETE',
      });
      setData(data.filter(item => item._id !== id));
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  const handleEdit = (id) => {
    // Handle edit logic here, if needed
  };

  return (
    <StaticListComponent
      data={data}
      onDelete={handleDelete}
      onEdit={handleEdit}
      editUrlBase='/listlighter'  // Set the base URL for editing
      addProductUrl='/lighterform'  // Set the URL for adding a new product
    />
  );
};

export default Listoflighter;


