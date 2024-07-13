import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../admin.css';

const Update = () => {
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState(null);
    let formData = new FormData();
    let params = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://homeessential-fdca5e469865.herokuapp.com/api/v1/auth/singale/${params.id}`);
                const result = await response.json();
                setName(result.name);
                setTitle(result.title);
                setPrice(result.price);
                setImage(result.image);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, [params.id]);

    const updateUser = async (e) => {
        e.preventDefault();
        formData.append('name', name);
        formData.append('price', price);
        formData.append('title', title);
        formData.append('image', image);

        try {
            let result = await fetch(`https://homeessential-fdca5e469865.herokuapp.com/api/v1/auth/singale/${params.id}`, {
                method: "put",
                body: formData
            });
            result = await result.json();
            if (result) {
                alert("Product updated successfully");
            } else {
                alert("Error in connection");
            }
        } catch (error) {
            console.error("Error updating data:", error);
        }
    };

    return (
        <div className="container mt-5">
            <form className="p-4 shadow-lg rounded" onSubmit={updateUser}>
                <h2 className="mb-4 text-center">Update Product</h2>
                <div className="mb-3">
                    <label className="form-label mt-2">Item Name</label>
                    <input 
                        type="text" 
                        className={`form-control ${!name ? 'is-invalid' : ''}`} 
                        name="name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        placeholder="Enter your Item name" 
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input 
                        type="text" 
                        className={`form-control ${!title ? 'is-invalid' : ''}`} 
                        name="title" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        placeholder="Enter your Item title" 
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Price</label>
                    <input 
                        type="text" 
                        className={`form-control ${!price ? 'is-invalid' : ''}`} 
                        name="price" 
                        value={price} 
                        onChange={(e) => setPrice(e.target.value)} 
                        placeholder="Enter your Item price" 
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Image</label>
                    <input 
                        type="text" 
                        className="form-control mb-2" 
                        name="image" 
                        value={image} 
                        onChange={(e) => setImage(e.target.value)} 
                        placeholder="Enter your Item image path or name" 
                    />
                    <input 
                        type="file" 
                        className="form-control" 
                        name="imageFile" 
                        onChange={(e) => setImage(e.target.files[0])} 
                    />
                </div>
                <button type="submit" className="btn btn-success w-100">Update Product</button>
            </form>
        </div>
    );
}

export default Update;
