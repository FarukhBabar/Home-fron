import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button, Form, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const UsersTable = () => {
    const [users, setUsers] = useState([]);
    const [editUserId, setEditUserId] = useState(null);
    const [formData, setFormData] = useState({});
    const [show, setShow] = useState(false);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://srv577826.hstgr.cloud:8001/users');
                setUsers(response.data);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchUsers();
    }, []);

    const handleDelete = async (userId) => {
        try {
            await axios.delete(`http://srv577826.hstgr.cloud:8001/users/${userId}`);
            setUsers(users.filter(user => user._id !== userId));
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    };

    const handleEditClick = (user) => {
        setEditUserId(user._id);
        setFormData({
            FirstName: user.FirstName,
            LastName: user.LastName,
            email: user.email,
            Address1: user.Address1,
            Address2: user.Address2,
            Address3: user.Address3,
            City: user.City,
            County: user.County,
            Postcode: user.Postcode,
            Country: user.Country,
            role: user.role
        });
        setShow(true);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://srv577826.hstgr.cloud:8001/users/${editUserId}`, formData);
            setUsers(users.map(user => (user._id === editUserId ? formData : user)));
            setEditUserId(null);
            setShow(false);
        } catch (error) {
            console.error("Error updating user:", error);
        }
    };

    const handleClose = () => {
        setShow(false);
        setFormData({});
        setEditUserId(null);
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Registered Users</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user._id}>
                            <td>{user.FirstName} {user.LastName}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td>
                                <Button variant="primary" onClick={() => handleEditClick(user)}>Edit</Button>{' '}
                                <Button variant="danger" onClick={() => handleDelete(user._id)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleUpdate}>
                        <Form.Group controlId="formFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" name="FirstName" value={formData.FirstName || ''} onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group controlId="formLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" name="LastName" value={formData.LastName || ''} onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name="email" value={formData.email || ''} onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group controlId="formAddress1">
                            <Form.Label>Address1</Form.Label>
                            <Form.Control type="text" name="Address1" value={formData.Address1 || ''} onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group controlId="formAddress2">
                            <Form.Label>Address2</Form.Label>
                            <Form.Control type="text" name="Address2" value={formData.Address2 || ''} onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group controlId="formAddress3">
                            <Form.Label>Address3</Form.Label>
                            <Form.Control type="text" name="Address3" value={formData.Address3 || ''} onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group controlId="formCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" name="City" value={formData.City || ''} onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group controlId="formCounty">
                            <Form.Label>County</Form.Label>
                            <Form.Control type="text" name="County" value={formData.County || ''} onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group controlId="formPostcode">
                            <Form.Label>Postcode</Form.Label>
                            <Form.Control type="text" name="Postcode" value={formData.Postcode || ''} onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group controlId="formCountry">
                            <Form.Label>Country</Form.Label>
                            <Form.Control type="text" name="Country" value={formData.Country || ''} onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group controlId="formRole">
                            <Form.Label>Role</Form.Label>
                            <Form.Control as="select" name="role" value={formData.role || ''} onChange={handleInputChange}>
                                <option disabled value="">Select Role</option>
                                <option value="admin">admin</option>
                                <option value="user">user</option>
                            </Form.Control>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Update
                        </Button>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancel
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default UsersTable;
