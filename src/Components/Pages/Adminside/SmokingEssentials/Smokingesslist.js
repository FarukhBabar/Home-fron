import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button, Table, Container } from 'react-bootstrap';
import '../admin.css';

const Smokingesslist = () => {
  const [user, setUsers] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);

  const setUsersData = async () => {
    let result = await fetch('https://api.homeessentialshive.co.uk/api/v1/data/Smokuser');
    result = await result.json();
    setUsers(result);
    console.log(result);
  };

  useEffect(() => {
    setUsersData();
  }, []);

  const handleDelete = async () => {
    try {
      let result = await fetch(`https://api.homeessentialshive.co.uk/api/v1/data/Smokuserid/${selectedUserId}`, {
        method: 'DELETE',
      });
      result = await result.json();
      if (result) {
        setUsersData();
        setShow(false);
      }
    } catch (error) {
      alert('Error in deleting data');
    }
  };

  const handleShow = (id) => {
    setSelectedUserId(id);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  return (
    <Container className='my-4'>
      <h4 className='text-center text-warning display-4 fw-bold'>List of SmokingEssentials Products</h4>
      <Link to='/essionaform'>
        <Button variant='success' className='mb-2'>+ Add New Product</Button>
      </Link>
      <Table striped bordered hover responsive className='text-center'>
        <thead className='table-dark'>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Title</th>
            <th>Price</th>
            <th>Image</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {user.map((ele, ind) => (
            <tr key={ele._id}>
              <td>{ind + 1}</td>
              <td>{ele.name}</td>
             <td dangerouslySetInnerHTML={{ __html: ele.title }}></td>
              <td>{ele.price}</td>
              <td>
                {ele.image && (
                  <img
                    src={`https://api.homeessentialshive.co.uk/${ele.image}`}
                    alt={ele.name}
                    className='img-fluid'
                    style={{ height: '70px', width: '100px' }}
                  />
                )}
              </td>
              <td>
                <Link to={`/listsmokigess/${ele._id}`} className='btn btn-success me-2'>
                  <i className='fas fa-edit'></i> Edit
                </Link>
                <Button variant='danger' onClick={() => handleShow(ele._id)}>
                  <i className='fas fa-trash-alt'></i> Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this product?</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Cancel
          </Button>
          <Button variant='danger' onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Smokingesslist;
