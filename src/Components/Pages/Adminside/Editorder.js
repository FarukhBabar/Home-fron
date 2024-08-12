import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

const EditOrder = () => {
  const { id } = useParams();
  const [order, setOrder] = useState({
    orderNumber: '',
    email: '',
    phone: '',
    address: '',
    totalAmount: '',
    paymentStatus: ''
  });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await axios.get(`https://api.homeessentialshive.co.uk/orderuserde/${id}`);
        setOrder(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching order:', error);
        setLoading(false); // Ensure loading is set to false even if there's an error
        alert('Failed to fetch order details.'); // Notify the user if there's an issue
      }
    };

    fetchOrder();
  }, [id]);

  const handleChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://api.homeessentialshive.co.uk/orderuserde/${id}`, order);
      alert('Order updated successfully.');
      navigate('/oderslist'); // Redirect to the order list
    } catch (error) {
      console.error('Error updating order:', error);
      alert('Failed to update the order.');
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Edit Order</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formOrderNumber">
          <Form.Label>Order Number</Form.Label>
          <Form.Control
            type="text"
            name="orderNumber"
            value={order.orderNumber || ''}
            onChange={handleChange}
            readOnly // Make the order number read-only
            required
          />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={order.email || ''}
            onChange={handleChange}
            readOnly // Make email read-only
            required
          />
        </Form.Group>
        <Form.Group controlId="formPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            name="phone"
            value={order.phone || ''}
            onChange={handleChange}
            readOnly // Make phone read-only
            required
          />
        </Form.Group>
        <Form.Group controlId="formAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            name="address"
            value={order.address || ''}
            onChange={handleChange}
            readOnly // Make address read-only
            required
          />
        </Form.Group>
        <Form.Group controlId="formTotalAmount">
          <Form.Label>Total Amount</Form.Label>
          <Form.Control
            type="number"
            step="0.01"
            name="totalAmount"
            value={order.totalAmount || ''}
            onChange={handleChange}
            readOnly // Make total amount read-only
            required
          />
        </Form.Group>
        <Form.Group controlId="formPaymentStatus">
          <Form.Label>Payment Status</Form.Label>
          <Form.Control
            type="text"
            name="paymentStatus"
            value={order.paymentStatus || ''}
            onChange={handleChange}
            required // Allow admin to edit payment status
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Save Changes
        </Button>
      </Form>
    </div>
  );
};

export default EditOrder;
