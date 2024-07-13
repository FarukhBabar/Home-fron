import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Table, Button, Modal } from 'react-bootstrap';

const Listoffoods = () => {
    const [users, setUsers] = useState([]);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedUserId, setSelectedUserId] = useState(null);

    const setUsersData = async () => {
        try {
            let result = await fetch("https://homeessential-fdca5e469865.herokuapp.com/api/v1/data/fooduser");
            result = await result.json();
            setUsers(result);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        setUsersData();
    }, []);

    const deleteProduct = async (id) => {
        try {
            let result = await fetch(`https://homeessential-fdca5e469865.herokuapp.com/api/v1/data/fooduserid/${id}`, {
                method: "DELETE"
            });
            result = await result.json();
            if (result) {
                setUsersData();
                setShowDeleteModal(false);
            }
        } catch (error) {
            console.error("Error deleting product:", error);
            alert("Error in deleting product");
        }
    };

    const handleShowDeleteModal = (id) => {
        setSelectedUserId(id);
        setShowDeleteModal(true);
    };

    const handleCloseDeleteModal = () => setShowDeleteModal(false);

    return (
        <Container className="my-5">
            <h4 className="my-4 text-center text-warning display-4 fw-bold">List of Foods Products</h4>
            <Link to="/foodform">
                <Button variant="success" className="mb-2">+ Add New Product</Button>
            </Link>
            <div className="table-responsive">
                <Table striped bordered hover responsive className="text-center">
                    <thead className="table-dark">
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
                        {users.map((user, index) => (
                            <tr key={user._id}>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.title}</td>
                                <td>{user.price}</td>
                                <td>
                                    {user.image && (
                                        <img
                                            src={`https://homeessential-fdca5e469865.herokuapp.com/${user.image}`}
                                            alt={user.name}
                                            className="img-fluid"
                                            style={{ height: '70px', width: '100px' }}
                                        />
                                    )}
                                </td>
                                <td>
                                    <Link to={`/listfood/${user._id}`} className="btn btn-success me-2">
                                        Edit
                                    </Link>
                                    <Button variant="danger" onClick={() => handleShowDeleteModal(user._id)}>
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>

            {/* Delete confirmation modal */}
            <Modal show={showDeleteModal} onHide={handleCloseDeleteModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Deletion</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this product?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseDeleteModal}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={() => deleteProduct(selectedUserId)}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default Listoffoods;
