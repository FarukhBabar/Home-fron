import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const FoodForm = () => {
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

        if (!name || !title || !price || !image) {
            setNameError(!name);
            setTitleError(!title);
            setPriceError(!price);
            setImageError(!image);
            return;
        }

        const formData = new FormData();
        formData.append('name', name);
        formData.append('title', title);
        formData.append('price', price);
        formData.append('image', image);

        try {
            let result = await fetch("https://homeessential-fdca5e469865.herokuapp.com/api/v1/auth/Foodproducts", {
                method: "POST",
                body: formData
            });
            result = await result.json();
            if (result) {
                navigate("/listfood");
                alert("Product added successfully");
            } else {
                alert("Error in connection");
            }
        } catch (error) {
            console.error("ERROR IN DB", error);
            alert("Error in connection");
        }
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    return (
        <div className="container mt-5">
            <Link to="/listfood" className="btn btn-success mb-4">Product List</Link>
            <form className="p-4 shadow-lg rounded bg-white">
                <h2 className="mb-4 text-center">Add Food Product</h2>
                <div className="mb-3">
                    <label className="form-label">Item Name</label>
                    <input
                        type="text"
                        className={`form-control ${nameError ? 'is-invalid' : ''}`}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter Item Name"
                    />
                    {nameError && <div className="invalid-feedback">Please enter Item Name</div>}
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <input
                        type="text"
                        className={`form-control ${titleError ? 'is-invalid' : ''}`}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter Item Description"
                    />
                    {titleError && <div className="invalid-feedback">Please enter Item Description</div>}
                </div>
                <div className="mb-3">
                    <label className="form-label">Price</label>
                    <input
                        type="text"
                        className={`form-control ${priceError ? 'is-invalid' : ''}`}
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder="Enter Item Price"
                    />
                    {priceError && <div className="invalid-feedback">Please enter Item Price</div>}
                </div>
                <div className="mb-3">
                    <label className="form-label">Image</label>
                    <input
                        type="file"
                        className={`form-control ${imageError ? 'is-invalid' : ''}`}
                        onChange={handleImageChange}
                    />
                    {imageError && <div className="invalid-feedback">Please select an Image</div>}
                </div>
                <button type="submit" className="btn btn-success w-100" onClick={handleSubmit}>Add Product</button>
            </form>
        </div>
    );
}

export default FoodForm;
