import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../admin.css";

const Smokingessform = () => {
  const [Image, setImage] = useState(null);
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [ImageError, setImageError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [titleError, setTitleError] = useState(false);
  const [priceError, setPriceError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append('name', name);
    formData.append('title', title);
    formData.append('price', price);
    formData.append('image', Image);

    if (!name || !title || !price || !Image) {
      if (!name) setNameError(true);
      if (!title) setTitleError(true);
      if (!price) setPriceError(true);
      if (!Image) setImageError(true);
      return;
    }

    try {
      let result = await fetch("https://homeessential-fdca5e469865.herokuapp.com/api/v1/auth/smokinproducts", {
        method: "post",
        body: formData,
      });
      result = await result.json();
      if (result) {
        navigate("/listsmokigess");
        alert("Product added successfully");
      } else {
        alert("Error in connection");
      }
    } catch (error) {
      console.log("ERROR IN DB");
    }
  };

  return (
    <div className="container mt-5">
      <Link to="/listsmokingess" className="btn btn-success mb-4">Product List</Link>
      <form className="p-4 shadow-lg rounded bg-white" onSubmit={handleSubmit}>
        <h2 className="mb-4 text-center">Add Smoking Essentials Product</h2>
        <div className="mb-3">
          <label className="form-label">Item Name</label>
          <input
            type="text"
            className={`form-control ${nameError ? 'is-invalid' : ''}`}
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your Item name"
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
            placeholder="Enter your Item title"
          />
          {titleError && <div className="invalid-feedback">Please enter the item title</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            type="text"
            className={`form-control ${priceError ? 'is-invalid' : ''}`}
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter your Item price"
          />
          {priceError && <div className="invalid-feedback">Please enter the item price</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">Image</label>
          <input
            type="file"
            className={`form-control ${ImageError ? 'is-invalid' : ''}`}
            name="Image"
            onChange={(e) => setImage(e.target.files[0])}
          />
          {ImageError && <div className="invalid-feedback">Please upload an image</div>}
        </div>
        <button type="submit" className="btn btn-success w-100">Add Product</button>
      </form>
    </div>
  );
};

export default Smokingessform;
