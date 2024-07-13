import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../admin.css';

const NewForm = () => {
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

      const response = await fetch('https://homeessential-fdca5e469865.herokuapp.com/api/v1/auth/Newarrivals', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      if (result) {
        navigate('/newarrivals');
        alert('Product added successfully');
      } else {
        alert('Error in connection');
      }
    } catch (error) {
      console.error('Error in DB:', error);
      alert('Error in connection');
    }
  };

  return (
    <div className="container mt-5">
      <Link to="/listarr" className="btn btn-success mb-4">Product List</Link>
      <div className="card shadow p-4 bg-white rounded">
        <h2 className="mb-4 text-center">Add New Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Item Name</label>
            <input
              type="text"
              className={`form-control ${nameError ? 'is-invalid' : ''}`}
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Item Name"
            />
            {nameError && <div className="invalid-feedback">Please enter the item name</div>}
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <input
              type="text"
              className={`form-control ${titleError ? 'is-invalid' : ''}`}
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter Description"
            />
            {titleError && <div className="invalid-feedback">Please enter the description</div>}
          </div>
          <div className="mb-3">
            <label className="form-label">Price</label>
            <input
              type="text"
              className={`form-control ${priceError ? 'is-invalid' : ''}`}
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter Price"
            />
            {priceError && <div className="invalid-feedback">Please enter the price</div>}
          </div>
          <div className="mb-3">
            <label className="form-label">Image</label>
            <input
              type="file"
              className={`form-control ${imageError ? 'is-invalid' : ''}`}
              name="image"
              onChange={(e) => setImage(e.target.files[0])}
            />
            {imageError && <div className="invalid-feedback">Please upload an image</div>}
          </div>
          <button type="submit" className="btn btn-primary w-100">Add Product</button>
        </form>
      </div>
    </div>
  );
};

export default NewForm;
