import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../admin.css"

const Lighterform = () => {
  const [Image, setImage] = useState(null)
  const [name, setName] = useState('')
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [ImageError, setImageError] = useState(false)
  const [nameError, setNameError] = useState(false)
  const [titleError, setTitleError] = useState(false)
  const [priceError, setPriceError] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    let formdata = new FormData()
    formdata.append('name', name)
    formdata.append('title', title)
    formdata.append('price', price)
    formdata.append('image', Image)

    if (!name || !title || !price || !Image) {
      if (!name) setNameError(true)
      if (!title) setTitleError(true)
      if (!price) setPriceError(true)
      if (!Image) setImageError(true)
      return
    }

    try {
      let result = await fetch("https://homeessential-fdca5e469865.herokuapp.com/api/v1/auth/ligproducts", {
        method: "post",
        body: formdata
      })
      result = await result.json()
      if (result) {
        navigate("/lighterform")
        alert("Product added successfully")
      } else {
        alert("Error in connection")
      }
    } catch (error) {
      console.log("ERROR IN DB")
    }
  }

  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Add New Lighter Product</h2>
        <Link to="/listlighter" className="btn btn-primary">Product List</Link>
      </div>
      <form onSubmit={handleSubmit} className="p-4 border rounded bg-light">
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
          {titleError && <div className="invalid-feedback">Please enter the item description</div>}
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
            placeholder="Upload your Item image"
          />
          {ImageError && <div className="invalid-feedback">Please upload an image</div>}
        </div>
        <button type="submit" className="btn btn-success">Add Product</button>
      </form>
    </div>
  )
}

export default Lighterform
