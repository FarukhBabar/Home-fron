import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate(); // Use navigate for redirection

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://srv577826.hstgr.cloud:8001/orderuserde'); // Ensure this endpoint is correct
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  const handleDelete = async (orderId) => {
    if (window.confirm('Are you sure you want to delete this order?')) {
      try {
        await axios.delete(`http://srv577826.hstgr.cloud:8001/orderuserde/${orderId}`);
        setOrders(orders.filter(order => order._id !== orderId));
        alert('Order deleted successfully.');
      } catch (error) {
        console.error('Error deleting order:', error);
        alert('Failed to delete the order.');
      }
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Order List</h2>
      <Table striped bordered hover responsive className="order-table">
        <thead>
          <tr>
            <th>Order Number</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Items</th>
            <th>Total Amount</th>
            <th>Payment Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.length > 0 ? (
            orders.map((order) => (
              <tr key={order._id}>
                <td>{order.orderNumber}</td>
                <td>{order.email}</td>
                <td>{order.phone}</td>
                <td>{order.address}</td>
                <td>
                  <ul>
                    {order.cartItems.map((item, index) => (
                      <li key={index}>
                       { <img
                          src={`http://srv577826.hstgr.cloud:8001/${item.image.replace(/\\/g, '/')}`}
                          alt={item.name}
                          className="singleimg"
                          style={{ width: '80px', height: '80px' }}
                        />} {item.name} - ${item.price} (Qty: {item.qty})
                      </li>
                    ))}
                  </ul>
                </td>
                <td>${order.totalAmount ? order.totalAmount.toFixed(2) : '0.00'}</td>
                <td>{order.paymentStatus || 'Pending'}</td>
                <td>
                  <Button variant="warning" onClick={() => navigate(`/edit-order/${order._id}`)}>
                    Edit
                  </Button>
                  <Button variant="danger" onClick={() => handleDelete(order._id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="text-center">
                No orders available
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default OrderList;
