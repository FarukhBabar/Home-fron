import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../admin.css';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import FroalaEditorComponent from 'react-froala-wysiwyg';

const Form = () => {
    const [Image, setImage] = useState(null);
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [ImageError, setImageError] = useState(false);
    const [nameError, setNameError] = useState(false);
    const [titleError, setTitleError] = useState(false);
    const [priceError, setPriceError] = useState(false);
    const navigate = useNavigate();

    const handleDescriptionChange = (model) => {
        setTitle(model);
    };

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
            let result = await fetch("https://homeessential-fdca5e469865.herokuapp.com/api/v1/auth/freedel", {
                method: "post",
                body: formData
            });
            result = await result.json();
            if (result) {
                navigate("/adminsunday");
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
            <Link to="/adminpanal" className="btn btn-success mb-4">Product List</Link>
            <h2 className="mb-4 text-center">Add SundayOffer Product</h2>
            <form className="p-4 shadow-lg rounded" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label mt-2">Item Name</label>
                    <input 
                        type="text" 
                        className={`form-control ${nameError ? 'is-invalid' : ''}`} 
                        name="name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        placeholder="Enter your Item name" 
                    />
                    {nameError && <div className="invalid-feedback">Please enter your name</div>}
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <FroalaEditorComponent
                        tag="textarea"
                        model={title}
                        onModelChange={handleDescriptionChange}
                    />
                    {titleError && <div className="invalid-feedback">Please enter your title</div>}
                </div>
                <div className="mb-3">
                    <label className="form-label">Price</label>
                    <input 
                        type="text" 
                        className={`form-control form-control-lg ${priceError ? 'is-invalid' : ''}`} 
                        name="price" 
                        value={price} 
                        onChange={(e) => setPrice(e.target.value)} 
                        placeholder="Enter your Item price" 
                    />
                    {priceError && <div className="invalid-feedback">Please enter your price</div>}
                </div>
                <div className="mb-3">
                    <label className="form-label">Image</label>
                    <input 
                        type="file" 
                        className={`form-control form-control-lg ${ImageError ? 'is-invalid' : ''}`} 
                        name="Image" 
                        onChange={(e) => setImage(e.target.files[0])} 
                    />
                    {ImageError && <div className="invalid-feedback">Please upload an image</div>}
                </div>
                <button type="submit" className="btn btn-success w-100">Add Product</button>
            </form>
        </div>
    );
}

export default Form;
