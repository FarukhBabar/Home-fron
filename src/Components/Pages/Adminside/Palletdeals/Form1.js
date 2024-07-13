import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';
import '../admin.css';

const Form1 = () => {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);

  const [nameError, setNameError] = useState(false);
  const [titleError, setTitleError] = useState(false);
  const [priceError, setPriceError] = useState(false);
  const [imageError, setImageError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form validation
    if (!name || !title || !price || !image) {
      setNameError(!name);
      setTitleError(!title);
      setPriceError(!price);
      setImageError(!image);
      return;
    }

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('title', title);
      formData.append('price', price);
      formData.append('image', image);

      const response = await fetch('https://homeessential-fdca5e469865.herokuapp.com/api/v1/auth/pallet', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      if (result) {
        navigate('/pallet');
        alert('Product added successfully');
      } else {
        alert('Error adding product');
      }
    } catch (error) {
      console.error('Error in DB:', error);
      alert('Error in connection');
    }
  };

  return (
    <Container className="my-5">
      <Link to="/listpal" className="btn btn-success mb-3">
        Product List
      </Link>
      <h2 className="mb-4 text-center">Add Pallets Product</h2>
      <Form className="custom-form" onSubmit={handleSubmit}>
         
        <Form.Group className="mb-3">
          <Form.Label>Item Name</Form.Label>
          <Form.Control
            type="text"
            className={`form-control ${nameError ? 'is-invalid' : ''}`}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your Item name"
          />
          {nameError && <Form.Control.Feedback type="invalid">Please enter item name</Form.Control.Feedback>}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            className={`form-control ${titleError ? 'is-invalid' : ''}`}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter your Item description"
          />
          {titleError && <Form.Control.Feedback type="invalid">Please enter item description</Form.Control.Feedback>}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="text"
            className={`form-control ${priceError ? 'is-invalid' : ''}`}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter your Item price"
          />
          {priceError && <Form.Control.Feedback type="invalid">Please enter item price</Form.Control.Feedback>}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="file"
            className={`form-control ${imageError ? 'is-invalid' : ''}`}
            onChange={(e) => setImage(e.target.files[0])}
          />
          {imageError && <Form.Control.Feedback type="invalid">Please upload item image</Form.Control.Feedback>}
        </Form.Group>
        <Button variant="success" type="submit">
          Add Product
        </Button>
      </Form>
    </Container>
    
  );
};

export default Form1;
