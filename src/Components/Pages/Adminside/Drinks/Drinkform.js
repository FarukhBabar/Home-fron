import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Drinkform = () => {
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

        // Form data validation
        if (!name || !title || !price || !Image) {
            setNameError(!name);
            setTitleError(!title);
            setPriceError(!price);
            setImageError(!Image);
            return;
        }

        const formData = new FormData();
        formData.append('name', name);
        formData.append('title', title);
        formData.append('price', price);
        formData.append('image', Image);

        try {
            let result = await fetch("https://homeessential-fdca5e469865.herokuapp.com/api/v1/auth/driproducts", {
                method: "POST",
                body: formData
            });
            result = await result.json();
            if (result) {
                navigate("/listdrink");
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
            <Link to="/listdrink" className="btn btn-success mb-4">Product List</Link>
            <form className="p-4 shadow-lg rounded bg-white">
                <h2 className="mb-4 text-center">Add Drink Product</h2>
                <div className="mb-3">
                    <label className="form-label mt-2">Item Name</label>
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
                        className={`form-control ${ImageError ? 'is-invalid' : ''}`}
                        onChange={handleImageChange}
                    />
                    {ImageError && <div className="invalid-feedback">Please select an Image</div>}
                </div>
                <button type="submit" className="btn btn-success w-100" onClick={handleSubmit}>Add Product</button>
            </form>
        </div>
    );
}

export default Drinkform;
